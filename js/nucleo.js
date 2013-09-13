console.log("Archivo nucleo.js Cargado Exitosamente");
	var suma=false;
	var resta=false;
	var multiplica=false;
	var divide=false;
	var puntoDecimal=false;
	var numeroGuardado;
	var contadorDelPunto=1;
	function accionEspecial(accion){
		if(accion=="raiz"){ pantalla.value= Math.sqrt(parseFloat(pantalla.value)); }
		if(accion=="negativo"){ pantalla.value= (parseFloat(pantalla.value))*(-1); }
		if(accion=="inversa"){ pantalla.value= 1/(parseFloat(pantalla.value)); }
		if (accion=="Punto"){puntoDecimal=true;}
		if (accion=="limpiar"){
			suma=false;
			resta=false;
			multiplica=false;
			divide=false;
			puntoDecimal=false;
			numeroGuardado=0;
			contadorDelPunto=1;
			pantalla.value=0;
		}
		console.log("Ejecutando la accion :" +accion);
	}	
	function agregarNumero(numero){
		if(puntoDecimal==false){
				pantalla.value=parseFloat(pantalla.value)*10+numero;
					console.log("Se ha agregado el numero '" +numero+"' A la pantalla");
				contadorDelPunto*=10;
			}
				if(puntoDecimal==true){
			
			pantalla.value=parseFloat(pantalla.value)+(numero/contadorDelPunto);
			contadorDelPunto*=10;
			console.log("Se ha agregado el numero '" +numero+"' A la pantalla");
			}
	}
	function activarOperador(operador){
				if(operador=="Suma"){									
													suma=true;
													resta=false;
													multiplica=false;
													divide=false;}
				if(operador=="Resta"){suma=false;
													resta=true;
													multiplica=false;
													divide=false;}
													
				if(operador=="Multiplica"){suma=false;
														resta=false;
														multiplica=true;
														divide=false;
														}
				if(operador=="Divide"){suma=false;
														resta=false;
														multiplica=false;
														divide=true;
														}
					numeroGuardado=pantalla.value;
					contadorDelPunto=1;
					pantalla.value=0;
					console.log("se ha activado el operador:  "+operador);
					console.log("se ha guardado :  "+numeroGuardado);
		}
	function botonIgual(){
		if(suma==true){
			pantalla.value=parseFloat(numeroGuardado)+parseFloat(pantalla.value);
			numeroGuardado=0;
			console.log("Se realizó la funcion   es  de suma");
			suma=false;
		
		}
				console.log("el numero  guardado  es :  "+numeroGuardado);
	if(resta==true){
			pantalla.value=parseFloat(numeroGuardado)-parseFloat(pantalla.value);
			numeroGuardado=0;
			console.log("Se realizó la funcion   es  de resta");
			resta=false;
		}
	if(multiplica==true){
			pantalla.value=parseFloat(numeroGuardado)*parseFloat(pantalla.value);
			numeroGuardado=0;
			console.log("Se realizó la funcion   es  de multiplica");
			multiplica=false;
		}
	if(divide==true){
			pantalla.value=parseFloat(numeroGuardado)/parseFloat(pantalla.value);
			numeroGuardado=0;
			console.log("Se realizó la funcion   es  de multiplica");
			divide=false;
			}
	else{				console.log("No se realizó ninguna funcion  ");
}		
				
				
				
	}