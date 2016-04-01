
function ejemploCombo(){
visiblesSideBar = new Array();
Components.create('FreeDiv',{
id:'mainContent',
freeHtml:true,
container: $('.page-content'),
html:'<strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 14pt">COMBOBOX-ITEM SCORTS</P></font></strong><div class="row"><div  id="ejemplo1" class="col-sm-4" ><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt">ComboBox Seleccion</P></font></strong> <br><br></div><div id="ejemplo2" class="col-sm-4"><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt"> ComboBox con datos</P></font></strong> </div><div id="ejemplo3" class="col-sm-4"><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt">ComboBoxs con diferentes estados</P></font></strong> </div></div><div class="row"><div  id="ejemplo4" class="col-sm-6" ><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt">ComboBox con datos de BD</P></font></strong> <br><br></div><div id="ejemplo5" class="col-sm-6" ><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt"> ComboBox con datos AJAX</P></font></strong> </div></div>',
});
	
visiblesSideBar[1]=Components.create('Window', {
	title: 'CARGANDO DATOS ESTATICOS',
	 container: $('#ejemplo1'),	
	state:'highlight',
	behavior:'panel',
	height: 148,
	width: 460,
	minimizable: false,
	id: 'windowModuloTraduccion',
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
			label: {html:'<b>Select listeners</b>',
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
									Components.getComponentById('miInput1').setValue(JSON.stringify(record));
								}
					}

			},
			
			css:{'padding-top': '10px'
			},			
			},
			{type: 'InputField',
			label: {html:'<b>Select listeners</b>',
					cols:3},
			input:{cols:9,
				id:'miInput1',
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
			type:'Button',	
			scale: 'medium',
			state:'active',
			text:'Leer Valor',
			icon:{
				type:'fontawesome',
				class:'fa-align-left',
				color:'white',
				position:'left'
			},
			tooltip:'Tamaño Personalizado',	  
			handler: function() {
				var valor = Components.getComponentById('micombo').getValue();
				Components.getComponentById('miInput1').setValue(valor);
				}  
			},
			{
			type:'Button',	
			scale: 'medium',
			text:'Leer combo',
			state:'info',
			icon:{
				type:'fontawesome',
				class:'fa-database',
				color:'black',
				position:'left'
			},
			tooltip:'Leer toda la data',	  
			handler: function() {
					Components.getComponentById('miInput').setValue(JSON.stringify(Components.getComponentById('micombo').getStore().data ));
				}   
			},
			
		],
	}]
}).show();

visiblesSideBar[2]=Components.create('Window',{
        behavior:'panel',
		container: $('#ejemplo2'),
		state:'error',
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
			/*{
			type:'FreeDiv',	
			freeHtml:true,
			html:'<div class="form-group" id="ButtonsMid"><div class="col-sm-2"></div><div class="btnAceptar col-sm-4"></div><div class="btnCancelar col-sm-4"></div><div class="col-sm-2"></div></div>',
			},*/
			
		],
	}]
		
    }).show();
	
visiblesSideBar[3]=Components.create('Window', {
	height: 310,
	width: 311,
	behavior:'panel',
	state:'active',
	 container: $('#ejemplo3'),	
	minimizable: false,
	id: 'windowModuloTraduccion',
    title: 'COMBOBOX - STATES',
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
			label: {html:'<b>Default</b>',
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
			label: {html:'<b>Highlight</b>',
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
			label: {html:'<b>Active</b>',
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
			label: {html:'<b>Info</b>',
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
			label: {html:'<b>Error</b>',
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
			label: {html:'<b>Warning</b>',
					cols:3
			},
			input:{cols:9,
     				type: 'ComboBox',
					label: 'Tipo Variable',
					state:'warning',
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
			
		],
	}]
}).show();
visiblesSideBar[4]=Components.create('Button',{
	container:$('.btnAceptar'),		 
	scale: 'medium',
	state:'active',
	text:'Leer Valor Seleccionado',
	icon:{
		type:'fontawesome',
		class:'fa-align-left',
		color:'white',
		position:'left'
	},
	tooltip:'Tamaño Personalizado',	  
	handler: function() {
				var valor = Components.getComponentById('micombo').getValue();
				Components.getComponentById('miInput').setValue(valor);
				}  
}).show();
visiblesSideBar[5]=Components.create('Button',{
	container:$('.btnCancelar'),		 		
	scale: 'medium',
	text:'Leer Todo el combo',
	state:'info',
	icon:{
		type:'fontawesome',
		class:'fa-database',
		color:'black',
		position:'left'
	},
	tooltip:'Leer toda la data',	  
	handler: function() {
					Components.getComponentById('miInput').setValue(JSON.stringify(Components.getComponentById('micombo').getStore().data ));
				}  
}).show();
visiblesSideBar[6]=Components.create('Button',{
	container:$('.btnData1'),		 
	scale: 'medium',
	state:'active',
	text:'Cargar Data 1',
	icon:{
		type:'fontawesome',
		class:'fa-repeat',
		color:'white',
		position:'left'
	},
	tooltip:'Tamaño Personalizado',	  
	handler: function() {		
				var data = ['Ingles','Frances','Sueco','Original']; 
				console.log('setStore');
				 Components.getComponentById('micombodata').setStore(data).drawRows();
				}  
}).show();
visiblesSideBar[7]=Components.create('Button',{
	container:$('.btnData2'),		 		
	scale: 'medium',
	text:'Cargar Data 2',
	state:'info',
	icon:{
		type:'fontawesome',
		class:'fa-repeat',
		color:'black',
		position:'left'
	},
	tooltip:'Leer toda la data',	  
	handler: function() {
				var data = ['EEUU','Francia','Suecia','Peru']; 
				
				console.log('setStoreA');
				Components.getComponentById('micombodata').setStore(data).drawRows();
				}  
}).show();
visiblesSideBar[8]=Components.create('Window', {
	title: 'CARGANDO DATOS DE BD',
	//behavior:'panel',
	state:'info',
	 container: $('#ejemplo4'),	
	width:620,
	height:190,
    x: 13,
    y: 55,
	minimizable: false,
	id: 'windowModuloTraduccion',
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
			label: {html:'<b>Cargar Datos Select</b>',
					cols:3
			},
			input:{cols:9,
     				type:'ComboBox',	  
					id:"micombodata",

					label: 'ComboBox con Evento',                                        
					store: {data: ['EEUU','Francia','Suecia','Peru']},
					readOnly: false	,								
			},
			css:{'padding-top': '10px',},
			},
		
			{
			type:'FreeDiv',	
			freeHtml:true,
			html:'<div class="row" id="SelectData">'+'<div class="col-sm-2"></div>'+
			'<div class="col-sm-4"><h2>Datos1:</h2><br>'+
			'[Ingles,Frances,Sueco,Original]'+
			'</h2></div>'+
			'<div class=" col-sm-4"><h2>Datos2:</h2><br>'+
			'[EEUU,Francia,Suecia,Peru]'+
			'</h2></div>'+
			'<div class="col-sm-2"></div></div>'+
			'<div class="form-group" id="ButtonsData"><div class="col-sm-2"></div><div class="btnData1 col-sm-4"></div><div class="btnData2 col-sm-4"></div><div class="col-sm-2"></div></div>',
			},
			{
			type:'Button',	
			scale: 'medium',
			state:'active',
			text:'Cargar Data 1',
			icon:{
				type:'fontawesome',
				class:'fa-repeat',
				color:'white',
				position:'left'
			},
			tooltip:'Tamaño Personalizado',
			css:{'margin-left': '130px'},	
			handler: function() {		
			var data = ['Ingles','Frances','Sueco','Original']; 
			console.log('setStore');
			 Components.getComponentById('micombodata').setStore(data).drawRows();
			  }  
			},
			{
			type:'Button',	
			scale: 'medium',
			text:'Cargar Data 2',
			state:'info',
			icon:{
				type:'fontawesome',
				class:'fa-repeat',
				color:'black',
				position:'left'
			},
			tooltip:'Leer toda la data',
			css:{'margin-left': '90px'},			
			handler: function() {
			var data = ['EEUU','Francia','Suecia','Peru']; 
				
			console.log('setStoreA');
			Components.getComponentById('micombodata').setStore(data).drawRows();
			 }    
		   },
		],
	}]
}).show();
visiblesSideBar[9]=Components.create('Window', {
 container: $('#ejemplo5'),	
title: 'CARGANDO DATOS DESDE AJAX',
behavior:'panel',
state:'warning',
width:640,
height:125,
minimizable: false,
id: 'windowModuloTraduccion',
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
		label: {html:'<b>Llenar datos AJAX</b>',
				cols:3
		},
		input:{cols:9,
				type:'ComboBox',	  
				id:"mycombo",
				store: {
					id: 'idStoredata',
					model: 'MyData',
					pageSize: 5,
					fields: [
						'value', 
						'label'                               
					],
					proxy: {
						reader:{
							type: 'POST',
							url: 'php/dataphp.php',
							extraParams: {
							dataset:'sampledata3'									
							}
						},
					}
				},
				valueField: 'value',
				displayField: 'label',
				mode:'local',
		},
		
		css:{'padding-top': '10px'
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
visiblesSideBar[10]=Components.create('Button', {
		container:$('.btnAceptar'),
		scale: 'medium',
		state:'active',
		text:'Cargar desde AJAX',
		icon:{
			type:'fontawesome',
			class:'fa-align-left',
			color:'white',
			position:'left'
		},
		tooltip:'Tamaño Personalizado',	
		handler: function() {
			 Components.getComponentById('mycombo').getStore().loadPage(1);	
			}  
		});
visiblesSideBar[11]=Components.create('Button', {		
		container:$('.btnCancelar'),
		scale: 'medium',
		text:'Leer Todo el combo',
		state:'info',
		icon:{
			type:'fontawesome',
			class:'fa-database',
			color:'black',
			position:'left'
		},
		tooltip:'Leer toda la data',
		handler: function() {
				 Components.getComponentById('mycombo').getStore().loadPage(2);	
			}   
	   });
}