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
Components.TabPanel.prototype.init = function(dataObj) {
    this.config = {
        container: $('body'),
        id: "tabcontainer-"+ Math.round(Math.random() * 2000),
        tabConfig: [],
        clsStyle: '',
        activeTab: 0,
        headerPosX: 0,
        width: -1,
        state:'default',
		height: -1,
        items: [],
		parent :'',								//El componente que contiene el TabPanel
        listeners: {
            tabchange: function(){}
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
    this.parent = this.config.parent;
    this.id = this.config.id;
    this.container = this.config.container;
    this.className = "tabContainer";
    this.items = this.config.items;
    this.itemsObjs = [];
    this.tabActive = this.config.activeTab;
    this.listeners = this.config.listeners;
    
    this.widthHeaderTabs = 0;
    this.widthContainerTabs = 0;
    this.widthDivView = 0;
    this.divHeaderTabs = null;
    this.divBodyTabs = null;
    this.divContainerTabs = null;
}
//##############################################################################
Components.TabPanel.prototype.create = function() {
    Components.Component.prototype.create.call(this);
    
    this.constructHeader();
	this.divContainer.append('<div class="bodyTabs"></div>');
    this.divBodyTabs = $('.bodyTabs', this.divContainer);
    
    this.setControls();
    this.drawItems();
    this.setConfig();
    
    if(this.config.tabConfig.length != 0) {
        this.setConfigTab();
        this.divContainer.addClass(this.id);
    }
	return this ;
}
//##############################################################################
Components.TabPanel.prototype.setConfig = function() {
    var cssGeneral = {};
    if(this.config.width != -1) {
        cssGeneral.width = this.config.width;
        this.resizeBody();
    }
    if(this.config.height != -1) {
    //    this.divBodyTabs.css("height", this.config.height);
    }
    this.divContainer.css(cssGeneral);
}
//##############################################################################
Components.TabPanel.prototype.constructHeader = function() {
    this.divContainer.append('<div class="headerTabs" style="left:'+this.config.headerPosX+'px;"></div>');
    this.divHeaderTabs = $('.headerTabs', this.divContainer);
    
    var btnAnt = $('<div id="btnAnt" class="controlButtons"><i style="color:black;" class="fa fa-angle-double-left"></i></div>');
    var btnNext = $('<div id="btnNext" class="controlButtons"><i style="color:black;" class="fa fa-angle-double-right"></i></div>');
    var divMenuHorizontal = $('<div class="containerTabs" ></div>');
    this.divHeaderTabs.append(btnAnt).append(divMenuHorizontal).append(btnNext);
    
    this.divContainerTabs = $('.containerTabs', this.divHeaderTabs);
}
//##############################################################################
Components.TabPanel.prototype.drawItems = function() {
    this.divContainerTabs.append('<ul class='+this.config.state+'></ul>');
	
    
    for(var i in this.items) {
        var item = this.items[i];
		item.parent = this;
        item.container = this.divBodyTabs;
        item.headerContainer = this.divContainerTabs;
        var element = Components.create(item.type, item);
        this.itemsObjs.push(element);
    }
    console.log(this.divContainer.html());
	
	this.divContainer.tabs();  //jquery ui function predefined
	
	return;
	this.divContainer.addClass(this.config.state);
    $('.tabItem', this.divContainer).css("padding", 0);
    if(this.config.clsStyle != '') {
        this.divContainer.addClass(this.config.clsStyle);
		 this.divContainer.addClass(this.config.state);
    }
}
//###########################################################
Components.TabPanel.prototype.add = function(component) {
	//añadir mas tabs en tiempo de ejecucion, se asigna como padre el componente tabcontainer.
	component.parent = this;
	Components.Component.prototype.add.call(this,component);
	this.resizeBody();
}
//####################################################################################################################################
Components.TabPanel.prototype.drawItem = function(item) {
	item.container = this.divBodyTabs;
	item.headerContainer = this.divContainerTabs;
	var element = Components.create(item.type, item);
	this.itemsObjs.push(element);
	this.divContainer.tabs( "refresh" );
}
//###################################################################################################################################
Components.TabPanel.prototype.setControls = function() {
    var $this = this;
    
    this.divContainer.on("tabsactivate", function(event, ui) {
        event.stopPropagation();
        
        $this.itemsObjs[$this.tabActive].isActive = false;
        ui.oldPanel.hide();
        
        $this.tabActive = ui.newTab.index();
        $this.itemsObjs[$this.tabActive].isActive = true;
        //ui.newPanel.show();
        $this.itemsObjs[$this.tabActive].show();
        $this.itemsObjs[$this.tabActive].listeners.activate();
        $this.listeners.tabchange();
    });
    
    this.btnAnt = $("#btnAnt", this.divHeaderTabs);
    this.btnNext = $("#btnNext", this.divHeaderTabs);
    this.btnPressed = false;
    
    this.btnAnt.bind("mousedown", {OBJ:this}, function(event) {
        event.data.OBJ.btnPressed = true;
        event.data.OBJ.moveToRight();
    });
    this.btnAnt.bind('mouseup', {OBJ:this}, function(event){
        event.data.OBJ.btnPressed = false;
    });
    
    this.btnNext.bind("mousedown", {OBJ:this}, function(event) {
        event.data.OBJ.btnPressed = true;
        event.data.OBJ.moveToLeft();
    });
    this.btnNext.bind('mouseup', {OBJ:this}, function(event){
        event.data.OBJ.btnPressed = false;
    });
}
//##############################################################################
Components.TabPanel.prototype.moveToRight = function() {
    var $tabUL = $("ul", this.divContainerTabs);
    if($tabUL.position().left < $(".controlButtons", this.divHeaderTabs).width()) {
        $tabUL.css({ left: '+=' + 20 });
    }
}
//##############################################################################
Components.TabPanel.prototype.moveToLeft = function() {
    var $tabUL = $("ul", this.divContainerTabs);
    if(this.widthDivView - parseInt($tabUL.css("left")) < this.widthHeaderTabs) {
        $tabUL.css({ left: '-=' + 20 });
    }
}
//##############################################################################
Components.TabPanel.prototype.getActiveTab = function() {
    return this.itemsObjs[this.tabActive];
}
//##############################################################################
Components.TabPanel.prototype.setActiveTab = function(indexTab) {
    this.divContainer.tabs( "option", "active", indexTab);
}
//##############################################################################
Components.TabPanel.prototype.setWidth = function(width) {
    this.divContainer.css("width", width);
    this.divHeaderTabs.width(width - this.config.headerPosX);
    this.resizeBody();
}
//##############################################################################
/*
 * Recibe datos para configurar la vista, como: data {tab, text}
 *  - background.tab: color de los tabs
 *  - background.selected: color de seleccionado
 */
Components.TabPanel.prototype.setConfigTab = function() {
    $("head").append("<style id='css_"+this.id+"'></style>");
    var clase = "."+this.id;
    var text = "";  
    
    if(this.config.tabConfig.background) {
        var background = this.config.tabConfig.background;
        if(background.normal) {
            text += clase + " .ui-state-default {background-color: "+background.normal+"} ";
        }

        if(background.selected) {
            text += clase + " .ui-tabs-selected {background-color: "+background.selected+"} ";
            text += clase + " .ui-state-hover {background-color: "+convertHexToRGBA(background.selected, 85)+"} ";
        }
    }
    if(this.config.tabConfig.text) {
        var texto = this.config.tabConfig.text;
        if(texto.normal) {
            text += clase + " .ui-state-default a {"+texto.normal+"} ";
        }

        if(texto.hover) {
            text += clase + " ui-state-hover a {"+texto.hover+"} ";
        }

        if(texto.selected) {
            text += clase + " .ui-tabs-selected a {"+texto.selected+"} ";
        }
    }
    $("#css_"+this.id).text(text);
}
//##############################################################################
Components.TabPanel.prototype.show = function() {
    this.itemsObjs[this.tabActive].isActive = true;
    Components.Component.prototype.show.call(this);
    this.resizeBody();
    this.setActiveTab(this.tabActive);
    this.itemsObjs[this.tabActive].listeners.activate();
	  return this;
}
//##############################################################################
Components.TabPanel.prototype.resizeBody = function() {
	//esta funciones la encargada de la visivilidad de los 2 botones que hacen scroll a la 
	//cabecera de los tabcontainers, y de ajustar el ancho del tabcontainer a su contenedor,
    this.divHeaderTabs.width(this.divBodyTabs.width() - this.config.headerPosX);
    
    this.widthHeaderTabs = $("ul", this.divContainerTabs)[0].scrollWidth;
    this.widthContainerTabs = $(this.divContainerTabs.parents().filter(function() {return $(this).width() > 0})[0]).innerWidth();
    
    if(this.widthHeaderTabs > this.widthContainerTabs) {
        $(".controlButtons", this.divHeaderTabs).show();
        this.widthDivView = this.widthContainerTabs - 2 * $(".controlButtons", this.divHeaderTabs).outerWidth();
        this.divContainerTabs.css("width", this.widthDivView);}
    else {
        $(".controlButtons", this.divHeaderTabs).hide();
        this.divContainerTabs.css("width", "100%");
        $("ul", this.divContainerTabs).css("left","0");
    }
    //si el tabcontainer es contenido por un window-window regular la altura
	//si el tabcontainer es contenido por un window-panel, la altura no deve ser regulada
	//console.log(this.parent.tipo);
	if((this.parent.tipo)&&(this.parent.tipo=='Window')&&(this.parent.config.behavior=='window')){
		this.divBodyTabs.css("height", this.divContainer.height() - this.divContainerTabs.height());
		if(this.getActiveTab().itemsObjs[0]&&(this.getActiveTab().itemsObjs[0].className=='toolBar'))
		{
			this.divBodyTabs.css("height",this.divBodyTabs.height()-this.getActiveTab().itemsObjs[0].divContainer.height()-14);
		}
	}
    
    for(var i in this.itemsObjs) {
        this.itemsObjs[i].resizeBody();
    }
}
//##############################################################################
//##############################################################################
//##############################################################################
function convertHexToRGBA(hex,opacity){
    hex = hex.replace('#','');
    var r = parseInt(hex.substring(0,2), 16);
    var g = parseInt(hex.substring(2,4), 16);
    var b = parseInt(hex.substring(4,6), 16);

    var result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
    return result;
}