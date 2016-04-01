/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	GrafoEdge v 1.0 - a jQuery Ui extension
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
		tree:'',
		svg:'',
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
	this.NodoSalida = this.config.NodoSalida;
	this.NodoLLegada = this.config.NodoLLegada;
    this.className = "GrafoEdge";
    this.listeners = this.config.listeners;
	this.svg = this.config.svg;											//El lienzo de dibujo
	this.Linea = '';													//la linea SVG
	this.PuntaFlecha = '';												//La punta de la flecha SVG
	this.grupo = this.config.group;
	this.draw();
	return this;
}

Components.GrafoEdge.prototype.create = function() {        
	return this;
}

Components.GrafoEdge.prototype.draw = function() { 
	var destinox = this.NodoLLegada.BasePosX-this.NodoLLegada.AnchoShape/2;
	var destinoy = this.NodoLLegada.BasePosY;
	var iniciox = this.NodoSalida.BasePosX+this.NodoSalida.AnchoShape/2;
	var inicioy = this.NodoSalida.BasePosY;	

	this.Linea =this.svg.polyline(this.grupo,[[iniciox, inicioy],[iniciox+(10), inicioy ],[destinox-10, destinoy ],[destinox, destinoy ]],{fill: 'none',id:this.NodoSalida.PertId+this.NodoLLegada.PertId ,strokeWidth: 1, stroke: 
		'black' ,class_:'Line  Shape'  }); 	
	this.PuntaFlecha = this.svg.polygon(this.grupo,[[destinox -7,destinoy-2],[destinox, destinoy],[destinox -7,destinoy+2]], {
		fill:   'black' , 
		stroke:  'black' , 
		strokeWidth: 1,class_: 'Arrow'+this.NodoSalida.PertId +'  Shape'
		});
//guardar una referencia al enlace en el arbol
this.tree.EdgeVector[this.NodoSalida.PertId]?'nada':this.tree.EdgeVector[this.NodoSalida.PertId]=new Array();
this.tree.EdgeVector[this.NodoSalida.PertId][this.NodoLLegada.PertId] = this;
return this;
		
}

