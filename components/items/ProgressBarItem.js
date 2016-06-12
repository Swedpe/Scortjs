/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	ProgressBar v 1.0 - a jQuery Ui extension
	Licences: MIT & GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com].
*/
Components.ProgressBar.prototype.init = function(dataObj) {
    this.type = 'ProgressBar';
	this.config = {
        container: $('body'),
        id: "ProgressBar-"+ Math.round(Math.random() * 2000),
		parent:'',							//se usa especialmente cuando es parte de un form
        width: -1,
		value:50,
		shape:'rect',				//[rect,circle]
		scale:'small',					//[minier,mini,small,medium,large]
		state:'default',			
		disableState:'default',
		enableState:'default',
		position:'left',			//Direccion de la cual parte la barra de progreso [left,rigth]
		animate:true,				//las barras se moveran si es true, en rectangular. en circular, iniciaria animado, las barras siempre son solidas en el circular
		class:'solid',				//[striped,solid]
		css:new Array(),			//css adicional para el contenedor, no afecta al div interno
		input:false,				//si se activa a true se convierte en un elemento al que se puede usar como input entre un valor de 1 a 100
		name:"ProgressBarInput-"+ Math.round(Math.random() * 2000),
		positioning:'responsive',  //[responsive,absolute]	
        x: -1,
        y: -1,
		enabled: null,
		listeners: {
			change:function(event){},
            click: function(event){}
        }  
    };
    
    for(var i in dataObj) {
        if(this.config[i] != undefined){
		if(i == "listeners") {
                for(var j in dataObj[i]) {
                    this.config[i][j] = dataObj[i][j];
                }
            }
			else{
            this.config[i] = dataObj[i];
		}
      }
	}
	//control de enabled desde el componente hacia los padres
	if(this.config.enabled==null){
		if(this.config.parent!=''){
			this.enabled=this.config.parent.getConfig('enabled');
			if(this.enabled==null){
				this.enabled = true;
			}
		}else{
			this.enabled=true
		}
	}
	  
    this.id = this.config.id;
	this.name=this.config.name;
	this.state=this.config.state;
	this.parent = this.config.parent;
    this.container = this.config.container;   
    this.className = "ProgressBar";
	this.divText= null;
}
//##############################################################################
Components.ProgressBar.prototype.create = function() {
	switch(this.config.shape){
	case 'circle':
	this.divContainer= $('<div id="'+this.config.id+'" class="ProgressBar-circular ProgressBar-circular-'+this.config.scale+' ProgressBar-circular-'+this.config.state+'"></div>');
	this.HtmlValue = $('<span class="percent">'+this.config.value+'%</span>');//style="height: 90px; width: 90px; line-height: 90px;"
				//<canvas height="75" width="75"></canvas>
	this.container.append(this.divContainer);
	//se llama al otro componente que dibuja circulos en un contenedor canvas
	var colorBarra = '';
	var colorGuia = '';
	switch(this.config.state){
		case 'error':
		colorBarra = '#d9534f';
		colorGuia = '#F4D2D2';
		break;
		case 'active':
		colorBarra = 'green';
		colorGuia = '#BBCDBB';
		break;
		case 'warning':
		colorBarra = '#f0ad4e';
		colorGuia = '#FBEAD1';
		
		break;
		case 'default':
		colorBarra = 'black';
		break;
		case 'info':
		colorBarra = '#5bc0de';
		colorGuia = '#BADAE4';
		break;
		case 'highlight':
		colorBarra = '#CDCB38';
		colorGuia = '#FBFABE';
		break;
	}
	this.CircularBar = Components.create('EasyPieChart',{
				container:this.divContainer,
				scale:this.config.scale,
				lineWidth:10,
			
				barColor: colorBarra,
				datapercent:this.config.value,	
				trackColor: colorGuia,				
	});
	
	this.divContainer.prepend(this.HtmlValue);		
	break;
	case 'rect':	
	this.divContainer= $('<div id="'+this.config.id+'" class="progressBox ProgressBar bar-'+this.config.state+' progress-'+this.config.class+'">');
    this.container.append(this.divContainer);
	this.divContainer.append('<div class="progress-bar '+this.config.position +'  progress-bar-'+this.config.state+' progress-bar-'+this.config.scale+' " style="width: '+this.config.value+'%;"> <span>'+this.config.value+'%</span>');
	if(this.config.input){
		this.divContainer.append('<input type="hidden" name="'+this.config.name+'" value="'+this.config.value+'">');
	}
	this.config.animate ? $('.progress-bar',this.divContainer).addClass('active'):'nada';
    (this.config.width != -1)?this.divContainer.css("width", this.config.width):'nada';
	if (this.config.positioning=='absolute'){
		(this.config.x != -1)?this.divContainer.css("left", this.config.x):'nada';
		(this.config.y != -1)?this.divContainer.css("top", this.config.y):'nada'; 
	}  
	for(var i in this.config.css) {
		this.divContainer.css(i, this.config.css[i]);
	}
	break;
   
	}
	this.enabled?this.enable():this.disable();
	this.setControls();
	this.enableState=this.state;
	return this;
}
//##############################################################################
Components.ProgressBar.prototype.setControls = function() {
	this.Mdown = false;
	if(this.config.input==true){
		this.divContainer.bind("mousemove", {OBJ:this}, function(event) {
				if(event.data.OBJ.enabled){
				if(event.data.OBJ.Mdown){
					var value = (event.offsetX / this.offsetWidth)*101;
					if(event.data.OBJ.config.position=='right'){
						value = 100-(event.offsetX / this.offsetWidth)*101;
					}
					event.data.OBJ.setValue(parseInt(value));
				}
				}
		});
		this.divContainer.bind("mousedown", {OBJ:this}, function(event) {
		// this.container.bind("mousedown", {OBJ:this}, function(event) {
				if(event.data.OBJ.enabled){
				event.data.OBJ.Mdown=true;
				}
		});
		// this.divContainer.bind("mouseup", {OBJ:this}, function(event) {
		this.container.bind("mouseup", {OBJ:this}, function(event) {
				if(event.data.OBJ.enabled){
				event.data.OBJ.Mdown=false;
				}
		});
		this.divContainer.bind("click", {OBJ:this}, function(event) {
			if(event.data.OBJ.enabled){
				var value = (event.offsetX / this.offsetWidth)*100;
					if(event.data.OBJ.config.position=='right'){
						value = 100-(event.offsetX / this.offsetWidth)*100;
					}
					event.data.OBJ.setValue(parseInt(value));
            event.data.OBJ.config.listeners.click(event);
			}
    })
	}
	
}
//##############################################################################
Components.ProgressBar.prototype.changeScale = function(newScale) {
	//newScale puede ser cualquiera de estos valores, [minier,mini,small,medium,large]
  $('.progress-bar',this.divContainer).removeClass('progress-bar-'+this.config.scale);
  $('.progress-bar',this.divContainer).addClass('progress-bar-'+ newScale);  
  this.config.scale= newScale; 
if (this.CircularBar){
  switch(newScale){
		case 'minier':
		this.CircularBar.renderer.changescale(50);  
		break;
		case 'mini':
		this.CircularBar.renderer.changescale(70);  
		break;
		case 'small':
		this.CircularBar.renderer.changescale(90);  
		break;
		case 'medium':
		this.CircularBar.renderer.changescale(110);  
		break;
		case 'large':
		this.CircularBar.renderer.changescale(150);  
		break;
	}
}
}
//##############################################################################
Components.ProgressBar.prototype.changeClass = function(newClass) {
	//newClass puede ser: [solid,striped]
	if(newClass=='solid'){
		this.divContainer.removeClass('progress-striped');
		this.config.class=newClass;
	}
	else if((newClass=='striped')&&(this.config.class!='striped')){
		this.divContainer.addClass('progress-striped');
		this.config.class=newClass;
	}
	return this;
}
 //##############################################################################
Components.ProgressBar.prototype.changeState = function(newState) {
if(newState!=this.config.state){
  if(this.CircularBar){
	var colorBarra = '';
	var colorGuia = '';
	  switch(newState){
		case 'error':
		colorBarra = '#d9534f';
		colorGuia = '#F4D2D2';
		break;
		case 'active':
		colorBarra = 'green';
		colorGuia = '#BBCDBB';
		break;
		case 'warning':
		colorBarra = '#f0ad4e';
		colorGuia = '#FBEAD1';
		break;
		case 'default':
		colorBarra = 'black';
		break;
		case 'info':
		colorBarra = '#5bc0de';
		colorGuia = '#BADAE4';
		break;
		case 'highlight':
		colorBarra = '#CDCB38';
		colorGuia = '#FBFABE';
		break;
		// case 'disable':
		// colorBarra = '#000000';
		// colorGuia = '#008800';
		// break;
	}
	   this.CircularBar.renderer.options.barColor = colorBarra;
	   this.CircularBar.update(this.config.value);
	   
  }
  else{
	this.divContainer.removeClass('bar-'+this.config.state);
	this.divContainer.addClass('bar-'+ newState); 
	$('.progress-bar',this.divContainer).removeClass('progress-bar-'+this.config.state);
	$('.progress-bar',this.divContainer).addClass('progress-bar-'+ newState);  
  }
	// if(newState!='disable')
	this.config.state= newState;
}
} 
 
  //##############################################################################
Components.ProgressBar.prototype.changePosition = function(newPosition) {
 //newPosition puede ser left y right.
  $('.progress-bar',this.divContainer).removeClass(this.config.position);
  $('.progress-bar',this.divContainer).addClass(newPosition);
  this.config.position= newPosition;   	
     
 }
  //##############################################################################
 Components.ProgressBar.prototype.setValue = function(valor) {
	 //valor tiene que ser un numero entre 1 y 100.
    if(isNumber(valor) && valor <=100 && valor >=0){
			
	this.config.value = valor;
	if(this.config.input){
		$('input',this.divContainer).val(this.config.value);
	}
	if(this.CircularBar){
		$('.percent',this.divContainer).html(valor+'%')
		this.CircularBar?this.CircularBar.update(valor):'nada';
	}
	else{
	$('.progress-bar',this.divContainer).css('width' , valor+'%');
	$('span' , $('.progress-bar',this.divContainer)).html(valor+'%');
	}	
	}		
}
//##############################################################################
Components.ProgressBar.prototype.getValue = function(valor) {
    return this.config.value;
}
//##############################################################################
Components.ProgressBar.prototype.disable = function() {
	//change input state to disable, el componente ya no sera editable
	this.enabled=false;
	// this.changeState('default');
	// this.changeState('disable')
	// this.changeState(this.disableState);
	this.divContainer.removeClass('bar-'+this.config.state);
	this.divContainer.addClass('bar-disable'); 
	$('.progress-bar',this.divContainer).removeClass('progress-bar-'+this.config.state);
	$('.progress-bar',this.divContainer).addClass('progress-bar-disable');
	this.divContainer.prop('disabled', true);
}
//##############################################################################
Components.ProgressBar.prototype.enable = function() {
	//change input state to enable, el componente sera editable
	this.enabled=true;
	// this.changeState('info');
	// this.changeState(this.enableState);
	this.divContainer.removeClass('bar-disable');
	this.divContainer.addClass('bar-'+ this.state); 
	$('.progress-bar',this.divContainer).removeClass('progress-bar-disable');
	$('.progress-bar',this.divContainer).addClass('progress-bar-'+ this.state);  
	this.divContainer.prop('disabled', false);
}
