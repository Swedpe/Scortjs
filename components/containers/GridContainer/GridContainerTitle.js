/**		
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	GridContainerTitle v 1.0 - a jQuery Ui extension
	Licences: GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com].
*/
//implementacion de CRUD en una tabla Scort JS.
Components.GridContainerTitle.prototype.init = function(dataObj) {
    $this= this;
	if(dataObj.state){this.state = dataObj.state}; 
	this.config = {
        container: $('body'),
        id: "GridContainerTitle-"+ Math.round(Math.random() * 2000),
        fields: [],
        displayInfo: true,
		parent:'',
		itemSeleccionado:false,
		state:'default',	
		CreateButton: {	
			type: 'Button',
			parent: this,
			shape:'circle',
                        scale:'minier',
						state:this.state,
                        icon:{
									type:'fontawesome',
									class:'fa-plus',
									color:'purple',
									position:'left',
						},
			
			tooltip:'Agregar Registro',	
			CodeHelper:	dataObj.parent,		
			handler: function(e) {		
						if($this.ventanaeditor == undefined){
								$this.createform(e,'create');
						}else{
							$this.OkButton.CodeHelper = 'create';
							$this.ventanaeditor.setTitle('Crear Nuevo Registro')
							}
						Components.getComponentById($this.formdef.id).Clear();						
						$this.ventanaeditor.show();
			
				}
			}, 
		ReloadButton: {													//editar un elemento de la grilla
			type: 'Button',
			state:this.state,
			parent:this,
			shape:'circle',
			scale:'minier',
			icon:{type:'fontawesome',class:'fa-pencil',color:'#000099',position:'left',},
			tooltip:'Editar',	
			CodeHelper:	dataObj.parent,					
			handler: function(e) {
						var seleccion= e.data.OBJ.config.CodeHelper.getSelection();			//obtener el ítem seleccionado desde gridContainer
						if(seleccion.length ==0 || seleccion.length >1){
							alert("Debe seleccionar 1 un registro")
							return;
						}else{
							if($this.ventanaeditor == undefined){
								$this.createform(e,'update');	
							}else {
								$this.OkButton.CodeHelper = 'update';
								$this.ventanaeditor.setTitle('Actualizar Registro')
								}
								e.data.OBJ.parent.itemSeleccionado = seleccion[0].position;				//almacenar la poscicion de el ítem seleccionado
								Components.getComponentById($this.formdef.id).setValues(seleccion[0]);	//colocar los valores de la grilla en el formulario							
								$this.ventanaeditor.show();
						}
					}
			},
		UpdateButton: {														//actualizar la vista actual.
			type: 'Button',
			state:this.state,
			parent:this,
			shape:'circle',
                        scale:'minier',
						
                        icon:{
									type:'fontawesome',
									class:'fa-undo',
									color:'green',
									position:'left',
						},
			
			tooltip:'Recargar Datos',
			CodeHelper:	dataObj.parent,										//referencia a gridcontainer	
			handler: function(e) {
					var tb = e.data.OBJ.config.CodeHelper.pagingToolbar;	//obtenemos el paginador de gridcontainer
					var str =  e.data.OBJ.config.CodeHelper.store;			//obtenemos el store de gridcontainer
					var grd =  e.data.OBJ.config.CodeHelper;				//obtenermos gridcontainer
					var selection = grd.getSelection();						//obtenemos el item seleccionado en la grilla (porque?)
					if(selection.length == 0){
						if( tb != undefined){
							tb.updateToolbar(tb.currentPage);
							return;
						}else{
							str.loadPage(1);
							return;						
						}
					}
				}
			},
		DeleteButton: {	
			type: 'Button',
			state:this.state,
			parent:this,
			shape:'circle',
                        scale:'minier',
						
                        icon:{
									type:'fontawesome',
									class:'fa-remove',
									color:'red',
									position:'left',
						},
			tooltip:'Borrar Registro',
			CodeHelper:	dataObj.parent,				
			handler: function(e) {
					var grd =  e.data.OBJ.config.CodeHelper;
					var selection = grd.getSelection();					
					if(selection.length == 0){
						alert("Debe seleccionar algun registro");
						return;
					}else if(selection.length == 1)										
						grd.store.deleterecord(selection[0],selection[0].position);
					 else if(selection.length > 1)	
						grd.store.deletemultiplerecord(selection,false);
					
				}
			},				
        items: []
    };
    
    for(var i in dataObj) {
        if(this.config[i] != undefined)
            this.config[i] = dataObj[i];
    }  
    this.parent = this.config.parent;				//normalmente sera un componente gridcontainer aunque en casos especiales podría ser otro
	this.id = this.config.id;
    this.container = this.config.container;
    this.store = this.config.store;
    this.toolbar = null;
	this.OkButton = '';								//boton para ok en Creacion y Actualizacion de Item
	this.CancelButton = '';							//Boton para cancelar la edicion y actualizacion.
 
}
//######################################################################################################################################################################################################
Components.GridContainerTitle.prototype.createNewReg = function(e) {
	//crear un nuevo registro en la tabla y colocarla al final de todos los demas items
	var storegrid =  this.config.parent.store;
	var frmvalues =this.form.getValues();
	storegrid.add(frmvalues);
	this.ventanaeditor.hide();
	this.form.Clear();
}
//######################################################################################################################################################################################################
Components.GridContainerTitle.prototype.updateReg = function(e) {
	//actualizar un registro de la grilla padre,
	var storegrid =  this.config.parent.store;
	var frmvalues = this.form.getValues();
	console.log(this.itemSeleccionado);
	storegrid.updaterecord(frmvalues,this.itemSeleccionado);
	this.ventanaeditor.hide();
	this.form.Clear();
}

//########################################################################################################################################################################################################
Components.GridContainerTitle.prototype.create = function() {
	//cada uno de los botones que contiene este control, esta intimamente amarrado con el funcionamiento del store.
	var GridProxy=this.parent.store.config.proxy;		//leemos la configuración del proxy de gridcontainer
	
    var $this = this;  
	var itemsToolbar = []
	itemsToolbar.push(this.config.CreateButton);//0
	itemsToolbar.push(this.config.ReloadButton);//1
	itemsToolbar.push(this.config.UpdateButton);//2
	itemsToolbar.push(this.config.DeleteButton);//3
	
    itemsToolbar = itemsToolbar.concat(this.config.items, [{
        type: 'Label',
        id: this.id + '-MsgDisplay',
        text: ''
    }]);
    
    this.toolbar = Components.create('ToolBar', {
        container: this.container,
        items: itemsToolbar
    });
    //referencai directa a los botones creados con la config de botones
    this.CreateButton = this.toolbar.itemsObjs[0];
    this.ReloadButton = this.toolbar.itemsObjs[1];
    this.UpdateButton = this.toolbar.itemsObjs[2];
    this.DeleteButton = this.toolbar.itemsObjs[3];  
return this ;
}
//##############################################################################
Components.GridContainerTitle.prototype.updatedata = function() {
	
}
//##############################################################################
Components.GridContainerTitle.prototype.setTotalData = function(totalData) {

}
Components.GridContainerTitle.prototype.createform = function(e,accion) {
	//accion [create, update]
	var refX = parseInt(e.data.OBJ.parent.parent.divContainer.closest('.windowContainer').position()['left']);
	var refY = parseInt(e.data.OBJ.parent.parent.divContainer.closest('.windowContainer').position()['top']);
	
	this.ventanaeditor = Components.create('Window', {
									container:e.data.OBJ.parent.parent.divContainer.closest('.windowBody'),
									title: accion+'Registro',
									state:this.config.state,
									height: 168,
									width: 340,
									//x:24,
									//y:34,
									//x:refX-e.clientX,
									y:e.clientY-refY,
									minimizable: false,
									closeAction: 'hide',
									id: 'WindowEditorGrid'+e.data.OBJ.id,
									items: []
						});
	this.formdef = {													//definicion del formulario, basico solo una grid HTML para acomodar botones
		type: 'Form',
		id: 'FormEditorGrid'+e.data.OBJ.id,
		border: false,
		defaultType: "textfield",
		modal: false,										
		items: [
		],
	 };	
	//a partir de la definición de la tabla se crean campos para el formulario, dinamicamente
	var gridcolumns = e.data.OBJ.config.CodeHelper.config.columns;
						var str =  e.data.OBJ.config.CodeHelper.store;
						var i = 0;
						for(var col in gridcolumns){
							
							if(gridcolumns[col].isselmodel||(gridcolumns[col].editor == undefined)||(gridcolumns[col].dataIndex==undefined))  continue;	
							i = i+1;
							var field = {
										type: 'InputField',
										label: {html:(gridcolumns[col].text =="")?'Campo '+col:gridcolumns[col].text,
										cols:2},
										input: gridcolumns[col].editor,
										State:'active',
									};
							if(i==1){				//margen para el primer input
							field.css={'margin-top': 10};}
							field.input.name = gridcolumns[col].dataIndex;
							this.formdef.items.push(field);
						}
	//se agregan al formulario los campos creados dinamicamente					
	this.form = this.ventanaeditor.add(this.formdef);			//se crea y se dibuja el form.
	var buttonsContainer = {
			id:'BtContainer',
			type:'FreeDiv',	
			freeHtml:true,
			html:'<div class="form-group" id="ButtonsMid"><div class="col-sm-2"></div><div class="btnAceptar col-sm-4"></div><div class="btnCancelar col-sm-4"></div><div class="col-sm-2"></div></div>',
		};
	this.form.add(buttonsContainer);
//Los 2 botones se crean por separado pero se agregan al formulario gracias a la propiedad container de los 2 botones.
this.OkButton = Components.create('Button',{
	container:$('.btnAceptar'),
	parent:this,
	CodeHelper:accion,
	scale: 'medium',
	state:'active',
	text:'Guardar',
	icon:{
		type:'fontawesome',
		class:'fa-save',
		color:'white',
		position:'left'
	},
	tooltip:'Tamaño Personalizado',	  
	handler: function(e) {
				switch(e.data.OBJ.CodeHelper){
					case 'create':
					e.data.OBJ.parent.createNewReg(e);
					break;
					case 'update':
					e.data.OBJ.parent.updateReg(e);
					break;
				}
				}  
})
	//insertar los botones, boton de cancelar
this.CancelButton = Components.create('Button',{
	container:$('.btnCancelar'),		 		
	parent:this.ventanaeditor,
	scale: 'medium',
	text:'Cancelar',
	state:'error',
	icon:{
		type:'fontawesome',
		class:'fa-remove',
		color:'white',
		position:'left'
	},
	tooltip:'Leer toda la data',	  
	handler: function(e) {
		e.data.OBJ.parent.hide();				
				}  
})
}