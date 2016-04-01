Components.WBSTree.prototype.init = function(dataObj) {
	this.config = {
        container: $('body'),       
        id: "WBSTree-"+ Math.round(Math.random() * 2000),
        width: -1,
		height:-1,
		css:new Array(),       
        title: "",       
        hidden: false,
        autoScroll: true,
        items: [],
        listeners: {
            show: function(){},
            hide: function(){}
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
    this.title = this.config.title;
    this.container = this.config.container;
    this.className = "WBSTree";
    this.items = this.config.items;
    this.itemsObjs = [];
    this.listeners = this.config.listeners;  
}
Components.WBSTree.prototype.create = function() {   
	Components.Component.prototype.create.call(this);
    this.divContainer = this.container;
	this.divContainer.append('<div id ="ScrollingWindowSVG_WBS" style="overflow:auto; width:100%; height:100%;"><div id="SVGContendX" ></div></div>');	
	$('#SVGContendX', this.container).svg();
    this.svg = $('#SVGContendX', this.container).svg('get');
    this.screenGrid = new ScreenGrid(this.svg);
    this.scrollingWindow = $('#ScrollingWindowSVG_WBS', this.container);
    this.svgContend = $('#SVGContendX', this.container);
	return this ;
	
}



var ScreenGrid = function(svg){
	this.svg = svg;
	this.Level = new Array();
	this.Level[0] = new GridPoints(10);
	this.Level[1] = new GridPoints(110);
	this.Level[2] = new GridPoints(210);
	this.Level[3] = new GridPoints(310);
	this.Level[4] = new GridPoints(410);
	this.Level[5] = new GridPoints(510);
	this.Level[6] = new GridPoints(610);
	this.Level[7] = new GridPoints(710);
	this.Level[8] = new GridPoints(810);
	this.Level[9] = new GridPoints(910);
	this.Level[10] = new GridPoints(1010);
	this.Maxid = 0;
	this.MaxidAc = 0;
}
ScreenGrid.prototype.reset=function(){
        if (Components.getComponentById('WBSMostrarActividades').pressed){
            WBSBorrarActividades();
            Components.getComponentById('WBSMostrarActividades').toggle();
	}
	if (typeof(ClipboardObj)!="string"){
	 ClipboardObj.Clear();
	 }
	 
         if (Components.getComponentById('WBSRutaCritica').pressed){
            Components.getComponentById('WBSRutaCritica').toggle();
	 }
	 CambiosOffline == -1
	 ConexionConDb = -1;
         if (Components.getComponentById('ConexionWBSIco').pressed){
            Components.getComponentById('ConexionWBSIco').setIcon('images/icon-network-Fail.png');
            Components.getComponentById('ConexionWBSIco').toggle();
	 }
}