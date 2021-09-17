//VARIABLES GLOBALES
let cursos = [];
let carrito = [];


$(document).ready(function() {
    obtenerDatos();
    //Selector y evento change
    $("#miSeleccion").on("change", ordenar);
});


//TRAIGO LOS DATOS DE JSON
const URLJSON = "productos.json";
function obtenerDatos() {
    $.getJSON(URLJSON).done(function(resultado, estado) {
        console.log(estado);
        if (estado == "success") {
            cursos = resultado.cursos;
            console.log(cursos);
            renderizarProductos();
        }
            })
        };


//FUNCION RENDERIZAR PRODUCTOS
const renderizarProductos = () => 
    {for (const curso of cursos) {
        $("#contenedorCursos").append(`<div id="card${curso.id}"class="card my-5 bgBordo text-white" style="width: 18rem; display : none;">
        <div class="card-body card-img-top">
        <img src=${curso.imagen} width="250" height="250">
        <h5 class="text-uppercase m-2">${curso.nombre}</h5>
        <p> ${curso.descripcion}</p>
        <p> Duración: ${curso.duracion} horas</p>
        <b> Precio: $${curso.precio}</b>
        <button class="boton mt-3" id="btn${curso.id}">Agregar al Carrito</button>
       `);


        //Efecto slideDown para las cards
        $(`#card${curso.id}`).slideDown(2500);

        //Efecto hover para las cards
        $(`#card${curso.id}`).hover(function(){
                $(`#card${curso.id}`).css("background-color", "#C3C3C3");
                }, function(){
                    $(`#card${curso.id}`).css("background-color", "#76323f");
                });

        //Evento para cada boton
        $(`#btn${curso.id}`).on('click', function() {

            //Mostrar icono carrito
            $("#carrito").show();
            
            //Agregar el objeto al carrito y envío el objeto a localstorage
            if(localStorage.getItem('carrito') === null){
                carrito.push({ id:`${curso.id}`, nombre:`${curso.nombre}`, precio:`${curso.precio}`})
                localStorage.setItem('carrito', JSON.stringify(carrito))
        }else{ 
            let productosEnLocalStorage = JSON.parse(localStorage.getItem('carrito'));
            productosEnLocalStorage.push({ id:`${curso.id}`, nombre:`${curso.nombre}`, precio:`${curso.precio}`});
            localStorage.setItem('carrito', JSON.stringify(productosEnLocalStorage))
        }           

            contador()
            console.log(carrito)

            //Mensaje de confirmacion 
            Swal.fire(
            'Producto añadido al carrito',
            '',
            'success'
        );})
    }
}


//FUNCION ORDENAR PRODUCTOS DE ACUERDO A SELECCION
const ordenar = () => {
    let seleccion = $("#miSeleccion").val();
   console.log(seleccion);
    if (seleccion == "menor") {
        cursos.sort(function(a, b) {
            return a.precio - b.precio;
        });
    } else if (seleccion == "mayor") {
        cursos.sort(function(a, b) {
            return b.precio - a.precio;
        });
    }else if(seleccion == "duracion") {
        cursos.sort(function(a, b) {
            return a.duracion - b.duracion;
        });
    }
    $(".card").remove();
    renderizarProductos();
}

//FUNCION MOSTRAR CANTIDAD DE PRODUCTOS DEL CARRITO
const contador = ()=> {
    const items=document.getElementById("contador");
    items.innerHTML=localStorage.getItem("carrito") ? (JSON.parse(localStorage.getItem("carrito"))).length : "0";
 }

