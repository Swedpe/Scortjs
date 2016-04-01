/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	CheckBoxFieldItem v 1.0 - a jQuery Ui extension
	Licences: MIT & GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com].
*/
Components.CheckboxField.prototype.init = function(dataObj) {
    this.config = {
        container: $('body'),
        id: "checkboxfield-"+ Math.round(Math.random() * 2000),
        boxLabel: "",
        state:'default',
		inputValue: "",
        name: "",
        width: -1,
        x: -1,
        y: -1,
        checked: false,
        enabled: true,
		readOnly:false,
        listeners: {
            change: function(){}
        }
    };
    
    for(var i in dataObj) {
        if(this.config[i] != undefined)
            this.config[i] = dataObj[i];
    }
    
    this.id = this.config.id;
	 this.TextField = '';//
    this.container = this.config.container;
    this.className = "checkboxField";
    this.listeners = this.config.listeners;
    
    this.divInput = null;
}
//##############################################################################
Components.CheckboxField.prototype.create = function() {
    Components.Component.prototype.create.call(this);
    this.divContainer.addClass('inputField');
    this.divContainer.append('<input type="checkbox" size="20">'+this.config.boxLabel+'</input>');
    $('input',this.divContainer).addClass(this.config.state);
	this.divInput = $('input', this.divContainer);
    
	
    if(this.config.width != -1) {
        this.divInput.css("width", this.config.width);
    }
    if(this.config.name != "") {
        this.divInput.prop("name", this.config.name);
    }
    if(this.config.inputValue != "") {
        this.divInput.prop("value", this.config.inputValue);
    }
    if(this.config.x != -1) {
        this.divContainer.css("left", this.config.x);
    }
    if(this.config.y != -1) {
        this.divContainer.css("top", this.config.y);
    }
    this.setValue(this.config.checked);
    this.setReadOnly(this.config.readOnly);
    
    this.setControls();
	return this;
}
//##############################################################################
Components.CheckboxField.prototype.setControls = function() {
    var $this = this;
    
    this.divInput.bind('change', {OBJ:this}, function(event) {
        $this.listeners.change(event);
    });
}
//##############################################################################
Components.CheckboxField.prototype.setValue = function(value) {
    this.divInput.prop('checked', value);
}
//##############################################################################
Components.CheckboxField.prototype.getValue = function() {
     return this.divInput.is(':checked');
}
//##############################################################################
Components.CheckboxField.prototype.setReadOnly = function(readOnly) {
    if(readOnly) {
        this.divInput.prop("disabled", "disabled");
        this.disable();
    }
    else {
        this.divInput.prop("disabled", "");
        this.enable();
    }
}
//##############################################################################
Components.CheckboxField.prototype.getText = function() {
    return this.config.boxLabel;
}

