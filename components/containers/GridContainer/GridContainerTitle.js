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
						if($this.parent.ventanaeditor == undefined){
								$this.parent.createform(e,'create');
						}else{
							$this.parent.OkButton.CodeHelper = 'create';
							$this.parent.ventanaeditor.setTitle('Crear Nuevo Registro')
							}
						Components.getComponentById($this.parent.formdef.id).Clear();						
						$this.parent.ventanaeditor.show();
			
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
						seleccion = seleccion[0].data('record');
						if(seleccion.length ==0 || seleccion.length >1){
							alert("Debe seleccionar 1 un registro")
							return;
						}else{
							if($this.parent.ventanaeditor == undefined){
								$this.parent.createform(e,'update');	
							}else {
								$this.parent.OkButton.CodeHelper = 'update';
								$this.parent.ventanaeditor.setTitle('Actualizar Registro')
								}
								e.data.OBJ.parent.itemSeleccionado = seleccion.position;				//almacenar la poscicion de el ítem seleccionado
								Components.getComponentById($this.parent.formdef.id).setValues(seleccion);	//colocar los valores de la grilla en el formulario							
								$this.parent.ventanaeditor.show();
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
					selection = selection.data('record');
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
					var seleccion = grd.getSelection();
						selection = seleccion[0].data('record');
					if(selection.length == 0){
						alert("Debe seleccionar algun registro");
						return;
					}else if(selection.length == 1)										
						grd.store.deleterecord(seleccion[0],selection.position);
					 else if(selection.length > 1)	
						grd.store.deletemultiplerecord(seleccion,false);
					
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
