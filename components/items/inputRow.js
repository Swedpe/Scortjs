/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	WindowContainer v 1.0 - a jQuery Ui extension
	Licences:GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com].  outline-color: red;
*/
Components.InputRow.prototype.initConfig = function() {
	//InputRow permite crear estructuras de 12 columnas, con cualquier contenido.
}
//##############################################################################
Components.InputRow.prototype.init = function(dataObj) {
	this.type = 'InputRow';
	this.className = 'InputRow';
	this.config = {
		id: "InputRow-"+ Math.round(Math.random() * 2000),
		parent:'',							//se usa especialmente cuando es parte de un form
		css:new Array(),
		enabled:null,
        container: $('body'),				//
        name: "name-" + Math.round(Math.random() * 2000),					
        CodeHelper:'',
		items: [],
    };
    for(var i in dataObj) {
        if(this.config[i] != undefined){
            if((i == "listeners")||(i == "label")||(i == "input")||(i == "icon")||(i=='addon')) {
                for(var j in dataObj[i]) {
                    this.config[i][j] = dataObj[i][j];
                }
            }
            else
                this.config[i] = dataObj[i];
        }
    }
	//El InputRow no tiene el valor de enabled definido, si no llegara un valor por config asumira true
	if(this.config.enabled==null){
		this.enabled=true
	}
    //cuando el input tiene un addon, obligatoriamente tiene que ser del 100% de su contenedor,sino se descuadran los estilos.
    this.id = this.config.id;
    this.container = this.config.container;
    this.listeners = this.config.listeners;
    this.name = this.config.name;
    this.styleLabel = this.config.styleLabel;
	this.countCols=0;	
	this.items = this.config.items;
	 this.itemsObjs = [];
    this.inputObjs = [];
	this.validado = null;
	
}
//##############################################################################
Components.InputRow.prototype.create = function(setControls) {
	Components.Component.prototype.create.call(this);	
	this.divContainer.addClass('form-group');

  	//preparando al componente textfield
	for(var i in this.config.css) {
		this.divContainer.css(i, this.config.css[i]);
	}
     if(this.config.hidden){
		this.divContainer.hide();
	 }
	 this.drawItems();
	 return this;
}
//##############################################################################
Components.InputRow.prototype.drawItems = function() {
    for(var i in this.items) {
        this.drawItem(this.items[i]);
    }
}
//##############################################################################
Components.InputRow.prototype.drawItem = function(item) {
    if (typeof(item.cols)=="undefined"){
		item.cols = 1;
	}
	this.countCols = this.countCols + item.cols;
	if(this.countCols>12){console.log("warning: mala maquetacion");}
	var Col = $('<div class="col-sm-'+item.cols+'"></div>');
	this.divContainer.append(Col);
	item.container = Col;
    item.parent = this;
    var newItem = Components.create(item.type, item);
    this.itemsObjs.push(newItem);
    return newItem;
}
//------------------------------------------------------------------------------------
Components.InputRow.prototype.show = function() {
	  return this;
}
Components.InputRow.prototype.setValue = function(value) {
	//se coloca el valor de aquel input que tenga propiedad masterinput
   this.value = value;
   this.ChildComponent.setValue(value);
	//this.Validar();
}
//##############################################################################
Components.InputRow.prototype.getValue = function() {
	//se obtiene el valor de aquel input que tenga propiedad masterinput
	return this.ChildComponent.getValue();
}
//##############################################################################
Components.InputRow.prototype.setReadOnly = function(readOnly) {
    if(readOnly) {
        this.divInput.prop("readOnly", "readOnly");
        this.disable();
    }
    else {       
		this.divInput.removeAttr("readOnly");
        this.enable();
    }
}
//######################################################################################################################################
Components.InputRow.prototype.getName = function() {
    return this.name;
}
//######################################################################################################################################
Components.InputRow.prototype.enable = function() {
    for(var i in this.itemsObjs) {
        this.itemsObjs[i].enable();
    }
	this.enabled = true;
	return true;
}
//########################################################################################################################################
Components.InputRow.prototype.disable = function() {
     for(var i in this.itemsObjs) {
        this.itemsObjs[i].disable();
    }
	this.enabled = false;
	return true;
}
//########################################################################################################################################