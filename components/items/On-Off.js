/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	onoffswitch v 1.0 - a jQuery Ui extensión
	Licences: GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com].
	* Este componente contiene partes del código original de jQuery-switchButton https://github.com/olance/jQuery-switchButton
*/
Components.onoffswitch.prototype.init = function(dataObj) {
	 this.type = 'onoffswitch';
    this.config = {
		CodeHelper:'',
		id: "onoffswitch-"+ Math.round(Math.random() * 2000),	
		name: "onoffswitch-"+ Math.round(Math.random() * 2000),	
		parent:'',							//se usa especialmente cuando es parte de un form
        container: $('body'),				//donde se dibujara	
		state:'default',	
		scale:'minier',
		enabled: null,					//controlar el atributo  disabled/enabled del text input
		readOnly:null,
		checked: false,			// State of the switch
		show_labels: true,			// Should we show the on and off labels?
		labels_placement: "both", 	// Position of the labels: "both", "left" or "right"
		on_label: "ON",				// Text to be displayed when checked
		off_label: "OFF",			// Text to be displayed when unchecked
		width: -1,					// Width of the button in pixels
		height: -1,					// Height of the button in pixels
		button_width: -1,			// Width of the sliding part in pixels
		clear: true,				// Should we insert a div with style="clear: both;" after the switch button?
		clear_after: null,		    // Override the element after which the clearing div should be inserted (null > right after the button)
		on_callback: undefined,		//callback function that will be executed after going to on state
		off_callback: undefined,		//callback function that will be executed after going to off state
        listeners: {
			on_callback: function(obj, event){},  //callback function that will be executed after going to on state
			off_callback: function(obj, event){}, //callback function that will be executed after going to off state
            change: function(obj, newValue, oldValue){}, //Fires just before the field blurs if the field value has changed.
			click: function(event){},
        }
		
    };
    this.className = 'OnOff';
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

	this.CodeHelper = this.config.CodeHelper;
    this.parent = this.config.parent;
	this.id = this.config.id;
    this.container = this.config.container;
    this.listeners = this.config.listeners;
    this.name = this.config.name;
	
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
	}
	console.log(this.enabled);
	// if(this.config.readOnly==null){
		// if(this.config.parent!=''){
			// this.readOnly=!this.config.parent.getConfig('enabled');
			// if(this.readOnly==null){
				// this.readOnly = false;
			// }
		// }else{
			// this.readOnly=false
		// }
	// }
	// console.log(this.readOnly);
	
	switch(this.config.scale){
		           case 'minier':
					this.config.width = 27,
					this.config.button_width =14
					break;
					case 'mini':
					this.config.width = 34,
					this.config.button_width =18
					break;
					case 'small':
					this.config.width = 43,
					this.config.button_width =22
					break;
					case 'medium':
					this.config.width = 55,
					this.config.button_width =26
					break;
					case 'large':
					this.config.width = 69,
					this.config.button_width =30
					break;
				}
}
//------------------------------------------------------------------------------------------------------------------------------------------------------//
Components.onoffswitch.prototype.create = function() {
    Components.Component.prototype.create.call(this);
	this.divContainer.addClass(this.config.state);
	this.divContainer.addClass(this.config.scale);
	this.zoneInput = $('<input type="checkbox">');
	this.element = this.zoneInput;						//buscando compatibilidad con el código del componente original
	this.divContainer.append(this.zoneInput);
    this.divInput =this.zoneInput;
	this.zoneInput.hide(); 
	
    
     
	 // Create our objects: two labels and the button
            this.off_label = $("<span>").addClass("switch-button-label");
            this.on_label = $("<span>").addClass("switch-button-label");

            this.button_bg = $("<div>").addClass("switch-button-background");
            this.button = $("<div>").addClass("switch-button-button");

            // Insert the objects into the DOM
            this.off_label.insertAfter(this.element);
            this.button_bg.insertAfter(this.off_label);
            this.on_label.insertAfter(this.button_bg);

            this.button_bg.append(this.button);
	if(this.config.checked){
		this.element.attr('checked', true);
		
		/*switch(this.config.scale){
					case 'mini':
					this.button.css('left','34px');
					this.button.css('height','19px');
					break;
					case 'small':
					this.button.css('line-height','48px');	
					break;
					case 'medium':
					this.button.css('line-height','54px');	
					break;
					case 'large':
					this.button.css('line-height','58px');	
					break;
				}*/
				
		this.button.css('left',this.config.width - this.config.button_width);
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
	
    if(this.config.name != "") {
        this.divInput.prop("name", this.config.name);
    }
    // this.setReadOnly(this.readOnly);
	//si mas de 2 input comparten el contenedor por autocalcCols, entonces cada uno agregara algo de css, no repetir.
     if(this.config.hidden){
		this.zoneLabel.hide();
		this.zoneInput.hide();
	 }
	 //this.enabled?this.enable():this.disable();
	 this.refresh();				//codigo del componente original  https://github.com/olance/jQuery-switchButton
	 this.setControls();
	return this;
}
//#############################################################################################################################################
Components.onoffswitch.prototype.refresh = function() {
            // Refresh labels display
            if (this.config.show_labels) {
                this.off_label.show();
                this.on_label.show();
            }
            else {
                this.off_label.hide();
                this.on_label.hide();
            }

            // Move labels around depending on labels_placement option
            switch(this.config.labels_placement) {
                case "both":
                {
                    // Don't move anything if labels are already in place
                    if(this.button_bg.prev() !== this.off_label || this.button_bg.next() !== this.on_label)
                    {
                        // Detach labels form DOM and place them correctly
                        this.off_label.detach();
                        this.on_label.detach();
                        this.off_label.insertBefore(this.button_bg);
                        this.on_label.insertAfter(this.button_bg);

                        // Update label classes
                        this.on_label.addClass(this.config.checked ? "on" : "off").removeClass(this.config.checked ? "off" : "on");
                        this.off_label.addClass(this.config.checked ? "off" : "on").removeClass(this.config.checked ? "on" : "off");

                    }
                    break;
                }

                case "left":
                {
                    // Don't move anything if labels are already in place
                    if(this.button_bg.prev() !== this.on_label || this.on_label.prev() !== this.off_label)
                    {
                        // Detach labels form DOM and place them correctly
                        this.off_label.detach();
                        this.on_label.detach();
                        this.off_label.insertBefore(this.button_bg);
                        this.on_label.insertBefore(this.button_bg);

                        // update label classes
                        this.on_label.addClass("on").removeClass("off");
                        this.off_label.addClass("off").removeClass("on");
                    }
                    break;
                }

                case "right":
                {
                    // Don't move anything if labels are already in place
                    if(this.button_bg.next() !== this.off_label || this.off_label.next() !== this.on_label)
                    {
                        // Detach labels form DOM and place them correctly
                        this.off_label.detach();
                        this.on_label.detach();
                        this.off_label.insertAfter(this.button_bg);
                        this.on_label.insertAfter(this.off_label);

                        // update label classes
                        this.on_label.addClass("on").removeClass("off");
                        this.off_label.addClass("off").removeClass("on");
                    }
                    break;
                }

            }

            // Refresh labels texts
            this.on_label.html(this.config.on_label);
            this.off_label.html(this.config.off_label);

            // Refresh button's dimensions
            /*this.button_bg.width(this.config.width);
            this.button_bg.height(this.config.height);
            this.button.width(this.config.button_width);
            this.button.height(this.config.height);*/
}
//-----------------------------------------------------------------------------------------------------------------
Components.onoffswitch.prototype.toggleSwitch = function() {
           if(this.enabled){
           // if(!this.readOnly){
		   this.config.checked = !this.config.checked;
            var newLeft = "";
            if (this.config.checked) {
                // Update the underlying checkbox state
                this.element.prop("checked", true);
                this.element.change();
				
			   var dLeft = this.config.width - this.config.button_width;
                newLeft = "+=" + dLeft;

              //  var dLeft = this.config.width - this.config.button_width;
                newLeft = "+=" + dLeft;

                // Update labels states
                if(this.config.labels_placement == "both")
                {
                    this.off_label.removeClass("on").addClass("off");
                    this.on_label.removeClass("off").addClass("on");
                }
                else
                {
                    this.off_label.hide();
                    this.on_label.show();
                }
                this.button_bg.addClass("checked");
                //execute on state callback if its supplied
                if(typeof this.config.on_callback === 'function') this.config.on_callback.call(this);
            }
            else {
                // Update the underlying checkbox state
                this.element.prop("checked", false);
                this.element.change();
                newLeft = "-1px";

                // Update labels states
                if(this.config.labels_placement == "both")
                {
                    this.off_label.removeClass("off").addClass("on");
                    this.on_label.removeClass("on").addClass("off");
                }
                else
                {
                    this.off_label.show();
                    this.on_label.hide();
                }
                this.button_bg.removeClass("checked");
                //execute off state callback if its supplied
                if(typeof this.config.off_callback === 'function') this.config.off_callback.call(this);
            }
            // Animate the switch
            this.button.animate({ left: newLeft }, 250, "easeInOutCubic");
}
}

//-----------------------------------------------------------------------------------------------------------------
Components.onoffswitch.prototype.setReadOnly = function(readOnly) {
	if(readOnly) {
        this.divInput.prop("readOnly", "readOnly");
        this.disable();
	}
	else {       
		this.divInput.removeAttr("readOnly");
        this.enable();
    }
}
//-------------------------------------------------------------------------------------------------------------------
Components.onoffswitch.prototype.disable = function() {
	//change input state to disable, el componente ya no sera editable
	this.enabled=false;
	this.divInput.prop('disabled', true);
	// this.TextField.disable();
	//console.log("funcion disable "+this.enabled);
}
//-------------------------------------------------------------------------------------------------------------------	
Components.onoffswitch.prototype.enable = function() {
	//change input state to enable, el componente sera editable
	this.enabled=true;
	this.divInput.prop('disabled', false);
	// this.TextField.enable();
	//console.log("funcion enable "+this.enabled);
}
//-------------------------------------------------------------------------------------------------------------------
Components.onoffswitch.prototype.setControls = function() {
	 var self = this;
   this.button_bg.click(function(e) {
                e.preventDefault();
                e.stopPropagation();
                self.toggleSwitch();
                return false;
            });
    this.button.click(function(e) {
                e.preventDefault();
                e.stopPropagation();
                self.toggleSwitch();
                return false;
            });
	
	this.on_label.click(function(e) {
		if (self.config.checked && self.config.labels_placement === "both") {
			return false;
		}

		self.toggleSwitch();
		return false;
	});
	
	 this.off_label.click(function(e) {
                if (!self.config.checked && self.config.labels_placement === "both") {
                    return false;
                }

                self.toggleSwitch();
                return false;
            });
}

//##############################################################################
Components.onoffswitch.prototype.setValue = function(value) {
            if (this.config.checked == value) {
               // this.config.checked=value;
			   console.log(this.config.checked);
				return;
            }
		  if (this.config.checked != value){
		    console.log(this.config.checked);
			this.toggleSwitch();
			}			
}

//##############################################################################
Components.onoffswitch.prototype.getValue = function() {
	console.log(this.divInput);
	return this.divInput.is(":checked")
}
