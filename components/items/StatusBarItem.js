/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	StatusBar v 1.0 - a jQuery Ui extension
	Licences: MIT & GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com].
*/
/*
 * dataObj: contiene los items y algunas configuraciones para la creacion del 
 * Status Bar, donde se mostrara el mensaje que se desea
 */
//##############################################################################
Components.StatusBar.prototype.init = function(dataObj) {
    this.config = {
        container: $('body'),
        id: "statusbar-"+ Math.round(Math.random() * 2000),
        text: "",
        height: 15
    };
    
    for(var i in dataObj) {
        if(this.config[i] != undefined)
            this.config[i] = dataObj[i];
    }
    
    this.id = this.config.id;
    this.container = this.config.container;
    this.className = "statusBar";
}
//##############################################################################
Components.StatusBar.prototype.create = function() {
    Components.Component.prototype.create.call(this);
    this.divContainer.css("height", this.config.height);
    this.setText(this.config.text);
	return this ;
}
//##############################################################################
Components.StatusBar.prototype.setText = function(text) {
    this.config.text = text;
    this.divContainer.html(this.config.text);
}















//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
function pruebaStatusBar() {
    var ee = Components.create('Window',{
        title: "Window", 
        height:400, 
        width:600,
        items: [
            {
                region: 'bottom',
                type: 'StatusBar',
                text: "Cargando"
            }
        ]
    });
    
    ee.show();
    return ee;
}