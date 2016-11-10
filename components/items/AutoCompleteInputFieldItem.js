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
    this.config = {
        container: $('body'),      
        align: "left",
        id: "name-" + Math.round(Math.random() * 2000),
        width: -1,
        x: -1,
        y: -1,
        CodeHelper:'',
		imputoptions:{},
		imputselectedId:'',
		imputselectedValue:'',	
		sourcefunction:'',
		source:'',
		baseHtml:false,
        listeners: {
            specialKey: function(obj, event){},
            change: function(obj, newValue, oldValue){}, //Fires just before the field blurs if the field value has changed.
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
	this.source = {};		
}
//##############################################################################
Components.AutoCompleteInputField.prototype.create = function(setControls) {
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
	this.InputField = Components.create('TextField', {
			container: this.divContainer,
			x:this.config.x,
			y: this.config.y,
			label: this.config.imputoptions.label,			
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
			
		});
      this.source = $this.config.imputoptions.source; 	
      this.autocomplete = $(this.InputField.divInput).autocomplete({
        source: $.isEmptyObject($this.source)?this.config.sourcefunction:$this.source,	 
        minLength: 2,
        appendTo: $this.container  
      }).autocomplete( "instance" )._renderItem = function( ul, item ) {
					
					var renderresult = $this.listeners.render(ul, item );
					return (!renderresult)?$( "<li>" )
					.append( "<a>" + item.label+ "</a>" )										
					.css("text-align","left")
					.appendTo( ul ):renderresult;
					
    };
	
      $(this.InputField.divInput).on( "autocompletechange",{OBJ:this}, function( event, ui ) {
          $this.InputField.setValue($this.imputselectedValue);
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
Components.AutoCompleteInputField.prototype.setValue = function(value) {
	for(var item in this.source){	
		if(this.source[item].id == value){
			this.imputselectedId = this.source[item].id;
			this.imputselectedValue = this.source[item].label;	
			this.InputField.setValue(this.source[item].label);															
			this.InputField.divInput.css('border','1px solid rgb(18, 94, 177)');	
			return this.source[item];
		}
	}
	return false;
}
//##############################################################################