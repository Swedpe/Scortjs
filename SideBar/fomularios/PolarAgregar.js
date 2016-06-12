function PolarAgregar(){
	
personal={
	"nombre":"Cesar Cardenas",
	"Id":"Ccardenas",
	"maquina":34,
	"imagen":"Cesar Peña.png",
},
proyectos1= {
        0:{
            "criterio":1,
			"Id": 0,
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
      			}
          },
        1:{
            "criterio":1,
			"Id": 1,
			"Orden": "2",
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
        2:{
            "criterio":1,
			"Id": 2,
			"Orden": "2",
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
        3:{
            "criterio":1,
			"Id": 3,
			"Orden": "2",
            "Descripcion": "Tarea: Pruebas de Sensores LM456",
            "imagen": "def.png",
            "color": "#0000ff",
      			"calificaciones": {
      				"1": 2,
      				"2": 5,
      				"3": 1,
      				"4": 5,
      				"5": 1,
      				"6": 5,
      				"7": 1,
      				"8": 5,
      				"9": 5,
      				"10": 5,
      				"11": 1
      			}
        }
    };

criterios = {

  "tipo": "global",
  
    1:{vectores:[
            {
              "titulo": "Conocimiento del cargo",							//Esto quedo OK
              "datos": [
                  "No posee conocimientos ni habilidades para el cargo, Demuestra deseos de aprender",
                  "Conoce sus obligaciones sin llegar a dominarlos",
                  "Conoce sus obligaciones satisfactoriamente",
                  "Conoce sus obligaciones satisfactoriamente",
                  "Conoce bien sus obligaciones y cada dia se supera en el mejor desempe&ntilde;o de sus labores",
                  "Conoce perfectamente sus obligaciones y demuestra condiciones excepcionales para el cargo."
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
              "titulo": "Cooperacion",
                "datos":[
                    "No colabora",
                    "Colabora poco",
                    "Colabora normalmente",
                    "Colabora normalmente",
                    "Buen esp&iacute;ritu de colaboraci&oacute;n",
                    "Excelente esp&iacute;ritu de colaboraci&oacute;n"
                ]
            },
            {
              "titulo": "intuici&oacute;n",
                "datos":[
                    "Ninguna capacidad de intuici&oacute;n",
                    "Poca capacidad de intuici&oacute;n",
                    "Capacidad satisfactoria de intuici&oacute;n",
                    "Capacidad satisfactoria de intuici&oacute;n",
                    "Buena capacidad de intuici&oacute;n",
                    "Excelente capacidad de intuici&oacute;n"
                ]
            },
            {
              "titulo": "Creatividad",
                "datos":[
                  "Nunca presenta ideas",
                  "Raras veces presenta ideas",
                  "Algunas veces presenta ideas",
                  "Algunas veces presenta ideas",
                  "Casi siempre tiene ideas excelentes",
                  "Siempre tiene ideas excelentes"
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
		Descripcion:'habilidades blandas'},
    3:{vectores:
        [
            
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
              "titulo": "Cooperacion",
                "datos":[
                    "No colabora",
                    "Colabora poco",
                    "Colabora normalmente",
                    "Colabora normalmente",
                    "Buen esp&iacute;ritu de colaboraci&oacute;n",
                    "Excelente esp&iacute;ritu de colaboraci&oacute;n"
                ]
            },
            {
              "titulo": "intuici&oacute;n",
                "datos":[
                    "Ninguna capacidad de intuici&oacute;n",
                    "Poca capacidad de intuici&oacute;n",
                    "Capacidad satisfactoria de intuici&oacute;n",
                    "Capacidad satisfactoria de intuici&oacute;n",
                    "Buena capacidad de intuici&oacute;n",
                    "Excelente capacidad de intuici&oacute;n"
                ]
            },
            {
              "titulo": "Creatividad",
                "datos":[
                  "Nunca presenta ideas",
                  "Raras veces presenta ideas",
                  "Algunas veces presenta ideas",
                  "Algunas veces presenta ideas",
                  "Casi siempre tiene ideas excelentes",
                  "Siempre tiene ideas excelentes"
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
        ],Descripcion:'habilidades blandas'},
    4:{vectores:[
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
                ]
            }
        ],Descripcion:'habilidades blandas'},
};
newdata1={
			"criterio":1,
            "Id": 2,
            "Descripcion": "Tarea: Comicionamiento de Linea 2",
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
              "8": 5,
              "9": 2,
              "10": 2,
              "11": 2
            }
        };
newdata3={
			"criterio":3,
            "Id": 2,
            "Descripcion": "Tarea: Comicionamiento de Linea 2",
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
              "8": 5,
              "9": 2,
            }
        };
newdata4={
			"criterio":4,
            "Id": 2,
            "Descripcion": "Tarea: Comicionamiento de Linea 2",
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
visiblesSideBar = new Array();
visiblesSideBar[1]=Components.create('Window',{
	
			 height: 400,
            width: 530,
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
					type: 'Button',
					id : 'Additem',
					shape:'box',
					scale:'minier',
					icon:{
						type:'fontawesome',
						class:'fa-plus',
						color:'#000099',
						position:'left',
					},
					tooltip:'Additem',
					listeners: {
						click: function() {
							Components.getComponentById('polarid').additem(newdata1);
						}
					}
					},
					{
					type: 'Button',
					id : 'Removeitem [0]',
					shape:'box',
					scale:'minier',
					icon:{
						type:'fontawesome',
						class:'fa-trash',
						color:'#000099',
						position:'left',
					},
					tooltip:'Removeitem [0]',
					listeners: {
						click: function() {
							var primero= Components.getComponentById('polarid').proyectos[Object.keys(Components.getComponentById('polarid').proyectos)[0]].Id;
							Components.getComponentById('polarid').removeitem(primero);
						}
					}
					}
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
					pointscolors:'rgb(255, 86, 86)',
					rdif:20,
					radioIni:20,
					centerX:210,
					centerY:200,
					titulo:{'texto': "Ejemplo Test de Polar Calificacion"},
					subtitulo:{'texto': "11 escalas"},
					radialFontSize:6,
					poligonStrokeWidth:2,
					legendTextSpace:20,
					legendPosition: 'center',					
					fillPoligon:false,
					shadows: false,
					plugins:{ svgToolTip:{
						type: 'svgToolTip',
						orientacion:'arriba',
						offset:7,
					}},
					personal:personal,
                    proyectos:proyectos1,
					criterios:criterios,
                  }
                ]

            }]
 }).show();
	

}