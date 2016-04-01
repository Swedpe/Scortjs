
function ejemplon(){
visiblesSideBar = new Array();
Components.create('FreeDiv',{
id:'mainContent',
freeHtml:true,
container: $('.page-content'),
html:'<div class="row"><div  id="ejemplo1" class="col-sm-4" style="height: inherit" ><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt">SCALES ON-OFF</P></font></strong> <br><br></div><div id="ejemplo2" class="col-sm-4" style="height: inherit"><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt"> STATES ON-OFF</P></font></strong> </div><div id="ejemplo3" class="col-sm-4" style="height: inherit"><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt">NUMBERFIELD ITEMS</P></font></strong></div></div>',
});
	
visiblesSideBar[1]=Components.create('Form',{
	title: "ON-OFF + INPUTS",		
	height:363, 
	width:312,
	y:20,
	x:141,
	container: $('#ejemplo1'),
	state:'error',
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
			label: {html:'<b>Minier</b>',
					cols:4
			},
			input:{cols:8,
					type:'onoffswitch',
					checked:true,
					state:'error',
					scale:'minier',
			},
			
			css:{'padding-top': '10px'
			},
		  },
		  {type: 'InputField',
			label: {html:'<b>Mini</b>',
					cols:4
			},
			input:{cols:8,
					type:'onoffswitch',
					checked:true,
					state:'highlight',
					scale:'mini',
			},
			
			css:{'padding-top': '10px'
			},
		  },
		  {type: 'InputField',
			label: {html:'<b>Small</b>',
					cols:4
			},
			input:{cols:8,
					type:'onoffswitch',
					checked:true,
					state:'active',
					scale:'small',
			},
			
			css:{'padding-top': '10px'
			},
		  },
		  {type: 'InputField',
			label: {html:'<b>Medium</b>',
					cols:4
			},
			input:{cols:8,
					type:'onoffswitch',
					checked:true,
					state:'warning',
					scale:'medium',
			},
			
			css:{'padding-top': '10px'
			},
		  },
		  {type: 'InputField',
			label: {html:'<b>Large</b>',
					cols:4
			},
			input:{cols:8,
					type:'onoffswitch',
					checked:true,
					state:'info',
					scale:'large',
			},
			
			css:{'padding-top': '10px'
			},
		  },
		  
		  
	   ]
	}
  ]	
}).show();

visiblesSideBar[2]=Components.create('Form',{
	title: "ON-OFF + INPUTS",		
	height:363, 
	width:312,
	y:20,
	x:141,
	container: $('#ejemplo2'),
	state:'error',
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
			label: {html:'<b>Error</b>',
					cols:4
			},
			input:{cols:8,
					type:'onoffswitch',
					checked:true,
					state:'error',
					scale:'medium',
			},
			
			css:{'padding-top': '10px'
			},
		  },
		  {type: 'InputField',
			label: {html:'<b>Highlight</b>',
					cols:4
			},
			input:{cols:8,
					type:'onoffswitch',
					checked:true,
					state:'highlight',
					scale:'medium',
			},
			
			css:{'padding-top': '10px'
			},
		  },
		  {type: 'InputField',
			label: {html:'<b>Active</b>',
					cols:4
			},
			input:{cols:8,
					type:'onoffswitch',
					checked:true,
					state:'active',
					scale:'medium',
			},
			
			css:{'padding-top': '10px'
			},
		  },
		  {type: 'InputField',
			label: {html:'<b>Warning</b>',
					cols:4
			},
			input:{cols:8,
					type:'onoffswitch',
					checked:true,
					state:'warning',
					scale:'medium',
			},
			
			css:{'padding-top': '10px'
			},
		  },
		  {type: 'InputField',
			label: {html:'<b>Info</b>',
					cols:4
			},
			input:{cols:8,
					type:'onoffswitch',
					checked:true,
					state:'info',
					scale:'medium',
			},
			
			css:{'padding-top': '10px'
			},
		  },
		  {type: 'InputField',
			label: {html:'<b>Default</b>',
					cols:4
			},
			input:{cols:8,
					type:'onoffswitch',
					checked:true,
					scale:'medium',
			},
			
			css:{'padding-top': '10px'
			},
		  },
		  
	   ]
	}
  ]	
}).show();
	
visiblesSideBar[3]=Components.create('NumberField', { 
container: $('#ejemplo3'),
placeholder:'de 10 en 10',
step:1,
state:'error',
maxValue: 100,
minValue: 1,
value: 300,
 listeners: {
		change: function() {
			alert("change");
		}
			}
}).show();

visiblesSideBar[4]=Components.create('NumberField', { 
container: $('#ejemplo3'),
	placeholder:'de 10 en 10',
	step:1,
	value:50,
	state:'active',
	position:'rigth',
	maxValue: 100,
	minValue: 1,
	value: 100,
}).show();
visiblesSideBar[5]=Components.create('NumberField', { 
container: $('#ejemplo3'),
	placeholder:'de 10 en 10',
	step:1,
	value:50,
	state:'warning',
	position:'rigth',
	maxValue: 100,
	minValue: 1,
	value: 100,
}).show();
visiblesSideBar[6]=Components.create('NumberField', {
container: $('#ejemplo3'), 
	placeholder:'de 10 en 10',
	step:1,
	value:50,
	state:'info',
	position:'rigth',
	maxValue: 100,
	minValue: 1,
	value: 100,
}).show();
visiblesSideBar[7]=Components.create('NumberField', { 
container: $('#ejemplo3'),
	placeholder:'de 10 en 10',
	step:1,
	value:50,
	state:'default',
	position:'rigth',
	maxValue: 100,
	minValue: 1,
	value: 100,
}).show();
}