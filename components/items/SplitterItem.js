/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	Splitter v 1.0 - a jQuery Ui extension
	Licences: MIT & GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com].
*/
Components.Splitter.prototype.init = function(dataObj) {
    this.config = {
        container: $('body'),
        id: "splitter-"+ Math.round(Math.random() * 2000),
        typeSplit: "vertical",      // 'vertical', 'horizontal'
        anchor: 3
    };
    
    for(var i in dataObj) {
        if(this.config[i] != undefined)
            this.config[i] = dataObj[i];
    }
    
    this.id = this.config.id;
    this.container = this.config.container;
    this.className = "splitterItem";
    this.type = this.config.typeSplit;
}
//##############################################################################
Components.Splitter.prototype.create = function() {
    Components.Component.prototype.create.call(this);
    this.divContainer.addClass(this.className + "-" + this.type);
    
    if(this.type == "vertical") {
        this.divContainer.prev().css("border-right","0px");
        this.divContainer.next().css("border-left","0px");
        this.setMovementX();
    }
    else {
        this.divContainer.prev().css("border-bottom","0px");
        this.divContainer.next().css("border-top","0px");
        this.setMovementY();
    }
	return this ;
}
//##############################################################################
Components.Splitter.prototype.setMovementX = function() {
    this.divContainer.draggable({
        axis: 'x',
        helper: 'clone',
        opacity: 0.35,
        containment: "parent",
        start: function(event, ui) {
            $(ui.helper).height($(this).height());
        },
        stop: function(event, ui){
            var diff = ui.position.left - ui.originalPosition.left;
            
            var newVal = $(this).prev().outerWidth() + diff;
            $(this).prev().outerWidth(newVal);
            
            newVal = $(this).next().outerWidth() - diff;
            $(this).next().outerWidth(newVal);
        }
    });
}
//##############################################################################
Components.Splitter.prototype.setMovementY = function() {
    this.divContainer.draggable({
        axis: 'y',
        helper: 'clone',
        containment: "parent",
        start: function(event, ui) {
            $(ui.helper).width($(this).width());
        },
        stop: function(event, ui){
            var diff = ui.position.top - ui.originalPosition.top;
            
            var newVal = $(this).prev().height() + diff;
            $(this).prev().css("height", newVal);
            
            newVal = $(this).next().height() - diff;
            $(this).next().css("heght", newVal);
        }
    });
}
//##############################################################################
//##############################################################################
