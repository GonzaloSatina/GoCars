function calcularPaginas(total) {
  return parseInt( Math.ceil( total / 30 ));
}


// Crear el generador
function *crearPaginacion(total) {
  console.log(total);
  for( let i = 1; i <= total; i++) {
      yield i;
  }
}

function direccionPaginacion(e) {
  if(e.target.classList.contains('siguiente')) {

      paginaActual= Number( e.target.dataset.pagina);
      buscarImagenes();
      formulario.scrollIntoView();
  }
}