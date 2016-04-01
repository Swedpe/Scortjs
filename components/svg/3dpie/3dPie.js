!function(){
	var Donut3D={};
	
	function pieTop(d, rx, ry, ir ){
		 /**
     * Dibujar el Pie 3d cara superior.
     * @param id, y nombre del grupo SVG del pie3d que se dibuja
	 * @param data datos en array que seran dibujados con formato {label:, color:, value:}
	 * @param x coordenada x del centro del pie
	 * @param y coordenada y del centro del pie
	 * @param rx radio externo en coordeandas x 
	 * @param ry radio interno en coordenadas y
	 * @param h altura de el 3dpie, (valor para representacion 3d)
	 * @param ir valor para el radio interno, en valor porcentual [de 0 a 1]
      */
		if(d.endAngle - d.startAngle == 0 ) return "M 0 0";
		var sx = rx*Math.cos(d.startAngle),
			sy = ry*Math.sin(d.startAngle),
			ex = rx*Math.cos(d.endAngle),
			ey = ry*Math.sin(d.endAngle);
			
		var ret =[];
		 /**
			* Explicacion del dibujo
			* "M",sx,sy : Mover hasta el punto inicial[sx=StartPointX][sx=StartPointY]
			* "A",rx,ry : Arco eliptico con radios RadioX = rx,Radio Y=ry 
			* Rotacion del eje X : "0"  (sin ninguna rotacion)
			* large-arc-flag, sweep-flag, ver documentacion en linea
			* ex,ey, Punto Final del arcoX, Punto Final del ArcoY
			* ---------------------------------------------------------------------------
			Luego dibujar una linea hasta las coordenadas, calculadas en proporcion al radio interno
			* ex,ey, Punto Final del arcoX, Punto Final del ArcoY
			* "L",ir*ex,ir*ey
			* ---------------------------------------------------------------------------
			* dibujar El arco interno
			* usando practicamente los mismos parametros que el arco externo, tomando en consideracion que el punto final ahora es el punto inicial.
			* por ultimo dibujar una linea de retorno al punto inicial de todo el grafico.
			*/
		ret.push("M",sx,sy,"A",rx,ry,"0",(d.endAngle-d.startAngle > Math.PI? 1: 0),"1",ex,ey,"L",ir*ex,ir*ey);
		ret.push("A",ir*rx,ir*ry,"0",(d.endAngle-d.startAngle > Math.PI? 1: 0), "0",ir*sx,ir*sy,"z");
		
		return ret.join(" ");
	}

	function pieOuter(d, rx, ry, h ){
		var startAngle = (d.startAngle > Math.PI ? Math.PI : d.startAngle);
		var endAngle = (d.endAngle > Math.PI ? Math.PI : d.endAngle);
		
		var sx = rx*Math.cos(startAngle),
			sy = ry*Math.sin(startAngle),
			ex = rx*Math.cos(endAngle),
			ey = ry*Math.sin(endAngle);
			
			var ret =[];
			ret.push("M",sx,h+sy,"A",rx,ry,"0 0 1",ex,h+ey,"L",ex,ey,"A",rx,ry,"0 0 0",sx,sy,"z");
			return ret.join(" ");
	}
	
	function pieInner(d, rx, ry, h, ir ){
		var startAngle = (d.startAngle < Math.PI ? Math.PI : d.startAngle);
		var endAngle = (d.endAngle < Math.PI ? Math.PI : d.endAngle);
		
		var sx = ir*rx*Math.cos(startAngle),
			sy = ir*ry*Math.sin(startAngle),
			ex = ir*rx*Math.cos(endAngle),
			ey = ir*ry*Math.sin(endAngle);

			var ret =[];
			ret.push("M",sx, sy,"A",ir*rx,ir*ry,"0 0 1",ex,ey, "L",ex,h+ey,"A",ir*rx, ir*ry,"0 0 0",sx,h+sy,"z");
			return ret.join(" ");
	}
	
	function angleRadianCalculator(data){
		var percentages = new Array();
		var total = 0;
		var pi = Math.PI;
		var angles = new Array();
		for (var contador in data)
			total=total+data[contador].value
		
		for (var angulos in data){
			if (angulos==0)
				angles[angulos] = {endAngle:(2*pi/100)*data[angulos].value*100/total, padAngle: 0, startAngle: 0, value: data[angulos].value};
			else
				angles[angulos] = {endAngle:(2*pi/100)*data[angulos].value*100/total+angles[angulos-1].endAngle, padAngle: 0, startAngle: angles[angulos-1].endAngle, value: data[angulos].value};}
		return angles;
	}
	
	function getPercent(d){
		return (d.endAngle-d.startAngle > 0.2 ? 
				Math.round(1000*(d.endAngle-d.startAngle)/(Math.PI*2))/10+'%' : '');
	}	
	
	Donut3D.transition = function(id, data, rx, ry, h, ir){
		function arcTweenInner(a) {
		  var i = d3.interpolate(this._current, a);
		  this._current = i(0);
		  return function(t) { return pieInner(i(t), rx+0.5, ry+0.5, h, ir);  };
		}
		function arcTweenTop(a) {
		  var i = d3.interpolate(this._current, a);
		  this._current = i(0);
		  return function(t) { return pieTop(i(t), rx, ry, ir);  };
		}
		function arcTweenOuter(a) {
		  var i = d3.interpolate(this._current, a);
		  this._current = i(0);
		  return function(t) { return pieOuter(i(t), rx-.5, ry-.5, h);  };
		}
		function textTweenX(a) {
		  var i = d3.interpolate(this._current, a);
		  this._current = i(0);
		  return function(t) { return 0.6*rx*Math.cos(0.5*(i(t).startAngle+i(t).endAngle));  };
		}
		function textTweenY(a) {
		  var i = d3.interpolate(this._current, a);
		  this._current = i(0);
		  return function(t) { return 0.6*rx*Math.sin(0.5*(i(t).startAngle+i(t).endAngle));  };
		}
		
		var _data = d3.layout.pie().sort(null).value(function(d) {return d.value;})(data);
		
		d3.select("#"+id).selectAll(".innerSlice").data(_data)
			.transition().duration(750).attrTween("d", arcTweenInner); 
			
		d3.select("#"+id).selectAll(".topSlice").data(_data)
			.transition().duration(750).attrTween("d", arcTweenTop); 
			
		d3.select("#"+id).selectAll(".outerSlice").data(_data)
			.transition().duration(750).attrTween("d", arcTweenOuter); 	
			
		d3.select("#"+id).selectAll(".percent").data(_data).transition().duration(750)
			.attrTween("x",textTweenX).attrTween("y",textTweenY).text(getPercent); 	
	}
	
	Donut3D.draw=function(id, data, x , y, rx, ry, h, ir){
	  /**
     * Dibujar el Pie 3d.
     * @param id, y nombre del grupo SVG del pie3d que se dibuja
	 * @param data datos en array que seran dibujados con formato {label:, color:, value:}
	 * @param x coordenada x del centro del pie
	 * @param y coordenada y del centro del pie
	 * @param rx radio externo en coordeandas x 
	 * @param ry radio interno en coordenadas y
	 * @param h altura de el 3dpie, (valor para representacion 3d)
	 * @param ir valor para el radio interno, en valor porcentual [de 0 a 1]
     */
		var _data = angleRadianCalculator(data);
		console.log(_data);
		
		var _data = d3.layout.pie().sort(null).value(function(d) {return d.value;})(data);
		console.log(_data);
		var slices = d3.select("#"+id).append("g").attr("transform", "translate(" + x + "," + y + ")")
			.attr("class", "slices");
			
		slices.selectAll(".innerSlice").data(_data).enter().append("path").attr("class", "innerSlice")
			.style("fill", function(d) { return d3.hsl(d.data.color).darker(0.7); })
			.attr("d",function(d){ return pieInner(d, rx+0.5,ry+0.5, h, ir);}) 
			.each(function(d){this._current=d;});		//asignacion nesesaria para el metodo transition
		
		slices.selectAll(".topSlice").data(_data).enter().append("path").attr("class", "topSlice")
			.style("fill", function(d) { return d.data.color; })
			.style("stroke", function(d) { return d.data.color; })
			.attr("d",function(d){ return pieTop(d, rx, ry, ir);})
			.on('click', function(d, i) {
				  console.log(this);
				  console.log(d3.event);
				  console.log(d);
				  d3.select(this).style("fill", "red");
				return;
				}
				)
			.each(function(d){this._current=d;});
		
		slices.selectAll(".outerSlice").data(_data).enter().append("path").attr("class", "outerSlice")
			.style("fill", function(d) { return d3.hsl(d.data.color).darker(0.7); })
			.attr("d",function(d){ return pieOuter(d, rx-.5,ry-.5, h);})
			.each(function(d){this._current=d;});

		slices.selectAll(".percent").data(_data).enter().append("text").attr("class", "percent")
			.attr("x",function(d){ return 0.6*rx*Math.cos(0.5*(d.startAngle+d.endAngle));})
			.attr("y",function(d){ return 0.6*ry*Math.sin(0.5*(d.startAngle+d.endAngle));})
			.text(getPercent).each(function(d){this._current=d;});				
	}
	
	this.Donut3D = Donut3D;
}();