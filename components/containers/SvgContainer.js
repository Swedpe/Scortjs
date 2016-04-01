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
Components.SvgContainer.prototype.init = function(dataObj) {  
	this.config = {
        container: $('body'),       
        id: "SvgContainer-"+ Math.round(Math.random() * 2000),
        width: -1,
		height:-1,
	   closeAction: 'destroy',
		css:new Array(),       
        title: "",       
        hidden: false, 
		autoScroll: true,
		parent:-1,//winparent
        items: [],
        listeners: {
            show: function(){},
            hide: function(){}
        }
    };
	
	for(var i in dataObj) {
        if(this.config[i] != undefined) {
            if(i == "listeners") {
                for(var j in dataObj[i]) 
                    this.config[i][j] = dataObj[i][j];                
            }
            else
                this.config[i] = dataObj[i];
        }
    }  
	
	this.container = this.config.container; 
	this.id = this.config.id; 
	this.width = this.config.width; 
	this.height = this.config.height; 
	this.css = this.config.css; 
	this.title = this.config.title;
	this.className = "SVGContainer";
    this.items = this.config.items;
	this.winparent = this.config.parent;//id de la ventana parent
    this.scrolliniX = 0 ;
	this.scrolliniY = 0;
	this.point1 = 0; 
	this.point2 =  0;
	this.diffx = 0;
	this.diffy = 0;	
	this.myTimer='';
    this.itemsObjs = [];
	this.blocker=-1;
	this.listeners = this.config.listeners; 
	this.miniview=null;
	this.SliderMaestro= false;
	
}
Components.SvgContainer.prototype.create = function() { 
	this.divContainer =  this.container;
	this.divContainer.append('<div id ="ScrollingWindowSVG_WBS" style="overflow:auto; width:100%; height:100%;"><div id="svg'+this.id+'" ></div></div>'); 	 
    $('#svg'+this.id, this.divContainer).svg();
    this.svg = $('#svg'+this.id, this.divContainer).svg('get');
    this.screenGrid = new ScreenGrid(this.svg);
    this.scrollingWindow = $('#ScrollingWindowSVG_WBS', this.divContainer);
    this.svgContend = $('#svg'+this.id, this.divContainer);
	this.svg.clear();         
	this.root = this.svg.root();
	
	
	for(var i in this.items) {
        var item = this.items[i];
		//solo los componentes que dibujan sobre un lienzo SVG pasan esta condicional
		if((item.type != "WBSTree")&&(item.type != "Pert")&&(item.type != "PolarSvg")&&(item.type != "pie3DSvg")&&(item.type != "curvaS"))
			continue;		
		item.container = this.root;
		item.screenGrid = this.screenGrid;
		item.svgcontainer = this
		var element = Components.create(item.type, item);
        this.itemsObjs.push(element);
    }  
	this.svgContend.css('position','relative');
	return this ;
	
}
/*
Components.SvgContainer.prototype.create = function() { 
	this.divContainer =  this.container;
	this.divContainer.append('<div id ="ScrollingWindowSVG_WBS" style="overflow:auto; width:'+this.width+'; height:'+this.height+';"><div style="width:inherit;height:inherit" id="svg'+this.id+'" ></div></div>'); 	 
    $('#svg'+this.id, this.divContainer).svg();    

    this.svg = $('#svg'+this.id, this.divContainer).svg('get');   

    this.screenGrid = new ScreenGrid(this.svg);
    this.scrollingWindow = $('#ScrollingWindowSVG_WBS', this.divContainer);
    this.svgContend = $('#svg'+this.id, this.divContainer);
	this.svg.clear();         
	this.root = this.svg.root();
	var qwe=this.root;
	$(qwe).css({"width":"inherit","height":"inherit"});    

	
	for(var i in this.items) {
        var item = this.items[i];
		if((item.type != "WBSTree")&&(item.type != "Pert")&&(item.type != "PolarSvg"))
			continue;		
		item.container = this.root;
		item.screenGrid = this.screenGrid;
		item.svgcontainer = this
		var element = Components.create(item.type, item);
        this.itemsObjs.push(element);
    }  
	return this ;
}
*/
Components.SvgContainer.prototype.show = function() {  	 
   // console.log("do nothing");
     return this;
}
Components.Pert.prototype.destroy = function() {
    Components.Component.prototype.destroy.call(this);
    /*if(this.overlayWindow != null) {
        this.overlayWindow.remove();
    }*/
}
Components.SvgContainer.prototype.AllowDrag = function() {
	
	this.scrollingWindow.css('cursor','-webkit-grab');
	
	//disableSelection
	if(this.blocker == -1)	
		this.blocker = this.svg.rect(0,0,this.svgContend.width(),this.svgContend.height(),{fill: "rgba(124,240,10,0)", stroke: "none", strokeWidth: 0});
	
	this.divContainer.bind('mouseclick', {OBJ:this}, function(evt) {
		evt.data.OBJ.scrollingWindow.css('cursor','-webkit-grabbing');
	});
	
	this.divContainer.bind('mousedown', {OBJ:this}, function(evt) {
		evt.data.OBJ.scrollingWindow.css('cursor','-webkit-grabbing');
	
		evt.data.OBJ.point1 = [evt.clientX, evt.clientY];
		evt.data.OBJ.scrolliniX = evt.data.OBJ.scrollingWindow[0].scrollLeft;
		evt.data.OBJ.scrolliniY = evt.data.OBJ.scrollingWindow[0].scrollTop;
		console.log("bind mouse down");
		
		evt.data.OBJ.divContainer.bind('mousemove', {sOBJ:evt.data.OBJ}, function(e) {
			e.data.sOBJ.scrollingWindow.css('cursor','-webkit-grabbing');
				e.data.sOBJ.point2 = [e.clientX, e.clientY];			
				e.data.sOBJ.diffx = e.data.sOBJ.point2[0] - e.data.sOBJ.point1[0];
				e.data.sOBJ.diffy = e.data.sOBJ.point2[1] - e.data.sOBJ.point1[1];
				//console.log("bind mouse move");
				//console.log("diferencia"+diffx+","+diffy);
				e.data.sOBJ.scrollingWindow[0].scrollLeft = e.data.sOBJ.scrolliniX - e.data.sOBJ.diffx;
				e.data.sOBJ.scrollingWindow[0].scrollTop = e.data.sOBJ.scrolliniY - e.data.sOBJ.diffy;
			});
	});
	
	this.divContainer.bind('mouseup', {OBJ:this}, function(evt) {
		evt.data.OBJ.scrollingWindow.css('cursor','-webkit-grab');
			console.log("unbind mouse move");
			clearInterval(evt.data.OBJ.myTimer);
			evt.data.OBJ.divContainer.unbind('mousemove');		
	});
}
Components.SvgContainer.prototype.destroy = function() {
  
}

Components.SvgContainer.prototype.DisallowDrag = function() {
	this.divContainer.unbind('mousedown');
	this.divContainer.unbind('mouseup');
	this.divContainer.unbind('mousemove');	
	this.scrolliniX=0;
	this.scrolliniY=0;
	this.scrollingWindow.css('cursor',' default');
	this.svg.remove(this.blocker);
	this.blocker =-1;	
}
Components.SvgContainer.prototype.CreateMiniview = function(ctrl) { 
	
	var minimi ={
		type: 'WBSMini',
		container: this.svgContend, 
        width: 250,
		height:250,	   
        title: "Mini View",       
        hidden: false,
		windowParent :  Components.getComponentById(this.winparent),//la ventana padre		
		valZoom : 50,		
		window : null,
		btnMiniView:ctrl,
		grupo: this.itemsObjs[0].grupo,
		containerScroll : this.scrollingWindow,
		svgcontainer:this,
		listeners: {
            show: function(){},
            hide: function(){},
			onMove: function(obj){return true;}
        }
	}
	var element = Components.create(minimi.type, minimi);
	element.open();
	this.miniview = element;
	var $thissvgcontainer = this;
	  this.scrollingWindow.on( "mouseenter", function(){
			$thissvgcontainer.scrollingWindow.bind("scroll",{OBJ:$thissvgcontainer} ,function(e){			
				if(e.data.OBJ.miniview != null && !e.data.OBJ.SliderMaestro) {
					var percent = ((e.data.OBJ.scrollingWindow.scrollLeft() * 100)/(e.data.OBJ.svgContend.width()));
					var valor=   (percent*   ($('svg',$("#"+e.data.OBJ.miniview.id)).width()) )/100;
					$("#minichartzoomporta",$("#"+e.data.OBJ.miniview.id)).scrollLeft(valor);
				}			
			});
	  });
	
	
	this.scrollingWindow.bind("mouseleave",{OBJ:this}, function(e) {
           //SliderMaestro=false;
           e.data.OBJ.scrollingWindow.unbind("scroll");
        });
}
Components.SvgContainer.prototype.resizeBody = function() { 
 //si se requiere hacer algo con el contenedor SVG en referencia al tamaño de window hacerlo aqui
 for(var i in this.itemsObjs) {
		//los elementos hijos SVG tambien recepcional y se enteran del cambio de tamaño
        this.itemsObjs[i].resizeBody();
    }
}
