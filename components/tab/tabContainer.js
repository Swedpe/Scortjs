//##############################################################################
/*
 * contenedor: contenedor donde se insertara el tabContainer
 * id: id para el contenedor, que definira la clase en caso de configuracion de los tabs
 * moveByTabs: boolean que indica si el desplazamiento sera por tamaño de los tabs
 */
var TabContainer = function(contenedor, id, moveByTabs) {
    this.contenedor = contenedor;
    
    this.id = id != "" ? id : "tabContainer";
    this.tabs = new Array();
    this.menuHorizontal = null;
    this.contenido = null;
    this.lastTab = 0;
    this.moveByTabs = moveByTabs ? moveByTabs : false;
    this.currentPositionMenu = 0;
    this.tabIni = 0;
    this.widthMenuHorizontal = 0;
    this.sizeMenuDiv = contenedor.css("width").split("px")[0] - 48;//1344;
    
    this.addToContainer();
}
//##############################################################################
TabContainer.prototype.addToContainer = function() {
    var btnAnt = $('<div class="botones" align="center"><a id="btnAnt"><img src="images/ant_icon.gif"/></a></div>').hide();
    var btnNext = $('<div class="botones" align="center"><a id="btnNext"><img src="images/next_icon.gif"/></a></div>').hide();
    var divMenuHorizontal = $('<div style="overflow:hidden; width:'+this.sizeMenuDiv+'px; float:left;">' +
        '<div class="menuh" style="width:'+this.widthMenuHorizontal+'px;"></div></div>');
    
    this.contenedor.html('');
    this.contenedor.append('<div id="menuHeader" class="'+this.id+'" style="width:100%;"></div>');
    $("#menuHeader", this.contenedor).append(btnAnt).append(divMenuHorizontal).append(btnNext);
    
    this.menuContainer = $("#menuHeader", this.contenedor).hide();
    this.menuHorizontal = $('.menuh', this.contenedor);
    this.contenido = $('<div id="contenidoTabs" style="width:100%; overflow:auto;"></div>').hide();
    this.contenedor.append(this.contenido);
    
    this.setControles();
}
//##############################################################################
TabContainer.prototype.show = function(tabSelected) {
    this.contenedor.show();
    this.menuContainer.show();
    this.contenido.show();
    for(var i in this.tabs) {
        if(this.tabs[i].hidden) {
            this.tabs[i].hide();
        }
        else {
            this.tabs[i].show();
        }
    }
    if(tabSelected != undefined)
        this.tabs[tabSelected].setSelected();
}
//##############################################################################
TabContainer.prototype.addTabView = function(tab, contenidotab) {
    this.menuHorizontal.append(tab);
    this.contenido.append(contenidotab);
}
//##############################################################################
/*
 * data es un array que contiene los datos de cada tab, su subestructura es:
 * text : nombre que tendra el tab
 * func : string de la funcion que se ejecutara cuando se presione el tab
 * id : (opcional) para distinguir al tab entre los demas, en caso de no ser asignado
 *      se le colocara un id con la posicion de tab que ocupa en el contenedor de tabs
 * width: (opcional) indica el ancho que tendra el tab
 * hidden: (opcional) indica si el tab estara oculto o no (true=oculto)
 */
TabContainer.prototype.setHeadersData = function(data) {
    for(var i in data) {
        this.addHeader(data[i]);
    }
    if(this.widthMenuHorizontal > this.sizeMenuDiv) {
        $(".botones", this.menuContainer).show();
    }
}
//##############################################################################
TabContainer.prototype.addHeader = function(data) {
    var newTab = new TabItemView(data, this, ++this.lastTab);
    this.tabs.push(newTab);
    this.widthMenuHorizontal += newTab.widthTotal();
    this.menuHorizontal.css("width", this.widthMenuHorizontal + "px");
}
//##############################################################################
TabContainer.prototype.clearSelection = function() {
    $('.tabHeader', this.menuHorizontal).removeClass('m-selected');
    $('.contenidoTabHeader_'+this.id, this.contenido).hide();
}
//##############################################################################
TabContainer.prototype.setControles = function() {
    this.btnAnt = $("#btnAnt", this.contenedor);
    this.btnNext = $("#btnNext", this.contenedor);
    
    this.btnAnt.bind("click", {OBJ:this}, function(event) {
        event.data.OBJ.moveToRight();
    });
    
    this.btnNext.bind("click", {OBJ:this}, function(event) {
        event.data.OBJ.moveToLeft();
    });
}
//##############################################################################
TabContainer.prototype.moveToLeft = function() {
    if(this.widthMenuHorizontal < this.sizeMenuDiv || this.currentPositionMenu + this.sizeMenuDiv >= this.widthMenuHorizontal)
        return;

    var desplazamiento = 20;
    if(this.moveByTabs) {
        desplazamiento = this.tabs[this.tabIni].widthTotal();
    }
    this.tabIni++;
    this.currentPositionMenu += desplazamiento;        
    this.menuHorizontal.css('margin-left', '-='+desplazamiento);
}
//##############################################################################
TabContainer.prototype.moveToRight = function() {
    if(this.currentPositionMenu == 0)
        return;

    var desplazamiento = 20;

    if(this.moveByTabs) {
        desplazamiento = this.tabs[this.tabIni - 1].widthTotal();
    }
    this.tabIni--;
    this.currentPositionMenu -= desplazamiento;        
    this.menuHorizontal.css('margin-left', '+='+desplazamiento);
}
//##############################################################################
/*
 * Recibe datos para configurar la vista, como: data {tab, text}
 *  - background.tab: color de los tabs
 *  - background.selected: color de seleccionado
 *  - background.hover: color de hover
 */
TabContainer.prototype.config = function(data) {
    $("head").append("<style id='css_"+this.id+"'></style>");
    var clase = "."+this.id;
    var text = "";  
    
    if(data.background) {
        var background = data.background;
        if(background.normal) {
            text += clase + " a {background-color: "+background.normal+"} ";
        }

        if(background.hover) {
            text += clase + " a:hover {background-color: "+background.hover+"} ";
        }

        if(background.selected) {
            text += clase + " a.m-selected {background-color: "+background.selected+"} ";
        }
    }
    if(data.texto) {
        var texto = data.texto;
        if(texto.normal) {
            text += clase + " a {"+texto.normal+"} ";
        }

        if(texto.hover) {
            text += clase + " a:hover {"+texto.hover+"} ";
        }

        if(texto.selected) {
            text += clase + " a.m-selected {"+texto.selected+"} ";
        }
    }
    text += clase + " .botones a {background-color:#FFF;}"
    $("#css_"+this.id).text(text);
}














function pruebaTabs(totalMenusParent, totalMenusHijos, anchoDiferente, byTabs) {
    var  contenedor = $('#contenido');
    contenedor.html('');
    var aa = new TabContainer(contenedor, "tabs001", byTabs);
    var background = {"normal":"#F00", "hover":"#00F", "selected":"#0F0"};
    var text = {"normal":"color:#FFF;", "hover":"color:#333;", "selected":"color:#123; font-weight:bold;"};
    aa.config({"background":background, "texto":text});
    
    var data = new Array();
    for(var i=1; i<=totalMenusParent; i++) {
        if(anchoDiferente)
            data.push({"text":"Menu"+i, "func":"console.log('menu clicked');", "width":parseInt(Math.random()*200+20)});
        else
            data.push({"text":"Menu"+i, "func":"console.log('menu clicked');"});
    }
    aa.setHeadersData(data);
    aa.show(0);
    
    var bb = new TabContainer(aa.tabs[0].contenido, "tabs002");
    var data2 = new Array();
    for(var i=1; i<=totalMenusHijos; i++) {
        if(anchoDiferente)
            data2.push({"text":"Menu"+i, "func":"console.log('menu clicked');", "width":parseInt(Math.random()*200+20)});
        else
            data2.push({"text":"Menu"+i, "func":"console.log('menu clicked');"});
    }
    bb.setHeadersData(data2);
    bb.show(0);
    background = {"normal":"#F0F"};
    bb.config({"background":background});
}