/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	Pie 3D v 1.0 - a jQuery Ui extension
	Licences: GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com]
	* Fritz Velarde-Alvarez Aguilar (f.velardealvarez@gmail.com).
	* se requiere la libreria tinycolor, para todas las operaciones de color
*/
Components.pie3DSvg.prototype.init = function(dataObj){
		//se requiere la libreria tinycolor, para todas las operaciones de color.
		/* @param centerX coordenada x del centro del pie
		 * @param centerY coordenada y del centro del pie
		 * @param rx radio externo en coordeandas x 
		 * @param ry radio interno en coordenadas y
		 * @param h altura de el 3dpie, (valor para representacion 3d)
		 * @param ir valor para el radio interno, en valor porcentual [de 0 a 1]
		 */
this.config = {
		container: $('body'),
		id: "3dpie-"+ Math.round(Math.random() * 2000),
		width: -1,
		height:-1,
		css:new Array(),		
		hidden: false,
		autoScroll: true,
		svgcontainer:'',
		drawPieText:true,				//mostrar o no mostrar texto sobre la capa superior del dibujo
		drawPuntasFlecha:false,			//mostrar o no mostrar las puntas de las flechas de la leyenda
		drawLinealLegend:true,			//mostrar o no mostrar la leyenda Lineal
		drawRadialLegend:false,
		PolarLegendRadius:1.4,
		legendDistance:180,				//distancia del centro del pie hasta la leyenda lineal
		legendSeparation:15,			//distancia entre items coordenada Y de la leyenda lineal
		//group:Math.round(Math.random()*999999),
		rx:130,							//radio del PIE grafico para las coordenadas X
		ry:100,							//radio del PIE grafico para las coordenadas Y
		ir:0.4,							//Multiplicador para el radio interno	
		h:20,							//Altura si el pie es 3d
		svg:'',
		data:{},						//array de datos
		responsive:false,
		textFormat:'value',
		centerX:170,					//centro del grafico PIE X y punto de control para todo el grafico
		centerY:180,					//centro del grafico PIE Y y punto de control para todo el grafico
		titulo:{'texto': "Titulo", 'fontSize': 20},				//Titulo, setear null para no dibujar nada
		subTitulo:{'texto': "Sub titulo", 'fontSize': 15},			//Sub Titulo, setear null para no dibujar nada
		plugins:{
			svgToolTip: false,
		},
	listeners: {
		show: function(){},
		hide: function(){}
								 //se lanza este evento luego que un nodo fue editado gráficamente.
	}
};
	this.SVG = dataObj.svgcontainer.svg;	//lienzo svg creado por svg container, componente padre obligatorio de todo componente que dibuje cosas SVG
	this.root=dataObj.container;
	this.svgContend = dataObj.svgcontainer.svgContend;
	//lectura de parametros enviados.
	for(var i in dataObj) {
        if(this.config[i] != undefined) {
            if((i == "listeners")||(i=="titulo")||(i=="subTitulo")) {
                for(var j in dataObj[i])
                    this.config[i][j] = dataObj[i][j];
            }
            else
                this.config[i] = dataObj[i];
        }
    }
    this.id=this.config.id;
	this.data = this.config.data;
	this.drawPieText = this.config.drawPieText;					//mostrar o no mostrar texto sobre la capa superior del dibujo
	this.drawPuntasFlecha = this.config.drawPuntasFlecha;		//mostrar o no mostrar las puntas de las flechas de la leyenda
	this.drawRadialLegend = this.config.drawRadialLegend;		//mostrar o no mostrar la leyenda radial
	this.drawLinealLegend = this.config.drawLinealLegend;		//mostrar o no mostrar la leyenda Lineal
	this.legendDistance = this.config.legendDistance;			//distancia del centro del pai hasta la leyenda lineal
	this.PolarLegendRadius = this.config.PolarLegendRadius;		//factor multiplicador al radio para distancia de etiquetas radiales.
	this.legendSeparation = this.config.legendSeparation;		//distancia entre items coordenada Y de la leyenda
	this.responsive = this.config.responsive;
	this.textFormat=this.config.textFormat;						//mostrar porcentajes{'percentage'} o valores{'value'}
	this.centerX =this.config.centerX;
	this.centerY =this.config.centerY;
	this.titulo = this.config.titulo;
	this.subTitulo = this.config.subTitulo;
	this.rx=this.config.rx;
	this.ry=this.config.ry;
	this.ir=this.config.ir;
	this.h = this.config.h;
    this.texts = {};
	this.titulo.y=-this.ry*this.PolarLegendRadius-this.titulo.fontSize;
	this.subTitulo.y=-this.ry*this.PolarLegendRadius;
	
	// this.draw();
	// this.recalcSize();
	// this.setControls();
	// console.log("yeah yeah");


}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.pie3DSvg.prototype.create = function(){
	if(this.config.plugins.svgToolTip){
		this.config.plugins.svgToolTip.svg=this.SVG;
			this.toolTipOBJ = Components.create('svgToolTip',this.config.plugins.svgToolTip);
	}
	this.draw();
	this.recalcSize();
	this.setControls();
};
Components.pie3DSvg.prototype.angleRadianCalculator=function(){
		var total = 0;
		var pi = Math.PI;
		var angles = new Array();
		for (var contador in this.data)
			total=total+this.data[contador].value
		
		for (var angulos in this.data){
			if (angulos==0){
				this.data[angulos]["endAngle"] = (2*pi/100)*this.data[angulos].value*100/total;
				this.data[angulos]["startAngle"] = 0;
				this.data[angulos]["percentage"] = (this.data[angulos].value*100/total).toFixed(2)+'%';
			}
			else{
				this.data[angulos]["endAngle"] = (2*pi/100)*this.data[angulos].value*100/total+this.data[angulos-1].endAngle;
				this.data[angulos]["startAngle"] = this.data[angulos-1].endAngle;
				this.data[angulos]["percentage"] = (this.data[angulos].value*100/total).toFixed(2)+'%';
			}
		}
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.pie3DSvg.prototype.draw=function(){
	// console.log("dubijando");

						//crear el grupo principal y relocalizarlo 
	this.grupo= this.SVG.group({transform: 'translate('+this.centerX+' '+this.centerY+')'});
		//Dibujar primero el titulo, luego el subtitulo
	this.grupoTitulo = this.SVG.group(this.grupo,{id: 'Titulos'})
	this.tituloSVG = this.SVG.text(this.grupoTitulo,this.titulo.texto, {x:0, y: this.titulo.y, fontFamily: 'arial', fontSize: this.titulo.fontSize, fill: 'rgba(100, 160, 229, 0.95)',style:"text-anchor: middle;"});
	this.subtituloSVG = this.SVG.text(this.grupoTitulo,this.subTitulo.texto, {x:0, y: this.subTitulo.y, fontFamily: 'arial', fontSize: this.subTitulo.fontSize, fill: 'rgba(100, 160, 229, 0.95)',style:"text-anchor: middle;"});
						//crear el grupo para el grafico 
	this.grupoGrafico= this.SVG.group(this.grupo,{id: 'Grafico'});
						//crear el grupo para los textos 
	this.grupoTexto= this.SVG.group(this.grupo,{id: 'Textos'});
						//crear el grupo para la leyenda
	this.grupoLeyenda= this.SVG.group(this.grupo,{id: 'Leyenda'});
	//añadir a los datos los calculos de angulos.
	this.angleRadianCalculator();
	//aqui inicia el dibujado real de el grafico PIE
	for (var k in this.data)
		this.drawInner(this.data[k],k)
	
	for (var i in this.data)
		this.drawTop(this.data[i],i)
	
	for (var j in this.data)
		this.drawOuter(this.data[j],j)
	//dibujar los textos encima de las partes si la configuracion lo permite
	if(this.drawPieText){
	 for (var l in this.data)
		this.drawText(this.data[l],l)
	}
	for (var m in this.data)
		this.drawLegend(this.data[m],m)
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.pie3DSvg.prototype.drawTop=function(dota,indice){
    var rx=this.rx;
    var ry=this.ry;
    var ir=this.ir;
	var sx = rx*Math.cos(dota.startAngle),
		sy = ry*Math.sin(dota.startAngle),
		ex = rx*Math.cos(dota.endAngle),
		ey = ry*Math.sin(dota.endAngle);
	
		var path = this.SVG.createPath(); 
		this.SVG.path( this.grupoGrafico,path.move(sx, sy).arc(rx, ry, 0,false, true, ex, ey). 
			line(ir*ex, ir*ey).
			arc(ir*rx, ir*ry, 0,false, false, ir*sx, ir*sy).
			line(ir*sx, ir*sy),			

		{fill: dota.color, stroke: dota.color, strokeWidth: 0.1, class: 'parte'+indice+' sectorpart'});
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.pie3DSvg.prototype.drawOuter=function(dota,indice){
	var startAngle = (dota.startAngle > Math.PI ? Math.PI : dota.startAngle);
	var endAngle = (dota.endAngle > Math.PI ? Math.PI : dota.endAngle);
	var rx=this.rx+0.0;
    var ry=this.ry+0.0;
    var ir=this.ir;
    var h=this.h;
	var sx = rx*Math.cos(startAngle),
		sy = ry*Math.sin(startAngle),
		ex = rx*Math.cos(endAngle),
		ey = ry*Math.sin(endAngle);	
	var color=tinycolor(dota.color);
		var path = this.SVG.createPath(); 
		this.SVG.path( this.grupoGrafico,path.move(sx, h+sy).arc(rx, ry, 0,false, true, ex, h+ey). 
			line(ex, ey).
			arc(rx, ry, 0,false, false, sx, sy),
			// line(ir*sx, ir*sy),			
		{fill: color.darken(7).toString(), stroke: color.toString(), strokeWidth: 0, class: 'parte'+indice+' sectorpart'});
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.pie3DSvg.prototype.drawInner=function(dota,indice){
	
	var startAngle = (dota.startAngle < Math.PI ? Math.PI : dota.startAngle);
	var endAngle = (dota.endAngle < Math.PI ? Math.PI : dota.endAngle);
	
	var rx=this.rx+0.0;
    var ry=this.ry+0.0;
    var ir=this.ir;
    var h=this.h;
	
	var sx = ir*rx*Math.cos(startAngle),
		sy = ir*ry*Math.sin(startAngle),
		ex = ir*rx*Math.cos(endAngle),
		ey = ir*ry*Math.sin(endAngle);
	var color=tinycolor(dota.color);
	
		var path = this.SVG.createPath(); 
		this.SVG.path( this.grupoGrafico,path.move(sx, sy).arc(ir*rx, ir*ry, 0,false, true, ex, ey). 
			line(ex, h+ey).
			arc(ir*rx, ir*ry, 0,false, false, sx, h+sy),
			// line(ir*sx, ir*sy),			
	
		{fill: color.darken(7).toString(), stroke: color.toString(), strokeWidth: 0, class: 'parte'+indice+' sectorpart' });
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.pie3DSvg.prototype.drawText=function(dota,indice){
	
	var rx=this.rx;
    var ry=this.ry;
	var xi = rx*Math.cos(0.5*(dota.startAngle+dota.endAngle))*((1+this.ir)/2);	
	var yi = ry*Math.sin(0.5*(dota.startAngle+dota.endAngle))*((1+this.ir)/2);
	var xf = 1*rx*Math.cos(0.5*(dota.startAngle+dota.endAngle))
	var yf = 1*ry*Math.sin(0.5*(dota.startAngle+dota.endAngle));
	var angulo_deg= 0.5*(dota.startAngle+dota.endAngle)*180/Math.PI;

	if (0.5*(dota.startAngle+dota.endAngle)>Math.PI/2 && 3*Math.PI/2>0.5*(dota.startAngle+dota.endAngle)){
		var g2 = this.SVG.group(this.grupoTexto, {'text-anchor':"middle"}); 
		this.SVG.text(g2, xi, yi, ''+(this.textFormat=='value'?dota.value:dota.percentage),  
		{fontFamily: 'Verdana',  fill: 'white', 'font-size': '12px', transform: 'rotate('+(angulo_deg-180)+','+xi+','+yi+')'});
		// this.SVG.circle(this.grupoTexto,xi, yi, 5, {fill: 'red', stroke: 'blue', strokeWidth: 5}); 
	}
	else{
		var g2 = this.SVG.group(this.grupoTexto, {'text-anchor':"middle"}); 
		this.SVG.text(g2, xi, yi, ''+(this.textFormat=='value'?dota.value:dota.percentage),  
		{fontFamily: 'Verdana',  fill: 'white', 'font-size': '12px', transform: 'rotate('+(angulo_deg)+','+xi+','+yi+')'});
		// this.SVG.circle(this.grupoTexto,xi, yi, 5, {fill: 'red', stroke: 'blue', strokeWidth: 5}); 
	}
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.pie3DSvg.prototype.drawLegend=function(dota,indice){
	var rx=this.rx;
    var ry=this.ry;
	var xmed = 1.1*rx*Math.cos(0.5*(dota.startAngle+dota.endAngle))	
	var ymed = 1.1*ry*Math.sin(0.5*(dota.startAngle+dota.endAngle));
	var xi = this.PolarLegendRadius*rx*Math.cos(0.5*(dota.startAngle+dota.endAngle))	
	var yi = this.PolarLegendRadius*ry*Math.sin(0.5*(dota.startAngle+dota.endAngle));

	var sx = rx*Math.cos(0.5*(dota.startAngle+dota.endAngle))	
	var sy = ry*Math.sin(0.5*(dota.startAngle+dota.endAngle));
		
	var path = this.SVG.createPath(); 
	var teta = (0.5*(dota.startAngle+dota.endAngle));
	var numeroElementos = this.data.length;
	//var color=tinycolor(dota.color);
	
	if(this.drawLinealLegend){
		var iniX = this.legendDistance;
		var iniY = -(numeroElementos*this.legendSeparation/2)+indice*this.legendSeparation;
		this.data[indice].linealLegend = this.SVG.text(this.grupoLeyenda, iniX, iniY, dota.label,{'font-weight': 'bold', 'class': 'parte'+indice+' sectorpart'});
		this.SVG.rect(this.grupoLeyenda, iniX-10, iniY-10, 10, 10, 4, 4, {fill: dota.color, 'class': 'parte'+indice+' sectorpart'});
	}
	if(this.drawRadialLegend){
		if (0.5*(dota.startAngle+dota.endAngle)>Math.PI/2 && 3*Math.PI/2>0.5*(dota.startAngle+dota.endAngle)){
			if(0.5*(dota.startAngle+dota.endAngle)<Math.PI){
					this.data[indice].radialLegend = this.SVG.text(this.grupoLeyenda, xi, yi+this.h, dota.label,{'text-anchor':'end','font-weight': 'bold', 'class': 'parte'+indice+' sectorpart'});
					this.SVG.line(this.grupoLeyenda, sx, sy, xmed, ymed, {strokeWidth: 1,stroke: 'black'});
					this.SVG.line(this.grupoLeyenda, xmed, ymed, xi, yi+this.h, {strokeWidth: 1,stroke: 'black'});
				if(this.drawPuntasFlecha){
					this.SVG.polygon(this.grupoLeyenda,[[sx,sy], [sx+4*Math.cos(teta+Math.PI/4),sy+4*Math.sin(teta+Math.PI/4)], [sx+4*Math.cos(teta-Math.PI/4),sy+4*Math.sin(teta-Math.PI/4)]], 
					{fill: 'red', stroke: 'black', strokeWidth: 0.5}); 
				}
				}
			else{
					this.data[indice].radialLegend = this.SVG.text(this.grupoLeyenda, xi, yi, dota.label,{'text-anchor':'end','font-weight': 'bold', 'class': 'parte'+indice+' sectorpart'});
					this.SVG.line(this.grupoLeyenda, sx, sy, xmed, ymed, {strokeWidth: 1,stroke: 'black'});
					this.SVG.line(this.grupoLeyenda, xmed, ymed, xi, yi, {strokeWidth: 1,stroke: 'black'});
				if(this.drawPuntasFlecha){
					this.SVG.polygon(this.grupoLeyenda,[[sx,sy], [sx+4*Math.cos(teta+Math.PI/4),sy+4*Math.sin(teta+Math.PI/4)], [sx+4*Math.cos(teta-Math.PI/4),sy+4*Math.sin(teta-Math.PI/4)]], 
					{fill: 'red', stroke: 'black', strokeWidth: 0.5}); 
				}
			}	
		}
		else{
			if(0.5*(dota.startAngle+dota.endAngle)<Math.PI/2){
					this.data[indice].radialLegend = this.SVG.text(this.grupoLeyenda, xi, yi+this.h, dota.label,{'font-weight': 'bold', 'class': 'parte'+indice+' sectorpart'});
					this.SVG.line(this.grupoLeyenda, sx, sy, xmed, ymed, {strokeWidth: 1,stroke: 'black'});
					this.SVG.line(this.grupoLeyenda, xmed, ymed, xi, yi+this.h, {strokeWidth: 1,stroke: 'black'});

				if(this.drawPuntasFlecha){
					this.SVG.polygon(this.grupoLeyenda,[[sx,sy], [sx+4*Math.cos(teta+Math.PI/4),sy+4*Math.sin(teta+Math.PI/4)], [sx+4*Math.cos(teta-Math.PI/4),sy+4*Math.sin(teta-Math.PI/4)]], 
					// this.SVG.polygon(this.grupoLeyenda,[[sx,sy], [sx+4*Math.cos(teta+Math.PI/4),sy+4*Math.sin(teta+Math.PI/4)], [sx+4*Math.cos(teta-Math.PI/4),sy+4*Math.sin(teta-Math.PI/4)]], 
					{fill: 'red', stroke: 'black', strokeWidth: 0.5}); 
				}
			}
			else{
					this.data[indice].radialLegend=this.SVG.text(this.grupoLeyenda, xi, yi, dota.label,{'font-weight': 'bold', 'class': 'parte'+indice+' sectorpart'});  				
					this.SVG.line(this.grupoLeyenda, sx, sy, xmed, ymed, {strokeWidth: 1,stroke: 'black'});
					this.SVG.line(this.grupoLeyenda, xmed, ymed, xi, yi, {strokeWidth: 1,stroke: 'black'});
					if(this.drawPuntasFlecha){			
					this.SVG.polygon(this.grupoLeyenda,[[sx,sy], [sx+4*Math.cos(teta+Math.PI/4),sy+4*Math.sin(teta+Math.PI/4)], [sx+4*Math.cos(teta-Math.PI/4),sy+4*Math.sin(teta-Math.PI/4)]], 
					{fill: 'red', stroke: 'black', strokeWidth: 0.5}); 
				}
			}	
		}
	}
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.pie3DSvg.prototype.setControls=function(){
	
	$('.sectorpart',this.root).bind("mouseenter", {OBJ:this}, function(event) {
		var nuevo_stroke;
		var nuevo_fill;
		var partClass = $(this).attr('class').split(' ')[0];
		
			if(event.data.OBJ.toolTipOBJ && $(event.target.parentElement).attr("id")=="Grafico"){
				var dataToolTip={texto:event.data.OBJ.data[parseInt(partClass.split('parte')[1])].label}
				event.data.OBJ.toolTipOBJ.mouseenter(event,dataToolTip);
			}
		
		$('.'+partClass,event.data.OBJ.root).each(function( index ) {
			switch(this.tagName.toLowerCase()){
				case 'path':
				//para los path cambio de color, mediante darken y ligthen
				nuevo_stroke = tinycolor($(this).attr('stroke')).lighten(10).toString();
				nuevo_fill = tinycolor($(this).attr('fill')).lighten(10).toString();
				$(this).attr('stroke',nuevo_stroke);
				$(this).attr('fill',nuevo_fill);
				//console.log('antiguo'+stroke+'nuevo'+nuevo_stroke);	
				break;
				case 'text':
				//var nuevo_fill = tinycolor($(this).attr('fill')).lighten(10).toString();
				// $(this).attr('fill',$($(this).parent()[0].getElementsByClassName($(this).attr('class'))[1]).attr('fill'));
				$(this).attr('fill',nuevo_fill);
				break;
				case 'line':
				$(this).attr('fill',nuevo_fill);
				break;
				case 'rect':
				nuevo_fill = tinycolor($(this).attr('fill')).lighten(10).toString();
				$(this).attr('fill',nuevo_fill);
				break;
			}
			});		
    });
	$('.sectorpart',this.root).bind("mousemove", {OBJ:this}, function(event) {
		// console.log(event.clientX+' '+event.clientY);
		if(event.data.OBJ.toolTipOBJ && $(event.target.parentElement).attr("id")=="Grafico")
			event.data.OBJ.toolTipOBJ.mousemove(event);
	});
	$('.sectorpart',this.root).bind("mouseleave", {OBJ:this}, function(event) {
		var partClass = $(this).attr('class').split(' ')[0];
			if(event.data.OBJ.toolTipOBJ && $(event.target.parentElement).attr("id")=="Grafico")
				event.data.OBJ.toolTipOBJ.mouseleave();
		$('.'+partClass,event.data.OBJ.root).each(function( index ) {
			switch(this.tagName.toLowerCase()){
				case 'path':
				//para los path cambio de color, mediante darken y ligthen
				var nuevo_stroke = tinycolor($(this).attr('stroke')).darken(10).toString();
				var nuevo_fill = tinycolor($(this).attr('fill')).darken(10).toString();
				$(this).attr('stroke',nuevo_stroke);
				$(this).attr('fill',nuevo_fill);
				break;
				case 'text':
				$(this).attr('fill','#000000');
				break;
				case 'line':
				break;
				case 'rect':
				var nuevo_fill = tinycolor($(this).attr('fill')).darken(10).toString();
				$(this).attr('fill',nuevo_fill);
				break;				
			}
			});		
    });
}
Components.pie3DSvg.prototype.calcCenter = function() {
	if(this.drawRadialLegend){//si las etiquetas radiales estan activadas
		this.centerX=this.rx+(this.PolarLegendRadius-1)*this.rx;
	}
}
Components.pie3DSvg.prototype.recalcSize = function() {
	//esta funcion tiene que calcular el espacio requerido exacto por el grafico SVG, basado en parametros internos del grafico
	//aun por implementar.

}
Components.pie3DSvg.prototype.resizeBody = function(){
//calculamos el elemento mas a la izquierda y el que esta mas a la derecha.
	var xmin = -this.rx;
	// var xmax = this.rx;
	var ancho = this.centerX+this.rx;
	var altura = this.centerY+this.ry+this.h;
	if (this.drawRadialLegend){//si las etiquetas radiales estan activadas	
		// var xmin = -this.rx;
		var xmax = this.rx;
		var nuevo_centerY = this.centerY;
		for (var indice in this.data){
			var Xnow = parseInt($(this.data[indice].radialLegend).attr('x'))
			this.data[indice].radialWidth = this.data[indice].radialLegend.getBBox().width;
			var minTemp=Xnow-this.data[indice].radialWidth-10;
			var maxTemp=Xnow+this.data[indice].radialWidth+10;
			
			if(maxTemp>xmax){
				xmax = maxTemp;
			}
			if(minTemp<xmin){
				xmin = minTemp;
			}
			var Ynow = this.centerY+parseInt($(this.data[indice].radialLegend).attr('y'));
			if(Ynow<this.subTitulo.y){
				nuevo_centerY = nuevo_centerY+this.subTitulo.y-Ynow+10;
				//altura = altura +this.subTitulo.y-Ynow;
			}
		}
		// this.SVG.circle(this.grupoLeyenda,xmin, 0, 5, {fill: 'red', stroke: 'blue', strokeWidth: 5});
		//console.log(xmin);
		this.centerX=-xmin;
		this.centerY=nuevo_centerY;
		$(this.grupo).attr('transform','translate('+this.centerX+' '+this.centerY+')');
		
		altura = this.centerY+this.ry+this.h+(this.PolarLegendRadius-1)*this.ry;
		ancho= -xmin+xmax;
	} 
	if (this.drawLinealLegend){
		var xmax = this.rx;
		if (-xmin<this.centerX)
			xmin=-this.centerX;
		for (var indice in this.data){
			var Xnow = parseInt($(this.data[indice].linealLegend).attr('x'))
			this.data[indice].linealWidth = this.data[indice].linealLegend.getBBox().width;
			var maxTemp=Xnow+this.data[indice].linealWidth+10;
			
			if(maxTemp>xmax){
				xmax = maxTemp;
			}
		}
		var anchotemp=-xmin+xmax;
		if(anchotemp>ancho){
			ancho = anchotemp;
		}
	}
	// this.SVG.circle(this.grupoLeyenda,0, this.ry+this.h, 5, {fill: 'red', stroke: 'blue', strokeWidth: 5});
	// this.SVG.circle(this.grupoLeyenda,0, altura-this.centerY, 5, {fill: 'red', stroke: 'blue', strokeWidth: 5});
	// this.SVG.circle(this.grupoLeyenda,ancho-this.centerX, 0, 5, {fill: 'red', stroke: 'blue', strokeWidth: 5});
	// this.SVG.circle(this.grupoLeyenda,xmin, 0, 5, {fill: 'blue', stroke: 'red', strokeWidth: 5});
	
	this.svgContend.width(ancho);
	this.svgContend.height(altura);
	$(this.root).attr({'width':ancho,'height':altura});
	//prueba de responsividad tomando en cuenta el contenedor window, devera ser extendido este ejemplo para otros contenedores
	if(this.responsive){
		
		var anchoVentana = this.svgContend.parent().outerWidth()
		var scale = anchoVentana/ancho;
		// console.log(scale);
		if (scale<1){
			// var xforms = this.grupo.getAttribute('transform');
			// var parts  = /translate\(\s*([^\s,)]+)[ ,]([^\s,)]+)/.exec(xforms);
			// var firstX = parts[1],
				// firstY = parts[2];
			$(this.grupo).attr('transform','translate('+scale*this.centerX+' '+scale*this.centerY+'),scale('+scale+','+scale+')');
			this.svgContend.width(ancho*scale);
			this.svgContend.height(altura*scale);
			$(this.root).attr({'width':ancho*scale,'height':altura*scale});
			// this.SVG.circle((ancho)*scale, (altura)*scale, 5, {fill: 'red', stroke: 'blue', strokeWidth: 5});
			// console.log("x:"+firstX);	
		}else{
			$(this.grupo).attr('transform','translate('+this.centerX+' '+this.centerY+'),scale('+1+','+1+')');
			this.svgContend.width(ancho);
			this.svgContend.height(altura);
			$(this.root).attr({'width':ancho,'height':altura});
		}
	}
	
	//this.svgContend.width(totalSVG);
	
	
}
