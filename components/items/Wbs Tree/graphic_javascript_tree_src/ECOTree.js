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
|       - Nodes can include a title and an hyperlink, and a hidden metadata.
|       - Subtrees can be collapsed and expanded at will.
|       - Single and Multiple selection modes.
|       - Search nodes using title and metadata as well.     
|     
|     This code is free source, but you will be kind if you don't distribute modified versions
|     with the same name, to avoid version collisions. Otherwise, please hack it!
|
|     References:
|                                                                
|     Walker II, J. Q., "A Node-Positioning Algorithm for General Trees"
|	     			   Software � Practice and Experience 10, 1980 553-561.    
|                      (Obtained from C++ User's journal. Feb. 1991)                                                                              
|					   
|     Last updated: October 26th, 2006
|     Version: 1.0
\------------------------------------------------------------------------------------------*/

ECONode = function (id, pid, Descripcion, Ancho, Alto, c, bc, target, meta) {
	/**
	* Constructor de Econode	
	* Param {Number} id, identificador unico del nodo.
	* Param {Number} pid, identificador unico del padre del nodo id.
	* Param {String} Descripcion, descripcion del nodo
	* Param {Number} w, define el ancho del nodo
	* Param {Number} Alto, define el alto del nodo
	* Param {Number} c Color de nodo.
	* Param {Number} bc Color del borde del nodo.
	* Param {?} target, 
	* Param {?} meta, 
	*/
	this.id = id;
	this.pid = pid;
	this.Descripcion = Descripcion;
	this.Ancho = Ancho;
	this.Alto = Alto;
	this.c = c;
	this.bc = bc;
	this.target = target;
	this.meta = meta;
	
	this.siblingIndex = 0;
	this.dbIndex = 0;
	
	this.PosCajitaX = 0;
	this.YPosition = 0;
	this.prelim = 0;
	this.modifier = 0;
	this.leftNeighbor = null;
	this.rightNeighbor = null;
	this.Padre = null;					//[obj]referencia al nodo padre, al objeto 
	this.nodeChildren = [];
	this.isCollapsed = false;
	this.canCollapse = false;
	this.isSelected = false;
}

ECONode.prototype._getLevel = function () {
	if (this.Padre.id == -1) {return 0;}
	else return this.Padre._getLevel() + 1;
}

ECONode.prototype._isAncestorCollapsed = function () {
	if (this.Padre.isCollapsed) { return true; }
	else 
	{
		if (this.Padre.id == -1) { return false; }
		else	{ return this.Padre._isAncestorCollapsed(); }
	}
}

ECONode.prototype._setAncestorsExpanded = function () {
	if (this.Padre.id == -1) { return; }
	else 
	{
		this.Padre.isCollapsed = false;
		return this.Padre._setAncestorsExpanded(); 
	}	
}

ECONode.prototype._getChildrenCount = function () {
	if (this.isCollapsed) return 0;
    if(this.nodeChildren == null)
        return 0;
    else
        return this.nodeChildren.length;
}

ECONode.prototype._getLeftSibling = function () {
    if(this.leftNeighbor != null && this.leftNeighbor.Padre == this.Padre)
        return this.leftNeighbor;
    else
        return null;	
}

ECONode.prototype._getRightSibling = function () {
    if(this.rightNeighbor != null && this.rightNeighbor.Padre == this.Padre)
        return this.rightNeighbor;
    else
        return null;	
}

ECONode.prototype._getChildAt = function (i) {
	return this.nodeChildren[i];
}

ECONode.prototype._getChildrenCenter = function (tree) {
    node = this._getFirstChild();
    node1 = this._getLastChild();
    return node.prelim + ((node1.prelim - node.prelim) + tree._getNodeSize(node1)) / 2;	
}

ECONode.prototype._getFirstChild = function () {
	return this._getChildAt(0);
}

ECONode.prototype._getLastChild = function () {
	return this._getChildAt(this._getChildrenCount() - 1);
}

ECONode.prototype._drawChildrenLinks = function (tree) {
	var s = [];
	var xa = 0, ya = 0, xb = 0, yb = 0, xc = 0, yc = 0, xd = 0, yd = 0;
	var node1 = null;
	
	switch(tree.config.iRootOrientation)
	{
		case ECOTree.RO_TOP:
			xa = this.PosCajitaX + (this.Ancho / 2);
			ya = this.YPosition + this.Alto;
			break;
			
		case ECOTree.RO_BOTTOM:
			xa = this.PosCajitaX + (this.Ancho / 2);
			ya = this.YPosition;
			break;
			
		case ECOTree.RO_RIGHT:
			xa = this.PosCajitaX;
			ya = this.YPosition + (this.Alto / 2);		
			break;
			
		case ECOTree.RO_LEFT:
			xa = this.PosCajitaX + this.Ancho;
			ya = this.YPosition + (this.Alto / 2);		
			break;		
	}
	
	for (var k = 0; k < this.nodeChildren.length; k++)
	{
		node1 = this.nodeChildren[k];
				
		switch(tree.config.iRootOrientation)
		{
			case ECOTree.RO_TOP:
				xd = xc = node1.PosCajitaX + (node1.Ancho / 2);
				yd = node1.YPosition;
				xb = xa;
				switch (tree.config.iNodeJustification)
				{
					case ECOTree.NJ_TOP:
						yb = yc = yd - tree.config.iLevelSeparation / 2;
						break;
					case ECOTree.NJ_BOTTOM:
						yb = yc = ya + tree.config.iLevelSeparation / 2;
						break;
					case ECOTree.NJ_CENTER:
						yb = yc = ya + (yd - ya) / 2;
						break;
				}
				break;
				
			case ECOTree.RO_BOTTOM:
				xd = xc = node1.PosCajitaX + (node1.Ancho / 2);
				yd = node1.YPosition + node1.Alto;
				xb = xa;
				switch (tree.config.iNodeJustification)
				{
					case ECOTree.NJ_TOP:
						yb = yc = yd + tree.config.iLevelSeparation / 2;
						break;
					case ECOTree.NJ_BOTTOM:
						yb = yc = ya - tree.config.iLevelSeparation / 2;
						break;
					case ECOTree.NJ_CENTER:
						yb = yc = yd + (ya - yd) / 2;
						break;
				}				
				break;

			case ECOTree.RO_RIGHT:
				xd = node1.PosCajitaX + node1.Ancho;
				yd = yc = node1.YPosition + (node1.Alto / 2);	
				yb = ya;
				switch (tree.config.iNodeJustification)
				{
					case ECOTree.NJ_TOP:
						xb = xc = xd + tree.config.iLevelSeparation / 2;
						break;
					case ECOTree.NJ_BOTTOM:
						xb = xc = xa - tree.config.iLevelSeparation / 2;
						break;
					case ECOTree.NJ_CENTER:
						xb = xc = xd + (xa - xd) / 2;
						break;
				}								
				break;		
				
			case ECOTree.RO_LEFT:
				xd = node1.PosCajitaX;
				yd = yc = node1.YPosition + (node1.Alto / 2);		
				yb = ya;
				switch (tree.config.iNodeJustification)
				{
					case ECOTree.NJ_TOP:
						xb = xc = xd - tree.config.iLevelSeparation / 2;
						break;
					case ECOTree.NJ_BOTTOM:
						xb = xc = xa + tree.config.iLevelSeparation / 2;
						break;
					case ECOTree.NJ_CENTER:
						xb = xc = xa + (xd - xa) / 2;
						break;
				}								
				break;				
		}		
		
		
		switch(tree.render)
		{
			case "CANVAS":
				tree.ctx.save();
				tree.ctx.strokeStyle = tree.config.linkColor;
				tree.ctx.beginPath();			
				switch (tree.config.linkType)
				{
					case "M":						
						tree.ctx.moveTo(xa,ya);
						tree.ctx.lineTo(xb,yb);
						tree.ctx.lineTo(xc,yc);
						tree.ctx.lineTo(xd,yd);						
						break;
						
					case "B":
						tree.ctx.moveTo(xa,ya);
						tree.ctx.bezierCurveTo(xb,yb,xc,yc,xd,yd);	
						break;					
				}
				tree.ctx.stroke();
				tree.ctx.restore();
				break;
											
			case "VML":
				switch (tree.config.linkType)
				{
					case "M":
						s.push('<v:polyline points="');
						s.push(xa + ' ' + ya + ' ' + xb + ' ' + yb + ' ' + xc + ' ' + yc + ' ' + xd + ' ' + yd); 		
						s.push('" strokecolor="'+tree.config.linkColor+'"><v:fill on="false" /></v:polyline>');					
						break;
					case "B":
						s.push('<v:curve from="');
						s.push(xa + ' ' + ya + '" control1="' + xb + ' ' + yb + '" control2="' + xc + ' ' + yc + '" to="' + xd + ' ' + yd); 		
						s.push('" strokecolor="'+tree.config.linkColor+'"><v:fill on="false" /></v:curve>');					
						break;					
				}
				break;
				
		}			
	}	
	
	return s.join('');
}

ECOTree = function (obj, elm) {
	this.config = {
		iMaxDepth : 100,
		iLevelSeparation : 40,
		iSiblingSeparation : 40,
		iSubtreeSeparation : 80,
		iRootOrientation : ECOTree.RO_TOP,
		iNodeJustification : ECOTree.NJ_TOP,
		topXAdjustment : 0,
		topYAdjustment : 0,		
		render : "CANVAS",
		linkType : "M",
		linkColor : "blue",
		nodeColor : "#CCCCFF",
		nodeFill : ECOTree.NF_GRADIENT,
		nodeBorderColor : "blue",
		nodeSelColor : "#FFFFCC",
		levelColors : ["#5555FF","#8888FF","#AAAAFF","#CCCCFF"],
		levelBorderColors : ["#5555FF","#8888FF","#AAAAFF","#CCCCFF"],
		colorStyle : ECOTree.CS_NODE,
		useTarget : true,
		searchMode : ECOTree.SM_DSC,
		selectMode : ECOTree.SL_MULTIPLE,
		defaultNodeWidth : 80,
		defaultNodeHeight : 40,
		defaultTarget : 'javascript:void(0);',
		expandedImage : './img/less.gif',
		collapsedImage : './img/plus.gif',
		transImage : './img/trans.gif'
	}
	
	this.version = "1.1";
	this.obj = obj;
	this.elm = document.getElementById(elm);
	this.self = this;
	this.render = (this.config.render == "AUTO" ) ? ECOTree._getAutoRenderMode() : this.config.render;
	this.ctx = null;
	this.canvasoffsetTop = 0;
	this.canvasoffsetLeft = 0;
	
	this.maxLevelHeight = [];
	this.maxLevelWidth = [];
	this.previousLevelNode = [];
	
	this.rootYOffset = 0;
	this.rootXOffset = 0;
	
	this.nodos = [];
	this.mapIDs = {};
	
	this.root = new ECONode(-1, null, null, 2, 2);				//se crea el nodo invisible que sirve de raiz en todo el arbol
	this.iSelectedNode = -1;
	this.iLastSearch = 0;
	
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

//Node fill type
ECOTree.NF_GRADIENT = 0;
ECOTree.NF_FLAT = 1;

//Colorizing style
ECOTree.CS_NODE = 0;
ECOTree.CS_LEVEL = 1;

//Search method: Title, metadata or both
ECOTree.SM_DSC = 0;
ECOTree.SM_META = 1;
ECOTree.SM_BOTH = 2;

//Selection mode: single, multiple, no selection
ECOTree.SL_MULTIPLE = 0;
ECOTree.SL_SINGLE = 1;
ECOTree.SL_NONE = 2;


ECOTree._getAutoRenderMode = function() {
	var r = "VML";
	var is_ie6 = /msie 6\.0/i.test(navigator.userAgent);
	var is_ff = /Firefox/i.test(navigator.userAgent);	
	if (is_ff) r = "CANVAS";
	return r;
}

//CANVAS functions...
ECOTree._roundedRect = function (ctx,x,y,width,height,radius) {
  ctx.beginPath();
  ctx.moveTo(x,y+radius);
  ctx.lineTo(x,y+height-radius);
  ctx.quadraticCurveTo(x,y+height,x+radius,y+height);
  ctx.lineTo(x+width-radius,y+height);
  ctx.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);
  ctx.lineTo(x+width,y+radius);
  ctx.quadraticCurveTo(x+width,y,x+width-radius,y);
  ctx.lineTo(x+radius,y);
  ctx.quadraticCurveTo(x,y,x,y+radius);
  ctx.fill();
  ctx.stroke();
}

ECOTree._canvasNodeClickHandler = function (tree,target,nodeid) {
	if (target != nodeid) return;
	tree.selectNode(nodeid,true);
}

//Layout algorithm
ECOTree._firstWalk = function (tree, node, level) {
		//console.log(node.id);
		var leftSibling = null;
        node.PosCajitaX = 0;
        node.YPosition = 0;
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
            var n = node._getChildrenCount();
			for(var i = 0; i < n; i++)
            {
                var iChild = node._getChildAt(i);
                ECOTree._firstWalk(tree, iChild, level + 1);
            }
			 
            var midPoint = node._getChildrenCenter(tree);
            midPoint -= tree._getNodeSize(node) / 2;
			 console.log('punto medio del nodo:'+node.id+" es:"+midPoint);
			if(node.id==3){
			  console.log("hola 3");
			}
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
console.log('Preliminar del nodo:'+node.id+" es:"+node.prelim);
console.log('Modificador del nodo:'+node.id+" es:"+node.modifier);		
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
                rightAncestor = rightAncestor.Padre;
                leftAncestor = leftAncestor.Padre;
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
        //console.log(tree);
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
	                node.YPosition = yTmp;
	                break;
	
	            case ECOTree.NJ_CENTER:
	                node.PosCajitaX = xTmp;
	                node.YPosition = yTmp + (maxsizeTmp - nodesizeTmp) / 2;
	                break;
	
	            case ECOTree.NJ_BOTTOM:
	                node.PosCajitaX = xTmp;
	                node.YPosition = (yTmp + maxsizeTmp) - nodesizeTmp;
	                break;
            }
            if(flag)
            {
                var swapTmp = node.PosCajitaX;
                node.PosCajitaX = node.YPosition;
                node.YPosition = swapTmp;
            }
            switch(tree.config.iRootOrientation)
            {
	            case ECOTree.RO_BOTTOM:
	                node.YPosition = -node.YPosition - nodesizeTmp;
	                break;
	
	            case ECOTree.RO_RIGHT:
	                node.PosCajitaX = -node.PosCajitaX - nodesizeTmp;
	                break;
            }
            if(node._getChildrenCount() != 0)
                ECOTree._secondWalk(tree, node._getFirstChild(), level + 1, X + node.modifier, Y + maxsizeTmp + tree.config.iLevelSeparation);
            var rightSibling = node._getRightSibling();
            if(rightSibling != null)
                ECOTree._secondWalk(tree, rightSibling, level, X, Y);
        }	
}

ECOTree.prototype._positionTree = function () {	
//funcion encargada de calcular las coordendas de los nodos.
	this.maxLevelHeight = [];		//array que indica la altura maxima de cada nivel
	this.maxLevelWidth = [];		//array que indica el ancho maximo de cada nivel		
	this.previousLevelNode = [];		
	ECOTree._firstWalk(this.self, this.root, 0);
	console.log("first walk result");
	console.log(this);
//si los nodos van a tener una orientacion diferente se aplica esa matematica aqui.	
	switch(this.config.iRootOrientation)
	{            
	    case ECOTree.RO_TOP:
	    case ECOTree.RO_LEFT: 
	    		this.rootXOffset = this.config.topXAdjustment + this.root.PosCajitaX;
	    		this.rootYOffset = this.config.topYAdjustment + this.root.YPosition;
	        break;    
	        
	    case ECOTree.RO_BOTTOM:	
	    case ECOTree.RO_RIGHT:             
	    		this.rootXOffset = this.config.topXAdjustment + this.root.PosCajitaX;
	    		this.rootYOffset = this.config.topYAdjustment + this.root.YPosition;
	}	
//se realiza la segunda pasada de todo el arbol.	
	ECOTree._secondWalk(this.self, this.root, 0, 0, 0);	
}

ECOTree.prototype._setLevelHeight = function (node, level) {
/*
Node: nodo que esta siendo procesado
level: nivel en el que se encuentra el nodo.
- si el valor maxLevelHeight[level] no esta aun definido se le asigna la altura del nodo,
- si el valor ya estaba definido se busca el mayor y este queda como valor.
*/	
	if (this.maxLevelHeight[level] == null) 
		this.maxLevelHeight[level] = 0;
    if(this.maxLevelHeight[level] < node.Alto)
        this.maxLevelHeight[level] = node.Alto;	
}

ECOTree.prototype._setLevelWidth = function (node, level) {
	if (this.maxLevelWidth[level] == null) 
		this.maxLevelWidth[level] = 0;
    if(this.maxLevelWidth[level] < node.Ancho)
        this.maxLevelWidth[level] = node.Ancho;		
}

ECOTree.prototype._setNeighbors = function(node, level) {
    node.leftNeighbor = this.previousLevelNode[level];
    if(node.leftNeighbor != null)
        node.leftNeighbor.rightNeighbor = node;
    this.previousLevelNode[level] = node;	
}

ECOTree.prototype._getNodeSize = function (node) {
    switch(this.config.iRootOrientation)
    {
    case ECOTree.RO_TOP: 
    case ECOTree.RO_BOTTOM: 
        return node.Ancho;

    case ECOTree.RO_RIGHT: 
    case ECOTree.RO_LEFT: 
        return node.Alto;
    }
    return 0;
}

ECOTree.prototype._getLeftmost = function (node, level, maxlevel) {
    if(level >= maxlevel) return node;
    if(node._getChildrenCount() == 0) return null;
    
    var n = node._getChildrenCount();
    for(var i = 0; i < n; i++)
    {
        var iChild = node._getChildAt(i);
        var leftmostDescendant = this._getLeftmost(iChild, level + 1, maxlevel);
        if(leftmostDescendant != null)
            return leftmostDescendant;
    }

    return null;	
}

ECOTree.prototype._selectNodeInt = function (dbindex, flagToggle) {
	if (this.config.selectMode == ECOTree.SL_SINGLE)
	{
		if ((this.iSelectedNode != dbindex) && (this.iSelectedNode != -1))
		{
			this.nodos[this.iSelectedNode].isSelected = false;
		}		
		this.iSelectedNode = (this.nodos[dbindex].isSelected && flagToggle) ? -1 : dbindex;
	}	
	this.nodos[dbindex].isSelected = (flagToggle) ? !this.nodos[dbindex].isSelected : true;	
}

ECOTree.prototype._collapseAllInt = function (flag) {
	var node = null;
	for (var n = 0; n < this.nodos.length; n++)
	{ 
		node = this.nodos[n];
		if (node.canCollapse) node.isCollapsed = flag;
	}	
	this.UpdateTree();
}

ECOTree.prototype._selectAllInt = function (flag) {
	var node = null;
	for (var k = 0; k < this.nodos.length; k++)
	{ 
		node = this.nodos[k];
		node.isSelected = flag;
	}	
	this.iSelectedNode = -1;
	this.UpdateTree();
}

ECOTree.prototype._drawTree = function () {
	var s = [];
	var node = null;
	var color = "";
	var border = "";
			
	for (var n = 0; n < this.nodos.length; n++)
	{ 
		node = this.nodos[n];
		
		switch (this.config.colorStyle) {
			case ECOTree.CS_NODE:
				color = node.c;
				border = node.bc;
				break;
			case ECOTree.CS_LEVEL:
				var iColor = node._getLevel() % this.config.levelColors.length;
				color = this.config.levelColors[iColor];
				iColor = node._getLevel() % this.config.levelBorderColors.length;
				border = this.config.levelBorderColors[iColor];
				break;
		}
		
		if (!node._isAncestorCollapsed())
		{
			switch (this.render)
			{
				case "CANVAS":
					//Canvas part...
					this.ctx.save();
					this.ctx.strokeStyle = border;
					switch (this.config.nodeFill) {
						case ECOTree.NF_GRADIENT:							
							var lgradient = this.ctx.createLinearGradient(node.PosCajitaX,0,node.PosCajitaX+node.Ancho,0);
							lgradient.addColorStop(0.0,((node.isSelected)?this.config.nodeSelColor:color));
							lgradient.addColorStop(1.0,"#F5FFF5");
							this.ctx.fillStyle = lgradient;
							break;
							
						case ECOTree.NF_FLAT:
							this.ctx.fillStyle = ((node.isSelected)?this.config.nodeSelColor:color);
							break;
					}					
					
					ECOTree._roundedRect(this.ctx,node.PosCajitaX,node.YPosition,node.Ancho,node.Alto,5);
					this.ctx.restore();
					
					//HTML part...
					s.push('<div id="' + node.id + '" class="econode" style="{top:'+(node.YPosition+this.canvasoffsetTop)+'; left:'+(node.PosCajitaX+this.canvasoffsetLeft)+'; width:'+node.Ancho+'; height:'+node.Alto+';}" ');
					if (this.config.selectMode != ECOTree.SL_NONE)											
						s.push('onclick="javascript:ECOTree._canvasNodeClickHandler('+this.obj+',event.target.id,\''+node.id+'\');" ');										
					s.push('>');
					s.push('<font face=Verdana size=1>');					
					if (node.canCollapse) {
						s.push('<a id="c' + node.id + '" href="javascript:'+this.obj+'.collapseNode(\''+node.id+'\', true);" >');
						s.push('<img border=0 src="'+((node.isCollapsed) ? this.config.collapsedImage : this.config.expandedImage)+'" >');							
						s.push('</a>');
						s.push('<img src="'+this.config.transImage+'" >');						
					}					
					if (node.target && this.config.useTarget)
					{
						s.push('<a id="t' + node.id + '" href="'+node.target+'">');
						s.push(node.Descripcion);
						s.push('</a>');
					}				
					else
					{						
						s.push(node.Descripcion);
					}
					s.push('</font>');
					s.push('</div>');		
					break;
					
				case "VML":
					s.push('<v:roundrect id="' + node.id + '" strokecolor="'+border+'" arcsize="0.18"	');
					s.push('style="position:absolute; top:'+node.YPosition+'; left:'+node.PosCajitaX+'; width:'+node.Ancho+'; height:'+node.Alto+'" ');
					if (this.config.selectMode != ECOTree.SL_NONE)
						s.push('href="javascript:'+this.obj+'.selectNode(\''+node.id+'\', true);" ');										
					s.push('>');
					s.push('<v:textbox inset="0.5px,0.5px,0.5px,0.5px" ><font face=Verdana size=1>');
					if (node.canCollapse) {
						s.push('<a href="javascript:'+this.obj+'.collapseNode(\''+node.id+'\', true);" >');
						s.push('<img border=0 src="'+((node.isCollapsed) ? this.config.collapsedImage : this.config.expandedImage)+'" >');							
						s.push('</a>');
						s.push('<img src="'+this.config.transImage+'" >');						
					}					
					if (node.target && this.config.useTarget)
					{
						s.push('<a href="'+node.target+'">');
						s.push(node.Descripcion);			
						s.push('</a>');	
					}				
					else
					{						
						s.push(node.Descripcion);									
					}
					s.push('</font></v:textbox>');											
					switch (this.config.nodeFill) {
						case ECOTree.NF_GRADIENT:
							s.push('<v:fill type=gradient color2="'+((node.isSelected)?this.config.nodeSelColor:color)+'" color="#F5FFF5" angle=90 />');	
							break;
						case ECOTree.NF_FLAT:
							s.push('<v:fill type="solid" color="'+((node.isSelected)?this.config.nodeSelColor:color)+'" />');	
							break;
					}
					s.push('<v:shadow type="single" on="true" opacity="0.7" />');					
					s.push('</v:roundrect>');																									
					break;
			}	
			if (!node.isCollapsed)	s.push(node._drawChildrenLinks(this.self));
		}
	}	
	return s.join('');	
}

ECOTree.prototype.toString = function () {	
//usando un truco de javascript que permite escrivir la funcion tostring se inicializa el dibujado del arbol. en esta funcion.

	console.log("to string why");
	var s = [];
	
	this._positionTree();
	console.log(this.nodos);
	
	switch (this.render)
	{
		case "CANVAS":
			s.push('<canvas id="ECOTreecanvas" width=5000 height=2000></canvas>');
			break;
			
		case "HTML":
			s.push('<div class="maindiv">');
			s.push(this._drawTree());
			s.push('</div>');
			break;
			
		case "VML":
			s.push('<v:group coordsize="10000, 10000" coordorigin="0, 0" style="position:absolute;width=10000px;height=10000px;" >');
			s.push(this._drawTree());
			s.push('</v:group>');
			break;
	}
	
	return s.join('');
}

// ECOTree API begins here...

ECOTree.prototype.UpdateTree = function () {	
	this.elm.innerHTML = this;				//call to custom toString function , to create and draw tree, this is a tip for draw and see documentation in.
											//http://blog.anselmbradford.com/2009/04/05/object-oriented-javascript-tip-overriding-tostring-for-readable-object-imprints/
	console.log("o my god");
	if (this.render == "CANVAS") {
		var canvas = document.getElementById("ECOTreecanvas");
		if (canvas && canvas.getContext)  {
			this.canvasoffsetLeft = canvas.offsetLeft;
			this.canvasoffsetTop = canvas.offsetTop;
			this.ctx = canvas.getContext('2d');
			var h = this._drawTree();	
			var r = this.elm.ownerDocument.createRange();
			r.setStartBefore(this.elm);
			var parsedHTML = r.createContextualFragment(h);								
			//this.elm.parentNode.insertBefore(parsedHTML,this.elm)
			//this.elm.parentNode.appendChild(parsedHTML);
			this.elm.appendChild(parsedHTML);
			//this.elm.insertBefore(parsedHTML,this.elm.firstChild);
		}
	}
}

ECOTree.prototype.add = function (id, pid, Descripcion, Ancho, Alto, c, bc, target, meta) {
	/** 
	* Param {Number} id, identificador unico del nodo.
	* Param {Number} pid, identificador unico del padre del nodo.
	* Param {String} Descripcion, descripcion del nodo
	* Param {Number} w, define el ancho del ancho del nodo
	* Param {Number} Alto, define el alto del nodo
	* Param {Number} c Color de nodo.
	* Param {Number} bc Color del borde del nodo.
	* Param {Number} target, 
	* Param {Number} meta, 
	*/
	console.log('add node'+Descripcion);
	var nw = Ancho || this.config.defaultNodeWidth; //Width, height, colors, target and metadata defaults...
	var nh = Alto || this.config.defaultNodeHeight;
	var color = c || this.config.nodeColor;
	var border = bc || this.config.nodeBorderColor;
	var tg = (this.config.useTarget) ? ((typeof target == "undefined") ? (this.config.defaultTarget) : target) : null;
	var metadata = (typeof meta != "undefined")	? meta : "";
	
	var pnode = null; //Search for parent node in database
	if (pid == -1) 
		{
			pnode = this.root;
		}
	else
		{
			for (var k = 0; k < this.nodos.length; k++)
			{
				if (this.nodos[k].id == pid)
				{
					pnode = this.nodos[k];				//buscando el objeto padre, localizado
					break;
				}
			}	
		}
	
	var node = new ECONode(id, pid, Descripcion, nw, nh, color, border, tg, metadata);	//crear el nodo nuevo
	
	node.Padre = pnode;  //Set it's parent
	pnode.canCollapse = true; //It's obvious that now the parent can collapse	
	var i = this.nodos.length;	//Save it in database
	node.dbIndex = this.mapIDs[id] = i;	 
	this.nodos[i] = node;	
	var h = pnode.nodeChildren.length; //Add it as child of it's parent
	node.siblingIndex = h;
	pnode.nodeChildren[h] = node;
}

ECOTree.prototype.searchNodes = function (str) {
	var node = null;
	var m = this.config.searchMode;
	var sm = (this.config.selectMode == ECOTree.SL_SINGLE);	 
	
	if (typeof str == "undefined") return;
	if (str == "") return;
	
	var found = false;
	var n = (sm) ? this.iLastSearch : 0;
	if (n == this.nodos.length) n = this.iLastSeach = 0;
	
	str = str.toLocaleUpperCase();
	
	for (; n < this.nodos.length; n++)
	{ 		
		node = this.nodos[n];				
		if (node.Descripcion.toLocaleUpperCase().indexOf(str) != -1 && ((m == ECOTree.SM_DSC) || (m == ECOTree.SM_BOTH))) { node._setAncestorsExpanded(); this._selectNodeInt(node.dbIndex, false); found = true; }
		if (node.meta.toLocaleUpperCase().indexOf(str) != -1 && ((m == ECOTree.SM_META) || (m == ECOTree.SM_BOTH))) { node._setAncestorsExpanded(); this._selectNodeInt(node.dbIndex, false); found = true; }
		if (sm && found) {this.iLastSearch = n + 1; break;}
	}	
	this.UpdateTree();	
}

ECOTree.prototype.selectAll = function () {
	if (this.config.selectMode != ECOTree.SL_MULTIPLE) return;
	this._selectAllInt(true);
}

ECOTree.prototype.unselectAll = function () {
	this._selectAllInt(false);
}

ECOTree.prototype.collapseAll = function () {
	this._collapseAllInt(true);
}

ECOTree.prototype.expandAll = function () {
	this._collapseAllInt(false);
}

ECOTree.prototype.collapseNode = function (nodeid, upd) {
	var dbindex = this.mapIDs[nodeid];
	this.nodos[dbindex].isCollapsed = !this.nodos[dbindex].isCollapsed;
	if (upd) this.UpdateTree();
}

ECOTree.prototype.selectNode = function (nodeid, upd) {		
	this._selectNodeInt(this.mapIDs[nodeid], true);
	if (upd) this.UpdateTree();
}

ECOTree.prototype.setNodeTitle = function (nodeid, title, upd) {
	var dbindex = this.mapIDs[nodeid];
	this.nodos[dbindex].Descripcion = title;
	if (upd) this.UpdateTree();
}

ECOTree.prototype.setNodeMetadata = function (nodeid, meta, upd) {
	var dbindex = this.mapIDs[nodeid];
	this.nodos[dbindex].meta = meta;
	if (upd) this.UpdateTree();
}

ECOTree.prototype.setNodeTarget = function (nodeid, target, upd) {
	var dbindex = this.mapIDs[nodeid];
	this.nodos[dbindex].target = target;
	if (upd) this.UpdateTree();	
}

ECOTree.prototype.setNodeColors = function (nodeid, color, border, upd) {
	var dbindex = this.mapIDs[nodeid];
	if (color) this.nodos[dbindex].c = color;
	if (border) this.nodos[dbindex].bc = border;
	if (upd) this.UpdateTree();	
}

ECOTree.prototype.getSelectedNodes = function () {
	var node = null;
	var selection = [];
	var selnode = null;	
	
	for (var n=0; n<this.nodos.length; n++) {
		node = this.nodos[n];
		if (node.isSelected)
		{			
			selnode = {
				"id" : node.id,
				"Descripcion" : node.Descripcion,
				"meta" : node.meta
			}
			selection[selection.length] = selnode;
		}
	}
	return selection;
}