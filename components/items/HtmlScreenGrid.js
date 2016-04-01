/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	HtmlScreenGrid v 1.0 - a jQuery Ui extension
	Licences: MIT & GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com].
*/
Components.HtmlScreenGrid.prototype.init = function(dataObj) {
    this.config = {
		tipo :'ScreenRow',
        container: $('body'),
        id: "HtmlScreenGrid-"+ Math.round(Math.random() * 2000),             
		css:new Array(),
		hidden: false,
        items: [],
		height:0,
		html:'',	
		ColsDef :new Array()
    };
    
    for(var i in dataObj) {
        if(this.config[i] != undefined) 
			this.config[i] = dataObj[i];        
    }
    
    this.id = this.config.id;
	this.Cols = new Array();
    this.container = this.config.container;
    this.className = "ScreenGrid"; 
	this.items = this.config.items;	
	this.itemsObjs = [];
    
}
//##############################################################################
Components.HtmlScreenGrid.prototype.create = function() {
    Components.Component.prototype.create.call(this);
	this.divContainer.addClass('screenrow');
	 if(this.config.height != -1) {
        this.divContainer.css("height", this.config.height);
    }
	$col = new Array();	
	for (var i in this.config.ColsDef) {
		if(this.config.ColsDef[i].html){
			$col[i] = $('<div class="col-sm-'+this.config.ColsDef[i].ancho + " " +this.config.ColsDef[i].ClassId+'">'+this.config.ColsDef[i].html+'</div>'); 	
		}else{
			$col[i] = $('<div class="col-sm-'+this.config.ColsDef[i].ancho + " " +this.config.ColsDef[i].ClassId+'"></div>'); 	
		}
	  this.divContainer.append($col[i]);
   }
	this.drawItems();
   	return this;
}
//##############################################################################
Components.HtmlScreenGrid.prototype.show = function() {
    if(!this.config.hidden)
        Components.Component.prototype.show.call(this);
    else
      this.hide();
	  
	  return this;
}
Components.HtmlScreenGrid.prototype.drawItems = function() {
    for(var i in this.items) {
        this.drawItem(this.items[i]);
    }
}
//##############################################################################
Components.HtmlScreenGrid.prototype.drawItem = function(item) {
    item.container = this.divContainer;
    item.parent = this.id;
    var newItem = Components.create(item.type, item);
    this.itemsObjs.push(newItem);
    return newItem;
}
//##############################################################################





