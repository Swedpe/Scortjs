function ThreedpieSimple(){
visiblesSideBar = new Array();
visiblesSideBar[1]=Components.create('Window',{
            height: 400,
            width: 530,
			x:250,
			y:50,
            resizable: true,
            minimizable: false,
            closeAction:'destroy',
            constrain: true,
            modal: true,
            title:'PC_Desempeño_00401',
            id:'WindowDesempeno',
            html:'<div Id="FormWindowDesempeno" style="background-color: white;padding: 1px; height:100%; " class=""></div>',
            items:[{
                type:'SvgContainer',
                region: 'center',
                id:'mysvg',
                items:[
                  {
                    id:'3dPieOne',
                    type: 'pie3DSvg',
					//titulo:'Ejemplo de 3D Pie',
					//subTitulo:'ScortJs',
                    data:[
						{label:"Cajamarca", color:"#990099", value:35},
						{label:"Huanuco", color:"#3366CC", value:33.5},
						{label:"Ucayali", color:"#DC3912", value:15},
						{label:"Tumbes", color:"#FF9900", value:23},
						{label:"Ayacucho", color:"#109618", value:25},
					],
					rx:150,
					ry:50,
					ir:0.35,
					h:35,
					plugins:{ svgToolTip:{
						type: 'svgToolTip',
						orientacion:'derecha',
						offset:20,
					}},
					textFormat:'value',
					responsive:false,
					drawRadialLegend:false,
					drawLinealLegend:false,	
                  }
                ]
            }]
  }).show();
}