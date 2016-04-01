/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	FileUploader v 1.0 - a jQuery Ui extension
	Licences: MIT & GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com].
*/
var FileUploaderScripts = new Array();
Components.FileUploader.prototype.init = function(dataObj) {
    this.config = {
        container: $('body'),
        id: "fileuploader-"+ Math.round(Math.random() * 2000),
        text: "",
        tooltip: "",
		css:new Array(),
        icon: "",
        clsIcon: '',
        height: -1,
        width: -1,
        x: -1,
        y: -1,
        scale: 'small',
        hidden: false,
        enabled: true,
		ValidationScript:false,	
		PreviewScript:false,
		previewMaxWidth: 100,		//sin PreviewScript, este valor es inutil
        previewMaxHeight: 100,      //sin PreviewScript, este valor es inutil
        handler: function(){},
		CodeHelper:"",
		Preview:false,
		DivPreview:'',
		filesize:'',
		acceptFileTypes:'',
		numberfiles:'',
		progressbar:false,
		progressbaroptions:{},
		script:'',		
		formdata:{},
		autoUpload:true,
		multiple:false,
        listeners: {
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
    
    this.id = this.config.id;
    this.container = this.config.container;
    this.className = "FileUploader";
    this.pressed = false;
    this.handler = this.config.handler;
    this.listeners = this.config.listeners;
	this.uploadpercent=0;    
    this.divText = null;
    this.divIcon = null;
	this.divImput = null;
	this.divUploadPreview = null;
}
//##############################################################################
Components.FileUploader.prototype.create = function() {
	Components.Component.prototype.create.call(this);
	multiple = (this.config.multiple)?'multiple':'';
	 this.divContainer.css("border-color",'#2C83D5');
	this.divContainer.append('<div class="filepreview"><input class="fileupload" type="file" name="files[]"'+ multiple + 'style="height: 70px; position: absolute;opacity: 0;-ms-filter: " alpha(opacity="0)&quot;font-size:" 200px;direction:="" ltr;cursor:="" pointer;"></div><div class="container" id= vista'+this.config.id+'></div>');
	$('.filepreview',this.divContainer).append('<span><span class="bigger-150 bolder"><i class="ace-icon fa fa-caret-right "style="color: #FD5C17;"></i> Drop files</span> to upload <span class="smaller-80 grey">(or click)</span><br><i class="upload-icon ace-icon fa fa-cloud-upload  fa-3x" style="color: #2C83D5;"></i></span>');
	
	
	//this.divContainer.addClass(this.className + "-" + this.config.scale +" buttonItem");
	//this.divContainer.append('<div class="filepreview"><input class="fileupload" type="file" name="files[]" style="height: 80px; position: absolute;opacity: 0;-ms-filter: " alpha(opacity="0)&quot;font-size:" 200px;direction:="" ltr;cursor:="" pointer;"=""><span><span class="bigger-150 bolder"><i class="ace-icon fa fa-caret-right red"></i> Drop files</span> to upload <span class="smaller-80 grey">(or click)</span><br><i class="upload-icon ace-icon fa fa-cloud-upload  fa-3x" style="color: #2C83D5;"></i></span></div>');
	//this.divContainer.append('<span><span class="bigger-150 bolder"><i class="ace-icon fa fa-caret-right red"></i> Drop files</span> to upload <span class="smaller-80 grey">(or click)</span><br><i class="upload-icon ace-icon fa fa-cloud-upload  fa-3x" style="color: #2C83D5;"></i></span></div>');
	//this.divContainer.append('<input class="fileupload" type="file" name="files[]"'+ multiple +' style="top: 0;right: 0;margin: 0;opacity: 0;-ms-filter: "alpha(opacity=0)";font-size: 200px;direction: ltr;cursor: pointer;">');
	//this.divContainer.append('<span class="iconButton"></span><span class="textButton">'+this.config.text+'</span><div class="filepreview"></div>');

    if(this.config.height != -1) {
        this.divContainer.css("height", this.config.height);
    }
    if(this.config.width != -1) {
        this.divContainer.css("width", this.config.width);
        this.divContainer.css("white-space", "nowrap");
    }
    
	
	
    this.divIcon = $('.iconButton', this.divContainer);
    this.divText = $('.textButton', this.divContainer);
	this.divImput = $('.fileupload', this.divContainer);
	if(this.config.multiple){
		this.divImput.attr
	}
	this.divFilePreview = $('.filepreview', this.divContainer);
	if (this.config.progressbar){
		this.ProgressBar = Components.create('ProgressBar', {
			container: this.container,
			x:this.config.x+this.config.progressbaroptions.x,
			y: this.config.y+this.config.progressbaroptions.y,								
			id: 'Fotografiapb',
			width: 186,
			value:0,
			color:this.config.progressbaroptions.color,
			textcolorstart:this.config.progressbaroptions.textcolorstart,
			textcolorend:this.config.progressbaroptions.textcolorend	
			
			//minimizable: false,
		});
	}
  
    if(this.config.icon != "")
        this.divIcon.css("background-image", "url('"+this.config.icon+"')");
    else if(this.config.clsIcon != "")
        this.divIcon.addClass(this.config.clsIcon);
    else
        this.divIcon.hide();
    
    if(this.config.text == "") {
        //this.divIcon.css("background-position", "50% 50%");
        this.divText.hide();
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
	
	for(var i in this.config.css) {
		this.divContainer.css(i, this.config.css[i]);
	}
    this.config.enabled ? this.enable() : this.disable();
    
	var $this=this;
	
	//control de scripts nuevos, que se cargan segun opciones, tratar de hacer esta parte en el menor numero de lineas posible[Pendiente]
	var ExtraScripts = "ninguno";
	if(this.config.ValidationScript&&this.config.PreviewScript&&!FileUploaderScripts['Validacion']&&!FileUploaderScripts['Preview']){
		ExtraScripts = 'validacionyPreviewImage';
	}else if(this.config.ValidationScript&&!this.config.PreviewScript&&!FileUploaderScripts['Validacion']){
		ExtraScripts = 'SoloValidacion';
	}else if(!this.config.ValidationScript&&this.config.PreviewScript&&!FileUploaderScripts['Preview']){
		ExtraScripts = 'Solopreview';
	}
	
	switch(ExtraScripts){
			case "SoloValidacion":
				$.when(
				$.getScript( "jqfu/jquery.fileupload-validate.js" ),
				$.Deferred(function( deferred ){
				$( deferred.resolve );
				})
				).done(function(){
					FileUploaderScripts['Validacion'] = true;
					$this.create2();
				});
			break;
			case "Solopreview":
				$.when(
				$.getScript( "//blueimp.github.io/JavaScript-Load-Image/js/load-image.all.min.js" ),
				$.getScript( "jqfu/jquery.fileupload-image.js" ),
				$.Deferred(function( deferred ){
				$( deferred.resolve );
				})
				).done(function(){
					FileUploaderScripts['Preview'] = true;
					FileUploaderScripts['ImageLoad'] = true;
					$this.create2();
				});
			break;
				//es obligatorio que el script load-image.all.min.js, este cargado antes que los otros 2
			case "validacionyPreviewImage":
			$.getScript( "//blueimp.github.io/JavaScript-Load-Image/js/load-image.all.min.js", function( data, textStatus, jqxhr ) {
				$.when(
				$.getScript( "jqfu/jquery.fileupload-validate.js" ),	
				$.getScript( "jqfu/jquery.fileupload-image.js" ),
				$.Deferred(function( deferred ){
				$( deferred.resolve );
				})
				).done(function(){
					FileUploaderScripts['Validacion'] = true;
					FileUploaderScripts['Preview'] = true;
					FileUploaderScripts['ImageLoad'] = true;
					$this.create2();
				});
   			});	
			break;	
			default:
			$this.create2();
			break;
			
	}
	return this ;
}
//##############################################################################
Components.FileUploader.prototype.create2 = function(){
	//parte final de create, aqui se crea el control verdaderamente, la primera parte tiene que verificar que scripts adicionar para un correcto funcionamiento 
	var $this=this;
	//opciones básicas
	var Opciones = {
		url:  $this.config.script,
        dataType: 'json',
        autoUpload: $this.config.autoUpload,
        acceptFileTypes: $this.config.acceptFileTypes,
        maxFileSize:  $this.config.filesize, 
		maxNumberOfFiles: $this.config.numberfiles,       
        formData:$this.config.formdata
	    }
		//si esta activo el script de previsualizacion se activa el tamaño del preview
	if(this.config.PreviewScript){
		Opciones['previewMaxWidth'] = $this.config.previewMaxWidth;
		Opciones['previewMaxHeight'] = $this.config.previewMaxHeight;	
	}	
	this.Uploader= $(this.divImput).fileupload(Opciones);
	
	if($this.config.listeners["fileuploadprocessstart"]){
		this.Uploader.on('fileuploadprocessstart', {OBJ:this}, function (e, data) {
			console.log("yeyeye");
		 $this.config.listeners["fileuploadprocessstart"](e, data);	
		});
	}
	if ($this.config.listeners["fileuploadadd"]){
		this.Uploader.on('fileuploadadd',{OBJ:this},function (e, data) {
			 $this.config.listeners["fileuploadadd"]( e, data);
			//$this.ProgressBar.setVisible(true);
		});
	}
	if($this.config.listeners["fileuploadprocessalways"]){
		this.Uploader.on('fileuploadprocessalways',{OBJ:this}, function (e, data) {
			$this.config.listeners["fileuploadprocessalways"]( e, data);
		});
	}
	if($this.config.listeners["fileuploadprogressall"]){
		this.Uploader.on('fileuploadprogressall', {OBJ:this}, function (e, data) {
			  $this.config.listeners["fileuploadprogressall"](e, data);				  
		});
	}
	
	if($this.config.listeners["fileuploaddone"]){
	this.Uploader.on('fileuploaddone', {OBJ:this}, function (e, data) {
		$this.config.listeners["fileuploaddone"](e, data);		
		//$this.ProgressBar.setValue(0);		
		//$this.ProgressBar.setVisible(false);
	});}
	if($this.config.listeners["fail"]){
		this.Uploader.on('fileuploadfail', {OBJ:this}, function (e, data) {
			 $this.config.listeners["fail"](e, data);
			 //$this.ProgressBar.setVisible(false);
		});
	}
	this.Uploader.prop('disabled', !$.support.fileInput)
        .parent().addClass($.support.fileInput ? undefined : 'disabled');	
}
//-------------------------------------------------------------------------------------------------------
Components.FileUploader.prototype.setText = function(text) {
    this.config.text = text;
    this.divText.html(text);
    this.divText.show();
}
//##############################################################################
Components.FileUploader.prototype.show = function() {
    if(!this.config.hidden)
        Components.Component.prototype.show.call(this);
    else
        this.hide();
	  return this;	
}
//##############################################################################
Components.FileUploader.prototype.setVisible = function(visible) {
    if(visible == true)
        this.divContainer.show();
    else
        this.divContainer.hide();
    //this.config.hidden = !visible;
    //this.show();
}
//##############################################################################
Components.FileUploader.prototype.setDisabled = function(disabled) {
    disabled ? this.disable() : this.enable();
}
//##############################################################################
Components.FileUploader.prototype.disable = function() {
    Components.Component.prototype.disable.call(this);
    this.divContainer.removeClass('buttonItem-pressed');
}
//##############################################################################
Components.FileUploader.prototype.enable = function() {
    Components.Component.prototype.enable.call(this);
    if(this.pressed) {
        this.divContainer.addClass('buttonItem-pressed');
    }
}
//##############################################################################
Components.FileUploader.prototype.setIcon = function(path) {
    this.config.icon = path;
    this.divIcon.css("background-image", "url('"+this.config.icon+"')");
}