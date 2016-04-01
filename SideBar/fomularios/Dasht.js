
function ejemploDash(){
visiblesSideBar = new Array();
Components.create('FreeDiv',{
id:'mainContent',
freeHtml:true,
container: $('.page-content'),
html:'<div><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 14pt">COMPONENTS SCORTS JS</P></font></strong><div class="row"><div  id="ejemplo1" class="col-sm-3" style="height: 400px"><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 14pt">BUTTON-ITEMS</P></font></strong> </div><div  id="ejemplo7" class="col-sm-4" style="height: 400px"><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 14pt">PROGRESSBAR-ITEMS</P></font></strong> </div><div  id="ejemplo5"class="col-sm-2" style="height: 400px"><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 14pt">SLIDER-ITEMS</P></font></strong> </div><div  id="ejemplo3" class="col-sm-3" style="height: 400px"><div><div id="ON" class="col-sm-6"><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 14pt">ON-OFF</P></font></strong></div><div id="NUMBER" class="col-sm-6"><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 14pt">NUMBERFIELD</P></font></strong></div></div><div id="DATE"><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 14pt">DATEPICKER</P></font></strong> </div></div></div><div class="row"><div  id="ejemplo4" class="col-sm-3"> <strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 14pt">AUTOCOMPLETE-ITEM</P></font></strong> </div><div  id="ejemplo2" class="col-sm-3" ><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 14pt">INPUTFIELD-ITEM</P></font></strong> </div><div  id="ejemplo6" class="col-sm-3"><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 14pt">TEXTAREA</P></font></strong> </div><div  id="ejemplo8" class="col-sm-3"><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 14pt">VALIDADOR ITEM</P></font></strong> </div></div></div>',
});
	
visiblesSideBar[1]=Components.create('Button',{
	container: $('#ejemplo1'),
    x: 0,
	y:0,
	
	scale: 'minier',
	state:'error',
	icon:{
		type:'fontawesome',
		class:'fa-align-left',
		//color:'#ffb752'
	},
	text:'minier',
	tooltip:'Tamaño Personalizado',	  
	handler: function() {
					alert('minier');
				}  
}).show();

visiblesSideBar[2]=Components.create('Button',{
        x: 10,
	    y:0,
		container: $('#ejemplo1'),
		scale: 'mini',
		text:'mini',
		state:'highlight',
		icon:{
			type:'fontawesome',
			class:'fa-group',
			//color:'#ffb752'
		},
		tooltip:'boton mini',	  
		handler: function() {
					alert('mini');
				}  
	}).show();
	
visiblesSideBar[3]=	Components.create('Button',{
         x: 20,
	     y:0,
		container: $('#ejemplo1'),
		scale: 'small',
		text:'small',
		icon:{
			type:'fontawesome',
			class:'fa-cubes',
			//color:'#ffb752'
		},
		tooltip:'Small button',	  
		handler: function() {
						alert('small');
					}  
		}).show();
visiblesSideBar[4]=Components.create('Button',{
		         x: 0,
	              y:0,
				container: $('#ejemplo1'),
				scale: 'medium',
				state:'error',
				text:'Estado error',
				tooltip:'Tamaño Personalizado',	  
				handler: function() {
								alert('error');
							}  
			}).show();
visiblesSideBar[6]=Components.create('Button',{
	   x: 15,
	   y:0,
		container: $('#ejemplo1'),
		scale: 'small',
		text:'small',
		shape:'box',
		icon:{
			type:'fontawesome',
			class:'fa-cubes',
			//color:'#ffb752',
			position:'right'
		},
		tooltip:'Small button',	  
		handler: function() {
						alert('small');
					}  
		}).show();
	
visiblesSideBar[7]=Components.create('Button',{
      x: 35,
	  y:0,
       container: $('#ejemplo1'),
		state:'warning',		
		scale: 'medium',
		shape:'box',
		icon:{
			type:'fontawesome',
			class:'fa-cc-visa',
			//color:'#ffb752',
			position:'right'
		},
		text:'medium',
		tooltip:'Boton Warning',	
    }).show();
visiblesSideBar[7]=Components.create('Button',{
        x: -10,
	     y:0,
       container: $('#ejemplo1'),
	   
		state:'info',	
		scale: 'large',
		text:'Large',
		shape:'box',
		icon:{
			type:'fontawesome',
			class:'fa-floppy-o',
			//color:'#ffb752',
			position:'right'
		},
		tooltip:'large Info',	  
		handler: function() {
			alert('large');
		}  
    }).show();
visiblesSideBar[7]=Components.create('Button',{
	   x: -10,
	     y:0,
	     container: $('#ejemplo1'),
		 
		state:'active',
		scale: 'medium',
		text:'medium',
		shape:'circle',
		icon:{
			type:'fontawesome',
			class:'fa-cut',
			//color:'#ffb752',
			position:'left'
		},
		tooltip:'medium active',	  
		handler: function() {
			alert('medium');
		}  
    }).show();
visiblesSideBar[7]=Components.create('Button',{
         x:-10,
	     y:0,
		container: $('#ejemplo1'),
		state:'error',				//estado 1 
		State2:'active',			//estado 2 
		scale: 'small',
		shape:'circle',
		icon:{
			type:'fontawesome',
			class:'fa-tty',
		//	color:'#ffb752',
			position:'right'
		},
		icon2:{					//icono para el segundo estado
			type:'fontawesome',
			class:'fa-joomla',
			color:'#ffb752'
		},
		tooltip:'mini Toggle',
		enableToggle:true,
		handler: function() {
				 console.log("mini togle");
		}    
                                        
     }).show();
visiblesSideBar[7]=Components.create('Button',{
       x: 230,
	     y:-70,
		container: $('#ejemplo1'), 
		scale: 'minier',
		text:'mini',
		state:'highlight',
		shape:'circle',
		icon:{
			type:'fontawesome',
			class:'fa-group',
		//	color:'#ffb752',
		},
		tooltip:'boton mini',	  
		handler: function() {
					alert('mini');
				}  
	}).show();
visiblesSideBar[7]=Components.create('Form',{
container: $('#ejemplo7'),

        items: [
          {
				type: 'ProgressBar',	
				x:0,
				y:70,
				align: "left",
				width: 250,
				value:30,
				state:'active',
				scale:'minier',
				class:'striped',
				animate:true,					
            },
			{
				type: 'ProgressBar',	
				x:0,
				y:100,
				align: "left",
				width: 250,
				value:45,
				class:'striped',
				scale:'mini',
				state:'error',
				animate:true,			
            },
			{
				type: 'ProgressBar',	
					x:0,
					y:150,
					align: "left",
					width: 250,
					value:57,
					scale:'small',
					class:'striped',
					state:'warning',
					animate:true,		
            },
			{
				type: 'ProgressBar',	
				x:0,
				y:180,
				align: "left",
				width: 250,
				value:70,
				class:'striped',
				scale:'medium',
				state:'info',
				animate:true,	
            },
			{
				type: 'ProgressBar',	
					x:0,
					y:180,
					align: "left",
					width: 250,
					value:95,
					class:'striped',
					state:'highlight',
					scale:'large',
					animate:true,		
            },
			{
				type: 'ProgressBar',
				x:0,
				y:70,
				align: "left",
				text:'circle',
				shape:'circle',
				value:30,
				scale:'minier',
				state:'active',
				animate:false,		
            },			
			{
				type: 'ProgressBar',
				x:0,
				y:70,
				shape:'circle',
				value:45,
				state:'info',
				scale:'mini',
				animate:false,		
            },
			{
				type: 'ProgressBar',
				x:0,
				y:70,
				shape:'circle',
				value:57,
				scale:'small',
				state:'error',
				animate:false,			
            },
			{
				type: 'ProgressBar',
				x:0,
				y:70,
				shape:'circle',
				value:70,
				scale:'medium',
				state:'warning',
				animate:false,		
            },
			
				
        ]
    }).show();
visiblesSideBar[7]=Components.create('Slider',{ 
	x:10,
	y:50,
 container: $('#ejemplo5'),	
	width: 150,
	value: 75,
	label: "ERROR",
	labelWidth: 100,
	increment: 25,
	minValue: 0,
	maxValue: 100,
	state:'error',
	tooltip:'Con etiqueta',
	icon:{
		type:'fontawesome',
		class:'fa-renren',
		//color:'yellow'
	},
	listeners: {
		change: function( event, ui ) {			  
			}
	}
}).show();
visiblesSideBar[7]=Components.create('Slider',{ 
	x:10,
	y:90,		
 container: $('#ejemplo5'),	
	width: 150,
	value: 25,
	label: "HIGHLIGHT",
	labelWidth: 100,
	increment: 25,
	minValue: 0,
	maxValue: 100,
	state:'highlight',
	tooltip:'Con etiqueta',
	icon:{
		type:'fontawesome',
		class:'fa-renren',
		//color:'yellow'
	},

	listeners: {
		change: function( event, ui ) {			  
			}
	}
}).show();
visiblesSideBar[7]=Components.create('Slider',{ 
	x:10,
	y:140,		
 container: $('#ejemplo5'),	
	width: 150,
	value: 50,
	label: "ACTIVE",
	labelWidth: 100,
	increment: 25,
	minValue: 0,
	maxValue: 100,
	state:'active',
	tooltip:'Con etiqueta',
	icon:{
		type:'fontawesome',
		class:'fa-renren',
		//color:'yellow'
	},
	listeners: {
		change: function( event, ui ) {			  
			}
	}
}).show();
visiblesSideBar[7]=Components.create('Slider',{ 
	x:10,
	y:190,		
 container: $('#ejemplo5'),	
	width: 150,
	value: 75,
	label: "WARNING",
	labelWidth: 100,
	increment: 25,
	minValue: 0,
	maxValue: 100,
	state:'warning',
	tooltip:'Con etiqueta',
	icon:{
		type:'fontawesome',
		class:'fa-renren',
		//color:'yellow'
	},
	
	listeners: {
		change: function( event, ui ) {			  
			}
	}
}).show();
visiblesSideBar[7]=Components.create('Slider',{ 
	x:10,
	y:250,		
 container: $('#ejemplo5'),	
	width: 150,
	value: 100,
	label: "INFO",
	labelWidth: 100,
	increment: 25,
	minValue: 0,
	maxValue: 100,
	state:'info',
	tooltip:'Con etiqueta',
	icon:{
		type:'fontawesome',
		class:'fa-renren',
		//color:'yellow'
	},
	
	listeners: {
		change: function( event, ui ) {			  
			}
	}
}).show();
visiblesSideBar[7]=Components.create('Slider',{ 
	x:10,
	y:320,		
	width: 150,
	value: 50,
 container: $('#ejemplo5'),	
	label: "DEFAULT",
	labelWidth: 100,
	increment: 25,
	minValue: 0,
	maxValue: 100,
	state:'default',
	tooltip:'Con etiqueta',
	icon:{
		type:'fontawesome',
		class:'fa-renren',
		//color:'yellow'
	},
	
	listeners: {
		change: function( event, ui ) {			  
			}
	}
}).show();
visiblesSideBar[7]=Components.create('onoffswitch',{
	container: $('#ON'),
	state:'info',
	scale:'medium',
});
visiblesSideBar[7]=Components.create('NumberField', { 
		container: $('#NUMBER'),
		placeholder:'de 10 en 10',
		step:1,
		value:50,
		state:'active',
		position:'rigth',
		maxValue: 100,
		minValue: 1,
		value: 100,
}).show();
visiblesSideBar[7]=Components.create('InputField',{	 	
	id:"hola",	
	container: $('#DATE'),
	state:'error',
	label: {html:'<b>FECHA: </b>',cols:2},
	input:{
		type:'DatePicker',
		id:'hola1',
		cols:2,
		state:'error',
		width: '130',
		buttonPosition:'rigth',
		icon:{
			type:'fontawesome',
			class:'fa-key',
			color:'rgb(85, 85, 95)',
			},
	},
}).show(); 
visiblesSideBar[7]=Components.create('FreeDiv',{																		
	x: 16,
	y: 40,
	container: $('#ejemplo4'),
	html:'<p>Escriba "Nombre" o "Direccion"</p>'																		
}).show();
visiblesSideBar[7]=Components.create('AutoCompleteInputField',{
			container: $('#ejemplo4'),				
								x:0,
								y: 120,
								id:'MiAutocomplete',	
								imputoptions:{									
										label: '<b>&nbsp;Select List :</b>',
										id: 'AutocompleteInput',
									     width: 350,
										readOnly: false,
										source:[
												{"value":"Direccion1","label":"Direccion1","id":1},
												{"value":"Nombre2","label":"Nombre2","id":2},
												{"value":"Direccion3","label":"Direccion3","id":3},
												{"value":"Direccion4","label":"Direccion4","id":4}
										]								
								},	
								listeners: {								
										select: function(event, ui) {												
											alert("Seleccionado "+ui.item.label);			
										}											
								}
}).show();
visiblesSideBar[7]=Components.create('Button',{		
container: $('#ejemplo4'),
y:20,
		state:'active',
		scale: 'medium',
		text:'Leer Valor Seleccionado',                                     
		tooltip:'Leer Valor Seleccionado',	  
		handler: function() {
						 alert("Seleccionado "+Components.getComponentById('MiAutocomplete').imputselectedValue);														
		}  
}).show();
visiblesSideBar[7]=Components.create('Form',{
    container: $('#ejemplo2'),
	id: 'TestForm',
	border: false,
	defaultType: "textfield",																	
	fieldDefaults: {
		labelWidth: 60
	},
	items:[	
	{type: 'InputField',
	id:'prueba2',
	input:{cols:12,
		width: '80%',
		placeholder:'INPUT STATE ERROR + ICON',
		icon:{
			type:'fontawesome',
			class:'fa-envelope',
			position:'left'
		},
		state:'error',
	},
  },
  {type: 'InputField',
	input:{cols:12,
		width: '80%',
		placeholder:'INPUT STATE HIGHLIGHT + ICON',
		icon:{
			type:'fontawesome',
			class:'fa-envelope',
			position:'left'
		},
		state:'highlight',
	},

  },
  {type: 'InputField',
	input:{cols:12,
		width: '80%',
		placeholder:'INPUT STATE ACTIVE + ICON',
		icon:{
			type:'fontawesome',
			class:'fa-envelope',
			position:'left'
		},
		state:'active',
	},
  },
  {type: 'InputField',
	input:{cols:12,
		width: '80%',
		placeholder:'INPUT STATE WARNING + ICON',
		icon:{
			type:'fontawesome',
			class:'fa-envelope',
			position:'left'
		},
		state:'warning',
	},
  },
  {type: 'InputField',
	input:{cols:12,
		width: '80%',
		placeholder:'INPUT STATE INFO + ICON',
		icon:{
			type:'fontawesome',
			class:'fa-envelope',
			position:'left'
		},
		state:'info',
	},
  },
  {type: 'InputField',
	input:{cols:12,
		width: '80%',
		placeholder:'INPUT STATE DEFAULT+ ICON',
		icon:{
			type:'fontawesome',
			class:'fa-envelope',
			position:'left'
		},
		state:'default',
	},
  },
]
}).show();
visiblesSideBar[7]=Components.create('Form',{		
	title: "EJEMPLO TEXT-AREA", 
	container: $('#ejemplo6'),
	state:'active',
	width:'310px',
	height:'312px',
	items:[
	{type: 'InputField',
		id:'HtmlNewTab',
		label: {html:'<b>Ejemplo de TextArea</b>',
				cols:12},
		input:{cols:12,
			name:'HtmlNewTab',
			type: 'TextArea',
			value:'Contenido Html prueba para este contenedor',
			tinymce:true,
		},		
	},
  ]
}).show();
visiblesSideBar[7]=Components.create('Form',{
	container: $('#ejemplo8'),
	title: "Validaciones y Mas validaciones",		
	height:420, 
	width:350,
	items: [
	{
		type: 'Form',
		id: 'TestForm',
		border: false,
		defaultType: "textfield",																	
		fieldDefaults: {
			labelWidth: 60
		},
		items:[
			{type: 'InputField',
			label: {html:'<b>Validando caracteres</b>',
					cols:4},
			input:{cols:8,
				width: '100%',
				state:'error',
				placeholder:'Solo Texto Mínimo 6 caracteres[changeInputState()]',
				icon:{
					type:'fontawesome',
					class:'fa-envelope'
				},
				listeners: {
                            onValidateSucess: function(event) {
							console.log('validate state OK');
                            event.data.OBJ.changeInputState('active');
							},
							onValidateFail: function(event) {
							console.log('validate state Fail');
                            event.data.OBJ.changeInputState('error');
							}
                        },
						validar:{											
							'longitud':{
							'min':6		
							},
							'texto' : true				   
						},
						
			},
			
			
			 
		
			},
			{type: 'InputField',
				id:'Test',
				label: {html:'<b>Validando E-mail(1)</b>',
						cols:4},
				input:{cols:8,
					width: '100%',
					state:'highlight',
					placeholder:'Valida Email Efecto[changeIcon position]',
					icon:{
						type:'fontawesome',
						class:'fa-clock-o'
					},
					validar:{		
						'email':true,
						'longitud':
						{
							'min':5,
							'max':35
						}				   
					},
					listeners: {
                            onValidateSucess: function(event) {
							iconX = {position:'rigth'};
                            event.data.OBJ.changeIcon(iconX);
							},
							onValidateFail: function(event) {
							iconY = {position:'left'};
                            event.data.OBJ.changeIcon(iconY);
							}
                        }
				},
				
		
			},
			{type: 'InputField',
			label: {html:'<b>Validando E-mail(2)</b>',
					cols:4},
			input:{cols:8,
				width: '100%',
				placeholder:'Valida Email Efecto[changeIcon class]',
				state:'active',
				icon:{
					type:'fontawesome',
					class:'fa-times'
				},
				listeners: {
                            onValidateSucess: function(event) {
							console.log("OK");
							iconX = {class:'fa-check',
									type:'fa'
									};
                            event.data.OBJ.changeIcon(iconX);
							},
							onValidateFail: function(event) {
							console.log("fail");
							iconY = {class:'fa-times',type:'fa'};
                            event.data.OBJ.changeIcon(iconY);
							}
                        },
			validar:{		
					'email':true,
					'longitud':
					{
						'min':5,
						'max':35
					}				   
				},
			},
	
			},
			{type: 'InputField',
			label: {html:'<b>validar url[con color]</b>',
					cols:4},
			input:{cols:8,
				width: '100%',
				state:'warning',
				placeholder:'http://www.google.com.pe',
				icon:{
					type:'fontawesome',
					class:'fa-refresh'
				},
				validar:{		
					'url':true,				   
				},
				listeners: {
                            onValidateSucess: function(event) {
							console.log("OK");
							iconX = {class:'fa-check',type:'fa',color:'green',
									};
                            event.data.OBJ.changeIcon(iconX);
							},
							onValidateFail: function(event) {
							console.log("fail");
							iconY = {class:'fa-times',type:'fa',color:'red'};
                            event.data.OBJ.changeIcon(iconY);
							}
                        },
			},
			
			
			
			},
			{type: 'InputField',
			label: {html:'<b>Validar Direccion Ip</b>',
					cols:4},
			input:{cols:8,
				width: '100%',
				state:'info',
				placeholder:'192.168.0.1',
				icon:{
					type:'fontawesome',
					class:'fa-check'
				},
			validar:{		
					'ipv4':true,				   
				},
			listeners: {
                            onValidateSucess: function(event) {
							console.log("OK");
							iconX = {class:'fa-check',type:'fa',color:'green',
									};
                            event.data.OBJ.changeIcon(iconX);
							event.data.OBJ.changeInputState('active');
							},
							onValidateFail: function(event) {
							console.log("fail");
							iconY = {class:'fa-times',type:'fa',color:'red'};
                            event.data.OBJ.changeIcon(iconY);
							event.data.OBJ.changeInputState('error');
							}
                        },
			},	
			},
	   ]
	}
]	
}).show();
}