function ejemploTab(){
Components.create('FreeDiv',{
id:'mainContent',
freeHtml:true,
container: $('.page-content'),
html:'<div><div class="row"><div  id="Colorerror" class="col-sm-4"></div><div  id="ColorActive" class="col-sm-4" ></div><div  id="Colorinfo" class="col-sm-4" ></div><br><br></div><div class="row"><div  id="Colorhighlight" class="col-sm-4"></div><div  id="Colorwarning"class="col-sm-4"></div><div  id="Colordefault" class="col-sm-4"></div><br><br></div></div>',
});
visiblesSideBar[1]=Components.create('Window',{		
container: $('#ColorActive'),
	title: "Tabs Anidados", 
	state:'active',
	behavior:'panel',
	items: [
	{
	  type: "TabPanel",
	  id:"EjemploTabs",
	  region: 'center',
	  state:'active',
	  activeTab: 0,
	  items: [					
	  {
		  type: "Tab",
		  title: "Info",
		  icon: {
				type:'fa',		//tipos posibles fontawesome y image
				class:'fa-info',
			},
		  items: [
			  {
				type: "TabPanel",
				items: [
					{
						type: "Tab",
						title: "Tab010",
						icon: {
							type:'fa',		//tipos posibles fontawesome y image
							class:'fa-envelope',
							position:'right',
							//fa fa-whatsapp
							//color:'green',
						},
						items: [],
						html:'<div><h2>Ejemplo de Tabs Anidados(Nested)</h2><br><b>Notese en el codigo:</b> Un tab puede contener otros tabs, y asi lograr acabados de interface mas vistosos,'+ 
						'que permiten navegagacion fluida.<br> Definir esta estrucuta es simple y la puede ver en el codigo de este ejemplo y en el manual del sistema .</div>',
						
					},
					{
						type: "Tab",
						title: "Tab020",
						icon: {
							type:'fa',		//tipos posibles fontawesome y image
							class:'fa-paw',
							//fa fa-whatsapp
						},
						items: [
          {
			type: 'Button',
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
		  },
		  {
			type: 'Button',
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
		  },
		  {
			type: 'Button',
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
		  },
		  {
			type: 'Button',
			scale: 'medium',
			state:'error',
			text:'Estado error',
			tooltip:'Tamaño Personalizado',	  
			handler: function() {
				alert('error');
			}  
		  },
		  {
			type: 'Button',
			state:'active',
			scale: 'medium',
			text:'Estado active',
			tooltip:'Medium button',	  
			handler: function() {
				alert('active');
			}
		  },
		  {
			type: 'Button',
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
		  },
		  {
			type: 'Button',
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
		 }, 
		 {
			type: 'Button',
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
		 }, 
		 {
			type: 'Button',
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
		 },
		 {
			type: 'Button',
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
		 },
		 {
			type: 'Button',
			scale: 'mini',
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
			 },
			  
        ]
						
					},
					{
						type: "Tab",
						title: "Tab030",
					icon: {
							type:'fa',		//tipos posibles fontawesome y image
							class:'fa-camera',
							//fa fa-whatsapp
						},
						items: [				   
			{type: 'InputField',
			label: {html:'<b>Select Neutral</b>',
					cols:3
			},
			input:{cols:9,
     				type: 'ComboBox',
					label: 'Tipo Variable',
					width:150,
					name:'ComboNumber',
					displayField: 'TipoVariable',
					valueField: 'TipoVariable',
					store: {
						id: 'DataTypes',
						fields: ['IdTipoVariable','TipoVariable'],
						data: [
							{ 'IdTipoVariable': '1', "TipoVariable": "number"  },									
							{ 'IdTipoVariable': '3', "TipoVariable": "string"  },
							{ 'IdTipoVariable': '4', "TipoVariable": "date"  },
							{ 'IdTipoVariable': '5', "TipoVariable": "boolean"  }
						]
					}

			},
			
			css:{'padding-top': '10px'
			},
			
			
			},
			{type: 'InputField',
			label: {html:'<b>Select highlight</b>',
					cols:3
			},
			input:{cols:9,
     				type: 'ComboBox',
					label: 'Tipo Variable',
					width:150,
					state:'highlight',
					name:'ComboNumber',
					displayField: 'TipoVariable',
					valueField: 'TipoVariable',
					store: {
						id: 'DataTypes',
						fields: ['IdTipoVariable','TipoVariable'],
						data: [
							{ 'IdTipoVariable': '1', "TipoVariable": "number"  },									
							{ 'IdTipoVariable': '3', "TipoVariable": "string"  },
							{ 'IdTipoVariable': '4', "TipoVariable": "date"  },
							{ 'IdTipoVariable': '5', "TipoVariable": "boolean"  }
						]
					}

			},
			
			css:{'padding-top': '10px'
			},
			
			
			},
			{type: 'InputField',
			label: {html:'<b>Select active</b>',
					cols:3
			},
			input:{cols:9,
     				type: 'ComboBox',
					label: 'Tipo Variable',
					width:150,
					state:'active',
					name:'ComboNumber',
					displayField: 'TipoVariable',
					valueField: 'TipoVariable',
					store: {
						id: 'DataTypes',
						fields: ['IdTipoVariable','TipoVariable'],
						data: [
							{ 'IdTipoVariable': '1', "TipoVariable": "number"  },									
							{ 'IdTipoVariable': '3', "TipoVariable": "string"  },
							{ 'IdTipoVariable': '4', "TipoVariable": "date"  },
							{ 'IdTipoVariable': '5', "TipoVariable": "boolean"  }
						]
					}

			},
			
			css:{'padding-top': '10px'
			},
			
			
			},
			{type: 'InputField',
			label: {html:'<b>Select info</b>',
					cols:3
			},
			input:{cols:9,
     				type: 'ComboBox',
					label: 'Tipo Variable',
					width:150,
					state:'info',
					name:'ComboNumber',
					displayField: 'TipoVariable',
					valueField: 'TipoVariable',
					store: {
						id: 'DataTypes',
						fields: ['IdTipoVariable','TipoVariable'],
						data: [
							{ 'IdTipoVariable': '1', "TipoVariable": "number"  },									
							{ 'IdTipoVariable': '3', "TipoVariable": "string"  },
							{ 'IdTipoVariable': '4', "TipoVariable": "date"  },
							{ 'IdTipoVariable': '5', "TipoVariable": "boolean"  }
						]
					}

			},
			
			css:{'padding-top': '10px'
			},
			
			
			},
			{type: 'InputField',
			label: {html:'<b>Select error</b>',
					cols:3
			},
			input:{cols:9,
     				type: 'ComboBox',
					label: 'Tipo Variable',
					state:'error',
					width:150,
					name:'ComboNumber',
					displayField: 'TipoVariable',
					valueField: 'TipoVariable',
					store: {
						id: 'DataTypes',
						fields: ['IdTipoVariable','TipoVariable'],
						data: [
							{ 'IdTipoVariable': '1', "TipoVariable": "number"  },									
							{ 'IdTipoVariable': '3', "TipoVariable": "string"  },
							{ 'IdTipoVariable': '4', "TipoVariable": "date"  },
							{ 'IdTipoVariable': '5', "TipoVariable": "boolean"  }
						]
					}

			},
			
			css:{'padding-top': '10px'
			},
			
			
			},
			{type: 'InputField',
			label: {html:'<b>Select listeners: <I>SELECT</I></b>',
					cols:3
			},
			input:{cols:9,
     				type:'ComboBox',	  
					id:"micombo",
					x:0,
					y: 50,
					label: 'ComboBox con Evento',                                        
					store: {
						fields: ["Id", "Nivel"],
						data: [
							{ Id: -1, Nivel: "Selecciona"},
							{ Id: 0, Nivel: "Nivel1"},
							{ Id: 1, Nivel: "Nivel2"},
							{ Id: 2, Nivel: "Nivel3"},
							{ Id: 3, Nivel: "Nivel4"}										
						]
					},
					valueField: 'Id',
					displayField: 'Nivel',
					mode:'local',
					readOnly: false	,								
					listeners: {
								select: function(combo, record, index){
									Components.getComponentById('miInput').setValue(JSON.stringify(record));
								}
					}

			},
			
			css:{'padding-top': '10px'
			},			
			},
			{type: 'InputField',
			label: {html:'<b>Select listeners: select</b>',
					cols:3},
			input:{cols:9,
				id:'miInput',
				width: '100%',
				placeholder:'Se llena con la seleccion del combo superior',
				icon:{
					type:'fontawesome',
					class:'fa-times',
					color:'rgb(85, 85, 95)'
				},
			 },
			},	
			{
			type:'FreeDiv',	
			freeHtml:true,
			html:'<div class="form-group" id="ButtonsMid"><div class="col-sm-2"></div><div class="btnAceptar col-sm-4"></div><div class="btnCancelar col-sm-4"></div><div class="col-sm-2"></div></div>',
			},	
		]	
					}
				]
			  }
		  ]
	  },
	  {		
		  type: "Tab",
		  title: "Tab con mas altura",  
		  icon: {
				type:'fa',		//tipos posibles fontawesome y image
				class:'fa-whatsapp',
				//fa fa-whatsapp
			},
			 items: [
					{
						type: 'ToolBar',
						id: 'ChartProyectoWindowsToolBar',
						region: 'top',
						items: [
						   {
								type: 'Button',
								id : 'izquierdaBtn',
								shape:'box',
								scale:'minier',
								icon:{
											type:'fontawesome',
											class:'fa-bicycle',
											color:'#000099',
											position:'left',
								},
								tooltip:'flecha',
							},
							{
								type: 'Button',
								id : 'derechaBtn',        
								shape:'box',
								scale:'minier',
								icon:{
											type:'fontawesome',
											class:'fa-bug',
											color:'blue',
											position:'left',
								},
								tooltip:'Flecha',
							},
							{
								type: 'Button',
								id : 'arribaBtn',        
								shape:'box',
								scale:'minier',
								icon:{
											type:'fontawesome',
											class:'fa-train',
											color:'red',
											position:'left',
								},
								tooltip:'Flecha',
							
							},
							{
								type: 'Button',
								id : 'abajoBtn',        
								shape:'box',
								scale:'minier',
								icon:{
											type:'fontawesome',
											class:'fa-tasks',
											color:'green',
											position:'left',
								},
								tooltip:'Flecha',
								
							}
						]
					},
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
							label: {html:'<b>Type DatePicker</b>',
									cols:4
							},
							input:{cols:8,
									type:'DatePicker',
									state:'error',
									width: '130',
									 listeners: {
											onValidateSucess: function() {
											alert("onValidateSucess");
											}
										}
							},
							
							css:{'padding-top': '10px'
							},
							
							
							},
							
							
							{type: 'InputField',
							label: {html:'<b>Type DatePicker</b>',
									cols:4},
							input:{
								type:'DatePicker',
								cols:8,
								width: '130',
								buttonPosition:'rigth',
								icon:{
									type:'fontawesome',
									class:'fa-key',
									color:'rgb(85, 85, 95)',
									},
							},
							 
							},
							
							{type: 'InputField',
							label: {html:'<b>Change State</b>',
									cols:4},
							input:{cols:8,
								width: '100%',
								placeholder:'Solo Texto Mínimo 6 caracteres[changeInputState()]',
								icon:{
									type:'fontawesome',
									class:'fa-envelope',
									color:'rgb(85, 85, 95)'
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
								label: {html:'<b>Change Icon Position</b>',
										cols:4},
								input:{cols:8,
									width: '100%',
									placeholder:'Valida Email Efecto[changeIcon position]',
									icon:{
										type:'fontawesome',
										class:'fa-clock-o',
										color:'rgb(85, 85, 95)'
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
							label: {html:'<b>Change Icon Clas</b>',
									cols:4},
							input:{cols:8,
								width: '100%',
								placeholder:'Valida Email Efecto[changeIcon class]',
								icon:{
									type:'fontawesome',
									class:'fa-times',
									color:'rgb(85, 85, 95)'
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
								placeholder:'http://www.google.com.pe',
								icon:{
									type:'fontawesome',
									class:'fa-refresh',
									color:'rgb(85, 85, 95)'
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
								placeholder:'192.168.0.1',
								icon:{
									type:'fontawesome',
									class:'fa-check',
									color:'rgb(85, 85, 95)'
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
							{type: 'InputField',
							label: {html:'<b>ProgressBar Input</b>',
									cols:4},
							input:{
								type:'ProgressBar',
								cols:8,
								state:'error',
								class:'striped',
								animated:true,
								width: '100%',
								input:true,
								name:'workComplete'
							},	
							}
					   ]
					}
]
	   }                  		  
	  ]
	}
]
}).show();
visiblesSideBar[2]=Components.create('Window',{		
	container: $('#Colorinfo'),
	title: "Scrolling Tabs", 
	height:300, 
	width:500, 
	state:'info',
	behavior:'panel',
	items: [
	{
	  type: "TabPanel",
	  id:"EjemploTabs",
	  region: 'center',
	  state:'info',
	  activeTab: 0,
	  items: [					
	  {		
		  type: "Tab",
		  title: "Info",  
		  icon: {
				type:'fa',		//tipos posibles fontawesome y image
				class:'fa-info',
				//fa fa-whatsapp
			},
			html:'<div><h2>Ejemplo de exceso de tabs</h2><br><b>Notese en el codigo:</b> Cuando El numero de Tabs supera el ancho del contenedor aparecen los controles,'+ 
			'que permiten navegar entre los demas Tabs, El calculo es automatico.<br><br>'+
						'Use los botones laterales para visualizar los tabs ocultos</div>',
			 items: []
	   },
		{		
		  type: "Tab",
		  title: "Tab Simple 2",  
		  icon: {
				type:'fa',		//tipos posibles fontawesome y image
				class:'fa-whatsapp',
				//fa fa-whatsapp
			},
			 items: [
					{
						type: 'ToolBar',
						id: 'ChartProyectoWindowsToolBar',
						region: 'top',
						items: [
						   {
								type: 'Button',
								id : 'izquierdaBtn',
								shape:'box',
								scale:'minier',
								icon:{
											type:'fontawesome',
											class:'fa-bicycle',
											color:'#000099',
											position:'left',
								},
								tooltip:'flecha',
							},
							{
								type: 'Button',
								id : 'derechaBtn',        
								shape:'box',
								scale:'minier',
								icon:{
											type:'fontawesome',
											class:'fa-bug',
											color:'blue',
											position:'left',
								},
								tooltip:'Flecha',
							},
							{
								type: 'Button',
								id : 'arribaBtn',        
								shape:'box',
								scale:'minier',
								icon:{
											type:'fontawesome',
											class:'fa-train',
											color:'red',
											position:'left',
								},
								tooltip:'Flecha',
							
							},
							{
								type: 'Button',
								id : 'abajoBtn',        
								shape:'box',
								scale:'minier',
								icon:{
											type:'fontawesome',
											class:'fa-tasks',
											color:'green',
											position:'left',
								},
								tooltip:'Flecha',
								
							}
						]
					},
					]
	   },
		{		
		  type: "Tab",
		  title: "Tab Simple 3",  
		  icon: {
				type:'fa',		//tipos posibles fontawesome y image
				class:'fa-whatsapp',
				//fa fa-whatsapp
			},
			 items: [
					{
						type: 'ToolBar',
						id: 'ChartProyectoWindowsToolBar',
						region: 'top',
						items: [
						   {
								type: 'Button',
								id : 'izquierdaBtn',
								shape:'box',
								scale:'minier',
								icon:{
											type:'fontawesome',
											class:'fa-bicycle',
											color:'#000099',
											position:'left',
								},
								tooltip:'flecha',
							},
							{
								type: 'Button',
								id : 'derechaBtn',        
								shape:'box',
								scale:'minier',
								icon:{
											type:'fontawesome',
											class:'fa-bug',
											color:'blue',
											position:'left',
								},
								tooltip:'Flecha',
							},
							{
								type: 'Button',
								id : 'arribaBtn',        
								shape:'box',
								scale:'minier',
								icon:{
											type:'fontawesome',
											class:'fa-train',
											color:'red',
											position:'left',
								},
								tooltip:'Flecha',
							
							},
							{
								type: 'Button',
								id : 'abajoBtn',        
								shape:'box',
								scale:'minier',
								icon:{
											type:'fontawesome',
											class:'fa-tasks',
											color:'green',
											position:'left',
								},
								tooltip:'Flecha',
								
							}
						]
					},
					]
	   },
		{		
		  type: "Tab",
		  title: "Tab Simple 4",  
		  icon: {
				type:'fa',		//tipos posibles fontawesome y image
				class:'fa-whatsapp',
				//fa fa-whatsapp
			},
			 items: [
					{
						type: 'ToolBar',
						id: 'ChartProyectoWindowsToolBar',
						region: 'top',
						items: [
						   {
								type: 'Button',
								id : 'izquierdaBtn',
								shape:'box',
								scale:'minier',
								icon:{
											type:'fontawesome',
											class:'fa-bicycle',
											color:'#000099',
											position:'left',
								},
								tooltip:'flecha',
							},
							{
								type: 'Button',
								id : 'derechaBtn',        
								shape:'box',
								scale:'minier',
								icon:{
											type:'fontawesome',
											class:'fa-bug',
											color:'blue',
											position:'left',
								},
								tooltip:'Flecha',
							},
							{
								type: 'Button',
								id : 'arribaBtn',        
								shape:'box',
								scale:'minier',
								icon:{
											type:'fontawesome',
											class:'fa-train',
											color:'red',
											position:'left',
								},
								tooltip:'Flecha',
							
							},
							{
								type: 'Button',
								id : 'abajoBtn',        
								shape:'box',
								scale:'minier',
								icon:{
											type:'fontawesome',
											class:'fa-tasks',
											color:'green',
											position:'left',
								},
								tooltip:'Flecha',
								
							}
						]
					},
					]
	   },
		{		
		  type: "Tab",
		  title: "Tab Simple 5",  
		  icon: {
				type:'fa',		//tipos posibles fontawesome y image
				class:'fa-whatsapp',
				//fa fa-whatsapp
			},
			 items: [
					{
						type: 'ToolBar',
						id: 'ChartProyectoWindowsToolBar',
						region: 'top',
						items: [
						   {
								type: 'Button',
								id : 'izquierdaBtn',
								shape:'box',
								scale:'minier',
								icon:{
											type:'fontawesome',
											class:'fa-bicycle',
											color:'#000099',
											position:'left',
								},
								tooltip:'flecha',
							},
							{
								type: 'Button',
								id : 'derechaBtn',        
								shape:'box',
								scale:'minier',
								icon:{
											type:'fontawesome',
											class:'fa-bug',
											color:'blue',
											position:'left',
								},
								tooltip:'Flecha',
							},
							{
								type: 'Button',
								id : 'arribaBtn',        
								shape:'box',
								scale:'minier',
								icon:{
											type:'fontawesome',
											class:'fa-train',
											color:'red',
											position:'left',
								},
								tooltip:'Flecha',
							
							},
							{
								type: 'Button',
								id : 'abajoBtn',        
								shape:'box',
								scale:'minier',
								icon:{
											type:'fontawesome',
											class:'fa-tasks',
											color:'green',
											position:'left',
								},
								tooltip:'Flecha',
								
							}
						]
					},
					]
	   },
		{		
		  type: "Tab",
		  title: "Tab Simple 7",  
		  icon: {
				type:'fa',		//tipos posibles fontawesome y image
				class:'fa-whatsapp',
				//fa fa-whatsapp
			},
			 items: [
					{
						type: 'ToolBar',
						id: 'ChartProyectoWindowsToolBar',
						region: 'top',
						items: [
						   {
								type: 'Button',
								id : 'izquierdaBtn',
								shape:'box',
								scale:'minier',
								icon:{
											type:'fontawesome',
											class:'fa-bicycle',
											color:'#000099',
											position:'left',
								},
								tooltip:'flecha',
							},
							{
								type: 'Button',
								id : 'derechaBtn',        
								shape:'box',
								scale:'minier',
								icon:{
											type:'fontawesome',
											class:'fa-bug',
											color:'blue',
											position:'left',
								},
								tooltip:'Flecha',
							},
							{
								type: 'Button',
								id : 'arribaBtn',        
								shape:'box',
								scale:'minier',
								icon:{
											type:'fontawesome',
											class:'fa-train',
											color:'red',
											position:'left',
								},
								tooltip:'Flecha',
							
							},
							{
								type: 'Button',
								id : 'abajoBtn',        
								shape:'box',
								scale:'minier',
								icon:{
											type:'fontawesome',
											class:'fa-tasks',
											color:'green',
											position:'left',
								},
								tooltip:'Flecha',
								
							}
						]
					},
					{
								type: 'Button',
								id : 'abajoBtn',        
								shape:'box',
								scale:'minier',
								icon:{
											type:'fontawesome',
											class:'fa-tasks',
											color:'green',
											position:'left',
								},
								tooltip:'Flecha',
								
					}
					]
	   }
	  ]
	}
]
}).show();
visiblesSideBar[3]=Components.create('Window',{		
	container: $('#Colorerror'),
	title: "Tabs con Formulario", 
	height:300, 
	width:500, 
	state:'error',
	behavior:'panel',
	items: [
	{
	  type: "TabPanel",
	  id:"EjemploTabs",
	  region: 'center',
	  state:'error',
	  activeTab: 0,
	  items: [
		{		
		  type: "Tab",
		  title: "Info",  
		  icon: {
				type:'fa',		//tipos posibles fontawesome y image
				class:'fa-info',
				//fa fa-whatsapp
			},
			 items: [],
			 html:'<div><h2>Ejemplo de Formulario dentro de Tabs</h2><br><b>Notese en el codigo:</b> Un tab puede contener formularios, la altura se auto ajusta segun el contenido del formulario <br>'+ 
						'ciertamente el formulario sigue siendo responsivo.<br><br> Presione en el siguiente Tab para ver lo explicado en Funcionamiento<br>'+
						'El manual del formulario y los demas contoles los encuentra en la pagina de Scort JS</div>',
			 
	   }, 
	  {		
		  type: "Tab",
		  title: "Tab Simple",  
		  icon: {
				type:'fa',		//tipos posibles fontawesome y image
				class:'fa-whatsapp',
				//fa fa-whatsapp
			},
			 items: [
	{
		type: 'ToolBar',
		id: 'ChartProyectoWindowsToolBar',
		region: 'top',
		items: [
		   {
				type: 'Button',
				id : 'izquierdaBtn',
				shape:'box',
				scale:'minier',
				icon:{
							type:'fontawesome',
							class:'fa-bicycle',
							color:'#000099',
							position:'left',
				},
				tooltip:'flecha',
			},
			{
				type: 'Button',
				id : 'derechaBtn',        
				shape:'box',
				scale:'minier',
				icon:{
							type:'fontawesome',
							class:'fa-bug',
							color:'blue',
							position:'left',
				},
				tooltip:'Flecha',
			},
			{
				type: 'Button',
				id : 'arribaBtn',        
				shape:'box',
				scale:'minier',
				icon:{
							type:'fontawesome',
							class:'fa-train',
							color:'red',
							position:'left',
				},
				tooltip:'Flecha',
			
			},
			{
				type: 'Button',
				id : 'abajoBtn',        
				shape:'box',
				scale:'minier',
				icon:{
							type:'fontawesome',
							class:'fa-tasks',
							color:'green',
							position:'left',
				},
				tooltip:'Flecha',
				
			}
		]
	},
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
			label: {html:'<b>Type DatePicker</b>',
					cols:4
			},
			input:{cols:8,
					type:'DatePicker',
					state:'error',
					width: '130',
					 listeners: {
                            onValidateSucess: function() {
                            alert("onValidateSucess");
							}
                        }
			},
			
			css:{'padding-top': '10px'
			},
			
			
			},
			
			
			{type: 'InputField',
			label: {html:'<b>Type DatePicker</b>',
					cols:4},
			input:{
				type:'DatePicker',
				cols:8,
				width: '130',
				buttonPosition:'rigth',
				icon:{
					type:'fontawesome',
					class:'fa-key',
					color:'rgb(85, 85, 95)',
					},
			},
			 
			},
			
			{type: 'InputField',
			label: {html:'<b>Change State</b>',
					cols:4},
			input:{cols:8,
				width: '100%',
				placeholder:'Solo Texto Mínimo 6 caracteres[changeInputState()]',
				icon:{
					type:'fontawesome',
					class:'fa-envelope',
					color:'rgb(85, 85, 95)'
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
				label: {html:'<b>Change Icon Position</b>',
						cols:4},
				input:{cols:8,
					width: '100%',
					placeholder:'Valida Email Efecto[changeIcon position]',
					icon:{
						type:'fontawesome',
						class:'fa-clock-o',
						color:'rgb(85, 85, 95)'
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
			label: {html:'<b>Change Icon Clas</b>',
					cols:4},
			input:{cols:8,
				width: '100%',
				placeholder:'Valida Email Efecto[changeIcon class]',
				icon:{
					type:'fontawesome',
					class:'fa-times',
					color:'rgb(85, 85, 95)'
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
				placeholder:'http://www.google.com.pe',
				icon:{
					type:'fontawesome',
					class:'fa-refresh',
					color:'rgb(85, 85, 95)'
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
				placeholder:'192.168.0.1',
				icon:{
					type:'fontawesome',
					class:'fa-check',
					color:'rgb(85, 85, 95)'
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
			{type: 'InputField',
			label: {html:'<b>ProgressBar Input</b>',
					cols:4},
			input:{
				type:'ProgressBar',
				cols:8,
				state:'error',
				class:'striped',
				animated:true,
				width: '100%',
				input:true,
				name:'workComplete'
			},	
			}
	   ]
	}
]
	   }                  		  
	  ]
	}
]
}).show();
visiblesSideBar[4]=Components.create('Window',{
container: $('#Colorhighlight'),		
	title: "Creacion Dinamica de Tabs", 
	state:'highlight',
	behavior:'panel',
	items: [
	{
	  type: "TabPanel",
	  id:"EjemploTabsAdd",
	  region: 'center',
	  state:'highlight',
	  activeTab: 0,
	  items: [
				{
					type: "Tab",
					title: "Info",
					icon: {
						type:'fa',		//tipos posibles fontawesome y image
						class:'fa-info',
						position:'right',
						//fa fa-whatsapp
						//color:'green',
					},
					items: [
					],
					html:'<div><h2>Ejemplo de Creacion Dinamica de mas tabs</h2><br><b>Notese en el codigo:</b> Un tab puede contener otros tabs, y asi lograr acabados de interface mas vistosos,'+ 
					'que permiten navegagacion fluida.<br> Definir esta estrucuta es simple y la puede ver en el codigo de este ejemplo y en el manual del sistema .<br><br>'+
					'Navegue con los tabs anidados para ver la fluidez del componente</div>',
					
				},	  
	  {		
		  type: "Tab",
		  title: "Tab Formulario",  
		  icon: {
				type:'fa',		//tipos posibles fontawesome y image
				class:'fa-whatsapp',
				//fa fa-whatsapp
			},
			 items: [
	{
		type: 'Form',
		id: 'CrearTab',
		border: false,
		defaultType: "textfield",																	
		fieldDefaults: {
			labelWidth: 60
		},
		items:[
			{type: 'InputField',
			label: {html:'<b>Nombre del Nuevo Tab</b>',
					cols:4},
			input:{cols:8,
				name:'TextoTab',
				value:'TabEjemplo',
				width: '100%',
				placeholder:'Ingresa el Nombre del Tab',
				icon:{
					type:'fontawesome',
					class:'fa-envelope',
					color:'rgb(85, 85, 95)'
				},					
			},
			},
			{type: 'InputField',
			label: {html:'<b>Tipo de icono</b>',
					cols:4},
				input:{cols:8,
				type: 'ComboBox',
					name:'TipoIco',
					displayField: 'Display',
					valueField: 'valor',
					store: {
						id: 'DataTypes',
						fields: ['IdTipoVariable','TipoVariable'],
						data: [
							{ 'valor': 'fa', "Display": "Font Awesome"  },									
							{ 'valor': 'glip', "Display": "Glip Icons"  },
						]
					}				
			},
			},
			{type: 'InputField',
				id:'IconoNewTab',
				label: {html:'<b>Icono</b>',
						cols:4},
				input:{cols:8,
					name:'IcoClass',
					width: '100%',
					placeholder:'',
					icon:{
						type:'fontawesome',
						class:'fa-clock-o',
						color:'rgb(85, 85, 95)'
					},
				},		
			},
			{type: 'InputField',
				id:'HtmlNewTab',
				label: {html:'<b>Html</b>',
						cols:12},
				input:{cols:12,
						name:'HtmlNewTab',
						type: 'TextArea',
						value:'Contenido Html de prueba para nuevo Tab',
						tinymce:true,
				},		
			},
			
			{
				type:'FreeDiv',	
				freeHtml:true,
				html:'<div class="form-group" id="ButtonsMid"><div class="col-sm-2"></div><div class="btnCrear col-sm-4"></div><div class="btnActivar col-sm-4"></div><div class="col-sm-2"></div></div>',
			},
	   ]
	}
]
	   }                  		  
	  ]
	}
]
}).show();
visiblesSideBar[5]=Components.create('Button', {
		container:$('.btnCrear'),
		scale: 'medium',
		state:'active',
		text:'Crear Nuevo Tab',
		icon:{
			type:'fontawesome',
			class:'fa-align-left',
			color:'white',
			position:'left'
		},
		tooltip:'Tamaño Personalizado',	
		handler: function() {
			 FormValues = Components.getComponentById('CrearTab').getValues();
			 console.log(FormValues);
			 TabContainer = Components.getComponentById('EjemploTabsAdd');
			 var mytab = {
								type: 'Tab',
								id: "TabDinamico-"+ Math.round(Math.random() * 2000),
								title: FormValues.TextoTab,                      
								autoScroll: true,
								html: FormValues.HtmlNewTab,
								autoScroll: true
							}
			TabContainer.add(mytab);
			}  
		});
visiblesSideBar[6]=Components.create('Button', {		
		container:$('.btnActivar'),
		scale: 'medium',
		text:'Activar El Tab Creado',
		state:'info',
		icon:{
			type:'fontawesome',
			class:'fa-database',
			color:'black',
			position:'left'
		},
		tooltip:'Leer toda la data',
		handler: function() {
		console.log('try');
				 alert(Components.getComponentById('HtmlNewTab').getValue());
			}   
	   });
visiblesSideBar[7]=Components.create('Window',{		
	container: $('#Colorwarning'),
	title: "Tabs Active + Imagen", 
	height:300, 
	width:500, 
	state:'warning',
	behavior:'panel',
	items: [
	{
	  type: "TabPanel",
	  id:"EjemploTabs1",
	  region: 'center',
	  state:'warning',
	  activeTab: 0,
	  items: [
	  {		
		  type: "Tab",
		  title: "Info",  
		  state:'warning',
		  html:'<div><h2>Ejemplo de Tabs con Activacion e Imagen</h2><br><b>Notese en el codigo:</b>Cada Tab posee un icono imagen que lo acompaña'+ 
			'Este tab Info agrega un boton que muestra el tab que esta activado<br><br>'+
						'A cada tab se le puede agregar el evento.</div>',

		 listeners: {
			  activate: function() {
				 alert("Tab Info se activo");
			  }
		  },
		 icon: {
				type:'fa',		//tipos posibles fontawesome y image
				class:'fa-info',
				//fa fa-whatsapp
			},
			
			items:[
			{
				type: 'Button',
				id:'uno',
				shape:'rect',
				state:'warning',
                text:'TabActive',
				icon: {
				type:'fa',		//tipos posibles fontawesome y image
				class:'fa-ra',
				//fa fa-whatsapp
			  },				
            },
			]	
	   },
	  {
		  type: "Tab",
		  title: "TabImages",
		   listeners: {
			  activate: function() {
				 alert("TabImages se activo");
			  }
		  },
		  icon: {
				type:'fa',		//tipos posibles fontawesome y image
				class:'fa-camera',
			},
		  items: [
			  {
				type: "TabPanel",
				state:'error',						//Se tiene que definir el estilo de el tabPanel interior
				items: [
					{
						type: "Tab",
						title: "TabImage1",
						icon: {
							type:'image',		//tipos posibles fontawesome y image
							image:'images/ok.png',
							position:'left',
							//fa fa-whatsapp
							//color:'green',
						},
						items: [
          {
				type: 'ProgressBar',	
				width: 250,
				value:50,
				state:'active',
			
				class:'striped',
				animate:true,
				position:'right',
                css:
				{ 'margin-top': '10px'
				}						
            },
			{
				type: 'ProgressBar',
				align: "left",
				width: '50%',
				value:75,
				state:'error',
				class:'striped',
				animate:true,		
            },
			{
				type: 'ProgressBar',
				align: "left",
				width: '60%',
				value:90,
				state:'highlight',
				class:'striped',
				animate:true,	
            },
			{
				type: 'ProgressBar',
				align: "left",
				width: '70%',
				value:30,
				state:'warning',
				class:'striped',
				animate:true,		
            },
			{
				type: 'ProgressBar',
				width: '80%',
				value:65,
				state:'info',
				class:'striped',
				animate:true,		
            },
			{
				type: 'ProgressBar',
				shape:'circle',
				value:25,
				scale:'minier',
				state:'active',
				animate:false,		
            },			
			{
				type: 'ProgressBar',
				shape:'circle',
				value:35,
				state:'info',
				scale:'mini',
				animate:false,		
            },
			{
				type: 'ProgressBar',
				shape:'circle',
				value:45,
				scale:'small',
				state:'error',
				animate:false,		
            },
			{
				type: 'ProgressBar',
				shape:'circle',
				value:55,
				scale:'medium',
				state:'warning',
				animate:false,		
            },		
        ]
						
	},
					{
						type: "Tab",
						title: "TabImage2",
						icon: {
							type:'image',		//tipos posibles fontawesome y image
							image:'images/actualizar16.png',
							position:'left',
							//abajoNA
						},
						items: [
          {
			type: 'Button',
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
		  },
		  {
			type: 'Button',
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
		  },
		  {
			type: 'Button',
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
		  },
		  {
			type: 'Button',
			scale: 'medium',
			state:'error',
			text:'Estado error',
			tooltip:'Tamaño Personalizado',	  
			handler: function() {
				alert('error');
			}  
		  },
		  {
			type: 'Button',
			state:'active',
			scale: 'medium',
			text:'Estado active',
			tooltip:'Medium button',	  
			handler: function() {
				alert('active');
			}
		  },
		  {
			type: 'Button',
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
		  },
		  {
			type: 'Button',
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
		 }, 
		 {
			type: 'Button',
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
		 }, 
		 {
			type: 'Button',
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
		 },
		 {
			type: 'Button',
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
		 },
		 {
			type: 'Button',
			scale: 'mini',
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
			 },
			  
        ]
						
					},
					{
						type: "Tab",
						title: "TabImage3",
					icon: {
							type:'image',		//tipos posibles fontawesome y image
							image:'images/cancel.png',
							position:'left',
						},
						items: [				   
			{type: 'InputField',
			label: {html:'<b>Select Neutral</b>',
					cols:3
			},
			input:{cols:9,
     				type: 'ComboBox',
					label: 'Tipo Variable',
					width:150,
					name:'ComboNumber',
					displayField: 'TipoVariable',
					valueField: 'TipoVariable',
					store: {
						id: 'DataTypes',
						fields: ['IdTipoVariable','TipoVariable'],
						data: [
							{ 'IdTipoVariable': '1', "TipoVariable": "number"  },									
							{ 'IdTipoVariable': '3', "TipoVariable": "string"  },
							{ 'IdTipoVariable': '4', "TipoVariable": "date"  },
							{ 'IdTipoVariable': '5', "TipoVariable": "boolean"  }
						]
					}

			},
			
			css:{'padding-top': '10px'
			},
			
			
			},
			{type: 'InputField',
			label: {html:'<b>Select highlight</b>',
					cols:3
			},
			input:{cols:9,
     				type: 'ComboBox',
					label: 'Tipo Variable',
					width:150,
					state:'highlight',
					name:'ComboNumber',
					displayField: 'TipoVariable',
					valueField: 'TipoVariable',
					store: {
						id: 'DataTypes',
						fields: ['IdTipoVariable','TipoVariable'],
						data: [
							{ 'IdTipoVariable': '1', "TipoVariable": "number"  },									
							{ 'IdTipoVariable': '3', "TipoVariable": "string"  },
							{ 'IdTipoVariable': '4', "TipoVariable": "date"  },
							{ 'IdTipoVariable': '5', "TipoVariable": "boolean"  }
						]
					}

			},
			
			css:{'padding-top': '10px'
			},
			
			
			},
			{type: 'InputField',
			label: {html:'<b>Select active</b>',
					cols:3
			},
			input:{cols:9,
     				type: 'ComboBox',
					label: 'Tipo Variable',
					width:150,
					state:'active',
					name:'ComboNumber',
					displayField: 'TipoVariable',
					valueField: 'TipoVariable',
					store: {
						id: 'DataTypes',
						fields: ['IdTipoVariable','TipoVariable'],
						data: [
							{ 'IdTipoVariable': '1', "TipoVariable": "number"  },									
							{ 'IdTipoVariable': '3', "TipoVariable": "string"  },
							{ 'IdTipoVariable': '4', "TipoVariable": "date"  },
							{ 'IdTipoVariable': '5', "TipoVariable": "boolean"  }
						]
					}

			},
			
			css:{'padding-top': '10px'
			},
			
			
			},
			{type: 'InputField',
			label: {html:'<b>Select info</b>',
					cols:3
			},
			input:{cols:9,
     				type: 'ComboBox',
					label: 'Tipo Variable',
					width:150,
					state:'info',
					name:'ComboNumber',
					displayField: 'TipoVariable',
					valueField: 'TipoVariable',
					store: {
						id: 'DataTypes',
						fields: ['IdTipoVariable','TipoVariable'],
						data: [
							{ 'IdTipoVariable': '1', "TipoVariable": "number"  },									
							{ 'IdTipoVariable': '3', "TipoVariable": "string"  },
							{ 'IdTipoVariable': '4', "TipoVariable": "date"  },
							{ 'IdTipoVariable': '5', "TipoVariable": "boolean"  }
						]
					}

			},
			
			css:{'padding-top': '10px'
			},
			
			
			},
			{type: 'InputField',
			label: {html:'<b>Select error</b>',
					cols:3
			},
			input:{cols:9,
     				type: 'ComboBox',
					label: 'Tipo Variable',
					state:'error',
					width:150,
					name:'ComboNumber',
					displayField: 'TipoVariable',
					valueField: 'TipoVariable',
					store: {
						id: 'DataTypes',
						fields: ['IdTipoVariable','TipoVariable'],
						data: [
							{ 'IdTipoVariable': '1', "TipoVariable": "number"  },									
							{ 'IdTipoVariable': '3', "TipoVariable": "string"  },
							{ 'IdTipoVariable': '4', "TipoVariable": "date"  },
							{ 'IdTipoVariable': '5', "TipoVariable": "boolean"  }
						]
					}

			},
			
			css:{'padding-top': '10px'
			},
			
			
			},
			{type: 'InputField',
			label: {html:'<b>Select listeners: <I>SELECT</I></b>',
					cols:3
			},
			input:{cols:9,
     				type:'ComboBox',	  
					id:"micombo",
					x:0,
					y: 50,
					label: 'ComboBox con Evento',                                        
					store: {
						fields: ["Id", "Nivel"],
						data: [
							{ Id: -1, Nivel: "Selecciona"},
							{ Id: 0, Nivel: "Nivel1"},
							{ Id: 1, Nivel: "Nivel2"},
							{ Id: 2, Nivel: "Nivel3"},
							{ Id: 3, Nivel: "Nivel4"}										
						]
					},
					valueField: 'Id',
					displayField: 'Nivel',
					mode:'local',
					readOnly: false	,								
					listeners: {
								select: function(combo, record, index){
									Components.getComponentById('miInput').setValue(JSON.stringify(record));
								}
					}

			},
			
			css:{'padding-top': '10px'
			},			
			},
			{type: 'InputField',
			label: {html:'<b>Select listeners: select</b>',
					cols:3},
			input:{cols:9,
				id:'miInput',
				width: '100%',
				placeholder:'Se llena con la seleccion del combo superior',
				icon:{
					type:'fontawesome',
					class:'fa-times',
					color:'rgb(85, 85, 95)'
				},
			 },
			},	
			{
			type:'FreeDiv',	
			freeHtml:true,
			html:'<div class="form-group" id="ButtonsMid"><div class="col-sm-2"></div><div class="btnAceptar col-sm-4"></div><div class="btnCancelar col-sm-4"></div><div class="col-sm-2"></div></div>',
			},	
		]	
					}
				]
			  }
		  ]
	  },
	  {		
		  type: "Tab",
		  title: "Tab 2", 
		  listeners: {
			  activate: function() {
				 alert("Tab 2 se activo");
			  }
		  },
		  icon: {
				type:'fa',		//tipos posibles fontawesome y image
				class:'fa-whatsapp',
				//fa fa-whatsapp
			},
			 items: [
	{
		type: 'ToolBar',
		id: 'ChartProyectoWindowsToolBar',
		region: 'top',
		items: [
		   {
				type: 'Button',
				id : 'izquierdaBtn',
				shape:'box',
				scale:'minier',
				icon:{
							type:'fontawesome',
							class:'fa-bicycle',
							color:'#000099',
							position:'left',
				},
				tooltip:'flecha',
			},
			{
				type: 'Button',
				id : 'derechaBtn',        
				shape:'box',
				scale:'minier',
				icon:{
							type:'fontawesome',
							class:'fa-bug',
							color:'blue',
							position:'left',
				},
				tooltip:'Flecha',
			},
			{
				type: 'Button',
				id : 'arribaBtn',        
				shape:'box',
				scale:'minier',
				icon:{
							type:'fontawesome',
							class:'fa-train',
							color:'red',
							position:'left',
				},
				tooltip:'Flecha',
			
			},
			{
				type: 'Button',
				id : 'abajoBtn',        
				shape:'box',
				scale:'minier',
				icon:{
							type:'fontawesome',
							class:'fa-tasks',
							color:'green',
							position:'left',
				},
				tooltip:'Flecha',
				
			}
		]
	},
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
			label: {html:'<b>Type DatePicker</b>',
					cols:4
			},
			input:{cols:8,
					type:'DatePicker',
					state:'error',
					width: '130',
					 listeners: {
                            onValidateSucess: function() {
                            alert("onValidateSucess");
							}
                        }
			},
			
			css:{'padding-top': '10px'
			},
			
			
			},
			
			
			{type: 'InputField',
			label: {html:'<b>Type DatePicker</b>',
					cols:4},
			input:{
				type:'DatePicker',
				cols:8,
				width: '130',
				buttonPosition:'rigth',
				icon:{
					type:'fontawesome',
					class:'fa-key',
					color:'rgb(85, 85, 95)',
					},
			},
			 
			},
			
			{type: 'InputField',
			label: {html:'<b>Change State</b>',
					cols:4},
			input:{cols:8,
				width: '100%',
				placeholder:'Solo Texto Mínimo 6 caracteres[changeInputState()]',
				icon:{
					type:'fontawesome',
					class:'fa-envelope',
					color:'rgb(85, 85, 95)'
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
				label: {html:'<b>Change Icon Position</b>',
						cols:4},
				input:{cols:8,
					width: '100%',
					placeholder:'Valida Email Efecto[changeIcon position]',
					icon:{
						type:'fontawesome',
						class:'fa-clock-o',
						color:'rgb(85, 85, 95)'
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
			label: {html:'<b>Change Icon Clas</b>',
					cols:4},
			input:{cols:8,
				width: '100%',
				placeholder:'Valida Email Efecto[changeIcon class]',
				icon:{
					type:'fontawesome',
					class:'fa-times',
					color:'rgb(85, 85, 95)'
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
				placeholder:'http://www.google.com.pe',
				icon:{
					type:'fontawesome',
					class:'fa-refresh',
					color:'rgb(85, 85, 95)'
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
				placeholder:'192.168.0.1',
				icon:{
					type:'fontawesome',
					class:'fa-check',
					color:'rgb(85, 85, 95)'
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
			{type: 'InputField',
			label: {html:'<b>ProgressBar Input</b>',
					cols:4},
			input:{
				type:'ProgressBar',
				cols:8,
				state:'error',
				class:'striped',
				animated:true,
				width: '100%',
				input:true,
				name:'workComplete'
			},	
			}
	   ]
	}
]
	   }                  		  
	  ]
	}
]
}).show();
$("#uno").click(function(){
		alert("El tab "+Components.getComponentById('EjemploTabs1').getActiveTab().title+" esta activo");
	});
visiblesSideBar[8]=Components.create('Window',{
	container: $('#Colordefault'),		
	title: "TabItem States", 
	height:300, 
	width:500, 
	state:'default',
	items: [
	{
	  type: "TabPanel",
	  id:"EjemploTabs",
	  region: 'center',
	  activeTab: 0,
	  items: [					
	  {		
		  type: "Tab",
		  title: "Info",  
		  state:'error',
		  html:'<div><h2>Ejemplo de Tabs de colores</h2><br><b>Notese en el codigo:</b> Cada tabs posee un estado que se le asigna dentro del codigo,'+ 
			'el contenedor fondo de los tabs es default pues se utiliza distintos tabs.<br><br>'+
						'En caso de que se quiera utilizar el mismo color para todos los tabs el contenedor de los mismos se pintaran de acuerdo al color asignado.</div>',
		  icon: {
				type:'fa',		//tipos posibles fontawesome y image
				class:'fa-info',
				//fa fa-whatsapp
			},
			
	   },
	   {		
		  type: "Tab",
		  title: "Tab Simple",  
		 state:'highlight',
		 icon: {
				type:'fa',		//tipos posibles fontawesome y image
				class:'fa-whatsapp',
				//fa fa-whatsapp
			},
	   },
	   {		
		  type: "Tab",
		  title: "Tab Simple",  
		  state:'active',
		  icon: {
				type:'fa',		//tipos posibles fontawesome y image
				class:'fa-whatsapp',
				//fa fa-whatsapp
			},
	   },
	   {		
		  type: "Tab",
		  title: "Tab Simple",  
		 state:'warning',
		 icon: {
				type:'fa',		//tipos posibles fontawesome y image
				class:'fa-whatsapp',
				//fa fa-whatsapp
			},
	   },
       {		
		  type: "Tab",
		  title: "Tab Simple",  
		  state:'info',
		  icon: {
				type:'fa',		//tipos posibles fontawesome y image
				class:'fa-whatsapp',
				//fa fa-whatsapp
			},
	   },
{		
		  type: "Tab",
		  title: "Tab Simple",  
		  icon: {
				type:'fa',		//tipos posibles fontawesome y image
				class:'fa-whatsapp',
				//fa fa-whatsapp
			},
	   } 
	  ]
	}
]
}).show();
}