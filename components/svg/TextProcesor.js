var TextProcesor = function(Textoinicial,Config){
	if (typeof(Config) != 'object')
		this.NumMaxLetras = 30;	
	else
		this.NumMaxLetras = Config.NumMaxLetras;
	
	this.TextOriginal = Textoinicial;
	this.ArrayTextosResultado = new Array();

	this.MaxLetrasResult = 1;
	this.NumPartes = 0;
	if(Textoinicial.length>this.NumMaxLetras){	
		pos = 0;
		posL = 0;
		var Xvar = true;
		var IndiceTexto = 0;
		while (Xvar!=-1){
				pos = Textoinicial.indexOf(' ', ((posL+1) || 0));
				if (pos>this.NumMaxLetras){
					cadena= Textoinicial.substr(0,(posL+1));
					cadena=cadena.replace(/\s+$/,"");
					this.ArrayTextosResultado[IndiceTexto] = cadena;
					this.NumPartes = this.NumPartes + 1;
					Textoinicial = Textoinicial.substr(pos,Textoinicial.length)
					IndiceTexto = IndiceTexto + 1;
					if (pos>this.MaxLetrasResult){				
						if(cadena.length>this.MaxLetrasResult)
						this.MaxLetrasResult = cadena.length;
					}
					pos = 0;
				}
			posL = pos;
			Xvar = Textoinicial.indexOf(' ', ((pos+1) || 0));		
		}
		if (IndiceTexto == 0){
			this.ArrayTextosResultado[IndiceTexto] = Textoinicial.substr(0,(posL+1));
			var A1 = Textoinicial.substr(0,(posL+1)).length
			this.NumPartes = this.NumPartes + 1;
			this.ArrayTextosResultado[IndiceTexto+1] =  Textoinicial.substr((posL+1),Textoinicial.length);
			var A2 = Textoinicial.substr(0,(posL+1)).length
			this.NumPartes = this.NumPartes + 1;
				if (A1>A2)
					this.MaxLetrasResult = A1;		
				else
					this.MaxLetrasResult = A2;
		}
		else{
			this.ArrayTextosResultado[IndiceTexto] = Textoinicial;
			this.NumPartes = this.NumPartes + 1;
		}
	}
	else{
		this.NumPartes = this.NumPartes + 1;
		this.MaxLetrasResult = this.TextOriginal.length;
		this.ArrayTextosResultado[0] = this.TextOriginal;
	}
}