function ejemploAccordeon(){
Components.create('FreeDiv',{
id:'mainContent',
freeHtml:true,
container: $('.page-content'),
html:'<div class="row"><div  class="col-sm-12" style="height: inherit"><div  id="S1" class="col-sm-4" style="height: inherit" ><strong><FONT FACE="arial"> <p style="color: #black; font-size: 11pt"></P></font></strong> </div><div  id="S2" class="col-sm-4" style="height: inherit" ><strong><FONT FACE="arial"> <p style="color: #black; font-size: 11pt"></P></font></strong></div><div  id="S3" class="col-sm-4" style="height: inherit" ><strong><FONT FACE="arial"> <p style="color: #black; font-size: 11pt"></P></font></strong> </div></div></div><div class="row"><div  class="col-sm-12" style="height: inherit"><div  id="S4" class="col-sm-4" style="height: inherit" ><strong><FONT FACE="arial"> <p style="color: #black; font-size: 11pt"></P></font></strong></div><div  id="S5" class="col-sm-4" style="height: inherit" ><strong><FONT FACE="arial"> <p style="color: #black; font-size: 11pt"></P></font></strong> </div><div  id="S6" class="col-sm-4" style="height: inherit" ><strong><FONT FACE="arial"> <p style="color: #black; font-size: 11pt"></P></font></strong> </div></div></div>',
});
visiblesSideBar[1]=Components.create('Window', {
		//autoShow: true,
		height: 210,
		width: 550,
		container: $('#S1'),
		//resizable: true,
		//minimizable: false,
		closeAction:'destroy',
		state:'info',
		//constrain: true,
	    behavior :'panel',
		title: 'Accordeon Container',				
		items: [
		{
		  
			type: 'Form', 
				items: [
		        {
						 type: "AccordeonContainer",
							region: 'center',
							state:'info',
							id:'miacordeon',													
							icons: {
								'header': "fa-ra",
								'activeHeader': "fa-ra"
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
												label: {html:'<b>&nbsp; Apellidos :</b>',cols:4},
												input:{name:'apellido',width: 100,cols:8},
												alignLabel: "left"
											},
											
											{type: 'InputField',
												x:100,
												y:200,
												label: {html:'<b>&nbsp;Direccion:</b>',cols:4},
												input:{name:'direccion',width: 100,cols:8},
												alignLabel: "left"
											},
											{type: 'InputField',
												label: {html:'<b>DatePicker:</b>',
														cols:4},
												input:{
													type:'DatePicker',
													name:'fecha',
													cols:8,
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
											{type: 'Button',
												state:'error',	
												scale: 'medium',
												text:'medium',
												shape:'box',
												icon:{
													type:'fontawesome',
													class:'fa-floppy-o',
													//color:'#ffb752',
													position:'right'
												},
												tooltip:'medium',	  
												handler: function() {
													alert('medium');
												}  
											},
											{type: 'Button',
												state:'active',	
												scale: 'medium',
												text:'medium',
												shape:'box',
												icon:{
													type:'fontawesome',
													class:'fa-floppy-o',
													//color:'#ffb752',
													position:'right'
												},
												tooltip:'medium Info',	  
												handler: function() {
													alert('medium');
												}  
											},
											{type: 'Button',
												state:'warning',	
												scale: 'medium',
												text:'medium',
												shape:'box',
												icon:{
													type:'fontawesome',
													class:'fa-floppy-o',
													//color:'#ffb752',
													position:'right'
												},
												tooltip:'medium Info',	  
												handler: function() {
													alert('medium');
												}  
											},
											{type: 'Button',
												state:'info',	
												scale: 'medium',
												text:'medium',
												shape:'box',
												icon:{
													type:'fontawesome',
													class:'fa-floppy-o',
													//color:'#ffb752',
													position:'right'
												},
												tooltip:'medium Info',	  
												handler: function() {
													alert('medium');
												}  
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
													cols:4},
												input:{
													type:'ProgressBar',
													cols:8,
													name:'valorProgress',
													state:'error',
													class:'striped',
													width: '70%',
													input:true,
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
												name:'edad'
											  },	
											},
											{type: 'InputField',
												label: {html:'<b>On-Off:</b>',
														cols:4
												},
												input:{cols:8,
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
													label: {html:'<b>&nbsp; Nombre :</b>',cols:4},
													input:{
													name:'nombre',
													width: 150,cols:8,},
													alignLabel: "left"
												},	
												{type: 'InputField',
													x:0,
													y:150,
													label: {html:'<b>&nbsp; Apellidos :</b>',cols:4},
													input:{name:'apellido',width: 100,cols:8},
													alignLabel: "left"
												},
												
												//Components.create('Separator');
												{type: 'InputField',
												label: {html:'<b>DatePicker:</b>',
														cols:4},
												input:{
													type:'DatePicker',
													name:'fecha',
													cols:8,
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
														cols:4},
												input:{
													type:'DatePicker',
													name:'fecha',
													cols:8,
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
											{type: 'Slider',
												x:10,
												y:150,		
												width: 150,
												value: 50,
												increment: 25,
												minValue: 0,
												maxValue: 100,
												state:'active',
												tooltip:'Con etiqueta',
												listeners: {
													change: function( event, ui ) {			  
														}
												}
											},
	
										]						
									},
									{
										   type: 'AccordeonItem',                                                    
										   title: 'Accordeon 4',													 
										   items: [													   
												{type: 'InputField',
													x:10,
													y:100,
													label: {html:'<b>&nbsp; Nombre :</b>',cols:4},
													input:{
													name:'nombre',
													width: 150,cols:8,},
													alignLabel: "left"
												},	
												{type: 'InputField',
													x:0,
													y:150,
													label: {html:'<b>&nbsp; Apellidos :</b>',cols:4},
													input:{name:'apellido',width: 100,cols:8},
													alignLabel: "left"
												},
												
												//Components.create('Separator');
												{type: 'InputField',
												label: {html:'<b>DatePicker:</b>',
														cols:4},
												input:{
													type:'DatePicker',
													name:'fecha',
													cols:8,
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
														cols:4},
												input:{
													type:'DatePicker',
													name:'fecha',
													cols:8,
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
											{type: 'Slider',
												x:10,
												y:150,		
												width: 150,
												value: 50,
												increment: 25,
												minValue: 0,
												maxValue: 100,
												state:'active',
												tooltip:'Con etiqueta',
												listeners: {
													change: function( event, ui ) {			  
														}
												}
											},
	
										]						
									}
									
							]
						}
					]	
						
				}
		]
}).show();		
visiblesSideBar[2]=Components.create('Window', {
		//autoShow: true,
		height: 210,
		width: 550,
		container: $('#S2'),
		state:'error',
		//resizable: true,
		//minimizable: false,
		closeAction:'destroy',
		//constrain: true,
	    behavior :'panel',
		title: 'Accordeon Container',				
		items: [
		{
		  type: 'Form', 
				items: [
		        {
							type: "AccordeonContainer",
							region: 'center',
							state:'error',
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
												label: {html:'<b>&nbsp; Apellidos :</b>',cols:4},
												input:{name:'apellido',width: 100,cols:8},
												alignLabel: "left"
											},
											
											{type: 'InputField',
												x:100,
												y:200,
												label: {html:'<b>&nbsp;Direccion:</b>',cols:4},
												input:{name:'direccion',width: 100,cols:8},
												alignLabel: "left"
											},
											{type: 'InputField',
												label: {html:'<b>DatePicker:</b>',
														cols:4},
												input:{
													type:'DatePicker',
													name:'fecha',
													cols:8,
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
													cols:4},
												input:{
													type:'ProgressBar',
													cols:8,
													name:'valorProgress',
													state:'error',
													class:'striped',
													width: '70%',
													input:true,
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
												name:'edad'
											  },	
											},
											{type: 'InputField',
												label: {html:'<b>On-Off:</b>',
														cols:4
												},
												input:{cols:8,
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
													label: {html:'<b>&nbsp; Nombre :</b>',cols:4},
													input:{
													name:'nombre',
													width: 150,cols:8},
													alignLabel: "left"
												},	
												{type: 'InputField',
													x:0,
													y:150,
													label: {html:'<b>&nbsp; Apellidos :</b>',cols:4},
													input:{name:'apellido',width: 100,cols:8},
													alignLabel: "left"
												},
												
												//Components.create('Separator');
												{type: 'InputField',
												label: {html:'<b>DatePicker:</b>',
														cols:4},
												input:{
													type:'DatePicker',
													name:'fecha',
													cols:8,
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
														cols:4},
												input:{
													type:'DatePicker',
													name:'fecha',
													cols:8,
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
											{type: 'InputField',
												label: {html:'<b>Select active</b>',
														cols:4
												},
												input:{cols:8,
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
													cols:4
											},
											input:{cols:8,
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
											]						
									}
							]
						}
					]
				}	
		]
}).show();	
visiblesSideBar[3]=Components.create('Window', {
		//autoShow: true,
		height: 210,
		width: 550,
		container: $('#S3'),
		state:'highlight',
		//resizable: true,
		//minimizable: false,
		closeAction:'destroy',
		//constrain: true,
	    behavior :'panel',
		title: 'Accordeon Container',				
		items: [
		{
		   type: 'Form', 
				items: [
		        {
							type: "AccordeonContainer",
							region: 'center',
							state:'highlight',
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
												label: {html:'<b>&nbsp; Apellidos :</b>',cols:4},
												input:{name:'apellido',width: 100,cols:8},
												alignLabel: "left"
											},
											
											{type: 'InputField',
												x:100,
												y:200,
												label: {html:'<b>&nbsp;Direccion:</b>',cols:4},
												input:{name:'direccion',width: 100,cols:8},
												alignLabel: "left"
											},
											{type: 'InputField',
												label: {html:'<b>DatePicker:</b>',
														cols:4},
												input:{
													type:'DatePicker',
													name:'fecha',
													cols:8,
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
													cols:4},
												input:{
													type:'ProgressBar',
													cols:8,
													name:'valorProgress',
													state:'error',
													class:'striped',
													width: '70%',
													input:true,
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
												name:'edad'
											  },	
											},
											{type: 'InputField',
												label: {html:'<b>On-Off:</b>',
														cols:4
												},
												input:{cols:8,
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
													label: {html:'<b>&nbsp; Nombre :</b>',cols:4},
													input:{
													name:'nombre',
													width: 150,cols:8},
													alignLabel: "left"
												},	
												{type: 'InputField',
													x:0,
													y:150,
													label: {html:'<b>&nbsp; Apellidos :</b>',cols:4},
													input:{name:'apellido',width: 100,cols:8},
													alignLabel: "left"
												},
												
												//Components.create('Separator');
												{type: 'InputField',
												label: {html:'<b>DatePicker:</b>',
														cols:4},
												input:{
													type:'DatePicker',
													name:'fecha',
													cols:8,
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
														cols:4},
												input:{
													type:'DatePicker',
													name:'fecha',
													cols:8,
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
}).show();	
visiblesSideBar[4]=Components.create('Window', {
		//autoShow: true,
		height: 210,
		width: 550,
		container: $('#S4'),
		//resizable: true,
		//minimizable: false,
		closeAction:'destroy',
		//constrain: true,
	    state:'active',
		behavior :'panel',
		title: 'Accordeon Container',				
		items: [
		{
							type: "AccordeonContainer",
							region: 'center',
							state:'active',
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
}).show();	
visiblesSideBar[5]=Components.create('Window', {
		//autoShow: true,
		height: 210,
		width: 550,
		container: $('#S5'),
		state:'warning',
		//resizable: true,
		//minimizable: false,
		closeAction:'destroy',
		//constrain: true,
	    behavior :'panel',
		title: 'Accordeon Container',				
		items: [
		{
							type: "AccordeonContainer",
							region: 'center',
							state:'warning',
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
}).show();	
visiblesSideBar[6]=Components.create('Window', {
		//autoShow: true,
		height: 210,
		width: 550,
		container: $('#S6'),
		//resizable: true,
		//minimizable: false,
		behavior:'panel',
		closeAction:'destroy',
		//constrain: true,
		title: 'Accordeon Container',				
		items: [
		{
							type: "AccordeonContainer",
							region: 'center',
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
}).show();
}