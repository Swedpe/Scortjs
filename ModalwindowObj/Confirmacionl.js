var Confirmacion = function(WindowParams,data,cancelarFunction,aceptarFunction){
 	this.WindowParams = WindowParams;
	this.data = data;
	this.cancelFunction = cancelarFunction;
	this.aceptarFunction = aceptarFunction;
	this.draw();
}
//------------------------------------------------------------------------------
BuscarPersonalWindow.prototype.draw = function() {
var $BPdata = this;  
if(Components.getComponentById('modalConfirmacion')==undefined) {
        Components.create('Window', {
            autoShow: true,
            height: 600,
            width: 600,
            resizable: false,
            minimizable: false,
            closeAction:'hide',
            constrain: true,
            modal: true,
            title: 'Busqueda de Personal',
            id:'modalConfirmacion',			
			html:'<div Id="DivBusquedaPersonal" style="background-color: white;padding: 1px;" class=""></div>',
			items: [{
						type: 'Button',
						x: 0,
						y: 150,
						scale: 'mediun',
                        icon: 'images/ver.png',
                        tooltip:'Buscar',
						width: 128,
						id:'aceptarModalWindow',						
						text: 'Aceptar',
						listeners: {
							click: function(){
								
							}	
						}
					},
					{
						type: 'Button',
						x: 100,
						y: 150,
						scale: 'mediun',
                        icon: 'images/ver.png',
                        tooltip:'Buscar',
						width: 128,
						id:'cancelModalWindow',						
						text: 'Cancelar',
						listeners: {
							click: function(){
								
							}	
						}
					}					
				]
        });
    }
    else {
        //$('#DivLimpiezaTotalproyecto').html('');
        Components.getComponentById('modalConfirmacion').show();
    }

    	
}