function Allcontainers(){
visiblesSideBar = new Array();
Components.create('FreeDiv',{
id:'mainContent',
freeHtml:true,
container: $('.page-content'),
html:'<div><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 14pt">CONTAINERS SCORTS JS</P></font></strong><div class="row"><div  id="ejemplo1" class="col-sm-4"><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 14pt">WINDOW-CONTAINER</P></font></strong> </div><div  id="ejemplo7" class="col-sm-4"><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 14pt">MENU-CONTAINER </P></font></strong> </div><div  id="ejemplo3" class="col-sm-4" ><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 14pt">GRID-CONTAINER</P></font></strong> </div></div><div class="row"> <div  id="ejemplo6" class="col-sm-4"><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 14pt">FORM-CONTAINER</P></font></strong> </div><div  id="ejemplo4" class="col-sm-4"> <strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 14pt">ACCORDEON-CONTAINER</P></font></strong> </div><div  id="ejemplo2" class="col-sm-4" ><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 14pt">TAB-CONTAINER</P></font></strong> </div></div></div>',
});
	
visiblesSideBar[1]=Components.create('Window',{
       container: $('#ejemplo1'),
		behavior:'panel',
		state:'error',
		title: "WINDOWS + PROGRESS SCORTS JS", 
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
    }).show();

visiblesSideBar[2]=Components.create('Window',{		
container: $('#ejemplo2'),
	title: "Tabs Anidados", 
	state:'warning',
	behavior:'panel',
	items: [
	{
	  type: "TabPanel",
	  id:"EjemploTabs",
	  region: 'center',
	  state:'warning',
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
				state:'warning',
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
			html:'<div class="form-group" id="ButtonsMid1"><div class="col-sm-2"></div><div class="btnAceptar col-sm-4"></div><div class="btnCancelar col-sm-4"></div><div class="col-sm-2"></div></div>',
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
	
visiblesSideBar[3]=Components.create('Window',{
        title: "GridPrueba2", 
        behavior:'panel',
		container: $('#ejemplo3'),
		height:260, 
        state:'active',
		width:600,
        items: [
            {
                type: "GridContainer",
                region: "center",
                id: "GridPrueba4",
				state:'active',
				cellEditing: {clicksToEdit: 2},
				autoScroll: true,
                selModel: {
                                type: "checkboxmodel",
                                checkOnly: false,
                               
                },	
                columns: [
                    {
                        type: "GridColumn",
                        text: "NOMBRE",
                        dataIndex: "pos1",
						width: "26%",
						editor: {
                                            type: 'TextField',
                                            allowBlank: false
                        }
                    },
					{
                        type: "GridColumn",
                        text: "EDAD",
                        dataIndex: "pos4",
                       // typeData: "number",
                       // sortable: true,
                        //filter: true,
						 width: "26%",
                         editor: {
                                            type: 'TextField',
                                            allowBlank: false
                                        }
                    },					
					{
                            type: 'GridColumn',                            
                            text: 'NICKNAME',							
                            width: "26%",
							  editor: {
                                            type: 'TextField',
                                            allowBlank: false
                                        },
                            renderer: function(value, metaData, record, row, col, store, gridView){                               
								return record.pos1+record.pos4;
                            }
                     },
                   
                
                 
                ],
                store: {
                    fields: ["pos1", "pos2", "pos4"],
                    data: [
                        { pos1: "Cesar", pos2: true, pos4:21},
                        { pos1: "abelardo", pos2: false, pos4:19},
                        { pos1: "geanfranco", pos2: true, pos4:10},
                        { pos1: "ernesto", pos2: false,  pos4:40},
                        { pos1: "roberto", pos2: true, pos4:50},
                        { pos1: "luis", pos2: true, pos4:50},
                        { pos1: "jose", pos2: true,pos4:50},
                        { pos1: "daniel", pos2: true, pos4:50},
                        { pos1: "luis", pos2: true, pos4:50}
                        
                    ]
                },
				bbar: { //determina la barra de paginacion														//barra de paginacion,  los parametros [1,2,3] -> [Elemento de inicio de grupo,Elemento Final de grupo, Total de elementos]
                            displayInfo: true,
                            displayMsg: 'Mostrando  {0} - {1} de {2}',
                            emptyMsg: "No hay temas a mostrar"
                        },
						gridviewtittle: {
                           displayInfo:  true,
                        },
            }
        ]
    }).show();
visiblesSideBar[4]=Components.create('Panel', {
		//autoShow: true,
		height: 210,
		width: 400,
		container: $('#ejemplo4'),
		//resizable: true,
		//minimizable: false,
		closeAction:'destroy',
		//constrain: true,
	    behavior :'panel',
		title: 'Accordeon Container',				
		items: [
		{		
			type: 'Panel',
			region: 'center',
			autoScroll: true,																
			items: [
				{
					type: 'Label',
					x:0,
					y:20,
					text: '<b>FICHA</b>',
					id: 'fichalb',
					width: "100%",									
					alignLabel: "center"
				},														
				{
					type: 'FreeDiv',
					x: 0,
					y: 55,
					width: '100%',									
					items: [												
						{
							type: "AccordeonContainer",
							region: 'center',
							state:'info',
							id:'miacordeon',													
							icons: {
								'header': "ui-icon-circle-minus",
								'activeHeader': "ui-icon-circle-plus"
								},
							collapsible:true,
							active:false,
							listeners: {
								activate: function(event, ui){
											console.log("cargando "+ ui.newPanel.attr("id"));
								}
							},
							heightStyle:'fill',	
							items: [
									  {
										   type: 'AccordeonItem',                                                    
										   title: 'Accordeon 1',													   
										   height:'inherit',
										   items: [
												{type: 'InputField',
												x:0,
												y:150,
												label: {html:'<b>&nbsp; Apellidos :</b>',},
												input:{name:'apellido',width: 100,},
												alignLabel: "left"
											},
											
											{type: 'InputField',
												x:100,
												y:200,
												label: {html:'<b>&nbsp;Direccion:</b>',},
												input:{name:'direccion',width: 100,},
												alignLabel: "left"
											},
											{type: 'InputField',
												label: {html:'<b>DatePicker:</b>',
														cols:2},
												input:{
													type:'DatePicker',
													name:'fecha',
													cols:10,
													state:'info',
													width: '130',
													buttonPosition:'left',
													icon:{
														type:'fontawesome',
														class:'fa-key',
														color:'rgb(85, 85, 95)',
														},
												},

											},
											]
									  },												  
									  {
										   type: 'AccordeonItem',                                                    
										   title: 'Accordeon 2',													  
										   height:'inherit',
										   items: [														
									     {type: 'InputField',
												label: {html:'<b>ProgressBar:</b>',
													cols:3},
												input:{
													type:'ProgressBar',
													cols:9,
													name:'valorProgress',
													state:'error',
													class:'striped',
													width: '70%',
													input:true,
												},	
									        },
											{type: 'InputField',
											 label: {html:'<b>Number Field</b>',
													cols:3},
											 input:{
												type:'NumberField',
												cols:9,
												state:'error',
												value:50,
												input:true,
												name:'edad'
											  },	
											},
											{type: 'InputField',
												label: {html:'<b>On-Off:</b>',
														cols:3
												},
												input:{cols:9,
														type:'onoffswitch',
														id:'hi',
														name:'on-off',
														checked:false,
														state:'highlight',
														scale:'mini',
												},
												
												css:{'padding-top': '10px'
												},
											  }
										]
									},
									{
										   type: 'AccordeonItem',                                                    
										   title: 'Accordeon 3',													 
										   items: [													   
												{type: 'InputField',
													x:10,
													y:100,
													label: {html:'<b>&nbsp; Nombre :</b>',},
													input:{
													name:'nombre',
													width: 150,},
													alignLabel: "left"
												},	
												{type: 'InputField',
													x:0,
													y:150,
													label: {html:'<b>&nbsp; Apellidos :</b>',},
													input:{name:'apellido',width: 100,},
													alignLabel: "left"
												},
												
												//Components.create('Separator');
												{type: 'InputField',
												label: {html:'<b>DatePicker:</b>',
														cols:2},
												input:{
													type:'DatePicker',
													name:'fecha',
													cols:10,
													state:'error',
													width: '130',
													buttonPosition:'left',
													icon:{
														type:'fontawesome',
														class:'fa-key',
														color:'rgb(85, 85, 95)',
														},
												},

											},
											{type: 'InputField',
												label: {html:'<b>DatePicker:</b>',
														cols:2},
												input:{
													type:'DatePicker',
													name:'fecha',
													cols:10,
													state:'highlight',
													width: '130',
													buttonPosition:'left',
													icon:{
														type:'fontawesome',
														class:'fa-key',
														color:'rgb(85, 85, 95)',
														},
												},

											},
											
												
											]						
									}
							]
						}
					]
			}																	
				]							
			}
		]
}).show();
visiblesSideBar[5]=Components.create('Form',{
    id: 'TestForm',
	container: $('#ejemplo6'),
	state:'error',
	width:400,
	border: false,														
	items:[
		{type: 'InputField',
		label: {html:'<b>DatePicker</b>',
				cols:2},
		input:{cols:10,
		type:'DatePicker',
		state:'error',
		width: '130',
		 listeners: {
			onValidateSucess: function() {
			alert("onValidateSucess");
			}
		  }
		},
		 css:{'padding-top': '10px'},
		},
		
		{type: 'InputField',
		label: {html:'<b>Change State</b>',
				cols:2},
		input:{cols:10,
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
		label: {html:'<b>validar url</b>',
				cols:2},
		input:{cols:10,
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
		label: {html:'<b>ProgressBar</b>',
				cols:2},
		input:{
			type:'ProgressBar',
			cols:10,
			state:'error',
			class:'striped',
			width: '100%',
			input:true,
			name:'workComplete'
		  },	
		},
		{type: 'InputField',
		label: {html:'<b>Number Field</b>',
				cols:2},
		input:{
			type:'NumberField',
			cols:10,
			state:'error',
			value:50,
			input:true,
			name:'YearsOld'
		  },	
		}
   ]	
}).show();

visiblesSideBar[6]=Components.create('Window',{
		title: "MENU DROP-DOWN",		
        container: $('#ejemplo7'),
		x: 18,
        y: 68,
        state:'active',
		items:[
			{
                type: 'ToolBar',
                id: 'ChartProyectoWindowsToolBar',
                state:'active',
				region: 'top',
                items: [                   
                    {  type: 'MenuScort',						//el menu principal
                        id : 'BtnArrastre',        
						menuType:'ButtonDropDown',
						 items:[
						 
							{
							type: 'MenuItem',						
							id:'MenuSup',
							submenu:{
									Visible:false,
									VisibleOnHover:true,
									VisibleOnClick:false,		
							},
								items:[
								{					
									type: 'Button',				//el boton que estara visible en el toolbar
									id : 'BotonVisible',        
									scale:'minier',
									shape:'box',
									icon:{
										type:'fontawesome',
										class:'fa-connectdevelop',	
									},	
									tooltip:'Refresh',
									listeners: {
										click: function() {
										}
									}					
								},
								{type: 'MenuScort',			//el sub menu
										id : 'BtnArrastre',        
										scale:'minier',
										shape:'box',
										icon:{
											type:'fontawesome',
											class:'fa-toggle-off',	
										},
										items:[											
										{
										type: 'MenuItem',						
										id:'Circleshape',
											items:[
											{													
											type: 'Button',				//el Primer boton oculto del menu
											id : 'BotonParaCirculo',        
											scale:'minier',
											shape:'box',
											icon:{
												type:'fontawesome',
												class:'fa-genderless',	
											},	
											tooltip:'Circular',
											listeners: {
												click: function() {
												}
											}
											}
											],
										},
										{
										type: 'MenuItem',						
										id:'BoxShape',
											items:[
											{
											type: 'Button',				//el Primer boton oculto del menu
											id : 'BotonParacuadrado',        
											scale:'minier',
											shape:'box',
											icon:{
												type:'fontawesome',
												class:'fa-square-o',	
											},	
											tooltip:'Rectangular',
											listeners: {
												click: function() {
												}
											}
											}
											],
										},
										{
										type: 'MenuItem',						
										id:'PoligonShape',
											items:[
											{
											type: 'Button',				//el Primer boton oculto del menu
											id : 'BotonParacuadrado',        
											scale:'minier',
											shape:'box',
											icon:{
												type:'fontawesome',
												class:'fa-codepen',	
											},	
											tooltip:'Hexagon',
											listeners: {
												click: function() {
												}
											}
											}
											],
									}
									],					
									tooltip:'Drag',
								}
								]
							}
							]
					},
					{  type: 'MenuScort',						//el menu principal
                        id : 'BtnArrastre',        
						menuType:'ButtonDropDown',
						 items:[
						 
							{
							type: 'MenuItem',						
							id:'MenuSup',
							submenu:{
									Visible:false,
									VisibleOnHover:true,
									VisibleOnClick:false,		
							},
								items:[
								{					
									type: 'Button',				//el boton que estara visible en el toolbar
									id : 'BotonVisible',        
									scale:'minier',
									shape:'box',
									icon:{
										type:'fontawesome',
										class:'fa-connectdevelop',	
									},	
									tooltip:'Refresh',
									listeners: {
										click: function() {
										}
									}					
								},
								{type: 'MenuScort',			//el sub menu
										id : 'BtnArrastre',        
										scale:'minier',
										shape:'box',
										icon:{
											type:'fontawesome',
											class:'fa-toggle-off',	
										},
										items:[											
										{
										type: 'MenuItem',						
										id:'Circleshape',
											items:[
											{													
											type: 'Button',				//el Primer boton oculto del menu
											id : 'BotonParaCirculo',        
											scale:'minier',
											shape:'box',
											icon:{
												type:'fontawesome',
												class:'fa-genderless',	
											},	
											tooltip:'Circular',
											listeners: {
												click: function() {
												}
											}
											}
											],
										},
										{
										type: 'MenuItem',						
										id:'BoxShape',
											items:[
											{
											type: 'Button',				//el Primer boton oculto del menu
											id : 'BotonParacuadrado',        
											scale:'minier',
											shape:'box',
											icon:{
												type:'fontawesome',
												class:'fa-square-o',	
											},	
											tooltip:'Rectangular',
											listeners: {
												click: function() {
												}
											}
											}
											],
										},
										{
										type: 'MenuItem',						
										id:'PoligonShape',
											items:[
											{
											type: 'Button',				//el Primer boton oculto del menu
											id : 'BotonParacuadrado',        
											scale:'minier',
											shape:'box',
											icon:{
												type:'fontawesome',
												class:'fa-codepen',	
											},	
											tooltip:'Hexagon',
											listeners: {
												click: function() {
												}
											}
											}
											],
									}
									],					
									tooltip:'Drag',
								}
								]
							}
							]
					},
					 {  type: 'MenuScort',						//el menu principal
                        id : 'BtnArrastre',        
						menuType:'ButtonDropDown',
						 items:[
						 
							{
							type: 'MenuItem',						
							id:'MenuSup',
							submenu:{
									Visible:false,
									VisibleOnHover:true,
									VisibleOnClick:false,		
							},
								items:[
								{					
									type: 'Button',				//el boton que estara visible en el toolbar
									id : 'BotonVisible',        
									scale:'minier',
									shape:'box',
									icon:{
										type:'fontawesome',
										class:'fa-connectdevelop',	
									},	
									tooltip:'Refresh',
									listeners: {
										click: function() {
										}
									}					
								},
								{type: 'MenuScort',			//el sub menu
										id : 'BtnArrastre',        
										scale:'minier',
										shape:'box',
										icon:{
											type:'fontawesome',
											class:'fa-toggle-off',	
										},
										items:[											
										{
										type: 'MenuItem',						
										id:'Circleshape',
											items:[
											{													
											type: 'Button',				//el Primer boton oculto del menu
											id : 'BotonParaCirculo',        
											scale:'minier',
											shape:'box',
											icon:{
												type:'fontawesome',
												class:'fa-genderless',	
											},	
											tooltip:'Circular',
											listeners: {
												click: function() {
												}
											}
											}
											],
										},
										{
										type: 'MenuItem',						
										id:'BoxShape',
											items:[
											{
											type: 'Button',				//el Primer boton oculto del menu
											id : 'BotonParacuadrado',        
											scale:'minier',
											shape:'box',
											icon:{
												type:'fontawesome',
												class:'fa-square-o',	
											},	
											tooltip:'Rectangular',
											listeners: {
												click: function() {
												}
											}
											}
											],
										},
										{
										type: 'MenuItem',						
										id:'PoligonShape',
											items:[
											{
											type: 'Button',				//el Primer boton oculto del menu
											id : 'BotonParacuadrado',        
											scale:'minier',
											shape:'box',
											icon:{
												type:'fontawesome',
												class:'fa-codepen',	
											},	
											tooltip:'Hexagon',
											listeners: {
												click: function() {
												}
											}
											}
											],
									}
									],					
									tooltip:'Drag',
								}
								]
							}
							]
					},
                    
                ]
            },
           
         ]
        
    }).show();
//segundo bloque -----------------------------------------------------------------------------------------------------------------------------
}