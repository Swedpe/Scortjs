/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	GrafoNodo v 1.0 - a jQuery Ui extension
	Licences: MIT & GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com].
*/

Components.GrafoNodo.prototype.init = function(dataObj) {
	this.tipo = 'GrafoNodo' ;
	this.config = {	
		container: $('body'),
		id: "GrafoNodo-"+ Math.round(Math.random() * 2000),		//no deveria ser asignado un id por este metodo aleatorio, de preferencia siempre envie los ids.
		PertId:0,
		dataId:0,												//referencia al id que tiene el nodo en su estructura particular Numerico
		svg:'',
		Predecesoras: new Array(),								//Id Numerico
		Sucesoras: new Array(),									//Id Numerico
		PredecesorasObj: new Array(),							//objeto referencia
		SucesorasObj: new Array(),								//objeto referencia
		shape:'circle',											//forma en la cual se representaran inicialmente los nodos.
		scale:100,
		viewToolTip:'',
		grupoPadre:'',
		plugins:{
			svgToolTip: false,					//se define tooltip especifico para un nodo.
			floatingMenuNode:false,					//se define un menu especifico por nodo.
		},
		template:{
			Color: "#FFF",
			ColorBorde: "blue",
		},
		outEdgeTemplate:{
			lineColor: "green",
			colorCritical: "red",
		},
		internalData: {											//Datos extra que son utiles para graficar detalles, pero no importantes para el posicionamiento de nodos.  		
			descripcion:'GrafoNodo',
			visibleId:'Swedpe',												//Para un diagrama con tareas usaremos este como tareaid	
			critico:false,
			duracion:0,
			holgura:0,
			},	
		X : 0,								//posicion donde se comienza a dibujar X, calculado por un algoritmo de graphos
		Y : 0,								//posicion donde se comienza a dibujar Y, calculado por un algoritmo de graphos
		AnchoShape: 100,					//si es un rectangulo es el ancho, si es un circle es el diametro.
		Seleccionado : false,				//solo un nodo puede estar seleccionado a la vez.

		viewFormat:'',
		svg:'',								//Referencia al objeto lienzo svg listo para dibujar.
		tree:'',							//el arbol Objeto Pert Wbs, padre de todos los nodos 
		Xmultiplicador:4,					//se usa como zoom inicial X para cuadrar tamaños
		Ymultiplicador:5,					//se usa como zoom inicial Y para cuadrar tamaños
		Dragable:false,						//inicialmente no se deja arrastrar
		listeners: {						//Todos los Eventos que se disparan en diferentes situaciones
				show: function(obj){},
				maximize: function(obj){},
				minimize: function(obj){},
				Select: dataObj.tree.listeners.onNodeSelect,
				deSelect: function(obj){},
				DesSelect: dataObj.tree.listeners.offNodeSelect,
				hide: function(obj){},
				onNodeSelectSucesorLink: dataObj.tree.listeners.onNodeSelectSucesorLink,
				offNodeSelectSucesorLink: dataObj.tree.listeners.offNodeSelectSucesorLink,
			}
	}
	for(var i in dataObj) {  //leer la configuracion enviada.
        if(this.config[i] != undefined) {
            if((i == "listeners")||(i=='internalData')) {
                for(var j in dataObj[i]) 
                    this.config[i][j] = dataObj[i][j];                
            }
            else
                this.config[i] = dataObj[i];
        }
    } 
	this.grupoPadre = this.config.grupoPadre;
	this.PertId = this.config.PertId;
	this.tree = this.config.tree;
	this.internalData = this.config.internalData;
	this.grupo= $('#perttareasgroupsvg'); 	
    this.scale = this.config.scale;		
	this.AnchoShape = this.config.AnchoShape*(this.scale/100);
	this.BasePosX = (this.config.X*this.config.Xmultiplicador)*this.scale/100;
	this.BasePosY = (this.config.Y*this.config.Ymultiplicador)*this.scale/100;
	this.SeleccionBox = "";							//Caja que se dibuja alrrededor del nodo cuando se selecciona
	this.Seleccionado = false;						//inicialmente ninguno esta seleccionado.	 			 
    this.Predecesoras = this.config.Predecesoras;	//Ids Numericos
    this.Sucesoras = this.config.Sucesoras;			//Ids Numericos	
    this.currentx=0;
    this.currenty=0;
	this.shape=this.config.shape;
	if(this.config.dataId==0){this.dataid=this.config.PertId}else{this.dataid=this.config.dataId;}
    this.Predecesoras = this.config.Predecesoras;
	this.Sucesoras = this.config.Sucesoras;
	this.windowContenedor="";
	this.EdgeSalida = new Array();					//lineas que salen del nodo
	this.EdgeEntrada = new Array();					//lineas que entran al nodo	
	this.svg = this.config.svg;
	this.TextDataZonesCoord = new Array();			  //Textos Svg Dibujados, en sus respectivos lugares
	this.ShapesSvg = new Array();
	this.listeners = this.config.listeners;
	this.DragStatus = false;
	this.draw();
	this.CriticoActivo=false;
	return this;
		
}
Components.GrafoNodo.prototype.create = function() {
    //console.log("do nothing");//funcion vacia necesaria xk si no existe  llama al create generico de Components que agrega un div al contenedor
	return this;
}
//----------------------------------------------------------------------------------------------------------------------------------------------
/**
* draw esta funcion se encargara del dibujado de los nodos
* hay 3 tipos de Dibujo de nodos Circulo, Cuadrado y Hexagono y se les asocia un evento a cada uno
* Invocara al setEvent1
**/
Components.GrafoNodo.prototype.draw = function() {
	//se dibujan directamente las 3 formas que podrían mostrarse, pero todas en modo oculto, luego se hace visible la forma que la configuración indica.
	//para finalizar la función se llama a las funciones de dibujar rejilla y dibujar textos.
		//this.svg.group({id:"perttareasgroupsvg"});						//creando grupo que contendra todos los nodos
		this.g = this.svg.group(this.grupoPadre, {id:this.dataid });
		
		//el borde circular
		this.ShapesSvg['circle'] = this.svg.circle(this.g,0, 0 , (this.AnchoShape/2) , { id:this.dataid ,fill: 'white', stroke:this.config.template.ColorBorde, strokeWidth: 2, 'style':'display:none','drag:enable':'true','class':'visibleshape shape circle'} ); 		
		//el borde cuadrado
		this.ShapesSvg['cuadrado'] = this.svg.rect(this.g,-(this.AnchoShape/2) , -(this.AnchoShape/2) , this.AnchoShape , this.AnchoShape ,{ id:this.dataid ,fill: 'white', stroke: this.config.template.ColorBorde, strokeWidth: 2, 'style':'display:none',id:this.dataid,'class':'shape cuadrado', 'drag:enable':'true'}); 		
		//el borde hexagonal
		this.ShapesSvg['hexagono']= this.svg.polygon(this.g,[
		[(this.AnchoShape/4),-(this.AnchoShape/2) ],
		[-(this.AnchoShape/4) ,-(this.AnchoShape/2) ],
		[-(this.AnchoShape/2) ,0],  
		[-(this.AnchoShape/4) ,(this.AnchoShape/2) ],
		[(this.AnchoShape/4) ,(this.AnchoShape/2) ],
		[(this.AnchoShape/2) ,0]		
		], 	{fill: 'white', stroke: this.config.template.ColorBorde, strokeWidth: 2,id:this.dataid,  'style':'display:none' ,'class':'shape hexagono', 'drag:enable':'true'}); 
		switch(this.config.shape){
			case 'circle':
			$(this.ShapesSvg['circle']).show();
			break;
			case 'cuadrado':
			$(this.ShapesSvg['cuadrado']).show();
			break;
			case 'hexagono':
			$(this.ShapesSvg['hexagono']).show();
			break;
		}	 
		var $this=this;	
		//evento de selección para los elementos.
		$(this.ShapesSvg['circle']).bind('click', {Obj:this }, function(event) {
            event.data.Obj.Seleccionar(event);
		});
		$(this.ShapesSvg['cuadrado']).bind('click', {Obj:this}, function(event) {
		
            event.data.Obj.Seleccionar(event);
		});
		$(this.ShapesSvg['hexagono']).bind('click', {Obj:this}, function(event) {
            event.data.Obj.Seleccionar(event);
		});
		if(this.tree.toolTipOBJ){
					this.setEvent1($(this.ShapesSvg['circle']));
				} 
		this.tree.svgContend.append(this.divTexto);
		this.g.setAttributeNS(null, "transform", "translate("+this.BasePosX+","+this.BasePosY+")");		
		this.drawTemplate();
return this;
}
/**
* setEvent1 esta funcion dibujara el Menu Flotante(tooltip) y añadiendole un evento a al nodo seleccionado para que aparesca
*/
Components.GrafoNodo.prototype.setEvent1 = function(argumento){	
	
			$(argumento).bind('mouseenter',{OBJ:this}, function(event) {
				
				thos=event.data.OBJ;			
				switch(thos.tree.toolTipOBJ.orientacion){
				case 'derecha':
					if(thos.currentx==0){
						var x=thos.BasePosX+thos.AnchoShape/2;
						var y=thos.BasePosY;
					}
					else{
						var x=thos.currentx+thos.AnchoShape/2;
						var y=thos.currenty;
					}
					break;
				case 'izquierda':
					var x=thos.BasePosX-thos.AnchoShape/2;;
					var y=thos.BasePosY
					break;
				case 'abajo':
					var x=thos.BasePosX;
					var y=thos.BasePosY+40;
					break;
				case 'arriba':
					if(thos.currentx==0){
						var x=thos.BasePosX+thos.AnchoShape/2;
						var y=thos.BasePosY;
					}else{
						var x=thos.currentx+thos.AnchoShape/2;
						var y=thos.currenty;
					}
					break;
				}
				// var dataToolTip={texto: thos.id+" "+thos.Descripcion,x:x,y:y,color:thos.stroke};
				var texto = thos.tooltipText;
				var dataToolTip={texto: texto,x:x,y:y,color:thos.stroke};
				
				thos.tree.toolTipOBJ.mouseenter(event,dataToolTip);
					
					///cuando el tree hace translate xq la posicion de un nodo lo puso en negativo
					var suma = parseFloat($('.svgToolTip').css('left').split('px')[0]) + event.data.OBJ.tree.treeOffSetX;
					//$('.svgToolTip').css('left',suma+'px');
					//$(event.data.OBJ.tree.svgcontainer.svg.grupo123).attr('transform','translate('+event.data.OBJ.tree.treeOffSetX+' '+0+')'); //buscar un translate solo de X para luego poder hacer un traslado independiente de Y
			});

			$(argumento).bind("mouseleave", {OBJ:this}, function(event) {
					////console.log('mouseleave');
					event.data.OBJ.tree.toolTipOBJ.mouseleave();
			});
}
Components.GrafoNodo.prototype.drawTemplate = function() {
	
	/*
	funcion que se encarga de dibujar una regilla o tabla para poder mostrar de forma ordenada los datos
	ademas calculal las coordenadas X,Y del origen de cada dato(texto) que sera dibujado
	Maximo se procesa una tabla de 3x3, lo cual da un total de 9 zonas de datos.
	Ejemplo:   this.config.template  [1,1,3]
	*/
	if(this.divTexto==null)
	{
		if(this.scale>=50){
			this.divTexto=$('<div id="nodoPert'+ this.PertId+'" class="caja_Pert_Node'+this.scale+'" >'+ eval(this.config.viewFormat)+ '</div>');	
		}else{
			this.divTexto=$('<div id="nodoPert'+ this.PertId+'" class="caja_Pert_Node'+this.scale+'" >'+ this.internalData.visibleId+ '</div>');	
		}
		

		$('body').append(this.divTexto);
		this.tree.svgContend.append(this.divTexto);

		$("#nodoPert"+this.PertId).css("word-wrap","break-word");
		$("#nodoPert"+this.PertId).css("visibility","visible");
		
		$("#nodoPert"+this.PertId).bind('click', {OBJ:this}, function(event) {
					event.data.OBJ.Seleccionar(event);
		});
		this.setEvent1($("#nodoPert"+this.PertId));
		
		this.grid = this.svg.group(this.g, {id:"grid"+this.dataid,strokeWidth: 1,stroke: '#000' }); 
		this.setEvent1($("#nodoPert"+this.PertId));
		
		this.grid = this.svg.group(this.g, {id:"grid"+this.dataid,strokeWidth: 1,stroke: '#000' }); 
		//$("#nodoPert"+this.PertId).setEvent1
		this.setEvent1($("#nodoPert"+this.PertId));
	
		this.grid = this.svg.group(this.g, {id:"grid"+this.dataid,strokeWidth: 1,stroke: '#000' }); 
	}
	switch(this.config.shape){
			case 'circle':
			// la ultima resata -3 se utiliza para cuadrar en la scale de 50% descudra un poco el 100%
				$("#nodoPert"+this.PertId).css("left",this.BasePosX-this.AnchoShape*0.35 -3);
				$("#nodoPert"+this.PertId).css("top",this.BasePosY-this.AnchoShape*0.35 );
				$("#nodoPert"+this.PertId).css("width",this.AnchoShape*0.7 );
				$("#nodoPert"+this.PertId).css("height",this.AnchoShape*0.7 );
				$("#nodoPert"+this.PertId).css("max-width",this.AnchoShape*0.7 );
				$("#nodoPert"+this.PertId).css("max-height",this.AnchoShape*0.7 );
			break;
			case 'cuadrado':
				$("#nodoPert"+this.PertId).css("left",this.BasePosX-this.AnchoShape/2 );
				$("#nodoPert"+this.PertId).css("top",this.BasePosY-this.AnchoShape/2 );
				$("#nodoPert"+this.PertId).css("width",this.AnchoShape );
				$("#nodoPert"+this.PertId).css("height",this.AnchoShape );
				$("#nodoPert"+this.PertId).css("max-width",this.AnchoShape );
				$("#nodoPert"+this.PertId).css("max-height",this.AnchoShape );
			break;
			case 'hexagono':
				//faltan calculos para hexagono
				$("#nodoPert"+this.PertId).css("left",this.BasePosX-this.AnchoShape*0.35 );
				$("#nodoPert"+this.PertId).css("top",this.BasePosY-this.AnchoShape*0.35 );
				$("#nodoPert"+this.PertId).css("width",this.AnchoShape*0.7 );
				$("#nodoPert"+this.PertId).css("height",this.AnchoShape*0.7 );
				$("#nodoPert"+this.PertId).css("max-width",this.AnchoShape*0.7 );
				$("#nodoPert"+this.PertId).css("max-height",this.AnchoShape*0.7 );
			break;
		}
		if(this.tree.toolTipOBJ)
		{
			this.tooltipText=eval(this.config.viewToolTip);
		}
}
Components.GrafoNodo.prototype.drawTexts = function() {
 
}

Components.GrafoNodo.prototype.show = function() {
    // console.log("do nothing");//funcion vacia necesaria xk si no existe  llama al show generico de Components que muestra un div al contenedor
	return this;
}
//----------------------------------------------------------------------------------------------------------------------------------------------
/***
* drawenlaces esta funcion se encargara de recorrer los elemtos Sucesoras del nodo actual
* creando un objeto del enlace(Edge) donde se le dice quien es el Antecesor y el Sucesoras
**/
Components.GrafoNodo.prototype.drawenlaces = function(grupoL) {	
var Edge = '';	
	for(s in this.Sucesoras){
		var EdgeDef = {svg:this.svg,
					   grupo:grupoL,
					   NodoSalida:this,
					   NodoLLegada:this.tree.nodos[this.Sucesoras[s]],
					   tree:this.tree,
					   template:this.config.outEdgeTemplate
		}
		Edge = Components.create('GrafoEdge', EdgeDef);
		this.EdgeSalida[Edge.NodoLLegada.PertId] = Edge;
		this.tree.nodos[this.Sucesoras[s]].EdgeEntrada[Edge.Edgeid]=Edge;
	}
	
}
//----------------------------------------------------------------------------------------------------------------------------------------------
/**
* Seleccion esta funcion 
* verificara si un nuevoEnlace a crear y eliminar el Edge dinamico (1 -> Antecesor | 2 -> Sucesor)
* Verifica si el nodo seleccionado es el mismo entonces invocara DesSeleccionar
* si es diferente invocara a DesSeleccionar
* Agregara un border Rojo alrededor del nodo y los edge se veran un poco mas anchos
**/
Components.GrafoNodo.prototype.Seleccionar = function(event) {    
	/*
	Si esta en proceso de crear un nuevo enlace entre nodos, se procede diferente a el comportamiento normal, la variable que controla ese
	comportamiento se encuentra almacenada a nivel de arbol y es this.tree.nuevoEnlace.
	
	*/
if(this.tree.nuevoEnlace)
	{
		switch(this.tree.enlace)
		{
			case 1:
				if(this.tree.nodoPredecesoras!=this.PertId)
				{
					this.Sucesoras[this.Sucesoras.length]=this.tree.nodoPredecesoras;
					var sucesor = this.tree.nodos[this.tree.nodoPredecesoras];
					sucesor.Predecesoras[sucesor.Predecesoras.length]=this.PertId;
					//console.log(this.PertId+' -> '+this.tree.svgcontainer.svg.group(this.grupo, {id:'Lineas' }));
					//console.log(padre.PertId+' -> '+padre.tree.svgcontainer.svg.group(padre.grupo, {id:'Lineas' }));
					
					var EdgeDef = {svg:this.svg,
								   grupo:this.tree.svgcontainer.svg.group(this.grupo, {id:'Lineas' }),
								   NodoSalida:this,
								   NodoLLegada:sucesor,
								   tree:this.tree,
								   template:this.config.outEdgeTemplate
					}
					var Edge = Components.create('GrafoEdge', EdgeDef);
					sucesor.EdgeEntrada[this.PertId] = Edge;
					this.EdgeSalida[sucesor.PertId] = Edge;
					$(Edge.Linea).bind('click', {OBJ:this.tree}, function(event) {
						$this = event.data.OBJ;
						var dataLink = $(event.target).attr('datalink');
						var nodosLinkIds = dataLink.split("-");
						$this.nodos[nodosLinkIds[0]].EdgeSalida[nodosLinkIds[1]].seleccionar();
				
					});
				}
				this.tree.nuevoEnlace=false;
				this.tree.nodoPredecesoras=null;
				$(this.tree.container).unbind('mousemove');
				break;
			case 2:
				if(this.tree.nodoPredecesoras!=this.PertId)
				{
					this.Predecesoras[this.Predecesoras.length]=this.tree.nodoPredecesoras;
					var padre = this.tree.nodos[this.tree.nodoPredecesoras];
					padre.Sucesoras[padre.Sucesoras.length]=this.PertId;
					//console.log(this.PertId+' -> '+this.tree.svgcontainer.svg.group(this.grupo, {id:'Lineas' }));
					//console.log(padre.PertId+' -> '+padre.tree.svgcontainer.svg.group(padre.grupo, {id:'Lineas' }));
					
					var EdgeDef = {svg:this.svg,
								   grupo:this.tree.svgcontainer.svg.group(this.grupo, {id:'Lineas' }),
								   NodoSalida:padre,
								   NodoLLegada:this,
								   tree:this.tree,
								   template:this.config.outEdgeTemplate
					}
					var Edge = Components.create('GrafoEdge', EdgeDef);
					padre.EdgeSalida[this.PertId] = Edge;
					this.EdgeEntrada[padre.PertId] = Edge;
					$(Edge.Linea).bind('click', {OBJ:this.tree}, function(event) {
						$this = event.data.OBJ;
						var dataLink = $(event.target).attr('datalink');
						var nodosLinkIds = dataLink.split("-");
						$this.nodos[nodosLinkIds[0]].EdgeSalida[nodosLinkIds[1]].seleccionar();
				
					});
				}
				this.tree.nuevoEnlace=false;
				this.tree.nodoPredecesoras=null;
				$(this.tree.container).unbind('mousemove');
				break;
		}
		$('#900').remove();
		$('.Arrow900').remove();
		//this.tree.nodos[this.Sucesoras[s]].EdgeEntrada[Edge.Edgeid]=Edge;
	}
	else{	
		if (this.tree.nodoSeleccionado == this.PertId){         
			this.tree.nodos[this.tree.nodoSeleccionado].DesSeleccionar();
		}
		else{
			if (this.tree.nodoSeleccionado != 0)
				this.tree.nodos[this.tree.nodoSeleccionado].DesSeleccionar();
			this.tree.nodoSeleccionado = this.PertId;       
				var ancho =10;
				var Xini = -this.AnchoShape/2 -5;
				var Xfin = this.AnchoShape +10;
				var Yini = -(this.AnchoShape/2) -5;
				var Yfin = this.AnchoShape +10;
				this.SeleccionBox =  this.svg.rect(this.grid ,Xini, Yini, Xfin,Yfin , 10, 10, {fill: "none", stroke: "red", strokeWidth: 2,class_: 'Seleccion'+this.PertId });
				this.Seleccionado = true;
				if(this.tree.floatingMenuNode){
					this.tree.floatingMenuNode.objectSelection(this,event);
				}
			
			for (var Esalida in this.EdgeSalida){
				//this.EdgeSalida[Esalida].Linea.setAttribute('stroke','#4059FF');
				this.EdgeSalida[Esalida].Linea.setAttribute('stroke-width',3);
				this.EdgeSalida[Esalida].PuntaFlecha.setAttribute('stroke','#4059FF');
				this.EdgeSalida[Esalida].PuntaFlecha.setAttribute('stroke-width',2);
				this.EdgeSalida[Esalida].PuntaFlecha.setAttribute('fill','#4059FF');
			}
			this.listeners.Select(this);
	}	
	}
}//----------------------------------------------------------------------------------------------------------------------------------------------
///color de las rutas criticas
Components.GrafoNodo.prototype.ColorNode = function(color) {  
	this.ShapesSvg.circle.setAttribute('stroke',color);
	this.ShapesSvg.cuadrado.setAttribute('stroke',color);
	this.ShapesSvg.hexagono.setAttribute('stroke',color);
	
}
//----------------------------------------------------------------------------------------------------------------------------------------------
/**
* BuscarEdgeCritico esta funcion recorrera a todo las Sucesoras para encontrar el Edge y retornarlo  
**/
Components.GrafoNodo.prototype.BuscarEdgeCritico = function(){
	for(nodox in this.Sucesoras)
	{
		if(this.tree.nodos[this.Sucesoras[nodox]].internalData.critical==true)
		{
			for(edgex in this.EdgeSalida)
			{
				if(this.EdgeSalida[edgex].NodoLLegada.PertId==this.Sucesoras[nodox])
					return this.EdgeSalida[edgex];
			}
		}
	}
	return 'none';
}
//-------------------------------------------------------------------------------------------------------------------------
/**
* DesSeleccionar esta funcion Reomevera el el Cuadro de Seleccion.
* regresando a su estado original 
**/
Components.GrafoNodo.prototype.DesSeleccionar = function(windowContenedor) {
	if(this.SeleccionBox != "")
		this.svg.remove(this.SeleccionBox);
	
	this.tree.nodoSeleccionado = '';
		if(this.tree.floatingMenuNode){
			this.tree.floatingMenuNode.ocultar(this);
		}
	for (var Esalida in this.EdgeSalida	){	
			if(this.EdgeSalida[Esalida].Linea.getAttribute('critico') =="si"){
				this.EdgeSalida[Esalida].Linea.setAttribute('stroke','red');				
				this.EdgeSalida[Esalida].PuntaFlecha.setAttribute('stroke','red');				
				this.EdgeSalida[Esalida].PuntaFlecha.setAttribute('fill','red');			
			}
			else
			{
				//this.EdgeSalida[Esalida].Linea.setAttribute('stroke','black');			
				this.EdgeSalida[Esalida].PuntaFlecha.setAttribute('stroke','black');
				this.EdgeSalida[Esalida].PuntaFlecha.setAttribute('fill','black');			
			}
			this.EdgeSalida[Esalida].PuntaFlecha.setAttribute('stroke-width',1);
			this.EdgeSalida[Esalida].Linea.setAttribute('stroke-width',1);
				
		}
	this.config.listeners.DesSelect(this);
 }
 //-------------------------------------------------------------------------------------------------------------------------------------------------- 
Components.GrafoNodo.prototype.AjusteCentrado = function(texto) { 
	//ajuste de texto centrado 
	var mid = texto.length/2;
	return mid*6;
}
//--------------------------------------------------------------------------------------------------------------------------------------------------
/**
* SetCritical esta funcion marcara de rojo al nodo Critico y su Edge al cual esta relacionado 
**/
Components.GrafoNodo.prototype.SetCritical = function(){
    this.Critical = true;
	this.circle.setAttribute('stroke','red');
	this.cuadrado.setAttribute('stroke','red');
	this.hexagono.setAttribute('stroke','red');
	
	for (var ne in	this.NodosEntrada)
		{	
			if(!PertTareasShapesSvg[this.NodosEntrada[ne].tareainicio].Critical)
				continue;
			this.NodosEntrada[ne].linea.setAttribute('stroke','red');
			this.NodosEntrada[ne].linea.setAttribute('critico','si');
			this.NodosEntrada[ne].flecha.setAttribute('stroke','red');
			this.NodosEntrada[ne].flecha.setAttribute('critico','si');
			this.NodosEntrada[ne].flecha.setAttribute('fill','red');
		}
}
//--------------------------------------------------------------------------------------------------------------------------------------------------
/**
* RemoveCritical esta funcion desmarcara a los Nodos que fueron marcados 
* con la ruta critica y a sus Edge regresandolos a sus estado original
**/
Components.GrafoNodo.prototype.RemoveCritical = function(){
   
	this.Critical = false;		
	this.circle.setAttribute('stroke','blue');		
	this.cuadrado.setAttribute('stroke','blue');		
	this.hexagono.setAttribute('stroke','blue');
		for (var ne in	this.NodosEntrada)
		{	
			this.NodosEntrada[ne].linea.setAttribute('stroke','black');
			this.NodosEntrada[ne].linea.setAttribute('critico','no');
			this.NodosEntrada[ne].flecha.setAttribute('stroke','black');
			this.NodosEntrada[ne].flecha.setAttribute('critico','no');
			this.NodosEntrada[ne].flecha.setAttribute('fill','black');
		}
}
//--------------------------------------------------------------------------------------------------------------------------------------------------
/**
* DragMoveListener esta funcion invocara al DragMove
* @param event
**/
Components.GrafoNodo.prototype.DragMoveListener = function(event) {
	//detectar elemento y pasar a una función propietaria
	var Obj =  $(event.dragEnt).data('entidad');
	//console.log(Obj);
	Obj.DragMove(event);
	

}
//--------------------------------------------------------------------------------------------------------------------------------------------------	
/**
* DragMove Esta funcion hara que se mmueva el nodo
* @param event contiene userx y usery necesarios para detectar los movimientos en las coordenadas del elemento 
* los Edge de entrada y salida se moveran con el elemento 
**/
Components.GrafoNodo.prototype.DragMove = function(event) {
		this.currentx=event.userx;
		this.currenty=event.usery;
		switch(this.config.shape){
			case 'circle':
				$("#nodoPert"+this.PertId).css("left",this.currentx-this.AnchoShape*0.35 );
				$("#nodoPert"+this.PertId).css("top",this.currenty-this.AnchoShape*0.35 );
			break;
			case 'cuadrado':
				$("#nodoPert"+this.PertId).css("left",this.currentx-this.AnchoShape/2);
				$("#nodoPert"+this.PertId).css("top",this.currenty-this.AnchoShape/2);
			break;
			case 'hexagono':
				//faltan calculos para hexagono
				$("#nodoPert"+this.PertId).css("left",this.currentx-this.AnchoShape*0.35);
				$("#nodoPert"+this.PertId).css("top",this.currenty-this.AnchoShape*0.35);
			break;
		}
		
		var nodosentrada = this.NodosEntrada;
		var nodossalida=  this.NodosSalida;
		var escala=0;
		var flecha=1;
		if(this.scale==50)
		{
			escala=this.scale/2;
			flecha=escala/100;
		}
		for(var n in this.EdgeEntrada){
				var puntosflecha = $(this.EdgeEntrada[n].PuntaFlecha).attr("points");
				//puntosflecha = puntosflecha.split(" ");
				var puntoslinea = $(this.EdgeEntrada[n].Linea).attr("points");
				puntoslinea = puntoslinea.split(" ");
				var coordenadas = puntoslinea[2].split(",");
					coordenadas[0]= event.userx+(-this.AnchoShape/2)-10;
					coordenadas[1]=event.usery;
					coordenadas = coordenadas[0]+","+coordenadas[1];
					puntoslinea.splice(2,1);
					puntoslinea.splice(2,0,coordenadas);
					
					coordenadas = puntoslinea[3].split(",");
					coordenadas[0]= event.userx+(-this.AnchoShape/2);
					coordenadas[1]=event.usery;
					puntoslinea.splice(3,1);
					puntoslinea.splice(3,0,coordenadas);
					puntoslinea= puntoslinea.join(" ");
					$(this.EdgeEntrada[n].Linea).attr("points", puntoslinea);
				
					puntosflecha= (coordenadas[0]-7)+","+(coordenadas[1]-2)+" "+ coordenadas[0]+","+coordenadas[1]+" "+(coordenadas[0]-7)+","+(coordenadas[1]+2);
					$(this.EdgeEntrada[n].PuntaFlecha).attr("points",puntosflecha);
			}
			
		for(var n in this.EdgeSalida){
					puntoslinea = $(this.EdgeSalida[n].Linea).attr("points");
					puntoslinea = puntoslinea.split(" ");
					coordenadas = puntoslinea[0].split(",");
					coordenadas[0]= event.userx+(this.AnchoShape/2);
					coordenadas[1]=event.usery ;
					coordenadas= coordenadas[0]+","+coordenadas[1];
					puntoslinea.splice(0,1);
					puntoslinea.splice(0,0,coordenadas);
					
					coordenadas = puntoslinea[1].split(",");
					coordenadas[0] = event.userx+(this.AnchoShape/2)+10;
					coordenadas[1] = event.usery;
					puntoslinea.splice(1,1);
					puntoslinea.splice(1,0,coordenadas);
					puntoslinea= puntoslinea.join(" ");
					$(this.EdgeSalida[n].Linea).attr("points", puntoslinea)	;
		}
		
}
//--------------------------------------------------------------------------------------------------------------------------------------------------
/**
* esta funcion preparara al nodo con los Listener para que se pueda mover
**/
Components.GrafoNodo.prototype.enableDrag = function() {
	if (this.DragStatus == false){
	Root = this.tree.svgcontainer.root;								//Root SVG es nesesario para el codigo que permite el arrastre
	$(this.g).data("entidad",this);				//se almacena en el dato entidad el objeto para poder usarlo en el drag
	$(this.divTexto).data("entidad",this);				//se almacena en el dato entidad el objeto para poder usarlo en el drag
	addDragEventListener(DRAGMOVE,this.DragMoveListener);			//Se agrega un evento para el controlador de grag durante el Movimiento del Mouse.
	addDragEventListener(DRAGSTART,this.DragStart);
	addDragEventListener(DRAGDROP,this.DragEnd);
	enableDrag(this.g);							//Activar el Drag sobre el elemento SVG circular
	this.DragStatus = true;
	}
}
//----------------------------------------------------------------------------------------------------------------------------------------------
/**
* disableDrag esta funcion desabilitara al nodo
* desactivara el estado del nodo para mover que no se pueda mover
**/
Components.GrafoNodo.prototype.disableDrag = function() {
	disableDrag(this.g);							//Activar el Drag sobre el elemento SVG circular
	this.DragStatus = false;
}
/**
* DragStart esta funcion ocultara el menu flotante
**/
Components.GrafoNodo.prototype.DragStart = function(dragEvt) {
	var $this =  $(dragEvt.dragEnt).data('entidad');
	if($this.tree.floatingMenuNode){
			$this.tree.floatingMenuNode.ocultar($this);
		}
}
//----------------------------------------------------------------------------------------------------------------------------------------------
/**
* DragEnd esta funcion sera ejecutada despues del evento DragMove termine
* @param dragEvt detectar elemento y se lo pasa al $this
* actualizara los Current(x,y) y los Bases(x,y)
* mostrara el menu flotante nuevamente
**/
Components.GrafoNodo.prototype.DragEnd = function(dragEvt) {
//Por si las moscas aqui se ejecuta cuando se lanza el mouse Up luego de el drag
console.log('fin del drag');
var $this =  $(dragEvt.dragEnt).data('entidad');
var displacementX = $this.currentx -  $this.BasePosX;	
var displacementY = $this.currenty -  $this.BasePosY;	
$this.currentx=0;
$this.currenty=0;
$this.BasePosX+= displacementX;
$this.BasePosY+= displacementY;

if($this.tree.floatingMenuNode)
	$this.tree.floatingMenuNode.objectSelection($this,event);
			
}
//--------------------------------------------------------------------------------------------------------------------------------------------------
Components.GrafoNodo.prototype.ChangeShape = function(Shape) {
	$(this.ShapesSvg[this.shape]).hide();
	$(this.ShapesSvg[Shape]).show();
	this.shape = Shape;
}
//--------------------------------------------------------------------------------------------------------------------------------------------------
/**
* CambioEscalaNodo esta funcion se encargar del tamaño de los nodos 
* @param Scale es el tamaño al cual se quiere cambian
* dependiendo a la Scale los elementos se ajustara
* dependiendo al 50% si es mayor se mostrar el todo contenido en caso contrario solo se mostrara el Id del elemeto 
***/
Components.GrafoNodo.prototype.CambioEscalaNodo = function(Scale){
	if(this.PertId==374)
		console.log();
	if(this.tree.ActivoCritico&&this.CriticoActivo)
	{
		if(Scale<100)
			Scale+=10;
	}
	this.AnchoShape=Scale;
	this.ShapesSvg.circle.setAttribute("r",this.AnchoShape/2);	
		
	this.ShapesSvg.cuadrado.setAttribute("x",this.AnchoShape/2-Scale);
	this.ShapesSvg.cuadrado.setAttribute("y",this.AnchoShape/2-Scale);
	this.ShapesSvg.cuadrado.setAttribute("height",this.AnchoShape);	
	this.ShapesSvg.cuadrado.setAttribute("width",this.AnchoShape);
		
	this.ShapesSvg.hexagono.setAttribute("points",[
		[(this.AnchoShape/4),-(this.AnchoShape/2) ],
		[-(this.AnchoShape/4) ,-(this.AnchoShape/2) ],
		[-(this.AnchoShape/2) ,0],  
		[-(this.AnchoShape/4) ,(this.AnchoShape/2) ],
		[(this.AnchoShape/4) ,(this.AnchoShape/2) ],
		[(this.AnchoShape/2) ,0]
	]);
	if(this.currentx!=0)
		console.log(this.PertId+'  '+this.currentx);
	for(var n in this.EdgeEntrada){
				var puntosflecha = $(this.EdgeEntrada[n].PuntaFlecha).attr("points");
				//puntosflecha = puntosflecha.split(" ");
				var puntoslinea = $(this.EdgeEntrada[n].Linea).attr("points");
				puntoslinea = puntoslinea.split(" ");
				var coordenadas = puntoslinea[2].split(",");
					coordenadas[0]= this.BasePosX+(-this.AnchoShape/2)-10;
					coordenadas[1]= this.BasePosY;
					coordenadas = coordenadas[0]+","+coordenadas[1];
					puntoslinea.splice(2,1);
					puntoslinea.splice(2,0,coordenadas);
					
					coordenadas = puntoslinea[3].split(",");
					coordenadas[0]= this.BasePosX+(-this.AnchoShape/2);
					coordenadas[1]= this.BasePosY;
					puntoslinea.splice(3,1);
					puntoslinea.splice(3,0,coordenadas);
					puntoslinea= puntoslinea.join(" ");
					$(this.EdgeEntrada[n].Linea).attr("points", puntoslinea);
				
					puntosflecha= (coordenadas[0]-7)+","+(coordenadas[1]-2)+" "+ coordenadas[0]+","+coordenadas[1]+" "+(coordenadas[0]-7)+","+(coordenadas[1]+2);
					$(this.EdgeEntrada[n].PuntaFlecha).attr("points",puntosflecha);
			}
			
		for(var n in this.EdgeSalida){
					puntoslinea = $(this.EdgeSalida[n].Linea).attr("points");
					puntoslinea = puntoslinea.split(" ");
					coordenadas = puntoslinea[0].split(",");
					coordenadas[0]= this.BasePosX+(this.AnchoShape/2);
					coordenadas[1]= this.BasePosY ;
					coordenadas= coordenadas[0]+","+coordenadas[1];
					puntoslinea.splice(0,1);
					puntoslinea.splice(0,0,coordenadas);
					
					coordenadas = puntoslinea[1].split(",");
					coordenadas[0] = this.BasePosX+(this.AnchoShape/2)+10;
					coordenadas[1] = this.BasePosY;
					puntoslinea.splice(1,1);
					puntoslinea.splice(1,0,coordenadas);
					puntoslinea= puntoslinea.join(" ");
					$(this.EdgeSalida[n].Linea).attr("points", puntoslinea)	;
		}
		if(Scale>=50){
			$('#nodoPert'+this.PertId).removeClass("caja_Pert_Node"+this.scale).addClass("caja_Pert_Node"+Scale);
			if(this.scale<50)
			{
				$('#nodoPert'+this.PertId).html('');
				$('#nodoPert'+this.PertId).html(eval(this.config.viewFormat));
			}
		}else{
			$('#nodoPert'+this.PertId).removeClass("caja_Pert_Node"+this.scale).addClass("caja_Pert_Node"+Scale);
			if(this.scale>=50)
			{
				$('#nodoPert'+this.PertId).html('');
				$('#nodoPert'+this.PertId).html(this.PertId);
			}
		}
		this.scale=Scale;
	
}
/**
* EscalaNodos esta funcion solo cambiara la escala de si mismo 
**/
Components.GrafoNodo.prototype.EscalaNodos = function(Scale){	
	if (this.tree.nodoSeleccionado != 0){         
		this.tree.nodos[this.tree.nodoSeleccionado].DesSeleccionar();}
		var newScale=(Scale/100)*(100/this.tree.scale);
		this.BasePosX*=newScale;
		this.BasePosY*=newScale;
		this.currentx*=newScale;
		this.currenty*=newScale;
		//en este punto tenemos que tomar en cuenta si el nodo fue movido,
		/*if(this.currentx!=0){
			console.log(2*this.BasePosX-this.currentx);
			console.log(2*this.BasePosY-this.currenty);
			var displacementX = this.currentx -  this.BasePosX;	
			var displacementY = this.currenty -  this.BasePosY;	
			this.g.setAttributeNS(null, "transform", "translate("+(this.BasePosX+displacementX)+","+(this.BasePosY+displacementY)+")");	
		}else{*/
			this.g.setAttributeNS(null, "transform", "translate("+this.BasePosX+","+this.BasePosY+")");	
		//}
		
		this.CambioEscalaNodo(Scale);
		this.drawTemplate();
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/**
* nuevoEnlace esta funcion creara un Edge que se movera siguiendo el cursor
* @param enlace (1 -> Antecesor | 2 -> Sucesor)
* se le creara un enlace dinamico que seguira al cursor asta que se haga click a un nodo
* el Edge se identifica con 900
* el Arrow se identifica con Arrow900
**/
Components.GrafoNodo.prototype.nuevoEnlace = function(enlace) {
	
	if(!this.tree.nuevoEnlace)
	{
		this.tree.enlace=enlace;
		switch(enlace)
		{
		case 1:
						this.tree.nuevoEnlace=true;
			this.tree.nodoPredecesoras=this.PertId;
			// nodo que tenga un efecto grafico una flecha para arriba 

			var iniciox=this.BasePosX+10;
			var inicioy=this.BasePosY;
			var destinox=this.BasePosX+20;
			var destinoy=this.BasePosY-50;
			//console.log(this.tree.svgcontainer.scrollingWindow[0].scrollTop);
			$(this.tree.container).bind('mousemove', {Obj:this }, function(event) {
					$this=event.data.Obj;
					if($this.tree.svgcontainer.scrollingWindow[0].scrollLeft!=0)
						eventoX=event.clientX;
					if($this.tree.svgcontainer.scrollingWindow[0].scrolltop!=0)
						eventoY=event.clientY-90;
					var puntosflecha = $('.Arrow900').attr("points");
					//console.log(event.clientX+'/' + event.offsetX);
						//puntosflecha = puntosflecha.split(" ");
						var puntoslinea = $('#900').attr("points");
						puntoslinea = puntoslinea.split(" ");
						var coordenadas = puntoslinea[0].split(",");
							coordenadas[0]= event.offsetX+($this.AnchoShape/2)/*+$this.tree.svgcontainer.scrollingWindow[0].scrollLeft*/;
							coordenadas[1]= event.offsetY/*-$this.tree.svgcontainer.scrollingWindow[0].scrollTop/2*/;
							coordenadas = coordenadas[0]+","+coordenadas[1];
							puntoslinea.splice(2,1);
							puntoslinea.splice(2,0,coordenadas);
							
							coordenadas = puntoslinea[1].split(",");
							coordenadas[0]= event.offsetX+(-$this.AnchoShape/5)/*+$this.tree.svgcontainer.scrollingWindow[0].scrollLeft*/;
							coordenadas[1]= event.offsetY/*-$this.tree.svgcontainer.scrollingWindow[0].scrollTop/2*/;
							puntoslinea.splice(3,1);
							puntoslinea.splice(3,0,coordenadas);
							puntoslinea= puntoslinea.join(" ");
							$('#900').attr("points", puntoslinea);
						
							
				});
			this.Linea =this.svg.polyline(this.grupo,[[iniciox-25, inicioy],[iniciox-35, inicioy ],[destinox-(10), destinoy ],[destinox, destinoy ]],{fill: 'none',id:900 ,strokeWidth: 1, stroke: 'red' ,class_:'LinkLine'  }); 	
			this.PuntaFlecha = this.svg.polygon(this.grupo,[[iniciox -25,inicioy-2],[iniciox-20, inicioy],[iniciox -25,inicioy+2]], {
				fill:   'black' , 
				stroke:  'black' , 
				strokeWidth: 1,class_: 'Arrow'+900 +'  Shape'
				});

			break;
		case 2:
			this.tree.nuevoEnlace=true;
			this.tree.nodoPredecesoras=this.PertId;
			// nodo que tenga un efecto grafico una flecha para arriba 

			var iniciox=this.BasePosX+10;
			var inicioy=this.BasePosY;
			var destinox=this.BasePosX+20;
			var destinoy=this.BasePosY-50;
			//console.log(this.tree.svgcontainer.scrollingWindow[0].scrollTop);
			$(this.tree.container).bind('mousemove', {Obj:this }, function(event) {
					$this=event.data.Obj;
					if($this.tree.svgcontainer.scrollingWindow[0].scrollLeft!=0)
						eventoX=event.clientX;
					if($this.tree.svgcontainer.scrollingWindow[0].scrolltop!=0)
						eventoY=event.clientY-90;
					var puntosflecha = $('.Arrow900').attr("points");
					//console.log(event.clientX+'/' + event.offsetX);
						//puntosflecha = puntosflecha.split(" ");
						var puntoslinea = $('#900').attr("points");
						puntoslinea = puntoslinea.split(" ");
						var coordenadas = puntoslinea[2].split(",");
							coordenadas[0]= event.offsetX+(-$this.AnchoShape/2)-10/*+$this.tree.svgcontainer.scrollingWindow[0].scrollLeft*/;
							coordenadas[1]= event.offsetY/*-$this.tree.svgcontainer.scrollingWindow[0].scrollTop/2*/;
							coordenadas = coordenadas[0]+","+coordenadas[1];
							puntoslinea.splice(2,1);
							puntoslinea.splice(2,0,coordenadas);
							
							coordenadas = puntoslinea[3].split(",");
							coordenadas[0]= event.offsetX+(-$this.AnchoShape/5)/*+$this.tree.svgcontainer.scrollingWindow[0].scrollLeft*/;
							coordenadas[1]= event.offsetY/*-$this.tree.svgcontainer.scrollingWindow[0].scrollTop/2*/;
							puntoslinea.splice(3,1);
							puntoslinea.splice(3,0,coordenadas);
							puntoslinea= puntoslinea.join(" ");
							$('#900').attr("points", puntoslinea);
						
							puntosflecha= (coordenadas[0]-7)+","+(coordenadas[1]-2)+" "+ coordenadas[0]+","+coordenadas[1]+" "+(coordenadas[0]-7)+","+(coordenadas[1]+2);
							$('.Arrow900').attr("points",puntosflecha);
				});
			this.Linea =this.svg.polyline(this.grupo,[[iniciox, inicioy],[iniciox+(10), inicioy ],[destinox-(10), destinoy ],[destinox, destinoy ]],{fill: 'none',id:900 ,strokeWidth: 1, stroke: 'red' ,class_:'LinkLine'  }); 	
			this.PuntaFlecha = this.svg.polygon(this.grupo,[[destinox -7,destinoy-2],[destinox, destinoy],[destinox -7,destinoy+2]], {
				fill:   'black' , 
				stroke:  'black' , 
				strokeWidth: 1,class_: 'Arrow'+900 +'  Shape'
				});
			break;
			}
	}
	else
	{
		this.tree.nuevoEnlace=false;
		$('#900').remove();
		$('.Arrow900').remove();
		$(this.tree.container).unbind('mousemove');
	}
	//console.log(this.Linea);
}
//----------------------------------------------------------------------------------------------------------------------------------------------
/**
* Edicion esta funcion se encargara de actualizar el valor del nodo
* @param editar contendra las variables necesarias para cambiar los valores del nodo 
**/
Components.GrafoNodo.prototype.Edicion = function(editar) {
	this.internalData.descripcion=editar.Descripcion;
	this.internalData.duracion=editar.Duracion;
	this.internalData.holgura=editar.Holgura;
	$('#nodoPert'+this.PertId).removeClass("caja_Pert_Node"+this.scale).addClass("caja_Pert_Node"+this.scale);
	if(this.scale>=50){
				$('#nodoPert'+this.PertId).html('');
				$('#nodoPert'+this.PertId).html(eval(this.config.viewFormat));
			
		}else{
				$('#nodoPert'+this.PertId).html('');
				$('#nodoPert'+this.PertId).html(this.PertId);
			
		}
	if(this.tree.toolTipOBJ)
	{
		this.tooltipText=eval(this.config.viewToolTip);
	}
	console.log(this.internalData);
}
