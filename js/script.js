/******************************************************************************************************************************
Puntos de referencia
*******************************************************************************************************************************/ 

$(document).ready(function() {

	$('.ref1').waypoint(function() {
		$('.ref1').addClass('animacion fadeInLeft');
	}, {
		offset: '75%'
	});
	$('.ref2').waypoint(function() {
		$('.ref2').addClass('animacion fadeInUp');
	}, {
		offset: '75%'
	});
	$('.ref3').waypoint(function() {
		$('.ref3').addClass('animacion fadeInUp');
	}, {
		offset: '55%'
	});
	$('.ref4').waypoint(function() {
		$('.ref4').addClass('animacion fadeInDown');
	}, {
		offset: '75%'
	});
	$('.ref5').waypoint(function() {
		$('.ref5').addClass('animacion fadeInUp');
	}, {
		offset: '75%'
	});
	$('.ref6').waypoint(function() {
		$('.ref6').addClass('animacion fadeInDown');
	}, {
		offset: '75%'
	});

});

/******************************************************************************************************************************
Texto footer rainbow
*******************************************************************************************************************************/
$('.txt').html(function(i, html) {
  var chars = $.trim(html).split("");

  return '<span>' + chars.join('</span><span>') + '</span>';
});