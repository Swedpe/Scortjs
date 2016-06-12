function PolarComboBox(){
	
personal={
	"nombre":"Cesar Cardenas",
	"Id":"Ccardenas",
	"maquina":34,
	"imagen":"Cesar Peña.png",
},
proyectos = {
		
		10:{
            "criterio":0,
			"Id": 10,
            "Descripcion": "Proyecto: Sala Electrica XRM40",
            "imagen": "def.png",
            "color": "#ff0000",
      			"calificaciones": {
      				"1": 5,
      				"2": 1,
      				"3": 1,
      				"4": 1,
      				"5": 1,
      				"6": 1,
      				"7": 1,
      				"8": 1,
      				"9": 5,
      				"10": 5,
      				"11": 5
      			},
        },
		11:{
            "criterio":0,
			"Id": 11,
            "Descripcion": "Proyecto: Ingenieria Inversa S10",
            "imagen": "def.png",
            "color": "#ffff00",
            "calificaciones": {
            "1": 5,
            "2": 5,
            "3": 5,
            "4": 2,
            "5": 5,
            "6": 5,
            "7": 5,
            "8": 2,
            "9": 5,
            "10": 5,
            "11": 5
             },
        },
		12:{
            "criterio":0,
			"Id": 12,
            "Descripcion": "Tarea: Instalacion de Transformador A123",
            "imagen": "def.png",
            "color": "#00ff00",
      			 "calificaciones": {
      				"1": 2,
      				"2": 5,
      				"3": 1,
      				"4": 4,
      				"5": 2,
      				"6": 3,
      				"7": 2,
      				"8": 3,
      				"9": 4,
      				"10": 5,
      				"11": 1
			      },
        },
		13:{
            "criterio":0,
			"Id": 13,
            "Descripcion": "Tarea: TESTEOOO",
            "imagen": "def.png",
            "color": "#0000ff",
      			 "calificaciones": {
      				"1": 5,
      				"2": 2,
      				"3": 5,
      				"4": 3,
      				"5": 5,
      				"6": 2,
      				"7": 1,
      				"8": 6,
      				"9": 3,
      				"10": 4,
      				"11": 2
			      },
        },
};
criterios = {
			"tipo": "global",
			0:{vectores:[
			{
              "titulo": "Orden",							
              "datos": [
                  "Todo trabajo que ocupa termina desordenado",
                  "Predomina el desorden",
                  "No logra tener todo en orden, ",
                  "Mantiene el orden y organizacion controlados",
                  "Tiene bajo control su propio orden y organizacion",
                  "Mejora las condiciones de orden y organizacion de grupo en los que esta involucrado",
                ]
            },
            {
                "titulo": "Calidad",
                "datos": [
                    "Comete errores apreciables con frecuencia y en general su trabajo es insatisfactorio",
                    "Cumple en forma aceptable con las obligaciones de su puesto, debe mejorar la calidad de su trabajo",
                    "Cumple en forma aceptable con las obligaciones de su puesto",
                    "hace su trabajo con exactitud, pulcritud y minuciosidad",
                    "hace su trabajo con exactitud, pulcritud y minuciosidad",
                    "Su trabajo es excepcional totalmente bueno y se supera cada vez m&aacute;s"
                ]
            },
            {

              "titulo":"Responsabilidad",
                "datos":[
                  "Requiere supervisi&oacute;n permanente debido a sus continuos errores",
                  "Necesita frecuentemente supervisi&oacute;n",
                  "Requiere eventual supervisi&oacute;n",
                  "Requiere eventual supervisi&oacute;n",
                  "Requiere supervisi&oacute;n en casos especiales",
                  "No requiere supervisi&oacute;n"
                ]
            },
            {
              "titulo": "Iniciativa",
                "datos":[
                  "Sabe de iniciativa en la relación de su trabajo. Requiere instrucciones detalladas y guia permanente",
                  "Tiene acciones lentas, con frecuencia hay que guiarle en su trabajo y en resolver problemas\r\n",
                  "Ocacionalmente hay que guiarle en su trabajo, algunas veces tiene ideas constructivas",
                  "Ocacionalmente hay que guiarle en su trabajo, algunas veces tiene ideas constructivas",
                  "Resuelve solo problemas que se le presenta.\r\nCon frecuencia aporta ideas",
                  "Constantemente contribuye con ideas y sugerencias.\r\nResuelve solo problemas que se le presentan"
                ]




            },
            {
              "titulo": "Persistencia",
                "datos":[
                    "Se rinde muy facilmente, abandona el trabajo sin terminar",
                    "Luego de unos cuantos intentos insatisfactorios abandona el trabajo",
                    "Se rinde muy frecuentemente, Intenta delegar el trabajo a otros ",
                    "Se rinde muy Dificilmente, Intenta solucionarlo luego de encontrar mas informacion",
                    "A veces se rinde, pero sigue en busca de ayuda hasta lograrlo",
                    "Siempre sigue intentando hasta que lo logra(AUTOSUFICIENTE)"
                ]
            },
            {
              "titulo": "Cooperacion",
                "datos":[
                    "No colabora",
                    "Colabora poco",
					"Colabora solo con sus amigos",
                    "Colabora normalmente",
                    "Buen espiritutu de colaboracion",
                    "Excelente espiritu de colaboracion"
                ]
            },
              {
              "titulo": "intuición",
                "datos":[
                    "Ninguna capacidad de intuición",
                    "Poca capacidad de intuición ",
                    "Capacidad satisfactoria de intuición",
                    "Capacidad satisfactoria de intuición",
                    "Buena capacidad de intuición",
                    "Excelente capacidad de intuición"
                ]
            },

             {
              "titulo": "Creatividad",
                "datos":[
                  "Nunca presenta ideas",
                  "Raras veces presenta ideas",
                  "Algunas veces presenta ideas",
                  "regularmente presenta ideas",
                  "Casi siempre tiene ideas excelentes",
                  "Siempre tiene ideas excelentes"
                ]
            },

            {
              "titulo": "Pensamiento Analítico",
                "datos":[
                    "Nulo Pensamiento Analítico",
                    "Dificultad para realizar pensamiento Analítico ",
                    "Razonable capacidad de Pensamiento Analítico ",
                    "Buen Pensamiento Analítico ",
                    "Pensamiento Analítico superior al promedio",
                    "Excelente Pensamiento Analítico "
                ]
            },
            {
              "titulo": "Búsqueda de información",
                "datos":[
                    "Incapaz de realizar buenas búsquedas",
                    "Dificultad para localizar buenos datos ",
                    "generalmente encuentra información no relevante",
                    "Buena capacidad de búsqueda de información",
                    "Regularmente encuentra información relevante",
                    "capacidad sobresaliente de búsqueda de información. "
                ]
            },

            {
              "titulo": "Trato Personal",
                "datos":[
                    "Trato Tosco",
                    "Trato serio",
                    "Neutral",
                    "Neutral",
                    "Amigable",
                    "Muy amigable"
                ]
            }
			],
			Descripcion:'Habilidades Blandas'},
			1:{vectores:[
            {
              "titulo": "Conocimiento del cargo",							//Esto quedo OK
              "datos": [
                  "No posee conocimientos ni habilidades para el cargo, Demuestra deseos de aprender",
                  "Conoce sus obligaciones sin llegar a dominarlos",
                  "Conoce sus obligaciones satisfactoriamente",
                  "Conoce sus obligaciones satisfactoriamente",
                  "Conoce bien sus obligaciones y cada dia se supera en el mejor desempe&ntilde;o de sus labores",
                ]
            },
            {
                "titulo": "Calidad",
                "datos": [
                    "Comete errores apreciables con frecuencia y en general su trabajo es insatisfactorio",
                    "Cumple en forma aceptable con las obligaciones de su puesto, debe mejorar la calidad de su trabajo",
                    "Cumple en forma aceptable con las obligaciones de su puesto",
                    "hace su trabajo con exactitud, pulcritud y minuciosidad",
                    "hace su trabajo con exactitud, pulcritud y minuciosidad",
                    "Su trabajo es excepcional totalmente bueno y se supera cada vez m&aacute;s"
                ]


            },
            {

              "titulo":"Responsabilidad",
                "datos":[
                  "Requiere supervisi&oacute;n permanente debido a sus continuos errores",
                  "Necesita frecuentemente supervisi&oacute;n",
                  "Requiere eventual supervisi&oacute;n",
                  "Requiere eventual supervisi&oacute;n",
                  "Requiere supervisi&oacute;n en casos especiales",
                  "No requiere supervisi&oacute;n"
                ]
            },
            {
              "titulo": "est&aacute;ndares",
                "datos":[
                    "Siempre esta por debajo de los est&aacute;ndares",
                    "A veces por debajo de los est&aacute;ndares",
                    "Satisface los est&aacute;ndares",
                    "Satisface los est&aacute;ndares",
                    "A veces supera los est&aacute;ndares",
                    "Siempre supera los est&aacute;ndares"
                ]
            },
            {
              "titulo": "Realizacion",
                "datos":[
                    "Incapaz de realizar",
                    "Dificultad para realizar",
                    "Razonable capacidad de realizaci&oacute;n",
                    "Buena capacidad de realizaci&oacute;n",
                    "Buena capacidad de realizaci&oacute;n",
                    "Excelente capacidad de realizaci&oacute;n"
                ]
            },
            {
              "titulo": "Trato Personal",
                "datos":[
                    "Trato Tosco",
                    "Trato serio",
                    "Neutral",
                    "Neutral",
                    "Amigable",
                    "Muy amigable"
                ]
            }
			],
			Descripcion:'Habilidades Administrativas'
			},
			
        };

newproyecto={
            "criterio":0,
			"Id": 7,
            "Descripcion": "Tarea: Comicionamiento de Linea 2",
            "imagen": "def.png",
            "color": "#00DDDD",
            "calificaciones": {
              "1": 2,
              "2": 2,
              "3": 2,
              "4": 5,
              "5": 2,
              "6": 5,
              "7": 2,
              "8": 5,
              "9": 2,
              "10": 5,
              "11": 2,

            }
        };
newproyecto2={
            "criterio":1,
			"Id": 8,
            "Descripcion": "Tarea: TESTEO distinto criterio",
            "imagen": "def.png",
            "color": "#000000",
            "calificaciones": {
              "1": 2,
              "2": 2,
              "3": 2,
              "4": 2,
              "5": 2,
              "6": 2,

            }
        };
newproyecto3={
            "criterio":1,
			"Id": 18,
            "Descripcion": "Tarea: TESTEO proyecto sin formato",
            "imagen": "def.png",
            "color": "#000000",
            "calificaciones": {
              "1": 2,
              "2": 2,
              "3": 2,
              "4": 2,
              "5": 2,
              "6": 2,
              "7": 2,

            }
        };

visiblesSideBar = new Array();
visiblesSideBar[1]=Components.create('Window',{
	
			 height: 600,
            width: 730,
			x:250,
			y:50,
			
			state: 'error',
            resizable: true,
            minimizable: false,
            closeAction:'destroy',
            constrain: true,
            title:'PC_Desempeño_00401',
            id:'WindowDesempeno',
            html:'<div Id="FormWindowDesempeno" style="background-color: white;padding: 1px; height:100%; " class=""></div>',
            items:[
			{	type: 'ToolBar',
				id: 'Demo_ProyectoWindowsToolBar',
				region: 'top',
				items: [
					
					
					
					
					{
					type: 'ComboBox',  
						id:"micombo",
						x:0,
						y: 50,
						label: 'ComboBox con Evento',                                        
						store: {
							fields: ["Id", "Descripcion"],
							data: [			]
						},
						valueField: 'Id',
						displayField: 'Descripcion',
						mode:'local',
						readOnly: false	,								
						listeners: {
									select: function(combo, record, index){
									//--------------------------------------------------
										console.log(combo);
										console.log(record.Id);
										console.log(index);
										
										Components.getComponentById('polarid').Select_Deselect(record.Id);
										//alert("succes");
									}
								}

								
					},
				]
			},
			{
                type:'SvgContainer',
                region: 'center',
                id:'mysvg',
                items:[
                  {
                    id:'polarid',
                    type: 'PolarSvg',
					centerY:315,
					pointscolors:'rgb(255, 86, 86)',
					titulo:{'texto': "Evaluacion de desempeño: Cesar Cardenas"},
					//subtitulo:{'texto': "11 escalas"},
					poligonStrokeWidth:2,
					legendTextSpace:20,
					legendPosition: 'center',					
					fillPoligon:true,
					shadows: true,
					plugins:{ svgToolTip:{
						type: 'svgToolTip',
						orientacion:'izquierda',
						offset:7,
					}},
                    proyectos:proyectos,
					criterios:criterios,
					personal:personal,
					listeners: {
						onRequestDeleteProyect: function(succes) {
							
							//alert(succes);
						},
						onRequestAddProyect: function(succes) {
							var polarData=Components.getComponentById('polarid').proyectos;
							Components.getComponentById('micombo').setStore(polarData).drawRows();
							//alert(succes);
						},
						onSelectProyect: function (event,proyectoId)
						{
							var i = 0;
							for(var elementos in event.data.OBJ.ElementosSeleccionados)
							{
								i++;
							}
							if(i==1)
								Components.getComponentById('micombo').setValue(proyectoId);
							else
								Components.getComponentById('micombo').setValue(3);
						},
						onDeselectProyect: function (event,proyectoId)
						{
							var i = 0;
							for(var elementos in event.data.OBJ.ElementosSeleccionados)
							{
								i++;
							}
							switch(i)
							{
								case 0: Components.getComponentById('micombo').setValue(1);
									break;
								case 1: Components.getComponentById('micombo').setValue(Object.keys(event.data.OBJ.ElementosSeleccionados));
									break;
								default: 
										Components.getComponentById('micombo').setValue(3);
									break;
							}
						},
					}
                  }
                ]

            }]
  }).show();
  // primero sacar una copia de la lista de proyectos y colocar a polar data
  // agregar elementos a polar data tales como ninguno mutiple y seleccione un proyecto
  // extends
  var polarData=Components.getComponentById('polarid').proyectos;
  var agregados=
  {
	1:{
		"Id":"1",
		"Descripcion":"Ninguno",
	},
	2:{
		"Id":"2",
		"Descripcion":"Seleccione un Proyecto",
	},
	3:{
		"Id":"3",
		"Descripcion":"Multiple",
	},
  }
  var NewPolarData= $.extend(agregados,polarData);
  console.log(NewPolarData);
	Components.getComponentById('micombo').setStore(NewPolarData).drawRows().setValue(2);
}