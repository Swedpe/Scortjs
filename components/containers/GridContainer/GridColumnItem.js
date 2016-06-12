/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	GridColumn v 1.0 - a jQuery Ui extension
	Licences: MIT & GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com].
*/
Components.GridColumn.prototype.init = function(dataObj) {
    this.config = {
        container: $('body'),
		parent:'',					//sera un gridContiner	
		container1: '',		
        parentName: "",
        width: -1,
        text: "",
        dataIndex: "",
        hidden: false,
        sortable: true,
        filter: true,
        editable: true,
		unique:false,
		searchWindow:'',
        editor: {
            type: "TextField"
        },
        renderer: function(value, metaData, record, rowIndex, colIndex, store, gridView){
			//record es una referencia a un row almacenado en store.data
			gridView.customrenderer=false;
			//console.log(gridView);
            return value;
        }
    };
                     
    for(var i in dataObj) {
        if(this.config[i] != undefined) {
            this.config[i] = dataObj[i];
        }
    }
    
    this.id = this.config.parentName + "_" + this.config.dataIndex;
	this.customrenderer=true;
    this.parent = this.config.parent;
	this.text = this.config.text;
    this.dataIndex = this.config.dataIndex;
    this.container = this.config.container;
	this.container1 = this.config.container1;
    this.className = "gridColumnItem";
    this.listeners = this.config.listeners;
    this.renderer = this.config.renderer;
    this.editable = this.config.editable;
	this.searchWindow = '';
    
    this.editor = null;
}
//##############################################################################
Components.GridColumn.prototype.create = function() {
    this.divContainer = $('<th data-sort="nosorted" class="'+this.className+'" id="'+this.id+'" title="'+this.id+'"><div class="'+this.id+'"><span  class="titlecolumn">' + this.text + '</span></div></th>');
    if(this.config.width.toString().replace("%","")>-1 ) 
 
	this.divContainer.css("width", this.config.width);
	this.container.append(this.divContainer);	
    this.divHeader = $('.'+this.id, this.divContainer);
 
    if(this.config.sortable) {
		this.sortbutton = Components.create('Button',{		
		container: this.divHeader,
		state:this.parent.config.state,
		parent:this,
		scale: 'minier',
		icon:{
			type:'fontawesome',
			class:'fa-sort',
			color:'black'
		},
		tooltip:'Ordenar',
		handler: function(event) {
				event.data.OBJ.parent.parent.sort(event.data.OBJ.parent);		//se llama a sort de GridContainer, ya que el tiene los datos y el control.
		}                                     
     });
	 this.sortbutton.divContainer.addClass('Table-sortButton');
        //this.divHeader.append('<div class="btnSortGrid btnSortGrid-nosorted ui-icon ui-icon-triangle-2-n-s"></div>');
    }
    if(this.config.filter) {
		this.findButton = Components.create('Button',{		
		container: this.divHeader,
		scale: 'minier',
		parent:this,
		state:this.parent.config.state,
		icon:{
			type:'fontawesome',
			class:'fa-search',
			color:'black'
		},
		tooltip:'Buscar',
		handler: function(event) {			//este segmento de codigo se va repetir en los demas tipos de columnas, asi que pasarlo al parent
			//si esta en un panel o un window vamos a encontrar un windowcontainer 
			var refX=8;
			var refY=8;
			var searchContainer=$('body');
			if(event.data.OBJ.parent.parent.divContainer.closest('.windowContainer').length!=0)
			{
				refX = parseInt(event.data.OBJ.parent.parent.divContainer.closest('.windowContainer').position()['left']);
				refY = parseInt(event.data.OBJ.parent.parent.divContainer.closest('.windowContainer').position()['top']);
				searchContainer=event.data.OBJ.parent.parent.divContainer.closest('.windowBody');
			}
			//console.log(event);
			if(event.data.OBJ.parent.searchWindow==''){
			event.data.OBJ.parent.searchWindow = Components.create('Window',{
				container:searchContainer,
				title: "Search", 
				draggable:false,
				CodeHelper:event.data.OBJ.parent,
				resizable:false,
				state:event.data.OBJ.parent.parent.config.state,
				x:event.clientX-refX,
				y:event.clientY-refY,
				height:50, 
				width:200,
				items: [
				{type: 'TextField',
					width: '100%',
					placeholder:'Buscar',
					CodeHelper:event.data.OBJ.parent,			//pasando una referencia de la columna al textfield al buscador, para usarlo con el buscador
					icon:{
						type:'fontawesome',
						class:'fa-binoculars',
						color:'rgb(85, 85, 95)'
					},
					 listeners: {
						keyup: function(event) {
						var field = event.data.OBJ.CodeHelper.divContainer.attr('id').split("_")[1];
						var text = event.data.OBJ.getValue();
						event.data.OBJ.CodeHelper.parent.filterVisibles(field, text);
						console.log(field);
						} 
                        
						}
				},
				],
				listeners: {
						beforeClose: function(event) {
						var field = event.data.OBJ.CodeHelper.CodeHelper.divContainer.attr('id').split("_")[1];
						text = '';
						event.data.OBJ.CodeHelper.CodeHelper.parent.filterVisibles(field, text);
						event.data.OBJ.CodeHelper.CodeHelper.searchWindow = '';
						var tb = event.data.OBJ.CodeHelper.CodeHelper.parent.pagingToolbar;
						tb.updateToolbar(tb.currentPage);
							} 
						}
				}
				);
				event.data.OBJ.parent.searchWindow.show();
				
		}  
	}                                   
     })
	 this.findButton.divContainer.addClass('Table-findButton');
        /*this.divHeader.append('<div class="btnFilterGrid"></div>'+
                                 '<a class="btnFilterCancelGrid" style="float:right; cursor:pointer; display: none;"><img src="images/cancel.png"></a>'+
                                 '<input class="inputFilterGrid" type="text" style="display:none; float:left; font-family:Arial; font-size:8pt;">');*/
    }
	////// dibujando cabecera fantasma
	if(this.container1 != ''){
		this.divContainer2= $('<th class="HiddenTableGridHeader" id="'+this.id+'" title="'+this.id+'"></th>');
		this.container1.append(this.divContainer2);
		this.divContainer2.css({ height: '0px', padding: '0px', width:this.config.width});
    }
	return this;
}
//##############################################################################
Components.GridColumn.prototype.drawData = function(row, contentField) {
	var elemTd = null;
    //function(value, metaData, record, rowIndex, colIndex, store, gridView)
    contentField = this.renderer(contentField, {}, $(row).data('record'), $(row).index(),0,0,this);
    
    if(contentField == '') contentField = "&nbsp;";
	//this.renderResult = contentField;
    if(this.config.hidden == true)
        elemTd = $('<td class="'+this.id+'" style="display:none;">' + contentField + '</td>');
    else
        elemTd = $('<td class="'+this.id+'">' + contentField + '</td>');
    
    elemTd.data('dataIndex', this.dataIndex);
    row.append(elemTd);
}
//##############################################################################
Components.GridColumn.prototype.showEditor = function(container) {
    this.config.editor.container = container;
    return Components.create(this.config.editor.type, this.config.editor);
}
//##############################################################################
Components.GridColumn.prototype.destroyEditor = function() {
    this.editor.destroy();
}
//##############################################################################
Components.GridColumn.prototype.show = function() {
    if(this.config.hidden) {
        this.hide();
    }
    else {
        this.divContainer.show();		
        $('.' + this.id, this.config.container.parent()).show();
    }
	  return this;
}
//##############################################################################
Components.GridColumn.prototype.hide = function() {
    this.divContainer.hide();
    $('.' + this.id, this.config.container.parent()).hide();
}
//##############################################################################
Components.GridColumn.prototype.createRecord = function(cellDiv) {
    var rowData = cellDiv.closest('tr').data('record');
    var objRecord = {};
    objRecord.colIdx = cellDiv.index();
    objRecord.field = this.dataIndex;
    objRecord.originalValue = rowData[this.dataIndex];
    objRecord.value = $(cellDiv).text();
    cellDiv.closest('tr').data('record')[this.dataIndex] = objRecord.value;
    objRecord.record = { 
        data: cellDiv.closest('tr').data('record'),
        set: function(field, value) {
            cellDiv.closest('tr').data('record')[field] = value;
            this.data = cellDiv.closest('tr').data('record');
        }};
    
    return objRecord;
}
