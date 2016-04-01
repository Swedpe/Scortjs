
function ejemploTextFin(){
visiblesSideBar = new Array();
Components.create('FreeDiv',{
id:'mainContent',
freeHtml:true,
container: $('.page-content'),
html:'<strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 14pt">TEXT-AREA & ITEMS</P></font></strong> <div class="row"> <div  id="ejemplo1" class="col-sm-4" style="height:320px" ><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt">INPUT STATES</P></font></strong> <br><br></div><div id="ejemplo2" class="col-sm-4" style="height: 320px"><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt"> TEXT-AREA</P></font></strong> </div><div id="ejemplo3" class="col-sm-4" style="height: 320px"><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt">TEXTFIELD ITEMS</P></font></strong> </div></div><div class="row"><div  id="ejemplo4" class="col-sm-6" style="height: 320px" ><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt">AUTOCOMPLETE TEXT</P></font></strong> <br><br></div><div id="ejemplo5" class="col-sm-6" style="height: 320px"><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt">VALIDACIONES TEXT</P></font></strong> </div></div>',
});
	
visiblesSideBar[1]=Components.create('Form',{
    container: $('#ejemplo1'),
	id: 'TestForm',
	border: false,
	defaultType: "textfield",																	
	fieldDefaults: {
		labelWidth: 60
	},
	items:[	
	{type: 'InputField',
	container: $('#ejemplo1'),
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
  container: $('#ejemplo1'),
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
  container: $('#ejemplo1'),
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
  container: $('#ejemplo1'),
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
  container: $('#ejemplo1'),
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
  container: $('#ejemplo1'),
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

visiblesSideBar[2]=Components.create('Form',{		
	title: "EJEMPLO TEXT-AREA", 
	container: $('#ejemplo2'),
	//state:'active',
	width:'400px',
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
	
visiblesSideBar[3]=	Components.create('Form',{
		id: 'TestForm',
		container: $('#ejemplo3'),
		border: false,
		defaultType: "textfield",																	
		fieldDefaults: {
			labelWidth: 60
		},
		items:[
	
		{type: 'InputField',
			autocalcCols:true,
			container: $('#ejemplo3'),
			//label: {cols:2,html:'<b>&nbsp;Button:</b>',},
			input:{cols:10,placeholder:'ADDON BUTTON ERROR',
				width: '80%',
				state:'error',	
				addon:{
				 addonType: 'button',
		         position:'right',
				 
				icon:{
					type:'fa',
					class:'fa-cogs',
					//position:'left',
					},
				tooltip:'Error',	  
				handler: function(event) {
					alert('Error');
				}
			},
		  },
		},
        {type: 'InputField',
			autocalcCols:true,
			container: $('#ejemplo3'),
			//label: {cols:2,html:'<b>&nbsp;Button:</b>',},
			input:{cols:10,placeholder:'ADDON BUTTON HIGHLIGHT',
				width: '80%',
				state:'highlight',	
				addon:{
				addonType: 'button',
		            position:'right',
				icon:{
					type:'fa',
					class:'fa-cogs',
					},
				tooltip:'Highlight',	  
				handler: function(event) {
					alert('Highlight');
				}
			},	
		  },
		},  

        {type: 'InputField',
			autocalcCols:true,
			container: $('#ejemplo3'),
			//label: {cols:2,html:'<b>&nbsp;Button:</b>',},
			input:{cols:10,placeholder:'ADDON BUTTON ACTIVE',
				width: '80%',
				state:'active',
				addon:{
				addonType: 'button',
		        position:'right',
				icon:{
					type:'fa',
					class:'fa-cogs',
					},
				tooltip:'Active',	  
				handler: function(event) {
					alert('Active');
			   }
			},
		  },
		},  
        {type: 'InputField',
			autocalcCols:true,
			container: $('#ejemplo3'),
			//label: {cols:2,html:'<b>&nbsp;Button:</b>',},
			input:{cols:10,placeholder:'ADDON BUTTON WARNING',
				width: '80%',
				state:'warning',
				addon:{
				addonType: 'button',
		            position:'right',
				icon:{
					type:'fa',
					class:'fa-cogs',
					},
				tooltip:'Warnning',	  
				handler: function(event) {
					alert('warning');
				}
			},
		  },
		},  
         {type: 'InputField',
			autocalcCols:true,
			container: $('#ejemplo3'),
			//label: {cols:2,html:'<b>&nbsp;Button:</b>',},
			input:{cols:10,placeholder:'ADDON BUTTON INFO',
				width: '80%',
				state:'info',
				addon:{
				addonType: 'button',
			    position:'right',
		
				icon:{
					type:'fa',
					class:'fa-cogs',
					},
				tooltip:'Info',	  
				handler: function(event) {
					alert('Info');
				}
			},
		   },
		},  

        {type: 'InputField',
			autocalcCols:true,
			container: $('#ejemplo3'),
			//label: {cols:2,html:'<b>&nbsp;Button:</b>',},
			input:{cols:10,placeholder:'ADDON BUTTON DEFAULT',
				width: '80%',
				addon:{
				addonType: 'button',
		        position:'right',
				icon:{
					type:'fa',
					class:'fa-cogs',
					},
				tooltip:'Default',	  
				handler: function(event) {
					alert('Default');
				}
			},
		  },
		},  			
	]
}).show();
visiblesSideBar[4]=Components.create('FreeDiv',{																		
	x: 16,
	y: 43,
	container: $('#ejemplo4'),
	html:'<p>Escriba "Nombre" o "Direccion"</p>'																		
}).show();
visiblesSideBar[5]=Components.create('AutoCompleteInputField',{
			container: $('#ejemplo4'),				
								x:0,
								y: 100,
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

visiblesSideBar[6]=Components.create('Button',{		
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
	container: $('#ejemplo5'),
	title: "Validaciones y Mas validaciones",		
	height:420, 
	width:610,
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