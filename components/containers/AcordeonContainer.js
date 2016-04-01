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
Components.AccordeonContainer.prototype.init = function(dataObj) {
    this.config = {
        container: $('body'),
        id: "accordeon-"+ Math.round(Math.random() * 2000),
        tabConfig: [],
        clsStyle: '',        
        width: -1,
		css:new Array(),
        height: -1,
        state:'default',
		items: [],
		collapsible:false,
		active:false,
		heightStyle:'auto',
		icons:false,
        listeners: {
            activate: function(event, ui){}
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
    
    this.id = this.config.id;
    this.container = this.config.container;
    this.className = "";
    this.items = this.config.items;
    this.itemsObjs = [];
   
    this.listeners = this.config.listeners;
    
    this.widthHeaderTabs = 0;
    this.widthContainerTabs = 0;
    this.widthDivView = 0;
    this.divHeaderTabs = null;
    this.divBodyTabs = null;
    this.divContainerTabs = null;
}
//##############################################################################
Components.AccordeonContainer.prototype.create = function() {
    Components.Component.prototype.create.call(this);
    $(this.divContainer).css('height','inherit')
    //this.constructHeader();
    this.divContainer.append('<div class="AccordeonContainer '+this.config.state+'" style="height: inherit"></div>');
    this.divBodyAccordeon = $('.AccordeonContainer', this.divContainer);
    this.drawItems();
	this.setControls();
	return this ;
}
//##############################################################################
Components.AccordeonContainer.prototype.setConfig = function() {
    var cssGeneral = {};
    if(this.config.width != -1) {
        cssGeneral.width = this.config.width;        
    }
    if(this.config.height != -1) {
        this.divBodyTabs.css("height", this.config.height);
    }
    this.divContainer.css(cssGeneral);
}
//##############################################################################
Components.AccordeonContainer.prototype.drawItems = function() {
    
    var $this =this;
    for(var i in this.items) {
        var item = this.items[i];
        item.container = this.divBodyAccordeon;      
        var element = Components.create(item.type, item);
        this.itemsObjs.push(element);
    }
     /*var icons = {
      header: "ui-icon-circle-arrow-e",
      activeHeader: "ui-icon-circle-arrow-s"
    };*/
	
    this.divBodyAccordeon.accordion({
      collapsible: $this.config.collapsible,
	  active: $this.config.active,

	  heightStyle: $this.config.heightStyle
    });
	
	if(typeof(this.config.icons)=="object")
		this.setIcons(this.config.icons) ;	
	//los container hijos que no tienen altura definida la tomaran de su contenedor
	for (ItemX in this.itemsObjs){
		if((this.itemsObjs[ItemX].className=='accordeonitem')&&(this.itemsObjs[ItemX].config.height==-1)){
			this.itemsObjs[ItemX].divContainer.css("height", 'inherit');
		}
		else if(this.itemsObjs[ItemX].className=='accordeonitem'){
			this.itemsObjs[ItemX].divContainer.css("height", this.itemsObjs[ItemX].config.height);
		}
	}

}
//####################################################################################################################################
Components.AccordeonContainer.prototype.drawItem = function(item) {
	item.container = this.divBodyAccordeon;	
	var element = Components.create(item.type, item);
	this.itemsObjs.push(element);
}
//###################################################################################################################################
Components.AccordeonContainer.prototype.setControls = function() {
    var $this = this;	
	this.divBodyAccordeon.on( "accordionactivate",{OBJ:this},  function(event, ui) {
        event.data.OBJ.listeners.activate(event, ui);
	} );	
}
//##############################################################################
Components.AccordeonContainer.prototype.getActiveTab = function() {
    return this.divBodyAccordeon.accordion( "option", "active" );
}
//##############################################################################
Components.AccordeonContainer.prototype.setActiveTab = function(indexTab) {
    this.divBodyAccordeon.accordion( "option", "active", indexTab );
}
//##############################################################################
Components.AccordeonContainer.prototype.setWidth = function(width) {
    this.divContainer.css("width", width);
   
}
//##############################################################################
Components.AccordeonContainer.prototype.show = function() {  
    Components.Component.prototype.show.call(this);
	  return this;
}
//##############################################################################
Components.AccordeonContainer.prototype.resizeBody = function() {
   
}
//##############################################################################
Components.AccordeonContainer.prototype.setIcons = function(customicons) {
   this.divBodyAccordeon.accordion( "option", "icons", customicons); 
   this.divBodyAccordeon.accordion( "refresh" );
}



//##############################################################################
//##############################################################################
//##############################################################################
function convertHexToRGBA(hex,opacity){
    hex = hex.replace('#','');
    var r = parseInt(hex.substring(0,2), 16);
    var g = parseInt(hex.substring(2,4), 16);
    var b = parseInt(hex.substring(4,6), 16);

    var result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
    return result;
}
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
function pruebaaccordeon() {
    var ee = Components.create('Window',{
        title: "TabsPrueba1", 
        height:400, 
        width:1000, 
        items: [
            {
              type: "AccordeonContainer",
              region: 'center',
			  id:'miacordeon',			 
				icons: {
				'header': "ui-icon-circle-minus",
				'activeHeader': "ui-icon-circle-plus"
				},
			  items: [
                  {
                       type: 'AccordeonItem',                                                    
                       title: 'Retirar Personal',
					   height:150,
					   items: [
							{
                                            type: 'ToolBar',
                                            region: 'top',
											x:200,		
											y: 10,	
                                            items: [
                                                {
                                                    type: 'Button',
                                                    icon: 'images/save-n.png',
                                                    tooltip: 'PC_Guardar_00153',
                                                   
                                                }
                                            ]
						},					   
							{
								type: 'DateField',	
								x:10,		
								y: 10,								
								label: '<b> Fecha Salida :</b>',
								id: 'fec_salida_personal',
								width: 150,
								format: 'dd/MM/yyyy'
								
							},
						{
								type: 'TextField',
								x: 340,
								y: 60,	
								label: '<b>&nbsp;Segundo Nombre :</b>',
								id: 'sec_nombre_personal',
								width: 128,
								alignLabel: "left",
								labelWidth: 186,
								readOnly: false,
								styleLabel:'customlabel tablegridFichaempresa',
								InputCss:
									{ 'border': "1px solid #125EB1",
									 'background-color':  "#FFFFFF",
									 'color': "#125EB1",
									 'height':"16px",	
									 'margin-left':'4px',
									 'font-size': '11px'
									}
						}
						]
                  },
				  {
                       type: 'AccordeonItem',                                                    
                       title: 'Cancelar Retiro',
					   height:150,
					   items: [
							{
								type: 'DateField',	
								x:10,		
								y: 10,								
								label: '<b> Fechaaaaa  :</b>',
								id: 'fec_salida_personal',
								width: 150,
								format: 'dd/MM/yyyy'
								
							},
							{
								type: 'TextField',
								x: 340,
								y: 60,	
								label: '<b>&nbsp;Segundo Nombre :</b>',
								id: 'sec_nombre_personal',
								width: 128,
								alignLabel: "left",
								labelWidth: 186,
								readOnly: false,
								styleLabel:'customlabel tablegridFichaempresa',
								InputCss:
									{ 'border': "1px solid #125EB1",
									 'background-color':  "#FFFFFF",
									 'color': "#125EB1",
									 'height':"16px",	
									 'margin-left':'4px',
									 'font-size': '11px'
									}
							}
						]
                                                    
                  }
				  
			  ]
			  
            }
        ]
    });
    ee.show();
    return ee;
}
//------------------------------------------------------------------------------
function pruebaTabs2() {
    var ee = Components.create('Window',{
        title: "TabsPrueba2", 
        height:400, 
        width:1000, 
        items: [
            {
              type: "TabPanel",
              region: 'center',
              activeTab: 2,
              items: [
                  {
                      type: "Tab",
                      title: "Tab0122222222222"
                  },
                  {
                      type: "Tab",
                      title: "Tab02",
                      listeners: {
                          activate: function() {
                              console.log("sasasa");
                          }
                      }
                  },
                  {
                      type: "Tab",
                      title: "Tab03",
                      items: [
                          {
                                type: "TabPanel",
                                items: [
                                    {
                                        type: "Tab",
                                        title: "Tab010"
                                    },
                                    {
                                        type: "Tab",
                                        title: "Tab020",
                                        listeners: {
                                            activate: function() {
                                                console.log("nvel 0002");
                                            }
                                        }
                                    },
                                    {
                                        type: "Tab",
                                        title: "Tab030",
                                        html: "HOLASSSSSS"
                                    }
                                ]
                              }
                      ]
                  },
                  {
                      type: "Tab",
                      title: "Tab04"
                  },
                  {
                      type: "Tab",
                      title: "Tab0122222222222"
                  }
              ]
            }
        ]
    });
    ee.show();
    return ee;
}