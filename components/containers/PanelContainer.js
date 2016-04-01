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

// http://try.sencha.com/extjs/4.0.7/examples/layout/border/viewer.html
Components.Panel.prototype.init = function(dataObj) {
    this.config = {
        container: $('body'),
        id: "panel-"+ Math.round(Math.random() * 2000),
        title: "",
        bodyPadding: -1,
        margin: -1,
        headerPosition: "top",  //'top', 'bottom', 'left' or 'right'
        width: -1,
        height: -1,
        css:new Array(),
		autoScroll: false,
        split: false,
        state:'default',
		region: "center",
        html: "",
        items: [],
        dockedItems: [],
        listeners: {
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
    
    this.id = this.config.id;
    this.container = this.config.container;
    this.listeners = this.config.listeners;
    this.region = this.config.region;
    this.className = "panelContainer";
    this.items = this.config.items;
    this.itemsObjs = [];
    
    this.splitter = null;
    this.divHeader = null;
    this.divBody = null;
}
//##############################################################################
Components.Panel.prototype.create = function() {
    Components.Component.prototype.create.call(this);
    
    if(this.config.title != "")
        this.createHeader();
    this.divContainer.addClass(this.config.state);
   
   switch(true) {
        case ((this.region=="left") && (this.config.split)):
            this.createBody();
            this.divContainer.css("float", "left");
            this.createSplitter("vertical");
        break;
        case ((this.region=="right") && (this.config.split)):
            this.createSplitter("vertical");
            this.createBody();
            this.divContainer.css("float", "right");
        break;
        case ((this.region=="top") && (this.config.split)):
            this.createBody();
            this.createSplitter("horizontal");
        break;
        case ((this.region=="bottom") && (this.config.split)):
            this.createSplitter("horizontal");
            this.createBody();
        break;
        default:
            this.createBody();
            this.divContainer.css("float", "left");
        break;
    }
    
    this.setConfig();
    this.drawItems();
    
    if(this.config.html != "") {
        this.divBody.append(this.config.html);
    }
    
    this.listeners.render();
	return this ;
}
//##############################################################################
Components.Panel.prototype.setConfig = function() {
    var cssGeneral = {};
    var cssBody = {};
    
    if(this.config.width != -1) cssGeneral.width = this.config.width;
    if(this.config.height != -1) cssGeneral.height = this.config.height;
    if(this.config.margin != -1) cssGeneral.borderWidth = this.config.margin;
    if(this.config.bodyPadding != -1) cssBody.padding = this.config.bodyPadding;
    if(this.config.autoScroll) cssBody.overflow = "auto";
    for(var i in this.config.css) {
		this.divContainer.css(i, this.config.css[i]);
	}
    this.divContainer.css(cssGeneral);
    this.divBody.css(cssBody);
}
//##############################################################################
Components.Panel.prototype.createHeader = function() {
    this.divContainer.append('<div class="headerPanel"><span class="titleHeader">'+this.config.title+'</span></div>');
    this.header = $('.headerPanel', this.divContainer);
    this.divTitle = $('.titleHeader', this.header);
}
//##############################################################################
Components.Panel.prototype.createBody = function() {
    this.divContainer.append('<div class="bodyPanel"></div>');
    this.divBody = $('.bodyPanel', this.divContainer);
}
//##############################################################################
Components.Panel.prototype.createSplitter = function(direction) {
    var item = {};
    item.container = this.container;
    item.type = "Splitter";
    item.typeSplit = direction;
    this.splitter = Components.create(item.type, item);
}
//##############################################################################
//##############################################################################
Components.Panel.prototype.drawItems = function() {
    for(var i in this.items) {
        this.drawItem(this.items[i]);
    }
}
//##############################################################################
Components.Panel.prototype.drawItem = function(item) {
    item.container = this.divBody;
    item.parent = this.id;
    var newItem = Components.create(item.type, item);
    this.itemsObjs.push(newItem);
    return newItem;
}
//##############################################################################
Components.Panel.prototype.setTitle = function(title) {
    this.config.title = title;
    this.divTitle.html(title);
}
//##############################################################################
Components.Panel.prototype.setHeight = function(height) {
    this.divContainer.css("height", height);
}
//##############################################################################
Components.Panel.prototype.setWidth = function(width) {
    this.divContainer.css("width", width);
}
//##############################################################################
Components.Panel.prototype.addDocked = function(component) {
    
}
//##############################################################################
//##############################################################################
//##############################################################################
Components.Panel.prototype.show = function() {
    Components.Component.prototype.show.call(this);
    if(this.splitter != null)
        this.splitter.show();
  return this;
}
//##############################################################################
Components.Panel.prototype.hide = function() {
    Components.Component.prototype.hide.call(this);
    if(this.splitter != null)
        this.splitter.hide();
}
//##############################################################################
Components.Panel.prototype.destroy = function() {
    Components.Component.prototype.destroy.call(this);
    if(this.splitter != null)
        this.splitter.destroy();
}
//##############################################################################








function pruebaPanel1() {
    var ee = Components.create('Window',{
        title: "Padre", 
        height:400, 
        width: 600,
        //html: '<input type="text" size="20" style="width:100px;">',
        items: [
            {
                type: 'Panel',
                //region: 'left',
                title: "Hijo 1",
                width: 200,
                height: 200                
            }/*,
            {
                type: 'Window',
                title: "Hijo 2",
                width: 200,
                height: 200
            }*/
        ]
    });
    
    ee.show();
    return ee;
}