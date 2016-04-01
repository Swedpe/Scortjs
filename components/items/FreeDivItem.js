/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	FreeDiv v 1.0 - a jQuery Ui extension
	Licences: MIT & GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com].
*/
Components.FreeDiv.prototype.init = function(dataObj) {
    this.config = {
		freeHtml:false,
        container: $('body'),
        id: "freediv-"+ Math.round(Math.random() * 2000),             
		css:new Array(),
		html:'',
		hidden: false,
        height: -1,
        width: -1,
        x: -1,
        y: -1,
		items: [],
		html:''		
               
    };
    
    for(var i in dataObj) {
        if(this.config[i] != undefined) 
			this.config[i] = dataObj[i];        
    }
    
    this.id = this.config.id;
    this.container = this.config.container;
    this.className = "FreeDiv"; 
	this.items = this.config.items;	
	this.itemsObjs = [];
    
}
//##############################################################################
Components.FreeDiv.prototype.create = function() {
	if(this.config.freeHtml==false){
    Components.Component.prototype.create.call(this);	
    
    if(this.config.height != -1) 
        this.divContainer.css("height", this.config.height);
    
    if(this.config.width != -1) 
        this.divContainer.css("width", this.config.width);
    
    if(this.config.x != -1) 
        this.divContainer.css("left", this.config.x);
    
    if(this.config.y != -1) 
        this.divContainer.css("top", this.config.y);
     
	if(this.config.html != "") 
        this.divContainer.append(this.config.html);
    
	for (var itemcss in this.config.css)
	{
		this.divContainer.css(Object.keys(this.config.css[itemcss])[0],this.config.css[itemcss][Object.keys(this.config.css[itemcss])[0]]);		
	}
	this.drawItems();
   	}
	else
	{
	this.divContainer = this.container;	
	this.MyHtml = $(this.config.html);
	this.container.append(this.MyHtml);	
	}
}
//##############################################################################
Components.FreeDiv.prototype.show = function() {
    if(!this.config.hidden)
        Components.Component.prototype.show.call(this);
    else
        this.hide();
		  return this;
}
Components.FreeDiv.prototype.drawItems = function() {
    for(var i in this.items) {
        this.drawItem(this.items[i]);
    }
}
Components.FreeDiv.prototype.destroy = function() {}
//##############################################################################
Components.FreeDiv.prototype.drawItem = function(item) {
    item.container = this.divContainer;
    item.parent = this.id;
    var newItem = Components.create(item.type, item);
    this.itemsObjs.push(newItem);
    return newItem;
}
//##############################################################################
Components.FreeDiv.prototype.clear = function() {
for(var i in this.MyHtml){
this.MyHtml[i].innerHTML="";}
$('#parte2').html("");
}
//##############################################################################
Components.FreeDiv.prototype.setHmtl = function(MyHtml) {
this.clear();
this.config.html = MyHtml;
this.MyHtml = $(this.config.html);
this.container.append(this.MyHtml);
}


