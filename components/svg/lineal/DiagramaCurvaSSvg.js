
//svg, tipoC, inicio
var DiagramaCurvaSSvg = function(data) {
	this.svg = data["svg"];
	this.tipo = data["tipo"];
	var inicio = data["padre"];
	this.padre = data["padre"];
	this.curvaConZoom = false;
	this.selector = this.svg.rect(0, 0, 10, 10, {visibility:"hidden", stroke:"black", fill:"none"});	
	this.activo=false;//false:svg true:canvas
	this.origenX = 50;							//margen a la izquierda para iniciar el diagrama
	this.escalaX = 2;
	this.escalaY = 1;
	this.anchoBase = 600;
	this.altoBase = 400;
	this.MarginTopDC = 50;
	this.MarginBottomDC = 65;
	this.MarginLeftDC = 50;
	this.MarginRightDC = 100;
	this.zoomControl = {
		enable:false,
		xs:0,
		xf:0,
		ys:0,
		yf:0,
	};	
	this.dataSet = ['Dataset0','Dataset1','Dataset2']; 		//para usar cuando se va dibujar multiples dataset en una sola grafica.	
	this.dataSetConfig = {
		Dataset0:{
			color:'green',
			titulo:'valor gastado',
			strokeWidth:2,
			lineType: 'dashes',		
			lineAnimation: true,
				
		},
		Dataset1:{
			color:'red',
			titulo:'valor planeado',
			strokeWidth:1,
			lineType: 'dashes',		
		},
		Dataset2:{
			color:'black',
			titulo:'valor cobrado',
			strokeWidth:3,
			lineType: 'solid',
		},
		
	}
	this.barrasConfig = {			//Se dibujan barras de acumulacion.	{este nombre de variable no me gusta}.
		enable:true,
		scaleType:'week',
		dataset:'Dataset0',
		color:'red',
		anchoPixeles:6
	}
	this.ejeXconfig ={
		0:{
			enable:false,
			tickspace:40,
			legend:false,
			scale:'mont'
		},
		1:{
			enable:false,
			tickspace:10,
			legend:false,
			scale:'week'
		},
		2:{
			enable:true,
			tickspace:10,
			legend:true,
			scale:'day'
		}
	}
	this.mesesStr = new Array("Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic");        
	
	// Informacion necesaria para graficar la curva
	this.HitosIds = new Array();		// Almacenara los ids de los hitos que se encuentren
	this.DataValues = new Array();		// Guardara la correspondencia entre dia y valor, totalizado para realizar la curva
	this.TotalY = 0;					// Guardara la numeracion maxima que debe tener el ejeY
	this.iniFec = data['iniFec'];		//fecha de inicio del proyecto, formato timestamp	
	this.finFec = data['finFec'];		//fecha de fin del proyecto, formato timestamp
	// Variables graficas para dibujar la curva
	this.axisX = new Array();
	this.axisY = new Array();
	this.points = new Array();
	this.curva = new Array();
	this.hitos = new Array();
	this.showHitos = false;
	this.Barras = new Array();//
	this.BarrasTope = new Array();
	this.BarrasNombres = data["barrasnombres"];///
	this.BarrasValores= data["barrasvalores"];//	
	this.g = 0;
	this.defs = 0;
	this.Permanente=false;
	this.hitosPermanente = new Array();
	this.estadolineafecha = "hidden";
	//-------------------------------------------------------------------------------------
	this.linealizeData(1);
	//calcular el numero de dias que ocupa el eje Y
	this.Start = new Date(this.DataValues.ejeX[0]);
	this.End = new Date(this.DataValues.ejeX[this.DataValues.ejeX.length-1]);
	this.numDivX = dateDiffInDays(this.Start,this.End);
	//---------------------------------------------------------------------------------------
	if (this.TotalY == 0)	this.TotalY = 1;				//total de elementos en el eje Y
	if (this.numDivX == 0)	this.numDivX = 1;				//Total de elementos en el eje X
	this.ejeX;
    this.grupocontenedor;
    this.BarraCurvaS= new Array();
    this.largo=0;
	//this.esp = 50;//espacio origen X
	this.distanciasemanal=null;
        this.distanciamensual=null;
        
}
 //#################################################################################
 DiagramaCurvaSSvg.prototype.draw = function() {
	this.anchoDiagrama = this.anchoBase*this.escalaX;							//parametro importante, para los calculos internos de escalas ancho del diagrama
	this.altoDiagrama = this.altoBase*this.escalaY;								//parametro importante, para los calculos internos de escalas alto del diagrama
	this.origenY = this.altoDiagrama + this.MarginTopDC;
	this.Ancho = this.anchoDiagrama + this.origenX + this.MarginRightDC;
	this.Alto = this.altoDiagrama + this.MarginTopDC + this.MarginBottomDC;
	this.deltaY = this.altoDiagrama / this.TotalY;					//Este parametro es el alto del diagrama entre el valor mas grande en el eje Y		
	this.deltaX = this.anchoDiagrama / this.numDivX;	
	if(this.zoomControl.enable){
		//ajustes para un zoom rectangular
		var zoomSpaceX = (this.zoomControl.xf-this.zoomControl.xs)*this.deltaX;
		this.deltaX=this.deltaX*this.anchoDiagrama/zoomSpaceX;
		var zoomSpaceY = (this.zoomControl.yf-this.zoomControl.ys)*this.deltaY;
		this.deltaY=this.deltaY*this.altoDiagrama/zoomSpaceY;
	}
		
	
	
	if (!this.title || !this.nameX || !this.nameY) {	
	this.title = "CURVA S de DURACION";
	this.nameY = "Dataset0";
	this.nameX = "Tiempo";
	}
	console.log('ejeY');	
	this.drawAxisY();
	console.log('ejeX');
	for(escala in this.ejeXconfig){
		if(this.ejeXconfig[escala].enable){
			this.drawAxisX(this.ejeXconfig[escala]);	
		}
	}	

    this.drawCurva();
	this.drawInfo();

}
//#################################################################################
DiagramaCurvaSSvg.prototype.ZoomOf = function(points) {
	this.curvaZoom = new Array();
	var x1 = Math.floor((points.x1 - this.origenX)/this.deltaX) > 0 ? Math.floor((points.x1 - this.origenX)/this.deltaX) : 0;
	var x2 = Math.ceil((points.x2 - this.origenX)/this.deltaX) <= this.numDivX ? Math.ceil((points.x2 - this.origenX)/this.deltaX) : (this.numDivX-1);
	var y1 = Math.floor((this.origenY - points.y1)/this.deltaY) <= this.TotalY ? Math.round((this.origenY - points.y1)/this.deltaY) : this.TotalY;
	var y2 = Math.ceil((this.origenY - points.y2)/this.deltaY) > 0 ? Math.round((this.origenY - points.y2)/this.deltaY) : 0;
	console.log('pointsZoom: x1: '+x1+',y1: '+y1+'x2: '+x2+',y2: '+y2);		//en coordenadas y tenemos valor numerico, en coordenadas x tenemos el valor de el indice que corresponde.
	var inix = Math.min(x1,x2);
	var finx = Math.max(x1,x2);
	var iniy = Math.min(y1,y2);
	var finy = Math.max(y1,y2);
	this.zoomControl.enable = true;
	this.zoomControl.xs = inix;
	this.zoomControl.xf = finx;
	this.zoomControl.ys = iniy;
	this.zoomControl.yf = finy;
	this.redraw();
}
//#################################################################################
//#################################################################################
//#################################################################################
//#################################################################################
//#################################################################################
DiagramaCurvaSSvg.prototype.calcularHitos = function() {
   
    this.HitosIds= new Array();   
    $("#divLoadDB").html('Calculando Hitos');
    var indice;
    for(var dt in DataTareas)
            {
                if(DataTareas[dt].Dataset0=="0" & dt!=0)
                    {   
                       if(this.tipo =="duraciontestacumulado" || this.tipo =="trabajotestacumulado" || this.tipo =="costotestacumulado"  || this.tipo =="trabajotestacumuladotarea"  || this.tipo =="costotestacumuladotarea")
                            indice=dt;                       
                       else
                            indice = this.DataValues.ejeX.indexOf(Date.parse(DataTareas[dt].Start.date).toString("yyyy-M-d")) ;   
                        this.HitosIds.push(indice);
                    }
            }
}
//#################################################################################
DiagramaCurvaSSvg.prototype.linealizeData = function() {
//convierte los datos entregados en array asociativo dirigido por fechas en un array par lineal
//en DataValues["ejeX"] se entrega las fechas
//en DataValues["ejeY"] se entregan los valores
	this.tipoDeGrafico = 'acumulativo';
	this.DataValues["ejeX"] = new Array();
	this.DataValues["ejeY"] = new Array();
	this.DataValues["Total"] = new Array();
	this.DataValues["TotalNoAcumulado"] = new Array();
	$this=this;//this.padre
	var data = datamacho;
	var mayor=0;				//valor mas alto acumulable en un solo dia
	$this.mayorppos=0;
	var acumulador = new Array();			//se va acumulando la suma de los valores anteriores
	//inicializar las variables de control de el ejeY
	for (var dataN in this.dataSet){	//crear arrays para cada datasetY
		this.DataValues.ejeY[this.dataSet[dataN]] = new Array();
		this.DataValues.Total[this.dataSet[dataN]] = new Array();
		acumulador[this.dataSet[dataN]] = 0;
	}
		  //bucle anio
	for(var anio in data){   					//bucle año
	  for(var mes in data[anio]){			//bucle mes
		   for(var dia in data[anio][mes]){ //bucle dia  
				for (var dataN in this.dataSet){	//bucle datasets
							if(data[anio][mes][dia][this.dataSet[dataN]]>mayor){		//se encuentra el mayor de un solo dataset.
								mayor=data[anio][mes][dia][this.dataSet[dataN]];
							}
				acumulador[this.dataSet[dataN]] = data[anio][mes][dia][this.dataSet[dataN]] + acumulador[this.dataSet[dataN]];
				this.DataValues.ejeY[this.dataSet[dataN]].push(data[anio][mes][dia][[this.dataSet[dataN]]]);
				this.DataValues.Total[this.dataSet[dataN]].push(acumulador[this.dataSet[dataN]]);	
				}	   
			   this.DataValues.ejeX.push(anio+"-"+mes+"-"+dia);
		   }
	  }
	} 
	if(this.tipoDeGrafico == 'acumulativo'){
		this.TotalY=0;
		for (var dataN in this.dataSet){	//crear arrays para cada datasetY
			if(acumulador[this.dataSet[dataN]]>this.TotalY){
				this.TotalY=acumulador[this.dataSet[dataN]];
			}
		}              	
	}else{
		this.TotalY= mayor;                	
	}
	
	$this.HitosIds.push(mayor);
}
//#################################################################################
DiagramaCurvaSSvg.prototype.IncZoomX = function() {
	this.escalaX += 0.5;
	this.redraw();
}
//#################################################################################
DiagramaCurvaSSvg.prototype.DecZoomX = function() {
	this.escalaX -= 0.5;
	this.redraw();
}
//#################################################################################
DiagramaCurvaSSvg.prototype.IncZoomY = function() {
	this.escalaY = this.escalaY + 0.5;		
	this.redraw();
}
//#################################################################################
DiagramaCurvaSSvg.prototype.DecZoomY = function() {
	this.escalaY = this.escalaY - 0.5;
	this.redraw();
}
//#################################################################################
DiagramaCurvaSSvg.prototype.redraw = function() {
	this.removeGraphics();
	this.draw();
}
//#################################################################################
DiagramaCurvaSSvg.prototype.resetScale = function() {
	this.escalaX = 1;
	this.escalaY = 1;
	this.redraw();
}
DiagramaCurvaSSvg.prototype.removeGraphics = function() {
	this.svg.clear();
	this.points = new Array();
	this.curva[0] = null;
	this.hitos = new Array();
	this.axisX = new Array();
	this.axisY = new Array();
}
//#################################################################################
DiagramaCurvaSSvg.prototype.drawInfo = function() {
	this.info = new Array();
if(!this.activo){	
	// Mostramos el titulo del diagrama
	this.info["title"] = this.svg.text(this.grupocontenedor,this.title, {x:this.Ancho/2 - 50, y:this.MarginTopDC/2, fontFamily: 'Arial black', fontSize:'15', fill: 'black'});
	
	// Mostramos el nombre del eje X
	this.info["nameX"] = this.svg.text(this.grupocontenedor,this.nameX, {x:this.origenX + this.anchoDiagrama + 10, y:this.origenY+3, fontFamily: 'Arial black', fontSize: '11', fill: 'black'});
	
	// Mostramos el nombre del eje Y
	this.info["nameY"] = this.svg.text(this.grupocontenedor,this.nameY, {x:this.origenX - 25, y:this.MarginTopDC - 10, fontFamily: 'Arial black', fontSize: '11', fill: 'black'});
}else
{
	// Mostramos el titulo del diagrama
	this.info["title"] = $("#canvas").drawText({  text:this.title,x:this.Ancho/2 - 50, y:this.MarginTopDC/2, fontFamily: 'Arial black', fontSize: 15, layer: true, fillStyle: 'black', "font-weight":"Bold"});
	
	// Mostramos el nombre del eje X
	this.info["nameX"] = $("#canvas").drawText({  text:this.nameX,x:this.origenX + this.anchoDiagrama + 10, y:this.origenY+3, fontFamily: 'Arial black', fontSize: 11, layer: true, fillStyle: 'black', "font-weight":"Bold"});
	
	// Mostramos el nombre del eje Y
	this.info["nameY"] = $("#canvas").drawText({  text:this.nameY,x:this.origenX - 25, y:this.MarginTopDC - 10, fontFamily: 'Arial black', fontSize: 11, layer: true, fillStyle: 'black', "font-weight":"Bold"});
}
	
}
//#################################################################################
DiagramaCurvaSSvg.prototype.generarDatoAcumulativo = function(rango,dataset) {
/*las curvas S son de datos acumulados en el tiempo, el objetivo de esta funcion es acomodar los datos para este tipo de graficas.

@param rango
	day: acumular dia a dia los datos en el array de datos, este dato lo precalculo ya el linealizador de datos.
	week: acumular la suma de datos de la semana el el dia 6 de la semana. Semana = {0,1,2,3,4,5,6} dias
	mont: acumular la suma de los datos del mes en el ultimo elemento del mes.
	anual: acumular la suma de los datos de año en año,  el ultimo dia del año
*/
switch(rango){
	case 'day':
	//la funcion que linealiza los datos ya calcula los datos acumulados a nivel de dias en el array.
	//this.DataValues.Total
	break;
	case 'week':
	//el dato se acumulara en el ultimo dia de la semana dia 6 de [0-6] dias.
	var indice = 0;
	//primero determinamos en que dia de la semana esta el primer elemento de los datos, y para la primera semana hacemos un trato particular
	var fechapivot = new Date.parse(this.DataValues.ejeX[0]);
	var weekDay = fechapivot.getDay();
	this.DataValues['weekTotal']= {};	//para guardar los resultados
	this.DataValues['weekTotal'][dataset] ={};
	this.DataValues['weekTotal'][dataset][6-weekDay]=this.DataValues.Total[dataset][6-weekDay];
	indice = 6-weekDay;					//el indice apunta a el dia 6 de una semana de {0,1,2,3,4,5,6} dias. {el dia 0 es Dom y el 6 el sabado, estamos apuntando a los sabados}
	//el resto de las semanas tiene el mismo trato. 
	while (indice<this.DataValues.Total[dataset].length) {
		if((typeof(this.DataValues.Total[dataset][indice+7])=="undefined")){
			this.DataValues['weekTotal'][dataset][this.DataValues.Total[dataset].length-1] = this.DataValues.Total[dataset][this.DataValues.Total[dataset].length-1]-this.DataValues.Total[dataset][indice];
		}else{
			this.DataValues['weekTotal'][dataset][indice+7]=this.DataValues.Total[dataset][indice+7]-this.DataValues.Total[dataset][indice];
		}
		indice=indice+7;
	}		
	break;
	case 'mont':
	//el dato se acumulara en el ultimo dia del mes.
	var indice = 0;
	//primero determinamos en que dia de el mes inicia el array de datos
	var fechapivot = new Date.parse(this.DataValues.ejeX[0]);
	var montDay = fechapivot.getDate();
	var montEnd = fechapivot.moveToLastDayOfMonth().getDate();
	this.DataValues['montTotal']= {};	//para guardar los resultados
	this.DataValues['montTotal'][dataset] = {};
	this.DataValues['montTotal'][dataset][montEnd-montDay]=this.DataValues.Total[dataset][montEnd-montDay];	//el valor acumulado del mes se guarda en el ultimo dia del mes
	indice = montEnd-montDay;					//el indice apunta a el ultimo dia del primer mes.
	//el resto de los meses tiene el mismo trato. 
	while (indice<this.DataValues.Total[dataset].length) {
		if(typeof(this.DataValues.ejeX[indice+1])!="undefined"){
			fechapivot = new Date.parse(this.DataValues.ejeX[indice+1]);		//primer dia del siguiente mes.
			montEnd = fechapivot.moveToLastDayOfMonth().getDate();
		}else{
			indice=this.DataValues.Total[dataset].length;								//rompemos el bucle si faltan datos, o estamos en el ultimo elemento
		}
		//ahora verificamos que exista el elemento al final del mes.
		if(typeof(this.DataValues.ejeX[indice+montEnd])!="undefined"){			//el elemento de fin de mes existe hacer calculos
			this.DataValues['montTotal'][dataset][indice+montEnd]=this.DataValues.Total[dataset][indice+montEnd]-this.DataValues.Total[dataset][indice];	//el valor acumulado del mes se guarda 
			indice=indice+montEnd;		//avanzamos el indice el numero de dias que tiene el mes.
		}
		else{	//el mes termina antes de su ultimo dia, se almacena su acumulado en el ultimo indiceX existente.
			this.DataValues['montTotal'][dataset][this.DataValues.Total[dataset].length-1]=this.DataValues.Total[dataset][this.DataValues.Total[dataset].length-1]-this.DataValues.Total[dataset][indice];
			indice = this.DataValues.Total[dataset].length;
		}
	}	
	break;
	case 'year':
	break;
}
}
//#################################################################################
DiagramaCurvaSSvg.prototype.drawCurva = function() {
//la grafica final es una polilinea que usa todos los pares x,y que existieran,
//un grafico de lineas puede estar conformado por mas de un grupo de datos para el ejeY.
//los datos del ejeX son unicos.
var zoomXsdiff = 0;		//cuando esta activa un zoom por ventana su valor sera diferente de 0
var limitX = 0;
var xclass = '';
var ejeYIni = 0;
var ejeYFin = 0;
var ajusteZoomY = 0;

	for (var dataIndex in this.dataSet){		//cada dataset es una linea diferente
	this.points= new Array();
	//si no esta activada una ventana de zoom el punto inicial es  
	if(this.zoomControl.enable){
		limitX = this.zoomControl.xf;						//indice en el cual iniciar
		zoomXsdiff = this.zoomControl.xs*this.deltaX;		//inicio nuevo en el ejeX 
		ejeYIni = this.zoomControl.ys;
		ejeYFin = this.zoomControl.yf;
		ajusteZoomY = ejeYIni*this.deltaY;
		this.points.push([this.origenX, this.origenY - this.DataValues.Total[this.dataSet[dataIndex]][this.zoomControl.xs]*this.deltaY+ajusteZoomY]);	
	}
	else{
		limitX = this.numDivX;
		this.points.push([this.origenX, this.origenY - this.DataValues.Total[this.dataSet[dataIndex]][0]*this.deltaY]);
	}
	
                var ultimo=0;
                var valor =0;
		for(var i = this.zoomControl.xs+1; i < limitX; i++) {
                        if(arguments[0]== "undefined")
                            this.points.push([this.origenX + i*this.deltaX-zoomXsdiff, this.origenY - this.DataValues.Total[this.dataSet[dataIndex]][i]*this.deltaY+ajusteZoomY]);
                        else{  
                            if(this.DataValues.Total[this.dataSet[dataIndex]][i]== 0)
                                valor =ultimo*this.deltaY;
                            else
                                valor =this.DataValues.Total[this.dataSet[dataIndex]][i]*this.deltaY;                                
                            
                            this.points.push([this.origenX + i*this.deltaX-zoomXsdiff, this.origenY - valor+ajusteZoomY]);
                            if(this.DataValues.Total[this.dataSet[dataIndex]][i]!= 0)
                                  ultimo=this.DataValues.Total[this.dataSet[dataIndex]][i];
                        }
		}
		console.log(this.points);
		this.curva[this.dataSet[dataIndex]] = this.svg.polyline(this.grupocontenedor,this.points, {fill: 'none', stroke: this.dataSetConfig[this.dataSet[dataIndex]].color, strokeWidth: this.dataSetConfig[this.dataSet[dataIndex]].strokeWidth});	
		//las lineas svg no usan class, usan atributos hay ue preparar los atributos leyendo la configuracion
				if((typeof(this.dataSetConfig[this.dataSet[dataIndex]].lineType)!=='undefined')&&(this.dataSetConfig[this.dataSet[dataIndex]].lineType=='dashes')){
			var xclass =  'lineal-graph-dashes ';
			if((typeof(this.dataSetConfig[this.dataSet[dataIndex]].lineAnimation)!=='undefined')&&(this.dataSetConfig[this.dataSet[dataIndex]].lineType)){
				var xclass =  xclass + 'lineal-graph-animation ';
			}
		}
		if(xclass!=''){
			$(this.curva[this.dataSet[dataIndex]]).attr('class',xclass);
			xclass = '';
		}
		}
	//si estaactivado el dibujar barras acumulativas semanales o mensuales dibujarlas.
	if(this.barrasConfig.enable){
		this.generarDatoAcumulativo(this.barrasConfig.scaleType,this.barrasConfig.dataset);
		this.drawBarras(this.barrasConfig.dataset);
	}
}
//--------------------------------------------------------------------------------------------------------------------------------
DiagramaCurvaSSvg.prototype.drawBarras = function(dataset) {
	/*dibuja las barras de acumulacion, sean por semana o mes, el de año aun no esta implementado
	toma los parametros de la clase:
	@Param this.scaleType : controla la barra que se mostrara {week,mont}.
	//antes de poder dibujar estas barras los datos son acumulados en la funcion: generarDatoAcumulativo() , esta funcion retorna:
	@Param 	this.DataValues['weekTotal']	tiene los datos acumulados el dia 6{sabado} de la semana			
	@Param	this.DataValues['montTotal']
	
	*/
	console.log('datos acumulados');
	console.log(this.DataValues['weekTotal']);
	console.log(this.DataValues['montTotal']);
    var inicio = 50;
    var current=0;
    var datosacumulados;
    var datosacumulados2;  
    var cadena="";
	
	var anchobarra = this.barrasConfig.anchoPixeles;
	var zoomXsdiff = 0;		//cuando esta activa un zoom por ventana su valor sera diferente de 0
	var limit = 0;          //cuando esta activa un zoom por ventana su valor sera diferente de 0
	if(this.barrasConfig.scaleType=='week'){
		datosacumulados = this.DataValues['weekTotal'][dataset];
	 }else {
		 datosacumulados = this.DataValues['montTotal'][dataset];
	 }
	 var IndiceFinal = Object.keys(datosacumulados)[Object.keys(datosacumulados).length-1];
     if(this.zoomControl.enable){
			limit = this.zoomControl.xs;
			zoomXsdiff = this.zoomControl.xs*this.deltaX;
		}
	 for(var i in datosacumulados) {
       //i es el indice de el elemento que tiene acumulacion que es el dia 3 de semana {0,1,2,3,4,5,6}
	   //this.deltaX es el incremento en pixeles en el ejeX por cada dia.
	   if(i<limit){
		   continue;
	   }
	   if((zoomXsdiff + (i)*this.deltaX)>this.anchoDiagrama){
		   console
			break;
			}	
        var gb = this.svg.group(this.grupocontenedor,{id: "bar"+(i+1),opacity:"1"});
        var pointsVar = [];
		
			//(i-3) esta correcion se hace del dia 6[sab] a el dia central de la semana el miercoles {3}
			pointsVar.push([this.origenX -zoomXsdiff + (i)*this.deltaX-anchobarra, this.origenY]); 
			pointsVar.push([this.origenX -zoomXsdiff + (i)*this.deltaX-anchobarra, this.origenY - datosacumulados[i]*this.deltaY]); 
			pointsVar.push([this.origenX -zoomXsdiff + (i)*this.deltaX+anchobarra, this.origenY - datosacumulados[i]*this.deltaY]); 
			pointsVar.push([this.origenX -zoomXsdiff + (i)*this.deltaX+anchobarra, this.origenY]); 	
			this.Barras[i] = this.svg.polyline(gb,pointsVar, {fill: 'none', stroke: 'red', strokeWidth:1});	
			//var mes= this.mesesStr[ parseInt(Date.parse(datosacumulados[i].fecha).addMonths(-1).toString("M"))-1  ];
			//generar el nombre del mes
			//cadena=this.mesesStr[parseInt(Date.parse(datosacumulados[i].fecha).toString("M"))-1]:cadena=mes;
			//var medio= (cadena.length/2)*10;        
			 //var label = this.svg.text(this.grupocontenedor,cadena, {x:current+((this.anchobarra/2)-medio), y:this.origenY+12, fontFamily: 'Verdana', fontSize: '10', fill: 'blue', style:"display: block;",class:"periodomensual"}); 
			//$(label).attr("class","periodomensual");                        
						   
			
			//current+= this.sep+ this.anchobarra; 
    }
}
//#################################################################################
DiagramaCurvaSSvg.prototype.drawAxisX = function(configX) {
var dist;
this.ejeX = this.svg.group(this.grupocontenedor,{id:"ejeX",stroke: 'rgba(36, 160, 229, 0.65)', strokeWidth: 2,onmouseover:"sobrelinea(this)"});
this.ejeFecha = this.svg.group(this.grupocontenedor,{id:"ejeX",stroke: 'rgba(76, 100, 29, 0.65)', strokeWidth: 1,onmouseover:"sobrelinea(this)"});
var dist;
var fechapivot=null;
if(typeof this.BarrasValores =="undefined")
this.BarrasValores = new Array();
this.BarrasValores["Semanal"] = new Array();
this.BarrasValores["Mensual"] = new Array();

//calculamos datos preliminares a partir del ancho del diagrama y de la cantidad total de dias que se tiene que mostrar
//this.numDivX = numero de dias total en el ejeY
//this.origenX = punto de inicio de dibujado
//this.anchoDiagrama = ancho de el grafico en pixeles
//this.deltaX = espacio que ocupa un dia en pixeles en el eje x
//this.LabelSpace = espacio que requiere una etiqueta en el ejeX en Pixeles
//this.tickspace = espacio entre marcas en el ejex
//this.Scaletipe = {dias, semanas, meses, años}
this.tipoDeGrafico = 'acumulativo';				//indicando que hay que calulcar el dato acumulado para la grafica
switch (configX.scale){
	case 'day':
		this.tickspace = 15;				//distancia entre 2 marcadores en el ejeX en pixeles
		var xcord=0;
		var i = 0;
		this.axisX['day'] = new Array();
		var zoomXsdiff = 0;
		//si se tiene activada la opcion para zoom entonces el inicio y el fin estan cambiados
		//delta x ya esta ajustado para funcionar en el nueva escala
		if(this.zoomControl.enable){
			i = this.zoomControl.xs;
			zoomXsdiff = i*this.deltaX;
			
		}
		console.log(i);
		while (i<this.DataValues.ejeX.length) {
			
			xcord=Math.round(i*this.deltaX)-zoomXsdiff;
			
			this.axisX['day'][i] = new Array();
			this.axisX['day'][i]['Linea'] = this.svg.line(this.ejeX,this.origenX+xcord, this.origenY-3, this.origenX+xcord, this.origenY+3,{strokeWidth: 1}); 
			//ahora creamos una etiqueta de texto inclinada 90 grados hacia abajo para mostrar la fecha
			if(configX.legend){
				//-----------------------**-----------------**---------------**----------------**--------------------**-----------------**---------------**----------------
				var text = this.svg.text(this.grupocontenedor,'',{fontFamily: 'Verdana', fontSize: '10', fill: 'blue'}); 
				var defs = this.svg.defs(); 
				var txtpath = this.svg.createPath();
				this.svg.path(defs,txtpath.move(this.origenX+xcord, this.origenY+12).line([[this.origenX+xcord,this.origenY+100]]).close(),  
				{id: "LabelDayPath"+i});
				var texts = this.svg.createText();
				this.axisX['day'][i]["Label"] = this.svg.textpath(text,"#LabelDayPath"+i,texts.string(this.DataValues.ejeX[i]+'-'+i),{fontFamily: 'Verdana', fontSize: '10', fill: 'blue', style:"display: block;"});	
				//-----------------------**-----------------**---------------**----------------**--------------------**-----------------**---------------**----------------
			}
			if(this.deltaX<this.tickspace){
				i = i + Math.round(this.tickspace/this.deltaX);
			}else{
				i = i+1;
			}
			//cuando llegamos al ancho final se detiene el bucle, esto no seria nesesario en un funcionamiento normal.
			//pero es muy util para un uso con Zoom de ventana
			if(xcord>this.anchoDiagrama){
			break;
			}	
		}
		if(this.TipoGrafico = 'acumulativo'){
			this.generarDatoAcumulativo('day');
		}
	break;
	case 'week':
		this.tickspace = 10;
		var xcord=0;
		var i = 0;
		var fechapivot = 0;
		var dateDistance = 0;
		var tickTemp = 0;				//variable temporal para controlar distancai entre 2 etiquetas
		var lastX = 0;					//ultima poscicion donde se dibujo una etiqueta en el ejeX
		//7 dias = 1 semana
		this.axisX['week'] = new Array();
		while (xcord<this.anchoDiagrama) {		//mientras la coordenada X este dentro del area de dibujo.
			//al ingresar la primera fecha, no sabemos que dia de la semana es, andamos buscando los miercoles
			if(xcord==0){//primera fecha a leer
				var FechaInicial = this.DataValues.ejeX[0];
				fechapivot = new Date.parse(this.DataValues.ejeX[i]);
				var weekEnd = fechapivot.clone().moveToDayOfWeek(6);
					dateDistance = (weekEnd.getDate()-fechapivot.getDate())
					xcord = dateDistance*this.deltaX;		
					fechapivot.moveToDayOfWeek(0);
				tickTemp = this.tickspace;
			}
			//ya desde la segunda semana no tenemos problemas en seguir la misma logica
			else{
				var NextWeekEnd = fechapivot.add(7).days(); 
				dateDistance = 	7+dateDistance;
				tickTemp =  dateDistance*this.deltaX-lastX;
				xcord = dateDistance*this.deltaX;
			}
			if(tickTemp>=this.tickspace){
				this.axisX['week'][i] = new Array();
				this.axisX['week'][i]['Linea'] = this.svg.line(this.ejeX,this.origenX+xcord, this.origenY-5, this.origenX+xcord, this.origenY+5,{strokeWidth: 1}); 
				//ahora creamos una etiqueta de texto inclinada 90 grados hacia abajo para mostrar la fecha
				if(configX.legend){
				//-----------------------**-----------------**---------------**----------------**--------------------**-----------------**---------------**----------------
				var text = this.svg.text(this.grupocontenedor,'',{fontFamily: 'Verdana', fontSize: '10', fill: 'blue'}); 
				var defs = this.svg.defs(); 
				var txtpath = this.svg.createPath();
				this.svg.path(defs,txtpath.move(this.origenX+xcord, this.origenY+12).line([[this.origenX+xcord,this.origenY+100]]).close(),  
				{id: "LabelWeekPath"+i});
				var texts = this.svg.createText();
				var dataIndex = Math.round(xcord*this.numDivX/this.anchoDiagrama);		//el indice del elementos de datos que corresponde con esta posicion X	
				this.axisX['week'][i]["Label"] = this.svg.textpath(text,"#LabelWeekPath"+i,texts.string('semana'+i),{fontFamily: 'Verdana', fontSize: '10', fill: 'blue', style:"display: block;"});	
				//-----------------------**-----------------**---------------**----------------**--------------------**-----------------**---------------**----------------
				}
				lastX = xcord;
				tickTemp = 0;
			}
			i++;
		}
		if(this.TipoGrafico = 'acumulativo'){
			this.generarDatoAcumulativo('week','Dataset0');
		}
	break;
	case 'mont':
	this.distanciaMensual = null;				//distancai en pixeles que ocupa un mes, este valor es variable no se calcula directamente.
	this.tickspace = 40;						//distancia minima entre 2 marcas de mes.
		var xcord=0;
		var i = 0;
		var fechapivot = 0;
		var Max
		var dateDistance = 0;
		var tickTemp = 0;				//variable temporal para controlar distancai entre 2 etiquetas
		var lastX = 0;					//ultima poscicion donde se dibujo una etiqueta en el ejeX
		//calculamos el primer segmento que podria no ser un mes completo
		this.axisX['mont'] = new Array();
		while (xcord<this.anchoDiagrama) {		//mientras la coordenada X este dentro del area de dibujo.
			//al ingresar la primera fecha, no sabemos que dia de el mes es, 
			//la linea divisoria de mes se realiza el ultimo dia del mes.
			if(xcord==0){//primera fecha a leer
				fechapivot = new Date.parse(this.DataValues.ejeX[0]);
				var MontEnd = fechapivot.clone().moveToLastDayOfMonth();
					dateDistance = (MontEnd.getDate()-fechapivot.getDate())
					xcord = dateDistance*this.deltaX;			//primer desplazamiento para iniciar en el dia 15 del mes
				fechapivot.setDate(1);
				tickTemp = this.tickspace;
			}
			//ya desde elsegundo mes no tenemos problemas en seguir la misma logica
			else{
				fechapivot.add({months: 1});
				var MontEnd = fechapivot.clone().moveToLastDayOfMonth();
				var dateDistance = 	dateDiffInDays(fechapivot,MontEnd)+1;
				tickTemp =  (xcord+dateDistance*this.deltaX)-lastX;				
				xcord = xcord + dateDistance*this.deltaX;
				console.log(xcord);
			}
			if((tickTemp>=this.tickspace)&&(xcord<this.anchoDiagrama)){
				this.axisX['mont'][i] = new Array();
				this.axisX['mont'][i]['Linea'] = this.svg.line(this.ejeX,this.origenX+xcord, this.origenY-5, this.origenX+xcord, this.origenY+5,{strokeWidth: 2}); 
				//ahora creamos una etiqueta de texto inclinada 90 grados hacia abajo para mostrar la fecha
				//-----------------------**-----------------**---------------**----------------**--------------------**-----------------**---------------**----------------
				if(configX.legend){
					var text = this.svg.text(this.grupocontenedor,'',{fontFamily: 'Verdana', fontSize: '10', fill: 'blue'}); 
					var defs = this.svg.defs(); 
					var txtpath = this.svg.createPath();
					this.svg.path(defs,txtpath.move(this.origenX+xcord, this.origenY+12).line([[this.origenX+xcord,this.origenY+100]]).close(),  
					{id: "LabelWeekPath"+i});
					var texts = this.svg.createText();
					var dataIndex = Math.round(xcord*this.numDivX/this.anchoDiagrama);		//el indice del elementos de datos que corresponde con esta posicion X	
					this.axisX['mont'][i]["Label"] = this.svg.textpath(text,"#LabelWeekPath"+i,texts.string('mes'+i),{fontFamily: 'Verdana', fontSize: '10', fill: 'blue', style:"display: block;"});	
					//-----------------------**-----------------**---------------**----------------**--------------------**-----------------**---------------**----------------
				}
				lastX = xcord;
				tickTemp = 0;
			}
			i++;
		}
		if(this.TipoGrafico = 'acumulativo'){
				this.generarDatoAcumulativo('mont','Dataset0');
			}
		break;
	case 'year':
	break;
}
	//eventos aun no remodelado.
	$(this.fechasvg).bind('mouseover', this, function(event) {
            // var Px = event.pageX - this.offsetLeft;
             var Py = event.pageY - this.offsetTop;
              event.data.fechaDescripcion =event.data.svg.text(event.data.fecha , {x:event.data.margenFecha+4, y:Py-145, fontFamily: 'Verdana', fontSize: '12', fill: 'green', visibility: 'visible'})
	});

        $(this.fechasvg).bind('mouseout', this, function(event) {
		event.data.fechaDescripcion.setAttribute("visibility", "hidden");
	});


}
//#################################################################################
function sobrelinea(ejeX){
	console.log(ejeX.onmouseover.arguments.clientX);
	console.log(ejeX.onmouseover.arguments.clientY);
}
//#################################################################################
DiagramaCurvaSSvg.prototype.drawAxisY = function() {
	/* se va caulcular y dibujar el eje y del diagrama,      
		   @param centerX coordenada x del centro del pie
		 * @param this.TotalY valor maximo que se permite en el eje Y
		 * @param this.deltaY distancia en pixeles equivalente a un dato en Y 
		 */

		this.grupocontenedor =this.svg.group({id: "grupocontenedor" });
		var ejeY = this.svg.group(this.grupocontenedor,{stroke: 'rgba(36, 160, 229, 0.65)', strokeWidth: 2});
		var ejeYbarras = this.svg.group(this.grupocontenedor,{stroke: 'black', strokeWidth: 1});
		var dist, label;
		var ejeYIni = 0;
		var ejeYFin = this.TotalY;
		var ajusteZoomY = 0;
	    var minDist, numDiv, axis;
	////////////////////////////////////////////////
		var AlturaDiagrama = this.altoDiagrama;		//altura del diagrama restando los espacios libres arriba y abajo			
		numDiv = this.TotalY;					//el numero de diviciones es igual al valor maximo permitido en el eje
		axis = this.axisY;						//array creado anterirmente
		var aux = 0;	
		
		var lavelSpace = 20;
		lavelSpace = Math.round(20/this.deltaY)		
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
this.axisY[-1] = new Array();
	//recorremos todos los elementos del eje Y y cuando el elemento es un multiplo de lavelSpace dibujamos un elemento para el eje Y
	if(this.zoomControl.enable){
			ejeYIni = this.zoomControl.ys;
			ejeYFin = this.zoomControl.yf;
			ajusteZoomY = ejeYIni*this.deltaY;			
		}
	this.axisY[-1]["Graphic"] = this.svg.line(ejeY, this.origenX, this.origenY, this.origenX, this.origenY-this.altoDiagrama);
	for(var i = ejeYIni; i <= ejeYFin; i=i+lavelSpace) {
		dist = this.origenY - i*this.deltaY+ajusteZoomY;
		label = i.toString();
		this.axisY[i] = new Array();
		this.axisY[i]["Graphic"] = this.svg.line(ejeY, this.origenX-3, dist, this.origenX+3, dist, {visibility: "visible"});					
		this.axisY[i]["Label"] = this.svg.text(this.grupocontenedor,label, {x:this.origenX-4-label.length*7, y:dist+4, fontFamily: 'Verdana', fontSize: '10', fill: 'blue', visibility: "visible"});		
	}

	
}
//#################################################################################
DiagramaCurvaSSvg.prototype.showAllHitos = function() {
	if(this.tipo!="duraciontest")  
            this.calcularHitos();
        
        for(var i in this.HitosIds) {            
		this.showHito(this.HitosIds[i]);
	}
}
//#################################################################################
DiagramaCurvaSSvg.prototype.showHito = function(hitoId) {
	// Si no estan creados graficamente los hitos, se crean
        Components.getComponentById('showResaltador').enable();
	if(this.hitos[hitoId] == null) {  
            if(typeof DataTareas[hitoId]!="undefined")
                {
                    var t = DataTareas[hitoId].Start.date.split(/[- :]/);			
                    var Inicio = new Date(t[0], t[1]-1, t[2], t[3], t[4], t[5]);
                    Inicio =Inicio.getTime()/1000;
                }
                var posx, posy;
                if(this.curvaConZoom) {
                    var t1 = this.DataValues.ejeX[this.curvaZoomIX].split(/[- :]/);
                    var fecini = new Date(t1[0], t1[1]-1, t1[2]);
                    fecini = fecini.getTime()/1000;
                    if(typeof DataTareas[hitoId]!="undefined"){                
                        posx = Math.floor(((Inicio - fecini) / (60*60*24)));
                        if(posx < 0 || posx >= this.curvaZoom.data.length) 
                            return;                        
                        posy = this.curvaZoom.points[posx][1];
                    }
                    else{
                        if(this.tipo=="duraciontestacumulado"){
                                posy = this.curvaZoom.points[hitoId][1];
                                posx = hitoId;
                                
                            }
                        else{    
                            posy = this.curvaZoom.points[this.mayorppos][1];
                            posx = this.mayorppos;
                        }
                    } 
                    posx = this.origenX + posx * this.anchoDiagrama / this.curvaZoom["axisX"].length;
                }
                else {                   
                    
                    if(typeof DataTareas[hitoId]!="undefined"){
                        posx = Math.floor(((Inicio - this.iniFec) / (60*60*24))); 
                        posy = this.points[posx][1];  
                        }
                    else{
                            if(this.tipo=="duraciontestacumulado"){
                                posy = this.points[hitoId][1];
                                posx = hitoId;                                  
                            }
                            else{                            
                                posy = this.points[this.mayorppos][1];
                                posx = this.mayorppos;  
                            }    
                        }
                    posx = this.origenX + posx * this.deltaX;
                }
                
                this.hitos[hitoId] = new Array();
		this.hitos[hitoId]["Graphic"] = this.svg.circle(posx, posy, 2, {fill: 'blue', stroke: 'blue', strokeWidth: 1});
                if(this.hitosPermanente[hitoId])
                    vista="visible";
                else
                    vista="hidden";
                
                if(typeof DataTareas[hitoId]!="undefined") 
                    this.hitos[hitoId]["Name"] = this.svg.text(caracteresEspecialesES(DataTareas[hitoId].Descripcion)+'('+DataTareas[hitoId].Id+')' , {x:posx+2, y:posy-2, fontFamily: 'Verdana', fontSize: '9', fill: 'green', visibility: vista})
		else
                    this.hitos[hitoId]["Name"] = this.svg.text(this.DataValues.ejeX[this.mayorppos]+': '+ hitoId.toString() , {x:posx+2, y:posy-2, fontFamily: 'Verdana', fontSize: '9', fill: 'green', visibility: vista})
               
               $(this.hitos[hitoId]["Graphic"]).bind('mouseover', this.hitos[hitoId], function(event) {
			event.data.Name.setAttribute("visibility", "visible");
                        event.data.Graphic.setAttribute('stroke-width', 3 );
                        
                        // event.data.Graphic.setAttribute('fill','rgba(200, 10, 86, 0.65)');
		});
                //.bind('click',{OBJ:this}, function(event) {
                $(this.hitos[hitoId]["Graphic"]).bind('click',{OBJ:this,HId:hitoId}, function(event) {
			//event.data.Name.setAttribute("visibility", "visible");
                        if(event.data.OBJ.Permanente){                             
                             event.data.OBJ.hitosPermanente[event.data.HId]=true;
                        }
                        else {
                            infoTareaForm = "ListaTareas";
                            ListTareaSeleccionada = event.data.HId;
                            WindowPropiedadesTarea();
                            RecargaDatosTab(Components.getComponentById('InformacionTareaWindowTabs').getActiveTab().title);
                            Components.getComponentById('InformacionTareaWindow').show();    
                            //Components.getComponentById('showResaltador').setDisabled(false);
                        }                     
		});
		$(this.hitos[hitoId]["Graphic"]).bind('mouseout', {OBJ:this,HId:hitoId}, function(event) {
                        if(!event.data.OBJ.hitosPermanente[event.data.HId]){                        
			event.data.OBJ.hitos[event.data.HId]["Name"].setAttribute("visibility", "hidden");
                        event.data.OBJ.hitos[event.data.HId]["Graphic"].setAttribute('stroke-width', 1 );                            
                        }
		});
	}
	else {	//Si estan creados, se les cambia el atributo visibility
		this.hitos[hitoId]["Graphic"].setAttribute('visibility', 'visible');
	}
}
//#################################################################################
//#################################################################################
//#################################################################################
DiagramaCurvaSSvg.prototype.hideAllHitos = function() {
    Components.getComponentById('showResaltador').disable();
    for(var i in this.HitosIds) {
            this.hideHito(this.HitosIds[i]);
    }
}
//#################################################################################
DiagramaCurvaSSvg.prototype.hideHito = function(hitoId) {
	if(this.hitos[hitoId]) {
            this.hitos[hitoId]["Graphic"].setAttribute('visibility', 'hidden');
            this.hitos[hitoId]["Name"].setAttribute('visibility', 'hidden');
        }
}
//#################################################################################
DiagramaCurvaSSvg.prototype.mayor = function() {
var mayor=0;
for(var i=0;i<this.BarrasValores.length;i++)
	{
		if(this.BarrasValores[i]>mayor)
			mayor=this.BarrasValores[i];
	}
	
return mayor;	
}
//#################################################################################
DiagramaCurvaSSvg.prototype.ActivarZoom = function() {
	//Controladores de eventos sobre el lienzo que controlan la activacion del Zoom.
	//cuando el zoom llega a ser activado se llama a ZoomOf().
	
	var points = new Array();
	console.log($('#yeye'));
	$('#yeye').bind('mousedown', {obj: this}, function(evt) {
		points["x1"] = evt.offsetX;
		points["y1"] = evt.offsetY;
		
		evt.data.obj.selector.setAttribute("visibility", "visible");
		evt.data.obj.selector.setAttribute("x", points.x1);
		evt.data.obj.selector.setAttribute("y", points.y1);
		
		$('#yeye').bind('mousemove', {diagrama: evt.data.obj}, function(e) {
			var difx = Math.abs(points.x1 - e.offsetX);
			var dify = Math.abs(points.y1 - e.offsetY);
			
			e.data.diagrama.selector.setAttribute("width", difx);
			e.data.diagrama.selector.setAttribute("height", dify);
		});
	});
	
	$('#yeye').bind('mouseup', {obj: this}, function(evt) {
		points["x2"] = evt.offsetX;
		points["y2"] = evt.offsetY;
		
		if(points.x1 != points.x2 && points.y1 != points.y2) {
			evt.data.obj.ZoomOf(points);
		}
		evt.data.obj.selector.setAttribute("visibility", "hidden");
		$('#yeye').unbind('mousemove');
	});
}

DiagramaCurvaSSvg.prototype.DesactivarZoom = function() {
    $('#yeye').unbind('mousedown');
    $('#yeye').unbind('mouseup');
}

function dateDiffInDays(a, b) {
	var _MS_PER_DAY = 1000 * 60 * 60 * 24;
//calcular  el numero de dias transcurrido entre 2 fechas.
  var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}