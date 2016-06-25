/*
  Para crear un plugin debemos cerar una funcion que cuelgue de $.fn
  De esta forma queda disponible para cualquier elemento de jQuery.
  
  Este plugin se reemplaza el link de detalle por un boton que abre una nueva ventana.
  
  
*/

$.fn.botonDetalle = function(){
  var btn = $('<button>ver mas</button>'); //Creo el btn usando html
  //este this trae el contexto de catalog item data
  var link = this.find('.detalle'); //Busco el link
  
  btn.click(mostrarDetalle); //Me suscribo al evento click
  
  link.hide(); //Oculto el link
  
  //le agrego al padre el boton el padre seria catalog item data
  this.append(btn); //Agrego el boton al DOM
    
  function mostrarDetalle(){
    //this hace referencia al boton q llamo a esta funcion
    var url = $(this).parent().find('.detalle').attr('href'); //Busco la url desde el padre
    window.open(url);
  }

}