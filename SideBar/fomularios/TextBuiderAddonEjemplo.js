function TextBuilderAddon(){
Components.create('FreeDiv',{
id:'mainContent',
freeHtml:true,
container: $('.page-content'),
html:'<div class="row"><div  id="S1-1" class="col-sm-6" style="height: inherit;"><div class="row"><div  id="S1-A" class="col-sm-12" style="height: inherit"></div><br><br></div></div><div  id="S1-2" class="col-sm-6" style="height: inherit"><div class="row"><div  id="S2-1" class="col-sm-12" style="height: inherit"></div><br><br></div></div><br><br></div><div class="row"><div  id="S1-B" class="col-sm-4" style="height: inherit"><strong><FONT FACE="arial"> <p style="color: #BD133D; margin: 10px 0 5px 165px; font-size: 14pt">TEXTFIELD ADDON BUILDER</P></font></strong> <strong><FONT FACE="arial"> <p style="color: #black;margin: 10px 0 80px 165px; font-size: 16pt">TextField for Scorts JS</P></font></strong> </div><div  class="col-sm-4" style="height: inherit"><div class="row"><div  id="S2-2" class="col-sm-12" style="height: 250px"><strong><FONT FACE="arial"> <p style="color: #black; font-size: 11pt">Cambio de Color:</P></font></strong> </div></div></div><div  class="col-sm-4" style="height: inherit"> <div class="row"><div  id="S2-3" class="col-sm-12" style="height: 250px"><strong><FONT FACE="arial"> <p style="color: #black; font-size: 11pt">Cambio de color de icono:</P></font></strong> </div></div></div></div><div class="row"><div  class="col-sm-12" style="height: inherit"><div  id="S2-4" class="col-sm-3" style="height: inherit" ><strong><FONT FACE="arial"> <p style="color: #black; font-size: 11pt">Agregar Addons & Icons:</P></font></strong> </div><div  id="posit1" class="col-sm-3" style="height: inherit" ><strong><FONT FACE="arial"> <p style="color: #black; font-size: 11pt">Posicion del Addon:</P></font></strong> </div></div></div><div class="row"><div  class="col-sm-12" style="height: inherit"><div  id="p-2B" class="col-sm-7" style="height: inherit" ><strong><FONT FACE="arial"> <p style="color: #black; font-size: 11pt">FONT AWESOME - ICONS:</P></font></strong></div><div  id="p-2C" class="col-sm-5" style="height: inherit" ><strong><FONT FACE="arial"> <p style="color: #black; font-size: 11pt">GLYPHICONS:</P></font></strong> </div></div></div></div></div>',
});
visiblesSideBar[1]=Components.create('Form',{
		id: 'TestForm',
		container: $('#S2-2'),
		border: false,
		defaultType: "textfield",																	
		fieldDefaults: {
			labelWidth: 60
		},
		items:[
	
		{type: 'TextField',
			autocalcCols:true,
			
			//label: {cols:2,html:'<b>&nbsp;Button:</b>',},
			//input:{cols:12,placeholder:'ADDON BUTTON ERROR',
				width: '100%',
				state:'error',
				addon:{
				addonType: 'button',
		         position:'right',
				 
				icon:{
					type:'fa',
					class:'fa-cogs',
					//position:'left',
					},
				css:{'margin-bottom': '0'},
				tooltip:'Error',	  
				handler: function(event) {
				addon = {state:'error'};
					Components.getComponentById('prueba1').changeInputState('error');
					Components.getComponentById('prueba1').changeAddon(addon);
					
				}
			},
				
		//},
		},
        {type: 'TextField',
			autocalcCols:true,
			container: $('#S2-2'),
				width: '100%',
				state:'highlight',
				addon:{
				addonType: 'button',
		            position:'right',
				icon:{
					type:'fa',
					class:'fa-cogs',
					},
				css:{'margin-bottom': '0'},
				tooltip:'Highlight',	  
				handler: function(event) {
				addon = {state:'highlight'};
					Components.getComponentById('prueba1').changeInputState('highlight');
					Components.getComponentById('prueba1').changeAddon(addon);
				}
			},
		 // },
			
		},  

        {type: 'TextField',
			autocalcCols:true,
			container: $('#S2-2'),
				width: '100%',
				state:'active',
				addon:{
				addonType: 'button',
		        position:'right',
				icon:{
					type:'fa',
					class:'fa-cogs',
					},
				css:{'margin-bottom': '0'},
				tooltip:'Active',	  
				handler: function(event) {
				    addon = {state:'active'};
					Components.getComponentById('prueba1').changeInputState('active');
					Components.getComponentById('prueba1').changeAddon(addon);
				}
			},
		//},

		},  
        {type: 'TextField',
			autocalcCols:true,
			container: $('#S2-2'),
			    state:'warning',
				width: '100%',
				addon:{
				addonType: 'button',
		            position:'right',
				icon:{
					type:'fa',
					class:'fa-cogs',
					},
				css:{'margin-bottom': '0'},
				tooltip:'Warnning',	  
				handler: function(event) {
				    addon = {state:'warning'};
					Components.getComponentById('prueba1').changeInputState('warning');
					Components.getComponentById('prueba1').changeAddon(addon);
				}
			},
				
			//},
		},  
         {type: 'TextField',
			autocalcCols:true,
			container: $('#S2-2'),
			    state:'info',
				width: '100%',
				addon:{
				addonType: 'button',
			    position:'right',
		
				icon:{
					type:'fa',
					class:'fa-cogs',
					},
				css:{'margin-bottom': '0'},
				tooltip:'Info',	  
				handler: function(event) {
				    addon = {state:'info'};
					Components.getComponentById('prueba1').changeInputState('info');
					Components.getComponentById('prueba1').changeAddon(addon);
				}
			},
				
		
		//},
			
		},  

        {type: 'TextField',
			autocalcCols:true,
			container: $('#S2-2'),
				width: '100%',
				addon:{
				addonType: 'button',
		        position:'right',
				icon:{
					type:'fa',
					class:'fa-cogs',
					},
				css:{'margin-bottom': '0'},
				tooltip:'Default',	  
				handler: function(event) {
				    addon = {state:'default'};
					Components.getComponentById('prueba1').changeInputState('default');
					Components.getComponentById('prueba1').changeAddon(addon);
				}
			},
		  //},
		},  		
		
	]
}).show();
/////////////////////CAMBIO DE ICONOS DE COLORES//////////////////////////
visiblesSideBar[2]=Components.create('Form',{
		type: 'Form',
		id: 'TestForm',
		container: $('#S2-3'),
		border: false,
		defaultType: "textfield",																	
		fieldDefaults: {
			labelWidth: 60
		},
		items:[
			
			{type:'Button',
				id :'bin',
				container: $('#S2-1'),
				scale: 'small',
				text:'Error',
				state:'error',
				//width:250,
				tooltip:'Tamaño Personalizado',
				css:{
				float:'left',

				},
				handler: function() 
				{

					if(Components.getComponentById('prueba1').config.addon.addonType=='button'){
					addon = {
						icon:{color:'red'},};
			      Components.getComponentById('prueba1').changeAddon(addon);
				}
			   },
			  }, 
			
			{type:'Button',
				id :'bin1',
				container: $('#S2-1'),
				scale: 'small',
				text:'Highlight',
				state:'highlight',
				//width:250,
				tooltip:'Tamaño Personalizado',
				css:{
				float:'left',

				},
				handler: function() 
				{	
					if(Components.getComponentById('prueba1').config.addon.addonType=='button'){
					addon = {
						icon:{color:'yellow'},
						};
			      Components.getComponentById('prueba1').changeAddon(addon);
				}
			   },
				
			},
			
			{type:'Button',
				id :'bin2',
				container: $('#S2-1'),
				scale: 'small',
				text:'Active',
				 state:'active',
				//width:250,
				tooltip:'Tamaño Personalizado',
				css:{
				float:'left',

				},
				handler: function() 
				{		
					if(Components.getComponentById('prueba1').config.addon.addonType=='button'){
					addon = {
						icon:{color:'green'},
						};
			      Components.getComponentById('prueba1').changeAddon(addon);
				}
			   },
			},
			
			{type:'Button',
				id :'bin3',
				container: $('#S2-1'),
				scale: 'small',
				text:'Info',
				 state:'info',
				//width:250,
				tooltip:'Tamaño Personalizado',
				css:{
				float:'left',

				},
				handler: function() 
				{						
					if(Components.getComponentById('prueba1').config.addon.addonType=='button'){
					addon = {
						icon:{color:'blue'},
						};
			      Components.getComponentById('prueba1').changeAddon(addon);
				}
			   },
			},
			
			{type:'Button',
				id :'bin4',
				container: $('#S2-1'),
				scale: 'small',
				text:'Warning',
				 state:'warning',
				//width:250,
				tooltip:'Tamaño Personalizado',
				css:{
				float:'left',

				},
				handler: function() 
				{					
					if(Components.getComponentById('prueba1').config.addon.addonType=='button'){
					addon = {
						icon:{color:'orange'},
						};
			      Components.getComponentById('prueba1').changeAddon(addon);
				}
			   },
			},
			
			{type:'Button',
				id :'bin4',
				container: $('#S2-1'),
				scale: 'small',
				text:'Default',
				tooltip:'Tamaño Personalizado',
				css:{
				float:'left',

				},
				handler: function() 
				{
					if(Components.getComponentById('prueba1').config.addon.addonType=='button'){
					addon = {
						icon:{color:'gray'},
						};
			      Components.getComponentById('prueba1').changeAddon(addon);
				}
			   },
			},
	   ]
	}).show();
//////////////////////////////////////GRILLA GLIPS PARA LOS ICONOS/////////////////////////////////////////////////////////

visiblesSideBar[3]=Components.create('HtmlScreenGrid',{		
container: $('#p-2C'),
text:'Tamaño Personalizado',
ColsDef:[                       
	{	ancho: 12,
		ClassId: 'row2'
	},
	]
});
visiblesSideBar[4]=Components.create('HtmlScreenGrid',{		
container: $('#p-2C'),
text:'Tamaño Personalizado',
ColsDef:[                       
	{	ancho: 12,
	ClassId: 'row2'
	}
 ]
});

visiblesSideBar[5]=Components.create('fontawesomegrid',{
	container: $('#p-2C'),
	container: $('.row2'),
	scale: 'small',				//minier,mini,medium,small,large 
	type:'glipicon',			//tipo
	handler: function( e, font) {		//global, todos los botones de fontawesomegrid enviaran el mismo evento
		var fontprocesado = font.substring(""+10);
		//if((Components.getComponentById('prueba1').config.addon.addonType=='button')||(Components.getComponentById('prueba1').config.addon.addonType=='icon')){
		addon = {
				addonType: 'button',
				icon:{
					type:'glyphicon',
					class:fontprocesado,
					},	
			},
		addon1 = {
				addonType: 'icon',
				icon:{
					type:'glyphicon',
					class:fontprocesado,
					},	
			},
			Components.getComponentById('prueba1').changeAddon(addon);
			Components.getComponentById('prueba1').changeAddon(addon1);
		//}
	}
}).show();
//////////////GRILLA FONTAWESOME///////////////////////////
visiblesSideBar[6]=Components.create('HtmlScreenGrid',{		
container: $('#p-2B'),
text:'Tamaño Personalizado',
ColsDef:[                       
		{	ancho: 12,
		ClassId: 'row1'
		},
	]
});
visiblesSideBar[7]=Components.create('HtmlScreenGrid',{		
	container: $('#p-2B'),
	text:'Tamaño Personalizado',
	ColsDef:[                       
		{	ancho: 12,
			ClassId: 'row1'
		}
	]
});
visiblesSideBar[8]=Components.create('fontawesomegrid',{
	container: $('#p-2B'),
	container: $('.row1'),
	scale: 'small',				//minier,mini,medium,small,large 
	type:'fontawesome',			//tipo
	handler: function( e, font) {		//global, todos los botones de fontawesomegrid enviaran el mismo evento
		var fontprocesado = font.substring(""+3);	
		//if((Components.getComponentById('prueba1').config.addon.addonType=='button')||(Components.getComponentById('prueba1').config.addon.addonType=='icon')){
		addon = {
				addonType: 'button',
				icon:{
					type:'fontawesome',
					class:fontprocesado,
					},
				tooltip:'Error',	  
			},
			addon1 = {
				addonType: 'icon',
				icon:{
					type:'fontawesome',
					class:fontprocesado,
					},
				tooltip:'Error',	  
			},
		  Components.getComponentById('prueba1').changeAddon(addon);
		  Components.getComponentById('prueba1').changeAddon(addon1);
	 // }
	}
}).show();

//boton principal--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	 
visiblesSideBar[9]=Components.create('Form',{
	id: 'TestForm',
	container: $('#S1-B'),
	border: false,
	defaultType: "textfield",																	
	fieldDefaults: {
		labelWidth: 60
	},
	items:[	
	  {type: 'TextField',
	    id:'prueba1',
	    container: $('#S1-B'),
		width: '100%',
		placeholder:'id: prueba1 para addons',
	  },
	]
 }).show();
/////////////////////////////LEFT - ICONS////////////////////////////////////////
visiblesSideBar[10]=Components.create('Button',{
	id :'le',
	container: $('#posit1'),
	scale: 'medium',
	text:'Left',
	//width:250,
	tooltip:'Tamaño Personalizado',
	icon:{
		type:'glyphicon',
		class:'glyphicon-chevron-left',  
		position:'left'
	},
handler: function() 
	{ iconp1={position:'left'};
	if(Components.getComponentById('prueba1').config.addon.addonType!='none'){
	  Components.getComponentById('prueba1').changeAddon(iconp1);
	  }else{alert('no tiene addon');}
	  
	}  
}).show();
/////////////////////////////RIGHT - ICONS////////////////////////////////////////
visiblesSideBar[11]=Components.create('Button',{
	id :'ri',
	container: $('#posit1'),
	scale: 'medium',
	text:'Right',
	//width:250,
	tooltip:'Tamaño Personalizado',
	icon:{
		type:'glyphicon',
		class:'glyphicon-chevron-right',  
		position:'right'
	},
handler: function() 
	{
	iconp12={position:'right'};
	if(Components.getComponentById('prueba1').config.addon.addonType!='none'){
	Components.getComponentById('prueba1').changeAddon(iconp12);}
	else{alert('no tiene addon');}
	}  
}).show();
/////////////////////CREACION ICONS , ADDON-ICONS , ADDON-BUTTONS /////////////////////////////////////////
visiblesSideBar[12]=Components.create('Button',{
	id:'sh2',
	container: $('#S2-4'),
	state:'warning',		
	scale: 'small',
	text:'Agregar Addon Button',
	tooltip:'Boton Warning',
	icon:{
			position:'left',
			type:'fontawesome',
			class:'fa-cogs',
		},
	handler: function() {
	if(Components.getComponentById('prueba1').config.addon.addonType=='none'){
		addon = {
				addonType: 'button',
		        position:'left',
				icon:{
					type:'fontawesome',
					class:'fa-cogs',
					},
				tooltip:'Error',	  
				handler: function(event) {
					alert('Error');
				}
			},
			 Components.getComponentById('prueba1').createAddon(addon);
	}else{alert('TextField ya tiene Addon');}
	} 		
}).show();
visiblesSideBar[13]=Components.create('Button',{
	id:'sh2',
	container: $('#S2-4'),

	state:'active',		
	scale: 'small',
	shape:'rect',
	text:'Agregar Addon Icon',
	tooltip:'Boton Warning',
	icon:{
		position:'left',
		type:'fontawesome',
		class:'fa-cogs',
		},
	handler: function() {
		if(Components.getComponentById('prueba1').config.addon.addonType=='none'){
			addon = {
				addonType: 'icon',
				type:'fa',
				class:'fa-cogs',
				position:'left'
				},
			 Components.getComponentById('prueba1').createAddon(addon);
		}else{alert('TextField ya tiene Addon');}
	} 		
}).show();
 ////////////////////
 visiblesSideBar[14]=Components.create('Image',{ 
		id:"myimage",
       container: $('#S1-A'),
	   tooltip: "Imagen2",		
        image:'images/logo.png',  
		width:150,
												
}).show();
}