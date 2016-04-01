var GridPoints = function(y){
	 this.y = y; 
	 this.NumBoxes = 0;
	 this.x1 = new Array();
	 this.x2 = new Array();
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