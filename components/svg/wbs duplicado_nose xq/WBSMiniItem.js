/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	WBSMini v 1.0 - a jQuery Ui extension
	Licences: MIT & GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com].
*/
Components.WBSMini.prototype.init = function(dataObj) {
	this.config = {
        container: $('body'),       
        id: "WBSMini-"+ Math.round(Math.random() * 2000),
        width: -1,
		height:-1,	   
        title: "",       
        hidden: false,
		windowParent : '',		
		valZoom : 50,		
		window : null,
		btnMiniView:null,//control de la ventana padre que activa  la vista miniatura
		grupo: '',
		containerScroll:'',
		svgcontainer:'',
		listeners: {
            show: function(){},
            hide: function(){},
			onMove: function(obj){return true;}
        }
    };
    
    for(var i in dataObj) {
        if(this.config[i] != undefined) {
            if(i == "listeners") {
                for(var j in dataObj[i]) 
                    this.config[i][j] = dataObj[i][j];
            }
            else
                this.config[i] = dataObj[i];
        }
    }    
    
    this.id = this.config.id;
	
    this.container =  this.config.container; 
    this.className = "WBSMini";   
    this.title =  this.config.title;  
	this.windowParent =  this.config.windowParent;
	this.miniChartZoom = null;	
	this.containerScroll = this.config.containerScroll;
    this.listeners = this.config.listeners; 
	this.valZoom = this.config.valZoom;
	this.grupo =this.config.grupo,
	this.svgcontainer =this.config.svgcontainer;
}
Components.WBSMini.prototype.create = function() {
	var extra = this.windowParent.id;
    this.id = 'ZoomChartPorta_' + extra;
    var $minithis = this;
    
    this.window = {
            type: 'Window',
            width: $minithis.width,
            height: $minithis.height,
            id: $minithis.id,
            title: 'Easy Slider',                        
            html: '<div id="minichartzoomporta" style="background-color: white;padding: 1px; height:100%; width:100%; overflow:auto;"></div>',
            closeAction: 'hide',
            onclose: function() {
                $minithis.windowParent.remove($minithis.id);
                if($minithis.btnMiniView.pressed) 
                    $minithis.btnMiniView.toggle();
            },
            items: [
                {
                    type: 'ToolBar',
                    region: 'top',
                    items: [						
                        {	
                            type: 'Button',
                            id : 'MiniPortaChartZoomPlus_' + extra,
                            scale: 'minier',
                             icon:{
								type:'glipicon',
								class:'glyphicon-zoom-in',
								color:'black',
								position:'left'
								},					
                            tooltip:'Aumentar',
                            listeners: {
                                click: function() {
                                    var anchofiguragrande = $minithis.container.width()/2;
                                    var g = $("#ViewBoxPortaChartSvg", $minithis.window.body)[0];
                                    var zoomactual = parseFloat(((parseFloat($minithis.valZoom)*2)/100).toFixed(2));
                                    if(zoomactual >= 0.1 && zoomactual < 1 ){
                                        zoomactual += 0.1; 
                                        zoomactual = parseFloat(zoomactual.toFixed(2));
                                    }
                                    $minithis.valZoom = (zoomactual * 100) / 2;
                                    Components.getComponentById('ZoomLabelPortaChart_' + extra).setText($minithis.valZoom + "%");
                                    g.setAttributeNS (null, "viewBox", "0 0 " + (600 /zoomactual) +" " + (600/zoomactual) )
                                    g.setAttributeNS (null, "width", anchofiguragrande*zoomactual);
                                    return;
                                }
                            }
                        },
                        {	
                            type: 'Button',
                            id : 'MiniPortaChartZoomMinus_' + extra,
                            scale: 'minier',
                            icon:{
								type:'glipicon',
								class:'glyphicon-zoom-out',
								color:'black',
								position:'left'
								},
                            tooltip:'Disminuir',
                            listeners: {
                                click: function() {
                                    var anchofiguragrande = $minithis.container.width()/2;
                                    var g = $("#ViewBoxPortaChartSvg", $minithis.window.body)[0];
                                    var zoomactual= parseFloat(((parseFloat($minithis.valZoom)*2)/100).toFixed(2));
                                    if(zoomactual>0.1 &  zoomactual<=1 ){
                                        zoomactual-=0.1; zoomactual= parseFloat(zoomactual.toFixed(2)); 
                                    }
                                    $minithis.valZoom = (zoomactual * 100) / 2;
                                    Components.getComponentById('ZoomLabelPortaChart_' + extra).setText($minithis.valZoom + "%");
                                    g.setAttributeNS (null, "viewBox", "0 0 " + (600 /zoomactual) +" " + (600/zoomactual) )
                                    g.setAttributeNS (null, "width", anchofiguragrande*zoomactual);
                                    return;
                                }
                            }
                        },
                        {
                            type: 'Label', 
                            text: $minithis.valZoom + '%',
                            id: 'ZoomLabelPortaChart_' + extra
                        }
                    ]
                }
            ]
        }
        
        this.window = this.windowParent.add(this.window);
        this.miniChartZoom = $("#minichartzoomporta", this.window.body);
   
        if($('svg', this.miniChartZoom).length == 0) {
            var xmlns = "http://www.w3.org/2000/svg";   
            var svgns = 'http://www.w3.org/1999/xlink';

            var vb = document.createElementNS (xmlns, "svg");
            vb.setAttributeNS (null, "viewBox", "0 0 " + 700+" " + 1000)
            vb.setAttributeNS (null, "width", 100)
            vb.setAttributeNS (null, "height", 300)           
            vb.setAttributeNS (null,"id","ViewBoxPortaChartSvg");    

            var Node = document.createElementNS(xmlns,'use');  	
            Node.setAttributeNS(svgns,'xlink:href','#'+this.grupo);//<--Arreglar
            Node.setAttributeNS (null, "width", "100%");
            Node.setAttributeNS (null, "height", "100%"); 
            Node.setAttributeNS (null,"id","NodoUse");

            vb.appendChild(Node);
            if(typeof datos=="object")
                vb.setAttributeNS (null, "width", (this.datos[this.cabeceraIndice].Ancho)*0.5)    
            else
                vb.setAttributeNS (null, "width", this.container.width()/2)

            vb.setAttributeNS (null, "viewBox", "0 0 " + 600 +" " + 600)
            vb.setAttributeNS (null, "preserveAspectRatio", "xMinYMin meet")
            this.window.setPosition(0,400);
            this.window.show();
            this.miniChartZoom.append(vb)
        }
		return this ;
}
Components.WBSMini.prototype.open = function() {
this.window.show();
    var $minithis = this;
    //this.valZoom = 100;
    this.miniChartZoom
        .on( "mouseenter", function(e) {
            $minithis.svgcontainer.SliderMaestro = true;
            $minithis.miniChartZoom.bind("scroll", function() {                                
               var percent = (($minithis.miniChartZoom.scrollLeft()*100)/($('svg',$minithis.miniChartZoom).width()-229));
               if(typeof $minithis.containerScroll.body == "undefined")
					$minithis.containerScroll.scrollLeft((percent*($minithis.container.width()-$minithis.containerScroll.width()))/100);
               else
					$minithis.containerScroll.body.dom.scrollLeft = ((percent*($minithis.container.width()-$minithis.containerScroll.body.dom.clientWidth))/100);
            });

        })
        .on( "mouseleave", function(e) {
            $minithis.svgcontainer.SliderMaestro=false;
            $minithis.miniChartZoom.unbind("scroll");
        });
    this.window.setPosition(0,400);	
}