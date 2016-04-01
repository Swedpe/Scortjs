/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	Image v 1.0 - a jQuery Ui extension
	Licences: MIT & GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com].
*/
Components.Image.prototype.init = function(dataObj) {
    this.config = {
        container: $('body'),
        id: "image-"+ Math.round(Math.random() * 2000),
        text: "",
        tooltip: "",
		css:new Array(),
        image:'',
        height: -1,
        width: -1,
        x: -1,
        y: -1,
        hidden: false,
        enabled: true,
        enableToggle: false,
        handler: function(){},
		CodeHelper:"",
        listeners: {
            click: function(event){}
        }        
    };
    
    for(var i in dataObj) {
        if(this.config[i] != undefined) {
            if(i == "listeners") {
                for(var j in dataObj[i]) {
                    this.config[i][j] = dataObj[i][j];
                }
            }
            else
                this.config[i] = dataObj[i];
        }
    }
    
    this.id = this.config.id;
    this.container = this.config.container;
    this.className = "imageItem";
    this.pressed = false;
    this.handler = this.config.handler;
    this.listeners = this.config.listeners;
    }
//##############################################################################
Components.Image.prototype.create = function() {
    Components.Component.prototype.create.call(this);
    this.divContainer.addClass(this.className);
    this.divContainer.append('<img class ="ImageZone" src="'+this.config.image+'" alt="'+this.config.tooltip+'" height="'+this.config.height+'" width="'+this.config.width+'">');
    this.ImageElement =  $('.ImageZone', this.divContainer);   
       
    if(this.config.tooltip != "") {
        this.divContainer.prop("alt", this.config.tooltip);
        this.divContainer.prop("title", this.config.tooltip);
    }
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
Components.Image.prototype.setControls = function() {
    this.divContainer.bind("click", {OBJ:this}, function(event) {
        if(event.data.OBJ.config.enabled){
            if(event.data.OBJ.config.enableToggle) {
                event.data.OBJ.toggle();
            }
            event.data.OBJ.config.listeners.click(event);
            event.data.OBJ.handler();
        }   
    });
}
//##############################################################################
Components.Image.prototype.toggle = function() {
    if(this.pressed) {
        this.divContainer.removeClass('buttonItem-pressed').addClass('buttonItem-enabled');
    }
    else {
        this.divContainer.addClass('buttonItem-pressed').removeClass('buttonItem-enabled');
    }
    this.pressed = !this.pressed;
}
//##############################################################################
Components.Image.prototype.show = function() {
    if(!this.config.hidden)
        Components.Component.prototype.show.call(this);
    else
        this.hide();
 return this;
}
//##############################################################################
Components.Image.prototype.setVisible = function(visible) {
    if(visible == true)
        this.divContainer.show();
    else
        this.divContainer.hide();
}
//##############################################################################
Components.Image.prototype.setDisabled = function(disabled) {
    disabled ? this.disable() : this.enable();
}
//##############################################################################
Components.Image.prototype.disable = function() {
    Components.Component.prototype.disable.call(this);
    this.divContainer.removeClass('buttonItem-pressed');
}
//##############################################################################
Components.Image.prototype.enable = function() {
    Components.Component.prototype.enable.call(this);
    if(this.pressed) {
        this.divContainer.addClass('buttonItem-pressed');
    }
}
//##############################################################################
Components.Image.prototype.setImage = function(path) {
    this.config.image = path;
	this.ImageElement.attr("src", path);
   }