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
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com].
*/
Components.DateColumn.prototype.init = function(dataObj) {
    this.config = {
        container: $('body'),
        parentName: "",
        width: -1,
        text: "",
        dataIndex: "",
        format: "yyyy-MM-dd",
        hidden: false,
        sortable: true,
        filter: true,
        editable: true,
		InputCss:new Array(),
		unique:false,
        editor: {
            type: "DateField"
        }
    };
                     
    for(var i in dataObj) {
        if(this.config[i] != undefined) {
            if(i == "editor") {
                for(var j in dataObj[i]) {
                    this.config[i][j] = dataObj[i][j];
                }
            }
            else
                this.config[i] = dataObj[i];
        }
    }
    
    this.id = this.config.parentName + "_" + this.config.dataIndex;
    this.text = this.config.text;
    this.dataIndex = this.config.dataIndex;
    this.container = this.config.container;
    this.className = "dateColumnItem";
    this.listeners = this.config.listeners;
    this.editable = this.config.editable;
}
//##############################################################################
Components.DateColumn.prototype.create = function() {
    this.divContainer = $('<th class="'+this.className+'" id="'+this.id+'"><div class="'+this.id+'" style="overflow:hidden; height:auto; width:100%;"><span>' + this.text + '</span></div></th>');
    this.container.append(this.divContainer);
    this.divHeader = $('.'+this.id, this.divContainer);
    
    if(this.config.sortable) {
        this.divHeader.append('<div class="btnSortGrid btnSortGrid-nosorted ui-icon ui-icon-triangle-2-n-s"></div>');
    }
    if(this.config.filter) {
        this.divHeader.append('<div class="btnFilterGrid"></div>'+
                              '<a class="btnFilterCancelGrid" style="float:right; cursor:pointer; display: none;"><img src="images/cancel.png"></a>'+
                              '<input class="inputFilterGrid" type="text" style="display:none; float:left; font-family:Arial; font-size:8pt;">');
    }
	this.divInput = $(".inputFilterGrid",this.divHeader);
    for(var i in this.config.InputCss) {
		this.divInput.css(i, this.config.InputCss[i]);
	}
    if(this.config.width.toString().replace("%","")>-1) {
        this.divContainer.css("width", this.config.width);
    }
	return this ;
}
//##############################################################################
Components.DateColumn.prototype.show = function() {
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
Components.DateColumn.prototype.hide = function() {
    this.divContainer.hide();
    $('.' + this.id, this.config.container.parent()).hide();
}
//##############################################################################
Components.DateColumn.prototype.drawData = function(row, contentField) {
    var elemTd = null;
    if(contentField == '') contentField = "&nbsp;";
    else {
        contentField = new Date(contentField).toString(this.config.format);
    }
    if(this.config.hidden == true)
        elemTd = $('<td class="'+this.id+'" style="display:none;">' + contentField + '</td>');
    else
        elemTd = $('<td class="'+this.id+'">' + contentField + '</td>');
    row.append(elemTd);
}
//##############################################################################
Components.DateColumn.prototype.showEditor = function(container) {
    this.config.editor.container = container;
    return Components.create(this.config.editor.type, this.config.editor);
}
//##############################################################################
Components.DateColumn.prototype.destroyEditor = function() {
    this.editor.destroy();
}
//##############################################################################
Components.DateColumn.prototype.createRecord = function(cellDiv) {
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
//##############################################################################
