/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	Sidebar v 1.0 - a jQuery Ui extension
	Licences: MIT & GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com].
*/
Components.Sidebar.prototype.init = function(dataObj) {
    this.config = {
		tipo :'Sidebar',
        container: $('body'),										//sidebar siempre tiene que ser creado sobre body
        id: "HtmlScreenGrid-"+ Math.round(Math.random() * 2000),             
		css:new Array(),
		hidden: false,
        items: [],													//sidebaritems
		Scale:'full',												//full y mini	
		listeners: {
            resize: function(){}									//cuando se cambia de tamaño mini/full
        },
    };
    
    for(var i in dataObj) {
        if(this.config[i] != undefined) 
			this.config[i] = dataObj[i];        
    }
    this.listeners = this.config.listeners;
    this.id = this.config.id;
	this.container = this.config.container;
    this.className = "no-skin"; 				//div contenedor general
	this.items = this.config.items;	
	this.ItemsContainer = '',					//ul contenedor de los elementos del sidebar, se creara con el primer item que sea del tipo sidebaritem
	this.itemsObjs = [];
	this.ItemSeleccionado = '';					//se aplica a nivel de sus hijos o hijos de hijos
	this.menuLevel = 0;
    
}
//##############################################################################
Components.Sidebar.prototype.create = function() {
    Components.Component.prototype.create.call(this);
	this.mainContent = $('<div class="main-content"><div class="main-content-inner"><div class="breadcrumbs" id="breadcrumbs"></div><div class="page-content"></div></div></div>');
	this.divContainer.addClass('main-container');
	this.divsidevar = $('<div id="sidebar'+this.id+'" class="sidebar responsive '+this.config.Scale+'"></div>');
	this.SidevarShorcuts = $('<div class="sidebar-shortcuts">'+
					'<div class="sidebar-shortcuts-large">'+				
					'</div>'+
					'<div class="sidebar-shortcuts-mini">'+
						'<span class="btn btn-success"></span>'+
						'<span class="btn btn-info"></span>'+
						'<span class="btn btn-warning"></span>'+
						'<span class="btn btn-danger"></span>'+
					'</div>'+
				'</div>');
	this.divsidevar.append(this.SidevarShorcuts);				
	this.divsidevarControl = $('<div class="sidebar-toggle sidebar-collapse" id="sidebar-collapse"><i class="ace-icon fa fa-angle-double-left"></i></div>');
	this.divContainer.append(this.divsidevar);
	this.divContainer.append(this.mainContent);
	this.drawItems();  	
	this.divsidevar.append(this.divsidevarControl);
	this.page = $('.page-content',this.divContainer); 
	this.setControls();
	return this ;
}

Components.Sidebar.prototype.setControls = function() {
	 this.divsidevarControl.bind("click", {OBJ:this}, function(event) {
		var $this = event.data.OBJ;
		if($this.config.Scale=='full'){
			$this.divsidevar.removeClass('full').addClass('menu-min');
			$('i',$this.divsidevarControl).removeClass('fa-angle-double-left').addClass('fa-angle-double-right');
			$this.config.Scale = 'mini';
			$this.listeners.resize();
		}else{
			$this.divsidevar.removeClass('menu-min').addClass('full');
			$('i',$this.divsidevarControl).addClass('fa-angle-double-left').removeClass('fa-angle-double-right');
			$this.config.Scale = 'full';
			$this.listeners.resize();
		}		
    });
}
//##############################################################################
Components.Sidebar.prototype.show = function() {
    if(!this.config.hidden)
        Components.Component.prototype.show.call(this);
    else
        this.hide();
  return this;
}
Components.Sidebar.prototype.drawItems = function() {
//cuando el primer item del tipo sidebaritem llega, se crea el contenedor ul
    for(var i in this.items) {
		if((this.items[i].type == 'Button')&&(this.items[i].sidebar=='head')){//botones para la cabecera, para visualización optima usar 4
			this.items[i].container = $('.sidebar-shortcuts-large',this.SidevarShorcuts);
		}
		if((this.ItemsContainer=='')&&(this.items[i].type == 'SidebarItem')){
			this.ItemsContainer = $('<ul class="nav nav-list" style="top: 0px;"></ul>');
			this.divsidevar.append(this.ItemsContainer);
		}
        this.drawItem(this.items[i]);
    }
}
//##############################################################################
Components.Sidebar.prototype.drawItem = function(item) {
	item.sidebar = this;
    item.parent = this;
    var newItem = Components.create(item.type, item);
    this.itemsObjs.push(newItem);
    return newItem;
}
//##############################################################################
Components.Sidebar.prototype.destroyMainContents = function (panel){
	for(var i in visiblesSideBar){
		visiblesSideBar[i].remove();
	 }
}
Components.Sidebar.prototype.clearPage = function(){
	this.page.empty();
		
}
function EliminarVisibles(){
for(var i in visiblesSideBar){
			console.log(visiblesSideBar[i]);
			visiblesSideBar[i].destroy();
}
  if(typeof(Components.getComponentById('mainSidebar'))!= "undefined"){
  Components.getComponentById('mainSidebar').clearPage();}
}




