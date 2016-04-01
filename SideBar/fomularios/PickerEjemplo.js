function ejemploPicker(){
visiblesSideBar[1]=Components.create('InputField',{	 	
		id:"DatePicker1",	
		container: $('.page-content'),
		state:'error',
		label: {html:'<b>DatePicker1 Error</b>',cols:2},
		input:{
				type:'DatePicker',
				cols:2,
				state:'error',
				width: '130',
				buttonPosition:'rigth',
				icon:{
					type:'fontawesome',
					class:'fa-key',
					color:'rgb(85, 85, 95)',
					},
			},
    }).show();
visiblesSideBar[2]=	Components.create('InputField',{	 	
		id:"DatePicker1",	
		container: $('.page-content'),
		state:'highlight',
		label: {html:'<b>DatePicker1 highlight</b>',cols:2},
		input:{
				type:'DatePicker',
				cols:2,
				state:'highlight',
				width: '130',
				buttonPosition:'rigth',
				icon:{
					type:'fontawesome',
					class:'fa-key',
					color:'rgb(85, 85, 95)',
					},
			},
    }).show();
visiblesSideBar[3]=	Components.create('InputField',{	 	
		id:"DatePicker1",	
		container: $('.page-content'),
		state:'active',
		label: {html:'<b>DatePicker1 Active</b>',cols:2},
		input:{
				type:'DatePicker',
				cols:2,
				state:'active',
				width: '130',
				buttonPosition:'rigth',
				icon:{
					type:'fontawesome',
					class:'fa-key',
					color:'rgb(85, 85, 95)',
					},
			},
    }).show();
visiblesSideBar[4]=	Components.create('InputField',{	 	
		id:"DatePicker1",	
		container: $('.page-content'),
		state:'warning',
		label: {html:'<b>DatePicker1 Type Warning</b>',cols:2},
		input:{
				type:'DatePicker',
				cols:2,
				state:'warning',
				width: '130',
				buttonPosition:'rigth',
				icon:{
					type:'fontawesome',
					class:'fa-key',
					color:'rgb(85, 85, 95)',
					},
			},
    }).show();
visiblesSideBar[5]=	Components.create('InputField',{	 	
		id:"DatePicker1",	
		container: $('.page-content'),
		state:'info',
		label: {html:'<b>DatePicker1 Type Info</b>',cols:2},
		input:{
				type:'DatePicker',
				cols:2,
				state:'info',
				width: '130',
				buttonPosition:'rigth',
				icon:{
					type:'fontawesome',
					class:'fa-key',
					color:'rgb(85, 85, 95)',
					},
			},
    }).show();
visiblesSideBar[6]=	Components.create('InputField',{	 	
		id:"DatePicker1",	
		container: $('.page-content'),
		state:'default',
		label: {html:'<b>DatePicker1 Type Default</b>',cols:2},
		input:{
				type:'DatePicker',
				cols:2,
				state:'default',
				width: '130',
				buttonPosition:'rigth',
				icon:{
					type:'fontawesome',
					class:'fa-key',
					color:'rgb(85, 85, 95)',
					},
			},
    }).show();
}