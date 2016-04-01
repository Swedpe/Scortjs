/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	WindowContainer v 1.0 - a jQuery Ui extension
	Licences: MIT & GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com].
*/
Components.ComboBox.prototype.init = function(dataObj) {
    this.type = 'ComboBox';
	this.config = {		
        container: $('body'),
        id: "combobox-"+ Math.round(Math.random() * 2000),
        label: "",
		name:'combobox',
        store: -1,
		state:'default',
        valueField: 0,
        displayField: 0,
        width: -1,
        height: -1,
        labelWidth: -1,
        x: -1,
        y: -1,
		parent:'',
        enabled: null,
        readOnly: false,
		styleLabel:'',
		validar:'',
		ico:false,
		InputCss:new Array(),
        listeners: {
            select: function(combo, record, index){}
        }
    };
    
    for(var i in dataObj) {
        if(this.config[i] != undefined)
            this.config[i] = dataObj[i];
    }
	//control de enabled desde el componente hacia los padres, codigo repetitivo, podria pasarce a components
	if(this.config.enabled==null){
		if(this.config.parent!=''){
			this.enabled=this.config.parent.getConfig('enabled');
			if(this.enabled==null){
				this.enabled = true;
			}
		}else{
			this.enabled=true
		}
	}
    this.id = this.config.id;
	this.name = this.config.name;					//lo usan los formContainer
    this.container = this.config.container;
    this.className = "comboBoxField";
    this.store = null;
    this.listeners = this.config.listeners;
    this.styleLabel = this.config.styleLabel;
    this.divLabel = null;
    this.divSelect = null;
	this.validado=true;
}
//##############################################################################
Components.ComboBox.prototype.create = function() {
    this.divContainer = $('<span class="inputSpan"></span>');
	this.container.append(this.divContainer);
	//Components.Component.prototype.create.call(this);
    //this.divContainer.addClass('inputField');
    this.divContainer.append('<select name="'+this.name+'" class="'+this.config.state+'"></select>');
    this.divSelect = $('select', this.divContainer);
	
	if(this.config.ico){
		this.divContainer.append('<span class="inputico"  style="width: 16px;  height:16px; float: right"></span>');	
		this.IconContainer =  $('.inputico', this.divContainer);
		this.IconContainer.addClass('inputico');
		this.icoclass = '';		
	}	
    if(this.config.store != -1) {
        this.config.store.container = this;
        this.store = Components.create('StoreContainer', this.config.store);
		this.drawRows();
        
		
		
    }
    if(this.config.width != -1) {		
        this.divSelect.css("width",this.config.width);
    }
    if(this.config.x != -1) {
        this.divContainer.css("left", this.config.x);
    }
    if(this.config.y != -1) {
        this.divContainer.css("top", this.config.y);
    }
	if(!this.enabled){
		this.divSelect.attr('disabled', 'disabled');
	}
    for(var i in this.config.InputCss) {
		this.divSelect.css(i, this.config.InputCss[i]);
	}
    this.setControls();
	return this;
}
//##############################################################################
Components.ComboBox.prototype.drawRows = function() {
	for(var index in this.store.data) {
			if(typeof(this.store.data[index]) == "string") {
				var value = this.store.data[index];
				this.store.data[index] = {0: value};
			}
			this.store.data[index].position = index;
			this.drawRowData(this.store.data[index]);
		}
return this;		
}
//##############################################################################
Components.ComboBox.prototype.drawRowData = function(data) {
    var idrow = this.id + "_" + data.position;
    var posValue = (data[this.config.valueField] == undefined) ? this.config.store.fields.indexOf(this.config.valueField) : this.config.valueField;
    var posDisplay = (data[this.config.displayField] == undefined) ? this.config.store.fields.indexOf(this.config.displayField) : this.config.displayField;
    
    var obj = $('<option id="'+idrow+'" value="'+data[posValue]+'">'+data[posDisplay]+'</option>');
    obj.data('record', data);
    this.divSelect.append(obj);
}
//##############################################################################
Components.ComboBox.prototype.setControls = function() {
    this.divSelect.bind("change", {OBJ: this}, function (event) {
        var optionSelected = $(this).find("option:selected");
        //var valueSelected  = optionSelected.val();
        //var textSelected   = optionSelected.text();
        event.data.OBJ.listeners.select(optionSelected.get(0), optionSelected.data('record'), optionSelected.index());		
    });
}
//##############################################################################
Components.ComboBox.prototype.clear = function() {
    $('option', this.divSelect).remove();
}
//##############################################################################
Components.ComboBox.prototype.getStore = function() {
    return this.store;
}
//##############################################################################
Components.ComboBox.prototype.setStore = function(data) {
     this.config.store.data = data;
	 this.config.store.container = this;
     this.store = Components.create('StoreContainer', this.config.store);
     this.store.loadData();
	 return this;
}
//##############################################################################
Components.ComboBox.prototype.setValue = function(value) {
    this.divSelect.val(value);
}
//##############################################################################
Components.ComboBox.prototype.getValue = function() {
    return this.divSelect.val();
}
//##############################################################################
Components.ComboBox.prototype.disable = function() {
	//change input state to disable, el componente ya no sera editable
	this.divSelect.prop('disabled', true);
	this.enabled = false;
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	
Components.ComboBox.prototype.enable = function() {
	//change input state to enable, el componente sera editable
	this.divSelect.prop('disabled', false);
		this.enabled = true;
}
Components.ComboBox.prototype.getText = function() {
    var optionSelected = this.divSelect.find("option:selected");
    return optionSelected.text();
}
//##############################################################################
Components.ComboBox.prototype.setReadOnly = function(readOnly) {
    if(readOnly) {
        this.divSelect.prop("disabled", "disabled");
        this.disable();
    }
    else {
        this.divSelect.prop("disabled", "");
        this.enable();
    }
}
//##############################################################################
Components.ComboBox.prototype.ChangeIcoClass = function(icoclass){
	if(this.config.ico){
		this.IconContainer.removeClass(this.icoclass);
		this.icoclass = icoclass;
		this.IconContainer.addClass(this.icoclass);
	}
}
//##############################################################################
Components.ComboBox.prototype.changeComboState = function(newState){
	this.divSelect.removeClass(this.config.state);
	this.divSelect.addClass(newState);  
	 this.config.state= newState;
}


