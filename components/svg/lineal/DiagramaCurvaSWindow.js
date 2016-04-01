//tipo, padre
var DiagramaCurvaSWindow = function (data) {
    var ext = data["tipo"]+"_"+data["padre"];
    var idWindow = 'DiagramaCurvaSWindow'+ext;
    this.idDiagrama = 'DivDiagramaCurva'+ext;
    this.miniView = null;
    var current = this;

    if(Components.getComponentById(idWindow) == undefined) {
        $win=this;
        this.curvaWindow = Components.create('Window', {
                id: idWindow,
                autoScroll: false,
                collapsible: true,
                maximizable: true,
                height: 650,
                width: 800,
                closeAction:'destroy',
                html: '<div id="DivDiagramaCurvaC'+ext+'" style="overflow:auto; background-color:white; padding:1px; height:100%; width:100%;"><div id="'+current.idDiagrama+'" ></div></div>',
                listeners: {
                    activate: function(e1) {
                        Components.getComponentById(idWindow).setTitle("CurvaS de "+data["tipo"]+" : "+DataTareas[data["padre"]].Descripcion);
                    },
                    beforeClose:function(win) {
                        current.miniView = null;
                    }
                },
                title: 'Diagrama de CurvaS',
                items: [
                    {	
                        type: 'ToolBar',
                        region: 'top',
                        items: [
                            {
                                type: 'Button',
                                id: 'showHitos'+ext,
                                scale: 'medium',
                                icon: 'images/rombo1.png',
                                tooltip: 'Mostrar Hitos',
                                enableToggle : true,
                                listeners: {
                                    click: function() {
                                        if (Components.getComponentById('showHitos'+ext).pressed) {
                                            current.diagrama.showHitos = true;
                                            current.diagrama.showAllHitos();
                                        }
                                        else {
                                            current.diagrama.showHitos = false;
                                            current.diagrama.hideAllHitos();
                                        }
                                    }
                                }
                            },
                            {
                                type: 'Button',
                                id: 'showResaltador',
                                scale: 'medium',
                                icon: 'images/icon_green1.png',
                                tooltip: 'Mostrar Resaltador',
                                enableToggle : true,
                                enabled: false,
                                listeners: {
                                    click: function() {
                                        if (Components.getComponentById('showResaltador').pressed) {
                                            current.diagrama.OkPermanente();
                                        }
                                        else
                                            current.diagrama.OffPermanente();
                                    }
                                }
                            },
                            {
                                type: 'Button',
                                id: 'incZoomY'+ext,
                                scale: 'medium',
                                icon: 'images/abajo16.png',
                                tooltip: 'ZoomY +',
                                listeners: {
                                    click: function() {
                                        current.diagrama.IncZoomY();
                                        current.RecalcularAlto();
                                    }
                                }
                            },
                            {
                                type: 'Button',
                                id: 'decZoomY'+ext,
                                scale: 'medium',
                                icon: 'images/arriba16.png',
                                tooltip: 'ZoomY -',
                                listeners: {
                                    click: function() {
                                        current.diagrama.DecZoomY();
                                        current.RecalcularAlto();
                                    }
                                }
                            },
                            {
                                type: 'Button',
                                id: 'decZoomX'+ext,
                                scale: 'medium',
                                icon: 'images/izquierda16.png',
                                tooltip: 'ZoomX -',
                                listeners: {
                                    click: function() {
                                        current.diagrama.DecZoomX();
                                        current.RecalcularAncho();
                                    }
                                }
                            },
                            {
                                type: 'Button',
                                id: 'incZoomX'+ext,
                                scale: 'medium',
                                icon: 'images/derecha16.png',
                                tooltip: 'ZoomX +',
                                listeners: {
                                    click: function() {
                                        current.diagrama.IncZoomX();
                                        current.RecalcularAncho();
                                    }
                                }
                            },

                            {
                                type: 'Button',
                                id: 'zoomEspecifico'+ext,
                                scale: 'medium',
                                icon: 'images/zoom.png',
                                tooltip: 'Zoom',
                                enableToggle : true,
                                listeners: {
                                    click: function() {
                                        if (Components.getComponentById('zoomEspecifico'+ext).pressed) {
                                            current.ActivarZoom();
                                        }
                                        else
                                            current.DesactivarZoom();
                                    }
                                }									
                            },
                            {
                                type: 'Button',
                                id: 'comprimir'+ext,
                                scale: 'medium',
                                icon: 'images/comprimir16.png',
                                tooltip: 'Restaurar imagen',
                                listeners: {
                                    click: function() {
                                        current.diagrama.Restaurar();
                                    }
                                }									
                            },
                            {
                                type: 'Button',
                                id: 'canvas'+ext,
                                scale: 'medium',
                                icon: 'images/comprimir16.png',
                                tooltip: 'Show Canvas',
                                listeners: {
                                    click: function() {
                                        current.diagrama.showCanvas();
                                    }
                                }									
                            },
                            {
                                type: 'Button',
                                id: 'svg'+ext,
                                scale: 'medium',
                                icon: 'images/comprimir16.png',
                                tooltip: 'Show SVG',
                                listeners: {
                                    click: function() {
                                        current.diagrama.showSvg();
                                    }
                                }									
                            },
                            {
                                type: 'Button',
                                id: 'SpreadPie'+ext,
                                scale: 'medium',
                                icon: 'images/pie2.png',
                                tooltip: 'Separar Pie',
                                listeners: {
                                    click: function() {
                                        current.diagrama.SeparaPie(true);
                                    }
                                }									
                            },
                            {
                                type: 'Button',
                                id: 'JoinPie'+ext,
                                scale: 'medium',
                                icon: 'images/pie1.png',
                                tooltip: 'Juntar Pie',
                                listeners: {
                                    click: function() {
                                        current.diagrama.SeparaPie(false);
                                    }
                                }									
                            },
                            {
                                type: 'Button',
                                id: 'SwitchValues'+ext,
                                scale: 'medium',
                                icon: 'images/dolar724.png',
                                tooltip: 'Ver Porcentajes/Valores',
                                listeners: {
                                    click: function() {
                                        current.diagrama.CambiaValores();
                                    }
                                }									
                            },								
                            {
                                type: 'Button',
                                id: 'MergeSlices',
                                scale: 'medium',
                                icon: 'images/mergepie.png',
                                tooltip: 'Unir Segmentos',
                                listeners: {
                                    click: function() {
                                        current.diagrama.UnirPartes();
                                    }
                                }									
                            },															
                            {
                                type: 'Button',
                                id: 'SliceSlices',
                                scale: 'medium',
                                icon: 'images/restorepie.png',
                                tooltip: 'Separar Segmentos',
                                listeners: {
                                    click: function() {
                                        current.diagrama.SepararPartes();
                                    }
                                }									
                            },															
                            {
                                type: 'Button',
                                id: 'RestoreSlices',
                                scale: 'medium',
                                icon: 'images/dolar16.png',
                                tooltip: 'Restaurar Valores Iniciales',
                                listeners: {
                                    click: function() {
                                        current.diagrama.ValoresIniciales();
                                    }
                                }									
                            },															
                            {
                                type: 'Button',
                                id: 'FechaLineaHoy',
                                scale: 'medium',
                                icon: 'images/xdateok.png',
                                tooltip: 'Fecha hoy',
                                enableToggle : true,
                                listeners: {
                                    click: function() {
                                        if (Components.getComponentById('FechaLineaHoy').pressed) {
                                            current.diagrama.Showfechahoy();
                                        }else{
                                            current.diagrama.Hidefechahoy();
                                        }
                                    }
                                }									
                            },
                            {
                                type: 'Button',
                                id : 'MiniViewProyecto',
                                scale:'medium',
                                icon:'images/buscadoresPlus.png',
                                tooltip:'Mostrar Miniatura',
                                enableToggle : true,
                                listeners: {
                                    click: function (event) {
                                        if(event.data.OBJ.pressed){
                                            current.miniView = new MiniViewWindow($('svg', current.scrollingWindow), $('#DivDiagramaCurvaC'+ext), Components.getComponentById(idWindow), 0, 'grupocontenedor', 0);
                                            current.miniView.btnMiniView = event.data.OBJ;
                                            current.miniView.crearWindow();
                                            current.miniView.open();
                                        }
                                        else{
                                            current.miniView.close();
                                            current.miniView = null;
                                        }
                                }
                            }
                        },
                         {
                                type: 'Button',
                                id : 'IgnoreWeekendsBT'+ext,
                                scale:'medium',
                                icon:'images/calendar.png',
                                tooltip:'Ignorar Fines de Semana',
                                enableToggle : true,
                                hidden: true,
                                listeners: {
                                click: function (event) {
                                       
                                       var svg = $('#'+$win.idDiagrama).svg('get');
                                        svg.clear();
                                       if(event.data.OBJ.pressed){ 
                                             Components.getComponentById('IgnoreWeekendsBT'+ext).setIcon('images/calendar.png');
                                             $win.diagrama.draw("nofines");
                                       }else{
                                             Components.getComponentById('IgnoreWeekendsBT'+ext).setIcon('images/calendarsundays.png');
                                             $win.diagrama.draw();
                                            
                                       }
                                        
                                        
                                       
                                }
                            }
                        },                        
                         {
                                type: 'Button',
                                id : 'ShowPeakBT'+ext,
                                scale:'medium',
                                icon:'images/peak.png',
                                tooltip:'Ver punto mas alto',
                                hidden: true,
                                enableToggle : true,
                                listeners: {
                                    click: function (event) {
                                       if(event.data.OBJ.pressed){ 
                                            current.diagrama.showHitos = true;
                                            current.diagrama.showAllHitos();
                                        }
                                        else {
                                            current.diagrama.showHitos = false;
                                            current.diagrama.hideAllHitos();
                                        }
                                    }
                                }
                         },                         
                         {
                            type: 'SplitButton',
                            id: 'EscalaTiempo',
                            text : 'Escala de Barras',
                            tooltip: 'Elegir tipo de documento',
                            menu: {
                                items: [
                                    {
                                        id: 'ninguno',
                                        text: 'Ninguno',
                                        handler: function() {
                                            $(".periodosemanal").hide();
                                            $(".periodomensual").hide();
                                            $(".periododiario").show();
                                            Components.getComponentById('EscalaTiempoSelected').setValue('Ninguno');
                                        }  
                                    },
                                    {
                                        id: 'semanal',
                                        text: 'Semanal',
                                        handler: function() {
                                            $(".periododiario").hide();
                                            $(".periodosemanal").show();
                                            $(".periodomensual").hide();
                                            Components.getComponentById('EscalaTiempoSelected').setValue('Semanal');
                                        }  
                                    },
                                    {
                                        id: 'mensual',
                                        text: 'Mensual',
                                        handler: function() {
                                            $(".periododiario").hide();
                                            $(".periodosemanal").hide();
                                            $(".periodomensual").show();
                                            Components.getComponentById('EscalaTiempoSelected').setValue('Mensual');
                                        }  
                                    }
                                ]
                            }
                         },                         
                        {
                            type: 'TextField',
                            id: 'EscalaTiempoSelected',
                            readOnly: true,
                            width: 200,
                            value: 'Mensual'
                        }
                    ]
                }
            ]
        });
    }

    Components.getComponentById(idWindow).show();
    
    if(data["tipo"]=="compcost")
    {
            Components.getComponentById('showHitos'+ext).setVisible(false);
            Components.getComponentById('comprimir'+ext).setVisible(false);
            Components.getComponentById('zoomEspecifico'+ext).setVisible(false);
            Components.getComponentById('canvas'+ext).setVisible(true);
            Components.getComponentById('svg'+ext).setVisible(true);
            Components.getComponentById('SpreadPie'+ext).setVisible(false);
            Components.getComponentById('SwitchValues'+ext).setVisible(false);	
            Components.getComponentById('MergeSlices').setVisible(false);
            Components.getComponentById('SliceSlices').setVisible(false);
            Components.getComponentById('RestoreSlices').setVisible(false);
            Components.getComponentById('JoinPie'+ext).setVisible(false);	
            var BarrasValores= new Array();//
            BarrasValores[0]=215;//
            BarrasValores[1]=180;
            BarrasValores[2]=60;
            BarrasValores[3]=170;
            BarrasValores[4]=300;
            BarrasValores[5]=270;
            BarrasValores[6]=136;
            BarrasValores[7]=178;
            BarrasValores[8]=241;
            data["barrasvalores"]=BarrasValores;
            var Nombres = new Array();	
            Nombres[0] = "Linea Base 1";
            Nombres[1] = "Linea Base 2";
            Nombres[2] = "Linea Base 3";
            Nombres[3] = "Linea Base 4";
            Nombres[4] = "Linea Base 5";
            Nombres[5] = "Linea Base 6";
            Nombres[6] = "Linea Base 7";
            Nombres[7] = "Linea Base 8";
            Nombres[8] = "Linea Base 9";
            data["barrasnombres"]=Nombres;
    }
    else if(data["tipo"]=="costpie")
    {
            Components.getComponentById('showHitos'+ext).setVisible(false);
            Components.getComponentById('comprimir'+ext).setVisible(false);
            Components.getComponentById('incZoomY'+ext).setVisible(false);
            Components.getComponentById('decZoomY'+ext).setVisible(false);
            Components.getComponentById('decZoomX'+ext).setVisible(false);
            Components.getComponentById('incZoomX'+ext).setVisible(false);

            Components.getComponentById('zoomEspecifico'+ext).setVisible(false);
            Components.getComponentById('canvas'+ext).setVisible(false);
            Components.getComponentById('svg'+ext).setVisible(false);
            Components.getComponentById('SpreadPie'+ext).setVisible(true);
            Components.getComponentById('SwitchValues'+ext).setVisible(true);	
            Components.getComponentById('MergeSlices').setVisible(true);
            Components.getComponentById('SliceSlices').setVisible(true);
            Components.getComponentById('RestoreSlices').setVisible(true);

            var BarrasValores= new Array();//
            BarrasValores[0]=7;//54
            BarrasValores[1]=15;//108//162
            BarrasValores[2]=13;//90//252
            BarrasValores[3]=7;//108//360
            BarrasValores[4]=7;
            BarrasValores[5]=8;//54
            BarrasValores[6]=15;//108//162
            BarrasValores[7]=12;//90//252
            BarrasValores[8]=8;//108//360
            BarrasValores[9]=8;

            data["barrasvalores"]=BarrasValores;
            var Nombres = new Array();	
            Nombres[0] = "Gasto1";
            Nombres[1] = "Gasto2";
            Nombres[2] = "Gasto3";
            Nombres[3] = "Gasto4";	
            Nombres[4] = "Gasto5";
            Nombres[5] = "Gasto6";
            Nombres[6] = "Gasto7";
            Nombres[7] = "Gasto8";	
            Nombres[8] = "Gasto9";
            Nombres[9] = "Gasto10";	
            data["barrasnombres"]=Nombres;
    }    
    else
    {
        if(data["tipo"]=="duraciontest")    
        {
         Components.getComponentById('ShowPeakBT'+ext).setVisible(true);
         Components.getComponentById('IgnoreWeekendsBT'+ext).setVisible(true);
         Components.getComponentById('showHitos'+ext).setVisible(false);
         Components.getComponentById('showResaltador').setVisible(false);
         
        }
            Components.getComponentById('canvas'+ext).setVisible(false);
            Components.getComponentById('svg'+ext).setVisible(false);
            Components.getComponentById('SpreadPie'+ext).setVisible(false);
            Components.getComponentById('SwitchValues'+ext).setVisible(false);	
            Components.getComponentById('MergeSlices').setVisible(false);
            Components.getComponentById('SliceSlices').setVisible(false);
            Components.getComponentById('RestoreSlices').setVisible(false);
            Components.getComponentById('JoinPie'+ext).setVisible(false);	
    }

    $('#'+this.idDiagrama).svg();
    var svg = $('#'+this.idDiagrama).svg('get');
    //this.diagrama = new DiagramaCurvaSSvg(svg, tipo, padre);
    data["svg"] = svg;
    if(typeof(diagramasGraficosSVG.lenght==0)) {
        diagramasGraficosSVG[1]= new Array();
        diagramasGraficosSVG[1]['id']= 1;
        diagramasGraficosSVG[1]['diagrama']= new DiagramaCurvaSSvg(data);
        diagramasGraficosSVG[1]['diagrama'].draw();
        this.diagrama= diagramasGraficosSVG[1]['diagrama']
    }
    else {
        diagramasGraficosSVG[diagramasGraficosSVG.lenght+1]= new Array();
        diagramasGraficosSVG[diagramasGraficosSVG.lenght+1]['id']= 1;
        diagramasGraficosSVG[diagramasGraficosSVG.lenght+1]['diagrama']= new DiagramaCurvaSSvg(data);
        diagramasGraficosSVG[diagramasGraficosSVG.lenght+1]['diagrama'].draw();
        this.diagrama= diagramasGraficosSVG[diagramasGraficosSVG.lenght+1]['diagrama']
    }
    
    this.container = Components.getComponentById(idWindow).body;
    this.scrollingWindow = $('#DivDiagramaCurvaC'+ext, this.container);
    this.svgContend = $('#'+this.idDiagrama, this.container);
    current = this;
    this.scrollingWindow.animate({ scrollLeft: "-=500" }, "slow");
    this.scrollingWindow.bind("scroll", function(e){
        if(current.miniView != null) {
            if(!SliderMaestro ) {
                var percent = ((current.scrollingWindow.scrollLeft() * 100)/($('svg', current.scrollingWindow)[0].clientWidth - current.svgContend.width()));
                var valor=   (percent*   ($('svg', current.miniView.miniChartZoom).width()-229) )/100;
                current.miniView.miniChartZoom.scrollLeft(valor)
            }
        }
    });
}
//---------------------------------------------------------------------------------------------------------
DiagramaCurvaSWindow.prototype.ActivarZoom = function() {
	var points = new Array();
	$('#'+this.idDiagrama).bind('mousedown', {obj: this}, function(evt) {
		points["x1"] = evt.offsetX;
		points["y1"] = evt.offsetY;
		
		evt.data.obj.diagrama.selector.setAttribute("visibility", "visible");
		evt.data.obj.diagrama.selector.setAttribute("x", points.x1);
		evt.data.obj.diagrama.selector.setAttribute("y", points.y1);
		
		$('#'+evt.data.obj.idDiagrama).bind('mousemove', {diagrama: evt.data.obj.diagrama}, function(e) {
			var difx = Math.abs(points.x1 - e.offsetX);
			var dify = Math.abs(points.y1 - e.offsetY);
			
			e.data.diagrama.selector.setAttribute("width", difx);
			e.data.diagrama.selector.setAttribute("height", dify);
		});
	});
	
	$('#'+this.idDiagrama).bind('mouseup', {obj: this}, function(evt) {
		points["x2"] = evt.offsetX;
		points["y2"] = evt.offsetY;
		
		if(points.x1 != points.x2 && points.y1 != points.y2) {
			evt.data.obj.diagrama.ZoomOf(points);
		}
		evt.data.obj.diagrama.selector.setAttribute("visibility", "hidden");
		$('#'+evt.data.obj.idDiagrama).unbind('mousemove');
	});
}
//---------------------------------------------------------------------------------------------------------
DiagramaCurvaSWindow.prototype.DesactivarZoom = function() {
    $('#'+this.idDiagrama).unbind('mousedown');
    $('#'+this.idDiagrama).unbind('mouseup');
}
//---------------------------------------------------------------------------------------------------------
DiagramaCurvaSWindow.prototype.RecalcularAncho = function() {
    Root = $('#'+this.idDiagrama).svg('get').root();
    Root.attributes.width.value = this.diagrama.Ancho;
    $('#'+this.idDiagrama).width(parseInt(this.diagrama.Ancho));
}
//---------------------------------------------------------------------------------------------------------
DiagramaCurvaSWindow.prototype.RecalcularAlto = function() {
    Root = $('#'+this.idDiagrama).svg('get').root();
    Root.clientHeight = this.diagrama.Alto;
    $('#'+this.idDiagrama).height(parseInt(this.diagrama.Alto));
}
