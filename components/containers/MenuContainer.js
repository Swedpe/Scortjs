/**
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
//##############################################################################
Components.MenuPanel.prototype.init = function(dataObj) {
    this.config = {
        container: $('body'),
        id: "menucontainer-"+ Math.round(Math.random() * 2000),
        width: -1,
        height: -1,
        floating: true,
        items: []
    };
    
    for(var i in dataObj) {
        if(this.config[i] != undefined) {
            this.config[i] = dataObj[i];
        }
    }
    
    this.id = this.config.id;
    this.container = this.config.container;
    this.className = "menuContainer";
    this.items = this.config.items;
}
//##############################################################################
Components.MenuPanel.prototype.create = function() {
    this.container.append('<ul class="'+this.className+'"></ul>');
    this.divContainer = $('ul', this.container);
    
    for(var i in this.items) {
        this.drawItem(this.items[i]);
    }
    
    this.divContainer.hide().menu();
    
    this.setConfig();
    this.setControls();
	return this ;
}
//##############################################################################
Components.MenuPanel.prototype.setConfig = function() {
    var configCss = {};
    
    if(this.config.floating) configCss.position = "fixed";
    if(this.config.width != -1) configCss.width = this.config.width;
    if(this.config.height != -1) configCss.height = this.config.height;
    
    this.divContainer.css(configCss);
}
//##############################################################################
Components.MenuPanel.prototype.drawItem = function(item) {
    item.id = (item.id == undefined) ? "menuitem-"+ Math.round(Math.random() * 2000) : item.id;
    this.divContainer.append('<li class="menuItem" id="'+item.id+'">'+item.text+'</li>');
    return {};
}
//##############################################################################
Components.MenuPanel.prototype.setControls = function() {
    this.divContainer.on( "menuselect", {OBJ:this}, function( event, ui ) {
        if(event.data.OBJ.items[ui.item.index()].handler != undefined)
            event.data.OBJ.items[ui.item.index()].handler();
    });
}
//##############################################################################
Components.MenuPanel.prototype.add = function(newItem) {
    Components.Component.prototype.add.call(this, newItem);
    this.divContainer.menu( "refresh" );
}
//##############################################################################
Components.MenuPanel.prototype.setWidth = function(width) {
    this.divContainer.css("width", width);
}
//##############################################################################