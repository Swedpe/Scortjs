/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	Slider v 1.0 - a jQuery Ui extension
	Licences: MIT & GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com].
*/
Components.Slider.prototype.init = function(dataObj) {
    this.config = {
        container: $('body'),
        id: "slider-"+ Math.round(Math.random() * 2000),
        label: "",
        labelWidth: -1,
        value: -1,
        tooltip: "",
        icon: {
				type:'none',		//tipos posibles fontawesome y image
				class : '',
				//color:'',
			},
		state:'default',
        height: -1,
        width: -1,
		x: -1,
        y: -1,       
        increment: -1,
        minValue: 0,
        maxValue: 100,
        hidden: false,
        enabled: true,       
        listeners: {
            slide: function(event){}
        } 
    };
    
     for(var i in dataObj) {
        if(this.config[i] != undefined) {
            if(i == "icon") {
                for(var j in dataObj[i]) {
                    this.config[i][j] = dataObj[i][j];
                }
            }
            else
                this.config[i] = dataObj[i];
        }
    }
    
    this.id = this.config.id;
    this.container = this.config.container;
    this.className = "sliderItem";
    this.divLabel = null;
    this.divSlaider = null;
    this.tooltip = null; 
	
	if(this.config.icon.type== 'fontawesome')
	{this.config.icon.type= 'fa'; }
	else if(this.config.icon.type== 'glipicon')
	{this.config.icon.type= 'glyphicon'; }
    
}
//##############################################################################
Components.Slider.prototype.create = function() {
    Components.Component.prototype.create.call(this);
    this.divContainer.append('<span class="labelTextField">'+this.config.label+'</span><span class="tooltip"></span><div class="slider '+this.config.state+'"></div> ');   
    this.divLabel = $('.labelTextField', this.divContainer); 
    this.divSlaider= $('.slider', this.divContainer); 
    this.tooltip = $('.tooltip', this.divContainer); 
    this.tooltip.show();
    var $this=this;
    this.divSlaider.slider(
        {
               
            value:this.config.value,
            min: this.config.minValue,
            max: this.config.maxValue,
			//change: refreshSwatch,
            step: this.config.increment,
            slide: function( event, ui ) {
               var value = (ui.value*$this.divSlaider.width())/100; 
                $this.config.value= ui.value;
                if(ui.value!=0)
                       $this.tooltip.css('left', value+50).text(ui.value+"%");           
                else
                       $this.tooltip.css('left', value+35).text(ui.value+"%");                
            },
			//event.data.OBJ.config.listeners.slide(event);
			
			orientation: "horizontal",
             range: "min",
            start: function(event,ui) {
                $this.tooltip.fadeIn('fast');
            },
            stop: function(event,ui) {
                $this.tooltip.fadeOut('fast');
            }
        }
     ); 
	 if(this.config.icon!= 'none'){
    $('.slider .ui-slider-handle',this.divContainer).append('<i class="'+this.config.icon.type+' '+this.config.icon.class+'" style="padding: 1px 0 0 2px;color: '+this.config.icon.color+';"></i>');
    }
	if(this.config.x != -1) {
        this.setPositionX(this.config.x);
    }
    if(this.config.y != -1) {
        this.setPositionY(this.config.y);
    }
    if(this.config.labelWidth != -1) {
        this.divLabel.css("width", this.config.labelWidth);
    }
    if(this.config.width != -1) {
        this.divSlaider.css("width", this.config.width);
    }

    
    if(this.config.tooltip != "") {
        this.divContainer.prop("alt", this.config.tooltip);
        this.divContainer.prop("title", this.config.tooltip);
    }    
    //this.config.enabled ? this.enable() : this.disable();    
    this.setControls();
	return this;
}
//##############################################################################
Components.Slider.prototype.setControls = function() {
    var $this=this;
    if(this.config.listeners.change == undefined) {
        this.config.listeners.change = function(event, ui){};
    }
    
    $(this.divSlaider).slider({        
            change: function(event, ui ) {
                $this.config.listeners["change"](event,ui);
            }
    });
}
//##############################################################################
Components.Slider.prototype.setValue = function(value) {
    this.config.value = value;
    this.divSlaider.slider( "value" , [value] )
}
//##############################################################################
Components.Slider.prototype.getValue = function() {  
   return this.config.value;
}
//##############################################################################
Components.Slider.prototype.setLabel = function(label) {
    this.config.label = label;
    this.divLabel.html(label);
}
//##############################################################################
Components.Slider.prototype.show = function() {
    if(!this.config.hidden)
        Components.Component.prototype.show.call(this);
    else
        this.hide();
	  return this;
}
//##############################################################################
Components.Slider.prototype.setVisible = function(visible) {
    this.config.hidden = !visible;
    this.show();
}
//##############################################################################
Components.Slider.prototype.changeState = function(newState) {
   /*this.divInput.removeClass(this.config.state);
	this.divInput.addClass(state);*/
    $('.slider',this.divContainer).removeClass(this.config.state);
	$('.slider',this.divContainer).addClass(newState); 
	this.config.state=newState;
}

