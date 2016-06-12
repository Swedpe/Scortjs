/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	WindowContainer v 1.0 - a jQuery Ui extension
	Licences: MIT & GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Fredy Luque Cruzado[fredymoises1@gmail.com].
*/
Components.ToolsColumn.prototype.init = function(dataObj) {
    this.config = {
		id:"ToolsColumn-"+ Math.round(Math.random() * 2000),
        container: $('body'),
		container1: '',	
        parentName: "",
        width: -1,
        text: "",
        dataIndex: "",
		parent:"",
        hidden: false,
        sortable: false,
        readonly:false,
		isselmodel:false,
		unique:false,
		items:{},
        listeners: {
            checkchange: function(event, nroRow, isChecked){}
        }
    };
                     
    for(var i in dataObj) {
        if(this.config[i] != undefined) {
            if(i == "listeners") {
                for(var j in dataObj[i]) {
                    this.config[i][j] = dataObj[i][j];
                }
            }
            else
                this.config[i] = dataObj[i];
        }
    }
	this.parent=this.config.parent;
    this.itemsObjs=[];
    this.id = this.config.parentName + "_" + this.config.dataIndex;
    this.text = this.config.text;
    this.dataIndex = this.config.dataIndex;
    this.container = this.config.container;
	this.container1 = this.config.container1;
    this.className = "ToolsColumnItem";
    this.editable = false; // puede ser true
    this.items=this.config.items;
    this.listeners = this.config.listeners;
}

Components.ToolsColumn.prototype.drawItems = function(row) {
    for(var i in this.items) {
        this.drawItem(this.items[i],row);
    }
}
//##############################################################################
Components.ToolsColumn.prototype.drawItem = function(item,row) {
    var itemData=$.extend({},item);
	var nroRow = row.index() - 1;
    itemData.id=itemData.id+nroRow;
	itemData.container = $("."+this.config.id,row);
    itemData.parent = this;
	itemData.CodeHelper = this.parent;
    var newItem = Components.create(itemData.type, itemData);
    this.itemsObjs.push(newItem);
    //this.resizeBody();
    return newItem;
}
//##############################################################################
Components.ToolsColumn.prototype.create = function() {
    this.divContainer = $('<th class="'+this.className+'" id="'+this.id+'"><div class="'+this.id+'" align="center"><span>' + this.text + '</span></div></th>');
    this.container.append(this.divContainer);
    this.divHeader = $('.'+this.id, this.divContainer);
    this.TitleDiv= $("div",this.divContainer);
	if(this.config.isselmodel)
		this.TitleDiv.append('<div class="checkboxGrid off "  style="margin-right: auto;  margin-left: auto;"></div>');
	
    if(this.config.sortable) {
        this.divHeader.append('<div class="btnSortGrid btnSortGrid-nosorted ui-icon ui-icon-triangle-2-n-s"></div>');
    }
    this.divContainer.css("width", this.config.width);
    
	
	////// dibujando cabecera fantasma
	if(this.container1 != ''){
		this.divContainer2= $('<th class="HiddenTableGridHeader" id="'+this.id+'" title="'+this.id+'"></th>');
		this.container1.append(this.divContainer2);
		this.divContainer2.css({ height: '0px', padding: '0px',width:this.config.width});
    }
	return this;
}
//##############################################################################
/**
* setControls esta funcion le dara a los elementos dentro de la comuna un evento 
**/
Components.ToolsColumn.prototype.setControls = function() {

    $('.checkboxGrid', '.' +this.id).unbind("click");
    for(itemx in this.itemsObjs)
	{
		var elemtType=this.itemsObjs[itemx].tipo;
		switch(elemtType)
		{
			case 'button':
				var newClick=function(event,row,algo) {
					
					var tool=event.data.OBJ.parent;
					var boton=event.data.button;
					event.data.grid=event.data.OBJ.parent;
					event.data.OBJ=boton;
					event.data.row=$(boton.divContainer).closest('tr');
					boton.clickFunction(event);
					
				};
				this.itemsObjs[itemx].divContainer.unbind('click');
				this.itemsObjs[itemx].divContainer.bind('click',{OBJ:this,button:this.itemsObjs[itemx]},newClick);
				break;
		}
	}
		
	/*if(this.config.readonly)
        return;
    $('.checkboxGrid', '.'+this.id).bind("click", {OBJ:this}, function(event) {
		
        var nroCol = ($(event.currentTarget).parent().is("td"))?$(this).closest('td').index():$(this).closest('th').index();
        var nroRow = $(this).closest('tr').index() - 1;
        var info = event.currentTarget.className.split(' ');

        var cellCurrent = ($(event.currentTarget).parent().is("td"))?$(this).closest('td'):$(this).parent(); 
        event.data.objRow = $(this).closest('tr');
        var isChecked = null;

        if(info[1] == "off") {
            cellCurrent.append('<div class="checkboxGrid on"></div>');
            isChecked = true;
        }
        else {
            cellCurrent.append('<div class="checkboxGrid off"></div>');
            isChecked = false;
        }

        $(this).remove();
        event.data.OBJ.listeners.checkchange(event, nroRow, isChecked);
        event.data.OBJ.setControls();
    });*/
    
}
//##############################################################################
Components.ToolsColumn.prototype.show = function() {
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
Components.ToolsColumn.prototype.hide = function() {
    this.divContainer.hide();
    $('.' + this.id, this.config.container.parent()).hide();
}
Components.ToolsColumn.prototype.showEditor = function(container) {
    
    return null;
}
//##############################################################################
Components.ToolsColumn.prototype.destroyEditor = function() {
    this.editor.destroy();
}
//##############################################################################
Components.ToolsColumn.prototype.drawData = function(row, contentField) {
    row.append('<td class="'+this.id+'" align="center"><div class="'+this.config.id+'"></div></td>');        
	this.drawItems(row);
    this.setControls();
}
//##############################################################################
//##############################################################################

