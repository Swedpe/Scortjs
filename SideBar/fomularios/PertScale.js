function PertScale(){
visiblesSideBar = new Array();
visiblesSideBar[1]=Components.create('Window',{
		title: "Scortjs WBS Pert Component SWEDPE",		
        container: $('.page-content'),
		autoShow:true,
		state:'info',
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
					{type:'Slider',	
						width: 150,
						value: 20,
						increment: 10,
						minValue: 10,
						maxValue: 100,
						state:'active',
						tooltip:'Scale',
						css:{'margin-left':'10px'},
						listeners: {
							change: function( event, ui ) {
								Components.getComponentById('PertTree').CambioEscala(ui.value);
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
								
								Components.getComponentById('MenuSup').enable();
								Components.getComponentById('BotonMenuShapes').enable();
								Components.getComponentById('BotonParaCirculo').enable();
								Components.getComponentById('BotonParaHexagono').enable();
								Components.getComponentById('BotonParacuadrado').enable();
								//el botón que habilita el arrastre
								Components.getComponentById('BtnArrastre').enable();
								console.log()
								if((e.DragStatus==true)&&($('.layerIcon2',Components.getComponentById('BtnArrastre').divContainer).length==0)){
									Components.getComponentById('BtnArrastre').divContainer.append('<i class="layerIcon2 buttonItem-icon-left   fa fa-ban" style="top: 5%;color: rgba(255, 0, 0, 0.55);position: absolute;z-index: 1;left: 17%;font-size: 27px;"></i>');
									Components.getComponentById('BtnArrastre').divContainer.prop('title', 'Disable Drag');

								}
								else{
									$('.layerIcon2',Components.getComponentById('BtnArrastre').divContainer).remove();
									Components.getComponentById('BtnArrastre').divContainer.prop('title', 'Enable Drag');
								}
								
								
                            },
							offNodeSelect: function(e){
								console.log("desactivar");
								Components.getComponentById('MenuSup').disable();
								Components.getComponentById('BotonMenuShapes').disable();
								Components.getComponentById('BotonParaCirculo').disable();
								Components.getComponentById('BotonParaHexagono').disable();
								Components.getComponentById('BotonParacuadrado').disable();
								Components.getComponentById('BtnArrastre').disable();
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