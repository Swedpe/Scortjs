var netChartProyectoWindow = null;
var netinformacionTareaWindow =null;
var netconstrainedWin=null;
var NetOrden = 0;

// Variables para el grafico de PERT
var netChartProyectoWindow0 = null;
var Net0TareasSvg = new Array();

var NetScreenGrid = function(svg){
    this.svg = svg;
    this.mediax = "";
    this.mediay = "";
}

var WindowNetChart = function(idwindow, grupo) {
    this.tipo = "";
    this.title = "";
    this.id = idwindow;
    this.grupo = grupo;
    this.window = null;
    this.svg = null;
    this.screenGrid = null;
    this.scrollingWindow = null;
    this.svgContend = null;
    this.container = null;
    this.NetSVGTareaSeleccionada = 0;
    this.miniView = null;
}
//------------------------------------------------------------------------------
WindowNetChart.prototype.crearWindow = function() {
    var idwindow = this.id;
    var $this = this;
    
    this.window = Components.create('Window', {
        id : idwindow,
        height: 700,
        width: 1024,
        closeAction: 'hide',
        maximizable: true,
        title: $this.title,   
        html: '<div id ="ScrollingWindowSVG_NETWORK" style="width:100%; height:100%;overflow:scroll;"><div id ="NetSVGContend" ></div></div>',
        items: [
            {
            type: 'ToolBar',
            id: 'ChartNetWorkWindowsToolBar_' + idwindow,
            region: 'top',
            items: [
                    {
                            type: 'Button',
                            height: 32,
                            width: 32,
                            scale:'large',
                            id : 'NetConBaseBtn_' + idwindow,
                            icon:'images/icon-network-OK.png',
                            enableToggle: false,
                            tooltip:'OK',
                            listeners: {       
                                    click: function() {
                                        alert("Mensaje","La conexion ya esta establecida a la Base de Datos");
                                        return;
                                    }          
                            }            
                    },
                    {
                            type: 'Button',
                            height: 32,
                            width: 32,
                            scale:'large',
                            id : 'NetprintBtn_' + idwindow,
                            icon:'images/print24.png',
                            tooltip:'OK',
                            listeners: {
                                click: function() {
                                        //ImprimirSVG();
                                }  
                            }
                    },
                    {
                            type: 'Button', 
                            height: 32, 
                            width: 32, 
                            scale:'large',
                            id : 'NetRutCriBtn_' + idwindow, 
                            enableToggle: true,	
                            icon:'images/critical.png', 
                            tooltip:'OK', 
                            listeners: {
                                click: function() {
                                    PaintCriticalPath($this.tipo);
                                }
                            }
                    },
                    {
                            type: 'Button', 
                            height: 32, 
                            width: 32, 
                            scale:'large',
                            id : 'NetRutCriListBtn_' + idwindow, 
                            hidden: true,
                            icon:'images/paths24.png', 
                            tooltip:'Lista de rutas', 
                            listeners: {
                                click: function(event) {
                                    ShowListaRutasCriticas(event, $this.tipo);
                                }
                            }
                    },
                    {
                            type: 'Button', 
                            height: 32, 
                            width: 32, 
                            scale:'large',
                            id : 'NetEditarBtn_' + idwindow, 
                            enableToggle: false,            
                            icon:'images/editar24.png', 
                            tooltip:'OK', 
                            listeners: {
                                click: function() {
                                    if($this.NetSVGTareaSeleccionada != -1){
                                            infoTareaForm = "DiagNET";
                                            ListTareaSeleccionada = $this.NetSVGTareaSeleccionada;
                                            RecargaDatosTab(Components.getComponentById('InformacionTareaWindowTabs').getActiveTab().id);
                                            Components.getComponentById('InformacionTareaWindow').show();
                                    }
                                    else{
                                        alert("Mensaje","Seleccione una tarea");
                                    }
                                }
                            }
                    },                    
                    {
                        type: 'TextField',
                        id: 'NetWorkChartTaskLabel_' + idwindow,
                        label: 'Actividad',
                        scale:'medium',
                        height: 32,
                        width: 250
                    },
                    {
                        type: 'Slider',
                        id:'zoomslider_' + idwindow,
                        width: 150,
                        value: 50,
                        label: "Aumento",
                        labelWidth: 50,
                        increment: 25,
                        minValue: 0,
                        maxValue: 100,
                        tooltip:'Aumento',
                        listeners: {
                            change: function( event, ui ) {
                                    var newValue= Components.getComponentById('zoomslider_' + idwindow).getValue();
                                    var g = $("#DiagRedSVG", $this.container)[0];
                                    var alto = $(g).height() ;
                                    var ancho= $(g).width() ;                                
                                       if(newValue!=50){
                                           $('.codigomini', $this.container).hide();
                                           $('.textocaja', $this.container).show();
                                            if(newValue>50){
                                                var i = (newValue==100)? 0.5:0.75;
                                                 g.setAttributeNS (null, "viewBox", "0 0 " + ($this.screenGrid.mediax*i) +" " + ($this.screenGrid.mediay*i) );
                                            }  
                                            if(newValue<50){
                                                var i =(newValue==0)?0.5:0.75;
                                                g.setAttributeNS (null, "viewBox", "0 0 " + ($this.screenGrid.mediax/i) +" " + ($this.screenGrid.mediay/i) );
                                            }
                                            
                                            if(newValue==0){
                                                $('.textocaja', $this.container).hide();
                                                $('.codigomini', $this.container).show();
                                            }
                                       }                                                                           
                                       else
                                           g.setAttributeNS (null, "viewBox", "0 0 " + ($this.screenGrid.mediax) +" " + ($this.screenGrid.mediay) );
                                }
                        }
                    },

                    {
                        type: 'Button', 
                        height: 32, 
                        width: 32, 
                        scale:'large',
                        id : 'NetRefresh_' + idwindow, 
                        enableToggle: false,
                        icon:'images/refresh.gif', 
                        tooltip:'Refresh', 
                        listeners: {
                            click: function() {
                                if($this.tipo == "Net")
                                    muestraNetChart();
                                else if($this.tipo == "Net0")
                                    muestraDiagramaPert();
                            }
                        }
                    },
                    {
                        type: 'Button', 
                        height: 32, 
                        width: 32, 
                        scale:'large',
                        id : 'NetParentSelect_' + idwindow, 
                        enableToggle: false,
                        icon:'images/selecionpadre.png', 
                        tooltip:'Padre', 
                        listeners: {
                            click: function() {
                                    SeleccionPadre($this.tipo);
                            }
                        }
                    },                                                
                    {
                        type: 'Button', 
                        height: 32, 
                        width: 32, 
                        scale:'large',
                        id : 'NetChildsSelect_' + idwindow, 
                        enableToggle: false,
                        icon:'images/selecionhijo.png', 
                        tooltip:'Hijos', 
                        listeners: {
                            click: function() {
                                     SeleccionHijos($this.tipo);
                            }
                        }
                    },
                    {
                        type: 'Button', 
                        height: 32, 
                        width: 32, 
                        scale:'large',
                        id : 'NetPredecesorasSelect_' + idwindow, 
                        enableToggle: false,
                        icon:'images/selecionpredecesor.png', 
                        tooltip:'Predecesores', 
                        listeners: {
                            click: function() {
                                     SeleccionPredecesoras($this.tipo);
                            }
                        }
                    },
                    {
                        type: 'Button', 
                        height: 32, 
                        width: 32, 
                        scale:'large',
                        id : 'NetSucesorSelect_' + idwindow, 
                        enableToggle: false,
                        icon:'images/selecionsucesora.png', 
                        tooltip:'Sucesoras', 
                        listeners: {
                            click: function() {
                                SeleccionSucesoras($this.tipo);
                            }
                        }
                    },                                                
                    {
                        type: 'Button',
                        height: 24,
                        width: 24,
                        scale:'large',
                        id : 'MiniViewProyecto_' + idwindow,
                        icon:'images/buscadoresPlus.png',
                        tooltip:'Mostrar Miniatura',
                        enableToggle : true,
                        listeners: {
                            click: function (event) {
                                if(event.data.OBJ.pressed){
                                    $this.miniView = new MiniViewWindow($('#NetSVGContend', $this.container), $('#ScrollingWindowSVG_NETWORK', $this.container), $this.window, "", $this.grupo, 0);
                                    $this.miniView.btnMiniView = Components.getComponentById('MiniViewProyecto_' + idwindow);
                                    $this.miniView.crearWindow();
                                    $this.miniView.open();
                                }
                                else {
                                    $this.miniView.close();
                                    $this.miniView = null;
                                }
                            }
                        }
                    }
                ]
            }
        ]
    });
    
    this.container = this.window.body;
    $('#NetSVGContend', this.container).svg();
    this.svg = $('#NetSVGContend', this.container).svg('get');
    this.screenGrid = new NetScreenGrid(this.svg);
    this.scrollingWindow = $('#ScrollingWindowSVG_NETWORK', this.container);
    this.svgContend = $('#NetSVGContend', this.container);
}
//------------------------------------------------------------------------------
WindowNetChart.prototype.show = function () {
    this.window.show();
}
//------------------------------------------------------------------------------
