function ejemploForm(){
Components.create('FreeDiv',{
//freeHtml:true,
//html:'<div><div class="row"><div  id="Colorerror" class="col-sm-4"></div><div  id="ColorActive" class="col-sm-4" ></div><div  id="Colorinfo" class="col-sm-4" ></div><br><br></div><div class="row"><div  id="Colorhighlight" class="col-sm-4"></div><div  id="Colorwarning"class="col-sm-4"></div><div  id="Colordefault" class="col-sm-4"></div><br><br></div></div>',
});
visiblesSideBar[1]=Components.create('Window',{
		container: $('.page-content'),
		id:'prueba', 
		behavior:'window',
		title: "Demo Window", 
		x:852,
		y:33,
		height:200, 
		state:'active', 
		width:310,
 }).show();
visiblesSideBar[2]=Components.create('Window', {
		container: $('.page-content'),
		title: 'Ejemplo Form Window',
		height: 340,
		width: 600,
		x:222,
		minimizable: false,
		id: 'window',
		state:'active',
		items: [{
			type: 'Form',
			id: 'uno',
			border: false,
			defaultType: "textfield",																	
			fieldDefaults: {
				labelWidth: 60
			},
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
				
				{type: 'InputField',
					x:100,
					y:200,
					label: {html:'<b>&nbsp;Direccion:</b>',},
					input:{name:'direccion',width: 100,},
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
						buttonPosition:'rigth',
						icon:{
							type:'fontawesome',
							class:'fa-key',
							color:'rgb(85, 85, 95)',
							},
					},

				},
				{type: 'InputField',
					label: {html:'<b>ProgressBar:</b>',
							cols:4},
					input:{
						type:'ProgressBar',
						cols:8,
						name:'valorProgress',
						state:'error',
						class:'striped',
						width: '100%',
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
				  },
				
				
			],
	buttons: [
		{ 
			text: 'Show Data',			
			x: 30,
			handler: function() {
			   console.log(Components.getComponentById('uno').getValues());
				var grid = Components.getComponentById('uno');
				var infoindow =Components.getComponentById('prueba');
				var Seleccionados = syntaxHighlight(JSON.stringify(grid.getValues(), undefined, 7));	
				infoindow.setHtml('los valores ingresados son:<br><pre>'+Seleccionados+'</pre>');
			}	
		},
		{ 
			text: 'Set Datos' ,
			x: 190,
			handler: function() {
				datos = {'nombre':'William','apellido':'Uria','direccion':'Arequipa','fecha':'1993-02-10','valorProgress':45,'edad':48,'on-off':false
			  }
				var set1 = Components.getComponentById('uno');
				var set2 =Components.getComponentById('prueba');
				set1.setValues(datos);	
			} 
		}
	]
  }]
 }).show();
}