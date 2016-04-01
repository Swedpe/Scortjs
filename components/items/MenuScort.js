/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	SplitButton v 1.0 - a jQuery Ui extension
	Licences: MIT & GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com]
*/
Components.MenuScort.prototype.init = function(dataObj) {
    this.tipo = 'MenuScort'; 
	this.config = {
        container: $('body'),
        id: "dropDownMenu-"+ Math.round(Math.random() * 2000),
        text: "",
        tooltip: "",
        icon: "",
		menuType:'ButtonDropDown',
		menuLevel:1,
		items: [],
        scale: 'small',
		parent:0,							//padre por defecto es null, para el nivel 1, los demas niveles tienen de padre
        hidden: false,
        enabled: true,
        enableToggle: false,
        menu: [],
		width:0,
		css:new Array(),
		subMenu:{
			requireClick:false,		
				},
        listeners: {
            click: function(event){}
        },
        handler: function(){},
        arrowHandler: []
    };
    
    for(var i in dataObj) {
        if(this.config[i] != undefined){
            if(i == "listeners") {
                for(var j in dataObj[i]) {
                    this.config[i][j] = dataObj[i][j];
                }
            }
            else
                this.config[i] = dataObj[i];
        }
    }
    this.menuLevel = this.config.menuLevel;
	this.parent = this.config.parent;
	this.width = this.config.width;
    this.id = this.config.id;
    this.container = this.config.container;
    this.className = "BotonMenu";
    this.pressed = false;
    this.handler = this.config.handler;
    this.arrowHandler = this.config.arrowHandler;
    this.listeners = this.config.listeners;
    this.items = this.config.items;
	this.itemsObjs = new Array();
}
//##############################################################################
//----------------------
Components.MenuScort.prototype.create = function() {
    //divcontainer por compativilidad en realidad es UL
    this.divContainer = $('<ul class="hoverview '+this.className+this.menuLevel+'" id="'+this.id+'"></ul>');
	 //top-level-menu es la class que activa el hover, 
	 var classHover = 'top-level-menu';
	switch(this.menuLevel){
		case 1:
		this.divContainer.addClass('nav nav-pills '+classHover);
		break;
		case 2:
		if(this.config.menuType=='ButtonDropDown'){
			this.divContainer.addClass('menu_nivel_dos');
		}
		if((this.parent!=0)&&(this.parent.parent.width!=0)){
			this.divContainer.css('left',parseInt(this.parent.parent.width));
			this.divContainer.css('width',parseInt(this.width)+2);
		}
		break;
		case 3:
		if(this.config.menuType=='ButtonDropDown'){
			this.divContainer.addClass('menu_nivel_tres');
		}
		if((this.parent!=0)&&(this.parent.parent.width!=0)){
			this.divContainer.css('width',parseInt(this.width)+2);
			this.divContainer.css('left',parseInt(this.parent.parent.width));
		}
		break;
		case 4:
		if(this.config.menuType=='ButtonDropDown'){
			this.divContainer.addClass('menu_nivel_cuatro');
		}
		if((this.parent!=0)&&(this.parent.parent.width!=0)){
			this.divContainer.css('width',parseInt(this.width)+2);
			this.divContainer.css('left',parseInt(this.parent.parent.width));
		}
		break;
	}
	
	this.container.append(this.divContainer);
	for(var i in this.config.css) {
		this.divContainer.css(i, this.config.css[i]);
	}
	//this.setControls();
	this.drawItems();
	return this;
}
//##############################################################################
Components.MenuScort.prototype.setConfig = function() {

}
//##############################################################################
Components.MenuScort.prototype.setControls = function() {
    this.divContainer.bind("click", {OBJ:this}, function(event) {
		console.log('lala');
        if(event.data.OBJ.config.enabled){
            event.data.OBJ.config.listeners.click(event);
            event.data.OBJ.handler(event);
        }   
    });
}
//##############################################################################
//##############################################################################
Components.MenuScort.prototype.show = function() {
  return this;
}
//##############################################################################
Components.MenuScort.prototype.destroy = function() {
    Components.Component.prototype.destroy.call(this);
}
//##############################################################################
Components.MenuScort.prototype.drawItems = function() {
    for(var i in this.items) {
		var item = this.items[i];
		this.drawItem(item);  
    }
}
//####################################################################################################################################
Components.MenuScort.prototype.drawItem = function(item) {
	item.container = this.divContainer;
	item.parent = this;
		if(item.type=='MenuItem'){
			item.menuType = this.config.menuType;
			item.menuLevel = this.menuLevel;	
		}
		var element = Components.create(item.type, item);
        this.itemsObjs.push(element);
}