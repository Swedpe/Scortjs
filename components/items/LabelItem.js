/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	Label v 1.0 - a jQuery Ui extension
	Licences: MIT & GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com].
*/
Components.Label.prototype.init = function(dataObj) {
    this.config = {
        container: $('body'),
        id: "label-"+ Math.round(Math.random() * 2000),
		css:new Array(),
        text: "",
        alignLabel: "left",
        width: -1,
        height: -1,
        x: -1,
        y: -1,
        styleLabel:'none'
    };
    
    for(var i in dataObj) {
        if(this.config[i] != undefined)
            this.config[i] = dataObj[i];
    }
    
    this.id = this.config.id;
    this.container = this.config.container;
    this.styleLabel = this.config.styleLabel;
    this.className = "labelItem";
}
//##############################################################################
Components.Label.prototype.create = function() {
    Components.Component.prototype.create.call(this);
    this.divContainer.html(this.config.text);
    
    if(this.config.height != -1) {
        this.divContainer.css("height", this.config.height);
    }
    if(this.config.width != -1) {
        this.divContainer.css("width", this.config.width);
    }
    if(this.config.x != -1) {
        this.divContainer.css("left", this.config.x);
    }
    if(this.config.y != -1) {
        this.divContainer.css("top", this.config.y);
    }
    
    if(this.config.styleLabel != 'none') 
        this.divContainer.addClass(this.config.styleLabel);
    
    this.divContainer.css('text-align', this.config.alignLabel);
	for(var i in this.config.css) {
		this.divContainer.css(i, this.config.css[i]);
	}
	return this;
}
//##############################################################################
Components.Label.prototype.setText = function(text) {
    this.config.text = text;
    this.divContainer.html(text);
}
//##############################################################################
Components.Label.prototype.getText = function() {
    return this.config.text;
}