/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	ToolBar v 1.0 - a jQuery Ui extension
	Licences: MIT & GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com].
*/
/*
 * dataObj: contiene los items y algunas configuraciones para la creacion del 
 * Window
 */
//##############################################################################
Components.ToolBar.prototype.init = function(dataObj) {
    this.config = {
        container: $('body'),
        id: "toolbar-"+ Math.round(Math.random() * 2000),
        title: "",
        height: -1,
        width: -1,
        closeAction: 'destroy',
        html: '',
        state:'default',
		hidden: false,
        floating: false,
        draggable: false,
        showHeader: false,
        constrain: false,
        items: [],
        listeners: []
    };
    
    for(var i in dataObj) {
        if(this.config[i] != undefined)
            this.config[i] = dataObj[i];
    }
    
    this.id = this.config.id;
    this.container = this.config.container;
    this.className = "toolBar";
    this.items = this.config.items;
    this.itemsObjs = [];
    
    this.divTitle = null;
}
//##############################################################################
Components.ToolBar.prototype.create = function() {
    Components.Component.prototype.create.call(this);
	this.divContainer.addClass(this.config.state);
    if(this.config.height > -1) {
        this.divContainer.css("height", this.config.height);
    }
    if(this.config.width > -1) {
        this.divContainer.css("width", this.config.width);
    }
    
    this.divContainer.append('<div class="titleToolbar"><span>'+this.config.title+'</span></div>');
    this.divTitle = $(".titleToolbar", this.divContainer);
    
    if(this.config.floating) {
        this.divTitle.append('<div class="btnClose"/>')
        this.divContainer.addClass("toolBar-floating");
    }
    
    if(this.config.html != '') {
        this.divContainer.append(this.config.html);
    }
    
    if(this.config.showHeader) {
        this.divTitle.show();
    }
    this.setControls();
    this.drawItems();
	return this ;
}
//##############################################################################
Components.ToolBar.prototype.drawItems = function() {
    for(var i in this.items) {
        var item = this.items[i];
        item.container = this.divContainer;
        this.itemsObjs.push(Components.create(item.type, item));
    }
}
//##############################################################################
Components.ToolBar.prototype.setControls = function() {
    $('.btnClose', this.divTitle).bind("click", {OBJ:this, mode:this.config.closeAction}, function(event){
        if(event.data.mode == "destroy")
            event.data.OBJ.destroy();
        else 
            event.data.OBJ.hide();
    });
    
    if(this.config.listeners.mousedown != undefined) {
        this.divContainer.bind("mousedown", {OBJ:this}, this.config.listeners["mousedown"]);
    }
    if(this.config.listeners.mouseup != undefined) {
        this.divContainer.bind("mouseup", {OBJ:this}, this.config.listeners["mouseup"]);
    }
    if(this.config.draggable) {
        var dragData = {};
        if(this.config.constrain) {
            dragData.containment = "parent";
        }
        this.divContainer.draggable(dragData);
    }
}
//##############################################################################
Components.ToolBar.prototype.setTitle = function(title) {
    this.config.title = title;
    this.divTitle.html('<span>'+title+'</span>');
}
//##############################################################################
Components.ToolBar.prototype.setVisible = function(visible) {
    this.config.hidden = !visible;
    this.show();
}











//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
function pruebaToolBar() {
    var ee = Components.create('Window',{
        title: "Window", 
        height:400, 
        width:600,
        id: "window001",
        items: [
            {
                region: 'top',
                type: 'ToolBar',
                items: [
                    {
                        type: 'Button',
                        //icon: 'images/close.png',
						icon:{
								type:'fontawesome',
								class:'fa-exchange',
								position:'left',
						},
                        tooltip: 'Cerrar',
                        text: 'Item',
                        width: 50,
                        listeners: {
                            click: function(event) {
                                console.log("click en boton");
                            }
                        }
                    },
                    {
                        type: 'Button',
                       // icon: 'images/item.png',
					   icon:{
								type:'fontawesome',
								class:'fa-exchange',
								position:'left',
						},
                        tooltip: 'Item',
                        enabled: false
                    },
                    {
                        type: 'Button',
                       // icon: 'images/categoria.png',
					   icon:{
								type:'fontawesome',
								class:'fa-exchange',
								position:'left',
						},
                        tooltip: 'Button 03',
                        hidden: true
                    }
                ]
            }
        ]
    });
    
    ee.show();
    return ee;
}

function pruebaToolbar2() {
    var aa = Components.create('Window', {
        id:"ventana01",
        title: "Window 2",
        width:1000, 
        height:500, 
        items: [
            {
                type:'ToolBar', 
                region:'top', 
                items:[
                    {
                        type:'Button',
                        text: 'btn large',
                        //icon:'images/close.png',
						icon:{
								type:'fontawesome',
								class:'fa-exchange',
								position:'left',
						},
                        scale: 'large',
                        listeners: {
                            click: function(event) {
                                console.log("click en boton");
                            }
                        }
                    },
                    {
                        type:'Button',
                        text: 'btn medium',
                        //icon:'images/close.png',
						icon:{
								type:'fontawesome',
								class:'fa-exchange',
								position:'left',
						},
                        scale: 'medium'
                    },
                    {
                        type: 'Button',
                        text: 'btn small',
                        //icon: 'images/desc.png'
						icon:{
								type:'fontawesome',
								class:'fa-exchange',
								position:'left',
						},
                    },
                    {
                        type: 'Button',
                        text: 'btn disabled',
                       // icon: 'images/desc.png',
					   icon:{
								type:'fontawesome',
								class:'fa-exchange',
								position:'left',
						},
                        enabled: false
                    },
                    {
                        type: 'Button',
                        text: 'btn width',
                        //icon: 'images/asc.png',
						icon:{
								type:'fontawesome',
								class:'fa-exchange',
								position:'left',
						},
                        width: 50,
                        enableToggle: true
                    }
                ]
            }, 
            {
                region:'bottom', 
                type:'StatusBar', 
                text:'Loaded'
            }
        ]
    });
    aa.show();
}
