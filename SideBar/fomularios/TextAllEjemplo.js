function ejemploTextAll(){
Components.create('FreeDiv',{
id:'mainContent',
freeHtml:true,
container: $('.page-content'),
html:'<strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 14pt">TEXTFIELD  SCORT</P></font></strong><div class="row"><div  id="ejemplo1" class="col-sm-4" style="height: 300px" ><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt"> TexField con diferentes estados</P></font></strong> <br><br></div><div id="ejemplo2" class="col-sm-4" style="height: 300px"><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt"> TexField con diferentes estados + iconos</P></font></strong> </div><div id="ejemplo4" class="col-sm-4" style="height: 300px"><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt">TexField con diferentes estados + labels</P></font></strong> </div></div><!--El ancho es de 12 columnas, una vez ocupadas las 12 se cierra el row--><div class="row"><div id="ejemplo6" class="col-sm-4" style =" height: 300px ;"><strong><FONT FACE="arial"> <p align="left" style="color: #BD133D; font-size: 12pt">TexField Addons - Icons </P></font></strong> </div><div id="ejemplo7" class="col-sm-8" style =" height: 300px ;" align="right">  <strong><FONT FACE="arial"> <p align="center" style="color: #BD133D; font-size: 12pt"> TexField Addons - Button </P></font></strong> </div></div>',
});
visiblesSideBar[1]=Components.create('Form',{
id: 'TestForm',
border: false,
defaultType: "textfield",
container: $('#ejemplo1'),																	
fieldDefaults: {
	labelWidth: 60
},
	items:[	
	{type: 'TextField',
	 id : 'example',
	 container: $('#ejemplo1'),
	   cols:12,
	    width: '80%',
		placeholder:'INPUT STATE ERROR',
		state:'error'
	  
	},
	{type: 'TextField',
	container: $('#ejemplo1'),
	  cols:12,
		width: '80%',
		placeholder:'INPUT STATE HIGHLIGHT',
		state:'highlight',
		
	},
	{type: 'TextField',
	container: $('#ejemplo1'),
	cols:12,
		width: '80%',
		placeholder:'INPUT STATE ACTIVE',
		state:'active',
	},
	{type: 'TextField',
	container: $('#ejemplo1'),
	cols:12,
		width: '80%',
		placeholder:'INPUT STATE WARNING',
		state:'warning',
	},
	{type: 'TextField',
	container: $('#ejemplo1'),
	cols:12,
		width: '80%',
		placeholder:'INPUT STATE INFO',
		state:'info',
	},
	{type: 'TextField',
	container: $('#ejemplo1'),
	cols:12,
	    width: '80%',
	 	placeholder:'INPUT STATE DEFAULT',
		state:'default',
	},		
  ]
}).show();
//segundo bloque -----------------------------------------------------------------------------------------------------------------------------
visiblesSideBar[2]=Components.create('Form',{
    container: $('#ejemplo2'),
	id: 'TestForm',
	border: false,
	defaultType: "textfield",																	
	fieldDefaults: {
		labelWidth: 60
	},
	items:[	
	{type: 'TextField',
	container: $('#ejemplo2'),
	id:'prueba2',
	cols:12,
		width: '80%',
		placeholder:'INPUT STATE ERROR + ICON',
		icon:{
			type:'fontawesome',
			class:'fa-envelope',
			position:'left'
		},
		state:'error',
  },
  {type: 'TextField',
  container: $('#ejemplo2'),
	cols:12,
		width: '80%',
		placeholder:'INPUT STATE HIGHLIGHT + ICON',
		icon:{
			type:'fontawesome',
			class:'fa-envelope',
			position:'left'
		},
		state:'highlight',
  },
  {type: 'TextField',
  container: $('#ejemplo2'),
	cols:12,
		width: '80%',
		placeholder:'INPUT STATE ACTIVE + ICON',
		icon:{
			type:'fontawesome',
			class:'fa-envelope',
			position:'left'
		},
		state:'active',
  },
  {type: 'TextField',
  container: $('#ejemplo2'),
	cols:12,
		width: '80%',
		placeholder:'INPUT STATE WARNING + ICON',
		icon:{
			type:'fontawesome',
			class:'fa-envelope',
			position:'left'
		},
		state:'warning',
  },
  {type: 'TextField',
  container: $('#ejemplo2'),
  cols:12,
		width: '80%',
		placeholder:'INPUT STATE INFO + ICON',
		icon:{
			type:'fontawesome',
			class:'fa-envelope',
			position:'left'
		},
		state:'info',
  },
  {type: 'TextField',
  container: $('#ejemplo2'),
	cols:12,
		width: '80%',
		placeholder:'INPUT STATE DEFAULT+ ICON',
		icon:{
			type:'fontawesome',
			class:'fa-envelope',
			position:'left'
		},
		state:'default',
  },
]
}).show();		 
//tercer bloque ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
visiblesSideBar[3]=Components.create('Form',{
    container: $('#ejemplo4'),
	id: 'TestForm',
	border: false,
	defaultType: "textfield",																	
	fieldDefaults: {
		labelWidth: 60
	},
	items:[	
	{type: 'TextField',
	container: $('#ejemplo4'),
	label: {html:'<b>ERROR</b>',
			cols:2},
	cols:10,
		width: '80%',
		placeholder:'INPUT STATE ERROR + ICON',
		icon:{
			type:'fontawesome',
			class:'fa-envelope',
			position:'left'
		},
		state:'error',
  },
  {type: 'TextField',
  container: $('#ejemplo4'),
	label: {html:'<b>HIGHLIGHT</b>',
			cols:2},
	cols:10,
		width: '80%',
		placeholder:'INPUT STATE HIGHLIGHT + ICON',
		icon:{
			type:'fontawesome',
			class:'fa-envelope',
			position:'left'
		},
		state:'highlight',
  },
  {type: 'TextField',
  container: $('#ejemplo4'),
	label: {html:'<b>ACTIVE</b>',
			cols:2},
	cols:10,
		width: '80%',
		placeholder:'INPUT STATE ACTIVE + ICON',
		icon:{
			type:'fontawesome',
			class:'fa-envelope',
			position:'left'
		},
		state:'active',
  },
  {type: 'TextField',
  container: $('#ejemplo4'),
	label: {html:'<b>WARNING</b>',
			cols:2},
	cols:10,
		width: '80%',
		placeholder:'INPUT STATE WARNING + ICON',
		icon:{
			type:'fontawesome',
			class:'fa-envelope',
			position:'left'
		},
		state:'warning',
  },
  {type: 'TextField',
  container: $('#ejemplo4'),
	label: {html:'<b>INFO</b>',
			cols:2},
	cols:10,
		width: '80%',
		placeholder:'INPUT STATE INFO + ICON',
		icon:{
			type:'fontawesome',
			class:'fa-envelope',
			position:'left'
		},
		state:'info',
  },
  {type: 'TextField',
  container: $('#ejemplo4'),
	label: {html:'<b>DEFAULT</b>',
			cols:2},
	cols:10,
		width: '80%',
		placeholder:'INPUT STATE DEFAULT + ICON',
		icon:{
			type:'fontawesome',
			class:'fa-envelope',
			position:'left'
		},
		state:'default',
  },
]
}).show();
//cuarto bloque ----------------------------------------------------------------------------------------------------------------------------------------------------------------------
visiblesSideBar[4]=Components.create('Form',{
        container: $('#ejemplo6'),
		id: 'TestForm',
		border: false,
		defaultType: "textfield",																	
		fieldDefaults: {
			labelWidth: 60
		},
		items:[
	
		{type: 'TextField',
			//cols:6,
			container: $('#ejemplo6'),
			autocalcCols:true,
			cols:12,placeholder:'ADDON ICON ERROR',
				width: '80%',
				addon:{
					addonType: 'icon',
					type:'fa',
					class:'fa-cogs',
					position:'right'
				},
				state:'error',		
		},
		{type: 'TextField',
			//cols:6,
			autocalcCols:true,
			container: $('#ejemplo6'),
			//label: {cols:2,html:'<b>&nbsp;Icon:</b>',},
			cols:12,placeholder:'ADDON ICON HIGHLIGHT',
				width: '80%',
				addon:{
					addonType: 'icon',
					type:'fa',
					class:'fa-cogs',
					position:'right'
				},
				state:'highlight',
		},
		{type: 'TextField',
			//cols:6,
			container: $('#ejemplo6'),
			autocalcCols:true,
			//label: {cols:2,html:'<b>&nbsp;Icon:</b>',},
			cols:12,placeholder:'ADDON ICON ACTIVE',
				width: '80%',
				addon:{
					addonType: 'icon',
					type:'fa',
					class:'fa-cogs',
					position:'right'
				},
				state:'active',
		},
		{type: 'TextField',
			//cols:6,
			autocalcCols:true,
			container: $('#ejemplo6'),
			//label: {cols:2,html:'<b>&nbsp;Icon:</b>',},
			cols:12,placeholder:'ADDON ICON WARNING',
				width: '80%',
				addon:{
					addonType: 'icon',
					type:'fa',
					class:'fa-cogs',
					position:'right'
				},
				state:'warning',
		},
		{type: 'TextField',
			//cols:6,
			autocalcCols:true,
			container: $('#ejemplo6'),
			//label: {cols:2,html:'<b>&nbsp;Icon:</b>',},
			cols:12,placeholder:'ADDON ICON INFO',
				width: '80%',
				addon:{
					addonType: 'icon',
					type:'fa',
					class:'fa-cogs',
					position:'right'
				},
				state:'info',
		},
		{type: 'TextField',
			autocalcCols:true,
			container: $('#ejemplo6'),
			//label: {cols:2,html:'<b>&nbsp;Icon:</b>',},
			cols:12, placeholder:'ADDON ICON DEFAULT',
				width: '80%',
				addon:{
					addonType: 'icon',
					type:'fa',
					class:'fa-cogs',
					position:'right'
				},
				state:'default',
		},
		
		      		
	]
}).show(); 
//quinto bloque -------------------------------------------------------------------------------------------------------------------------------------
visiblesSideBar[5]=Components.create('Form',{
		id: 'TestForm',
		container: $('#ejemplo7'),
		border: false,
		defaultType: "textfield",																	
		fieldDefaults: {
			labelWidth: 60
		},
		items:[
	
		{type: 'TextField',
			autocalcCols:true,
			container: $('#ejemplo7'),
			//label: {cols:2,html:'<b>&nbsp;Button:</b>',},
			cols:10,placeholder:'ADDON BUTTON ERROR',
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
        {type: 'TextField',
			autocalcCols:true,
			container: $('#ejemplo7'),
			//label: {cols:2,html:'<b>&nbsp;Button:</b>',},
			cols:10,placeholder:'ADDON BUTTON HIGHLIGHT',
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

        {type: 'TextField',
			autocalcCols:true,
			container: $('#ejemplo7'),
			//label: {cols:2,html:'<b>&nbsp;Button:</b>',},
			cols:10,placeholder:'ADDON BUTTON ACTIVE',
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
        {type: 'TextField',
			autocalcCols:true,
			container: $('#ejemplo7'),
			//label: {cols:2,html:'<b>&nbsp;Button:</b>',},
			cols:10,placeholder:'ADDON BUTTON WARNING',
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
         {type: 'TextField',
			autocalcCols:true,
			container: $('#ejemplo7'),
			//label: {cols:2,html:'<b>&nbsp;Button:</b>',},
			cols:10,placeholder:'ADDON BUTTON INFO',
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

        {type: 'TextField',
			autocalcCols:true,
			container: $('#ejemplo7'),
			//label: {cols:2,html:'<b>&nbsp;Button:</b>',},
			cols:10,placeholder:'ADDON BUTTON DEFAULT',
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
	]
}).show();
}