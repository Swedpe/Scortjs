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
Components.GrafoEdge.prototype.init = function(dataObj) {
	console.log("Pert Edge");
	this.config = {
        container: $('body'),       
        id: "grafoEdge-"+ Math.round(Math.random() * 2000),
        title: "",       
        hidden: false,
		NodoSalida:'',										//referencia a un objeto tipo nodo
		NodoLLegada:'',										//referencia a un objeto tipo nodo
		grupo:'',											//grupo SVG
		styleEdge:{
            Linecolor: '#FFFFFF'			
		},
        listeners: {
       			onNodeEdit:function(obj){}										//se lanza este evento luego que un nodo fue editado gráficamente.	
        }
    };
    
    for(var i in dataObj) {
        if(this.config[i] != undefined) {
                this.config[i] = dataObj[i];
        }
    }    
    this.id = this.config.id;
    this.Edgeid = this.config.tree.getNextEdgeId();
    this.tree = this.config.tree;
    this.className = "GrafoEdge";
    this.listeners = this.config.listeners;
	this.svg = this.config.svg;											//El lienzo de dibujo
	this.Linea = '';													//la linea SVG
	this.PuntaFlecha = '';												//La punta de la flecha SVG
	this.grupo = this.config.group;
}

Components.GrafoEdge.prototype.create = function() {        
return this;
}

Components.GrafoEdge.prototype.draw = function() { 
console.log('dijar Edge'+this.Edgeid);    	
}

