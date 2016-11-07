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
Components.NumberField.prototype.init = function(dataObj) {
    this.type = 'NumberField';
	this.config = {
		id: "NumberField -"+ Math.round(Math.random() * 2000),
		parent:'',							//se usa especialmente cuando es parte de un form
        container: $('body'),      
        value: 0,
        alignText: "left",
		css:new Array(),
        name: "name-" + Math.round(Math.random() * 2000),
        width: 100,
        x: -1,
        y: -1,
        enabled: null,
		state:'default',
		position:'left',
		placeholder:"",	
        readOnly: false,
        CodeHelper:'',
		minValue:NaN,
		maxValue:NaN,
		step:1,
        hidden: false,
		validar:'',
		baseHtml:false,	
        listeners: {
            specialKey: function(obj, event){},
            change: function(event, newValue){} //Fires just before the field blurs if the field value has changed.
        }
    };
	 for(var i in dataObj) {
        if(this.config[i] != undefined){
            if(i == "listeners") {
                for(var j in dataObj[i]) {
                    this.config[i][j] = dataObj[i][j];
                }
            }
            else
                this.config[i] = dataObj[i];
        }
    };
	
    if(this.config.enabled==null){
		if(this.config.parent!=''){
			this.enabled=this.config.parent.getConfig('enabled');
			if(this.enabled==null){
				this.enabled = true;
			}
		}else{
			this.enabled=true;
		}
	};
	console.log("NumberField: this.enabled "+this.enabled);
	this.baseHtml= this.config.baseHtml;	
	this.id = this.config.id;
    this.config.id = "numberfield-"+ Math.round(Math.random() * 2000);
	this.parent = this.config.parent;
    this.name = this.config.name;
    this.config.allowDecimals = false;
    this.config.decimalPrecision = 1;
    this.config.hideTrigger = false;
    this.className = "numberField";
}
//##############################################################################
Components.NumberField.prototype.create = function() {
	if(this.baseHtml){
		this.config.container = $('#'+this.id);
		console.log(this.config.container);
	}
    this.TextField = Components.create('TextField',{
			placeholder:this.config.placeholder,
			value:this.config.value,
			parent:this,
			name:this.config.name,
			css:this.config.css,
			container:this.config.container,
			width: '100px',
			state:this.config.state,
			addon:{
						addonType: 'spinner',
						state:this.config.state,
						position:this.config.position,
						tooltip:'Info',	  
					},
	});
	this.divContainer = this.TextField.divContainer;
	if (this.config.width!=-1){
			this.TextField.zoneInput.css('width',this.config.width);
	}
    if(this.config.value != 0 && isNumber(this.config.value)) {
        this.TextField.setValue(this.config.value);
    }
	this.enabled?this.enable():this.disable();
    this.setControls();
	return this;
}
//##############################################################################
Components.NumberField.prototype.show = function() {
	  return this;
}
Components.NumberField.prototype.destroy = function() {
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	
Components.NumberField.prototype.disable = function() {
	//change input state to disable, el componente ya no sera editable
	this.enabled=false;
	this.divContainer.prop('disabled', true);
	this.TextField.disable();
	// console.log("NumberField funcion disable "+this.enabled);
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	
Components.NumberField.prototype.enable = function() {
	//change input state to enable, el componente sera editable
	this.enabled=true;
	this.divContainer.prop('disabled', false);
	this.TextField.enable();
	// console.log("NumberField funcion enable "+this.enabled);
}
//##############################################################################
Components.NumberField.prototype.setControls = function() {
    //addon 0 es el boton para arriba
    this.TextField.addon[0].handler = function(event) {
							if(event.data.OBJ.parent.parent.enabled) {
							var newValue = event.data.OBJ.parent.parent.getValue() + event.data.OBJ.parent.parent.config.step;
							if(event.data.OBJ.parent.parent.isAvailableValue(newValue)){
								event.data.OBJ.parent.setValue(newValue);
								event.data.OBJ.parent.parent.config.listeners.change(event,newValue);
								}
							}
					}
	//addon 1 es el boton para abajo					
	this.TextField.addon[1].handler = function(event) {
							 if(event.data.OBJ.parent.parent.enabled) {
								var newValue = event.data.OBJ.parent.getValue() - event.data.OBJ.parent.parent.config.step;
								if(event.data.OBJ.parent.parent.isAvailableValue(newValue)){
									event.data.OBJ.parent.setValue(newValue);
									event.data.OBJ.parent.parent.config.listeners.change(event,newValue);
								}
							}
					}						
	//bloquear el textField para que solo pueda aceptar numeros					
	this.TextField.divInput.keypress({OBJ:this}, function(event) {
        var charCode = (event.which) ? event.which : event.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57))
              return false;
        //event.data.OBJ.parent.parent.config.listeners.specialKey(event.data.OBJ, event);					
		//event.data.OBJ.parent.parent.config.listeners.change(event,this.TextField.getValue());
        event.data.OBJ.config.listeners.specialKey(event.data.OBJ, event);										//se quitó parent.parent
		event.data.OBJ.config.listeners.change(event,event.data.OBJ.TextField.getValue());
		
        return true;
    });
}
//##############################################################################
Components.NumberField.prototype.isAvailableValue = function(value) {
    if(!isNaN(this.config.maxValue) && value > this.config.maxValue)
        return false;
    if(!isNaN(this.config.minValue) && value < this.config.minValue)
        return false;
    return true;
}
//##############################################################################
Components.NumberField.prototype.setValue = function(value) {
    if(isNumber(value)) {
        this.config.value = value;
        this.TextField.setValue(value);
    }
}
//##############################################################################
Components.NumberField.prototype.getValue = function() {
    this.config.value = this.TextField.getValue();
    if(isNumber(this.config.value))
        return parseDouble(this.config.value);
    return 0;
}
//##############################################################################
