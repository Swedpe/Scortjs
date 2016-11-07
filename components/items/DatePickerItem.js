/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	DatePicker v 1.0 - a jQuery Ui extension
	Licences: MIT & GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com].
*/
Components.DatePicker.prototype.init = function(dataObj) {
    this.type = 'DatePicker';
	this.config = {
		id: "DatePicker-"+ Math.round(Math.random() * 2000),
        container: $('body'),      
        value: "",
        alignText: "left",
		format:'yy-mm-dd',    //formatos admitidos en: http://api.jqueryui.com/datepicker/#utility-formatDate
        name: "name-" + Math.round(Math.random() * 2000),
        width: -1,
        x: -1,
        y: -1,
        //enabled: true,
		enabled: null,					//controlar el atributo  disabled/enabled del text input
		buttonPosition:'left',
        readOnly: false,
        CodeHelper:'',
        hidden: false,
		state:'default',
		validar:'',
		parent:'',							//el componente padre
		baseHtml:false,	
        listeners: {
            specialKey: function(obj, event){},
            change: function(obj, newValue, oldValue){} //Fires just before the field blurs if the field value has changed.
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
	//control de enabled desde el componente hacia los padres
	if(this.config.enabled==null){
		if(this.config.parent!=''){
			this.enabled=this.config.parent.getConfig('enabled');
			if(this.enabled==null){
				this.enabled = true;
			}
		}else{
			this.enabled=true
		}
	};
	this.baseHtml = this.config.baseHtml;
	this.id = this.config.id;
    this.TextField = '';
    this.name=this.config.name;
	this.config.id = "DatePicker-"+ Math.round(Math.random() * 2000);
    this.config.listeners.select = function(field, date){};    
    this.className = "DatePicker";
	this.isHide=true;
	this.isVisiblePicker=false;
    this.dateCurrent = null;
	
}
//##############################################################################
Components.DatePicker.prototype.create = function() {
	//creamos  un input [textfield con addon]
	var  Place = new Date();
	if(this.baseHtml){
		this.config.container = $('#'+this.id);
		console.log(this.config.container);
	}
	this.TextField = Components.create('TextField',{
			placeholder:this.config.format,
			container:this.config.container,
			width: '100%',
			parent:this,
			state:this.config.state,
			 listeners: {
				click: function(event){
				if(event.data.OBJ.parent.isVisiblePicker){
						event.data.OBJ.divInput.datepicker('hide');
						//event.data.OBJ.parent.parent.isVisiblePicker = false;
					}else{
						event.data.OBJ.divInput.datepicker('show');
						$.datepicker._showDatepicker(event.data.OBJ.divInput[0]);
						
					}
					event.data.OBJ.parent.isVisiblePicker =!event.data.OBJ.parent.isVisiblePicker ;
					//this.config.state=""; inhabilitado no se para q sirve
				//console.log("hola");
				} //Fires just before the field blurs if the field value has changed.
			},
			addon:{
				addonType: 'button',
				state:this.config.state,
				position:this.config.buttonPosition,
				icon:{
					type:'fa',
					class:'fa-calendar',
					},
				tooltip:'Info',	  
				handler: function(event) {
					/*console.log(this);
					if(event.data.OBJ.parent.parent.isHide)
					{
					$.datepicker._showDatepicker(event.data.OBJ.parent.divInput[0]);
					this.config.state="";}
					else{
						$('#datepicker').css('visibility','hidden');
					}
					event.data.OBJ.parent.parent.isHide = !event.data.OBJ.parent.parent.isHide;*/
					/*if(event.data.OBJ.parent.parent.isVisiblePicker){
						event.data.OBJ.parent.divInput.datepicker('hide');
						//event.data.OBJ.parent.parent.isVisiblePicker = false;
					}else{
						event.data.OBJ.parent.divInput.datepicker('show');
						$.datepicker._showDatepicker(event.data.OBJ.parent.divInput[0]);
						
					}
					event.data.OBJ.parent.parent.isVisiblePicker =!event.data.OBJ.parent.parent.isVisiblePicker ;
					this.config.state="";*/
				}  
				},
		
		});
		this.divInput = this.TextField.divInput;
		if (this.config.width!=-1){
			this.TextField.zoneInput.css('width',this.config.width);
		}
		//se activa el funcionamiento de datepicker
		this.TextField.divInput.data('DatePicker',this);
		//creacion de jqueryUI Datepicker
		this.TextField.divInput.datepicker({      
			showButtonPanel: true,
			dateFormat:this.config.format,			
			beforeShow: this.SetStatusPicker,
			onSelect:this.Seleccionar,
		});
       // this.divContainer.append('<div class="buttonCalendar"></div>');
        if(this.config.value != "")         
			this.TextField.setValue(this.config.value);
		else
			this.TextField.setValue("");
		
		this.setControls();
		//this.setReadOnly(this.config.readOnly);
		return this;
	
	
}
//##############################################################################
Components.DatePicker.prototype.Seleccionar=function(dateText,pickerObj)
/*@param dateText: es para adasdasdasd 

*/
{
	$(pickerObj.input).data('DatePicker').isVisiblePicker =!$(pickerObj.input).data('DatePicker').isVisiblePicker ;
	console.log("seleccionar");
}
//##############################################################################
Components.DatePicker.prototype.SetStatusPicker = function(input,pickerObj) {
    pickerObj.dpDiv.removeClass('error').removeClass('highlight').removeClass('active').removeClass('info').removeClass('warning').removeClass('default');
    pickerObj.dpDiv.addClass($(input).data('DatePicker').config.state);
	//$(input).data('DatePicker').isVisiblePicker = true;
	 /*if( $(input).data('DatePicker').TextField.divContainer.closest('.windowContainer').length>0)
	 {
		var z=$(input).data('DatePicker').TextField.divContainer.closest('.windowContainer').css("z-index");
		z=parseInt(z)+100;
		pickerObj.dpDiv.css('z-index',z);
	 }*/
	 //si el contenedor del datepicker es una ventana 
	 //console.log($(input).data('DatePicker').TextField.divContainer.closest('.windowContainer'));
	
}
//##############################################################################
Components.DatePicker.prototype.setControls = function() {
//no hace nada
}
//##############################################################################
Components.DatePicker.prototype.setValue = function(value) {
	//el formato de value fecha de entrada es controlado por config.format
	//si la entrada es un objeto datetyme, tambien lo aceptara
	if(typeof(value.getMonth) === 'function'){				//condificion para verificar si es un objeto datetyme
		this.dateCurrent = value;
		this.config.value = $.datepicker.formatDate(this.config.format, value);
		this.TextField.divInput.val(this.config.value);
	}
	else{		
		this.config.value = value;
		if(value != "") {
			this.TextField.divInput.val($.datepicker.formatDate(this.config.format, new Date(this.config.value.split(/[- :]/))));
			this.dateCurrent = new Date(this.config.value.split(/[- :]/));
		}
		else {
			this.TextField.divInput.val("");
			this.dateCurrent = "";
		}
	}
}
//##############################################################################
Components.DatePicker.prototype.getValue = function() {
    //return this.dateCurrent;
	return this.TextField.getValue();
}
//-------------------
Components.DatePicker.prototype.show = function() {
    //Show Component
	  return this;
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.DatePicker.prototype.disable = function() {
	//change input state to disable, el componente ya no sera editable
	this.enabled=false;
	this.divInput.prop('disabled', true);
	this.TextField.disable();
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	
Components.DatePicker.prototype.enable = function() {
	//change input state to enable, el componente sera editable
	this.enabled=true;
	this.divInput.prop('disabled', false);
	this.TextField.enable();
}
//##############################################################################
Components.DatePicker.prototype.setReadOnly = function(readOnly) {
  //re implementar,  el codigo esta cambiando drasticamente.
  /*  if(readOnly) {
        this.disable();
    }
    else {
		$.datepicker._gotoToday = function(id) { 
			$(id).datepicker('setDate', new Date()).datepicker('hide').blur(); 
		};
		$.datepicker.setDefaults($.datepicker.regional["es"]);		
      
    }*/
}
//##############################################################################
Components.DatePicker.prototype.destroy=function(){
this.TextField.divInput.datepicker( "destroy" );
this.TextField.divInput.removeClass("hasDatepicker").removeAttr('id');
this.TextField.destroy();
Components.Component.prototype.destroy(this);	
}
//enviando configuraciones personalizadas directamente al widget
$.datepicker.regional['es'] = {
	closeText: 'Cerrar',
	prevText: '&#x3C;Ant',
	nextText: 'Sig&#x3E;',
	currentText: 'Hoy',
	monthNames: ['enero','febrero','marzo','abril','mayo','junio',
	'julio','agosto','septiembre','octubre','noviembre','diciembre'],
	monthNamesShort: ['ene','feb','mar','abr','may','jun',
	'jul','ago','sep','oct','nov','dic'],
	dayNames: ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'],
	dayNamesShort: ['dom','lun','mar','mié','jue','vie','sáb'],
	dayNamesMin: ['D','L','M','X','J','V','S'],
	weekHeader: 'Sm',	
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};