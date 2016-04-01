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
Components.ActionColumn.prototype.init = function(dataObj) {
    this.config = {
        container: $('body'),
		container1: '',
        parentName: "",
        width: -1,
        text: "",
        dataIndex: "",
        hidden: false,
        items: []
    };
                     
    for(var i in dataObj) {
        if(this.config[i] != undefined) {
            this.config[i] = dataObj[i];
        }
    }
    
    this.id = this.config.parentName + "_actionColumn" + Math.round(Math.random() * 2000);
    this.dataIndex = this.config.dataIndex;
    this.text = this.config.text;
    this.container = this.config.container;
	this.container1 = this.config.container1;
    this.className = "actionColumnItem";
    this.items = this.config.items;
    this.editable = false;
}
//##############################################################################
Components.ActionColumn.prototype.create = function() {
    this.divContainer = $('<th class="'+this.className+'" id="'+this.id+'"><div class="'+this.id+'"><span>' + this.text + '</span></div></th>');
    this.container.append(this.divContainer);
    this.divHeader = $('.'+this.id, this.divContainer);
    
    if(this.config.width.toString().replace("%","")>-1) {
        this.divContainer.css("width", this.config.width);
    }
	////// dibujando cabecera fantasma
	if(this.container1 != ''){
		this.divContainer2= $('<th class="HiddenTableGridHeader" id="'+this.id+'" title="'+this.id+'"></th>');
		this.container1.append(this.divContainer2);
		this.divContainer2.css({ height: '0px', padding: '0px'});
	}
	return this ;
}
//##############################################################################
Components.ActionColumn.prototype.show = function() {
    if(this.config.hidden) {
        this.hide();
    }
    else {
        this.divContainer.show();
        $('.' + this.id, this.config.container.parent()).show();
    }
}
//##############################################################################
Components.ActionColumn.prototype.hide = function() {
    this.divContainer.hide();
    $('.' + this.id, this.config.container.parent()).hide();
}
//##############################################################################
Components.ActionColumn.prototype.drawData = function(row) {
    var tdCell = $('<td class="'+this.id+'" align="center"></td>');
    tdCell.data('dataIndex', this.dataIndex);
    row.append(tdCell);
    
    var $this = this;
    
    for(var i in this.items) {
        var item = this.items[i];
        item.container = tdCell;
        item.listeners = {
            click: function(event) {
                var nroCol = $(event.currentTarget).closest('td').index();
                var nroRow = $(event.currentTarget).closest('tr').index() - 1;
                item.handler(Components.getComponentById($this.config.parentName), nroRow, nroCol);
            }
        };
        Components.create('Button', item);
    }
}
//##############################################################################
//##############################################################################

