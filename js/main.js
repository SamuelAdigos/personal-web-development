
/******************************************************************************************************************************
Animación mostrada al cargar la página web.
******************************************************************************************************************************/
$(window).load(function(){
	$('#precarga').fadeOut('slow',function(){$(this).remove();});
});


/******************************************************************************************************************************
Scroll de la página al darle a "Leer más"
*******************************************************************************************************************************/
$(function() {
    $('scroll-pagina').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

/******************************************************************************************************************************
Menu
*******************************************************************************************************************************/ 
(function() {

	var elementoBody = document.body,
		btnAberto = document.getElementById( 'menu-boton-abierto' ),
		estaAberto = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		btnAberto.addEventListener( 'click', activarMenu );
	}

	function activarMenu() {
		if( estaAberto ) {
			classie.remove( elementoBody, 'mostrar-menu' );
		}
		else {
			classie.add( elementoBody, 'mostrar-menu' );
		}
		estaAberto = !estaAberto;
	}

	init();

})();

/******************************************************************************************************************************
Formulario de contacto
*******************************************************************************************************************************/ 
$(".botonpresuposto").click(function() {
	botonpresuposto();
})

function botonpresuposto() {
	// Para comprobar el mail con una expresión regular.
	var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;

	// Si valida con la expresión regular, carga los divs ocultos, sino, avisa por alert.
	if (regex.test($('#formularioEmail').val().trim())) {
	   	$(".barra-carga").css("animationName", "enviada");
		setTimeout(function() {
			$(".label-1").css("display", "none");
			$(".label-2").css("display", "none");
			$(".input-correo").css("display", "none");
			$(".input-mensaxe").css("display", "none");
			$(".botonpresuposto").css("display", "none");

			$(".mensaxeenviada").css("display", "inline");
			$(".cerrarcontacto").css("display", "inline");
		}, 1500);
	} else {
	    alert('La dirección de correo non é válida.');
	}
}

// Cuando le den al botón de cerrar, vuelve al formulario de contacto.
$(".cerrarcontacto").click(function() {
	$(".barra-carga").css("animationName", "none");
	$(".label-1").css("display", "inline");
	$(".label-2").css("display", "inline");
	$(".input-correo").css("display", "inline");
	$(".input-mensaxe").css("display", "inline");
	$(".botonpresuposto").css("display", "inline");

	$(".mensaxeenviada").css("display", "none");
	$(".cerrarcontacto").css("display", "none");
	
	$(".input-correo").val("");
	$(".input-mensaxe").val("");
})
