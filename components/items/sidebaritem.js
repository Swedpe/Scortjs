/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	SidebarItem v 1.0 - a jQuery Ui extension
	Licences: MIT & GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com].
*/
Components.SidebarItem.prototype.init = function(dataObj) {
	this.type = 'SidebarItem';
	this.parent = dataObj.parent;
	this.sidebar = dataObj.sidebar;
    this.config = {
        container: $('body'),
        id: "SidebarItem-"+ Math.round(Math.random() * 2000),
        text: "",
        tooltip: "",
		css:new Array(),
		items: [],
		active:false,
		canActivate:false,		//algunos elementos no se puede activar, otros si
		open:false,				//false = cerrado, true = abierto.
		adorno:{				//adorno numérico, 
				type:'none',
				contador:0,
				tooltip:'',
				state:'default'		//igual que button, debe tener un color Opciones: [error,highlight,active,info,warning,default]
		},
        icon: {
				type:'none',
				position:'left',
				class:'fa-caret-right',
				animate:false,
			},
        handler: function(e){},
		CodeHelper:"",
        listeners: {
            click: function(event){},
			open: function(event){},		//cuando se le hace click y tiene que mostrar sus elementos internos
			close: function(event){},		//cuando se le hace click y tiene que ocultar sus elementos internos
			activate: function(event){},
        }        
    };
    if (!dataObj.sidebar){
		console.log("si no se define este parametro este control no funciona");
		return;	
	}
    for(var i in dataObj) {
        if(this.config[i] != undefined) {
            if((i == "listeners")||(i == "icon")||(i == "adorno")) {
                for(var j in dataObj[i]) {
                    this.config[i][j] = dataObj[i][j];
                }
            }
            else
                this.config[i] = dataObj[i];
        }
    }
    this.listeners = this.config.listeners;
    this.id = this.config.id;
    this.container = this.config.container;
	this.ItemsContainer = '';						//contenedor de sus posibles hijos, ase crea un paso antes de la creación del primer hijo
    this.className = "sidebarItem";
	this.items = this.config.items;
	this.open = this.config.open;					//status open y close, Open se ven sus submenus, close oculta sus sub-menus	
	this.active = this.config.active;				//active y no-active, solo un elemento de todo el sidebar puede tener el estado activo
	this.canActivate = this.config.canActivate;		//determina si puede ser activado o no, valor por defecto es false(no puede ser activado)
	this.childActive = 'false';						//si tiene un hijo en estado activo.
	this.menuLevel = this.parent.menuLevel + 1;
    this.handler = this.config.handler;
    this.listeners = this.config.listeners;
	this.itemsObjs = [];
	
	if(this.config.icon.type== 'fontawesome')
	{this.config.icon.type= 'fa'; }
	else if(this.config.icon.type== 'glipicon')
	{this.config.icon.type= 'glyphicon'; }
}
//##############################################################################
Components.SidebarItem.prototype.create = function() {
	if(this.parent.type == 'SidebarItem'){
	}
	this.menuitem = $('<li>'+
		'<a href="#">'+
			'<i class="menu-icon '+this.config.icon.type+' '+this.config.icon.class+'"></i>'+
			'<span class="menu-text"> '+this.config.text+'</span>'+
		'</a><b class="arrow"></b>'+
		'</li>');
		if(this.config.icon.animate!=false){
				$('i',this.menuitem).addClass('fa-spin');
			}
	if(this.config.adorno.type!='none'){
		switch(this.config.adorno.type){
			case 'numeric':
			this.adorno = $('<span class="adorno adorno-'+this.config.adorno.state+'">'+this.config.adorno.contador+'</span>');
			break;
			case 'fontawesome':
			this.adorno = $('<span class="adorno adorno-transparent"><i class="ace-icon fa fa-exclamation-triangle red bigger-130"></i></span>');
			break;
		}
		$('span',this.menuitem).append(this.adorno);
	}
	//compatibilidad con sidebarcontainer
	this.divsidevar =  this.menuitem;
	this.parent.ItemsContainer.append(this.menuitem);
	this.drawItems();
    this.setControls();
	return this ;
}
//##############################################################################
Components.SidebarItem.prototype.setControls = function() {
	var	firsta = $('a',this.menuitem).first(); 
    firsta.bind("click", {OBJ:this}, function(event) {
		var $this = event.data.OBJ;
		$this.Activar(event,false);	
		$this.setOpen(event,!$this.open);      
    });
}
//##############################################################################
Components.SidebarItem.prototype.show = function() {
  return this;
}
//##############################################################################
Components.SidebarItem.prototype.Activar = function(event,childcall) {
	//clidcall es true cuando el llamado fue generado por un item hijo, (cuando un hijo se activa, se activan sus padres) 
	if(childcall==false){
		if (this.sidebar.ItemSeleccionado!=''){
			this.sidebar.ItemSeleccionado.Desactivar();
		}
		if(this.canActivate){
			this.listeners.activate(event);
		}
		this.sidebar.ItemSeleccionado = this;	
	}
	//si el elemento puede ser activado, o se esta activando un hijo
	if ((this.canActivate)||(childcall)){
		this.menuitem.addClass('active');
		if(this.menuLevel>=2){
			this.parent.Activar(event,true);
		}
	}
}
Components.SidebarItem.prototype.Desactivar = function(){
	//recursivo sube a todos los niveles de el arbol quitando el atributo active.
	this.menuitem.removeClass('active');
	if(this.menuLevel>=2){
		this.parent.Desactivar();
	}
}
//##############################################################################
Components.SidebarItem.prototype.setOpen = function(event,open) {
	//abrir  y cerrar el menu.
	if((open)&&(this.ItemsContainer!='')){
		this.menuitem.addClass('open');
		this.ItemsContainer.show();
		this.listeners.open(event);
	}
	else{
		this.menuitem.removeClass('open');
		if(this.ItemsContainer!=''){
			this.ItemsContainer.hide();
			this.listeners.close(event);
		}
	}
	this.open = open;
}
//##############################################################################
Components.SidebarItem.prototype.disable = function() {
}
//##############################################################################
Components.SidebarItem.prototype.enable = function() {
    
}
//##############################################################################
Components.SidebarItem.prototype.setHandler = function(Handler) {
}

Components.SidebarItem.prototype.drawItems = function() {
//cuando el primer item del tipo sidebaritem llega, se realizan varias tareas para acomodar interface,
//ademas de crear  ItemsContainer.
    for(var i in this.items) {
		if((this.ItemsContainer=='')&&(this.items[i].type == 'SidebarItem')){
			$('a',this.menuitem).addClass('dropdown-toggle').append('<b class="arrow fa fa-angle-down">');
			this.ItemsContainer = $('<ul class="submenu"></ul>');
			this.divsidevar.append(this.ItemsContainer);
		}
        this.drawItem(this.items[i]);
    }
}
//##############################################################################
Components.SidebarItem.prototype.drawItem = function(item) {
	item.sidebar = this.sidebar;							//sidebar es solo 1 es el padre de todos
    item.parent = this;
    var newItem = Components.create(item.type, item);
    this.itemsObjs.push(newItem);
    return newItem;
}
//##############################################################################