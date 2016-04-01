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
	this.tipoObjeto = 'GrafoNodo' ;
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
		template:{
			shape: 'circle',
			zones: [1,1,3],										//Primera Fila 1 texto, segunda fila 1 texto, tercera fila 3 textos, Datazones por defecto = 1+1+3 = 5, numero de filas de 1 a 3	
			borderColor: 'red',
			gridcolor:'green'
		},										
		internalData: {											//Datos extra que son utiles para graficar detalles, pero no importantes para el posicionamiento de nodos.  		
			descripcion:'GrafoNodo',
			visibleId:'Swedpe',												//Para un diagrama con tareas usaremos este como tareaid	
			critico:false,
			duracion:0,
			holgura:0,
			},
		DataZones: {											//Este numero de zonas se extrae de el template, el template por defecto tiene 
			0:'visibleId',
			3:'descripcion',
			6:'duracion',
			7:'holgura',
			8:'holgura',
			},	
		X : 0,								//posicion donde se comienza a dibujar X, calculado por un algoritmo de graphos
		Y : 0,								//posicion donde se comienza a dibujar Y, calculado por un algoritmo de graphos
		AnchoShape: 100,					//si es un rectangulo es el ancho, si es un circulo es el diametro.
		Seleccionado : false,				//solo un nodo puede estar seleccionado a la vez.
		Color: "#FFF",
		ColorBorde: "#000000",
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
				deselect: function(obj){},
				hide: function(obj){},
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
	this.PertId = this.config.PertId;
	this.tree = this.config.tree;
	this.internalData = this.config.internalData;
	this.AnchoShape = this.config.AnchoShape;
	this.grupo= $('#perttareasgroupsvg'); 	
		
	this.BasePosX = (this.config.X*this.config.Xmultiplicador);
	this.BasePosY = (this.config.Y*this.config.Ymultiplicador);
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
	
	return this;
		
}
Components.GrafoNodo.prototype.create = function() {
    //console.log("do nothing");//funcion vacia necesaria xk si no existe  llama al create generico de Components que agrega un div al contenedor
	return this;
}
Components.GrafoNodo.prototype.draw = function() {
	//se dibujan directamente las 3 formas que podrían mostrarse, pero todas en modo oculto, luego se hace visible la forma que la configuración indica.
	//para finalizar la función se llama a las funciones de dibujar rejilla y dibujar textos.
		//this.svg.group({id:"perttareasgroupsvg"});						//creando grupo que contendra todos los nodos
		this.g = this.svg.group(this.grupo, {id:this.dataid }); 
		//el borde circular
		this.ShapesSvg['circulo'] = this.svg.circle(this.g,this.BasePosX, this.BasePosY , this.AnchoShape/2, { id:this.dataid ,fill: 'white', stroke:'blue', strokeWidth: 2, 'style':'display:none','drag:enable':'true','class':'visibleshape shape circulo'} ); 		
		//el borde cuadrado
		this.ShapesSvg['cuadrado'] = this.svg.rect(this.g,this.BasePosX-(this.AnchoShape/2), this.BasePosY-(this.AnchoShape/2), this.AnchoShape, this.AnchoShape ,{ id:this.dataid ,fill: 'white', stroke:     'blue', strokeWidth: 2, 'style':'display:none',id:this.dataid,'class':'shape cuadrado', 'drag:enable':'true'}); 		
		//el borde hexagonal
		this.ShapesSvg['hexagono']= this.svg.polygon(this.g,[
		[this.BasePosX+ (this.AnchoShape/4),this.BasePosY-(this.AnchoShape/2)],
		[this.BasePosX-(this.AnchoShape/4),this.BasePosY-(this.AnchoShape/2)],
		[this.BasePosX-(this.AnchoShape/2),this.BasePosY],  
		[this.BasePosX-(this.AnchoShape/4),this.BasePosY+(this.AnchoShape/2)],
		[this.BasePosX+(this.AnchoShape/4),this.BasePosY+(this.AnchoShape/2)],
		[this.BasePosX+(this.AnchoShape/2),this.BasePosY]		
		], 	{fill: 'white', stroke: 'blue', strokeWidth: 2,id:this.dataid,  'style':'display:none' ,'class':'shape hexagono', 'drag:enable':'true'}); 
		switch(this.config.shape){
			case 'circle':
			$(this.ShapesSvg['circulo']).show();
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
		$(this.ShapesSvg['circulo']).bind('click', {Obj:this }, function(event) {
            event.data.Obj.Seleccionar();
		});
		$(this.ShapesSvg['cuadrado']).bind('click', {Obj:this}, function(event) {
		
            event.data.Obj.Seleccionar();
		});
		$(this.ShapesSvg['hexagono']).bind('click', {Obj:this}, function(event) {
            event.data.Obj.Seleccionar();
		});
		this.drawTemplateGrid();
		this.drawTexts();	
return this;
}
Components.GrafoNodo.prototype.drawTemplateGrid = function() {
	/*
	funcion que se encarga de dibujar una regilla o tabla para poder mostrar de forma ordenada los datos
	ademas calculal las coordenadas X,Y del origen de cada dato(texto) que sera dibujado
	Maximo se procesa una tabla de 3x3, lo cual da un total de 9 zonas de datos.
	Ejemplo:   this.config.template  [1,1,3]
	
	|            DataZones[0]                 |
	------------------------------------------
	|            DataZones[3]                 |
	-------------------------------------------
	| DataZones[6]| DataZones[7]| DataZones[8]|
	*/
	this.divTexto=$('<div id="nodoPert'+ this.PertId+'" class="caja_Pert_Node" >'+ eval(this.config.viewFormat)+ '</div>');
	$('body').append(this.divTexto);
	this.tree.svgContend.append(this.divTexto);

	$("#nodoPert"+this.PertId).css("word-wrap","break-word");
	switch(this.config.shape){
			case 'circle':
				$("#nodoPert"+this.PertId).css("left",this.BasePosX-this.AnchoShape*0.35);
				$("#nodoPert"+this.PertId).css("top",this.BasePosY-this.AnchoShape*0.35);
				$("#nodoPert"+this.PertId).css("width",this.AnchoShape*0.7);
				$("#nodoPert"+this.PertId).css("height",this.AnchoShape*0.7);
				$("#nodoPert"+this.PertId).css("max-width",this.AnchoShape*0.7);
				$("#nodoPert"+this.PertId).css("max-height",this.AnchoShape*0.7);
			break;
			case 'cuadrado':
				$("#nodoPert"+this.PertId).css("left",this.BasePosX-this.AnchoShape/2);
				$("#nodoPert"+this.PertId).css("top",this.BasePosY-this.AnchoShape/2);
				$("#nodoPert"+this.PertId).css("width",this.AnchoShape);
				$("#nodoPert"+this.PertId).css("height",this.AnchoShape);
				$("#nodoPert"+this.PertId).css("max-width",this.AnchoShape);
				$("#nodoPert"+this.PertId).css("max-height",this.AnchoShape);
			break;
			case 'hexagono':
				//faltan calculos para hexagono
				$("#nodoPert"+this.PertId).css("left",this.BasePosX-this.AnchoShape*0.35);
				$("#nodoPert"+this.PertId).css("top",this.BasePosY-this.AnchoShape*0.35);
				$("#nodoPert"+this.PertId).css("width",this.AnchoShape*0.7);
				$("#nodoPert"+this.PertId).css("height",this.AnchoShape*0.7);
				$("#nodoPert"+this.PertId).css("max-width",this.AnchoShape*0.7);
				$("#nodoPert"+this.PertId).css("max-height",this.AnchoShape*0.7);
			break;
		}
	$("#nodoPert"+this.PertId).css("visibility","visible");
	
	$("#nodoPert"+this.PertId).bind('click', {OBJ:this}, function(event) {
				event.data.OBJ.Seleccionar();
	});
	
	this.grid = this.svg.group(this.g, {id:"grid"+this.dataid,strokeWidth: 1,stroke: '#000' }); 
	/* var anchoaltogrilla = this.AnchoShape -(this.AnchoShape*0.3);
			
	//dibujamos el borde de la zona de la grilla pero lo mantenemos invisible, los puntos BasePosX y BasePosY, están posicionados en el centro de la grilla.
	this.svg.rect(this.grid, this.BasePosX-(anchoaltogrilla/2), this.BasePosY-(anchoaltogrilla/2), anchoaltogrilla, anchoaltogrilla, {id:' fondogrilla' +this.dataid,  fill: 'none',     stroke: '#000', strokeWidth: 0}); 
	var NumeroFilas = this.config.template.zones.length;		//Numero de filas soportado = 1 - 2- 3
	var AlturaFilas = anchoaltogrilla/NumeroFilas;
	//preparando coordenadas para los textos, el primero es calculado fuera de su bucle
	AnchoColumnas = anchoaltogrilla/this.config.template.zones[0];
	this.TextDataZonesCoord[0]= new Array();
	//dibujando separadores de filas
	for (i=0;i<NumeroFilas;i++){								//las coordenadas que varian son las Y, las coordenadas X son fijas
		if(i>0){
			Y_separador = (this.BasePosY-(anchoaltogrilla/2))+AlturaFilas*i;
			Y_separador1 = (this.BasePosY-(anchoaltogrilla/2))+AlturaFilas*(i+1);
			this.svg.line(this.grid,  this.BasePosX-(anchoaltogrilla/2), Y_separador, this.BasePosX-(anchoaltogrilla/2)+anchoaltogrilla, Y_separador); 
			}
		AnchoColumnas = anchoaltogrilla/this.config.template.zones[i];
		this.TextDataZonesCoord[i]?'nada':this.TextDataZonesCoord[i] = new Array();
		for (j=0;j<this.config.template.zones[i];j++){
			this.TextDataZonesCoord[i][j]?'nada':this.TextDataZonesCoord[i][j]= new Array();	
			console.log('aqui');
			console.log(this.config.internalData);
			this.TextDataZonesCoord[i][j]['text'] = this.config.internalData[this.config.DataZones[i*3+j]];
			this.TextDataZonesCoord[i][j]['x'] = this.BasePosX-anchoaltogrilla/2 + AnchoColumnas*j+AnchoColumnas/2-this.AjusteCentrado(String(this.config.internalData[this.config.DataZones[i*3+j]]));
			this.TextDataZonesCoord[i][j]['y'] = this.BasePosY - anchoaltogrilla/2 +AlturaFilas/2*(1) +AlturaFilas*i;
			if((i>0)&&(j>0)){
				X_separador = (this.BasePosX-(anchoaltogrilla/2))+AnchoColumnas*j;	
				this.svg.line(this.grid,  X_separador, Y_separador, X_separador, Y_separador1); 
			}
		}
	}
	console.log(this.TextDataZonesCoord);  */
}
Components.GrafoNodo.prototype.drawTexts = function() {
	/*
	Se procesa como dato de multiple lineas con textProcesor = 2, la descripción.
    los demás datos se dibujan basados en coordenadas ya calculadas por la función drawTemplateGrid(); 
	*/
	
	// $("#nodoPert"+this.PertId).css("left",this.BasePosX-this.AnchoShape/2);
	// $("#nodoPert"+this.PertId).css("top",this.BasePosY-this.AnchoShape/4);
	// $("#nodoPert"+this.PertId).css("visibility","visible");
	
	
	
	/*this.Textprocesor = new TextProcesor(this.config.internalData.descripcion,{"NumMaxLetras": 10});	//si el texto es muy largo textProcesor corta el texto de la mejor manera posible, si aun no encaja, no lo muestra.
		var arrayTexto = new Array();
		this.ArrayTextos = new Array();    
		for (indicet in this.Textprocesor.ArrayTextosResultado)	{
			if(indicet>=2) break; 
			arrayTexto[indicet] = this.Textprocesor.ArrayTextosResultado[indicet];
			switch (this.Textprocesor.NumPartes){
			case 1:
			this.ArrayTextos[indicet] = this.svg.text(this.grid,this.BasePosX- this.AjusteCentrado(arrayTexto[indicet].trim()),   this.BasePosY+indicet*15, arrayTexto[indicet].trim(),{fontFamily: "Verdana", fontSize: "10", fill: "black",class_: this.dataid+"_" +"DescripcionResumen" } );
			break;
			case 2:
			this.ArrayTextos[indicet] = this.svg.text(this.grid,this.BasePosX- this.AjusteCentrado(arrayTexto[indicet].trim()),  this.BasePosY+indicet*10, arrayTexto[indicet].trim(),{fontFamily: "Verdana", fontSize: "10", fill: "black",class_: this.dataid+"_" +"DescripcionResumen"   } );
			break;
			}
		}*/
	//this.svg.text( grid,this.BasePosX - Ajuste(this.Descripcion),  this.BasePosY+5 , this.Descripcion,{fontFamily: 'Verdana', fontSize: '10px', fill: 'black', visibility: "visible", style:"user-select: none;"});
	//this.TextDataZonesCoord[0][0]['svg']== "right" ?
	//(typeof(this.TextDataZonesCoord[0][0]['x']!='undefined'))?
	
	
	 /* if(typeof(this.TextDataZonesCoord[0][0])!="undefined"){
	this.TextDataZonesCoord[0][0]['svg']=this.svg.text( this.grid,this.TextDataZonesCoord[0][0]['x'],  this.TextDataZonesCoord[0][0]['y']+5, String(this.TextDataZonesCoord[0][0]['text']) ,{fontFamily: 'Verdana', fontSize: '10px', fill: 'black', visibility: "visible", style:"user-select: none;"});}
	else {
	'nada';}
	
	//(typeof(this.TextDataZonesCoord[0][1]!='undefined'))?
	if(typeof(this.TextDataZonesCoord[0][1])!="undefined"){
	this.TextDataZonesCoord[0][1]['svg']=this.svg.text( this.grid,this.TextDataZonesCoord[0][1]['x'],  this.TextDataZonesCoord[0][1]['y']+5 , String(this.TextDataZonesCoord[0][1]['text']) ,{fontFamily: 'Verdana', fontSize: '10px', fill: 'black', visibility: "visible", style:"user-select: none;"});}
	else {
	'nada';}
	
	
	(typeof(this.TextDataZonesCoord[0][2])!='undefined')?
	this.TextDataZonesCoord[0][2]['svg']=this.svg.text( this.grid,this.TextDataZonesCoord[0][2]['x'],  this.TextDataZonesCoord[0][2]['y']+5 , String(this.TextDataZonesCoord[0][2]['text']) ,{fontFamily: 'Verdana', fontSize: '10px', fill: 'black', visibility: "visible", style:"user-select: none;"}):'nada';
	
	(typeof(this.TextDataZonesCoord[1][0])!='undefined')?
	this.TextDataZonesCoord[1][0]['svg']=this.svg.text( this.grid,this.TextDataZonesCoord[1][0]['x'],  this.TextDataZonesCoord[1][0]['y']+5 , String(this.TextDataZonesCoord[1][0]['text']) ,{fontFamily: 'Verdana', fontSize: '10px', fill: 'black', visibility: "visible", style:"user-select: none;"}):'nada';
	
	(typeof(this.TextDataZonesCoord[1][1])!='undefined')?
	this.TextDataZonesCoord[1][1]['svg']=this.svg.text( this.grid,this.TextDataZonesCoord[1][1]['x'],  this.TextDataZonesCoord[1][1]['y']+5 , String(this.TextDataZonesCoord[1][1]['text']) ,{fontFamily: 'Verdana', fontSize: '10px', fill: 'black', visibility: "visible", style:"user-select: none;"}):'nada';
	
	(typeof(this.TextDataZonesCoord[1][2])!='undefined')?
	this.TextDataZonesCoord[1][2]['svg']=this.svg.text( this.grid,this.TextDataZonesCoord[1][2]['x'],  this.TextDataZonesCoord[1][2]['y']+5 , String(this.TextDataZonesCoord[1][2]['text']) ,{fontFamily: 'Verdana', fontSize: '10px', fill: 'black', visibility: "visible", style:"user-select: none;"}):'nada';
	
	(typeof(this.TextDataZonesCoord[2][0])!='undefined')?
	this.TextDataZonesCoord[2][0]['svg']=this.svg.text( this.grid,this.TextDataZonesCoord[2][0]['x'],  this.TextDataZonesCoord[2][0]['y']+5 , String(this.TextDataZonesCoord[2][0]['text']) ,{fontFamily: 'Verdana', fontSize: '10px', fill: 'black', visibility: "visible", style:"user-select: none;"}):'nada';
	
	(typeof(this.TextDataZonesCoord[2][1])!='undefined')?
	this.TextDataZonesCoord[2][1]['svg']=this.svg.text( this.grid,this.TextDataZonesCoord[2][1]['x'],  this.TextDataZonesCoord[2][1]['y']+5 , String(this.TextDataZonesCoord[2][1]['text']) ,{fontFamily: 'Verdana', fontSize: '10px', fill: 'black', visibility: "visible", style:"user-select: none;"}):'nada';
	
	(typeof(this.TextDataZonesCoord[2][2])!='undefined')?
	this.TextDataZonesCoord[2][2]['svg']=this.svg.text( this.grid,this.TextDataZonesCoord[2][2]['x'],  this.TextDataZonesCoord[2][2]['y']+5 , String(this.TextDataZonesCoord[2][2]['text']) ,{fontFamily: 'Verdana', fontSize: '10px', fill: 'black', visibility: "visible", style:"user-select: none;"}):'nada'; */
	 
}

Components.GrafoNodo.prototype.show = function() {
    // console.log("do nothing");//funcion vacia necesaria xk si no existe  llama al show generico de Components que muestra un div al contenedor
	return this;
}
Components.GrafoNodo.prototype.drawenlaces = function(lineasprecalculadas) {	
var Edge = '';	
	for(s in this.Sucesoras){
		var EdgeDef = {svg:this.svg,
					   grupo:$('#'+this.PertId ),
					   NodoSalida:this,
					   NodoLLegada:this.tree.nodos[this.Sucesoras[s]],
					   tree:this.tree
		}
		Edge = Components.create('GrafoEdge', EdgeDef);
		this.EdgeSalida[Edge.Edgeid] = Edge;
		this.tree.nodos[this.Sucesoras[s]].EdgeEntrada[Edge.Edgeid]=Edge;
	}
	
}

Components.GrafoNodo.prototype.Seleccionar = function() {    
	// $('.SeleccionEspecial').remove();         
    if (this.tree.nodoSeleccionado != 0){            
		this.tree.nodos[this.tree.nodoSeleccionado].DesSeleccionar();}     
		this.tree.nodoSeleccionado = this.PertId;       
  
            var ancho =10;           
            this.SeleccionBox =  this.svg.rect(this.grid ,this.BasePosX-(this.AnchoShape/2)-5, this.BasePosY-(this.AnchoShape/2)-5, this.AnchoShape+10, this.AnchoShape+10, 10, 10, {fill: "none", stroke: "red", strokeWidth: 2,class_: 'Seleccion'+this.PertId });
            this.Seleccionado = true;
			/*if(this.dragable)
				Components.getComponentById('PertTaskDragEnabler_' + windowContenedor.id).setIcon('images/crozico.png');	
			else
				Components.getComponentById('PertTaskDragEnabler_' + windowContenedor.id).setIcon('images/forbiddencrozico.png');
			*/
			/*Components.getComponentById('Centrado_Derecha_' + windowContenedor.id ).setVisible(true);
			Components.getComponentById('Centrado_Medio_' + windowContenedor.id ).setVisible(true);
			Components.getComponentById('Centrado_Izquierda_' + windowContenedor.id ).setVisible(true);*/
			
			for (var Esalida in this.EdgeSalida){
				this.EdgeSalida[Esalida].Linea.setAttribute('stroke','#4059FF');
				this.EdgeSalida[Esalida].Linea.setAttribute('stroke-width',3);
				this.EdgeSalida[Esalida].PuntaFlecha.setAttribute('stroke','#4059FF');
				this.EdgeSalida[Esalida].PuntaFlecha.setAttribute('stroke-width',2);
				this.EdgeSalida[Esalida].PuntaFlecha.setAttribute('fill','#4059FF');
			}
	this.listeners.Select(this);		
}
//--------------------------------------------------------------------------------------------------------------------------------------------------
Components.GrafoNodo.prototype.DesSeleccionar = function(windowContenedor) {
	if(this.SeleccionBox != "")
		this.svg.remove(this.SeleccionBox);
	
	this.tree.nodoSeleccionado = '';
	for (var Esalida in this.EdgeSalida	){	
			if(this.EdgeSalida[Esalida].Linea.getAttribute('critico') =="si"){
				this.EdgeSalida[Esalida].Linea.setAttribute('stroke','red');				
				this.EdgeSalida[Esalida].PuntaFlecha.setAttribute('stroke','red');				
				this.EdgeSalida[Esalida].PuntaFlecha.setAttribute('fill','red');			
			}
			else
			{
				this.EdgeSalida[Esalida].Linea.setAttribute('stroke','black');			
				this.EdgeSalida[Esalida].PuntaFlecha.setAttribute('stroke','black');
				this.EdgeSalida[Esalida].PuntaFlecha.setAttribute('fill','black');			
			}
			this.EdgeSalida[Esalida].PuntaFlecha.setAttribute('stroke-width',1);
			this.EdgeSalida[Esalida].Linea.setAttribute('stroke-width',1);
				
		}
 }
 //-------------------------------------------------------------------------------------------------------------------------------------------------- 
Components.GrafoNodo.prototype.AjusteCentrado = function(texto) { 
	//ajuste de texto centrado 
	var mid = texto.length/2;
	return mid*6;
}
//--------------------------------------------------------------------------------------------------------------------------------------------------
Components.GrafoNodo.prototype.SetCritical = function(){
    this.Critical = true;
	this.circulo.setAttribute('stroke','red');
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
Components.GrafoNodo.prototype.RemoveCritical = function(){
   
	this.Critical = false;		
	this.circulo.setAttribute('stroke','blue');		
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
Components.GrafoNodo.prototype.DragMoveListener = function(event) {
	//detectar elemento y pasar a una función propietaria
	var Obj =  $(event.dragEnt).data('entidad');
	//console.log(Obj);
	Obj.DragMove(event);
	

}
//--------------------------------------------------------------------------------------------------------------------------------------------------	
Components.GrafoNodo.prototype.DragMove = function(event) {
		this.currentx=event.userx+ this.BasePosX;
		this.currenty=event.usery +this.BasePosY;
		var grilla =  this.grid;
		var anchoaltogrilla= $("rect" ,$(grilla)).attr("width");
	    var trasladox=   (this.BasePosX+event.userx )-(anchoaltogrilla)/2;
		var trasladoy=   (this.BasePosY+event.usery)-(anchoaltogrilla)/2;
		var posXgrilla = $("rect" ,$(grilla)).attr("x");
		var posYgrilla = $("rect" ,$(grilla)).attr("y");
		grilla.setAttributeNS(null, "transform", "translate("+(trasladox-posXgrilla)+","+(trasladoy-posYgrilla)+")");
		this.ShapesSvg['circulo'].setAttributeNS(DRAGNS, "x", event.userx);
        this.ShapesSvg['circulo'].setAttributeNS(DRAGNS, "y", event.usery);
        this.ShapesSvg['circulo'].setAttributeNS(null, "transform", "translate(" + event.userx + "," + event.usery + ")");
		this.ShapesSvg['cuadrado'].setAttributeNS(DRAGNS, "x", event.userx);
        this.ShapesSvg['cuadrado'].setAttributeNS(DRAGNS, "y", event.usery);
        this.ShapesSvg['cuadrado'].setAttributeNS(null, "transform", "translate(" + event.userx + "," + event.usery + ")");
		this.ShapesSvg['hexagono'].setAttributeNS(DRAGNS, "x", event.userx);
        this.ShapesSvg['hexagono'].setAttributeNS(DRAGNS, "y", event.usery);
        this.ShapesSvg['hexagono'].setAttributeNS(null, "transform", "translate(" + event.userx + "," + event.usery + ")");
		
		switch(this.config.shape){
			case 'circle':
				$("#nodoPert"+this.PertId).css("left",this.currentx-this.AnchoShape*0.35);
				$("#nodoPert"+this.PertId).css("top",this.currenty-this.AnchoShape*0.35);
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
		for(var n in this.EdgeEntrada){
				var puntosflecha = $(this.EdgeEntrada[n].PuntaFlecha).attr("points");
				//puntosflecha = puntosflecha.split(" ");
				var puntoslinea = $(this.EdgeEntrada[n].Linea).attr("points");
				puntoslinea = puntoslinea.split(" ");
				var coordenadas = puntoslinea[2].split(",");
					coordenadas[0]= event.userx+(this.BasePosX-this.AnchoShape/2)-10;
					coordenadas[1]=event.usery+(this.BasePosY);
					coordenadas = coordenadas[0]+","+coordenadas[1];
					puntoslinea.splice(2,1);
					puntoslinea.splice(2,0,coordenadas);
					
					coordenadas = puntoslinea[3].split(",");
					coordenadas[0]= event.userx+(this.BasePosX-this.AnchoShape/2);
					coordenadas[1]=event.usery+(this.BasePosY);
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
					coordenadas[0]= event.userx+(this.BasePosX+this.AnchoShape/2);
					coordenadas[1]=event.usery+(this.BasePosY) ;
					coordenadas= coordenadas[0]+","+coordenadas[1];
					puntoslinea.splice(0,1);
					puntoslinea.splice(0,0,coordenadas);
					
					coordenadas = puntoslinea[1].split(",");
					coordenadas[0]= event.userx+(this.BasePosX+this.AnchoShape/2)+10;
					coordenadas[1]=event.usery+(this.BasePosY);
					puntoslinea.splice(1,1);
					puntoslinea.splice(1,0,coordenadas);
					puntoslinea= puntoslinea.join(" ");
					$(this.EdgeSalida[n].Linea).attr("points", puntoslinea)	;
		}

}
//--------------------------------------------------------------------------------------------------------------------------------------------------
Components.GrafoNodo.prototype.enableDrag = function() {
	if (this.DragStatus == false){
	Root = this.tree.svgcontainer.root;								//Root SVG es nesesario para el codigo que permite el arrastre
	$(this.ShapesSvg['circulo']).data("entidad",this);				//se almacena en el dato entidad el objeto para poder usarlo en el drag
	$(this.ShapesSvg['cuadrado']).data("entidad",this);				//se almacena en el dato entidad el objeto para poder usarlo en el drag
	$(this.ShapesSvg['hexagono']).data("entidad",this);				//se almacena en el dato entidad el objeto para poder usarlo en el drag
	$(this.divTexto).data("entidad",this);				//se almacena en el dato entidad el objeto para poder usarlo en el drag
	addDragEventListener(DRAGMOVE,this.DragMoveListener);			//Se agrega un evento para el controlador de grag durante el Movimiento del Mouse.
	enableDrag(this.ShapesSvg['circulo']);							//Activar el Drag sobre el elemento SVG circular
	enableDrag(this.ShapesSvg['cuadrado']);							//Activar el Drag sobre el elemento SVG circular
	enableDrag(this.ShapesSvg['hexagono']);							//Activar el Drag sobre el elemento SVG circular
	enableDrag(this.divTexto[0]);							//Activar el Drag sobre el elemento SVG circular
	this.DragStatus = true;
	}
}
Components.GrafoNodo.prototype.disableDrag = function() {
	disableDrag(this.ShapesSvg['circulo']);							//Activar el Drag sobre el elemento SVG circular
	disableDrag(this.ShapesSvg['cuadrado']);							//Activar el Drag sobre el elemento SVG circular
	disableDrag(this.ShapesSvg['hexagono']);	
	this.DragStatus = false;
}

//--------------------------------------------------------------------------------------------------------------------------------------------------
Components.GrafoNodo.prototype.ChangeShape = function(Shape) {
	$(this.ShapesSvg[this.shape]).hide();
	$(this.ShapesSvg[Shape]).show();
	this.shape = Shape;
}

