$( document ).ready(function(){	
Components.create('Form',{
id: 'TestForm',
border: false,
defaultType: "textfield",
container: $('#ejemplo1'),																	
fieldDefaults: {
	labelWidth: 60
},
	items:[	
	{type: 'InputField',
	 id : 'example',
	 container: $('#ejemplo1'),
	input:{cols:12,
	    width: '80%',
		placeholder:'INPUT STATE ERROR',
		state:'error'
	  },
	},
	{type: 'InputField',
	container: $('#ejemplo1'),
	input:{cols:12,
		width: '80%',
		placeholder:'INPUT STATE HIGHLIGHT',
		state:'highlight',
		},
	},
	{type: 'InputField',
	container: $('#ejemplo1'),
	input:{cols:12,
		width: '80%',
		placeholder:'INPUT STATE ACTIVE',
		state:'active',
		},
	},
	{type: 'InputField',
	container: $('#ejemplo1'),
	input:{cols:12,
		width: '80%',
		placeholder:'INPUT STATE WARNING',
		state:'warning',
	   },
	},
	{type: 'InputField',
	container: $('#ejemplo1'),
	input:{cols:12,
		width: '80%',
		placeholder:'INPUT STATE INFO',
		state:'info',
	  },
	},
	{type: 'InputField',
	container: $('#ejemplo1'),
	input:{cols:12,
	    width: '80%',
	 	placeholder:'INPUT STATE DEFAULT',
		state:'default',
	 },
	},		
  ]
}).show();
//segundo bloque -----------------------------------------------------------------------------------------------------------------------------
Components.create('Form',{
    container: $('#ejemplo2'),
	id: 'TestForm',
	border: false,
	defaultType: "textfield",																	
	fieldDefaults: {
		labelWidth: 60
	},
	items:[	
	{type: 'InputField',
	container: $('#ejemplo2'),
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
  container: $('#ejemplo2'),
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
  container: $('#ejemplo2'),
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
  container: $('#ejemplo2'),
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
  container: $('#ejemplo2'),
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
  container: $('#ejemplo2'),
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
//tercer bloque ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.create('Form',{
    container: $('#ejemplo4'),
	id: 'TestForm',
	border: false,
	defaultType: "textfield",																	
	fieldDefaults: {
		labelWidth: 60
	},
	items:[	
	{type: 'InputField',
	container: $('#ejemplo4'),
	label: {html:'<b>ERROR</b>',
			cols:2},
	input:{cols:10,
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
  container: $('#ejemplo4'),
	label: {html:'<b>HIGHLIGHT</b>',
			cols:2},
	input:{cols:10,
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
  container: $('#ejemplo4'),
	label: {html:'<b>ACTIVE</b>',
			cols:2},
	input:{cols:10,
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
  container: $('#ejemplo4'),
	label: {html:'<b>WARNING</b>',
			cols:2},
	input:{cols:10,
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
  container: $('#ejemplo4'),
	label: {html:'<b>INFO</b>',
			cols:2},
	input:{cols:10,
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
  container: $('#ejemplo4'),
	label: {html:'<b>DEFAULT</b>',
			cols:2},
	input:{cols:10,
		width: '80%',
		placeholder:'INPUT STATE DEFAULT + ICON',
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
//cuarto bloque ----------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.create('Form',{
        container: $('#ejemplo6'),
		id: 'TestForm',
		border: false,
		defaultType: "textfield",																	
		fieldDefaults: {
			labelWidth: 60
		},
		items:[
	
		{type: 'InputField',
			//cols:6,
			container: $('#ejemplo6'),
			autocalcCols:true,
			input:{cols:12,placeholder:'ADDON ICON ERROR',
				width: '80%',
				addon:{
					addonType: 'icon',
					type:'fa',
					class:'fa-cogs',
					position:'right'
				},
				state:'error',
		    },		
		},
		{type: 'InputField',
			//cols:6,
			autocalcCols:true,
			container: $('#ejemplo6'),
			//label: {cols:2,html:'<b>&nbsp;Icon:</b>',},
			input:{cols:12,placeholder:'ADDON ICON HIGHLIGHT',
				width: '80%',
				addon:{
					addonType: 'icon',
					type:'fa',
					class:'fa-cogs',
					position:'right'
				},
				state:'highlight',
			},
		},
		{type: 'InputField',
			//cols:6,
			container: $('#ejemplo6'),
			autocalcCols:true,
			//label: {cols:2,html:'<b>&nbsp;Icon:</b>',},
			input:{cols:12,placeholder:'ADDON ICON ACTIVE',
				width: '80%',
				addon:{
					addonType: 'icon',
					type:'fa',
					class:'fa-cogs',
					position:'right'
				},
				state:'active',
			},
		},
		{type: 'InputField',
			//cols:6,
			autocalcCols:true,
			container: $('#ejemplo6'),
			//label: {cols:2,html:'<b>&nbsp;Icon:</b>',},
			input:{cols:12,placeholder:'ADDON ICON WARNING',
				width: '80%',
				addon:{
					addonType: 'icon',
					type:'fa',
					class:'fa-cogs',
					position:'right'
				},
				state:'warning',
		    },
		},
		{type: 'InputField',
			//cols:6,
			autocalcCols:true,
			container: $('#ejemplo6'),
			//label: {cols:2,html:'<b>&nbsp;Icon:</b>',},
			input:{cols:12,placeholder:'ADDON ICON INFO',
				width: '80%',
				addon:{
					addonType: 'icon',
					type:'fa',
					class:'fa-cogs',
					position:'right'
				},
				state:'info',
		    },
		},
		{type: 'InputField',
			autocalcCols:true,
			container: $('#ejemplo6'),
			//label: {cols:2,html:'<b>&nbsp;Icon:</b>',},
			input:{cols:12, placeholder:'ADDON ICON DEFAULT',
				width: '80%',
				addon:{
					addonType: 'icon',
					type:'fa',
					class:'fa-cogs',
					position:'right'
				},
				state:'default',
			},
		},
		
		      		
	]
}).show(); 
//quinto bloque -------------------------------------------------------------------------------------------------------------------------------------
Components.create('Form',{
		id: 'TestForm',
		container: $('#ejemplo7'),
		border: false,
		defaultType: "textfield",																	
		fieldDefaults: {
			labelWidth: 60
		},
		items:[
	
		{type: 'InputField',
			autocalcCols:true,
			container: $('#ejemplo7'),
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
			container: $('#ejemplo7'),
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
			container: $('#ejemplo7'),
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
			container: $('#ejemplo7'),
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
			container: $('#ejemplo7'),
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
			container: $('#ejemplo7'),
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
//sexto bloque --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//septimo bloque --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//DIFERENTES TAMAÑO + GLIPICONS--------------------------------------------

//bloque final -------------------------------------------------------------------------------------------------------------------------------

	
	//bloque final 2 -------------------------------------------------------------------------------------------------------------------------------

	 
});