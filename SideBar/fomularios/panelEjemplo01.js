function ejemploPanel(){
visiblesSideBar = new Array();
Components.create('FreeDiv',{
id:'mainContent',
freeHtml:true,
html:'<div><div class="row"><div  id="Colorerror" class="col-sm-3"></div><div  id="ColorActive" class="col-sm-9" ></div></div></div>',
});
visiblesSideBar[1]=Components.create('Window',{
container: $('.page-content'),
        behavior:'panel',
		state:'error',
		resizable:false,
		draggable:false,
		title: "WINDOWS PANEL-SCORTS JS", 
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