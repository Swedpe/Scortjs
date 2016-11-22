/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	FormContainer v 1.0 - a jQuery Ui extension
	Licences: MIT & GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com].
*/
Components.Form.prototype.init = function(dataObj) {
    this.config = {
		intelligentColums:true,
        container: $('body'),
        id: "form-"+ Math.round(Math.random() * 2000),
        state:'default',
		bodyPadding: -1,
        margin: -1,
        width: -1,
        height: -1,
		enabled:true,						//formulario por defecto habilitado
		css:new Array(),
        autoScroll: false,
        fieldDefaults: {
            labelWidth: 50
        },
        items: [],
        buttons: [],
        listeners: {
            afterrender: function(){}
        },
		baseHtml:false,						//si esta definido se buscara el formulario definido en el codigo html y se absorve todo el html
    };
    
    for(var i in dataObj) {
        if(this.config[i] != undefined) {
            if(i == "listeners" || i == "fieldDefaults") {
                for(var j in dataObj[i]) {
                    this.config[i][j] = dataObj[i][j];
                }
            }
            else
                this.config[i] = dataObj[i];
        }
    }
	if(dataObj.parent){
		this.parent = dataObj.parent;
	}
    this.baseHtml = this.config.baseHtml;
	this.enabled = this.config.enabled;
	this.countCols  = 0; 					//ayuda a ajustar la grilla de componentes para visualización
    this.id = this.config.id;
    this.container = this.config.container;
    this.className = "formContainer";
    this.listeners = this.config.listeners;
    this.items = this.config.items;
    this.itemsObjs = [];
    this.inputObjs = [];
    this.buttonObjs = [];
    this.posX = 10;
    this.posY = 10;
}
//##############################################################################
Components.Form.prototype.create = function() {
    //Components.Component.prototype.create.call(this);
	if(this.baseHtml){
		this.divContainer = $('#'+this.id);
		console.log(this.divContainer);
		//si tiene un componente padre hay que mover el form hacia el padre
		if(this.parent){
			this.container.append(this.divContainer);	
		}	
	}
	else{
		this.divContainer = $('<form></form>');	
		this.container.append(this.divContainer);
		this.divContainer.addClass('form-horizontal').addClass('formContainer').addClass(this.config.state);
	}
	//this.form.append(this.divContainer);
    this.setConfig();
    this.drawItems();
    this.drawButtons();
    this.listeners.afterrender();
	for(var i in this.config.css) {
		this.divContainer.css(i, this.config.css[i]);
	}
	return this ;
}
Components.Form.prototype.destroy = function() {}
//##############################################################################
Components.Form.prototype.setConfig = function() {
    var cssGeneral = {};
    
    if(this.config.width != -1) cssGeneral.width = this.config.width;
    if(this.config.height != -1) cssGeneral.height = this.config.height;
    if(this.config.margin != -1) cssGeneral.borderWidth = this.config.margin;
    if(this.config.bodyPadding != -1) cssGeneral.padding = this.config.bodyPadding;
    if(this.config.autoScroll) cssGeneral.overflow = "auto";
    
    this.divContainer.css(cssGeneral);
}
//##############################################################################
Components.Form.prototype.drawButtons = function() {
    for(var i in this.config.buttons) {
        var button = this.config.buttons[i];
        button.type = "Button";
        button.y = this.posY;
        
        var buttonObj = this.drawItem(button);
        this.buttonObjs.push(buttonObj);
    }
}
//##############################################################################
Components.Form.prototype.drawItems = function() {
    for(var i in this.items) {
		var itemObj = this.drawItem(this.items[i]);
        this.inputObjs.push(itemObj);
    }
}
//##############################################################################
Components.Form.prototype.drawItem = function(item) {
    item.container = this.divContainer;
	item.parent = this;
	item.countCols = this.countCols;
	if ((item.autocalcCols)&&(item.cols)&&(item.cols<12)&&(this.countCols<12)){		//si el elemento tiene autocols, ademas tiene contador de columnas y ademas sus columnas no completan las 12 columnas.
		this.countCols = this.countCols+item.cols;								    //se almacena el conteo en el formulario, y se pasa al siguiente elemento.
	}
	else{
		item.countCols = 0;
		//this.countCols = 0;
	}
    var newItem = Components.create(item.type, item);
    this.itemsObjs.push(newItem);
    return newItem;
}
//##############################################################################
Components.Form.prototype.setTitle = function(title) {
    this.config.title = title;
    this.divTitle.html(title);
}
//##############################################################################
Components.Form.prototype.setHeight = function(height) {
    this.divContainer.css("height", height);
}
//##############################################################################
Components.Form.prototype.setWidth = function(width) {
    this.divContainer.css("width", width);
}
//##############################################################################
Components.Form.prototype.isValid = function() {
    var isValid = true;
    for(var i in this.inputObjs) 
        isValid = isValid && this.inputObjs[i].isValid();
    
    return isValid;
}
//##############################################################################
Components.Form.prototype.getValues = function() {
     var values = {};
    for(var i in this.inputObjs) {
		switch(this.inputObjs[i].type){
			case 'TextField':
			case 'NumberField':
			case 'ComboBox':
			case 'DatePicker':
			case 'AutoCompleteInputField':
			values[this.inputObjs[i].name] = this.inputObjs[i].getValue();
			break;
			case 'InputField':
					switch(this.inputObjs[i].ChildComponent.type){					
					case 'TextField':
					case 'NumberField':
					case 'ProgressBar':
					case 'DatePicker':
					case 'onoffswitch':
					case 'ComboBox':
					case 'TextArea':
					case 'colorPicker':
					case 'timePicker':
					case 'AutoCompleteInputField':
						
						values[this.inputObjs[i].ChildComponent.name] = this.inputObjs[i].ChildComponent.getValue();
					break;	
					}
			break;
		}
    }
    return values;
}
//##############################################################################
Components.Form.prototype.setValues = function(values) {
    for(var i in this.inputObjs){
		for(var name in values){
			switch(this.inputObjs[i].type){											//controles basicos credos directamente
				case 'TextField':
				case 'NumberField':
				case 'DatePicker':
				case 'ComboBox':
				case 'colorPicker':
				case 'AutoCompleteInputField':
				if(this.inputObjs[i].config.name == name){
					this.inputObjs[i].setValue(unescapeHTML(values[this.inputObjs[i].name]));
				}
				break;
			case 'InputField':														//controles combinados creados con inputfield
					switch(this.inputObjs[i].ChildComponent.type){					//controles basicos credos directamente
					case 'TextField':
					case 'ProgressBar':
					case 'DatePicker':
					case 'timePicker':
					case 'NumberField':
					case 'ComboBox':
					case 'colorPicker':	
					case 'AutoCompleteInputField':
					if(this.inputObjs[i].ChildComponent.config.name == name){
						this.inputObjs[i].ChildComponent.setValue(unescapeHTML(values[this.inputObjs[i].ChildComponent.name]));}
					break;	
					case 'onoffswitch':
					if(this.inputObjs[i].ChildComponent.config.name == name){
					  this.inputObjs[i].ChildComponent.setValue(values[this.inputObjs[i].ChildComponent.name]);
					}
					break;
					
					
					}
			break;
			//this.inputObjs[i].setValue(unescapeHTML(values[this.inputObjs[i].name]));	
			}
		}
	}	
    
    return true;
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.Form.prototype.enable = function() {
	if (this.enabled == false){
	 for(var i in this.inputObjs) {
		switch(this.inputObjs[i].className){		
			case "Especial":
			//algunos casos especiales aqui
			break;
			default:				
				this.inputObjs[i].enable();
			break;
		} 
	 }
	 this.enabled = true;
	}
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.Form.prototype.disable = function() {
	if (this.enabled == true){ 
	 for(var i in this.inputObjs) {
		switch(this.inputObjs[i].className){		
			case "Especial":
			//algunos casos especiales aqui
			break;
			default:				
				this.inputObjs[i].disable();
			break;
		} 
	 }
	 this.enabled = false;
	}
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.Form.prototype.Clear = function() {
    for(var i in this.inputObjs) {
		switch(this.inputObjs[i].className){		
			case "numberField":
				this.inputObjs[i].setValue(0);
			break;
			case "comboBoxField":
					$($("option",this.inputObjs[i].divSelect)[0]).prop("selected","selected").change();				
			break;
			default:
				if(this.inputObjs[i].setValue){
				this.inputObjs[i].setValue('');}
			break;
		}
    }
    return true;
}
//##############################################################################