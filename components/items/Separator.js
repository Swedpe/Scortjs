/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	Separator v 1.0 - a jQuery Ui extension
	Licences: MIT & GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com].
*/
Components.Separator.prototype.init = function(dataObj) {
    this.config = {
        container: $('body'),
        id: "Separator-"+ Math.round(Math.random() * 2000),             
		css:new Array(),       
    };
    
    for(var i in dataObj) {
        if(this.config[i] != undefined) 
			this.config[i] = dataObj[i];        
    }
    
    this.id = this.config.id;
    this.container = this.config.container;
    this.className = "Separator"; 
}
//##############################################################################
Components.Separator.prototype.create = function() {
    //este componente es innesesario en todas las formas posibles de logica
	this.container.append('<br>');  
	return this ;
}
//##############################################################################
Components.Separator.prototype.show = function() {
  return this;
}
Components.Separator.prototype.destroy = function() {
  return this;
}





