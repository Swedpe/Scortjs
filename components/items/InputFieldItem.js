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
Components.InputField.prototype.initConfig = function() {
	//Inputfield es la union de un labelItem y de un textfield, en un contenedor con formato bootstrap de 12 columnas.
}
//##############################################################################
Components.InputField.prototype.init = function(dataObj) {
	this.type = 'InputField';
	this.className = 'inputField';
	this.config = {
		id: "InputField-"+ Math.round(Math.random() * 2000),
		countCols:0,
		cols:12,							//el total de columnas que ocupara el componete en el form, la suma de 	label.cols + input.cols = InputField.cols
		autocalcCols:false,					//si 2 componentes con este atributo se encuentran dentro de un formulario, se unirán en un contenedor común hasta completar las 12 columnas
		parent:'',							//se usa especialmente cuando es parte de un form
		css:new Array(),
		enabled:true,
        container: $('body'),				//
        label:{
			create:true,					//si create es false no se crea el label y solo se crea el input
			html:"",
			cols:2,
			align:"left",	
			css:new Array(),			
		},
		input:{
			create:true,					//si create es false solo se crea el label y no se crea el input [no implementado aun]
			type:'TextField',					//Por defecto se crea un TextField, con todos los parametros definidos aqui
			state:'default',	
			alignText: "left",
			width: -1,
			cols:10,
			state:'default',
			css:new Array(),
			readOnly: false,
			hidden: false,
			icon: {
				type:'none',		//tipos posibles fontawesome y image
				image : '',
				position:'left',
				color:'default',
				animate:false,
			},
			listeners: {
				specialKey: function(obj, event){},
				change: function(obj, newValue, oldValue){}, //Fires just before the field blurs if the field value has changed.
				onValidateSucess: function(event){},
				onValidateFail: function(event){}
			}			
		},
						//este es el estilo por defecto y determina su color [Error,Highlight,Default,Active,Info,Warning] 
        value: "",
        name: "name-" + Math.round(Math.random() * 2000),					
        allowBlank: true,
     
        CodeHelper:'',
     
		validar:'',
		addon: {
				addonType:'none',
				position:'left',
				class:''
		},
		bgIco:{						//icono de bagground 
			class:''				//inputico
		},				
        
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

    //cuando el input tiene un addon, obligatoriamente tiene que ser del 100% de su contenedor,sino se descuadran los estilos.
	if(this.config.addon.addonType!='none'){
		this.config.input.width = '100%';
	}
	if (this.config.input.icon.type=='fontawesome'){
		this.config.input.icon.type = 'fa';
	}
    this.id = this.config.id;
    this.container = this.config.container;
    this.listeners = this.config.listeners;
    this.name = this.config.name;
    this.styleLabel = this.config.styleLabel;	
    this.divLabel = null;
    this.divInput = null;
	this.validado = null;
	this.icoclass = null; 
	
}
//##############################################################################
Components.InputField.prototype.create = function(setControls) {
    if ((this.config.autocalcCols)&&(this.config.cols)&&(this.config.countCols)&&((this.config.cols+this.config.countCols)<=12)){
		this.divContainer=this.config.parent.itemsObjs[this.config.parent.itemsObjs.length-1].divContainer;
		if(this.config.cols+this.config.countCols>=12){
			this.config.parent.countCols = 0;
		}	
	}else{
		Components.Component.prototype.create.call(this);	
		this.divContainer.addClass('form-group');
	}
    if(this.config.label.create==true){
		this.zoneLabel = $('<div class="InputFieldLabel col-sm-'+this.config.label.cols+'"><span class="labelField">'+this.config.label.html+'</span></div>');
		this.divContainer.append(this.zoneLabel);
		this.divLabel = $('.labelField', this.zoneLabel);
		if(this.config.label == "") {
        this.divLabel.hide();
		}
		if(this.config.labelWidth != -1) {
			this.divLabel.css("width", this.config.labelWidth);
		}
		if(this.config.styleLabel != '') 
			this.divLabel.addClass(this.config.styleLabel);
		}else{
			this.zoneLabel=null;
			this.divLabel=null;
		}
	
	this.zoneInput = $('<div class="inputFieldInput col-sm-'+this.config.input.cols+'"></div>');
	this.divContainer.append(this.zoneInput);
	//preparando al componente textfield
	this.config.input.container = this.zoneInput;
	this.config.input.parent = this;
	this.ChildComponent = Components.create(this.config.input.type,this.config.input);					//se crea el componente, por  defecto siempre el TextField
    this.divInput = $('input', this.zoneInput);

   
	
	//para enviar Custom Css al componente
    
   // this.config.input.align?this.divInput.css('float', this.config.input.align):'nada';
  //  this.config.label.align?this.divLabel.css('float', this.config.label.align):'nada';
	//si mas de 2 input comparten el contenedor por autocalcCols, entonces cada uno agregara algo de css, no repetir.
	for(var i in this.config.css) {
		this.divContainer.css(i, this.config.css[i]);
	}
    
	setControls = (setControls == undefined) ? true : setControls;
   
     if(this.config.hidden){
		this.zoneLabel.hide();
		this.zoneInput.hide();
	 }
	 this.config.enabled?this.enable():this.disable();
	 return this;
}
//------------------------------------------------------------------------------------
Components.InputField.prototype.show = function() {
	  return this;
}
//##############################################################################
//##############################################################################
/*Components.InputField.prototype.Validar = function(event) {
   if(this.config.validar['requerido'])
		this.config.validar['elemento'] = this.divInput;
				
	this.validado = this.validador.Validar(this.divInput.val(),this.config.validar);
	if(!this.validado){
		this.listeners.onValidateFail(event);
	}else{
		this.listeners.onValidateSucess(event);
	}
}*/
//##############################################################################
Components.InputField.prototype.setValue = function(value) {
   this.config.value = value;
   this.ChildComponent.setValue(value);
	//this.Validar();
}
//##############################################################################
Components.InputField.prototype.getValue = function() {
			return this.ChildComponent.getValue();
}
//##############################################################################
Components.InputField.prototype.setLabel = function(label) {
    this.config.label.html = label;
    this.divLabel.html(label).show();
}
//##############################################################################
Components.InputField.prototype.setReadOnly = function(readOnly) {
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
Components.InputField.prototype.getText = function() {
    return this.getValue();
}
//######################################################################################################################################
Components.InputField.prototype.getName = function() {
    return this.name;
}
//######################################################################################################################################
Components.InputField.prototype.enable = function() {
    this.enabled = true;
	this.ChildComponent.enable();
	return this;
}
//########################################################################################################################################
Components.InputField.prototype.disable = function() {
    this.enabled = false;
	this.ChildComponent.disable();
	return this;
}
//########################################################################################################################################
Components.InputField.prototype.changeAddon = function(addon){
	//hasta el momento de escribir este código tenemos 2 addon, con multiples posibilidades de cambiar diferentes parametros de los mismos.
	//@addon estructura completa del addon que reemplazara al que actualmente esta visible.
	
}