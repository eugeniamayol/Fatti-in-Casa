$(document).ready(function() {
	// Llamo a la función para que maquete el carrito
    dibujar();

    // Oculto el icono del carrito
    $("#carrito").hide();
});

// TRAIGO LOS DATOS DEL LOCALSTORAGE
const producto = JSON.parse(localStorage.getItem("carrito"));
console.log(producto)

//CREO EL CARRITO
function dibujar(){
	for(const curso of producto){
		$("#contenedorCarrito").append(`
			<tr>
			<td class="col-6">${curso.nombre}</td> 
			<td class="col-6">$ ${curso.precio}</td>
			</tr>
			`)

		//Aplicar la función para lograr la suma total
		calcularTotal();	
	};

	$("#total").append(`
	<tr class= "font-weight-bold">
			<td>Total:</td> 
			<td>$${total}</td>
	</tr>`)			
	}


//FUNCION CALCULAR TOTAL
function calcularTotal() {   
    total=0;
    let filtrado = producto.map(costo => parseInt(costo.precio));
    console.log(filtrado);
    for (let index = 0; index < filtrado.length; index++) {
        let resultado = filtrado[index];
        total += resultado;
    }
		console.log(total)
}



//FUNCION VACIAR TODO EL CARRITO
$("#btnVaciar").click(function(){
	localStorage.clear();
	$("table").remove();
	$("#total").empty();
	$("#tienesCupon").remove();
	$("#tituloCarrito").append(`<h5 class="my-5">No hay productos en el carrito</h5>`);
}) 

//FUNCION PAGAR
$("#btnPagar").click(function(){
	 Swal.fire(
            'En construcción',
            '',
            'warning'
        );
}) 