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
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com], Fritz Velarde-Alvarez Aguilar (f.velardealvarez@gmail.com).
*/
Components.WBSTree.prototype.init = function(dataObj) {
	this.config = {
        container: $('body'),       
        id: "WBSTree-"+ Math.round(Math.random() * 2000),
		iMaxDepth : 100,			//maximo nivel de profundidad que se calcula.			agregar para descargar
		iLevelSeparation : 39,		//Numero de pixeles de separacion entre niveles			agregar para descargar
		/*iSiblingSeparation paso a ser atributo del nodo xq depende de q el nodo sea bolita o no*/
		// iSiblingSeparation : 40,	//numero de pixeles de separacion entre hermanos		agregar para descargar
		iSubtreeSeparation : 60,	//numero de pixeles de separacion entre subarboles		agregar para descargar
		defaultNodeWidth : 80,		//ancho por defecto de los nodos						agregar para descargar
		defaultNodeHeight : 40,		//Altura por defecto de los nodos						agregar para descargar
        width: -1,
		height:-1,
		css:new Array(),       
        title: "",       
        hidden: false,
        autoScroll: true,
		actividades: [],
		finalTaskToActividad:false,
        items: [],
		nodoSeleccionado:-1,
		actividadSeleccionada:-1,
		orientation : "top",
		iNodeJustification : ECOTree.NJ_TOP,
		algorithm:'ecotree',																//agregar para descargar
		svgcontainer:'',
		// showId:true,
		// showDescripcion:true,
		treeOffSetX: 0,
		viewToolTip:'"<p class=\'TestSvg\'>"+this.id+" "+this.Descripcion+"</p>"',
		viewFormat:'"<p class=\'pNodoSvg\'>"+this.id+" "+this.Descripcion+"</p>"',			//como el nodo deberia mostrar texto por defecto con ATRIBUTOS del NODO
		// showInbox:{
			// "id","Descripcion",
		// },
		styleNode:{
			Background:'#FFFFFF',
            Linecolor: '#FFFFFF'			
		},
		plugins:{
			pdf:false,
			svgToolTip: false,
		},
		clipboard:false,
		grupoId:Math.round(Math.random()*999999),
        listeners: {
			onDrawTree:function(obj,paso){return true;},
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
    this.arrayTemporalActividadesLlenoDeArrays=[];
    for(var i in dataObj) {
        if(this.config[i] != undefined) {
            if(i == "listeners") {
                for(var j in dataObj[i]) 
                    this.config[i][j] = dataObj[i][j];
            }
            else{
				if(i == "actividades") {
                for(var j in dataObj[i]) 
                    this.config[i][dataObj[i][j].id] = dataObj[i][j];
				}
				else{
					this.config[i] = dataObj[i];
				}
			}
        }
    }
	//posicion inicial para algoritmo eco-------------------
	this.rootYOffset = -80;
	this.rootXOffset = 0;
	//----------------------------------------------------------
    this.algorithm = this.config.algorithm;
	this.finalTaskToActividad = this.config.finalTaskToActividad;
    this.id = this.config.id;
    this.title = this.config.title;
    this.container = this.config.container;
    this.className = "WBSTree";
	this.Dibujado = false;									//si el arbol ya esta dibujado sera true
    this.items = this.config.items;
    this.nodos = [];										//lista de Components nodos
    this.actividades = this.config.actividades;				//lista de objetos simples
	this.grupoId= 'grupoTree'+this.id;
	this.nodoSeleccionado	= this.config.nodoSeleccionado;
	this.actividadSeleccionada	= this.config.actividadSeleccionada;
	this.svgcontainer = this.config.svgcontainer;
	// this.showId = this.config.showId;
	// this.showDescripcion = this.config.showDescripcion;
    this.listeners = this.config.listeners; 
	this.treeOffSetX =this.config.treeOffSetX;
	// this.clipboard = -1;
	this.clipboard = this.config.clipboard;
	this.TareaPreCortada = -1;
	this.TareaPreCopiada = -1;
	this.DESARREGLADO = false;			//para cuando el this.grupo.getBBox().x es menor a 0 MOMENTANEO xq deberia arreglarse en el mismo calctree()
	
	this.padres = [];
	this.maxLevelHeight = [];		//array que indica la altura maxima de cada nivel
	this.maxLevelWidth = [];		//array que indica el ancho maximo de cada nivel	
	if(this.algorithm=='ecotree'){		
		this.previousLevelNode = [];
		this.nodoDerechaMax = '';		//nodo que se encuentra mas a la derecha
		this.nodoizquierdaMax = '';		//nodo que se encuentra mas a la izquierda
	}
}
//---------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSTree.prototype.create = function() {  
	if(this.config.plugins.svgToolTip){
		this.config.plugins.svgToolTip.svg=this.svgcontainer.svg;
		this.toolTipOBJ = Components.create('svgToolTip',this.config.plugins.svgToolTip);
		if(this.toolTipOBJ.orientacion==null)
			this.toolTipOBJ.orientacion=="arriba";
	}         
	
	this.root = this.svgcontainer.root;						//El elemento padre - root de todas las imagenes SVG en el inspector es el elemento  <svg>
	this.screenGrid = this.svgcontainer.screenGrid;
	this.svgContend = this.svgcontainer.svgContend;
	if (this.config.clipboard){
	 	 this.clipboard = new Clipboard();
		 this.clipboard.tree=this;
	 }	
	 // if(this.grupo != false)													//esta seccion estará en draw()
		 // this.grupo = this.svgcontainer.svg.group({id: this.grupoId});
		//this.svgcontainer.svg.group({id: this.grupoId});
	//-----------------------------------------------------------------------
	
	this.grupo = this.svgcontainer.svg.group({id: this.grupoId});				//añadido aca para q el calcNodoEco pueda agregar elementos al grupo
	
	//creacion del WBSPARENT
	var tempItems=[];
	for(var i in this.items) {
		if(this.items[i].idp == null){
			this.items[i].idp=-1;
			this.padres.push(this.items[i].id);
		}
		tempItems[this.items[i].id]=this.items[i];
	}
	this.items=tempItems;
	
	var fake =	{
					 type: 'WBSNode', 
					 id:-1,
					 idp:null,
					 Level:0,			//no se puede hacer una correcta relacion de niveles por ahora(por el algoritmo de ecotree)
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
	for(var i in this.padres){
		// this.nodos[element.id].childs[i]=this.nodos[this.padres[i]];
		this.MakeItems(this.padres[i]);
		// //console.log(i);
	}
	this.procesarNodosComoActividades();
	
				this.grupo.remove();				//añadido aca para q despues de cada calcNodoEco pueda eliminar el grupo y todo siga normal
				delete this.grupo;
				
	//-----------------------------------------------------------------------
/* 	for(var e in this.nodos){
	// //console.log("Nodo:"+this.nodos[e].id+" "+"Level:"+this.nodos[e].Level)
		if(this.nodos[e].fakeChild){
			this.nodos[e].Alto=this.nodos[e].Alto-(this.maxLevelHeight[this.nodos[this.nodos[e].idp].Level]-this.nodos[this.nodos[e].idp].Alto);
			this.nodos[e].Alto=this.nodos[e].Alto<0?0:this.nodos[e].Alto;
		}
	} 
	this.maxLevelHeight=[];							//vaciado para q luego se peuda hacer un calculo correcto del maxLevelHeight en el ecotree
	*/
	// for(var o in this.nodos){
		// this._setLevelHeight(this.nodos[o],this.nodos[o].Level);
	// }
	
	switch(this.algorithm){
	case 'basicWilliam':
	this.LayoutAlgoritm= new LayoutWilliam(this);
	break;
	case 'ecotree':
	this.LayoutAlgoritm=new ECOTree(this);
	break
	}
	//proceder 
	// this.RecalcSize();
	return this ;
}
//--------------------------------------------------------------------------------------------------------
Components.WBSTree.prototype.MakeItems = function(nodeId) {
//construir todos los nodos a partir de los datos ingresados por el usuario recursivamente. Recorrido preorden.    
    
    // for(var i in this.items) {
        // var item = this.items[i];
	// if(nodeId!=-1){
        var item = this.items[nodeId];
		if(item.type != "WBSNode")
			// continue;
			return;
		item.container = this.root;
		item.screenGrid = this.screenGrid;
		if(!item.viewFormat){}
			item.viewFormat = this.config.viewFormat;
		if(this.toolTipOBJ){
			if(item.viewToolTip){}
			else if(this.config.plugins.svgToolTip.viewToolTip)
				item.viewToolTip = this.config.plugins.svgToolTip.viewToolTip;
			else
				item.viewToolTip = this.config.viewToolTip;
		}
		
		item.tree = this;
		// item.Padre = this.nodos[item.idp];
		
		var element = Components.create('WBSNode', item);
        this.nodos[element.id] = element;
    // }
	// }
	for(var i in this.items[nodeId].childsId){
		this.MakeItems(this.items[nodeId].childsId[i])
	}
	

	return true;
}
//-----------------------------------------------------------------------------------------------------------------------
Components.WBSTree.prototype.procesarNodosComoActividades = function() {
	//Esta funcion convertira todas las tareas de ultimo nivel que no tengan hermanos con hijos a actividades, para una visualizacion mas simple.
	for(var x in this.nodos){
			this.nodos[x].ContieneTareas = false;
	}
	for(var i in this.nodos){
	if((i!=-1)&&this.nodos[i].childsId&&(this.nodos[i].childsId.length!=0)){
		//console.log(i+"**"+this.nodos[i].idp);
		if(this.nodos[this.nodos[i].idp].ContieneTareas==false){
				this.nodos[this.nodos[i].idp].ContieneTareas = true;
		}
	}
	}
}
//--------------------------------------------------------------------------------------------------------
Components.WBSTree.prototype.aplicarTemplate = function() { 
	//esta es la funcion mas lenta de todo el proceso ya que trabaja directamente con el DOM, y el DOM siempre es lento.
	
	for(var no in this.nodos){
		this.nodos[no].aplicarTemplate();
	}

}
Components.WBSTree.prototype.crearGruposSVG = function() { 
	//++++++++++++++++++++++++++++++++++++++++++++
		var Xtime = new Date().getTime();
		//++++++++++++++++++++++++++++++++++++++++++++
	for(var i in this.nodos) {
		if(typeof(this.nodos[i].grupo)=='undefined'){
				this.nodos[i].grupo = this.svgcontainer.svg.group(this.grupo,{id: 'nodo'+i,'transform': 'translate('+this.nodos[i].PosCajitaX+','+this.nodos[i].BasePosY+')'});
			}
	}
	//++++++++++++++++++++++++++++++++++++++++++++
			var Ytime = new Date().getTime();
			//console.log('Aplicar Template');
			//console.log(Ytime-Xtime);
	//+++++++++++++++++++++++++++++++++++++++++++++	
}
//--------------------------------------------------------------------------------------------------------
Components.WBSTree.prototype.crearCajasSVG = function() { 
	//++++++++++++++++++++++++++++++++++++++++++++
		//var Xtime = new Date().getTime();
		//++++++++++++++++++++++++++++++++++++++++++++
	for (nodoid in this.nodos){
		if(this.nodos[nodoid].config.tipoObjeto!="WBSPARENT"){
			this.nodos[nodoid].createTexCajita();	
		}
	}
	//++++++++++++++++++++++++++++++++++++++++++++
			//var Ytime = new Date().getTime();
			////console.log('Crear textCajas');
			////console.log(Ytime-Xtime);
	//+++++++++++++++++++++++++++++++++++++++++++++	
}
Components.WBSTree.prototype.dibujarCajasSVG = function() { 
	//++++++++++++++++++++++++++++++++++++++++++++
		//ar Xtime = new Date().getTime();
		//++++++++++++++++++++++++++++++++++++++++++++
	for (nodoid in this.nodos){
		if(this.nodos[nodoid].config.tipoObjeto!="WBSPARENT"){
			this.nodos[nodoid].draw();	
		}
	}

	//++++++++++++++++++++++++++++++++++++++++++++
			//var Ytime = new Date().getTime();
			//console.log('dibujar textCajas');
			////console.log(Ytime-Xtime);
	//+++++++++++++++++++++++++++++++++++++++++++++	
}
//--------------------------------------------------------------------------------------------------------
Components.WBSTree.prototype.calcTree = function() { 
    //dependiendo del algorimo a usar se llama a un metodo u otro
	//--------------------------------------------------
	for(var o in this.nodos){
		this._setLevelHeight(this.nodos[o],this.nodos[o].Level);
	}
			//para setear una correcta altura a los fakechilds despues de tener el maxLevelHeight
	for(var e in this.nodos){
	// //console.log("Nodo:"+this.nodos[e].id+" "+"Level:"+this.nodos[e].Level)
		// if(this.nodos[e].fakeChild && this.nodos[e].Padre.dibujarActividades){
		// if(Object.keys(this.nodos[e].items).length!=0 && this.nodos[e].childsId.length==0){
			// this..nodos[e]createFakeChild();
		// }
		if(this.nodos[e].fakeChild && this.nodos[e].Padre.Status=='Maximizado' && this.nodos[e].Padre.dibujarActividades){
			this.nodos[e].aplicarTemplate();
			this.nodos[e].Alto=this.nodos[e].Alto-(this.maxLevelHeight[this.nodos[this.nodos[e].idp].Level]-this.nodos[this.nodos[e].idp].Alto);
			this.nodos[e].Alto=this.nodos[e].Alto<0?0:this.nodos[e].Alto;
		}
	}
	this.maxLevelHeight=[];	
	//--------------------------------------------------
	switch(this.algorithm){
	case 'basicWilliam':
		this.LayoutAlgoritm._positionTree(this,this.nodos[-1])
		// this.nodos[-1].calculaNodoWilliam('undefined');	//se inicia el calculo en el nodo root,
	break;
	case 'ecotree':
			//++++++++++++++++++++++++++++++++++++++++++++
			var Xtime = new Date().getTime();
			//++++++++++++++++++++++++++++++++++++++++++++
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
			//++++++++++++++++++++++++++++++++++++++++++++
			var Ytime = new Date().getTime();
			//console.log('tiempo algoritmo');
			//console.log(Ytime-Xtime);
			//+++++++++++++++++++++++++++++++++++++++++++++	
	////console.log(this.nodoDerechaMax);
	////console.log(this.nodoizquierdaMax);
	break
	}
	//this.drawTree();	
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSTree.prototype.drawTree = function(callbackFunction) {
/* Se encarga de dibujar los nodos sobre el lienzo del arbol.
El proceso es pesado cuando el numero de nodos supera los 1000, la funcion esta seccionada en pasos,
el paso mas pesado es la creacion de los componentes DIV del DOM y esta controlada como si fuera una animacion requestAnimationFrame, para no causar que el navegador colapse
- Si el arbol ya estaba dibujado y esta funcion es llamada, entonces el procedimiento sera mas liviano y se procedera:
1) Limpieza del lienzo.
2) Limpieza de Calculos previos en los nodos
3) Calculo de los nodos
4) repocicionamiento de los nodos.
- si el arbol se va dibujar por primera vez, se crearan los elementos del DOM lo cual es lento.
*/	
	var $this = this;
	var indices = Object.keys(this.nodos)
	var totalIndices = indices.length;
	var contador = 0;
	/*this.calcTree();
	this.crearGruposSVG();
	this.crearCajasSVG();
    this.dibujarCajasSVG();*/
	//dibuja_Paso0(finishtwo);
	if($this.Dibujado==true){
		dibuja_Paso0(finishtwo);
	}else{
		//this.aplicarTemplate();
		aplicarTemplateX();
	}
function prepareDOM(callbackFunction){
	if($this.Dibujado==true){
		$this.LimpiarCalculosPrevios();	
	}else {
		//$this.aplicarTemplate();
		if($this.grupo != false)
			 $this.grupo = $this.svgcontainer.svg.group({id: $this.grupoId});
	}
}
//preparar para funcion mas pesada, hacerla en modo animacion ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function aplicarTemplateX() {
  var step = function() {
     if(contador >=  totalIndices) {
		//cuando ya estan aplicados los templates llamar al flujo de dibujo      
	  dibuja_Paso0(finishtwo);		//-->>continuar con el resto de partes.
	  return;
    } else {
		$this.listeners.onDrawTree(this,parseInt(50*contador/totalIndices))
	var limit = contador + 300;
	for (; contador < limit; ){ 
		 if(contador >=  totalIndices){
			break; 
		 }
		$this.nodos[indices[contador]].aplicarTemplate();
		contador++;
	}
    }
	 //contador = contador +1;
    requestAnimationFrame(step);
  }
  step();
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++	
function dibuja_Paso0(callbackFunction) {
 //console.log('iniciando dibujo maestro')	
  var partialResult = {};
  $this.listeners.onDrawTree(this,55);
  
  setTimeout(function(){ dibuja_Paso1(partialResult, callbackFunction); }, 10);
}
function dibuja_Paso1(partialResult,callbackFunction) {
   $this.listeners.onDrawTree(this,60);
  prepareDOM(); 
 
  setTimeout(function(){ dibuja_Paso2(partialResult, callbackFunction); }, 10);
}
function dibuja_Paso2(partialResult, callbackFunction) {
	$this.listeners.onDrawTree(this,70);
	$this.calcTree();
	//console.log("hola");
  setTimeout(function(){ dibuja_Paso3(partialResult, callbackFunction); }, 10);
}
function dibuja_Paso3(partialResult, callbackFunction) {
  $this.listeners.onDrawTree(this,80);
  $this.crearGruposSVG();
  setTimeout(function(){ dibuja_Paso4(partialResult, callbackFunction); }, 10);
}

function dibuja_Paso4(partialResult, callbackFunction) {
  $this.listeners.onDrawTree(this,85);
  $this.crearCajasSVG();
  setTimeout(function(){ dibuja_Paso5(partialResult, callbackFunction); }, 10);
}

function dibuja_Paso5(partialResult, callbackFunction) {
  $this.listeners.onDrawTree(this,90);
  $this.dibujarCajasSVG()
  callbackFunction();
}
function finishtwo(){
	 $this.listeners.onDrawTree(this,100);
		if($this.nodoSeleccionado!=-1){
			var tempN = $this.nodoSeleccionado;
			tempN.desSeleccionar();
			tempN.seleccionar();
		}
		if($this.actividadSeleccionada!=-1){
			var tempA = this.actividadSeleccionada;
			tempA.desSeleccionar();
			tempA.seleccionar();
		}
	$this.treeOffSetX=0;					// se setea de nuevo en 0 hasta que el this.resizeBody() calcule q debe tener otro valor
	if($this.grupo.getBBox().x<0)
	$this.DESARREGLADO=true;
	$this.Dibujado = true;
	$this.statusdiv?$this.listeners.onDrawTree(this,100):false;
	$this.resizeBody();
	//console.log("fin");
}	
	

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
/**quita graficos y tambien limpia los objetos */
			// this.nodos[0].removeGraphics();
//si algun nodo fue dejado de lado por el borrado desde el nivel 0 lo buscamos
		// for(i in this.nodos){
			// this.nodos[i].removeGraphics();
		// }	
/**se hace un clear de svg para eliminar restos anteriores del cortar, pegar. 
ya q removegraphics no puede borrar restos(graficos,lineas,flechas) q ya no le pertenecen
	*/
	/*for(var i in this.nodos){
		for(var indice in this.nodos[i].childsId){
			delete this.nodos[i].ChildLines[indice];
			delete this.nodos[i].ChildArrow[indice];
		}
		if(i!=-1){
			var padre=this.nodos[this.nodos[i].idp];
			delete padre.ChildLines[i];
			delete padre.ChildArrow[i];
			//this.nodos[i].dibujado=false;
			//delete this.nodos[i].grupo;
		}
	}*/
	//this.screenGrid.svg.clear();
	//this.Dibujado=false;
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
// Components.WBSTree.prototype.RecalcSize = function() { 
	///calcular el ancho y el alto requeridos para mostrar correctamente el arbol
	// var sum=0;
	// switch(this.algorithm){
		// case 'basicWilliam':
		
		
		// for(var pa in this.padres )
			// sum=sum+this.nodos[pa].Ancho;
		
			
		// $(this.root).attr('width', sum+10);
		// this.svgContend.width(sum+10);				
		// $(this.root).attr('height', this.screenGrid.Level[this.screenGrid.MaxLevel].y+60);//50 es el alto de las cajitas				
		// this.svgContend.height(this.screenGrid.Level[this.screenGrid.MaxLevel].y+60);
	// break;
		// case 'ecotree':
		// sum = this.nodoDerechaMax.PosCajitaX+this.nodoDerechaMax.AnchoCajita + 20;
		// $(this.root).attr('width', sum);
		// this.svgContend.width(sum+20);
		// sum=0
		// for(i in this.maxLevelHeight)
		// {
			// sum=sum+this.maxLevelHeight[i]+this.config.iLevelSeparation;
		// };
		
		// $(this.root).attr('height', sum+10);
		// this.svgContend.height(sum+10);
	// break
	// }
	
// }
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSTree.prototype._setNeighbors = function(node, level) {
//funcion utilizada en el algoritmo eco, pero util para otras cosas mas.
    node.leftNeighbor = this.previousLevelNode[level];
    if(node.leftNeighbor != null)
        node.leftNeighbor.rightNeighbor = node;
    this.previousLevelNode[level] = node;	
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSTree.prototype._setLevelHeight = function (node, level) {
/* usado en el algoritmo eco
Node: nodo que esta siendo procesado
level: nivel en el que se encuentra el nodo.
- si el valor maxLevelHeight[level] no esta aun definido se le asigna la altura del nodo,
- si el valor ya estaba definido se busca el mayor y este queda como valor.
*/	
	node.Level=level;							//se asignan los niveles a cada nodo, organizados mal "teoricamente" pero sirven para la realizacion del WBS
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
        // this.nodos[nodo.id] = element;
    
    this.nodos[nodo.id] = element;
	//los que fueron detectados como padres son los hijos del nodo -1
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSTree.prototype._getNodeSize = function (node) {
    switch(this.config.orientation)
    {
    case "top": 
    case "bottom": 
        return node.AnchoCajita;

    case "right": 
    case "left": 
        return node.Alto;
    }
    return 0;
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSTree.prototype.cambiarLayout=function(algoritmo){
	if (this.algorithm == algoritmo){return;}
	else{
	switch(algoritmo){
		case 'basicWilliam':
			this.LayoutAlgoritm=new LayoutWilliam(this);
			this.algorithm ='basicWilliam';
			this.drawTree();
		return;
		break;
		case 'ecotree':
			this.LayoutAlgoritm= new ECOTree(this);
			this.algorithm ='ecotree';
			this.drawTree();
		return;
		break;
		}
	}
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSTree.prototype.cambiarOrientacion=function(orientacion){
	if (this.config.orientation == orientacion){return;}
	else{
	switch(orientacion){
		case 'top':
			this.config.orientation = "top";
			this.drawTree();
		return;
		break;
		case 'left':
			this.config.orientation = "left";
			this.drawTree();
		return;
		break;
		}
	}
}
Components.WBSTree.prototype.prepareForSave=function(format){
	//genera una cadena de texto lista para ser descargada en el formato especificado por el parametro format.
	//actualmente soporta JSON y XML.
	switch(format){
	case 'JSON':
		var resultado=new Array();
		for(var i in this.nodos){
			if(this.nodos[i].id == -1){
				continue;
			}
			var NodoItem = {
				type:this.nodos[i].type,
				id:this.nodos[i].id,
				Descripcion:this.nodos[i].Descripcion,
				Background:this.nodos[i].Background,
				stroke:this.nodos[i].stroke,
				idp:this.nodos[i].idp,
				childsId:this.nodos[i].childsId,
			};
			resultado.push(NodoItem);
		}
		return JSON.stringify(resultado, undefined, 4);
	break;
	case 'XML':
		var $root = $('<XMLDocument />');
		var $WBSTree=$('<WBSTree />')	
			for( var i in this.nodos){
					var $nodo=($('<nodo/>'));
					$nodo.append($('<id />').text(this.nodos[i].id));
					$nodo.append($('<type />').text(this.nodos[i].type));
					$nodo.append($('<Descripcion />').text(this.nodos[i].Descripcion));
					$nodo.append($('<Background />').text(this.nodos[i].Background));
					$nodo.append($('<stroke />').text(this.nodos[i].stroke));
					$nodo.append($('<idp />').text(this.nodos[i].idp));
					for( var j in this.nodos[i].childsId)
					{
						$nodo.append($('<childsId />').text(this.nodos[i].childsId[j]));
					}
					$WBSTree.append($nodo);
				}
		$root.append($WBSTree);
		var downloadchar='<?xml version="1.0" encoding="UTF-8"?>';
		downloadchar=downloadchar + $root.html();
		return downloadchar;
		break;
	}
	return;
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSTree.prototype.downloadPdf=function(pdfName){
	var doc = new jsPDF("landscape","pt", 'a3');
//Creando cajas.
for (var i in this.nodos){						
	doc.setDrawColor(parseInt(this.nodos[i].stroke[1])*16+parseInt(this.nodos[i].stroke[2]),142,58);
	doc.setFillColor(255,255,255);
	// doc.setLineWidth(parseFloat(this.nodos[0].TextCajita.Caja.getAttribute("stroke-width"))); //FORAZANDO nodos[i] ---> nodos[0]
	doc.setLineWidth(parseFloat(this.nodos[parseInt(Object.keys(this.nodos)[0])].TextCajita.Caja.getAttribute("stroke-width"))); //FORAZANDO nodos[i] ---> nodos[0]
	doc.rect(this.nodos[i].PosCajitaX, this.nodos[i].BasePosY, this.nodos[i].AnchoCajita, this.nodos[i].Alto,'FD');
	
		var specialElementHandlers = {
				// id="testNodo'+ this.id+'"
				'#editor': function (element, renderer) {
					return true;
				}
			}
			doc.fromHTML($("#testNodo"+this.nodos[i].id).html(), 15, 15, {
			'width': 170,
            'elementHandlers': specialElementHandlers
    });
			
	// for (var t in this.nodos[i].TextCajita.ArrayTextos)
	// {
		// doc.setFont("times");
		// doc.setFontType("normal");
		// doc.setFontSize(parseInt(this.nodos[i].TextCajita.ArrayTextos[t].getAttribute("font-size")));
		
		// doc.setTextColor(0, 0, 255);
		// doc.text(parseFloat(this.nodos[i].TextCajita.ArrayTextos[t].getAttribute("x")),parseFloat(this.nodos[i].TextCajita.ArrayTextos[t].getAttribute("y")),this.nodos[i].TextCajita.ArrayTextos[t].getAttribute("class"));
	// }
}
//Creando lineas entre cajas.
for (var e in this.nodos){
	for (var w in this.nodos[e].ChildLines){
		var nuevalista = $.map((this.nodos[e].ChildLines[w].getAttribute("points").replace(/ /g,",")).split(','), function(value){
			return parseFloat(value, 10);
		});
		doc.setDrawColor(0,0,255);
		doc.setLineWidth(parseFloat(this.nodos[e].ChildLines[w].getAttribute("stroke-width")));
		doc.line(nuevalista[0], nuevalista[1], nuevalista[2], nuevalista[3]);
		doc.line(nuevalista[2], nuevalista[3], nuevalista[4], nuevalista[5]);
		doc.line(nuevalista[4], nuevalista[5], nuevalista[6], nuevalista[7]);
	}
}
//Creando puntas de flechas.
for (var a in this.nodos){
	for (var v in this.nodos[a].ChildArrow){
		var nuevalista = $.map((this.nodos[a].ChildArrow[v].getAttribute("points").replace(/ /g,",")).split(','), function(value){
			return parseFloat(value, 10);
		});
		doc.setDrawColor(0,0,255);
		doc.setFillColor(255,0,0);
		doc.setLineWidth(parseFloat(this.nodos[a].ChildArrow[v].getAttribute("stroke-width")));
		doc.triangle(nuevalista[0], nuevalista[1], nuevalista[2], nuevalista[3],nuevalista[4], nuevalista[5],'FD');
	}
}
doc.save(pdfName);
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
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSTree.prototype.resizeBody = function(){
	if(this.Dibujado){
		if(this.DESARREGLADO){
			//- Comentado se descuadra los cuadros de los div
			//this.treeOffSetX = (-this.grupo.getBBox().x);     //+10 para q no este tan pegado a la izquierda||pero deberia haber un +10 desde el principio tmb
			//var movimiento = this.treeOffSetX;
			//$(this.grupo).attr('transform','translate('+movimiento+' '+0+')');		//hay q buscar la manera de q sea translateX para leugo ahcer un calculo en Y
			/*$('.divActividades',this.svgContend).each(function( index ) {
				var suma = parseFloat($(this).css('left').split('px')[0]) + movimiento;
				$(this).css('left',suma+'px');
			});*/
			
			this.DESARREGLADO=false;
		}
		// if(this.toolTipOBJ)
			// var distancia=50;							//sumado 50 teniendo en cuenta el toolptip
		// else
			// var distancia=10;
		var ancho=this.grupo.getBBox().x+this.grupo.getBBox().width+this.treeOffSetX;
		var alto=this.grupo.getBBox().y+this.grupo.getBBox().height;
		this.svgContend.width(ancho);
		this.svgContend.height(alto);
		// this.svgcontainer.svg.circle(this.ringGroup, ancho, alto, 5, {fill: 'blue', strokeWidth: 1});
		$(this.root).attr({'width':ancho+10,'height':alto+10});
	}
}
