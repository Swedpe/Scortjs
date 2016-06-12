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
	this.tipo = 'GrafoEdge' ;
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
		template:{
			lineColor: "green",
			flechaColor: "blue",
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
	this.grupo = this.config.grupo;
	this.draw();
	return this;
}

Components.GrafoEdge.prototype.create = function() {        
	return this;
}
//----------------------------------------------------------------------------------------------------------------------------------------------
/***
* draw esta funcion deibujara el Edge de los nodos relacionados
* el dibujado de la Linea se basa en el grupo y en cuatro puntos que seria el comportamiento de la linea dibujada
* el dibujado de la flecha se basa en el grupo y en 3 puntos de como se veria el Arrow
**/
Components.GrafoEdge.prototype.draw = function() { 
	var destinox = this.NodoLLegada.BasePosX-this.NodoLLegada.AnchoShape/2;
	var destinoy = this.NodoLLegada.BasePosY;
	var iniciox = this.NodoSalida.BasePosX+this.NodoSalida.AnchoShape/2;
	var inicioy = this.NodoSalida.BasePosY;	
		if(this.NodoLLegada.currenty!=0)
		destinoy=this.NodoLLegada.currenty;
	if(this.NodoLLegada.currentx!=0)
		destinox=this.NodoLLegada.currentx-this.NodoLLegada.AnchoShape/2;
	
	this.Linea =this.svg.polyline(this.grupo,[[iniciox, inicioy],[iniciox+(10), inicioy ],[destinox-(10), destinoy ],[destinox, destinoy ]],{fill: 'none',id:this.NodoSalida.PertId+this.NodoLLegada.PertId ,strokeWidth: 1, stroke: this.config.template.lineColor ,class_:'LinkLine','datalink':this.NodoSalida.PertId+'-'+this.NodoLLegada.PertId}); 	
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
//----------------------------------------------------------------------------------------------------------------------------------------------
/**
* seleccionar esta Funcion 
* Invocara a la funcion desSeleccionar si se a seleecionado a si mismo.
* Si hay Edge seleccionado diferente al actual lo desmarcara y marcara el Edge actual
**/
Components.GrafoEdge.prototype.seleccionar = function() {
	if(this.NodoSalida.tree.edgeSeleccionado==this){
		this.NodoSalida.tree.edgeSeleccionado.desSeleccionar();
		this.NodoSalida.listeners.offNodeSelectSucesorLink(this);
	}
	else{
		if(this.NodoSalida.tree.edgeSeleccionado!=-1)
		this.NodoSalida.tree.edgeSeleccionado.desSeleccionar();
		this.Linea.setAttribute('stroke-width',2);
		this.Linea.setAttribute('stroke','red');
		this.NodoSalida.tree.edgeSeleccionado = this;
		this.NodoSalida.listeners.onNodeSelectSucesorLink(this);
		if(this.tree.floatingMenuEdge){
			this.tree.floatingMenuEdge.objectSelection(this,event);
		}
	}
}
//----------------------------------------------------------------------------------------------------------------------------------------------
/**
*	Borrar esta funcion elimina el Edge de los nodos relacionados
**/
Components.GrafoEdge.prototype.Borrar = function() {
	var remover=this.NodoSalida.PertId;
	this.NodoLLegada.Predecesoras=$.grep(this.NodoLLegada.Predecesoras,function(value)
	{
		return value!=remover;
	});
	remover=this.NodoLLegada.PertId;
	this.NodoSalida.Sucesoras=$.grep(this.NodoSalida.Sucesoras,function(value)
	{
		return value!=remover;
	});
	delete this.NodoSalida.EdgeSalida[this.NodoLLegada.PertId];
	delete this.NodoLLegada.EdgeEntrada[this.NodoSalida.PertId];
	$(this.Linea).remove();
	$('.Arrow'+this.NodoSalida.PertId).remove();
	if(this.tree.floatingMenuEdge){
			this.tree.floatingMenuEdge.ocultar(this);
		}
}
//----------------------------------------------------------------------------------------------------------------------------------------------
/**
* desSeleccionar esta Funcion va a hacer que el Edge vuelva a su estado original
**/
Components.GrafoEdge.prototype.desSeleccionar = function() {
	this.NodoSalida.tree.edgeSeleccionado=-1;
	this.Linea.setAttribute('stroke-width',1);
	this.Linea.setAttribute('stroke',this.config.template.lineColor);	
	if(this.tree.floatingMenuEdge){
			this.tree.floatingMenuEdge.ocultar(this);
		}
} 


