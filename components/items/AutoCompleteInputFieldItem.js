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
Components.AutoCompleteInputField.prototype.init = function(dataObj) {
     this.type = 'AutoCompleteInputField';
	this.config = {
        container: $('body'),      
        align: "left",
        id: "name-" + Math.round(Math.random() * 2000),
        width: -1,
        x: -1,
        y: -1,
        CodeHelper:'',
		name:'',
		imputoptions:{},
		imputselectedId:'',
		imputselectedValue:'',
		minLength:2,
		sourcefunction:'',
		source:'',
		icon:{
				type:'none',		//tipos posibles fontawesome y image
				image : '',
				position:'left',
				class:'',
				color:'default',
				animate:false,
				creado:false,		//una vez creado no hacerlo por segunda vez.
		},
		addon:{
				addonType:'none',
				position:'left',
				class:'',
				creado:false,		//una vez creado no hacerlo por segunda vez.
		},
		validar:'',
		baseHtml:false,
        listeners: {
            specialKey: function(obj, event){},
            change: function(obj, newValue, oldValue){
				console.log('onchange');
			}, //Fires just before the field blurs if the field value has changed.
			render: function(ul, item){} 
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
    }
	if(dataObj.parent){
		this.parent = dataObj.parent;
	}
	this.baseHtml = this.config.baseHtml;
	this.id = this.config.id;
	this.imputselectedId = this.config.imputselectedId;
	this.imputselectedValue = this.config.imputselectedValue;
	this.className = 'AutoCompleteInputField';
    this.container = this.config.container;
    this.listeners = this.config.listeners; 
	this.name = this.config.name;
	this.source = {};		
}
//##############################################################################
Components.AutoCompleteInputField.prototype.create = function(setControls) {
    var $this = this;
	if(this.baseHtml){//si esta definido el html base, entonces tambien cada inputfield tiene que tener ID, sino no se puede alcanzar el elemento
		this.divContainer = $('#'+this.id);
		if(!this.parent.baseHtml){				//si el componente padre tambien es de html base entonces, no mover los contenedores html de lugar
			this.container.append(this.divContainer);
		}
	}
	else{
		Components.Component.prototype.create.call(this);
	}
	var $this=this;	
    this.divContainer.addClass('AutoCompleteInputField');
	this.AutoCompleteCache= {};	
	var textParams = {
			container: this.divContainer,
			id: "TXA"+this.id,
			width: this.config.imputoptions.width,
			alignLabel: "left",
			labelWidth: this.config.imputoptions.labelWidth,
			readOnly: this.config.imputoptions.readOnly,
			styleLabel:this.config.imputoptions.styleLabel,
			InputCss:this.config.imputoptions.InputCss,
			ico: (this.config.imputoptions.ico||false),
			value:(this.config.imputoptions.value||''),
            CodeHelper:(this.config.CodeHelper.value||''),
			validar: this.config.validar,
			listeners:this.config.listeners,
			icon:$this.config.icon,
			addon:$this.config.addon,
		}
	if(this.config.addon){
		textParams.addon  = $this.config.addon;
	}
	if(this.config.icon){
		console.log('con icon');
		textParams.icon  = $this.config.icon;
	}
	
	this.InputField = Components.create('TextField', textParams );

	this.source = $this.config.imputoptions.source; 	
      this.autocomplete = $(this.InputField.divInput).autocomplete({
        source: $.isEmptyObject($this.source)?this.config.sourcefunction:$this.source,	 
        minLength: this.config.minLength,
        appendTo: $this.container  
      }).autocomplete( "instance" )._renderItem = function( ul, item ) {
					var renderresult = $this.listeners.render(ul, item );
					return (!renderresult)?$( "<li>" )
					.append( "<a>" + item.label+ "</a>" )										
					.css("text-align","left")
					.appendTo( ul ):renderresult;
					
    };
	
      $(this.InputField.divInput).on( "autocompletechange",{OBJ:this}, function( event, ui ) {
          //se genera un problema aqui, ya que no permite valores que no esten en las listas.
		  //$this.InputField.setValue($this.imputselectedValue);
		if($this.config.listeners["change"] != undefined)
			$this.config.listeners["change"]( event, ui);
      } );   
        
     $(this.InputField.divInput).on( "autocompleteselect",{OBJ:this}, function( event, ui ) {    		
			$this.InputField.divInput.css('border','1px solid rgb(18, 94, 177)');
			ui.parent = $this;
			if($this.config.listeners["select"] != undefined)	
				$this.config.listeners["select"]( event, ui);
			$this.imputselectedId = ui.item.id;
			$this.imputselectedValue = ui.item.label;	
		
      });    
	
    if(this.config.x != -1) {
        this.setPositionX(this.config.x);
    }
    if(this.config.y != -1) {
        this.setPositionY(this.config.y);
    }  
	  return this;
}
Components.AutoCompleteInputField.prototype.setSource = function(source) {
	this.source = source; 
	this.InputField.setReadOnly(!(source.length>0));
	if(this.source.length==0){
		this.InputField.divInput.css('border','1px solid rgb(18, 94, 177)');
		this.imputselectedId ='';
	}	
	$(this.InputField.divInput).autocomplete("option", { source: this.source});	
}
Components.AutoCompleteInputField.prototype.getValue = function() {
	if (typeof(this.config.sourcefunction)=="function"){
		return this.InputField.getValue();
	}
	
}

Components.AutoCompleteInputField.prototype.setValue = function(value) {
	//si los datos son de una fuente fija tiene que estar seteado source para que se pueda dar un valor.
	//si los datos son de una fuente dinamica AJAX entonces se aceptara el valor directamente, validar el valor va por parte de el usuario.
	if (typeof(this.config.sourcefunction)=="function"){
		this.InputField.setValue(value);
		return this;
	}
	for(var item in this.source){	
		if(this.source[item].id == value){
			this.imputselectedId = this.source[item].id;
			this.imputselectedValue = this.source[item].label;	
			this.InputField.setValue(this.source[item].label);															
			this.InputField.divInput.css('border','1px solid rgb(18, 94, 177)');	
			return this;
		}
	}
	return false;
}
//##############################################################################
Components.AutoCompleteInputField.prototype.disable = function() {
	//change input state to disable, el componente ya no sera editable
	this.enabled=false;
	this.InputField.disable();
	//console.log("funcion disable "+this.enabled);
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	
Components.AutoCompleteInputField.prototype.enable = function() {
	//change input state to enable, el componente sera editable
	this.enabled=true;
	this.InputField.enable();
	//console.log("funcion enable "+this.enabled);
}