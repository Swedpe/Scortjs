function PertContenidoFlotante(){
visiblesSideBar = new Array();
Components.create('Window', {
	title: 'Edicion de nodos',
	height: 250,
	width: 465,
	closeAction:'hide',
	minimizable: false,
	autoShow:true,
	id: 'windowEdicionNodos',
	items: [{
		type: 'Form',
		id: 'formNodos',
		border: false,
		defaultType: "textfield",																	
		fieldDefaults: {
			labelWidth: 60
		},
		items: 
		[
			{
				type: 'InputField',
				container: $('Id'),
				enabled:false,
				input:{cols:12,
					width: '80%',
					state:'default',
					readOnly:true,
					name: 'NodoId'
				 },
			},
			{	type: 'InputField',
				autocalcCols:true,
				container: $('#ejemplo6'),
				input:{cols:12, placeholder:'ADDON ICON DEFAULT',
					width: '80%',
					addon:{
						addonType: 'icon',
						type:'fa',
						class:'fa fa-font',
						position:'right'
					},
					state:'default',
				name: 'Descripcion'
				},
			},
			{	type: 'InputField',
				autocalcCols:true,
				container: $('#ejemplo6'),
				input:{cols:12, placeholder:'ADDON ICON DEFAULT',
					width: '80%',
					addon:{
						addonType: 'icon',
						type:'fa',
						class:'fa fa-font',
						position:'right'
					},
					state:'default',
				name: 'Duracion'
				},
			},
			{	type: 'InputField',
				autocalcCols:true,
				container: $('#ejemplo6'),
				input:{cols:12, placeholder:'ADDON ICON DEFAULT',
					width: '80%',
					addon:{
						addonType: 'icon',
						type:'fa',
						class:'fa fa-font',
						position:'right'
					},
					state:'default',
				name: 'Holgura'
				},
			},
			
			
		],
		buttons: [
			{ 
				text: 'Aceptar Cambio',			
				x: 50,
				icon:{
				type:'fontawesome',
				class:'fa-check',
				position:'left',
		},
				handler: function(e) {
				Components.getComponentById("windowEdicionNodos").hide();
				var formData = Components.getComponentById("formNodos").getValues();			
					Components.getComponentById('PertTree').nodos[Components.getComponentById('PertTree').nodoSeleccionado].Edicion(formData);	 
					
				}
			},
			{ 
				text: 'Cancelar Cambio' ,
				x: 100,
				icon:{
				type:'fontawesome',
				class:'fa-close',
				position:'left',
		       },
		
				handler: function(e) {
					Components.getComponentById("windowEdicionNodos").hide();
				} 
			}
		]
	}
  ]
}).hide();
visiblesSideBar[1]=Components.create('Window',{
		title: "Scortjs WBS Pert Component SWEDPE",		
        container: $('.page-content'),
		state:'info',
		autoShow:true,
		    x: 484,
            y: 61,
		height:383, 
        width:522,
        items:[
			
			{
				 type: 'SvgContainer', 
				 region: 'center',
				 id:'PertSVG',
				 items:[
						{
						type: 'Pert',						
						id:'PertTree',
						scale:20,
						 listeners: {
                            onNodeSelect: function(e) {
							console.log("activar");
								//activar los controles de un nodo. este listener afecta a todos los nodos.
							
								
                            },
							offNodeSelect: function(e){
								
							},
							onNodeSelectSucesorLink:function(e)
							{
								Components.getComponentById('BtnCortar').enable();
							},
							offNodeSelectSucesorLink:function(e)
							{
								Components.getComponentById('BtnCortar').disable();
							},
                        },
						plugins:{svgToolTip:{
							type: 'svgToolTip',
							orientacion:'arriba',
							parentType: 'WBSTree',
							viewToolTip: '"<div><table class=\'tablePertNodeExample\' ><tr><td colspan=3 ><strong>"+this.internalData.visibleId+"</strong></td></tr><tr><td colspan=3 style=\'border-top: solid; border-bottom: solid;\'><strong style=\'font-size:13px;\'>"+this.internalData.descripcion+"</strong></td></tr><tr><td ><strong>"+this.internalData.duracion+"</strong></td><td style=\'border-left: solid; border-right: solid;\'><strong>"+this.internalData.holgura+"</strong></td><td><strong >"+this.internalData.holgura+"</strong></td></tr></table></div>"',
						},},
						items:
							[
							
    {
        "PertId": "0",
        "type": "GrafoNodo",
        "Y": "50",
        "X": "30",
        "internalData": {
            "descripcion": "SANEAMIENTO - CHICHAS",
            "duracion": "Nah",
            "holgura": "Nad",
            "visibleId": 0,
			critical:true
        },
		"Sucesoras": [
            "1","2"
        ]
    },
    {
        "PertId": "1",
        "type": "GrafoNodo",
        "Y": "30",
        "X": "90",
        "internalData": {
            "descripcion": "INICIO DE PROYECTO",
            "duracion": "Nah",
            "holgura": "Nad",
            "visibleId": 1,
			critical:true
        },
		"Sucesoras": [
            "3"
        ],
        "Predecesoras": [
            "0"
        ]
    },
    {
        "PertId": "2",
        "type": "GrafoNodo",
        "Y": "100",
        "X": "90",
        "internalData": {
            "descripcion": "TOTAL PROYECTO",
            "duracion": "Nah",
            "holgura": "Nad",
            "visibleId": 2
        },
		"Sucesoras": [
            "3"
        ],
        "Predecesoras": [
            "0"
        ]
    },
    {
        "PertId": "3",
        "type": "GrafoNodo",
        "Y": "50",
        "X": "180",
        "internalData": {
            "descripcion": "SISTEMA DE AGUA POTABLE",
            "duracion": "Nah",
            "holgura": "Nad",
            "visibleId": 3,
			critical:true
        },
        "Predecesoras": [
            "1","2"
        ]
    },
			]
						},
			]}
			]
        
    }).show();
}