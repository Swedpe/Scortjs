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
Components.OnOffColumn.prototype.init = function(dataObj) {
    this.config = {
        container: $('body'),
		container1: '',	
        parentName: "",
        width: -1,
        text: "",
        dataIndex: "",
        hidden: false,
        sortable: false,
        readonly:false,
		isselmodel:false,
		unique:false,
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
    
    this.id = this.config.parentName + "_" + this.config.dataIndex;
    this.text = this.config.text;
    this.dataIndex = this.config.dataIndex;
    this.container = this.config.container;
	this.container1 = this.config.container1;
    this.className = "onoffColumnItem";
    this.editable = false; // puede ser true
    
    this.listeners = this.config.listeners;
}
//##############################################################################
Components.OnOffColumn.prototype.create = function() {
    this.divContainer = $('<th class="'+this.className+'" id="'+this.id+'"><div class="'+this.id+'" align="center"><span>' + this.text + '</span></div></th>');
    this.container.append(this.divContainer);
    this.divHeader = $('.'+this.id, this.divContainer);
    this.TitleDiv= $("div",this.divContainer);
	if(this.config.isselmodel)
		this.TitleDiv.append('<div class="checkboxGrid off "  style="margin-right: auto;  margin-left: auto;"></div>');
	
    if(this.config.sortable) {
        this.divHeader.append('<div class="btnSortGrid btnSortGrid-nosorted ui-icon ui-icon-triangle-2-n-s"></div>');
    }
    if(this.config.width.toString().replace("%","")>-1) {
        this.divContainer.css("width", this.config.width);
    }
	
	////// dibujando cabecera fantasma
	if(this.container1 != ''){
		this.divContainer2= $('<th class="HiddenTableGridHeader" id="'+this.id+'" title="'+this.id+'"></th>');
		this.container1.append(this.divContainer2);
		this.divContainer2.css({ height: '0px', padding: '0px',width:this.config.width});
    }
	return this;
}
//##############################################################################
Components.OnOffColumn.prototype.setControls = function() {
    $('.checkboxGrid', '.' +this.id).unbind("click");
    if(this.config.readonly)
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
    });
    
}
//##############################################################################
Components.OnOffColumn.prototype.show = function() {
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
Components.OnOffColumn.prototype.hide = function() {
    this.divContainer.hide();
    $('.' + this.id, this.config.container.parent()).hide();
}
Components.OnOffColumn.prototype.showEditor = function(container) {
    
    return null;
}
//##############################################################################
Components.OnOffColumn.prototype.destroyEditor = function() {
    this.editor.destroy();
}
//##############################################################################
Components.OnOffColumn.prototype.drawData = function(row, contentField) {
    if(contentField == true){
        if(this.config.readonly) 
            row.append('<td class="'+this.id+'" align="center"><div class="checkboxGrid readonlyon"></div></td>');
        else           
            row.append('<td class="'+this.id+'" align="center"><div class="checkboxGrid on"></div></td>');
    }
    else{
        if(this.config.readonly)
            row.append('<td class="'+this.id+'" align="center"><div class="checkboxGrid readonlyoff"></div></td>');
        else    
            row.append('<td class="'+this.id+'" align="center"><div class="checkboxGrid off"></div></td>');
    }
    this.setControls();
}
//##############################################################################
//##############################################################################

