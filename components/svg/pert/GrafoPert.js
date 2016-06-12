/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	Pert v 1.0 - a jQuery Ui extension
	Licences: MIT & GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com].
*/
Components.Pert.prototype.init = function(dataObj) {
	this.tipo = 'GrafoPert';
	this.config = {
        container: $('body'),       
        id: "Pert-"+ Math.round(Math.random() * 2000),
        width: -1,
		height:-1,
		css:new Array(),       
        title: "",       
        hidden: false,
        autoScroll: true,
        items: [],
		scale:100,
		nodoSeleccionado:-1,
		edgeSeleccionado:-1,
		svgcontainer:'',
		viewToolTip:'"<p class=\'TestSvg\'>"+this.id+"</p>"',
		styleNode:{
			Background:'#FFFFFF',
            Linecolor: 'blue'			
		},
		plugins:{
			pdf:false,
			svgToolTip: false,					//se define tooltip general para todos los nodos, 
			floatingMenuNode:false,					//se define un menu que aparecera cuando un nodo del arbol este seleccionado
			floatingMenuEdge:false,
		},
		clipboard:false,
		viewFormat:'"<div><table class=\'tablePertNodeExample\' ><tr><td colspan=3 ><strong>"+this.internalData.visibleId+"</strong></td></tr><tr><td colspan=3 style=\'border-top: solid; border-bottom: solid;\'><strong class=\'Formato\'>"+this.internalData.descripcion+"</strong></td></tr><tr><td ><strong>"+this.internalData.duracion+"</strong></td><td style=\'border-left: solid; border-right: solid;\'><strong>"+this.internalData.holgura+"</strong></td><td><strong >"+this.internalData.holgura+"</strong></td></tr></table></div>"',
		group:Math.round(Math.random()*999999),
        listeners: {
            show: function(){},
            hide: function(){},
			onNoderequestEdit:function(obj){return true;},					//se aplica a todos los nodos, cuando se envía una petición de edición, si retorna true se procede con la edicion			
			onNodeSelect:function(obj){},
			offNodeSelect:function(obj){},
			onNodeEdit:function(obj){},										//se lanza este evento luego que un nodo fue editado gráficamente.	
			onNodeSelectSucesorLink: function(obj){},
			offNodeSelectSucesorLink: function(obj){},
        },
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
	this.enlace=0;	
    this.countEdge = 0;												//para mantener el correcto funcionamiento de los EDGE
	this.ActivoCritico=false;
	this.scale = this.config.scale;
		console.log(this.scale);
    this.id = this.config.id;
    this.title = this.config.title;
    this.container = this.config.container;
    this.className = "Pert";
    this.items = this.config.items;
    this.nodos = [];
	this.EdgeVector = [];											//par de nodos en el cual el edge esta enlazado
	this.grupo= this.config.group;
	this.nodoSeleccionado	= ''; 									//inicialmente ningún nodo e dibuja seleccionado
	this.edgeSeleccionado = -1;
	this.svgcontainer = this.config.svgcontainer;					//objeto superior que puede contener cualquier dibujo svg
    this.listeners = this.config.listeners; 						//eventos que pueden ser disparados por el grafo, para todos los nodos.
	this.nuevoEnlace=false;
	this.nodoPredecesoras='none';
}
//--------------------------------------------------------------------------------------------------------------------------------------------------
Components.Pert.prototype.getNextEdgeId = function(){
	 this.countEdge++;
	 return this.countEdge;
}
//--------------------------------------------------------------------------------------------------------------------------------------------------
/**
* Create esta funcion invocara a al Create par ala creacion de los ToolTip, MenuFlotanteNodo, MenuFlotanteEdge
**/
Components.Pert.prototype.create = function() { 
	if(this.config.plugins.svgToolTip){
		this.config.plugins.svgToolTip.svg=this.svgcontainer.svg;
		this.toolTipOBJ = Components.create('svgToolTip',this.config.plugins.svgToolTip);
		if(this.toolTipOBJ.orientacion==null)
			this.toolTipOBJ.orientacion=="arriba";
	}  
	if(this.config.plugins.floatingMenuNode){
		this.config.plugins.floatingMenuNode.svg=this.svgcontainer.svg;
		this.config.plugins.floatingMenuNode.parentComponent=this;
		this.floatingMenuNode = Components.create('svgFloatingMenu',this.config.plugins.floatingMenuNode);
		if(this.floatingMenuNode.orientacion==null)
			this.floatingMenuNode.orientacion=="arriba";
	} 
	if(this.config.plugins.floatingMenuEdge){
		console.log("--");
		this.config.plugins.floatingMenuEdge.svg=this.svgcontainer.svg;
		this.config.plugins.floatingMenuEdge.parentComponent=this;
		this.floatingMenuEdge = Components.create('svgFloatingMenu',this.config.plugins.floatingMenuEdge);
		if(this.floatingMenuEdge.orientacion==null)
			this.floatingMenuEdge.orientacion=="arriba";
	} 
	this.root = this.svgcontainer.root;									//El elemento padre - root de todas las imagenes SVG en el inspector es el elemento  <svg>
	this.screenGrid = this.svgcontainer.screenGrid;
	console.log('createPert');
	this.svgContend = this.svgcontainer.svgContend;						//es el div que contiene el elemento SVG
    if(this.grupo != false)
	this.grupo = this.svgcontainer.svg.group({id: this.grupo});
	this.MakeItems();
	this.DrawItems();
	this.RecalcSize();
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------
/***
*/
Components.Pert.prototype.MakeItems = function() {    
    this.padres = [];
    for(var i in this.items) {
        var item = this.items[i];
		if(item.type != "GrafoNodo")
			continue;
		if(!item.viewFormat){}
			item.viewFormat = this.config.viewFormat;
		item.svg = this.svgcontainer.svg;
		item.screenGrid = this.screenGrid;
		if(this.toolTipOBJ){
			if(item.viewToolTip){}
			else if(this.config.plugins.svgToolTip.viewToolTip)
				item.viewToolTip = this.config.plugins.svgToolTip.viewToolTip;
			else
				item.viewToolTip = this.config.viewToolTip;
		}
		item.tree = this;
		item.grupoPadre = this.grupo;
		item.scale = this.scale;
		var element = Components.create(item.type, item);
        this.nodos[element.PertId] = element;
    }
		if(this.floatingMenuNode){
			this.floatingMenuNode.draw();
		}
		if(this.floatingMenuEdge){
			this.floatingMenuEdge.draw();
		}
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.Pert.prototype.DrawItems = function() { 
    //una vez dibujados los nodos, dibujar los enlaces
	this.grupoLineas=this.svgcontainer.svg.group(this.grupo, {id:'Lineas' });
	for(var i in this.nodos) { 
		this.nodos[i].drawenlaces(this.grupoLineas);
	}
	for(var i in this.nodos) {     		
		if(this.nodos[i].config.tipoObjeto=="WBSPARENT")
			this.nodos[i].draw('undefined');
    }

	$(this.grupo).prepend(this.grupoLineas)
	//asignar el evento click a todos los enlaces 
	$('.LinkLine').bind('click', {OBJ:this}, function(event) {
		$this = event.data.OBJ;
		var dataLink = $(event.target).attr('datalink');
		var nodosLinkIds = dataLink.split("-");
		$this.nodos[nodosLinkIds[0]].EdgeSalida[nodosLinkIds[1]].seleccionar();
		
	});
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------
/**
* CambioEscala esta funcion invocara EscalaNodos
* @param newScale 
* en Cada nodo Invocara su metodo EscalaNodos para que haga el cambio corespondiente 
* se guardara la nueva escala 
* se recalculara los elemetos 
**/
Components.Pert.prototype.CambioEscala = function(newScale){
	if(this.scale!=newScale)
	{
		for(var node in this.nodos)
		{
			this.nodos[node].EscalaNodos(newScale);
			
		}
		this.scale=newScale;
		this.RecalcSize();
	}
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.Pert.prototype.RecalcSize = function() { 
//forzando un tamaño grande para primeras pruebas
var ancho=this.grupo.getBBox().x+this.grupo.getBBox().width;
		var alto=this.grupo.getBBox().y+this.grupo.getBBox().height;
		this.svgContend.width(ancho);
		this.svgContend.height(alto);
$(this.root).attr({'width':ancho+10,'height':alto+10});
	
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.Pert.prototype.show = function(){
	return this;
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.Pert.prototype.DisplayCritical = function(){
	//Marcar a los nodos que tengan critical true de rojo
	var EdgeCritico;
	
	for(var node in this.nodos)
	{
		if(this.nodos[node].internalData.critical==true)
		{
			if(!this.ActivoCritico)
			{
				this.nodos[node].CriticoActivo=true;
				if(this.scale<100)
					this.nodos[node].CambioEscalaNodo(this.scale+10);
				else
					this.nodos[node].CambioEscalaNodo(this.scale);
				this.nodos[node].ColorNode('red');
				EdgeCritico=this.nodos[node].BuscarEdgeCritico();
				if(EdgeCritico!='none')
				{
					EdgeCritico.critical=true;
					EdgeCritico.Linea.setAttribute('stroke','red');
				}
				
			}
			else{
				this.nodos[node].CriticoActivo=false;
				
				this.nodos[node].CambioEscalaNodo(this.scale);
				this.nodos[node].ColorNode('blue');
				EdgeCritico=this.nodos[node].BuscarEdgeCritico();
				if(EdgeCritico!='none')
				{
					EdgeCritico.critical=false;
					EdgeCritico.Linea.setAttribute('stroke','green');
				}
				
			}
		}
	}
	
	/*puntoslinea = $(this.EdgeSalida[n].Linea).attr("points");
					puntoslinea = puntoslinea.split(" ");
					coordenadas = puntoslinea[0].split(",");
					coordenadas[0]= this.BasePosX+(this.AnchoShape/2);
					coordenadas[1]= this.BasePosY ;
					coordenadas= coordenadas[0]+","+coordenadas[1];
					puntoslinea.splice(0,1);
					puntoslinea.splice(0,0,coordenadas);
					
					coordenadas = puntoslinea[1].split(",");
					coordenadas[0] = this.BasePosX+(this.AnchoShape/2);
					coordenadas[1] = this.BasePosY;
					puntoslinea.splice(1,1);
					puntoslinea.splice(1,0,coordenadas);
					puntoslinea= puntoslinea.join(" ");
					$(this.EdgeSalida[n].Linea).attr("points", puntoslinea)	;*/
	if(!this.ActivoCritico)
		this.ActivoCritico=true;
	else
		this.ActivoCritico=false;
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
//---------------------------------------------------------------------------------------------------------------------------------
/**
* nuevoNodo esta funcion va a crear un nuevo elemento
* los valores de X y Y son 50 
* se les asignara un valor por defecto a sus variables o componentes internos del nodo
**/
Components.Pert.prototype.nuevoNodo = function() {
	var item=new Array();
	item.PertId=this.nodos.length;
	item.type= "GrafoNodo",
	item.Y=50;
	item.X=50;
	item.internalData=new Array();
	item.internalData.descripcion=" -- ";
	item.internalData.duracion= "Nah";
    item.internalData.holgura= "Nad";
    item.internalData.visibleId= this.nodos.length;
	
	if(!item.viewFormat){}
		item.viewFormat = this.config.viewFormat;
	item.svg = this.svgcontainer.svg;
	item.screenGrid = this.screenGrid;
	if(this.toolTipOBJ){
		if(item.viewToolTip){}
		else if(this.config.plugins.svgToolTip.viewToolTip)
			item.viewToolTip = this.config.plugins.svgToolTip.viewToolTip;
		else
			item.viewToolTip = this.config.viewToolTip;
	}
	item.tree = this;
	item.grupoPadre = this.grupo;
	item.scale = this.scale;
	var element = Components.create(item.type, item);
    this.nodos[element.PertId] = element;
	
}
