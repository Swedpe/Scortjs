/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	Tab v 1.0 - a jQuery Ui extension
	Licences: MIT & GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com].
*/
Components.Tab.prototype.init = function(dataObj) {
    this.config = {
        container: $('body'),
        headerContainer: $('body'),
        id: "tabitem-"+ Math.round(Math.random() * 2000),
        width: -1,
		parent:'',
        color: "",
        title: "",
        state:'',
		html: "",
        hidden: false,
        autoScroll: false,
		icon: {
				type:'none',		//tipos posibles fontawesome y image
				image : '',
				class:'',
				color:'default',
				position:'left',
			},
        items: [],
        listeners: {
            activate: function(){},
            render: function(){}
        }
    };
    
    for(var i in dataObj) {
        if(this.config[i] != undefined) {
            if((i == "listeners")||(i == "icon") ||(i == "image")) {
                for(var j in dataObj[i]) {
                    this.config[i][j] = dataObj[i][j];
                }
            }
            else
                this.config[i] = dataObj[i];
        }
    }
    this.parent = this.config.parent;
    this.isActive = false;
    this.id = this.config.id;
    this.title = this.config.title;
    this.container = this.config.container;
	this.divIcon = null;
    this.className = "tabItem";
    this.items = this.config.items;
    this.itemsObjs = [];
    this.listeners = this.config.listeners;
    
    this.headerTab = null;
    this.bodyTab = null;
	
	if(this.config.icon.type== 'fontawesome')
	{this.config.icon.type= 'fa'; }
	else if(this.config.icon.type== 'glipicon')
	{this.config.icon.type= 'glyphicon'; }
	
	
	//this.DIconimg = $('<img class ="ImageZone -icon-'+this.config.icon.position+'" src="'+this.config.icon.image+'">');
}
//##############################################################################
Components.Tab.prototype.create = function() {
	if (this.config.state==''){			//si no se definio un estate en un tabitem, entonces tomamos el estate del tabcontainer
		this.config.state = this.parent.config.state;
	}
   this.tabHeader = $('<li class='+this.config.state+' id="header_'+this.id+'"><a href="#'+this.id+'"><span>'+this.title+'</span></a></li>'); 
   if(this.config.icon.type != 'none'){   //si el tab tiene icono en el header, crearlo
        switch(this.config.icon.type){
		case 'fa':
		case 'glyphicon':
		this.iconObj = $('<i class="'+this.config.icon.type+' '+this.config.icon.class+'" style="color:'+this.config.icon.color+';"></i>');
		break;
		
		case 'image':
		this.iconObj = $('<img class ="ImageZone -icon-'+this.config.icon.position+'" src="'+this.config.icon.image+'">');
		break;
		
		}
		
		if(this.config.icon.position=='right'){				//decidir si el icono se dibuja a la derecha o izquierda del texto
			$('span',this.tabHeader).append(this.iconObj);
		}
		else if(this.config.icon.position=='left'){
			$('span',this.tabHeader).prepend(this.iconObj);
		}
	}
   $('ul', this.config.headerContainer).append(this.tabHeader);
	
	Components.Component.prototype.create.call(this);
    
    this.headerTab = $('#header_' + this.id, this.config.headerContainer);
    
    this.drawItems();
    
    if(this.config.html != "") {
        this.divContainer.append(this.config.html);
    }
    if(this.config.width > -1) {
        this.headerTab.css("width", this.config.width);
    }
    if(this.config.autoScroll == true) {
        this.divContainer.css("overflow", "auto");
    }
    
    if(this.config.hidden == true) {
        this.hide();
    }
    
	this.listeners.render();
	return this;
}
//##############################################################################
Components.Tab.prototype.drawItems = function() {
    for(var i in this.items) {
        var item = this.items[i];
        item.container = this.divContainer;
		item.parent = this;
        var element = Components.create(item.type, item);
        this.itemsObjs.push(element);
    }
}
Components.Tab.prototype.destroy = function() {}
//##############################################################################
Components.Tab.prototype.resizeBody = function() {
    for(var i in this.itemsObjs) {
        this.itemsObjs[i].resizeBody();
    }
}
//##############################################################################
Components.Tab.prototype.show = function(){
    Components.Component.prototype.show.call(this);
    this.headerTab.css('display', 'inline-block');
    if(!this.isActive) {
        this.divContainer.hide();
    }
 return this;
}
//##############################################################################
Components.Tab.prototype.width = function() {
    return this.headerTab.width() + 2 * parseInt(this.headerTab.css("border-width")); 
}
//##############################################################################
Components.Tab.prototype.hide = function() {
    this.headerTab.hide();
    this.divContainer.hide();
}
//##############################################################################
Components.Tab.prototype.setVisible = function(visible) {
    this.config.hidden = !visible;
    this.show();
}