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
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com].
*/
Components.MenuItem.prototype.init = function(dataObj) {
	this.tipo = 'MenuItem';
    this.config = {
        container: $('body'),
        id: "MenuItem-"+ Math.round(Math.random() * 2000),
        text: "",
        tooltip: "",
		enabled:true,
		menu:'',     //ul o elemento superior del menu, o elemento menu.
		menuLevel:0,
		items: [],	 //Veremos si se puede contener cualquier cosa,	
		menuType:'',
		parent:0,
        hidden: false,
		subMenu:{
			requireClick:false,		
				},
		layout:{
			template:'Basic',
			ico:"images/edit.png",
			icon: {
				type:'none',		//tipos posibles fontawesome y image
				image : '',
				position:'left',
				color:'default',
				animate:false,
				css:{},
			},	
		},
		html:'',							//si se usa 100% html
		
        listeners: {
            click: function(event){}
        },
        handler: function(){},
    };
    //todo este bloque entremesclado 
    for(var i in dataObj) {
        if(this.config[i] != undefined){
            if((i == "listeners")||(i=='submenu')||(i=='layout')) {
                for(var j in dataObj[i]) {
					//---
					if((j == "icon")) {						
						for(var k in dataObj[i][j]) {
								this.config[i][j][k] = dataObj[i][j][k];
						}
					}
					else
						this.config[i][j] = dataObj[i][j];
					//--
                }
            }
            else
                this.config[i] = dataObj[i];
        }
    }
	this.menuLevel = this.config.menuLevel;
	this.parent = this.config.parent;
    this.id = this.config.id;
    this.container = this.config.container;
    this.className = "MenuItem";
    this.listeners = this.config.listeners;
    this.menu = this.config.menu;
	this.items = this.config.items;
	if((this.config.layout.icon.type=='fontawesome')||(this.config.layout.icon.type=='fa')||(this.config.layout.icon.type=='glipicon')||(this.config.layout.icon.type=='glyphicon')){
		this.DIconfayglip = $('<i class="buttonItem-icon-'+this.config.layout.icon.position+'  " style="color:'+this.config.layout.icon.color+'"></i>');
	}
	this.itemsObjs = new Array();
}
//##############################################################################
Components.MenuItem.prototype.create = function() {
    //divcontainer por compativilidad en realidad es UL
	var htmlTemplate = '';
	
	//aqui se pueden agregar otras formas de menu, usando html y componentes del framework
	//posicionamiento del icono, izquiera o derecha.
	
	switch(this.config.layout.template){
		case 'basic':
			
			this.extraMenu = '';
			for(var i in this.items) {
				if(this.items[i].type=='MenuScort'){
					this.extraMenu = '<img style="float:right" src="images/masmenu.png">';
				}
			}
			if (this.config.layout.icon.type=='image'){
				//usar icono imagen
				htmlTemplate = '<div class="first_li"><span id="'+this.id+'"><img src="'+this.config.layout.icon.ico+'">'+this.config.layout.text+this.extraMenu+'</span></div>';
			}
			else{
				//constructor de estructuras para iconos de libreria
				if(this.config.layout.icon.type != "none"){
				switch(this.config.layout.icon.type){
					case 'fontawesome':
					case 'fa':
					this.divIcon = this.DIconfayglip;
					this.divIcon.addClass('fa');
					this.divIcon.addClass(this.config.layout.icon.class);
					
					if(this.config.layout.icon.animate!=false){
						this.divIcon.addClass('fa-spin')
					}
					for(var i in this.config.layout.icon.css) {
						this.divIcon.css(i, this.config.layout.icon.css[i]);
					}
					
					break;
					case 'glipicon':
					case 'glyphicon':
					this.divIcon = this.DIconfayglip;
					this.divIcon.addClass('glyphicon');
					this.divIcon.addClass(this.config.layout.icon.class);
					
					if(this.config.icon.animate!=false){
						this.divIcon.addClass('fa-spin')
					}
					for(var i in this.config.icon.css) {
						this.divIcon.css(i, this.config.layout.icon.css[i]);
					}
					break;
					
					case 'image': 
					
					break;
				}
				htmlTemplate = '<div class="first_li"><span id="'+this.id+'">'+this.divIcon[0].outerHTML+this.config.layout.text+this.extraMenu+'</span></div>';
			}
				
			}	
			
			
		break;
		case 'html':
			htmlTemplate = this.config.html;
		break;	
	}
	this.hoverClass = 'hoverview';
	if(this.config.subMenu.requireClick){
		this.hoverClass = '';
	}
    this.divContainer = $('<li class="'+this.className+' '+this.hoverClass+'" id="'+this.id+'">'+htmlTemplate+'</li>');
	this.container.append(this.divContainer);
	if(!this.config.enabled){
		this.divContainer.addClass('MenuItem-disabled');
	}
	this.setControls();
	this.drawItems();
	return this;
}
//##############################################################################
Components.MenuItem.prototype.setControls = function() {
    this.divContainer.bind("click", {OBJ:this}, function(event) {
		//en caso de que el menu inferior no sea visible por hover estara invisible y tenemos que procesar para 
		//hacerlo visible.
		if(event.data.OBJ.config.subMenu.requireClick){
			for(itemX in event.data.OBJ.itemsObjs){
				if(event.data.OBJ.itemsObjs[itemX].tipo == 'MenuScort'){
					console.log(event.data.OBJ.itemsObjs[itemX].divContainer);
					event.data.OBJ.itemsObjs[itemX].divContainer.show();
					//en este punto el menu sera visible siempre, nesesitamos hacer un evento a nivel de document, que oculte de 
					//nuevo este menu.
					event.data.OBJ
					$(document).bind('click',{OBJ:event.data.OBJ,elemento:event.data.OBJ.itemsObjs[itemX].divContainer},event.data.OBJ.documentHandler);	
				}	
			} 
		}
		console.log(event.data.OBJ);
        if(event.data.OBJ.config.enabled){
            event.data.OBJ.config.listeners.click(event);
            //event.data.OBJ.handler(event);
        }
		event.stopPropagation();	
    });
}
Components.MenuItem.prototype.documentHandler = function(event) {
	//verificar que el menu este visible
	console.log('documenthandler');
	console.log(event.target);
	event.data.elemento.hide();
	$(document).unbind('click',event.data.OBJ.documentHandler);
}
//##############################################################################
Components.MenuItem.prototype.drawItems = function() {
    for(var i in this.items) {
       var item = this.items[i];
       this.drawItem(item);
    }
}
//------------------------------------------------------------------------------
Components.MenuItem.prototype.drawItem = function(item) {
	//un item no puede recivir otro item, mas lo que si puede recivir es un menu de nivel inferior
	
	item.container = this.divContainer;
	if(item.type=='MenuScort'){
			item.menuLevel = this.menuLevel+1;
			item.menuType = this.config.menuType;			
		}
	item.parent = this;
	var element = Components.create(item.type, item);
	this.itemsObjs.push(element);
	return this;
}
//##############################################################################
Components.MenuItem.prototype.show = function() {
  return this;
}
//##############################################################################
Components.MenuItem.prototype.destroy = function() {
    Components.Component.prototype.destroy.call(this);
}
//##############################################################################
Components.MenuItem.prototype.enable = function() {
	/*if(!this.config.enable){
		this.divContainer.removeClass('MenuItem-disabled');
		if (this.config.submenu.VisibleOnHover == true) {
			this.divContainer.addClass('menuHover');
		}
	}*/
	if(this.config.enable == true){
		this.divContainer.addClass('MenuItem-disabled');
		this.config.enable = false;
		}
	else{
		this.divContainer.removeClass('MenuItem-disabled');
		this.config.enable = true;
		}
}

