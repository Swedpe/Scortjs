
function ejeUploader(){
visiblesSideBar = new Array();
Components.create('FreeDiv',{
id:'mainContent',
freeHtml:true,
container: $('.page-content'),
html:'<strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 14pt">UPLOADER ITEMS</P></font></strong><div class="row"><div  id="ejemplo1" class="col-sm-4" style="height:300px" ><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt">UPLOADER SIMPLE</P></font></strong></div><div id="ejemplo2" class="col-sm-4" style="height: 300px"><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt"> UPLOADER + SLIDER</P></font></strong> </div><div id="ejemplo3" class="col-sm-4" style="height: 300px"><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt">UPLOADER + PROGRESS</P></font></strong> </div></div><div><div id="ejemplo4" class="col-sm-6" style="height: 300px"><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt">MULTIPLE UPLOADER</P></font></strong> </div><div id="ejemplo5" class="col-sm-6" style="height: 300px"><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt">UPLOADER + VISTA PREVIA</P></font></strong> </div> </div>',
});
	
visiblesSideBar[1]=Components.create('FileUploader',{  	
				x:0,
				y:0,
				id: 'SubirFotobt1',
				container: $('#ejemplo1'),
				tooltip:'Subir Foto',
				text:'Subir Foto',
				filesize: 5000000,//5mb
				script:'php/uploadhandlerfp.php',	
				formdata:[												
						{	name  :'folder', value: 'upload' },
						{	name  :'UploadType', value: '' }
				],
				listeners: {
					fileuploaddone: function(e, data) {
							$.each(data.result.files, function (index, file) {
							$('<p/>').text(file.name).appendTo('#vistaSubirFotobt1');
							//$('<p/>').text(file.name).appendTo(document.body);
						})	
					}
				}
			}).show();

visiblesSideBar[2]=Components.create('FileUploader',{  	
    x:220,
	y:5,
	id: 'SubirFotobt2',
	container: $('#ejemplo2'),
	icon: 'images/Warehouse-icon16.png',
	tooltip:'Escoger Archivos',
	text:'Subir archivos',
	filesize: 5000000,//5mb
	multiple:false,	
	autoUpload:false,
	script:'php/uploadhandlerfp.php',	
	formdata:[												
			{	name  :'folder', value: 'upload' },
			{	name  :'UploadType', value: '' }
	],
	listeners: {
		fileuploaddone: function(e, data) {
			console.log("Trigger FileuploadDone");
				$.each(data.result.files, function (index, file) {
			   $('<p/>').html('Archivo Enviado '+ file.name).appendTo( "#vistaSubirFotobt2" )
            })	
		},
		fileuploadadd: function(e, data) {
		console.log("Trigger fileuploadadd");
			//Se pasa por esta zona por cada archivo agregado a la cola
			$.each(data.files, function (index, file) {
			$('<p/>').html('<b>Archivo Agregado a la Cola:</b>  ' +file.name + '<div id="'+file.lastModified+'"></div>').appendTo( "#vistaSubirFotobt2" );
			//Para comenzar a subir archivos basta con lanzar  data.submit();, esto lo realizara un boton asociado a cada archivo	
			Components.create('Button',{		
				container:$('#'+file.lastModified),
				scale: 'small',
				container: $('#ejemplo2'),
				state:'info',
				text:'Subir: '+file.name,
				icon: 
				{
					type:'glyphicon',
					class:'glyphicon-cloud-upload',  
					position:'left'
														
				},
				tooltip:'texto + icono',
				CodeHelper:data,
				css:{position:'relative'},				
				handler: function(e) {
					var $thisButton = e.data.OBJ;
					var $data = $thisButton.config.CodeHelper;
					//se lanza el proceso final.
					$data.submit();
					$thisButton.destroy();
				}  
			}).show();
			});
		},
		fileuploadprocessalways: function(e, data) {
			console.log("Trigger fileuploadprocessalways");
		},
		fileuploadprogressall: function(e, data) {
			console.log(data);
			var progress = parseInt(data.loaded / data.total * 100, 10);
			Components.getComponentById('progress').setText(progress);
	       var progress1 = parseInt(data.loaded / data.total * 100, 10);
			Components.getComponentById('progress1').setValue(progress);
		},
	}
}).show();
visiblesSideBar[3]=Components.create('Slider',{
				id:'progress1',
				container: $('#ejemplo2'),
				text: "Indicador de avance",
				state:'active',
				alignLabel: "left",
				css:{position:'relative'},
				width: 100,
				height:25,
				x:50,
				y:50
            }).show();
visiblesSideBar[4]=Components.create('Label',{
				id:'progress',
				container: $('#ejemplo2'),
				text: "Slider de avance",
				alignLabel: "left",
				css:{position:'relative'},
				width: 100,
				height:25,
				x:150,
				y:-10
}).show();
visiblesSideBar[5]=Components.create('FileUploader',{  	
    x:220,
	y:5,
	id: 'SubirFotobt3',
	container: $('#ejemplo3'),
	icon: 'images/Warehouse-icon16.png',
	tooltip:'Escoger Archivos',
	text:'Subir archivos',
	filesize: 5000000,//5mb
	multiple:false,	
	autoUpload:false,
	script:'php/uploadhandlerfp.php',	
	formdata:[												
			{	name  :'folder', value: 'upload' },
			{	name  :'UploadType', value: '' }
	],
	listeners: {
		fileuploaddone: function(e, data) {
			console.log("Trigger FileuploadDone");
				$.each(data.result.files, function (index, file) {
                $('<p/>').html('Archivo Enviado '+ file.name).appendTo( "#vistaSubirFotobt3" );
            })	
		},
		fileuploadadd: function(e, data) {
		console.log("Trigger fileuploadadd");
			//Se pasa por esta zona por cada archivo agregado a la cola
			$.each(data.files, function (index, file) {
			$('<p/>').html('<b>Archivo Agregado a la Cola:</b>  ' +file.name + '<div id="'+file.lastModified+'"></div>').appendTo( "#vistaSubirFotobt3" );
			
			//Para comenzar a subir archivos basta con lanzar  data.submit();, esto lo realizara un boton asociado a cada archivo	
			Components.create('Button',{		
				container:$('#'+file.lastModified),
				container: $('#ejemplo3'),
				scale: 'small',
				state:'info',
				text:'Subir: '+file.name,
				icon: 
				{
					type:'glyphicon',
					class:'glyphicon-cloud-upload',  
					position:'left'
														
				},
				tooltip:'texto + icono',
				CodeHelper:data,
				css:{position:'relative'},				
				handler: function(e) {
					var $thisButton = e.data.OBJ;
					var $data = $thisButton.config.CodeHelper;
					//se lanza el proceso final.
					$data.submit();
					$thisButton.destroy();
				}  
			}).show();
			});
		},
		fileuploadprogressall: function(e, data) {
			console.log(data);
			var progress2 = parseInt(data.loaded / data.total * 100, 10);
			Components.getComponentById('progress2').setValue(progress2);
		},
	}
}).show();

visiblesSideBar[6]=Components.create('ProgressBar',{  	
        id:"progress2",
        container: $('#ejemplo3'),
		x:325,
		y:2,
        text: "",
        state:'error',
        animate:true,
        class:'striped',
        align: "left",
        width: 250,
        height: 10,
		value:0,
      	color:'#123456',
		textcolorstart:'#0000',
		textcolorend:'#FFF',
}).show();
	
visiblesSideBar[7]=Components.create('Label',{
				text: "SUBIENDO ARCHIVOS EN COLA...",
				container: $('#ejemplo4'),
				alignLabel: "left",
				css:{position:'relative'},
				width: 350,
				height:25,
				x:0,
				y:0
}).show();
//segundo bloque -----------------------------------------------------------------------------------------------------------------------------

visiblesSideBar[8]=Components.create('FileUploader',{  	
    x:220,
	y:5,
	id: 'SubirFotobt4',
	icon: 'images/Warehouse-icon16.png',
	container: $('#ejemplo4'),
	tooltip:'Escoger Archivos',
	acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
	text:'Subir archivos',
	filesize: 5000000,//5mb
	multiple:false,
	ValidationScript:true,	
	autoUpload:false,
	script:'php/uploadhandlerfp.php',	
	formdata:[												
			{	name  :'folder', value: 'upload' },
			{	name  :'UploadType', value: '' }
	],
	listeners: {
		fileuploaddone: function(e, data) {
			console.log("Trigger FileuploadDone");
				$.each(data.result.files, function (index, file) {
                $('<p/>').html('Archivo Enviado '+ file.name).appendTo( "#vistaSubirFotobt4" );
            })	
		},
		fileuploadadd: function(e, data) {
		console.log("Trigger fileuploadadd");
			//Se pasa por esta zona por cada archivo agregado a la cola
			$.each(data.files, function (index, file) {
			$('<p/>').html('<b>Archivo Agregado a la Cola:</b>  ' +file.name + '<div id="'+file.lastModified+'"></div>').appendTo( "#vistaSubirFotobt4" );
			//Para comenzar a subir archivos basta con lanzar  data.submit();, esto lo realizara un boton asociado a cada archivo	
			Components.create('Button',{
				id:"BTUP"+file.lastModified,			
				container:$('#'+file.lastModified),
				container: $('#ejemplo4'),
				scale: 'small',
			    state:'info',
				text:'Subir: '+file.name,
				icon: 
				{
					type:'glyphicon',
					class:'glyphicon-cloud-upload',  
					position:'left'
														
				},
				tooltip:'texto + icono',
				CodeHelper:data,
				css:{position:'relative'},				
				handler: function(e) {
					var $thisButton = e.data.OBJ;
					var $data = $thisButton.config.CodeHelper;
					//se lanza el proceso final.
					$data.submit();
					$thisButton.destroy();
				}  
			}).show();
			});
		},
		fileuploadprogressall: function(e, data) {
			var progress3 = parseInt(data.loaded / data.total * 100, 10);
			Components.getComponentById('progress3').setValue(progress3);
		},
		fileuploadprocessstart: function(e,data) {
			Components.getComponentById('progress3').setValue(0);
			console.log("fileuploadprocessstart");
		},
		fileuploadprocessalways: function(e,data) {
			var index = data.index;
            file = data.files[index];
			if(file.error) {
				Components.getComponentById("BTUP"+file.lastModified).disable();
				$('#'+file.lastModified).append('<br>')
                .append($('<span class="text-danger"/>').text(file.error));
			}
		}
		
	}
}).show();

visiblesSideBar[9]=Components.create('ProgressBar',{  	
        container: $('#ejemplo4'),
		id:"progress3",
        x:325,
		y:2,
        state:'info',
        animate:true,
        class:'striped',
        text: "",
        align: "left",
        width: 250,
        height: 10,
		value:0,
      	color:'#123456',
		textcolorstart:'#0000',
		textcolorend:'#FFF',
}).show();
			
visiblesSideBar[10]=Components.create('Label',{
				container: $('#ejemplo5'),
				text: "SUBIENDO ARCHIVOS + VISTA PREVIA...",
				alignLabel: "left",
				css:{position:'relative'},
				width: 550,
				height:25,
				x:0,
				y:0
}).show();
visiblesSideBar[11]=Components.create('FileUploader',{  	
    x:220,
	y:5,
	container: $('#ejemplo5'),
	id: 'SubirFotobt5',
	icon: 'images/Warehouse-icon16.png',
	tooltip:'Escoger Archivos',
	acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
	text:'Subir archivos',
	filesize: 5000000,//5mb
	multiple:false,
	ValidationScript:true,	
	PreviewScript:true,
	previewMaxWidth: 200,		//sin PreviewScript, este valor es inutil
    previewMaxHeight: 200,      //sin PreviewScript, este valor es inutil
	autoUpload:false,
	script:'php/uploadhandlerfp.php',	
	formdata:[												
			{	name  :'folder', value: 'upload' },
			{	name  :'UploadType', value: '' }
	],
	listeners: {
		fileuploaddone: function(e, data) {
			$.each(data.result.files, function (index, file) {
                $('<p/>').html('Archivo Enviado '+ file.name).appendTo( "#vistaSubirFotobt5" );
				//$('<p/>').html('Archivo Enviado '+ file.name).appendTo( ".ejemplo5" );
				
            })	
		},
		fileuploadadd: function(e, data) {
			//Se pasa por esta zona por cada archivo agregado a la cola
			$.each(data.files, function (index, file) {
			$('<p/>').html('<b>Archivo Agregado a la Cola:</b>  ' +file.name + '<div id="'+file.lastModified+'"></div>').appendTo( "#vistaSubirFotobt5" );
			//Para comenzar a subir archivos basta con lanzar  data.submit();, esto lo realizara un boton asociado a cada archivo	
			Components.create('Button',{
				id:"BTUP"+file.lastModified,			
				container: $('#ejemplo5'),
				container:$('#'+file.lastModified),
				scale: 'small',
				state:'info',
				text:'Subir: '+file.name,
					icon: 
				{
					type:'glyphicon',
					class:'glyphicon-cloud-upload',  
					position:'left'
														
				},
				tooltip:'texto + icono',
				CodeHelper:data,
				css:{position:'relative'},				
				handler: function(e) {
					var $thisButton = e.data.OBJ;
					var $data = $thisButton.config.CodeHelper;
					//se lanza el proceso final.
					$data.submit();
					$thisButton.destroy();
				}  
			}).show();
			});
		},
		fileuploadprogressall: function(e, data) {
			var progress4 = parseInt(data.loaded / data.total * 100, 10);
			Components.getComponentById('progress4').setValue(progress4);
		},
		fileuploadprocessstart: function(e,data) {
			Components.getComponentById('progress4').setValue(0);
			console.log("fileuploadprocessstart");
		},
		fileuploadprocessalways: function(e,data) {
			var index = data.index;
            file = data.files[index];
			console.log(file);
			if(file.error) {
				Components.getComponentById("BTUP"+file.lastModified).disable();
				$('#'+file.lastModified).append('<br>')
                .append($('<span class="text-danger"/>').text(file.error));
			}
			//PreviewScript = true, 
			if (file.preview) {
            $('#'+file.lastModified).prepend('<br>').prepend(file.preview);
   
			}
		}
		
	}
}).show();
visiblesSideBar[12]=Components.create('ProgressBar',{  	
        container: $('#ejemplo5'),
		id:"progress4",
        x:325,
		y:2,
        text: "",
        align: "left",
        width: 250,
        height: 10,
	    animate:true,
	    class:'striped',
	    state:'active',
		value:0,
      	color:'#123456',
		textcolorstart:'#0000',
		textcolorend:'#FFF',
}).show();
}