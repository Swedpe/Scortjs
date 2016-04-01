/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	DateField v 1.0 - a jQuery Ui extension
	Licences: MIT & GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com].
*/
Components.DateField.prototype.init = function(dataObj) {
    this.initConfig();
    
    this.config.id = "datefield-"+ Math.round(Math.random() * 2000);
    this.config.format = 'yyyy-MM-dd';
    this.config.listeners.select = function(field, date){};    
    Components.InputField.prototype.init.call(this, dataObj);
    this.className = "dateField";
    this.dateCurrent = null;
	
}
Components.DateField.prototype.initConfig = function() {
	this.config = {
        container: $('body'),
        label: "",
        labelWidth: -1,
        alignLabel: "left",
        value: "",
        alignText: "left",
        name: "name-" + Math.round(Math.random() * 2000),
        width: -1,
        x: -1,
        y: -1,
        allowBlank: true,
        enabled: true,
        readOnly: false,
        CodeHelper:'',
        hidden: false,
		styleLabel:'',
		styleInput:'',
		validar:'',
		ico:false,
		InputCss:new Array(),
        listeners: {
            specialKey: function(obj, event){},
            change: function(obj, newValue, oldValue){} //Fires just before the field blurs if the field value has changed.
        }
    };
}
//##############################################################################
Components.DateField.prototype.create = function() {
    Components.InputField.prototype.create.call(this, false);
    
    this.divContainer.append('<div class="buttonCalendar"></div>');
    
    if(this.config.value != "")         
		this.setValue(this.config.value);
   	else
		this.setValue("");
		
    
    this.setControls();
	this.setReadOnly(this.config.readOnly);
	return this ;
}
//##############################################################################
Components.DateField.prototype.setControls = function() {
   // Components.InputField.prototype.setControls.call(this);
    
    this.btnCalendar = $('.buttonCalendar', this.divContainer);
    
    this.divInput.unbind('click');
    
    this.btnCalendar.bind("mousedown", {OBJ:this}, function(event) {
        if(event.data.OBJ.config.enabled) {
            $(this).addClass('clicked');
            event.data.OBJ.divInput.click();
        }
    });
    this.btnCalendar.bind("mouseup", {OBJ:this}, function(event) {
        $(this).removeClass('clicked');
    });
}
//##############################################################################
Components.DateField.prototype.setValue = function(value) {
    this.config.value = value;
    if(value != "") {  
        this.divInput.val(new Date(this.config.value).toString(this.config.format));
		this.dateCurrent = new Date(this.config.value);
    }
    else {
        this.divInput.val("");
		this.dateCurrent = "";
    }
}
//##############################################################################
Components.DateField.prototype.getValue = function() {
    return this.dateCurrent;
}
//##############################################################################
Components.DateField.prototype.setReadOnly = function(readOnly) {
    if(readOnly) {
        this.divInput.prop("readOnly", "readOnly");
        this.disable();
        $('.datepicker', this.divContainer).parent().remove();
    }
    else {
        var $this = this;
        this.divInput.prop("readOnly", "");
        this.enable();
        this.divInput.appendDtpicker({
            "dateOnly": true, 
            "current": this.divInput.val(), 
           // "dateFormat": this.config.format.toLocaleUpperCase(), 
            "locale": "es",
            onSelect: function(event, date) {
                $this.dateCurrent = date;
                $this.listeners.select(event, date);
            }
        });
    }
}
