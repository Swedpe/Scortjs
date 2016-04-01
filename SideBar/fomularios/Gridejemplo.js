function ejemploGrid(){
visiblesSideBar = new Array();
Components.create('FreeDiv',{
//freeHtml:true,
//html:'<div><div class="row"><div  id="Colorerror" class="col-sm-4"></div><div  id="ColorActive" class="col-sm-4" ></div><div  id="Colorinfo" class="col-sm-4" ></div><br><br></div><div class="row"><div  id="Colorhighlight" class="col-sm-4"></div><div  id="Colorwarning"class="col-sm-4"></div><div  id="Colordefault" class="col-sm-4"></div><br><br></div></div>',
});
visiblesSideBar[0]=Components.create('Window',{
						id:'GridInfoWindow',
						x:854,
						y:13,
						width:430,
						height:270,
						container: $('.page-content'),
						state:'info',
						title: "Store-Data-Actual", 
						html:'<div><h2>Ejemplo CRUD trabajando con datos locales</h2><br><b>Notese en el codigo:</b> La columna NICKNAME es una columna Calculada, no tiene dataIndex, se calcula en base a el valor de las otras 2 columnas.<br><br>'+
						'Use los botones superiores para aprender mas detalles de GridContainer</div>',
						items:[{						
							type: 'ToolBar',
							id: 'ChartProyectoWindowsToolBar',
							region: 'top',
							items: [
							{
									type: 'Button',
									id : 'addFromCode',        
									shape:'box',
									scale:'minier',
									icon:{
										type:'fontawesome',
										class:'fa-info',
										color:'#000099',
										position:'left',
									},
									tooltip:'Informacion de la tabla',
									listeners: {
										click: function() {
										var infoindow =Components.getComponentById('GridInfoWindow');
										infoindow.setHtml('<h2>Ejemplo CRUD trabajando con datos locales</h2><br><b>Notese en el codigo:</b> La columna NICKNAME es una columna Calculada, no tiene dataIndex, se calcula en base a el valor de las otras 2 columnas.<br><br>'+
															'Use los botones superiores para aprender mas detalles de GridContainer<br><br>');				
										}
									}
								},
							   {
									type: 'Button',
									id : 'VerData',
									shape:'box',
									scale:'minier',
									icon:{
										type:'fontawesome',
										class:'fa-database',
										color:'#000099',
										position:'left',
									},
									tooltip:'Ver Array Data',
									listeners: {
										click: function() {
											var grid = Components.getComponentById('GridPrueba');
											var infoindow =Components.getComponentById('GridInfoWindow');
											var datostr = syntaxHighlight(JSON.stringify(grid.store.data, undefined, 4));
											infoindow.setHtml('Los datos <b>grid.store.data</b> Actuales en GridContainer son: <pre>'+datostr+'</pre><br>Notese que <b>position</b> se calcula segun la poscicion que ocupa el registro en la vista actual');
										}
									}
								},
								{
									type: 'Button',
									id : 'addFromCode',        
									shape:'box',
									scale:'minier',
									icon:{
										type:'fontawesome',
										class:'fa-user-plus',
										color:'#000099',
										position:'left',
									},
									tooltip:'Agregar Registro por Codigo',
									listeners: {
										click: function() {
										var grid = Components.getComponentById('GridPrueba');
										var infoindow =Components.getComponentById('GridInfoWindow');
										datos = {pos1: "Paola",pos4: "30"};
										var datostr = syntaxHighlight(JSON.stringify(datos, undefined, 4));
										infoindow.setHtml('Se agrego un registro a la tabla mediante codigo los datos son: <pre>'+datostr+'</pre><br><b>grid.store.add(datos)</b>');
										grid.store.add(datos);
										}
									}
								},
								{
									type: 'Button',
									id : 'arribaBtn',        
									shape:'box',
									scale:'minier',
									icon:{
										type:'fontawesome',
										class:'fa-check-square-o',
										color:'black',
										position:'left',
									},
									tooltip:'Leer la lista de filas seleccionadas',
									listeners: {
										click: function() {
											var grid = Components.getComponentById('GridPrueba');
											var infoindow =Components.getComponentById('GridInfoWindow');	
											var Seleccionados = syntaxHighlight(JSON.stringify(grid.getSelection(), undefined, 4));											
											infoindow.setHtml('los registros seleccionados son: <b>grid.getSelection();</b><br><pre>'+Seleccionados+'</pre>');
										}
									}
								},
								{
									type: 'Button',
									id : 'arribaBtn',        
									shape:'box',
									scale:'minier',
									icon:{
										type:'fontawesome',
										class:'fa-user-md',
										color:'Green',
										
										position:'left',
									},
									tooltip:'Editar un Registro',
									listeners: {
										click: function() {
											var grid = Components.getComponentById('GridPrueba');
											var infoindow =Components.getComponentById('GridInfoWindow');
											seleccion = grid.getSelection();
											if(seleccion.length ==0 || seleccion.length >1){
												infoindow.setHtml('Selecciona 1 registro, la comprovacion:<br><br><b>if(seleccion.length ==0 || seleccion.length >1)</b><br><br>No fue superada');
												return;
											}else{
												datos = {pos1: "Paola",pos4: "30"};
												grid.store.updaterecord(datos,seleccion[0].position);
												var datostr = syntaxHighlight(JSON.stringify(datos, undefined, 4));
												infoindow.setHtml('El registro Seleccionado fue reemplazado por : <br><pre>'+datostr+'</pre><br><b>grid.store.updaterecord(datos,seleccion[0].position)</b>');
											}
										}
									}
								},
								{
									type: 'Button',
									id : 'abajoBtn',        
									shape:'box',
									scale:'minier',
									icon:{
										type:'fontawesome',
										class:'fa-user-times',
										color:'blue',
										position:'left',
									},
									tooltip:'Eliminar Registro',
									listeners: {
										click: function() { 
											var grid = Components.getComponentById('GridPrueba');
											var infoindow =Components.getComponentById('GridInfoWindow');
											seleccion = grid.getSelection();
											if(seleccion.length ==0 || seleccion.length >1){
												infoindow.setHtml('Selecciona 1 registro, la comprovacion:<br><br><b>if(seleccion.length ==0 || seleccion.length >1)</b><br><br>No fue superada');
												return;
											}else{												
												grid.store.deleterecord(seleccion[0],seleccion[0].position);
												var datostr = syntaxHighlight(JSON.stringify(seleccion, undefined, 4));
												infoindow.setHtml('El registro <b>seleccion = grid.getSelection();</b><br> <br><pre>'+datostr+'</pre><br> Fue Eliminado<br><b>grid.store.deleterecord(seleccion[0],seleccion[0].position);</b>');
											}
										}
									}
								},
								{
									type: 'Button',
									id : 'abajoBtn',        
									shape:'box',
									scale:'minier',
									icon:{
										type:'fontawesome',
										class:'fa-user-times',
										color:'red',
										position:'left',
									},
									tooltip:'Eliminar Multiple Registros',
									listeners: {
										click: function() { 
											var grid = Components.getComponentById('GridPrueba');
											var infoindow =Components.getComponentById('GridInfoWindow');
											seleccion = grid.getSelection();
											if(seleccion.length ==0 || seleccion.length <1){
												infoindow.setHtml('Selecciona mas de un registro, la comprovacion:<br><br><b>if(seleccion.length ==0 || seleccion.length <1)</b><br><br>No fue superada');
												return;
											}else{												
												grid.store.deletemultiplerecord(seleccion,false);
												var datostr = syntaxHighlight(JSON.stringify(seleccion, undefined, 4));
												infoindow.setHtml('los registros <b>seleccion = grid.getSelection();</b><br> <br><pre>'+datostr+'</pre><br> fueron eliminados<br><b>grid.store.deletemultiplerecord(seleccion,false);</b>');
											}
										}
									}
								}
							]
						}]
					}).show();	

visiblesSideBar[1]=Components.create('Window',{
        title: "GridPrueba2 Trabajando con Datos Locales", 
        height:205, 
        container: $('.page-content'),
		state:'active',
		width:600,
		x: 228,
        y: 20,
        items: [
            {
                type: "GridContainer",
                region: "center",
                id: "GridPrueba",
				state:'active',
				cellEditing: {clicksToEdit: 2},
				autoScroll: true,
                selModel: {
                                type: "checkboxmodel",
                                checkOnly: false,
                               
                },	
                columns: [
                    {
                        type: "GridColumn",
                        text: "NOMBRE",
                        dataIndex: "pos1",
						width: "26%",
						editor: {
                                            type: 'TextField',
                                            allowBlank: false
                        }
                    },
					{
                        type: "GridColumn",
                        text: "EDAD",
                        dataIndex: "pos4",
                       // typeData: "number",
                       // sortable: true,
                        //filter: true,
						 width: "26%",
                         editor: {
                                            type: 'TextField',
                                            allowBlank: false
                                        }
                    },					
					{
                            type: 'GridColumn',                            
                            text: 'NICKNAME',
                            width: "26%",
                            renderer: function(value, metaData, record, row, col, store, gridView){                               
								return record.pos1+record.pos4;
                            }
                     },
                   
                
                 
                ],
                store: {
				    pageSize:5,
                    fields: ["pos1", "pos2", "pos4"],
                    data: [
                        { pos1: "Cesar", pos4:21},
                        { pos1: "abelardo", pos4:19},
                        { pos1: "geanfranco",  pos4:10},
                        { pos1: "ernesto",   pos4:40},
                        { pos1: "roberto",  pos4:50},
                        { pos1: "luis",  pos4:50},
                        { pos1: "jose", pos4:50},
                        { pos1: "daniel", pos4:50},
                        { pos1: "diego", pos4:50}
                        
                    ]
                },
				resizable: {													//este se considera plugin, ya que puede o no ser incluido, permite cambiar el ancho de las filas
                            liveDrag:true,   
                        },
				bbar: { //determina la barra de paginacion														//barra de paginacion,  los parametros [1,2,3] -> [Elemento de inicio de grupo,Elemento Final de grupo, Total de elementos]
                            displayInfo: true,
                            displayMsg: 'Mostrando  {0} - {1} de {2}',
                            emptyMsg: "No hay temas a mostrar"
                        },
						
            }
        ]
    }).show();
}