
/**
Aqui hay algo mal, este archivo no esta correcto
 ____                 _         _ ____  
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
Components.FreeDiv.prototype.init = function(dataObj) {
    this.config = {
        container: $('body'),
        id: "freediv-"+ Math.round(Math.random() * 2000),             
		css:new Array(),
		hidden: false,
        height: -1,
        width: -1,
        x: -1,
        y: -1,
		items: [],		
               
    };
    
    for(var i in dataObj) {
        if(this.config[i] != undefined) 
			this.config[i] = dataObj[i];        
    }
    
    this.id = this.config.id;
    this.container = this.config.container;
    this.className = "FreeDiv"; 
	this.items = this.config.items;	
	this.itemsObjs = [];
    
}
//##############################################################################
Components.FreeDiv.prototype.create = function() {
    Components.Component.prototype.create.call(this);	
    
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
	 this.drawItems();
   	return this ;
}
//##############################################################################
Components.FreeDiv.prototype.show = function() {
    if(!this.config.hidden)
        Components.Component.prototype.show.call(this);
    else
        this.hide();
}
Components.FreeDiv.prototype.drawItems = function() {
    for(var i in this.items) {
        this.drawItem(this.items[i]);
    }
}
//##############################################################################
Components.FreeDiv.prototype.drawItem = function(item) {
    item.container = this.divContainer;
    item.parent = this.id;
    var newItem = Components.create(item.type, item);
    this.itemsObjs.push(newItem);
    return newItem;
}
//##############################################################################





