/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	FileField v 1.0 - a jQuery Ui extension
	Licences: MIT & GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com].
*/
Components.FileField.prototype.init = function(dataObj) {
    this.config = {
        container: $('body'),
        id: "filefield-"+ Math.round(Math.random() * 2000),
        label: "",
        labelWidth: -1,
        alignLabel: "left",
        value: "",
        alignText: "left",
        name: "",
        width: -1,
        x: -1,
        y: -1,
        allowBlank: true,
        enabled: true,
        readOnly: false
    };
    
    for(var i in dataObj) {
        if(this.config[i] != undefined)
            this.config[i] = dataObj[i];
    }
    
    this.id = this.config.id;
    this.container = this.config.container;
    this.className = "fileField";
    
    this.divLabel = null;
    this.divInput = null;
}
//##############################################################################
Components.FileField.prototype.create = function() {
    Components.Component.prototype.create.call(this);
    this.divContainer.addClass('inputField');
    this.divContainer.append('<span class="fileField">'+this.config.label+'</span><input type="file" size="20"/>');
    this.divLabel = $('.labelField', this.divContainer);
    this.divInput = $('input', this.divContainer);
    
    if(this.config.label == "") {
        this.divLabel.hide();
    }
    if(this.config.labelWidth != -1) {
        this.divLabel.css("width", this.config.labelWidth);
    }
    if(this.config.width != -1) {
        this.divInput.css("width", this.config.width);
    }
    if(this.config.allowBlank) {
        this.divInput.val(this.config.value);
    }
    if(this.config.name != "") {
        this.divInput.prop("name", this.config.name);
    }
    if(this.config.x != -1) {
        this.divContainer.css("left", this.config.x);
    }
    if(this.config.y != -1) {
        this.divContainer.css("top", this.config.y);
    }
    this.divInput.css('text-align', this.config.alignText);
    this.divLabel.css('text-align', this.config.alignLabel);
    
    this.setReadOnly(this.config.readOnly);
	return this ;
}
//##############################################################################
Components.FileField.prototype.setValue = function(value) {
    this.config.value = value;
    this.divInput.val(value);
}
//##############################################################################
Components.FileField.prototype.getValue = function() {
    return this.divInput.val();
}
//##############################################################################
Components.FileField.prototype.setLabel = function(label) {
    this.config.label = label;
    this.divLabel.html(label).show();
}
//##############################################################################
Components.FileField.prototype.setReadOnly = function(readOnly) {
    if(readOnly) {
        this.divInput.prop("readOnly", "readOnly");
        this.disable();
    }
    else {
        this.divInput.prop("readOnly", "");
        this.enable();
    }
}
//##############################################################################
Components.FileField.prototype.getText = function() {
    return this.getValue();
}
