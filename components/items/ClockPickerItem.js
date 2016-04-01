/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	ClockPicker v 1.0 - a jQuery Ui extension
	Licences: MIT & GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com].
*/
Components.ClockPicker.prototype.init = function(dataObj) {
    this.type = 'ClockPicker';
	this.config = {
		id: "ClockPicker-"+ Math.round(Math.random() * 2000),
        container: $('body'),      
        value: "",
        alignText: "left",
        name: "name-" + Math.round(Math.random() * 2000),
        width: -1,
        x: -1,
        y: -1,
        enabled: true,
		buttonPosition:'left',
        readOnly: false,
        CodeHelper:'',
        hidden: false,
		state:'default',
		validar:'',
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
	
	this.id = this.config.id;
    this.TextField = '';
    this.name=this.config.name;
	this.config.id = "ClockPicker-"+ Math.round(Math.random() * 2000);
    this.config.format = '00:00:00'; //formatos admitidos en: http://api.jqueryui.com/datepicker/#utility-formatDate
    this.config.listeners.select = function(field, time){};    
    this.className = "ClockPicker";
    this.dateCurrent = null;
	
//	formatDate
}
//##############################################################################
Components.ClockPicker.prototype.create = function() {
	//creamos  un input [textfield con addon]
	var  Place = new Date();
	this.TextField = Components.create('TextField',{
			placeholder:'00:00:00',
			container:this.config.container,
			width: '100%',
			state:this.config.state,
			addon:{
				addonType: 'button',
				state:this.config.state,
				position:this.config.buttonPosition,
				icon:{
					type:'fa',
					class:'fa-clock-o',
					},
				tooltip:'Info',	  
				handler: function(event) {
					$.clockpicker._showClockpicker(event.data.OBJ.parent.divInput[0]);
					this.config.state="";
				}  
				},
		
		});
		if (this.config.width!=-1){
			this.TextField.zoneInput.css('width',this.config.width);
		}
		//se activa el funcionamiento de datepicker
		this.TextField.divInput.data('ClockPicker',this);
		this.TextField.divInput.clockPicker({      
			showButtonPanel: true,
			timeFormat:this.config.format,			
			beforeShow: this.SetStatusPicker
		});
       // this.divContainer.append('<div class="buttonCalendar"></div>');
        if(this.config.value != "")         
			this.TextField.setValue(this.config.value);
		else
			this.TextField.setValue("");
		
		this.setControls();
		//this.setReadOnly(this.config.readOnly);
	
	return this ;
}
//##############################################################################
Components.ClockPicker.prototype.SetStatusPicker = function(input,pickerObj) {
    pickerObj.dpDiv.removeClass('error').removeClass('highlight').removeClass('active').removeClass('info').removeClass('warning').removeClass('default');
    pickerObj.dpDiv.addClass($(input).data('ClockPicker').config.state);
	 /*pickerObj.dpDiv.removeClass($(input).data('DatePicker').config.state);
	 pickerObj.dpDiv.addClass($(input).data('DatePicker').config.state);*/
	
}
//##############################################################################
Components.ClockPicker.prototype.setControls = function() {
	this.TextField.divInput.unbind('click');
    //Components.InputField.prototype.setControls.call(this);
    
    this.btnTime = $('.buttonTime', this.divContainer);
    this.btnTime.bind("mousedown", {OBJ:this}, function(event) {
        if(event.data.OBJ.config.enabled) {
            $(this).addClass('clicked');
            event.data.OBJ.divInput.click();
        }
    });
    this.btnTime.bind("mouseup", {OBJ:this}, function(event) {
        $(this).removeClass('clicked');
    });
}
//##############################################################################
Components.ClockPicker.prototype.setValue = function(value) {
    this.config.value = value;
    if(value != "") {
        this.TextField.divInput.val($.clockPicker.formatDate(this.config.format, new Date(this.config.value.split(/[- :]/))));
		this.dateCurrent = new Date(this.config.value.split(/[- :]/));
    }
    else {
        this.TextField.divInput.val("");
		this.dateCurrent = "";
    }
}
//##############################################################################
Components.ClockPicker.prototype.getValue = function() {
    //return this.dateCurrent;
	return this.TextField.getValue();
}
//-------------------
Components.ClockPicker.prototype.show = function() {
    //Show Component
}
//##############################################################################
Components.ClockPicker.prototype.setReadOnly = function(readOnly) {
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
//enviando configuraciones personalizadas directamente al widget

/*
$.clockPicker.regional['es'] = {
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
	yearSuffix: ''};*/