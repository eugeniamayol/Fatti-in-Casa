let campoTelefono = document.getElementById("tel");
let campoNombre = document.getElementById("tel");
let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", validar);

function validar(e){
	e.preventDefault();
	
	if(isNaN(campoTelefono.value)){
		
 		//Alerta error
        Swal.fire(
         'Oops...',
         'El número ingresado no es válido, por favor reingrese.',
         'error'
        );

        campoTelefono.style.color = "red";
        
	 }else if (campoNombre != NaN) {
	 	
 		//Alerta error
        Swal.fire(
         'Oops...',
         'El nombre ingresado no es válido, por favor reingrese.',
         'error'
        );

        campoNombre.style.color = "red";

	 }else{
	 	//Alerta confirmacion
	 	Swal.fire(
	 	 '¡Bravo!',
		 'Formulario enviado con éxito. En breve te contactaremos.',
         'success'
        );

	 	//Vaciar formulario
		formulario.reset()
	 }
}

