function PertAvanzado(){
visiblesSideBar = new Array();
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
                type: 'ToolBar',
                id: 'ChartProyectoWindowsToolBar',
                state:'info',
				region: 'top',
                items: [
                   {
                        type: 'Button',
                        id : 'BtnEnlace',
                        scale:'minier',
                        shape:'box',                      
						icon:{
							type:'fontawesome',
							class:'fa-mars-stroke',	
							color:'blue',
						},
                        tooltip:'nuevo Enlace',
                        listeners: {
                            click: function(e) {
								//console.log($('#nodoPert'+Components.getComponentById('PertTree').nodoSeleccionado));
								Components.getComponentById('PertTree').nodos[Components.getComponentById('PertTree').nodoSeleccionado].nuevoEnlace(2);
                            }
                        }
                    },
					
					{
						type: 'Button',
						id : 'exchange',
						shape:'box',
						scale:'minier',
						icon:{
							type:'fontawesome',
							class:'fa fa-hand-rock-o',
							color:'black',
							position:'left',
						},
						tooltip:'PC_Cambiar_orientacion',
						listeners: {
							click: function(e) {
									console.log(e.data.OBJ);
									
									if(!Components.getComponentById('PertSVG').handDrag){							
										Components.getComponentById('PertSVG').AllowDrag();	
										e.data.OBJ.divContainer.append('<i class="layerIcon2 buttonItem-icon-left   fa fa-ban" style="top: 5%;color: rgba(255, 0, 0, 0.55);position: absolute;z-index: 1;left: 17%;font-size: 27px;"></i>');
										console.log('ee');
									}else{
										Components.getComponentById('PertSVG').DisallowDrag();	
										$('.layerIcon2',e.data.OBJ.divContainer).remove();
									}
							}
						}
					},
					{
						type: 'Button',
						id : 'BtnCortar',
						shape:'box',
						scale:'minier',
						enabled:true,
						icon:{
							type:'fontawesome',
							class:'fa fa-chain-broken',
							color:'blue',
							position:'left',
						},
						tooltip:'Cortar enlace',
						listeners: {
							click: function(e) {
								Components.getComponentById('PertTree').edgeSeleccionado.Borrar();
							}
						}
					},
					{
						type: 'Button',
						id : 'BtnNuevoEnlacePadre',
						shape:'box',
						scale:'minier',
						enabled:true,
						icon:{
							type:'fontawesome',
							class:'fa fa-neuter',
							color:'blue',
							position:'left',
						},
						tooltip:'Nuevo enlace',
						listeners: {
							click: function(e) {
								Components.getComponentById('PertTree').nodos[Components.getComponentById('PertTree').nodoSeleccionado].nuevoEnlace(1);
							}
						}
					},
					{
						type: 'Button',
						id : 'BtnNuevoNodo',
						shape:'box',
						scale:'minier',
						enabled:true,
						icon:{
							type:'fontawesome',
							class:'fa fa-circle-o',
							color:'blue',
							position:'left',
						},
						tooltip:'Nuevo Nodo',
						listeners: {
							click: function(e) {
								Components.getComponentById('PertTree').nuevoNodo();
							}
						}
					},
                ]
            },
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
								console.log("desactivar");
								
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