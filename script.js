// Code goes here
$(document).ready(init);

function init(){
  $('#total').hide();
  var timeoutTotal = 500;
  var cantElementosMostrar = 5; 

  //Evento click
  $("#buscar").click(buscarDatos);
  
  function buscarDatos(){
    $('#total').hide();
    $('#resultado').empty();
    
    $.ajax({
      url : 'https://api.mercadolibre.com/sites/MLA/search?q='+$("#txt").val(),
    }).done(recibirDatos);
  }
  
  function recibirDatos(data){
    $('#totalNum').html(data.paging.total);
    $('#totalMostrar').html(cantElementosMostrar);
    $('#total').fadeIn(timeoutTotal);
    
    for(var i = 1; i <= cantElementosMostrar; i++ ){
      dibujarArticulo(data.results[i]);
    }
    //Llamamos al puglin del script js
    $('.catalog__item__data').botonDetalle(); //Llamada al plugin
  }
  
  function dibujarArticulo(art){
    var contenedor = $('#resultado');
    var articulo_main = $('<article class="catalog__item"></article>');
    var articulo_data = $('<div class="catalog__item__data"></div>');
    var imagen = $('<img src='+ art.thumbnail +'/>');
    var titulo = $('<h4>'+ art.title +'</h4>');
    var precio = $('<p>$'+ art.price +'</p>');
    var link = $('<p><a class="detalle" href='+ art.permalink +'>Ver Detalle</a></p>');
    
    articulo_main.append(imagen);
    articulo_data.append(titulo);
    articulo_data.append(precio);
    articulo_data.append(link);
    articulo_main.append(articulo_data);
    contenedor.append(articulo_main);
  }
  
}
