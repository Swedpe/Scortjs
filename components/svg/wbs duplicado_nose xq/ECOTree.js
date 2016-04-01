/*-------------------------------------------------------------------------------------------
|     ECOTree.js
|--------------------------------------------------------------------------------------------
| (c) 2006 Emilio Cortegoso Lobato
|     
|     ECOTree is a javascript component for tree drawing. It implements the node positioning
|     algorithm of John Q. Walker II "Positioning nodes for General Trees".
|    
|     Basic features include:
|       - Layout features: Different node sizes, colors, link types, alignments, separations
|                          root node positions, etc...
|     
|     This code is free source, but you will be kind if you don't distribute modified versions
|     with the same name, to avoid version collisions. Otherwise, please hack it!
|
|     References:
|                                                                
|     Walker II, J. Q., "A Node-Positioning Algorithm for General Trees"
|	     			   Software — Practice and Experience 10, 1980 553-561.    
|                      (Obtained from C++ User's journal. Feb. 1991)                                                                              
|					   
|     Last updated: October 26th, 2006
|     Version: 1.0
\------------------------------------------------------------------------------------------*/
/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	ECOtree v 1.0 Adaptado para Usar en Scort JS
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com].
*/
ECOTree = function (WbsTree) {
	this.config = {
		iMaxDepth : 100,
		iLevelSeparation : 40,
		iSiblingSeparation : 40,
		iSubtreeSeparation : 80,
		iRootOrientation : ECOTree.RO_TOP,
		iNodeJustification : ECOTree.NJ_TOP,
		topXAdjustment : 0,
		topYAdjustment : 0,		
		defaultNodeWidth : 80,
		defaultNodeHeight : 40,
	}
	    //lectura del arbol wbs para copiar la configuracion al algoritmo
		for(var i in WbsTree.config) {
        if(this.config[i] != undefined) {
                this.config[i] = WbsTree.config[i];
        }
    }
	this.WbsTree = WbsTree;	
	this.version = "1.1";
	this.self = this;
	this.previousLevelNode = [];
	this.rootYOffset = 0;
	this.rootXOffset = 0;
	this.nodos = [];
	this.mapIDs = {};
	this.root = this.WbsTree.nodos[-1];				//se crea el nodo invisible que sirve de raiz en todo el arbol
}

//Constant values

//Tree orientation
ECOTree.RO_TOP = 0;
ECOTree.RO_BOTTOM = 1;
ECOTree.RO_RIGHT = 2;
ECOTree.RO_LEFT = 3;

//Level node alignment
ECOTree.NJ_TOP = 0;
ECOTree.NJ_CENTER = 1;
ECOTree.NJ_BOTTOM = 2;

//Layout algorithm
ECOTree._firstWalk = function (tree, node, level) {
		var leftSibling = null;
        node.PosCajitaX = 0;
        node.BasePosY = 0;
        node.prelim = 0;
        node.modifier = 0;
        node.leftNeighbor = null;
        node.rightNeighbor = null;
        tree._setLevelHeight(node, level);
        tree._setLevelWidth(node, level);		//
        tree._setNeighbors(node, level);		//se trabaja con el array previousLevelNode[level]
        if(node._getChildrenCount() == 0 || level == tree.config.iMaxDepth)
        {
            leftSibling = node._getLeftSibling();
            if(leftSibling != null)
                node.prelim = leftSibling.prelim + tree._getNodeSize(leftSibling) + tree.config.iSiblingSeparation;
            else
                node.prelim = 0;
        } 
        else
        {
            //var n = node._getChildrenCount();
            for(i in node.childsId)				//el iterador i siempre es 1
            {
                ECOTree._firstWalk(tree, node.tree.nodos[node.childsId[i]], level + 1);
            }

            var midPoint = node._getChildrenCenter(tree);
            midPoint -= tree._getNodeSize(node) / 2;
			leftSibling = node._getLeftSibling();
            if(leftSibling != null)
            {
                node.prelim = leftSibling.prelim + tree._getNodeSize(leftSibling) + tree.config.iSiblingSeparation;
                node.modifier = node.prelim - midPoint;
                ECOTree._apportion(tree, node, level);
            } 
            else
            {            	
                node.prelim = midPoint;
            }
        }
		console.log('nodo'+node.id);
		console.log(node)		
}

ECOTree._apportion = function (tree, node, level) {
        var firstChild = node._getFirstChild();
        var firstChildLeftNeighbor = firstChild.leftNeighbor;
        var j = 1;
        for(var k = tree.config.iMaxDepth - level; firstChild != null && firstChildLeftNeighbor != null && j <= k;)
        {
            var modifierSumRight = 0;
            var modifierSumLeft = 0;
            var rightAncestor = firstChild;
            var leftAncestor = firstChildLeftNeighbor;
            for(var l = 0; l < j; l++)
            {
			rightAncestor = tree.nodos[rightAncestor.idp];
                leftAncestor = tree.nodos[leftAncestor.idp];
                modifierSumRight += rightAncestor.modifier;
                modifierSumLeft += leftAncestor.modifier;
            }

            var totalGap = (firstChildLeftNeighbor.prelim + modifierSumLeft + tree._getNodeSize(firstChildLeftNeighbor) + tree.config.iSubtreeSeparation) - (firstChild.prelim + modifierSumRight);
            if(totalGap > 0)
            {
                var subtreeAux = node;
                var numSubtrees = 0;
                for(; subtreeAux != null && subtreeAux != leftAncestor; subtreeAux = subtreeAux._getLeftSibling())
                    numSubtrees++;

                if(subtreeAux != null)
                {
                    var subtreeMoveAux = node;
                    var singleGap = totalGap / numSubtrees;
                    for(; subtreeMoveAux != leftAncestor; subtreeMoveAux = subtreeMoveAux._getLeftSibling())
                    {
                        subtreeMoveAux.prelim += totalGap;
                        subtreeMoveAux.modifier += totalGap;
                        totalGap -= singleGap;
                    }

                }
            }
            j++;
            if(firstChild._getChildrenCount() == 0)
                firstChild = tree._getLeftmost(node, 0, j);
            else
                firstChild = firstChild._getFirstChild();
            if(firstChild != null)
                firstChildLeftNeighbor = firstChild.leftNeighbor;
        }
}

ECOTree._secondWalk = function (tree, node, level, X, Y) {
        if(level <= tree.config.iMaxDepth)
        {
            var xTmp = tree.rootXOffset + node.prelim + X;
            var yTmp = tree.rootYOffset + Y;
            var maxsizeTmp = 0;
            var nodesizeTmp = 0;
            var flag = false;
            
            switch(tree.config.iRootOrientation)
            {            
	            case ECOTree.RO_TOP:
	            case ECOTree.RO_BOTTOM:	        	            	    	
	                maxsizeTmp = tree.maxLevelHeight[level];
	                nodesizeTmp = node.Alto;	                
	                break;

	            case ECOTree.RO_RIGHT:
	            case ECOTree.RO_LEFT:            
	                maxsizeTmp = tree.maxLevelWidth[level];
	                flag = true;
	                nodesizeTmp = node.Ancho;
	                break;
            }
            switch(tree.config.iNodeJustification)
            {
	            case ECOTree.NJ_TOP:
	                node.PosCajitaX = xTmp;
	                node.BasePosY = yTmp;
	                break;
	
	            case ECOTree.NJ_CENTER:
	                node.PosCajitaX = xTmp;
	                node.BasePosY = yTmp + (maxsizeTmp - nodesizeTmp) / 2;
	                break;
	
	            case ECOTree.NJ_BOTTOM:
	                node.PosCajitaX = xTmp;
	                node.BasePosY = (yTmp + maxsizeTmp) - nodesizeTmp;
	                break;
            }
            if(flag)
            {
                var swapTmp = node.PosCajitaX;
                node.PosCajitaX = node.BasePosY;
                node.BasePosY = swapTmp;
            }
            switch(tree.config.iRootOrientation)
            {
	            case ECOTree.RO_BOTTOM:
	                node.BasePosY = -node.BasePosY - nodesizeTmp;
	                break;
	
	            case ECOTree.RO_LEFT:
	                node.PosCajitaX = -node.PosCajitaX - nodesizeTmp;
	                break;
            }
            if(node._getChildrenCount() != 0)
                ECOTree._secondWalk(tree, node._getFirstChild(), level + 1, X + node.modifier, Y + maxsizeTmp + tree.config.iLevelSeparation);
            var rightSibling = node._getRightSibling();
            if(rightSibling != null)
                ECOTree._secondWalk(tree, rightSibling, level, X, Y);
        }
		if(tree.nodoDerechaMax.PosCajitaX < node.PosCajitaX){
			tree.nodoDerechaMax = node; 
		}
		if(tree.nodoizquierdaMax.PosCajitaX > node.PosCajitaX){
			tree.nodoizquierdaMax = node; 
		}
}

ECOTree.prototype._positionTree = function (tree,root) {	
//funcion encargada de calcular las coordendas de los nodos.
	tree.maxLevelHeight = [];		//array que indica la altura maxima de cada nivel
	tree.maxLevelWidth = [];		//array que indica el ancho maximo de cada nivel		
	tree.previousLevelNode = [];		
	ECOTree._firstWalk(tree, this.root, 0);
//si los nodos van a tener una orientacion diferente se aplica esa matematica aqui.	
	switch(this.config.iRootOrientation)
	{            
	    case ECOTree.RO_TOP:
	    case ECOTree.RO_LEFT: 
	    		this.rootXOffset = this.config.topXAdjustment + this.root.PosCajitaX;
	    		this.rootYOffset = this.config.topYAdjustment + this.root.BasePosY;
	        break;    
	        
	    case ECOTree.RO_BOTTOM:	
	    case ECOTree.RO_RIGHT:             
	    		this.rootXOffset = this.config.topXAdjustment + this.root.PosCajitaX;
	    		this.rootYOffset = this.config.topYAdjustment + this.root.BasePosY;
	}	
//se realiza la segunda pasada de todo el arbol.	
	ECOTree._secondWalk(tree, this.root, 0, 0, 0);	
}

