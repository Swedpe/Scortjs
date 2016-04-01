/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	WBSTree v 1.0 - a jQuery Ui extension
	Licences: MIT & GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com].
*/
Components.WBSTree.prototype.init = function(dataObj) {
	this.config = {
        container: $('body'),       
        id: "WBSTree-"+ Math.round(Math.random() * 2000),
		iMaxDepth : 100,			//maximo nivel de profundidad que se calcula.
		iLevelSeparation : 40,		//Numero de pixeles de separacion entre niveles
		iSiblingSeparation : 40,	//numero de pixeles de separacion entre hermanos
		iSubtreeSeparation : 80,	//numero de pixeles de separacion entre subarboles
		defaultNodeWidth : 80,		//ancho por defecto de los nodos
		defaultNodeHeight : 40,		//Altura por defecto de los nodos
        width: -1,
		height:-1,
		css:new Array(),       
        title: "",       
        hidden: false,
        autoScroll: true,
        items: [],
		nodoSeleccionado:-1,
		iRootOrientation : ECOTree.RO_TOP,
		iNodeJustification : ECOTree.NJ_TOP,
		algorithm:'ecotree',
		svgcontainer:'',
		styleNode:{
			Background:'#FFFFFF',
            Linecolor: '#FFFFFF'			
		},
		clipboard:false,
		group:Math.round(Math.random()*999999),
        listeners: {
            show: function(){},
            hide: function(){},
			onNoderequestaddchild: function(obj){return true;},
			onNoderequestaddbrother: function(obj){return true;},
			onNodeaddchild: function(obj){},
			onNodeaddbrother: function(obj,dir){},
			onNodeSelectForCopy:function(obj){},
			oncreateCopyTask:function(obj){},								//cuando se crea una tarea usando copiar, @param obj es la tarea resultado de la copia
			onNodeSelectForCut:function(obj){},
			onNodePaste:function(obj){},
			onNodeCut:function(obj){},			
			onCancelClipoard:function(obj){},
			onNoderequestEdit:function(obj){return true;},					//se aplica a todos los nodos, cuando se envía una petición de edición, si retorna true se procede con la edicion			
			onNodeEdit:function(obj){}										//se lanza este evento luego que un nodo fue editado gráficamente.	
        }
    };
    
    for(var i in dataObj) {
        if(this.config[i] != undefined) {
            if(i == "listeners") {
                for(var j in dataObj[i]) 
                    this.config[i][j] = dataObj[i][j];
            }
            else
                this.config[i] = dataObj[i];
        }
    }
	//posicion inicial para algoritmo eco-------------------
	this.rootYOffset = -80;
	this.rootXOffset = 0;
	//----------------------------------------------------------
    this.algorithm = this.config.algorithm;
    this.id = this.config.id;
    this.title = this.config.title;
    this.container = this.config.container;
    this.className = "WBSTree";
	this.Dibujado = false;									//si el arbol ya esta dibujado sera true
    this.items = this.config.items;
    this.nodos = [];
	this.grupo= this.config.group;
	this.nodoSeleccionado	= this.config.nodoSeleccionado;
	this.svgcontainer = this.config.svgcontainer;
    this.listeners = this.config.listeners; 
	this.clipboard = -1;
	this.TareaPreCortada = -1;
	this.TareaPreCopiada = -1;
	if(this.algorithm=='ecotree'){
		this.maxLevelHeight = [];		//array que indica la altura maxima de cada nivel
		this.maxLevelWidth = [];		//array que indica el ancho maximo de cada nivel		
		this.previousLevelNode = [];
		this.nodoDerechaMax = '';		//nodo que se encuentra mas a la derecha
		this.nodoizquierdaMax = '';		//nodo que se encuentra mas a la izquierda
	}	
}
//---------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSTree.prototype._setNeighbors = function(node, level) {
//funcion utilizada en el algoritmo eco, pero util para otras cosas mas.
    node.leftNeighbor = this.previousLevelNode[level];
    if(node.leftNeighbor != null)
        node.leftNeighbor.rightNeighbor = node;
    this.previousLevelNode[level] = node;	
}

Components.WBSTree.prototype._setLevelHeight = function (node, level) {
/* usado en el algoritmo eco
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

Components.WBSTree.prototype._setLevelWidth = function (node, level) {
/* usado en el algoritmo eco
Node: nodo que esta siendo procesado
level: nivel en el que se encuentra el nodo.
- si el valor maxLevelWidth[level] no esta aun definido se le asigna el mayor ancho ,
- si el valor ya estaba definido se busca el mayor y este queda como valor.
*/
	if (this.maxLevelWidth[level] == null) 
		this.maxLevelWidth[level] = 0;
    if(this.maxLevelWidth[level] < node.AnchoCajita)
        this.maxLevelWidth[level] = node.AnchoCajita;		
}
//----------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSTree.prototype.create = function() {  
	         
	this.root = this.svgcontainer.root;						//El elemento padre - root de todas las imagenes SVG en el inspector es el elemento  <svg>
	this.screenGrid = this.svgcontainer.screenGrid;
	this.svgContend = this.svgcontainer.svgContend;
	if (this.config.clipboard){
	 	 this.clipboard = new Clipboard();
		 this.clipboard.tree=this;
	 }
	 if(this.grupo != false)
		 this.svgcontainer.svg.group({id: this.grupo});
		//this.grupo=this.svgcontainer.svg.group({id: this.grupo});
	this.MakeItems();
			
	switch(this.algorithm){
	case 'basicWilliam':
	this.LayoutAlgoritm= new LayoutWilliam(this);
	break;
	case 'ecotree':
	this.LayoutAlgoritm=new ECOTree(this);
	break
	}
	
	this.calcTree();
	this.drawTree();
	this.RecalcSize();
	return this ;
}
//--------------------------------------------------------------------------------------------------------
Components.WBSTree.prototype.addNodo = function(nodo) {
/*construir un nuevo nodo, con los datos enviados en la variable nodo.
//el nodo se agrega a la derecha de sus hermanos, mas no se dibuja ni calcula aun.
@param	nodo tiene que tener esta estructura
	{	 type: 'WBSNode', 
		 id: id propio, diferente a los ids de los demas nodos,
		 idp:id del padre,
		 Descripcion:'Descripcion del contenido del nodo',
	}
*/			
		if(nodo.type != "WBSNode"){
			return false;			
		}
		if(nodo.id == -1){
			return false;			
		}
		nodo.container = this.root;
		nodo.screenGrid = this.screenGrid;
		nodo.tree = this;
		if(nodo.idp == null){		
			nodo.idp=-1;
			this.padres.push(nodo.id);
			if(position=='derecha'){
				this.nodos[idp].childsId.push(nodo.id);
			}
		}
		else{
			//agregar al nodo padre el nodo hijo como child
			if ( this.nodos[nodo.idp].childsId.indexOf(nodo.id)==-1)
				{this.nodos[nodo.idp].childsId.push(nodo.id);}
				this.nodos[nodo.idp].Status="Maximizado";		//sin esta linea el nodo pienza que esta minimizado
			//this.items[nodo.idp].childsId.push(nodo.id);
		}
		var element = Components.create('WBSNode', nodo);
        this.nodos[nodo.id] = element;
    
    this.nodos[nodo.id] = element;
	//los que fueron detectados como padres son los hijos del nodo -1
}
//--------------------------------------------------------------------------------------------------------

Components.WBSTree.prototype.MakeItems = function() {
//construir todos los nodos a partir de los datos ingresados por el usuario.    
    this.padres = [];
    for(var i in this.items) {
        var item = this.items[i];
		if(item.type != "WBSNode")
			continue;			
		item.container = this.root;
		item.screenGrid = this.screenGrid;
		item.tree = this;
		if(item.idp == null){		
			item.idp=-1;
			this.padres.push(item.id);
		}
		var element = Components.create('WBSNode', item);
        this.nodos[element.id] = element;
    }
	//fake item
	var fake =	{	
					 type: 'WBSNode', 
					 id:-1,
					 idp:null,
					 Level:0,
					 Descripcion:'',
					 tipoObjeto:'WBSPARENT',
					 childsId:this.padres,
					 container: this.root,
					 screenGrid : this.screenGrid,
					 tree: this					
	}
	var element = Components.create('WBSNode', fake);
    this.nodos[element.id] = element;
	//los que fueron detectados como padres son los hijos del nodo -1
	for(i in this.padres){
		this.nodos[element.id].childs[i]=this.nodos[this.padres[i]];
	}
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSTree.prototype._getNodeSize = function (node) {
    switch(this.config.iRootOrientation)
    {
    case ECOTree.RO_TOP: 
    case ECOTree.RO_BOTTOM: 
        return node.AnchoCajita;

    case ECOTree.RO_RIGHT: 
    case ECOTree.RO_LEFT: 
        return node.Alto;
    }
    return 0;
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSTree.prototype.cambiarLayout=function(algoritmo){
	if (this.algorithm == algoritmo){return false;}
	else{
	switch(algoritmo){
		case 'basicWilliam':
			this.LayoutAlgoritm=new LayoutWilliam(this);
			this.algorithm ='basicWilliam';
		return true;
		break;
		case 'ecotree':
			this.LayoutAlgoritm= new ECOTree(this);
			this.algorithm ='ecotree';
		return true;
		break;
		}
	}
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSTree.prototype.prepareForSave=function(){
	
	var resultado=new Array();
	for(var i in this.nodos){
		if(this.nodos[i].id == -1){
			continue;
		}
		var NodoItem = {
			type:"WBSNode",
			id:this.nodos[i].id,
			Descripcion:this.nodos[i].Descripcion,
			Background:this.nodos[i].Background,
			stroke:this.nodos[i].stroke,
			idp:this.nodos[i].idp,
			childsId:this.nodos[i].childsId,
		};
		resultado.push(NodoItem);
	}
	return resultado;
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSTree.prototype.calcTree = function() { 
    //dependiendo del algorimo a usar se llama a un metodo u otro
	switch(this.algorithm){
	case 'basicWilliam':
		this.nodos[-1].calculaNodo('undefined');	//se inicia el calculo en el nodo root,
	break;
	case 'ecotree':
	this.nodoDerechaMax = this.nodos[-1];
	this.nodoizquierdaMax = this.nodos[-1];
	this.LayoutAlgoritm._positionTree(this,this.nodos[-1]);
	//el algoritmo de layout ECOtree, puede colocar nodos en el lado negativo del lienzo, 
	//por lo cual a partir del nodo mas a la izquierda reajustamos la poscicion de todos los nodos.
	if(this.nodoizquierdaMax.PosCajitaX<0){
		DeltaX = -1*this.nodoizquierdaMax.PosCajitaX;
	for(var i in this.nodos) {     		
		this.nodos[i].PosCajitaX = this.nodos[i].PosCajitaX + DeltaX
    }
	} 
	//console.log(this.nodoDerechaMax);
	//console.log(this.nodoizquierdaMax);
	break
	}
	//this.drawTree();	
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSTree.prototype.drawTree = function() {
/* Se encarga de dibujar los nodos sobre el lienzo del arbol.
- Si el arbol ya estaba dibujado y esta funcion es llamada, entonces se procedera:
1) Limpieza del lienzo.
2) Limpieza de Calculos previos en los nodos
3) Calculo de los nodos
4) dibujado de los nodos.
- si el arbol se va dibujar por primera vez, solo se procede a dibujarlo.
*/	
if(this.Dibujado==true){
	this.LimpiarLienzo();
	this.LimpiarCalculosPrevios();
	this.calcTree();
}
	for(var i in this.nodos) {     		
		if(this.nodos[i].config.tipoObjeto!="WBSPARENT")
			this.nodos[i].draw();
	}
this.RecalcSize();	
this.Dibujado = true;
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSTree.prototype.borrarNodos = function (){
	for(i in this.nodos){
		if (this.nodos[i].id != -1){
		delete this.nodos[i]}
	}
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSTree.prototype.LimpiarLienzo = function(){
//quita los graficos del contenedor SVG, no se elimina el grupo principal
			this.nodos[0].removeGraphics();
//si algun nodo fue dejado de lado por el borrado desde el nivel 0 lo buscamos
	for(i in this.nodos){
		this.nodos[i].removeGraphics();
	}		
			this.Dibujado=false;
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSTree.prototype.LimpiarCalculosPrevios = function(){
//Se encarga de inicializar los nodos y el arbol, de los calculos realizados por los algoritmos de layout
//dejando el arbol y los nodos listos para iniciar un nuevo ciclo de calculos
	for(i in this.nodos){
		this.nodos[i].LimpiarCalculosPrevios();
	}
	this.maxLevelHeight = [];		//array que indica la altura maxima de cada nivel
	this.maxLevelWidth = [];		//array que indica el ancho maximo de cada nivel		
	this.previousLevelNode = [];
	this.nodoDerechaMax = '';		//nodo que se encuentra mas a la derecha
	this.nodoizquierdaMax = '';		//nodo que se encuentra mas a la izquierda
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSTree.prototype.RecalcSize = function() { 
	//calcular el ancho y el alto requeridos para mostrar correctamente el arbol
	var sum=0;
	switch(this.algorithm){
		case 'basicWilliam':
		
		
		for(var pa in this.padres )
			sum=sum+this.nodos[pa].Ancho;
		
			
		$(this.root).attr('width', sum+10);
		this.svgContend.width(sum+10);				
		$(this.root).attr('height', this.screenGrid.Level[this.screenGrid.MaxLevel].y+60);//50 es el alto de las cajitas				
		this.svgContend.height(this.screenGrid.Level[this.screenGrid.MaxLevel].y+60);
	break;
		case 'ecotree':
		sum = this.nodoDerechaMax.PosCajitaX+this.nodoDerechaMax.AnchoCajita + 20;
		$(this.root).attr('width', sum);
		this.svgContend.width(sum+20);
		sum=0
		for(i in this.maxLevelHeight)
		{
			sum=sum+this.maxLevelHeight[i]+this.config.iLevelSeparation;
		};
		
		$(this.root).attr('height', sum+10);
		this.svgContend.height(sum+10);
	break
	}
	
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSTree.prototype._getLeftmost = function (node, level, maxlevel) {
    if(level >= maxlevel) return node;
    if(node._getChildrenCount() == 0) return null;
    
    //var n = node._getChildrenCount();
    for(i in node.childsId)
    {
        var iChild = this.nodos[node.childsId[i]];
        var leftmostDescendant = this._getLeftmost(iChild, level + 1, maxlevel);
        if(leftmostDescendant != null)
            return leftmostDescendant;
    }

    return null;	
}
