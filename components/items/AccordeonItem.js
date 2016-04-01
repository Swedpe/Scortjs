/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	AcordeonItem v 1.0 - a jQuery Ui extension
	Licences: MIT & GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com].
*/
Components.AccordeonItem.prototype.init = function(dataObj) {
    this.config = {
        container: $('body'),
        headerContainer: $('body'),
        id: "accordeonitem-"+ Math.round(Math.random() * 2000),
        width: -1,
		height:-1,
		css:new Array(),       
        title: "",
        html: "",
        hidden: false,
        autoScroll: false,
        items: [],
        listeners: {
            activate: function(){},
            render: function(){}
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
    
    this.isActive = false;
    this.id = this.config.id;
    this.title = this.config.title;
    this.container = this.config.container;
    this.className = "accordeonitem";
    this.items = this.config.items;
    this.itemsObjs = [];
    this.listeners = this.config.listeners;
    
    this.headerTab = null;
    this.bodyTab = null;
}
//##############################################################################
Components.AccordeonItem.prototype.create = function() {
   
    this.divContainer = this.container;
	this.divContainer.append('<h3 id="header_'+this.id+'" style="text-align: left">'+this.title+'</h3>');	
	Components.Component.prototype.create.call(this);    
    this.header = $('#header_' + this.id);
    this.content  =  this.divContainer;
	this.content.css( 'position', 'relative');
	this.drawItems();
    
	if(this.config.html != "") {
        this.divContainer.append(this.config.html);
    }
    if(this.config.width > -1) {
        this.divContainer.css("width", this.config.width);
    }
	  if(this.config.height != -1) {
        this.divContainer.css("height", this.config.height);
    }
    if(this.config.autoScroll == true) {
        this.divContainer.css("overflow", "auto");
    }
    
    /* if(this.config.hidden == true) {
        this.hide();
    }*/
    
    this.listeners.render();
	return this;
}
//##############################################################################
Components.AccordeonItem.prototype.drawItems = function() {
    for(var i in this.items) {
        var item = this.items[i];
        item.container = this.content;
        var element = Components.create(item.type, item);
        this.itemsObjs.push(element);
    }
}
//################################################################################
Components.AccordeonItem.prototype.drawItem = function(item) {
	item.container = this.content;
	var element = Components.create(item.type, item);
	this.itemsObjs.push(element);
}
//##############################################################################
Components.AccordeonItem.prototype.show = function(){
    Components.Component.prototype.show.call(this);
   if(!$(this.content).hasClass("ui-accordion-content-active"))
		$(this.content).hide();
	
	  return this;
}
//##############################################################################
Components.AccordeonItem.prototype.width = function() {
    
}
//##############################################################################
Components.AccordeonItem.prototype.hide = function() {   
    this.header.hide();
	this.content.hide();
}
//##############################################################################
Components.AccordeonItem.prototype.setVisible = function(visible) {
    /*this.config.hidden = !visible;
    this.show();*/
}