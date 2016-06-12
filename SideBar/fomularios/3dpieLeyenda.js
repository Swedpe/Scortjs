function ThreedpieLeyenda(){
visiblesSideBar = new Array();
visiblesSideBar[1]=Components.create('Window',{
            height: 400,
            width: 530,
			x:250,
			y:50,
            resizable: true,
            minimizable: false,
            closeAction:'destroy',
            title:'prueba 3',
            id:'WindowDesempeno2',
            html:'<div Id="FormWindowDesempeno" style="background-color: white;padding: 1px; height:100%; " class=""></div>',
            items:[{
                type:'SvgContainer',
                region: 'center',
                id:'mysvg',
                items:[
                  {
                    id:'3dradial',
                    type: 'pie3DSvg',
                    data:[
						{label:"Cajamarca", color:"#990099", value:135},
						{label:"Huanuco", color:"#3366CC", value:33.5},
						{label:"Ucayali", color:"#DC3912", value:115},
						{label:"Tumbes", color:"#FF9900", value:23},
						{label:"Ayacucho", color:"#109618", value:125},
					],
					titulo:{'texto': "Prueba 3", 'fontSize': 20},	
					rx:130,
					ry:100,
					ir:0,
					h:30,
					plugins:{ svgToolTip:{
						type: 'svgToolTip',
						orientacion:'arriba',
					}},
					responsive:true,
					drawRadialLegend:false,
					drawLinealLegend:true,	
					centerY:220,	
					centerX:200,
					textFormat:'percent'
                  }
                ]
            }]
  }).show();
}