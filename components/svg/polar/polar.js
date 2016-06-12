/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	polar SVG v 1.0 - a jQuery Ui extension
	Licences: MIT & GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com], 
	* Fritz Velarde-Alvarez Aguilar (f.velardealvarez@gmail.com).
*/
Components.PolarSvg.prototype.init = function(dataObj){
    /**
     * Constructor de la clase PolarSvg.
    */
    //return ;
    this.config = {
        container: $('body'),
        id: "Polar-"+ Math.round(Math.random() * 2000),
		titulo:{'texto': "soy el titulo", 'fontSize': 20, 'y':20},
		subtitulo:{'texto': "soy subtitulo", 'fontSize': 15, 'y':40},
		distanciaTitulo: 15,
		fillPoligon:false,						//rellenar los poligonos con un fondo transparente
		pointscolors:'rgb(255, 86, 86)',
		width: -1,
		height:-1,
		rdif:40,								//incrementos del radio
		radioIni: 50,
		radialFontSize:10,						//tamaño de letra para los textos radiales
		legendDistance:100,						//distancia del centro del pai hasta la leyenda lineal
		legendSeparation:20,					//distancia entre items coordenada Y de la leyenda
		legendPosition: 'top',					//posicion de la leyenda
		poligonStrokeWidth:4,
		drawPromedio: true,
		css:new Array(),
        hidden: false,
		shadows: true,
        autoScroll: true,
        items: [],
        nodoSeleccionado:-1,
		responsive: true,
		showImage: true,
        svgcontainer:'',
		centerX:300,
		centerY:300,
		plugins:{
			svgToolTip: false,
		},
		calificador: 0,							//seteado en 0 para q dibuje el tipo de grafico del elementio 0
        //group:Math.round(Math.random()*999999),
        listeners: {
            show: function(){},
            hide: function(){},
			onRequestDeleteProyect: function(succes){},
			onRequestAddProyect: function(succes){},
			onSelectProyect: function(event,proyectoId){},
			onDeselectProyect: function(event,proyectoId){},
        }
    };

    for(var i in dataObj) {
        if(this.config[i] != undefined) {
            if((i == "listeners")||(i=="titulo")||(i=="subtitulo")) {
                for(var j in dataObj[i])
                    this.config[i][j] = dataObj[i][j];
            }
            else
                this.config[i] = dataObj[i];
        }
    }
	this.ElementosSeleccionados=[];
	this.ElementosSeleccionados[-1]=-1;
	this.multipleActivo=0;
	this.poligonStrokeWidth = this.config.poligonStrokeWidth;
	this.radialFontSize = this.config.radialFontSize;
	this.legendDistance = this.config.legendDistance;
	this.legendSeparation = this.config.legendSeparation;
	this.legendPosition = this.config.legendPosition;
    this.rdif = this.config.rdif;
    this.radioIni = this.config.radioIni;
	this.id=this.config.id;
    this.titulo=this.config.titulo;
    this.subtitulo=this.config.subtitulo;
	this.distanciaTitulo=this.config.distanciaTitulo;
	this.drawPromedio=this.config.drawPromedio;
	//manipulacion del lienzo SVG.
    this.svgcontainer = dataObj.svgcontainer;
    this.svgContend = this.svgcontainer.svgContend;
    this.root=dataObj.container;
    this.SVG = dataObj.svgcontainer.svg;
	this.fillPoligon = this.config.fillPoligon;
	this.showImage = this.config.showImage;
	
	this.criterio = dataObj.proyectos[Object.keys(dataObj.proyectos)[0]].criterio;
	// this.proyectos=new Array;
	this.proyectos={};
	this.proyectosLength=0;
		for(var ta in dataObj.proyectos){
			this.proyectos[dataObj.proyectos[ta].Id]=dataObj.proyectos[ta];
			this.proyectosLength=this.proyectosLength+1;
		}
	
	this.personal=dataObj.personal;
	this.criterios=dataObj.criterios;
    this.data = dataObj.criterios[this.criterio];
    this.NumFactor = this.data.vectores.length;
    this.NumEscala = this.data.vectores[0].datos.length;
	this.centerX =this.config.centerX;
    this.centerY =this.config.centerY;
	this.calificador=this.config.calificador;
	this.shadows=this.config.shadows;
	this.responsive=this.config.responsive;
    /*
    this.colors = {"total": 10, 1:"#006699", 2:"#00CCFF",
                   3:"#333300", 4:"#CC3300", 5:"#663366",
                   6:"#FFCC66", 7:"#99FF66", 8:"#999900",
                   9:"#FFFF00", 10:"#009900"};
                   */
    //this.currentColor = 0;
    this.Rfinal = '';
    this.FacTemp = '';
    this.puntosScala=new Array(); // Array que contiene los puntos de escala en el grafico
    this.puntos=new Array();
    this.FcolorOn='';
    this.EcolorOn='';
   
    this.polygonsGraphics = {};
    this.lines = {};//lineas del grafico
    this.texts = {}
    this.actcolor='';
    //new agregado
    //this.Recalpolar();
    // this.savePolygonsData();
    this.poligons={};
	
	this.existePromedio();
	if(this.criterioPromedio!=null){
		this.calcPromedio();
	}
	// this.draw();
	// this.setControls();
}

Components.PolarSvg.prototype.create = function(){
	if(this.config.plugins.svgToolTip){
		this.config.plugins.svgToolTip.svg=this.SVG;
			this.toolTipOBJ = Components.create('svgToolTip',this.config.plugins.svgToolTip);
	}
	this.draw();
	this.setControls();
};
Components.PolarSvg.prototype.additem = function(newProyecto){
	 /**
     * Esta funcion agrega un proyecto al diagrama.
     * @param newProyecto datos de calificacion basados dentro del proyecto basados en un criterio existente
     *
     */
	if(typeof(newProyecto.criterio)!="number"||typeof(newProyecto.Id)=='undefined'||typeof(newProyecto.Descripcion)=='undefined'||typeof(newProyecto.calificaciones)!="object"||Object.keys(newProyecto.calificaciones).length!=this.criterios[newProyecto.criterio].vectores.length){
			console.log("no es un proyecto");
			return;
	}
	
	var nuevoProyecto = jQuery.extend({}, newProyecto)
	while(this.proyectos[nuevoProyecto.Id])
		nuevoProyecto.Id=nuevoProyecto.Id+"r";
	
	this.proyectos[nuevoProyecto.Id]=nuevoProyecto;
	this.proyectosLength=this.proyectosLength+1;
    // this.proyectos.push(nuevoProyecto);
	this.hideAllPolygons();
	this.SVG.clear();
	if(nuevoProyecto.criterio==this.criterio){		//si el nuevo criterio es igual al criterio del promedio o del elemento 0 se calculan los puntos del promedio
		if(this.promedio!=null){
		delete this.proyectos[-1];				// eliminar el promedio, para calcularlo luego y añadirlo	
		this.proyectosLength=this.proyectosLength-1;
		// this.proyectos.splice(0,1);
		this.calcPromedio()
		}
	}else{											//si el nuevo criterio es distinto se destruye el promedio y se setea null
		if(this.promedio!=null){
			delete this.proyectos[-1];
			this.proyectosLength=this.proyectosLength-1;
			//this.proyectos.splice(0,1);					//PROBLEMAS
		}
		this.promedio=null;
		this.criterioPromedio=null;
	}
	this.draw();
	// this.resizeBody();
	this.config.listeners.onRequestAddProyect(nuevoProyecto.Id);
};
Components.PolarSvg.prototype.removeitem = function(proyectoId){
	 /**
     * Esta funcion remueve un proyecto del diagrama.
     * @param proyectoId ide del proyecto que sera eliminado.
     *
     */
    this.SVG.clear();
	delete this.proyectos[proyectoId];
	this.proyectosLength=this.proyectosLength-1;
	// this.proyectos.splice(proyectoId,1);
	if(this.criterioPromedio==null){			//al remover un item de distinto criterio se vuelve a determinar si existe un promedio
		this.existePromedio();
	}
	if(this.criterioPromedio!=null){		//si el promedio existe se calculan los puntos para dibujarse luego
		if(this.promedio!=null){
			delete this.proyectos[-1];
			this.proyectosLength=this.proyectosLength-1;
		}
		// this.promedio=null;
		this.calcPromedio();
	}
    this.draw();
	// this.resizeBody();
	this.config.listeners.onRequestDeleteProyect(true);
};
Components.PolarSvg.prototype.existePromedio=function(){				//se pueden escoger mejores nombres
	// determinar si existe el criterio PROMEDIO
	this.criterioPromedio=this.proyectos[Object.keys(this.proyectos)[0]].criterio
	for(var pro in this.proyectos){

		if(this.criterioPromedio!=this.proyectos[pro].criterio){
			this.criterioPromedio=null;
			break;
		}
	}
}
Components.PolarSvg.prototype.calcPromedio=function(){					//se pueden escoger mejores nombres
	this.promedio={};
	this.promedio["criterio"]=this.criterioPromedio;
	this.promedio["Id"]=-1;
	this.promedio["Descripcion"]="PROMEDIO";
	this.promedio["imagen"]="def.png";
	this.promedio["color"]="#000000";
	this.promedio["calificaciones"]={};
	for(var i in this.proyectos[Object.keys(this.proyectos)[0]].calificaciones){
		var suma=0;
		for(var pro in this.proyectos){
			
			suma=suma+parseInt($(this.proyectos[pro].calificaciones).attr(i));
			
		}
		// this.promedio["calificaciones"][i]=Math.round(suma/this.proyectosLength);
		this.promedio["calificaciones"][i]=suma/this.proyectosLength;
	}
	this.proyectosLength=this.proyectosLength+1;					//se puede hacer suma corta
	this.proyectos["-1"]=this.promedio;
	// this.drawPolygon(this.promedio);
	//this.criterio=this.promedio.criterio;
}
// Components.PolarSvg.prototype.create = function(){
	
// }
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.PolarSvg.prototype.draw=function(){
    /**
     * Esta funcion dibuja los circulos del diagrama de calificaciones.
     * @param numCircles indica el numero de circulos, usualmente el valor de calificacacion es de 1 a 5.
     */
    var numCircles = this.NumEscala;
    this.radioFin;
						//crear el grupo principal y relocalizarlo 
	this.grupo = this.SVG.group({transform: 'translate('+this.centerX+' '+this.centerY+')'});
						//crear el grupo de circuferencias
    this.ringGroup = this.SVG.group(this.grupo,{id: 'Anillos',stroke: 'rgba(36, 160, 229, 0.65)'});
    for(var i = 0; i < numCircles; i++)
    {
        this.radioFin = this.radioIni + this.rdif * i;
        this.SVG.circle(this.ringGroup, 0, 0, this.radioFin, {fill: 'none', strokeWidth: 1});
    }
	this.grupoTitulo = this.SVG.group(this.grupo,{id: 'Titulos'})		// se crea primero el grupo titulo para q este detras de todo, luego se le setea texto y posicion de acuerdo al polar

    var defs = this.SVG.defs(this.grupo);
    var filter = this.SVG.filter(defs, 'MyFilter'+this.id, -this.centerX, -this.centerY, this.centerX+this.radioFin+20, this.centerY+this.radioFin+20,
		{filterUnits: 'userSpaceOnUse'});
    this.SVG.filters.gaussianBlur(filter, 'blur', 'SourceAlpha', 4);
    this.SVG.filters.offset(filter, 'offsetBlur', 'blur', 4, 4);
    var spec = this.SVG.filters.specularLighting(filter, 'specOut', 'blur',
        5, 0.75, 20, {lightingColor: '#bbbbbb'});
    this.SVG.filters.pointLight(spec, '', -5000, -10000, 20000);
    this.SVG.filters.composite(filter, 'specOut', 'in', 'specOut', 'SourceAlpha');
    this.SVG.filters.composite(filter, 'litPaint', 'arithmetic', 'SourceGraphic',
        'specOut', 0, 1, 1, 0);
    var merge = this.SVG.filters.merge(filter, '', ['offsetBlur', 'litPaint']);
    // this.polygoneGroup = (this.shadows ? this.SVG.group(this.grupo,{id: 'Poligono',filter:'url(#MyFilter'+this.id+')'}) : this.SVG.group(this.grupo,{id: 'Poligono'}));
    
	this.angleCalculator();
	this.drawlines();
	// this.DrawpuntosEscala();
	this.savePolygonsData();
	
	this.polygoneGroup = (this.shadows ? this.SVG.group(this.grupo,{id: 'Poligono',filter:'url(#MyFilter'+this.id+')'}) : this.SVG.group(this.grupo,{id: 'Poligono'}));
	this.DrawpuntosEscala();
	
	var dist=-this.Rfinal-this.radialFontSize-this.distanciaTitulo-this.subtitulo.fontSize;
    this.SVG.text(this.grupoTitulo,this.titulo.texto, {x:0, y:dist, fontFamily: 'arial', fontSize: this.titulo.fontSize, fill: 'rgba(100, 160, 229, 0.95)',style:"text-anchor: middle;"});
    this.SVG.text(this.grupoTitulo,this.criterios[this.criterio].Descripcion, {x:0, y:dist+20, fontFamily: 'arial', fontSize: this.subtitulo.fontSize, fill: 'blue',style:"text-anchor: middle; font-weight: bolder;"});
	if(this.showImage){if(this.personal.imagen){
		this.imagenPersonal={};
		this.imagenPersonal["borde"]=this.SVG.rect(this.grupo, -this.centerX+5, -this.centerY+5, 50, 50,{fill: 'none', stroke: this.config.pointscolors, strokeWidth: 0});
		this.imagenPersonal["imagen"]=this.SVG.image(this.grupo,-this.centerX+5, -this.centerY+5, 50, 50, 'img/'+this.personal.imagen)
		$(this.imagenPersonal.imagen).attr("class","imagenPersonal");
		$(this.imagenPersonal.imagen).html('<title>Nombre:  '+this.personal.nombre+'<br>Id:  '+this.personal.Id+'<br>Maquina:  '+this.personal.maquina+'<title>');
	}}
	this.resizeBody();
	if(this.criterioPromedio!=null){						//this.criterioPromedio    q es un atributo de componente      o           this.promedio  q es un objeto
		this.reDraw(-1);
		this.criterio=this.promedio.criterio;				// se setea this.criterio luego de dibujar para q el redraw dibuje segun el criterio del promedio
	}
}
Components.PolarSvg.prototype.angleCalculator=function(){
	var angulo;
	this.angulos = new Array();
	var diam = 2 * Math.PI * this.radioIni;
	var arco = diam / this.NumFactor;
	for(var i = 1; i <= this.NumFactor; i++){
			arco = diam / this.NumFactor * i;
		angulo = arco / this.radioIni;
		this.angulos[i] = angulo;
	}
}
Components.PolarSvg.prototype.drawlines=function(){
    /**
     * Esta funcion dibuja las lineas  y titulos  de los factores de calificacion, en base al calculo de las coordenadas y angulos correspondiente al numero de factores,
     * dichos angulos tambien se usan para dibujar los puntos de escala de cada factor.
     * @param inc representa el incremento del radio en cada circulo de la plantilla del grafico de desempeño
     * @param radioIni representa el radio inicial del primer circulo de la plantilla del grafico de desempeño
     * @param numLines  representa el numero de lineas ó factores que se van a dibujar.
     * @param lines  representa un grupo de lineas a las cuales se le asigna caracteristicas de color y grosor.
     * @param arco  representa el angulo que corresponde a cada factor
     */
	this.lines[this.calificador]={};
	this.texts[this.calificador]={};
    var radioIni = this.radioIni;

    this.textGroup = this.SVG.group(this.grupo,{id: 'Texto',style: 'text-anchor:middle;font-size: '+this.radialFontSize+'px; font-weight: bold;'});
    var numLines = this.NumFactor;
    this.linesGroup = this.SVG.group(this.grupo,{id: 'Lineas',stroke: 'rgba(36, 160, 229, 0.65)', strokeWidth: 2});
    var diam = 2 * Math.PI * radioIni;
    var arco = diam / numLines;
    var angleRef = (arco / radioIni)/2;
    this.FacTemp=0; // ojo controlar este valor

    var defs = this.SVG.defs(this.grupo);
    for(var i = 1; i <= numLines; i++)
    {
                var calificador;
                // if(this.data.tarea!=0)
                    calificador= Object.keys(this.data.vectores);
                // else
                    // calificador =  this.calificador;
                // var indicetexto = Object.keys(this.data.vectores)[i-1];

        var x1 = radioIni * Math.cos(this.angulos[i]);
        var y1 = radioIni * Math.sin(this.angulos[i]);
        var x2 = this.radioFin * Math.cos(this.angulos[i]);
        var y2 = this.radioFin * Math.sin(this.angulos[i]);
				this.lines[this.calificador][i] = this.SVG.line(this.linesGroup, x1, y1, x2, y2,{strokeWidth: 1});
        var x3i = this.radioFin * Math.cos(this.angulos[i]-angleRef);
        var y3i = this.radioFin * Math.sin(this.angulos[i]-angleRef);
        var x3f = this.radioFin * Math.cos((diam/numLines*(i+1)/radioIni)-angleRef);
        var y3f = this.radioFin * Math.sin((diam/numLines*(i+1)/radioIni)-angleRef);
        var addX = 10;
        var addY = 10;
        if(x2 < 0) addX = -10;
        if(y2 < 0) addY = -10;

											//Dibujando textos circulares

        var path = this.SVG.createPath();
		this.SVG.path(defs, path.move(x3i, y3i).arc(this.radioFin,this.radioFin,this.angulos[i],0,1,x3f, y3f,0), {id: this.id+'MyPath'+i});
        //this.SVG.path(defs, path.move(x3i, y3i).curveQ([[x2+addX, y2+addY, x3f, y3f]]), {id: this.id+'MyPath'+i});
        this.texts[this.calificador][i] = this.SVG.text(this.textGroup,'', {fontFamily: 'Verdana',  fill: 'black'});
        var texts = this.SVG.createText();
											//correcion de indices no correlativos
        this.SVG.textpath(this.texts[this.calificador][i], '#'+this.id+'MyPath'+i, texts.span(this.data.vectores[i-1].titulo, {dy:-5}),{startOffset:'50%'});
        this.Rfinal=this.radioFin;
    }
    this.distancia = this.rdif;
}

Components.PolarSvg.prototype.DrawpuntosEscala=function(){
   /**
     * Esta funcion dibuja los puntos de escala de un factor de calificacion en base a un angulo determinado
     * @param angulo representa el valor de un angulo calculado para dibujar la linea de un factor de calificacion, en esta angulo se dibujan los puntos de escala
     * @param inc representa el incremento del radio en cada circulo de la plantilla del grafico de desempeño
     * @param NumEscala representa el valor de calificacacion, usualmente  es 5.
     */
	this.ballsGroup = this.SVG.group(this.grupo,{id: 'Bolas'});
    var mun;
    var Scal=this.NumEscala;

    for(var i = 1; i <= this.NumFactor; i++)
    {
        mun=0;
		Scal=this.NumEscala;
        while(this.NumEscala>mun){
            var x = this.Rfinal * Math.cos(this.angulos[i]) ;
            var y = this.Rfinal * Math.sin(this.angulos[i]) ;
            if(this.puntosScala[this.calificador]== undefined)
                        this.puntosScala[this.calificador] ={};
                    if(this.puntosScala[this.calificador][this.FacTemp]== undefined)
                        this.puntosScala[this.calificador][this.FacTemp] = {}
            this.puntosScala[this.calificador][this.FacTemp][Scal] = this.SVG.circle(this.ballsGroup, x , y, 2, {fill: this.config.pointscolors, stroke: this.config.pointscolors, strokeWidth: 2});
            //this.puntosScala[this.calificador][this.FacTemp][Scal] = this.SVG.circle( x , y, 2, {fill: 'rgba(255, 86, 86, 0.65)', stroke: 'rgba(255, 86, 86, 0.65)', strokeWidth: 1});
            $(this.puntosScala[this.calificador][this.FacTemp][Scal]).attr("class", "puntosEscala").data('calificacion',{Factor:this.FacTemp,Escala:mun});
			
			var text1 = 'Factor: ' + unescapeHTML(this.data.vectores[i-1].titulo);
			var text2 = 'Escala: ' + unescapeHTML(this.data.vectores[i-1].datos[this.NumEscala-mun-1]);
			$(this.puntosScala[this.calificador][this.FacTemp][Scal]).html('<title>'+text1+'<br>'+text2+'<title>');
			
            Scal--;
            this.Rfinal=this.Rfinal-this.rdif;
            mun++;
        }
        this.Rfinal=this.radioFin;

        if(this.FacTemp<=this.NumFactor){
            this.FacTemp++;
        }
    }
            $('.puntosEscala',this.root).mouseenter({OBJ:this,color:this.config.pointscolors}, function(event) {
                    event.target.setAttribute('fill',event.data.color);
                    event.target.setAttribute('stroke',event.data.color);
                    event.target.setAttribute('stroke-width','8');
                event.target.setAttribute('filter','url(#MyFilter'+event.data.OBJ.id+')');// = this.SVG.group({filter: 'url(#xxyMyFilter)'});
					if(event.data.OBJ.toolTipOBJ){
					var dataToolTip={texto:'<b>Factor: </b>'+event.data.OBJ.data.vectores[$(event.target).data().calificacion.Factor].titulo+'<br>'+'<b>Escala: </b>'+event.data.OBJ.data.vectores[$(event.target).data().calificacion.Factor].datos[event.data.OBJ.NumEscala-$(event.target).data().calificacion.Escala-1]};
					event.data.OBJ.toolTipOBJ.mouseenter(event,dataToolTip);
					}
            });

            $('.puntosEscala',this.root).mouseleave({OBJ:this,color:this.config.pointscolors}, function(event) {
                    event.target.setAttribute('fill',event.data.color);
                    event.target.setAttribute('stroke',event.data.color);
                    event.target.setAttribute('stroke-width','2');
                    $(event.target).removeAttr("filter");
					if(event.data.OBJ.toolTipOBJ){
					event.data.OBJ.toolTipOBJ.mouseleave();
					}
            });
}

Components.PolarSvg.prototype.savePolygonsData=function(){
    /*
     *  Funcion que dibuja la descripcion de cada una de las calificaciones, pueden ser de tareas o proyectos.
     *  @param inc es el incremento vertical cada vez que se dibuja la descripcion de una calificacion
     *  @param iniY  es  el valor de inicial de la coordenada vertical a partir del cual se dibujan las descripciones
     */
    var text;
	switch(this.legendPosition){
		case 'top':
			var iniY = -this.radioFin;
			break;
		case 'center':
			var iniY = -(this.proyectosLength*this.legendSeparation/2);
			break;
		case 'bottom':
			var iniY = this.radioFin-(this.proyectosLength*this.legendSeparation);
			break;
	}
	this.saveGroup = this.SVG.group(this.grupo,{id: '¿Legend?',fill: '#dddddd'});
	if(this.subtitulo.y>this.centerY+iniY)
		iniY=-this.centerY+this.subtitulo.y
	var iniX = this.radioFin+this.legendDistance;

    for (var calificador in this.proyectos) {
		
        iniY = iniY + this.legendSeparation;

        if(calificador == "promedio")
            text = "Promedio";
        else {
            if(this.criterios.tipo == "orden") {
                text = DataPersonalEmpresa[calificador].Presentacion;
                if(calificador==$('#usuarioactID').val()){
                    text = 'Yo';
                }
            }
            if(this.criterios.tipo == "global") {
                text = this.proyectos[calificador].Descripcion;
            }

            if(this.criterios.tipo == "empresa") {

                if(typeof(DataPersonalEmpresa[calificador])=='undefined'){
                    CargaPersonalPorId(calificador);
                }

                if(typeof(DataEmpresas[DataPersonalEmpresa[calificador].Empresa_ID])=='undefined'){
                    CargaMasEmpresas(DataPersonalEmpresa[calificador].Empresa_ID);
                }
                text= DataEmpresas[DataPersonalEmpresa[calificador].Empresa_ID].Nombre;
            }
        }

        this.polygonsGraphics[calificador] = {};								
        this.polygonsGraphics[calificador]["cuadradito"]=this.SVG.rect(this.saveGroup,iniX-15, iniY-8, 8, 8, {fill:'#dddddd', stroke:'#000'});
                if(this.proyectos[calificador].imagen=='')
                    this.SVG.image(this.saveGroup,iniX-30, iniY-10, 12, 12, 'images/Project.png');
                else
                    this.SVG.image(this.saveGroup,iniX-30, iniY-10, 12, 12, 'img/'+this.proyectos[calificador].imagen);
        if(calificador==$('#usuarioactID').val()){
        this.polygonsGraphics[calificador]["cuadradito"]=this.SVG.rect(this.saveGroup,iniX-15, iniY-8, 8, 8, {fill:'#dddddd', stroke:"#12BD26"});
        }
        this.polygonsGraphics[calificador]["text"] = this.SVG.text(this.saveGroup,text, {id: calificador, x:iniX, y: iniY, fontFamily: 'Arial', fontSize: '11', fill: '#dddddd'});
        $(this.polygonsGraphics[calificador]["text"]).css('cursor','pointer');
        $(this.polygonsGraphics[calificador]["text"]).bind('click',{OBJ:this,calificador:calificador}, function(event) {
				
                        if(event.data.OBJ.polygonsGraphics[event.data.calificador]["polygon"]!=undefined){
							for(var i in event.data.OBJ.polygonsGraphics){
								if(event.data.OBJ.polygonsGraphics[event.data.calificador]["polygon"]==event.data.OBJ.polygonsGraphics[i]["polygon"]){
									event.data.OBJ.hideCurrentPolygon(event.data.calificador)
									$(event.data.OBJ.polygonsGraphics[event.data.calificador]["text"]).attr("fill",'#dddddd')
									$(event.data.OBJ.polygonsGraphics[event.data.calificador]["cuadradito"]).attr("fill",'#dddddd')
									
						}}
						delete event.data.OBJ.ElementosSeleccionados[event.data.calificador];
						event.data.OBJ.config.listeners.onDeselectProyect(event,event.data.calificador);
						}else{
							event.data.OBJ.reDraw(event.data.calificador);
							event.data.OBJ.ElementosSeleccionados[event.data.calificador]=parseInt(event.data.calificador);
							event.data.OBJ.config.listeners.onSelectProyect(event,event.data.calificador);
						}			
        });
	}
}

Components.PolarSvg.prototype.Select_Deselect=function(calificador){
	
		for(var cali in this.ElementosSeleccionados)
		{
			if(this.polygonsGraphics[cali]["polygon"]!=undefined){
				for(var i in this.polygonsGraphics){
					if(this.polygonsGraphics[cali]["polygon"]==this.polygonsGraphics[i]["polygon"]){
						this.hideCurrentPolygon(cali)
						$(this.polygonsGraphics[cali]["text"]).attr("fill",'#dddddd')
						$(this.polygonsGraphics[cali]["cuadradito"]).attr("fill",'#dddddd')
										//OBJ.multipleActivo--; 
										/*
										this.multipleActivo++;
										if(this.multipleActivo<2)
											se marque el elemento seleccionado
										 */
					}
				}
				
			}
			delete this.ElementosSeleccionados[cali];
		}
		if(calificador>4)
		{
			this.reDraw(calificador);
			this.ElementosSeleccionados[calificador]=calificador;
		}
}

Components.PolarSvg.prototype.setControls=function(){
	$(".imagenPersonal",this.root).mouseenter({OBJ:this}, function(event) {
				event.data.OBJ.imagenPersonal.borde.setAttribute('stroke-width','8');
        });
	$(".imagenPersonal",this.root).mouseleave({OBJ:this}, function(event) {
				event.data.OBJ.imagenPersonal.borde.setAttribute('stroke-width','0');
    });
}
Components.PolarSvg.prototype.reDraw=function(calificador){
    /** SE NECESITA CAMBIAR LA SIGUIENTE DESCRIPCION*/
	
	/*
     * Funcion que redibuja el grafico de calificacion, deacuerdo a los factores de calificacion.
     *  @param calificador variable que  contiene el indice del calificador seleccionado, en base al cual se dibujara todo el grafico
     * &nbsp;1) Ocultar todos los polygnos dibujados y vacia los arrays que contienen los elementos dibujados.<br/>
     * &nbsp;2) Borrar los elementos dibujados<br/>
     * &nbsp;3) Dibujar la plantilla de circulos<br/>
     * &nbsp;4) Dibujar los nomenclatura de las calificaciones.  <br/>
     * &nbsp;5) Dibujar las lineas del grafico por cada factor de calificacion. <br/>
     * &nbsp;5) Dibujar Polygono de calificacion. <br/>
     */
     // console.log(this.data.modos);
	 if (this.criterio==this.proyectos[calificador].criterio){
		// this.hideAllPolygons();
		// this.SVG.clear();
		
        if($('#EscalaFactorDesempenotext').length>0)
            $('#EscalaFactorDesempenotext').svg('get').clear();
		
        // this.draw();
        this.calificador = calificador;

        this.actcolor=this.proyectos[this.calificador].color;
        // this.savePolygonsData();
        this.FcolorOn='';
        // if(this.data.tarea == 1)
            // this.NumFactor =    this.data.textos[this.criterio].length
        // else
            this.NumFactor =   this.data.vectores.length;
		// this.angleCalculator();
        // this.lines[this.calificador]={};
        // this.texts[this.calificador]={};
        // this.drawlines();
        this.polygonsGraphics[this.calificador]["polygon"] = this.drawPolygon(this.proyectos[this.calificador].calificaciones);
        this.polygonsGraphics[this.calificador]["polygon"].setAttribute("visibility","visible");
        this.polygonsGraphics[this.calificador]["cuadradito"].setAttribute("fill", this.actcolor);
        this.polygonsGraphics[this.calificador]["text"].setAttribute('fill', '#000000' );
        // this.DrawpuntosEscala();
    }else{
		this.criterio=this.proyectos[calificador].criterio;
		this.data = this.criterios[this.criterio];
		
		this.hideAllPolygons();
		this.SVG.clear();
		this.NumFactor = this.data.vectores.length;
		this.NumEscala = this.data.vectores[0].datos.length;
        this.draw();
        this.calificador = calificador;
        this.actcolor=this.proyectos[this.calificador].color;
        // this.savePolygonsData();
        this.FcolorOn='';
        // if(this.data.tarea == 1)
            // this.NumFactor =    this.data.textos[this.criterio].length
        // else
            // this.NumFactor =   this.data.vectores.length;
		// this.angleCalculator();
		
        this.lines[this.calificador]={};
        this.texts[this.calificador]={};
        // this.drawlines();
        this.polygonsGraphics[this.calificador]["polygon"] = this.drawPolygon(this.proyectos[this.calificador].calificaciones);
        this.polygonsGraphics[this.calificador]["polygon"].setAttribute("visibility","visible");
        //this.polygonsGraphics[this.calificador]["polygon"].setAttribute("stroke","#12BD26");
        this.polygonsGraphics[this.calificador]["cuadradito"].setAttribute("fill", this.actcolor);
        this.polygonsGraphics[this.calificador]["text"].setAttribute('fill', '#000000' );
        // this.DrawpuntosEscala();
    }
	if(this.toolTipOBJ){
	$(this.polygonsGraphics[this.calificador]["polygon"]).bind('mouseenter',{OBJ:this}, function(event) {
			var dataToolTip={texto: event.data.OBJ.criterios[event.data.OBJ.proyectos[event.data.OBJ.calificador].criterio].Descripcion};
			event.data.OBJ.toolTipOBJ.mouseenter(event, dataToolTip);
	});
	$(this.polygonsGraphics[this.calificador]["polygon"]).bind("mousemove", {OBJ:this}, function(event) {
			event.data.OBJ.toolTipOBJ.mousemove(event);
	});
	$(this.polygonsGraphics[this.calificador]["polygon"]).bind("mouseleave", {OBJ:this}, function(event) {
			event.data.OBJ.toolTipOBJ.mouseleave();
	});
	}
}
Components.PolarSvg.prototype.hideCurrentPolygon=function(elemento){
	
	if(this.polygonsGraphics[elemento]["polygon"] != undefined){
		this.polygonsGraphics[elemento]["polygon"].setAttribute("visibility","hidden");
		// delete Components.getComponentById('polarid').polygonsGraphics[i].polygon
		this.polygonsGraphics[elemento]["polygon"].remove()
		delete this.polygonsGraphics[elemento].polygon
	}	
}
Components.PolarSvg.prototype.hideAllPolygons=function(){
     /*
     * Funcion que vacia y oculta los polygonos, lineas, puntos de escala y titulos de escala.
     */
    for (var calificador in this.polygonsGraphics){
                if(this.polygonsGraphics[calificador]["polygon"] != undefined)
                    this.polygonsGraphics[calificador]["polygon"].setAttribute("visibility","hidden");
    }
        // for (var calificador in this.lines){
            // for(var linea in this.lines[calificador] )
                // {
                    // if(this.lines[calificador][linea] != undefined)
                    // this.lines[calificador][linea].remove();
                // }
    // }

       // for (var calificador in this.puntosScala){
            // for(var puntos in this.puntosScala[calificador] ){
                  // for(var punto in this.puntosScala[calificador][puntos] ){
                        // if(this.puntosScala[calificador][puntos][punto] != undefined)
                             // this.puntosScala[calificador][puntos][punto].remove();
                    // }
                // }
       // }
       // for (var calificador in this.texts){
            // for(var texto in this.texts[calificador] ){
                  // if(this.texts[calificador][texto] != undefined)
                       // this.texts[calificador][texto].remove();
                // }
       // }
}

Components.PolarSvg.prototype.drawPolygon=function(calificacion){
     /*
     * Funcion que dibuja un polygono de calificacion.
     * @param  calificacion  un objeto que  contiene las calificaciones en una relacion: {numfactor=>calificacion} de una determianda tarea o proyecto
     */
    var line;
    var circle;
    var points = new Array();
    for (var factor in calificacion) {
        line = factor;
        circle = calificacion[factor];
        points.push(this.getPoint(line,circle));
    }
    points.push(this.getPoint(1,calificacion[1]));

    var color;
    // if(this.data.ground==0){
        // color='none';
    // }else{
        hex = this.actcolor.replace('#','');
        r = parseInt(hex.substring(0,2), 16);
        g = parseInt(hex.substring(2,4), 16);
        b = parseInt(hex.substring(4,6), 16);
        color='rgba('+r+','+g+','+b+',0.1)';
    // }

    //console.log(points);
	if (this.fillPoligon){
		return (this.SVG.polyline(this.polygoneGroup,points, {fill: color, stroke: this.actcolor, strokeWidth: this.poligonStrokeWidth, visibility: 'hidden'}));
	}
	else{
		return (this.SVG.polyline(this.polygoneGroup,points, {fill: 'none',stroke: this.actcolor, strokeWidth: this.poligonStrokeWidth, visibility: 'hidden'}));
	}
}

Components.PolarSvg.prototype.getPoint=function(line, circle){
     /*
     * Funcion que calcula uno de los puntos de un polygono de calificacion.
     * @param  line  es el id de factor
     * @param  circle  es el valor de la calificacion
     */
    var radio = this.radioIni + this.distancia*(circle-1);
    var posX = radio*Math.cos(this.angulos[line]);
    var posY = radio*Math.sin(this.angulos[line]);
    return [posX, posY];
}

Components.PolarSvg.prototype.Recalpolar = function() {

    this.svgContend.width(600);
    this.svgContend.height(200);
    $(this.root).attr({'width':'1000','height':'1000'});
}
Components.PolarSvg.prototype.resizeBody = function(){
	
	var x= this.centerX+this.saveGroup.getBBox().x+this.saveGroup.getBBox().width+15;
	var y;
	// this.centerY+this.saveGroup.getBBox().y+this.saveGroup.getBBox().height;
	if (this.textGroup){
		y= this.centerY+this.textGroup.getBBox().y+this.textGroup.getBBox().height;
			if(this.centerY+this.saveGroup.getBBox().y+this.saveGroup.getBBox().height>y)
				y=this.centerY+this.saveGroup.getBBox().y+this.saveGroup.getBBox().height;
			if(this.centerY+this.radioFin>y)
				y=this.centerY+this.radioFin;
	}
	else{
		y=this.centerY+this.radioFin;
		if(this.centerY+this.saveGroup.getBBox().y+this.saveGroup.getBBox().height>y)
			y=this.centerY+this.saveGroup.getBBox().y+this.saveGroup.getBBox().height;
	}
	// if(this.textGroup.getBBox().y<this.grupoTitulo.getBBox().y+this.grupoTitulo.getBBox().height){
		// var diferencia=-this.textGroup.getBBox().y+this.grupoTitulo.getBBox().y+this.grupoTitulo.getBBox().height
		// this.centerY=this.centerY+diferencia;
		// $(this.grupoTitulo).attr('transform','translate('+0+' '+(this.centerY-this.textGroup.getBBox().y-diferencia)+')');
		// $(this.grupo).attr('transform','translate('+this.centerX+' '+this.centerY+')');
		// y=y+diferencia
	// }

	this.svgContend.width(x);
	this.svgContend.height(y);
	$(this.root).attr({'width':x,'height':y});
	
	if(this.responsive){
		var anchoVentana = this.svgContend.parent().outerWidth()
		var scale = anchoVentana/x;
		if (scale<1){
			$(this.grupo).attr('transform','translate('+scale*this.centerX+' '+scale*this.centerY+'),scale('+scale+','+scale+')');
			this.svgContend.width(x*scale);
			this.svgContend.height(y*scale);
			$(this.root).attr({'width':x*scale,'height':y*scale});
		}else{
			$(this.grupo).attr('transform','translate('+this.centerX+' '+this.centerY+'),scale('+1+','+1+')');
			this.svgContend.width(x);
			this.svgContend.height(y);
			$(this.root).attr({'width':x,'height':y});
		}
	}
}
