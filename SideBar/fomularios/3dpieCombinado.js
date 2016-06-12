function ThreedpieCombinado(){
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
                    id:'3dPiedos',
                    type: 'pie3DSvg',
                    data:[
						{label:"Arequipa", color:"#3366FF", value:150},
						{label:"Cusco", color:"#DC39FF", value:90},
						{label:"Puno", color:"#FF99FF", value:230},
						{label:"Ayacucho", color:"#109618", value:125},
						{label:"Madre de dios", color:"#1096FF", value:500},
						{label:"Lima", color:"#9900FF", value:650},
						{label:"Arequipa", color:"#3366FF", value:150},
						{label:"Cusco", color:"#DC39FF", value:100},
						{label:"Puno", color:"#FF99FF", value:230},
						{label:"Ayacucho", color:"#109618", value:250},
						{label:"Madre de dios", color:"#1096FF", value:50},
						{label:"Lima", color:"#9900FF", value:350},
					],
					titulo:{'texto': "Prueba 2 con errores", 'fontSize': 20},	
					rx:130,
					ry:130,
					ir:0.2,
					h:0,
					responsive:true,
					drawRadialLegend:true,
					drawLinealLegend:true,
					legendDistance:260,
					centerY:200,	
					centerX:200,
					textFormat:'value'
                  }
                ]
            }]
  }).show();
}