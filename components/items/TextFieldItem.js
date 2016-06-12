/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	TextField v 1.0 - a jQuery Ui extension
	Licences: MIT & GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com].
*/
Components.TextField.prototype.init = function(dataObj) {
	 this.type = 'TextField';
    this.config = {
		id: "TextField-"+ Math.round(Math.random() * 2000),	
		parent:'',							//se usa especialmente cuando es parte de un form
        container: $('body'),				//	
		placeholder:"",						//Texto de ayuda inicial, se dibuja dentro del contenedor,
		state:'default',	
		alignText: "left",
		width: -1,
		height: -1,
		cols:10,
		css:new Array(),
        value: "",
		name:'',
        allowBlank: true,
        enabled: -1,					//controlar el atributo  disabled/enabled del text input
        readOnly: false,
        CodeHelper:'',
        hidden: false,
		validar:'',
		icon: {
				type:'none',		//tipos posibles fontawesome y image
				image : '',
				position:'left',
				class:'',
				color:'default',
				animate:false,
				creado:false,		//una vez creado no hacerlo por segunda vez.
		},
		addon: {
				addonType:'none',
				position:'left',
				class:'',
				creado:false,		//una vez creado no hacerlo por segunda vez.
		},
        listeners: {
            specialKey: function(obj, event){},
            change: function(obj, newValue, oldValue){}, //Fires just before the field blurs if the field value has changed.
			onValidateSucess: function(event){},
			onValidateFail: function(event){},
			click: function(event){},
			keyup: function(event){},
        }
		
    };
    this.className = 'textField';
	for(var i in dataObj) {
        if(this.config[i] != undefined){
            if((i == "listeners")||(i == "label")||(i == "input")||(i == "icon")||(i=='addon')) {
                for(var j in dataObj[i]) {
                    this.config[i][j] = dataObj[i][j];
                }
            }
            else
                this.config[i] = dataObj[i];
        }
    }
	//control de enabled desde el componente hacia los padres
	if(this.config.enabled==-1){
		if(this.config.parent!=''){
			this.enabled=this.config.parent.getConfig('enabled');
			if(this.enabled==null){
				this.enabled = true;
			}
		}else{
			this.enabled=true;
		}
	}
	else
		this.enabled=this.config.enabled;
	console.log(this.enabled);
    //cuando el input tiene un addon, obligatoriamente tiene que ser del 100% de su contenedor,sino se descuadran los estilos.
	if(this.config.addon.addonType!='none'){
		this.config.width = '100%';
	}
	if (this.config.icon.type=='fontawesome'){
		this.config.icon.type = 'fa';
	}
	if (this.config.icon.type=='glipicon'){
		this.config.icon.type = 'glyphicon';
	}
	this.CodeHelper = this.config.CodeHelper;
    this.parent = this.config.parent;
	this.id = this.config.id;
    this.container = this.config.container;
    this.listeners = this.config.listeners;
    this.name = this.config.name;
    this.styleLabel = this.config.styleLabel;	
    this.divLabel = null;
    this.divInput = null;
	this.validado = null;
	this.icoclass = null; 
	this.DIconfayglip = $('<i class="scort-icon '+this.config.state+'" style="color:'+this.config.icon.color+'"></i>');
	this.DIconimg = $('<img class ="ImageZone scort-icon" src="'+this.config.icon.image+'">');
}
//------------------------------------------------------------------------------------------------------------------------------------------------------//
Components.TextField.prototype.create = function(setControls) {
    this.divContainer = this.config.container
   	this.zoneInput = $('<span class="inputSpan"><input class="'+this.config.state+'" type="text" size="20"/></span>');
	this.divContainer.append(this.zoneInput);
    this.divInput = $('input', this.zoneInput);
	 this.divInput.css("width", '100%');
	if(this.config.placeholder!=""){
		 this.divInput.attr("placeholder", this.config.placeholder);
	}	 
	this.createIcon();
	//agregar el addon si es que tiene addon
	this.createAddon(this.config.addon);
   
    if(this.config.label == "") {
        this.divLabel.hide();
    }

	//para enviar Custom Css al componente
	for(var i in this.config.css) {
		this.zoneInput.css(i, this.config.css[i]);
	}   
    if(this.config.width != -1) {
        this.zoneInput.css("width", this.config.width);
    }
	 if(this.config.height != -1) {
        this.zoneInput.css("height", this.config.height);
    }
	
    if(this.config.allowBlank) {
        this.divInput.val(this.config.value);
    }
    if(this.config.name != "") {
        this.divInput.prop("name", this.config.name);
    }
    this.config.align?this.divInput.css('float', this.config.align):'nada';
    //this.setReadOnly(this.config.readOnly);
	//si mas de 2 input comparten el contenedor por autocalcCols, entonces cada uno agregara algo de css, no repetir.
	for(var i in this.config.css) {
		this.divContainer.css(i, this.config.css[i]);
	} 
	this.enabled?this.enable():this.disable();
	setControls = (setControls == undefined) ? true : setControls;
    if(setControls) this.setControls();
    
     if(this.config.hidden){
		this.zoneLabel.hide();
		this.zoneInput.hide();
	 }
	return this; 
}
//#############################################################################################################################################
Components.TextField.prototype.createAddon= function(Addon){

if ((Addon.addonType!='none')&&(!this.config.addon.creado)){
	//tomar todos los datos de Addon y ponerlos en la config de addon de el componente.
		for(var i in Addon) {
			this.config.addon[i] = Addon[i];
		}
		this.zoneInput.addClass('input-group');
		switch(Addon.addonType){	
		case 'icon':
			this.addon = $('<span class="input-addon addon'+Addon.position+' '+this.config.state+' "><i class="scort-icon '+Addon.type+' '+Addon.class+' '+this.config.state+'"></i></span>');
			(this.config.addon.position=='right')?this.zoneInput.append(this.addon):this.zoneInput.prepend(this.addon);
		break;
		case 'button':
			this.createButtonAddon();
			this.config.addon.creado = true;
		break;
		case 'spinner':
			this.createSpinerAddon();
			this.config.addon.creado = true;
		break;	
		}

	}
}
//#############################################################################################################################################
Components.TextField.prototype.createIcon= function(){
//agregar iconos a los input
	if((this.config.icon.type != "none")&&(!this.config.icon.creado)){
		switch(this.config.icon.type){
			case 'fontawesome':
			case 'fa':
			this.zoneIcon = this.DIconfayglip;
			this.zoneIcon.addClass('fa');
			this.zoneIcon.addClass(this.config.icon.class);
			
			if(this.config.icon.animate!=false)
			{
				this.zoneIcon.addClass('fa-spin')
			}
			break;
			case 'glipicon':
			case 'glyphicon':
			this.zoneIcon = this.DIconfayglip;
			this.zoneIcon.addClass('glyphicon');
			this.zoneIcon.addClass(this.config.icon.class);
			
			if(this.config.icon.animate!=false)
			{
				this.zoneIcon.addClass('fa-spin')
			}
			break;
			
			case 'image': 
			this.zoneIcon = this.DIconimg;
			if(this.config.icon.animate!=false)
				{
				this.zoneIcon.addClass('fa-spin')
				}
			
			this.ImageElement =  $('.ImageZone', this.zoneIcon); 
			break;
		}
		this.zoneInput.append(this.zoneIcon);
		this.zoneInput.addClass('input-icon')
		
		if (this.config.icon.position=='right'){
			this.zoneInput.addClass('Iconright');
		};
		this.config.icon.creado = true;
	}	
}
//-------------------------------------------------------------------------------------------------------------------------------------
Components.TextField.prototype.createButtonAddon= function(){
	this.zoneInput.append('<span class="input-addon-button"></span>');
			this.config.addon.container = $('.input-addon-button',this.zoneInput);
			this.config.addon.scale = 'inputAddon';
			if (typeof(this.config.addon.state )== 'undefined'){
		       this.config.addon.state = this.config.state;
			}
			this.config.addon.CodeHelper = this;
			this.config.addon.parent = this;
			this.addon = Components.create('Button',this.config.addon);
			if(typeof(this.config.addon.text)=='undefined'){
				this.addon.divIcon.css('width','19px');
			}
			(this.config.addon.position=='left')?this.zoneInput.prepend(this.config.addon.container):'nada';
}
//-------------------------------------------------------------------------------------------------------------------------------------
Components.TextField.prototype.createSpinerAddon= function(){
	this.zoneInput.append('<span class="input-addon-button"></span>');
			this.config.addon.container = $('.input-addon-button',this.zoneInput);
			this.config.addon.scale = 'inputAddon';
			if (typeof(this.config.addon.state )== 'undefined'){
		       this.config.addon.state = this.config.state;
			}
			this.config.addon.scale = 'spiner';
			this.config.addon.parent = this;
			this.addon= new Array();
			this.config.addon.icon= {type:'fa',class:'fa-angle-up'};			//up
			this.addon[0] = Components.create('Button',this.config.addon);
			this.config.addon.icon= {type:'fa',class:'fa-angle-down'};		//down
			this.addon[1] = Components.create('Button',this.config.addon);
            this.addon[1].divContainer.css('margin-top','2px');
            $('.buttonItem-icon-left',this.config.addon.container).removeClass('buttonItem-icon-left'); 
			$('i',this.config.addon.container).css('font-weight', 'bolder'); 
			(this.config.addon.position=='left')?this.zoneInput.prepend(this.config.addon.container):'nada';
}

//-----------------------------------------------------------------------------------------------------------------
Components.TextField.prototype.setReadOnly = function(readOnly) {
    if(readOnly) {
        this.divInput.prop("readOnly", "readOnly");
        this.disable();
    }
    else {       
		this.divInput.removeAttr("readOnly");
        this.enable();
    }
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	
Components.TextField.prototype.disable = function() {
	//change input state to disable, el componente ya no sera editable
	this.enabled=false;
	this.divInput.attr('disabled', true);
	//console.log("funcion disable "+this.enabled);
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	
Components.TextField.prototype.enable = function() {
	//change input state to enable, el componente sera editable
	this.enabled=true;
	this.divInput.attr('disabled', false);
	//console.log("funcion enable "+this.enabled);
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	
Components.TextField.prototype.setControls = function() {
    this.zoneInput.bind("click", {OBJ:this}, function(event) {
            if(event.data.OBJ.enabled){
				event.data.OBJ.config.listeners.click(event);
			}
    });
    //evento keypress
	this.divInput.keypress({OBJ:this}, function(event) {
        event.data.OBJ.listeners.specialKey(event.data.OBJ, event);
    });
	//evento blur
	this.divInput.blur({OBJ:this}, function(event) {
        if(event.data.OBJ.config.validar['requerido']!== undefined )			
			event.data.OBJ.Validar(event);
    });
	//evento keyup
	this.divInput.keyup({OBJ:this}, function(event) {
		if(event.data.OBJ.listeners.keyup || false)
			event.data.OBJ.listeners.keyup(event);
		
		if(event.data.OBJ.config.validar!="")			
		{
			//console.log("entre al if para despues validar");
			event.data.OBJ.Validar(event);}
		
	});
}
//##############################################################################
Components.TextField.prototype.Validar = function(event) {
	//console.log("validar");
   if(this.config.validar['requerido'])
		this.config.validar['elemento'] = this.divInput;
	if(this.validador){	
	this.validado = this.validador.Validar(this.divInput.val(),this.config.validar);
	if(!this.validado){
		this.listeners.onValidateFail(event);
	}else{
		this.listeners.onValidateSucess(event);
	}
   }
}
//##############################################################################
Components.TextField.prototype.changeInputState = function(state){
	//cambiamos el estado del input entre sus colores definidos
	this.divInput.removeClass(this.config.state);
	this.divInput.addClass(state); 
	this.config.state = state;
}
//-----------------------------------------------------------------------------------------------------------------
Components.TextField.prototype.changeAddonState = function(state){
	$('.buttonItem-inputAddon',$('span', $('span',this.divContainer))).removeClass('ui-state-'+this.config.state);
	$('.buttonItem-inputAddon',$('span', $('span',this.divContainer))).addClass('ui-state-'+state); 
	this.config.addon.state = state;
}
//---------------------------------------------------------------------------------------------------
Components.TextField.prototype.changeIcon = function(iconoObj){
	//cambia el icono que se dibuja internamente dentro de los input
	//realiza solo el cambio visual no cambia los valores de configuracion del componente.
(iconoObj.type == 'fontawesome')?this.config.icon.type = 'fa':'nada'; 
(iconoObj.type == 'glipicon')?this.config.icon.type= 'glyphicon':'nada';
var ProcessIco = '';
var ProcessAddon= '';
ProcessAddon=this.config.addon;
ProcessIco=this.config.icon;				//ProcessIco es el icono que se va procesar.
	 var cambios = new Array();
	 //analizando entrada de datos
	 if((ProcessIco.type=='none') && (typeof(iconoObj.type!='undefined') && (iconoObj.type!='none')))
	 { iconoObj.position ? iconoObj.position= iconoObj.position : iconoObj.position=this.config.icon.position;
	    cambios.push('crearicono');			 
	 } 
	else if(ProcessIco.type != "none"){
	     if((iconoObj.position)&&(ProcessIco.position!=iconoObj.position)){
		 iconoObj.type ? iconoObj.type= iconoObj.type : iconoObj.type=ProcessIco.type; 
		 cambios.push('position');
	   }  
	 if((ProcessIco.type!=iconoObj.type)&&((ProcessIco.type == 'image')||(iconoObj.type == 'image'))){ //solo cuando es un cambio drastico de image a fa o de glip // de glip o fa a image
	      cambios.push('type');
		  }
	 else if((iconoObj.type == 'image')){
	    cambios.push('cambiodeimagen');//de imagen a imagen 
	 }	
   if((typeof (iconoObj.color)!= 'undefined')&&(ProcessIco.color!=iconoObj.color)){
	      cambios.push('color');
	}  
   if((typeof(iconoObj.class)!='undefined')&&((ProcessIco.type =='fa')||(ProcessIco.type =='glyphicon'))&&(ProcessIco.class!=iconoObj.class)){
	      cambios.push('class'); // afecta a cambios entre fa y glip , como tambien solo cambio de class
	}
 }	
//ejecutando cambios	 
		for(var i in cambios) {
		switch (cambios[i])
		{
		  case 'position':  
		    (iconoObj.position== "left") ? this.zoneInput.removeClass('Iconright') : this.zoneInput.addClass('Iconright');
			ProcessIco.position = iconoObj.position;
		break;  
		  case 'type':
		   {    if((iconoObj.type == 'fa' )||(iconoObj.type=='glyphicon')) {
				 this.divIcon.remove();
				 this.divIcon=this.DIconfayglip;
				 this.divIcon.addClass(iconoObj.type);
                 this.divIcon.addClass(iconoObj.class); 
				 this.divContainer.removeClass(ProcessIco.position);
				 this.divContainer.addClass(iconoObj.position);	
				 (iconoObj.position== "right") ? this.divContainer.append(this.divIcon) : this.divContainer.prepend(this.divIcon); 
			 }
		   else if(iconoObj.type == 'image') {
				     this.divIcon.remove();
					 this.divIcon = this.DIconimg;
					 this.divIcon.attr("src", iconoObj.image);
					  iconoObj.position== "right" ? this.divContainer.append(this.divIcon) : this.divContainer.prepend(this.divIcon);
				 }	  
			}
		  break;	  
		  case 'color':
		          iconoObj.color== 'default' ? this.zoneIcon.css('color', 'rgb(85, 85, 95)') : this.zoneIcon.css('color', iconoObj.color);
		  break;	  
		  case 'class': // afecta a cambios entre fa y glip , como tambien solo cambio de class
					  this.zoneIcon.removeClass(ProcessIco.class);
					  this.zoneIcon.removeClass(this.config.icon.class);
					  this.zoneIcon.addClass(iconoObj.class);                       /**/ 
					  if (ProcessIco.type != iconoObj.type){
						this.zoneIcon.removeClass(ProcessIco.type);
						this.zoneIcon.addClass(iconoObj.type); 
					 }
					 ProcessIco.class =  iconoObj.class;					 
		  break;	  		  
		  case 'cambiodeimagen':
		  this.divIcon.attr("src", iconoObj.image);
		  break;	  
		  case 'crearicono':		//si no tenia icono anteriormente
		   if((iconoObj.type == 'fa' )||(iconoObj.type=='glyphicon')||(iconoObj.type == 'image')) {
			   for(var i in iconoObj) {
					if(this.config.icon[i] != undefined){
							this.config.icon[i] = iconoObj[i];
					}
				}
			   this.createIcon();				
			}
		 break;	
         
         case 'crearaddon':
		this.zoneInput.addClass('input-group');
		 if(iconoObj.addonType == 'icon' ) {
		 this.addon.addClass(iconoObj.addonType);
         this.addon.addClass(iconoObj.class);
		 }
		 if(iconoObj.addonType == 'button'){
		 this.createButtonAddon();}
		 if(iconoObj.addonType == 'spinner'){
		  this.createSpinerAddon(); }
		break;
        }		 
	}	
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.TextField.prototype.changeAddon = function(addonObj){
//si el addon es un button, entonces la única opcion que se manejara aqui es la de la posición, todas las demás pueden ser controladas 
//enviando la peticion a las funciones de buttonitem.
	console.log('si llega ahi');
	if(this.config.addon.addonType!='none'){					//si hay un addon para cambiar
		if(typeof(addonObj.addonType)=='undefined'){			
			addonObj.addonType = this.config.addon.addonType;   //si no se especifico el tipo de addon, se asume el que tiene actualmente el componente
		}
		ProcessAddon=this.config.addon;	
		var cambios = new Array();
		switch (this.config.addon.addonType){
			case 'button':
			if((addonObj.position)&&(ProcessAddon.position!=addonObj.position)){	//cambio de posicion se efectua directamente
				ProcessAddon.position = addonObj.position;
				(ProcessAddon.position=='left')?this.zoneInput.prepend(ProcessAddon.container):this.zoneInput.append(ProcessAddon.container);
			}
			//si el cambio es en el icono eso lo procesara directamente el boton.
				this.addon.changeIcono(1, addonObj.icon); 
				//cambio de status de boton eso lo procesara directamente el boton
				
				if(addonObj.state != this.addon.config.state){
				this.addon.changeColor(1,addonObj.state);
				}
			
			break;
			case 'icon':
			if((addonObj.position)&&(ProcessAddon.position!=addonObj.position)){    //cambio de posicion se efectua directamente
				ProcessAddon.position = addonObj.position;
				(this.config.addon.position=='right')?this.zoneInput.append(this.addon):this.zoneInput.prepend(this.addon);
			} 
			break;
		} 
	}
	
	/*
	addon = {
				addonType: 'button',
		        position:'left',
				icon:{
					type:'fontawesome',
					class:'fa-cogs',
					},
				tooltip:'Error',	  
				handler: function(event) {
					alert('Error');
				}
			},
	addon = {
				addonType: 'icon',
				type:'fa',
				class:'fa-cogs',
				position:'right'
				},		
	*/
	//cambia el icono que se dibuja internamente dentro de los input
	//realiza solo el cambio visual no cambia los valores de configuracion del componente.
/*(addonObj.type == 'fontawesome')?this.config.icon.type = 'fa':'nada'; 
(addonObj.type == 'glipicon')?this.config.icon.type= 'glyphicon':'nada';
var ProcessIco = '';
var ProcessAddon= '';
ProcessAddon=this.config.addon;
ProcessIco=this.config.icon;				//ProcessIco es el icono que se va procesar.
	 var cambios = new Array();
	 //analizando entrada de datos
	 if((ProcessIco.type=='none') && (typeof(addonObj.type!='undefined') && (addonObj.type!='none')))
	 { addonObj.position ? addonObj.position= addonObj.position : addonObj.position=this.config.icon.position;
	    cambios.push('crearicono');			 
	 } 
	else if(ProcessIco.type != "none"){
	     if((addonObj.position)&&(ProcessIco.position!=addonObj.position)){
		 addonObj.type ? addonObj.type= addonObj.type : addonObj.type=ProcessIco.type; 
		 cambios.push('position');
	   }  
	 if((ProcessIco.type!=addonObj.type)&&((ProcessIco.type == 'image')||(addonObj.type == 'image'))){ //solo cuando es un cambio drastico de image a fa o de glip // de glip o fa a image
	      cambios.push('type');
		  }
	 else if((addonObj.type == 'image')){
	    cambios.push('cambiodeimagen');//de imagen a imagen 
	 }	
   if((typeof (addonObj.color)!= 'undefined')&&(ProcessIco.color!=addonObj.color)){
	      cambios.push('color');
	}  
   if((typeof(addonObj.class)!='undefined')&&((ProcessIco.type =='fa')||(ProcessIco.type =='glyphicon'))&&(ProcessIco.class!=addonObj.class)){
	      cambios.push('class'); // afecta a cambios entre fa y glip , como tambien solo cambio de class
	}
 }	*/
//ejecutando cambios	 
		for(var i in cambios) {
		switch (cambios[i])
		{
		  case 'position':  
		    (addonObj.position== "left") ? this.zoneInput.removeClass('Iconright') : this.zoneInput.addClass('Iconright');
			ProcessIco.position = addonObj.position;
		break;  
		  case 'type':
		   {    if((addonObj.type == 'fa' )||(addonObj.type=='glyphicon')) {
				 this.divIcon.remove();
				 this.divIcon=this.DIconfayglip;
				 this.divIcon.addClass(addonObj.type);
                 this.divIcon.addClass(addonObj.class); 
				 this.divContainer.removeClass(ProcessIco.position);
				 this.divContainer.addClass(addonObj.position);	
				 (addonObj.position== "right") ? this.divContainer.append(this.divIcon) : this.divContainer.prepend(this.divIcon); 
			 }
		   else if(addonObj.type == 'image') {
				     this.divIcon.remove();
					 this.divIcon = this.DIconimg;
					 this.divIcon.attr("src", addonObj.image);
					  addonObj.position== "right" ? this.divContainer.append(this.divIcon) : this.divContainer.prepend(this.divIcon);
				 }	  
			}
		  break;	  
		  case 'color':
		          addonObj.color== 'default' ? this.zoneIcon.css('color', 'rgb(85, 85, 95)') : this.zoneIcon.css('color', addonObj.color);
		  break;	  
		  case 'class': // afecta a cambios entre fa y glip , como tambien solo cambio de class
					  this.zoneIcon.removeClass(ProcessIco.class);
					  this.zoneIcon.removeClass(this.config.icon.class);
					  this.zoneIcon.addClass(addonObj.class);                       /**/ 
					  if (ProcessIco.type != addonObj.type){
						this.zoneIcon.removeClass(ProcessIco.type);
						this.zoneIcon.addClass(addonObj.type); 
					 }
					 ProcessIco.class =  addonObj.class;					 
		  break;	  		  
		  case 'cambiodeimagen':
		  this.divIcon.attr("src", addonObj.image);
		  break;	  
		  case 'crearicono':		//si no tenia icono anteriormente
		   if((addonObj.type == 'fa' )||(addonObj.type=='glyphicon')||(addonObj.type == 'image')) {
			   for(var i in addonObj) {
					if(this.config.icon[i] != undefined){
							this.config.icon[i] = addonObj[i];
					}
				}
			   this.createIcon();				
			}
		 break;	
         
         case 'crearaddon':
		this.zoneInput.addClass('input-group');
		 if(addonObj.addonType == 'icon' ) {
		 this.addon.addClass(addonObj.addonType);
         this.addon.addClass(addonObj.class);
		 }
		 if(iconoObj.addonType == 'button'){
		 this.createButtonAddon();}
		 if(iconoObj.addonType == 'spinner'){
		  this.createSpinerAddon(); }
		break;
        }		 
	}	
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.TextField.prototype.setValue = function(value) {
    this.config.value = value;
    this.divInput.val(value);
	this.Validar();
}
//##############################################################################
Components.TextField.prototype.getValue = function() {
	return this.divInput.val();
}
