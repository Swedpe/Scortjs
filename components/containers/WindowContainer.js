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
var zIndexGlobal = 5005;

Components.Window.prototype.init = function(dataObj) {
	this.tipo = 'Window';
    this.config = {
        container: $('body'),
        id: "window-"+ Math.round(Math.random() * 2000),
        title: "",
        width: 300,						//valido para modo window, panel no respeta
        height: 200,					//valido para modo window, panel no respeta
		state:'default',		
        constrain: false,
		behavior:'window',//'panel'
        constrainHeader: false,
        closeAction: "destroy",			//una ventana queesta siendo cerrada puede ser destruida[destroy] o ocultada
		minimizable: true,
		draggable:true,
		canClose:true,
		CodeHelper:'',
        collapsible: false,
        maximizable: false,
        resizable: true,
		help: false,
		info: false,
        autoShow: false,
        modal: false,
		headerbuttons:new Array(),
        html: "",
        items: [],
		x:0,
		y:0,
        listeners: {
            activate: function() {},
            beforeClose: function(event){},
            render: function(){},
            resize: function(win, width, height, opt){},
			click: function(event){}
        }, 
        onhelp: function(event){},
		oninfo: function(event){},
		onclose: function(event){}
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
    //si es panel no puede ser arrastrado ni cambiar su tamaño
	if(this.config.behavior=='panel'){
		this.config.draggable=false;
		this.config.maximizable=false;
		this.config.resizable = false;
		this.config.modal = false;
	}
	this.CodeHelper = this.config.CodeHelper;
    this.id = this.config.id;
    this.container = this.config.container;
    this.listeners = this.config.listeners;
    this.className = "windowContainer";
    this.regions = new Array();
    this.items = this.config.items;
    this.itemsObjs = [];
    this.isMinimized = false;
    this.isMaximized = false;
    
    this.head = null;
    this.body = null;
    this.divTitle = null;
    this.btnClose = null;
    this.btnMinimize = null;
    this.btnMaximize = null;
    this.overlayWindow = null;
	return this;
}
//##############################################################################
/*
 * Esta funcion construye el componente Window, sin hacerlo visible.
 * Primero llama a la función de su padre, para crear el divContainer que es el
 * div dedicado al window, donde se incluiran los otros items
 */
Components.Window.prototype.create = function() {
    Components.Component.prototype.create.call(this);
	this.divContainer.show();
    if(this.config.behavior=='panel'){
	this.divContainer.addClass('panel');
	}
	if(this.config.behavior=='window'){
		this.divContainer.css("width", this.config.width);
		this.divContainer.css("height", this.config.height);
	}
    if(this.config.x != 0)
		this.divContainer.css("left", this.config.x);
	if(this.config.y != 0)
		this.divContainer.css("top", this.config.y);
	
    this.constructHead();
    this.constructBody();
    this.setControles();
    
    this.drawItems();
    
    if(this.config.html != "") {
        this.regions["center"].append(this.config.html);
    }
    
    this.listeners.render();
    
    if(this.config.autoShow) {
        this.show();
    }
	return this;
}
//##############################################################################
Components.Window.prototype.setHtml = function(html) {
	//cambiar el html de la ventana.
	this.regions["center"].empty();
	this.regions["center"].append(html);
	this.config.html = html;
	return this;
}
//##############################################################################
Components.Window.prototype.show = function() {
//Hacer visible el componente, y llamando a la clase base para dibujar todos los componentes contenidos.
    Components.Component.prototype.show.call(this);
    if(this.config.behavior=='window'){
		this.resizeBody();
	}
    this.setSelected();
    
    if(this.config.modal == true) {
        this.showOverlay();
    }
    
    var viewportWidth = $(window).width(),
        viewportHeight = $(window).height();
		if(this.config.bahavior=='window'){
		(this.config.x == 0)?this.divContainer.css("left", viewportWidth/2 - (this.divContainer.width()/2)):this.divContainer.css("left", this.config.x);	
		(this.config.y == 0)?this.divContainer.css("top", viewportHeight/2 - (this.divContainer.height()/2)):this.divContainer.css("top", this.config.y);}
  return this;
}
//##############################################################################
Components.Window.prototype.showOverlay = function() {
    var height = $('body').get(0).scrollHeight;
    var width = $('body').get(0).scrollWidth;
    
    if(this.overlayWindow == null) {
        this.overlayWindow = $('<div class="overlayWindow" style="height:'+height+'px; width:'+width+'px; z-index:'+(zIndexGlobal - 1)+'"></div>');
        $('body').append(this.overlayWindow);
    }
    else {
        this.overlayWindow.show();
    }
}
//##############################################################################
Components.Window.prototype.createHeaderButton = function(itemDef){ 
switch(itemDef.type){
	case 'Button':
			itemDef.parent = this.id;
			itemDef.scale= 'windowHead';
			itemDef.container = $('.divBtns', this.head);
			var newItem = Components.create(itemDef.type, itemDef);
			this.itemsObjs.push(newItem);
	break;
	default:
			itemDef.parent = this.id;
			itemDef.scale= 'windowHead';
			itemDef.container = $('.divBtns', this.head);
			var newItem = Components.create(itemDef.type, itemDef);
			this.itemsObjs.push(newItem);
}
}		
Components.Window.prototype.constructHead = function() {
    this.divContainer.append('<div class="windowHead '+this.config.state+' ui-widget ui-dialog ui-dialog-titlebar ui-helper-clearfix"><span class="titleHead">'+this.config.title+'</span></div>');
    this.head = $('.windowHead', this.divContainer);
    this.divTitle = $('.titleHead', this.head);
	 
    this.head.append('<div class="divBtns"></div>');
	//dibujamos botones extra definidos
	for(var i in this.config.headerbuttons) {
		item = this.config.headerbuttons[i];
		this.createHeaderButton(item);
    }
	
	
	if(this.config.info) {
        	this.btnInfo = Components.create('Button',{
			container:$('.divBtns', this.head),
			scale: 'windowHead',
			CodeHelper:this,
			state:this.config.state,
			icon:{
				type:'fa',
				class:'fa-info',
				color:'white'
			},
			tooltip:'Info',	  
			handler: function(event) {
				event.data.OBJ.CodeHelper.showInfo(event);
			}  
		});    
	}
		if(this.config.help) {
    		this.btnHelp = Components.create('Button',{
			container:$('.divBtns', this.head),
			scale: 'windowHead',
			CodeHelper:this,
			state:this.config.state,
			icon:{
				type:'fa',
				class:'fa-question',
				color:'white'
			},
			tooltip:'Minimizar',	  
			handler: function(event) {
				event.data.OBJ.CodeHelper.showHelp(event);
			}  
		});
		
    }
    if(this.config.minimizable) {
		this.btnMinimize = Components.create('Button',{
			container:$('.divBtns', this.head),
			scale: 'windowHead',
			CodeHelper:this,
			state:this.config.state,
			icon:{
				type:'fa',
				class:'fa-chevron-up',
				color:'white'
			},
			icon2:{
				type:'fa',
				class:'fa-chevron-down',
				color:'white'
			},
			text:'',
			tooltip:'Minimizar',	  
			handler: function(event) {
				event.data.OBJ.CodeHelper.minimize_or_restore();
			}  
		});
    }
    if (this.config.canClose){
		this.btnClose =  Components.create('Button',{
			container:$('.divBtns', this.head),
			scale: 'windowHead',
			CodeHelper:this,
			state:this.config.state,
			icon:{
				type:'fa',
				class:'fa-times',
				color:'white'
				/*type:'image',
				image:'images/delcupertino.png'*/
			},
			tooltip:'Close',	  
			handler: function(event) {
				event.data.OBJ.CodeHelper.listeners.beforeClose(event);
				event.data.OBJ.CodeHelper.close(event);
			}  
		});		
	}	

	
}
//##############################################################################
Components.Window.prototype.constructBody = function() {
    this.divContainer.append('<div class="windowBody '+this.config.state+'"></div>');
    this.body = $('.windowBody', this.divContainer);
    
    // Region Top
    this.body.append('<div class="windowRegionTop"></div>');
    this.regions["top"] = $('.windowRegionTop', this.body);
    
    // Region Middle
    this.body.append('<div class="windowRegionMiddle"></div>');
    this.regions["middle"] = $('.windowRegionMiddle', this.body);
    
    // Region Center
    $('.windowRegionMiddle', this.body).append('<div class="windowRegionCenter"></div>');
    this.regions["center"] = $('.windowRegionCenter', this.body);
    
    // Region Bottom
    this.body.append('<div class="windowRegionBottom"></div>');
    this.regions["bottom"] = $('.windowRegionBottom', this.body);
}
//##############################################################################
Components.Window.prototype.setControles = function() {
    this.divContainer.bind("mousedown", {OBJ:this}, function(event) {
        event.stopPropagation();
        event.data.OBJ.setSelected();
    });    
    var $this = this;
    if(this.config.draggable){
	var dragData = {
        handle: this.head,
        opacity: 0.7,
        start: function(event, ui) {
            $this.body.hide();
            $this.setSelected();
        },
        stop: function(event, ui) {
            if(!$this.isMinimized) {
                $this.body.show();
            }
        }
    };
    if(this.config.constrain) {
        dragData.containment = "window";
    }
    /*else if(this.config.constrainHeader) {
        dragData.containment = "parent";
    }
    */
	
    this.divContainer.draggable(dragData);
   }
   
    if(this.config.resizable) {
        this.divContainer.resizable({
            alsoResize:$(this).find('div'),
            handles: "all",
            minHeight: 100,
            minWidth: 200,
            helper: 'windowContainer-resize-helper',
            stop: function(event, ui) {
                $this.config.width = ui.size.width;
                $this.config.height = ui.size.height;
                $this.resizeBody();              
                $this.listeners.resize($this, ui.size.width, ui.size.height, {});
            }
        });
    }
	 this.divContainer.bind("click", {OBJ:this}, function(event) {
            event.data.OBJ.config.listeners.click(event);
    });
}
//##############################################################################
Components.Window.prototype.close = function(event) {
    if(this.config.closeAction == "destroy")
        this.destroy();
    else 
        this.hide();
    this.config.onclose(event);
}
//##############################################################################
Components.Window.prototype.destroy = function() {
    Components.Component.prototype.destroy.call(this);
    if(this.overlayWindow != null) {
        this.overlayWindow.remove();
    }
}
////##############################################################################
Components.Window.prototype.hide = function() {
    Components.Component.prototype.hide.call(this);
    if(this.overlayWindow != null) {
        this.overlayWindow.hide();
    }
}
//##############################################################################
Components.Window.prototype.minimize_or_restore = function() {
    if(this.isMinimized) {
        //maximizar
        //this.btnMinimize.removeClass('ui-icon-carat-1-n');
		this.btnMinimize.toggle();
		console.log(this.config.bahavior);
        if(this.config.behavior=='window'){
			this.divContainer.css("height", this.config.height);
		}
        this.body.show();
        if(this.config.resizable)
            this.divContainer.resizable("enable");
        if(this.btnMaximize != null)
            this.btnMaximize.show();
    }
    else {
        //minimizar
        //this.btnMinimize.addClass('ui-icon-carat-1-n');
		this.btnMinimize.toggle();
        this.divContainer.css("height", this.head.css("height"));
        this.body.hide();
        if(this.config.resizable)
            this.divContainer.resizable("disable").removeClass('ui-state-disabled');
        if(this.btnMaximize != null)
            this.btnMaximize.hide();
    }
    this.isMinimized = !this.isMinimized;
}
//##############################################################################
Components.Window.prototype.showHelp = function(event) {
    //alert('Ayuda Pronto');
	this.config.onhelp(event);
}
//##############################################################################
Components.Window.prototype.showInfo = function(event) {
    //alert('Info Pronto');
	this.config.oninfo(event);
}
//##############################################################################
Components.Window.prototype.maximize_or_restore = function() {
    if(this.isMaximized) {
        //restaurar
        this.btnMaximize.removeClass('btnRestore');
        this.divContainer.css("width", this.config.width);
        this.divContainer.css("height", this.config.height);
        this.divContainer.css("left", this.currentLeft);
        this.divContainer.css("top", this.currentTop);
        this.divContainer.resizable("enable");
        this.divContainer.draggable("enable");
        this.head.css("cursor", "move");
    }
    else {
        // maximizar
        this.currentLeft = parseInt(this.divContainer.css('left'));
        this.currentTop = parseInt(this.divContainer.css('top'));
        
        this.btnMaximize.addClass('btnRestore');
        this.divContainer.css("height", "100%");
        this.divContainer.css("width", "100%");
        this.divContainer.css("left", "0");
        this.divContainer.css("top", "0");
        
        this.divContainer.resizable("disable").removeClass('ui-state-disabled');
        this.divContainer.draggable("disable").removeClass('ui-state-disabled');
        this.head.css("cursor", "default");
    }
    this.isMaximized = !this.isMaximized;
    this.resizeBody();
}
//##############################################################################
Components.Window.prototype.resizeBody = function() {
    var widthTotal = 0;
    this.regions['middle'].children().each(function(ev, ui){
        if((ui.classList.contains('panelContainer') || ui.classList.contains('splitterItem')) 
        && !ui.classList.contains('windowRegionCenter') && $(ui).css('display') != "none") {
            widthTotal += $(ui).outerWidth();
        }
    });
   
    this.regions["center"].outerWidth(this.regions['middle'].innerWidth() - widthTotal);
    this.regions['middle'].outerHeight(this.divContainer.innerHeight() - (this.head.outerHeight() + this.regions['top'].outerHeight() + this.regions['bottom'].outerHeight()));
    
    for(var i in this.itemsObjs) {
        this.itemsObjs[i].resizeBody();
		//console.log(this.itemsObjs[i]);
    }
}
//##############################################################################
/*
 * Esta funcion crea todos los items internos de este componenter
 */
Components.Window.prototype.drawItems = function() {
    for(var i in this.items) {
        this.drawItem(this.items[i]);
    }
}
//##############################################################################
Components.Window.prototype.drawItem = function(item) {
    if(item.region && this.regions[item.region] != undefined) {
        if(item.region == "left" || item.region == "right") {
            item.container = this.regions["middle"];
        }
        else {
            item.container = this.regions[item.region];
        }
    }
    else
        item.container = this.regions["center"];		//si pasan cosas extrañas antes estaba en middle
    
    item.parent = this;
    var newItem = Components.create(item.type, item);
    this.itemsObjs.push(newItem);
    //this.resizeBody();
    
    if(item.region == "left") {
        this.regions['center'].before(newItem.divContainer);
        if(item.split) newItem.divContainer.after(newItem.splitter.divContainer);
    }
    else if(item.region == "right") {
        this.regions['center'].after(newItem.divContainer);
    }
    return newItem;
}
//##############################################################################
Components.Window.prototype.setTitle = function(title) {
    this.config.title = title;
    this.divTitle.html(title);
}
//##############################################################################
Components.Window.prototype.setHeight = function(height) {
    this.config.height = height;
    this.divContainer.css("height", this.config.height);
    this.resizeBody();
}
//##############################################################################
Components.Window.prototype.setWidth = function(width) {
    this.config.width = width;
    this.divContainer.css("width", this.config.width);
    this.resizeBody();
}
//##############################################################################
Components.Window.prototype.setSelected = function() {
    var zindexParents = ++zIndexGlobal;
    this.divContainer.parents(".windowContainer").css("z-index", zindexParents);
    this.divContainer.parents(".windowContainer").children().css("z-index", zindexParents);
    this.divContainer.css("z-index", ++zIndexGlobal);
    
    $(".windowContainerSelected").removeClass("windowContainerSelected");
    this.divContainer.addClass("windowContainerSelected");
    this.divContainer.parents(".windowContainer").addClass("windowContainerSelected");
    
    this.listeners.activate();
}
//##############################################################################
Components.Window.prototype.validateRequiredComponents = function() {
	for (var item in this.itemsObjs)
	{				
		if(this.itemsObjs[item].config.validar!= undefined && this.itemsObjs[item].config.validar.requerido){
			if(!this.itemsObjs[item].validado)
					return this.itemsObjs[item];
		 }
	}				
   return true;
}
//##############################################################################
Components.Window.prototype.changeState = function(newState) {
	$('.windowHead',this.divContainer).removeClass(this.config.state);
	$('.windowHead',this.divContainer).addClass(newState);
     
	$('.windowBody',this.divContainer).removeClass(this.config.state);
	$('.windowBody',this.divContainer).addClass(newState);  
	
	  this.config.state= newState;
}
//##############################################################################
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
