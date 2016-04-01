/*
 * data = datos del header 
 * tabContainer = contenedor de tabs donde estara incluido
 */
var TabItemView = function(data, tabContainer, pos) {
    this.contenedor = tabContainer;
    
    this.id = data.id ? data.id : "tabContenido"+pos;
    this.text = data.text;
    this.func = data.func;
    this.width = data.width ? data.width : 120;
    this.hidden = data.hidden ? data.hidden : false;
    this.contenido = null;
    
    this.addToContainer();
}
//##############################################################################
TabItemView.prototype.addToContainer = function() {
    this.tab = $('<ul><li style="width:'+this.width+'px"><a class="tabHeader" id="header_'+this.id+'">'+this.text+'</a></li></ul>');
    this.contenidoTab = $('<div style="width:100%" class="contenidoTabHeader_'+this.contenedor.id+'" id="'+this.id+'"></div>').hide();
    this.contenedor.addTabView(this.tab, this.contenidoTab);
    this.contenido = $('#'+this.id, this.contenedor.contenido);
    this.setControles();
}
//##############################################################################
TabItemView.prototype.show = function() {
    this.tab.show();
}
//##############################################################################
TabItemView.prototype.hide = function() {
    this.tab.hide();
}
//##############################################################################
TabItemView.prototype.setControles = function() {
    $('#header_'+this.id, this.contenedor.menuHorizontal).bind("click", {OBJ:this}, function(event) {
        event.data.OBJ.setSelected();
    });
}
//##############################################################################
TabItemView.prototype.setSelected = function() {
    this.contenedor.clearSelection();
    $('#header_'+this.id, this.contenedor.menuHorizontal).addClass("m-selected");
    this.contenido.show();

    if(typeof(this.func) == "string" && this.func != "") 
        eval(this.func);
    else if(typeof(this.func) == "function")
        this.func();
}
//##############################################################################
TabItemView.prototype.widthTotal = function() {
    return this.width + 1;
}