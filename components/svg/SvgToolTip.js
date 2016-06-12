/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	svgToolTip v 1.0 - a jQuery Ui extension
	Licences: MIT & GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * Fritz Velarde-Alvarez Aguilar (f.velardealvarez@gmail.com).
*/
Components.svgToolTip.prototype.init = function(dataObj){
	/** @param dataObj.pico tamaño de la flechita
	 * @param dataObj.offset espacio entre el target y el pico
	 * @param dataObj.orientacion si va arriba o hacia abajo
	 */
	 this.tipo = 'SvgToolTip';
this.config = {
	container: $('body'),
	id: "svgToolTip"+ Math.round(Math.random() * 2000),
	offset:3,
	pico:6,
	orientacion:"arriba",
	// fontSize:13,
	color:"black",
	parentType:'',
	viewToolTip:'',
	listeners: {
		show: function(){},
		hide: function(){}
	}
};
	
	for(var i in dataObj) {
        if(this.config[i] != undefined) {
            if((i == "listeners")) {
                for(var j in dataObj[i])
                    this.config[i][j] = dataObj[i][j];
            }
            else
                this.config[i] = dataObj[i];
        }
    }
	this.offset=this.config.offset;
	this.pico=this.config.pico;
	this.orientacion=this.config.orientacion;
	// this.fontSize=this.config.fontSize;
	this.color=this.config.color;
	this.svg=dataObj.svg;
	this.estilos='';
	
	// this.target=dataObj.target;
	//createToolTip
};
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.svgToolTip.prototype.create=function(){
	
};
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.svgToolTip.prototype.updateTooltip=function(dataToolTip){
	
};
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.svgToolTip.prototype.mousemove=function(evento){
	this.target=evento.target;
	/**
		Funcion para seguir el movimiento del mouse
		evento.clientX/Y										posicion actual del mouse
		this.target.getBoundingClientRect().left/top			posicion del target en el body HTML
		this.target.getBoundingClientRect().width/2				ancho del target
		document.body.scrollLeft/scrollTop						posicion del scrollbar
	*/
	var x = evento.clientX-this.target.getBoundingClientRect().left-this.target.getBoundingClientRect().width/2;
	var y = evento.clientY-this.target.getBoundingClientRect().top-this.target.getBoundingClientRect().height/2;
	$(this.svg.grupo123).attr('transform','translate('+x+' '+y+')');
	switch(this.orientacion){
	case 'derecha':
		$('.svgToolTip').css('top',evento.clientY-this.alto/2+document.body.scrollTop);
		$('.svgToolTip').css('left',evento.clientX+this.offset+this.pico+document.body.scrollLeft);
	break;
	case 'izquierda':
		$('.svgToolTip').css('top',evento.clientY-this.alto/2+document.body.scrollTop);
		$('.svgToolTip').css('left',evento.clientX-this.ancho-this.offset/*-this.pico*/+document.body.scrollLeft);
	break;
	case 'arriba':
		$('.svgToolTip').css('top',evento.clientY-this.alto-this.offset-this.pico+document.body.scrollTop);
		$('.svgToolTip').css('left',evento.clientX-this.ancho/2+document.body.scrollLeft);
		break;
	case 'abajo':
		$('.svgToolTip').css('top',evento.clientY+this.offset+this.pico+document.body.scrollTop);
		$('.svgToolTip').css('left',evento.clientX-this.ancho/2+document.body.scrollLeft);
		break;
	}
};
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.svgToolTip.prototype.mouseenter=function(evento,dataToolTip){
	///dataToolTip es un objeto con parametros q se pueden o no mandar
	this.target=evento.target;
	// if(this.config.viewToolTip)
		// this.texto=eval(this.config.viewToolTip);
	// else
		this.texto='<p class="TestSvg" >'+dataToolTip.texto+'</p>';
		
	this.color=(dataToolTip.color?dataToolTip.color:$(this.target).attr("fill"));
	if(this.config.parentType=='WBSTree'){
		this.texto=dataToolTip.texto;
		this.estilos='background-color:white;border-width: 1px;border-color: '+this.color+';border-style: solid;'
	}
	this.draw(dataToolTip.x,dataToolTip.y);
};
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.svgToolTip.prototype.mouseleave=function(){
	this.destroy();
};
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.svgToolTip.prototype.draw=function(x,y){
	this.svg.grupo123= this.svg.group({id: 'grupo123'});
	/**primero se calcula el ancho y alto del texto con un temporal <div id="TestSvg"...
		<p> viene con border top y bot por defecto
	*/
	var offset=this.offset;
	var pico=this.pico;
	// var fontSize=this.fontSize;
	var color=this.color;
	
	// this.divTexto=$('<div id="TestSvg" class="svgToolTip" style="max-width:220px; font-size:'+fontSize+'px; height: auto; width: auto; color:#000000; font-family:Lato"><p class="TestSvg" style="padding-left:'+sangria+'px;padding-right: '+sangria+'px;line-height: 1em;">'+this.texto+'</p></div>')
	this.divTexto=$('<div id="TestSvg" class="svgToolTip" style="'+this.estilos+'">'+this.texto+'</div>')
	// this.divTexto=$('<div id="TestSvg" class="svgToolTip" style="'+this.estilos+'max-width:220px; font-size:'+fontSize+'px; height: auto; width: auto; color:#000000; z-Index: 9000; font-family:Lato"><p class="TestSvg" style="padding-left:'+sangria+'px;padding-right: '+sangria+'px;line-height: 1em;">'+this.texto+'</p></div>')
	$('body').append(this.divTexto)
	// $('body').append('<div id="TestSvg" style="max-width:220px; font-size:'+fontSize+'px; position: absolute;visibility: hidden;height: auto;width: auto;font-family:Lato"><p class="TestSvg" style="padding-left:'+sangria+'px;padding-right: '+sangria+'px;line-height: 1em;">'+this.texto+'</p></div>')
		// style="max-width:220px; font-size:'+fontSize+'px; position: absolute;visibility: hidden;height: auto;width: auto;font-family:Lato"
		// var test = document.getElementById("TestSvg");
		var alto = (this.divTexto[0].clientHeight);
		var ancho = (this.divTexto[0].clientWidth);
		// var alto = (test.clientHeight);
		// var ancho = (test.clientWidth);
		
		this.alto=alto;
		this.ancho=ancho;
		
		// this.divTexto.remove();
		// delete this.divTexto;
		// test.remove();
		// delete test;
		
	var path = this.svg.createPath();
	if(typeof(x)=='number'&&typeof(y)=='number'){				///si se ha enviado un (x,y) solo se calcula la posicion del texto 
		var x2=x+this.svg._container.getBoundingClientRect().left+document.body.scrollLeft;								//posicion de div de texto
		var y2=y+this.svg._container.getBoundingClientRect().top+document.body.scrollTop;								//posicion de div de texto
	}else{
		console.log('problemas');
	/**
		this.target.getBoundingClientRect().left/top			posicion del target en el body HTML
		this.target.getBoundingClientRect().width/2				ancho del target
		this.svg._container.getBoundingClientRect().left/top	posicion del svg en el body HTML
		document.body.scrollLeft/scrollTop						posicion del scrollbar
	*/
		var x=this.target.getBoundingClientRect().left+this.target.getBoundingClientRect().width/2-this.svg._container.getBoundingClientRect().left;	//posicion de caja svg   posicion del target left(x)+su width/2-posicon left(x) del svg respecto al html
		var y=this.target.getBoundingClientRect().top+this.target.getBoundingClientRect().height/2-this.svg._container.getBoundingClientRect().top;		//posicion de caja svg
		var x2=this.target.getBoundingClientRect().left+this.target.getBoundingClientRect().width/2+document.body.scrollLeft;							//posicion de div de texto
		var y2=this.target.getBoundingClientRect().top+this.target.getBoundingClientRect().height/2+document.body.scrollTop;							//posicion de div de texto
	}
	switch(this.orientacion){
		case 'abajo':
			x2=x2-ancho/2;			 
			y2=y2+offset+pico;
			// $('body').append('<div class="svgToolTip" style="'+this.estilos+'left:'+ (x2)+'px; top:'+ (y2)+'px; z-Index: 9000;"></div>')
			// $('.svgToolTip').append('<div style="max-width:220px; min-width:'+ancho+'px; font-size:'+fontSize+'px; color:#000000; font-family:Lato"><p class="TestSvg" style="padding-left:'+sangria+'px;padding-right: '+sangria+'px;line-height: 1em;">'+this.texto+'</p></div>')
			
			// $(".svgToolTip").css("left",x2);
			// $(".svgToolTip").css("top",y2);
			// $(".svgToolTip").css("visibility",'visible');
			
			y=y+offset;
			this.svg.path(this.svg.grupo123,path.move(x-pico, y+pico).line(x, y).line(x+pico, y+pico).line(x+ancho/2, y+pico).line(x+ancho/2, y+alto+pico).line(x-ancho/2, y+alto+pico).line(x-ancho/2, y+pico).line(x-pico, y+pico),
			{fill: "#FFFFFF", stroke: "#000000", fillOpacity:"0", strokeWidth: "1", strokeOpacity:"0.4", transform:"translate(1,1)" });
			this.svg.path(this.svg.grupo123,path.move(x-pico, y+pico).line(x, y).line(x+pico, y+pico).line(x+ancho/2, y+pico).line(x+ancho/2, y+alto+pico).line(x-ancho/2, y+alto+pico).line(x-ancho/2, y+pico).line(x-pico, y+pico),
			{fill: "#FFFFFF", stroke: color, fillOpacity:"0.8", strokeWidth:"1", strokeOpacity:"1"});
		break;
		case 'arriba':
			x2=x2-ancho/2;
			y2=y2-alto-offset-pico
			// $('body').append('<div class="svgToolTip" style="'+this.estilos+'left:'+ (x2)+'px; top:'+ (y2)+'px; z-Index: 9000;"></div>')
			// $('.svgToolTip').append('<div style="max-width:220px; min-width:'+ancho+'px; font-size:'+fontSize+'px; color:#000000; font-family:Lato"><p class="TestSvg" style="padding-left:'+sangria+'px;padding-right: '+sangria+'px;line-height: 1em;">'+this.texto+'</p></div>')
			
			// $(".svgToolTip").css("left",x2);
			// $(".svgToolTip").css("top",y2);
			// $(".svgToolTip").css("visibility",'visible');
			
			y=y-offset;
			// this.svg.path(this.svg.grupo123,path.move(x-pico, y-pico).line(x, y).line(x+pico, y-pico).line(x+ancho/2, y-pico).line(x+ancho/2, y-alto-pico).line(x-ancho/2, y-alto-pico).line(x-ancho/2, y-pico).line(x-pico, y-pico),
			// {fill: "#FFFFFF", stroke: "#000000", fillOpacity:"0", strokeWidth: "1", strokeOpacity:"0.4", transform:"translate(1,1)" });
			// this.svg.path(this.svg.grupo123,path.move(x-pico, y-pico).line(x, y).line(x+pico, y-pico).line(x+ancho/2, y-pico).line(x+ancho/2, y-alto-pico).line(x-ancho/2, y-alto-pico).line(x-ancho/2, y-pico).line(x-pico, y-pico),
			// {fill: "#FFFFFF", stroke: color, fillOpacity:"0.8", strokeWidth:"1", strokeOpacity:"1"});
		break;
		case 'derecha':
			x2=x2+offset+pico;
			y2=y2-alto/2;
			// $('body').append('<div class="svgToolTip" style="'+this.estilos+'left:'+ (x2)+'px; top:'+ (y2)+'px; z-Index: 9000;"></div>')
			// $('.svgToolTip').append('<div style="max-width:220px; min-width:'+ancho+'px; font-size:'+fontSize+'px; color:#000000; font-family:Lato"><p class="TestSvg" style="padding-left:'+sangria+'px;padding-right: '+sangria+'px;line-height: 1em;">'+this.texto+'</p></div>')
			
			// $(".svgToolTip").css("left",x2);
			// $(".svgToolTip").css("top",y2);
			// $(".svgToolTip").css("visibility",'visible');
			
			x=x+offset;
			this.svg.path(this.svg.grupo123,path.move(x+pico, y-pico).line(x, y).line(x+pico, y+pico).line(x+pico, y+alto/2).line(x+ancho, y+alto/2).line(x+ancho, y-alto/2).line(x+pico, y-alto/2).line(x+pico, y-pico),
			{fill: "#FFFFFF", stroke: "#000000", fillOpacity:"0", strokeWidth: "1", strokeOpacity:"0.4", transform:"translate(1,1)" });
			this.svg.path(this.svg.grupo123,path.move(x+pico, y-pico).line(x, y).line(x+pico, y+pico).line(x+pico, y+alto/2).line(x+ancho, y+alto/2).line(x+ancho, y-alto/2).line(x+pico, y-alto/2).line(x+pico, y-pico),
			{fill: "#FFFFFF", stroke: color, fillOpacity:"0.8", strokeWidth:"1", strokeOpacity:"1"});
		break;
		case 'izquierda':
			x2=x2-ancho-offset-pico;
			y2=y2-alto/2;
			// $('body').append('<div class="svgToolTip" style="'+this.estilos+'left:'+ (x2)+'px; top:'+ (y2)+'px; z-Index: 9000;"></div>')
			// $('.svgToolTip').append('<div style="max-width:220px; min-width:'+ancho+'px; font-size:'+fontSize+'px; color:#000000; font-family:Lato"><p class="TestSvg" style="padding-left:'+sangria+'px;padding-right: '+sangria+'px;line-height: 1em;">'+this.texto+'</p></div>')
			
			// $(".svgToolTip").css("left",x2);
			// $(".svgToolTip").css("top",y2);
			// $(".svgToolTip").css("visibility",'visible');
			
			x=x-offset;
			this.svg.path(this.svg.grupo123,path.move(x-pico, y-pico).line(x, y).line(x-pico, y+pico).line(x-pico, y+alto/2).line(x-ancho, y+alto/2).line(x-ancho, y-alto/2).line(x-pico, y-alto/2).line(x-pico, y-pico),
			{fill: "#FFFFFF", stroke: "#000000", fillOpacity:"0", strokeWidth: "1", strokeOpacity:"0.4", transform:"translate(1,1)" });
			this.svg.path(this.svg.grupo123,path.move(x-pico, y-pico).line(x, y).line(x-pico, y+pico).line(x-pico, y+alto/2).line(x-ancho, y+alto/2).line(x-ancho, y-alto/2).line(x-pico, y-alto/2).line(x-pico, y-pico),
			{fill: "#FFFFFF", stroke: color, fillOpacity:"0.8", strokeWidth:"1", strokeOpacity:"1"});
		break;
	}
	
	$(".svgToolTip").css("left",x2);
	$(".svgToolTip").css("top",y2);
	// $(".svgToolTip").css("width",ancho);			//ocasiona problemas: se calcula ancho en base a this.divTexto[0] y luego NO debe asignarsele a this.divTexto
	// $(".svgToolTip").css("height",alto);
	$(".svgToolTip").css("visibility",'visible');
};
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.svgToolTip.prototype.destroy=function(){
	$('#grupo123').remove();
	$('.svgToolTip').remove();
};




















