/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	TextArea v 1.0 - a jQuery Ui extension
	Licences: MIT & GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com].
	* tinymce es base de este componente, ScortjS-TextArea solo es un cascaron.
*/
Components.TextArea.prototype.init = function(dataObj) {
	this.type = 'TextArea';
    this.config = {
        container: $('body'),
        id: "TextArea-"+ Math.round(Math.random() * 2000),
		parent:'',							//se usa especialmente cuando es parte de un form
        name:"TextArea-"+ Math.round(Math.random() * 2000),
		text: "",
        tooltip: "",
		value:'',
		tinymce:false,
		css:new Array(),
        height: -1,
        width: -1,
		state:'default',
        x: -1,
        y: -1,
        hidden: false,
		enabled: null,					//controlar el atributo  disabled/enabled del text input
        // enabled: true,
        handler: function(){},
		CodeHelper:"",
        listeners: {//faltan mas agregar poco a poco
            click: function(event){}
        }        
    };
    
    for(var i in dataObj) {
        if(this.config[i] != undefined) {
            if(i == "listeners") {
                for(var j in dataObj[i]) {
                    this.config[i][j] = dataObj[i][j];
                }
            }
            else
                this.config[i] = dataObj[i];
        }
    }
    //control de enabled desde el componente hacia los padres
	if(this.config.enabled==null){
		if(this.config.parent!=''){
			this.enabled=this.config.parent.getConfig('enabled');
			if(this.enabled==null){
				this.enabled = true;
			}
		}else{
			this.enabled=true;
		}
	}
    this.id = this.config.id;
	this.name = this.config.name;
	this.parent = this.config.parent;
    this.container = this.config.container;
    this.className = "TextArea";
    this.handler = this.config.handler;
    this.listeners = this.config.listeners;
    }
//##############################################################################
Components.TextArea.prototype.create = function() {
    this.divContainer = $('<textarea id="'+this.id+'" style="width:100%">'+this.config.value+'</textarea>');
	//Components.Component.prototype.create.call(this);
    this.divContainer.addClass(this.className);
    this.container.append( this.divContainer);  
	//este codigo tiene que ser condicionado a el echo que el tynimce este cargado o no, por lo cual usaremos variable global,
	//con parametros para cuando el MCE este listo y cargado
	if(this.config.tinymce){
		Item = {
			params:{theme: "modern",mode : "exact",elements : this.id,},
			element:this.divContainer,
		}
		tinimcePostLoad.push(Item);
		if (typeof(tinymce)!='undefined'){
			tinyMCE.init({
				mode : "exact",
				elements : this.id,
				theme: "modern",
			});
			this.divContainer.hide();
		}
		else{
			Loadtinymce();
			//this.divContainer.hide();
		}
	}
    if(this.config.tooltip != "") {
        this.divContainer.prop("alt", this.config.tooltip);
        this.divContainer.prop("title", this.config.tooltip);
    }
    if(this.config.x != -1) {
        this.divContainer.css("left", this.config.x);
    }
    if(this.config.y != -1) {
        this.divContainer.css("top", this.config.y);
    }
	//juego con estilos 
	for(var i in this.config.css) {
		this.divContainer.css(i, this.config.css[i]);
	}
    this.config.enabled ? this.enable() : this.disable();
    this.setControls();
	return this;
}
//##############################################################################
Components.TextArea.prototype.setControls = function() {
    this.divContainer.bind("click", {OBJ:this}, function(event) {
        if(event.data.OBJ.config.enabled){
            if(event.data.OBJ.config.enableToggle) {
                event.data.OBJ.toggle();
            }
            event.data.OBJ.config.listeners.click(event);
            event.data.OBJ.handler();
        }   
    });
}
//##############################################################################
Components.TextArea.prototype.show = function() {
    if(!this.config.hidden)
        Components.Component.prototype.show.call(this);
    else
        this.hide();
	  return this;
}
//##############################################################################
Components.TextArea.prototype.setVisible = function(visible) {
    if(visible == true)
        this.divContainer.show();
    else
        this.divContainer.hide();
}
//##############################################################################
Components.TextArea.prototype.setDisabled = function(disabled) {
    disabled ? this.disable() : this.enable();
}
//##############################################################################
Components.TextArea.prototype.disable = function() {
    if (typeof(tinyMCE)!="undefined"){
		tinyMCE.get(this.id).getBody().setAttribute('contenteditable', false);
	}
	// Components.Component.prototype.disable.call(this);
	//tinymce.activeEditor.getBody().setAttribute('contenteditable', false);
}
//##############################################################################
Components.TextArea.prototype.enable = function() {
    if (typeof(tinyMCE)!="undefined"){
		tinyMCE.get(this.id).getBody().setAttribute('contenteditable', true);
	}
	// Components.Component.prototype.enable.call(this);
	//tinymce.activeEditor.getBody().setAttribute('contenteditable', true);
}
//##############################################################################
Components.TextArea.prototype.setImage = function(path) {
  }
 
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.TextArea.prototype.setValue = function(value) {
	//dependera si se activo wising o no
    
	if(this.config.tinymce){
		tinyMCE.get(this.id).setContent(value);
		this.config.value = value;
	}else
	{		
	}
	//this.Validar();
	return this;
}
//##############################################################################
Components.TextArea.prototype.getValue = function() {
	//dependera si se activo wising o no.
	if(this.config.tinymce){
		return tinyMCE.get(this.id).getContent();
	}else
	{		
		return this.divContainer.val();
	}	
}  