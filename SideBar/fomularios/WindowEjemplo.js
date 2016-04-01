function ejemploWindows(){
visiblesSideBar = new Array();
Components.create('FreeDiv',{
id:'mainContent',
freeHtml:true,
container: $('.page-content'),
html:'<div><div class="row"><div  id="Colorerror" class="col-sm-4"></div><div  id="ColorActive" class="col-sm-4" ></div><div  id="Colorinfo" class="col-sm-4" ></div><br><br></div><div class="row"><div  id="Colorhighlight" class="col-sm-4"></div><div  id="Colorwarning"class="col-sm-4"></div><div  id="Colordefault" class="col-sm-4"></div><br><br></div></div>',
});
visiblesSideBar[1]=Components.create('Window',{
       container: $('#ColorActive'),
		behavior:'panel',
		state:'active',
		title: "PROGRESS BAR - SCORTS JS", 
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
container: $('#Colorinfo'),
        behavior:'panel',
		state:'info',
		title: "SLIDERS- SCORTS JS", 
	 items: [
	       {
			type: 'Separator',
		  },
          {
			type: 'Slider',
			x:10,
			y:25,
			width: 150,
			value: 75,
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
		  },
		  {
			type: 'Separator',
		  },
		  
		  {
			type: 'Slider',	
			width: 150,
			x:10,
			y:55,
			value: 50,
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
		  },
		  {
			type: 'Separator',
		  },
		  
		  {
			type: 'Slider',
			x:10,
			y:85,
			width: 150,
			value: 50,
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
		  },
		  {
			type: 'Separator',
		  },
		  {
			type: 'Slider',	
			x:195,
			y:25,
			width: 150,
			value: 75,
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
		  },
		  {
			type: 'Separator',
		  },
		  {
			type: 'Slider',	
			x:195,
			y:55,
			width: 150,
			value: 100,
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
		  },
		  {
			type: 'Separator',
		  },
		  {
			type: 'Slider',	
			width: 150,
			value: 50,
			x:195,
			y:85,
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
		  },  
        ]
    }).show();
visiblesSideBar[3]=Components.create('Window',{
container: $('#Colorerror'),
      behavior:'panel',
		state:'error',
		title: "BUTTONS-SCORTS JS", 
   
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
    }).show();	
visiblesSideBar[4]=Components.create('Window',{
container: $('#Colorhighlight'),
		behavior:'panel',
		state:'highlight',
		title: "INPUTS - SCORTS JS", 
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
			},
			{type: 'InputField',
			label: {html:'<b>Number Field</b>',
					cols:4},
			input:{
				type:'NumberField',
				cols:8,
				state:'error',
				value:50,
				input:true,
				name:'YearsOld'
			},	
			}
		
	   ]
	}
]
}).show();
visiblesSideBar[5]=Components.create('Window',{
container: $('#Colorwarning'),
		behavior:'panel',
		state:'warning',
		title: "NUMBER FIELD SCORTS JS",
		items: [
          {type: 'InputField',
			label: {html:'<b>Number Error</b>',
					cols:4},
			input:{
				type:'NumberField',
				cols:8,
				state:'error',
				value:50,
				input:true,
				name:'YearsOld'
			},	
			},
		  {
			type: 'Separator',
		  },
		  {type: 'InputField',
			label: {html:'<b>Number Highlight</b>',
					cols:4},
			input:{
				type:'NumberField',
				cols:8,
				state:'highlight',
				value:19,
				input:true,
				name:'YearsOld'
			},	
		 },
		  {
			type: 'Separator',
		  },
		  {type: 'InputField',
			label: {html:'<b>Number Active</b>',
					cols:4},
			input:{
				type:'NumberField',
				cols:8,
				state:'active',
				value:13,
				input:true,
				name:'YearsOld'
			},	
			},
		  {
			type: 'Separator',
		  },
		  {type: 'InputField',
			label: {html:'<b>Number Warning</b>',
					cols:4},
			input:{
				type:'NumberField',
				cols:8,
				state:'warning',
				value:1,
				input:true,
				name:'YearsOld'
			},	
			},
		  {
			type: 'Separator',
		  },
		  {type: 'InputField',
			label: {html:'<b>Number Info</b>',
					cols:4},
			input:{
				type:'NumberField',
				cols:8,
				state:'info',
				value:15,
				input:true,
				name:'YearsOld'
			},	
			},
		  {
			type: 'Separator',
		  },
		  {type: 'InputField',
			label: {html:'<b>Number Default</b>',
					cols:4},
			input:{
				type:'NumberField',
				cols:8,
				value:20,
				input:true,
				name:'YearsOld'
			},	
			},
		  
        ]
    }).show();
visiblesSideBar[6]=Components.create('Window',{
container: $('#Colordefault'),
        behavior:'panel',
		resizable:false,
		draggable:false,
		title: "COMBOBOX-SCORTS JS", 
       items: [{
		type: 'Form',
		id: 'formModuloTraduccion',
		border: false,
		defaultType: "textfield",																	
		fieldDefaults: {
			labelWidth: 60
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
		],
	}]
		
    }).show();
}