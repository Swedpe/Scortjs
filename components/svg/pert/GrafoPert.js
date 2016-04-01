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
	console.log("Pert Init");
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
		nodoSeleccionado:-1,
		svgcontainer:'',
		styleNode:{
			Background:'#FFFFFF',
            Linecolor: '#FFFFFF'			
		},
		clipboard:false,
		viewFormat:'"<div><table class=\'tablePertNodeExample\' ><tr><td colspan=3 ><strong>"+this.internalData.visibleId+"</strong></td></tr><tr><td colspan=3 style=\'border-top: solid; border-bottom: solid;\'><strong style=\'font-size:13px;\'>"+this.internalData.descripcion+"</strong></td></tr><tr><td ><strong>"+this.internalData.duracion+"</strong></td><td style=\'border-left: solid; border-right: solid;\'><strong>"+this.internalData.holgura+"</strong></td><td><strong >"+this.internalData.holgura+"</strong></td></tr></table></div>"',
		group:Math.round(Math.random()*999999),
        listeners: {
            show: function(){},
            hide: function(){},
			onNoderequestEdit:function(obj){return true;},					//se aplica a todos los nodos, cuando se envía una petición de edición, si retorna true se procede con la edicion			
			onNodeSelect:function(obj){},
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
    this.countEdge = 0;												//para mantener el correcto funcionamiento de los EDGE
    this.id = this.config.id;
    this.title = this.config.title;
    this.container = this.config.container;
    this.className = "Pert";
    this.items = this.config.items;
    this.nodos = [];
	this.EdgeVector = [];											//par de nodos en el cual el edge esta enlazado
	this.grupo= this.config.group;
	this.nodoSeleccionado	= ''; 									//inicialmente ningún nodo e dibuja seleccionado
	this.svgcontainer = this.config.svgcontainer;					//objeto superior que puede contener cualquier dibujo svg
    this.listeners = this.config.listeners; 						//eventos que pueden ser disparados por el grafo, para todos los nodos.
}
Components.Pert.prototype.getNextEdgeId = function(){
	 this.countEdge++;
	 return this.countEdge;
}
Components.Pert.prototype.create = function() {        
	this.root = this.svgcontainer.root;									//El elemento padre - root de todas las imagenes SVG en el inspector es el elemento  <svg>
	this.screenGrid = this.svgcontainer.screenGrid;
	this.svgContend = this.svgcontainer.svgContend;						//es el div que contiene el elemento SVG
    if(this.grupo != false)
	this.svgcontainer.svg.group({id: this.grupo});
	this.MakeItems();
	this.DrawItems();
	this.RecalcSize();
}
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
		item.tree = this;
		var element = Components.create(item.type, item);
        this.nodos[element.PertId] = element;
    }
}

Components.Pert.prototype.DrawItems = function() { 
    for(var i in this.nodos) {     		
		if(this.nodos[i].config.tipoObjeto=="WBSPARENT")
			this.nodos[i].draw('undefined');
    }
	//una vez dibujados los nodos, dibujar los enlaces
	for(var i in this.nodos) { 
		this.nodos[i].drawenlaces();
	}
}
Components.Pert.prototype.RecalcSize = function() { 
//forzando un tamaño grande para primeras pruebas
$(this.root).attr('width', 800);		
	$(this.root).attr('height', 450);
}
Components.Pert.prototype.show = function(){
return this;
}
