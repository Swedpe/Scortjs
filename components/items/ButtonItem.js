/**____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	WindowContainer v 1.0 - a jQuery Ui extension
	Licences: MIT & GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com].
*/
Components.Button.prototype.init = function(dataObj){
	this.tipo = 'button';
    this.config = {
        container: $('body'),
		type:'button',				//los del tipo submit en un formulario envían el formulario
		parent:'',
        id: "button-"+ Math.round(Math.random() * 2000),
        text: "",
        tooltip: "",
		shape:'rect',
		setIcon: '',
		css:new Array(),
		state:'default',			//este es el estilo por defecto de jquery ui css, 
        icon: {
				type:'none',		//tipos posibles fontawesome y image
				image : '',
				position:'left',
				color:'default',
				animate:false,
				css:{},
			},
		icon2: {
				type:'none',
				image : '',
				position:'left',
				color:'default',
				animate:false,
				css:{},
			},
        clsIcon: '',
        x: -1,
        y: -1,
        scale: 'default',
        hidden: false,
        enabled: true,
        enableToggle: false,
		State2:'disabled',			//este estilo se aplica solo en togle como estilo 2, 
        handler: function(e){},
		CodeHelper:"",
        listeners: {
            click: function(event){}
        }        
    };   
    for(var i in dataObj) {
        if(this.config[i] != undefined) {
            if((i == "listeners")||(i == "icon") ||(i == "image")) {
                for(var j in dataObj[i]) {
                    this.config[i][j] = dataObj[i][j];
                }
            }
            else
                this.config[i] = dataObj[i];
        }
    }
	this.parent = this.config.parent;
	this.CodeHelper = this.config.CodeHelper;
    this.id = this.config.id;
    this.container = this.config.container;
    this.className = "buttonItem";
    this.pressed = false;
    this.handler = this.config.handler;
    this.listeners = this.config.listeners;
    this.divText = null;
    this.divIcon = null;
	if(this.config.icon.type== 'fontawesome')
	{this.config.icon.type= 'fa'; }
	else if(this.config.icon.type== 'glipicon')
	{this.config.icon.type= 'glyphicon'; }
	
	this.DIconfayglip = $('<i class="buttonItem-icon-'+this.config.icon.position+'  " style="color:'+this.config.icon.color+'"></i>');
	this.DIconimg = $('<img class ="ImageZone buttonItem-icon-'+this.config.icon.position+'" src="'+this.config.icon.image+'">');
}
//##############################################################################
Components.Button.prototype.create = function() {
	this.divContainer = $('<button type="'+this.config.type+'" class="'+ this.className+'" id="'+this.id+'">'+this.config.text+'</button>');
	this.container.append(this.divContainer);
    this.divContainer.addClass(this.className + "-" + this.config.scale);//tamaño
	this.divContainer.addClass("ui-button buttonItem-enabled ui-corner-all");//generico
    this.divContainer.addClass("ui-state-"+this.config.state);//color 
	this.divText =  $('<span>'+this.config.text+'</span>');  
	  
    if(this.config.icon.type != "none"){
		switch(this.config.icon.type){
			case 'fontawesome':
			case 'fa':
			this.divIcon = this.DIconfayglip;
			this.divIcon.addClass('fa');
			this.divIcon.addClass(this.config.icon.class);
			
			if(this.config.icon.animate!=false){
				this.divIcon.addClass('fa-spin')
			}
			for(var i in this.config.icon.css) {
				this.divIcon.css(i, this.config.icon.css[i]);
			}
			
			break;
			case 'glipicon':
			case 'glyphicon':
			this.divIcon = this.DIconfayglip;
			this.divIcon.addClass('glyphicon');
			this.divIcon.addClass(this.config.icon.class);
			
			if(this.config.icon.animate!=false){
				this.divIcon.addClass('fa-spin')
			}
			for(var i in this.config.icon.css) {
				this.divIcon.css(i, this.config.icon.css[i]);
			}
			break;
			
			case 'image': 
			this.divIcon = this.DIconimg;
			if(this.config.icon.animate!=false){
				this.divIcon.addClass('fa-spin')
				}
			this.ImageElement =  $('.ImageZone', this.divIcon); 
			break;
		}	
	}	//posicionamiento del icono, izquiera o derecha.
	this.config.icon.position== "right" ? this.divContainer.append(this.divIcon) : this.divContainer.prepend(this.divIcon);
	if ((this.config.shape == 'box')||(this.config.shape == 'circle')){			
			//si se define forma rectangular y no se define el texto, la altura de la caja fallara, por lo cual se coloca un tamaño fijo segun sea el caso
			if(this.config.text==""){
				switch(this.config.scale){
					case 'mini':
					this.divIcon.css('line-height','40px');
					break;
					case 'small':
					this.divIcon.css('line-height','48px');	
					break;
					case 'medium':
					this.divIcon.css('line-height','54px');	
					break;
					case 'large':
					this.divIcon.css('line-height','58px');	
					break;
				}
			}
			//para lograr botones circulares:
			if(this.config.shape == 'circle'){
				this.divContainer.addClass('btn-circle');
			}
			else if (this.config.shape == 'box'){
				this.divContainer.addClass('btn-box');
			}
	}	
    if(this.config.tooltip != "") {
        this.divContainer.prop("alt", this.config.tooltip);
        this.divContainer.prop("title", this.config.tooltip);
    }
	//solo se usan  si son posiciones absolutas
    if(this.config.x != -1) {
        this.divContainer.css("left", this.config.x);
    }
    if(this.config.y != -1) {
        this.divContainer.css("top", this.config.y);
    }
	//juego con estilos 
	for(var i in this.config.css) {
		this.divContainer.css(i, this.config.css[i]);
	}
    this.config.enabled ? this.enable() : this.disable();
    
    this.setControls();
	return this;
}
//##############################################################################
Components.Button.prototype.setControls = function() {
    this.divContainer.bind("click", {OBJ:this}, function(event) {
        if(event.data.OBJ.config.enabled){
            if(event.data.OBJ.config.enableToggle) {
                event.data.OBJ.toggle();
            }
            event.data.OBJ.config.listeners.click(event);
            event.data.OBJ.handler(event);
        }   
    });
}
//##############################################################################
Components.Button.prototype.toggle = function() {
	this.pressed ? this.changeIconoVisual(this.config.icon) : this.changeIconoVisual(this.config.icon2);
    this.pressed = !this.pressed;	
}
//##############################################################################
Components.Button.prototype.setText = function(text) {
    this.config.text = text;
	$('span',this.divContainer).html(text);	
}
//##############################################################################
Components.Button.prototype.getText = function(text) {
    return this.config.text;
}
//##############################################################################
Components.Button.prototype.show = function() {
   !this.config.hidden ? Components.Component.prototype.show.call(this) : this.hide();
   return this;
}
//##############################################################################
Components.Button.prototype.setVisible = function(visible) {
 visible ? this.divContainer.show() : this.divContainer.hide();
}
//##############################################################################
Components.Button.prototype.setDisabled = function(disabled) {
    disabled ? this.disable() : this.enable();
}
//##############################################################################
Components.Button.prototype.disable = function() {
    Components.Component.prototype.disable.call(this);
    this.divContainer.removeClass('buttonItem-pressed');
}
//##############################################################################
Components.Button.prototype.enable = function() {
    Components.Component.prototype.enable.call(this);
    if(this.pressed) {
        this.divContainer.addClass('buttonItem-pressed');
    }
}
//##############################################################################
Components.Button.prototype.setIcon = function(path) {
     this.config.image = path;
	 this.divIcon.css("background-image", "url('"+this.config.image+"')");
	 this.ImageElement.attr("src", path);
}
//##############################################################################
Components.Button.prototype.changeIcono = function(IconPos, iconoObj) {
	if((IconPos==1)&&(this.pressed==false)){
		//icono actualmente visible cambiar.
		this.changeIconoVisual(iconoObj);
		this.config.icon = iconoObj;
	}else if((IconPos==1)&&(this.pressed==true)){
		this.config.icon = iconoObj;
	}
	else if((IconPos==2)&&(this.pressed==false)){
		//icono actualmente visible cambiar.
		this.config.icon = iconoObj;
	}else if((IconPos==2)&&(this.pressed==true)){
		this.changeIconoVisual(iconoObj);
		this.config.icon = iconoObj;
	}
}
//##############################################################################
Components.Button.prototype.changeIconoVisual = function(iconoObj) {
//realiza solo el cambio visual no cambia los valores de configuracion del componente.
if(typeof(iconoObj)=='undefined'){return false;}
(iconoObj.type == 'fontawesome')?iconoObj.type = 'fa':'nada'; 
(iconoObj.type == 'glipicon')?iconoObj.type= 'glyphicon':'nada';
var ProcessIco = '';
(this.pressed)?ProcessIco=this.config.icon2:ProcessIco=this.config.icon;				//ProcessIco es el icono que se va procesar.
	 var cambios = new Array();
	 //analizando entrada de datos
	 if((ProcessIco.type=='none') && (typeof(iconoObj.type!='undefined') && (iconoObj.type!='none')))
	 { iconoObj.position ? iconoObj.position= iconoObj.position : iconoObj.position=this.config.icon.position;
	    cambios.push('crearicono');			 
	 }
	else if(ProcessIco.type != "none"){
	     if(ProcessIco.position!=iconoObj.position){
		 iconoObj.type ? iconoObj.type= iconoObj.type : iconoObj.type=ProcessIco.type; 
		 cambios.push('position');
	   }  
	 if((ProcessIco.type!=iconoObj.type)&&((ProcessIco.type == 'image')||(iconoObj.type == 'image'))){ //solo cuando es un cambio drastico de image a fa o de glip // de glip o fa a image
	      cambios.push('type');
		  }
	 else if((iconoObj.type == 'image')){
	    cambios.push('cambiodeimagen');//de imagen a imagen 
	 }	
   if((typeof (iconoObj.color)!= 'undefined')&&(ProcessIco.color!=iconoObj.color)){
	      cambios.push('color');
	}  
   if((typeof(iconoObj.class)!='undefined')&&((ProcessIco.type =='fa')||(ProcessIco.type =='glyphicon'))&&(ProcessIco.class!=iconoObj.class)){
	      cambios.push('class'); // afecta a cambios entre fa y glip , como tambien solo cambio de class
	}
 }	
//ejecutando cambios	 
		for(var i in cambios) {
		switch (cambios[i])
		{
		  case 'position':  
		    (iconoObj.position== "left") ? this.divContainer.prepend(this.divIcon) : this.divContainer.append(this.divIcon);
		break;
		  
		  case 'type':
		   {    if((iconoObj.type == 'fa' )||(iconoObj.type=='glyphicon')) {
				 this.divIcon.remove();
				 this.divIcon=this.DIconfayglip;
				 this.divIcon.addClass(iconoObj.type);
                 this.divIcon.addClass(iconoObj.class); 
				 this.divContainer.removeClass(ProcessIco.position);
				 this.divContainer.addClass(iconoObj.position);	
				 (iconoObj.position== "right") ? this.divContainer.append(this.divIcon) : this.divContainer.prepend(this.divIcon); 
			 }
		   else if(iconoObj.type == 'image') {
				     this.divIcon.remove();
					 this.divIcon = this.DIconimg;
					 this.divIcon.attr("src", iconoObj.image);
					  iconoObj.position== "right" ? this.divContainer.append(this.divIcon) : this.divContainer.prepend(this.divIcon);
				 }	  
			}
		  break;	  
		  case 'color':
		          iconoObj.color== 'default' ? this.divIcon.css('color', 'black') : this.divIcon.css('color', iconoObj.color);
		  break;	  
		  case 'class': // afecta a cambios entre fa y glip , como tambien solo cambio de class
					  this.divIcon.removeClass(ProcessIco.class);
					  this.divIcon.removeClass(this.config.icon.class);
					  this.divIcon.addClass(iconoObj.class);                       /**/ 
					  if (ProcessIco.type != iconoObj.type){
					   this.divIcon.removeClass(ProcessIco.type);
					   this.divIcon.addClass(iconoObj.type); 
					 }			     
		  break;	  		  
		  case 'cambiodeimagen':
		  this.divIcon.attr("src", iconoObj.image);
		  break;	  
		  case 'crearicono':		//si no tenia icono anteriormente
		   if((iconoObj.type == 'fa' )||(iconoObj.type=='glyphicon')) {
				this.divIcon=this.DIconfayglip;
				this.divIcon.addClass(iconoObj.type);
				this.divIcon.addClass(iconoObj.class);
				this.divContainer.removeClass(ProcessIco.position);
			    this.divContainer.addClass(iconoObj.position);			
			    iconoObj.position== "right" ? this.divContainer.append(this.divIcon) : this.divContainer.prepend(this.divIcon); 
			}
			else if(iconoObj.type == 'image'){
				this.divIcon = this.DIconimg;
				this.divIcon.attr("src", iconoObj.image);
				iconoObj.position== "right" ? this.divContainer.append(this.divIcon) : this.divContainer.prepend(this.divIcon);
			}
		 break;		  
		}
    }
  } 
//##############################################################################
Components.Button.prototype.remove = function() {
	// this.divContainer.unbind("click", {OBJ:this}, function(event);
	this.divContainer.unbind();
	this.destroy();
	// console.log("hola");
} 

 //##############################################################################
Components.Button.prototype.changeColor = function(statePos,newState) {
   switch (statePos)
	 {
	case 1:
			   if(this.pressed == false){
				  this.divContainer.removeClass('ui-state-'+this.config.state);
				  this.divContainer.addClass('ui-state-'+newState); 
				  }
			   this.config.state= newState;   
		break;
		
		case 2:
			   if(this.pressed == true) {
				  this.divContainer.removeClass('ui-state-'+this.config.State2);
				  this.divContainer.addClass('ui-state-'+newState);
			  }
			  this.config.State2= newState;
		break;
     } 
 } 
  //#################################################################################
Components.Button.prototype.changeScale = function( newScale){
	   if(this.config.scale != "none") {			   
				  this.divContainer.removeClass(this.className + '-'+this.config.scale);
				  this.divContainer.addClass('buttonItem-'+newScale); 				  
				}  
			   this.config.scale= newScale;			   
	}  
  //##############################################################################
Components.Button.prototype.changeForma = function( newForma){
      if(this.config.shape != "none") {
	     this.divContainer.removeClass(this.config.shape);
			  if(newForma=='box'){
				      this.divContainer.removeClass(this.config.shape);
				      this.divContainer.addClass('btn-box');
					  this.divContainer.css('btn-box');	
					  this.config.shape= 'btn-box';
					}	
		      if(newForma=='circle') {
				     this.divContainer.removeClass(this.config.shape);
					 this.divContainer.addClass('btn-circle');
					 this.divContainer.css('btn-circle');
					 this.config.shape= 'btn-circle';
					}					
			 if(newForma=='rect') {
				     this.divContainer.removeClass(this.config.shape);
					 this.divContainer.addClass('btn-rect');
					 this.divContainer.css('btn-rect');
					  this.config.shape= 'btn-rect';
					}
		    } 
	} 
//##############################################################################
Components.Button.prototype.setHandler = function(Handler) {
   this.handler = Handler;
}