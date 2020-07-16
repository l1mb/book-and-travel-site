$(document).ready(function(){
	// плавное перемещение страницы к нужному блоку
	$("nav div a").on("click", function(e) {
    e.preventDefault();
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: (destination-60)}, 800);
	});
	$(window).scroll(function(){
	if ($(this).scrollTop() > 100) {
	$('.scrollup').fadeIn();
	} else {
	$('.scrollup').fadeOut();
	}
	});

	$('.scrollup').click(function(){
	$("html, body").animate({ scrollTop: 0 }, 800);
	return false;
	});
});




jQuery(function($){
	$('.date').mask('99/99/9999');
	$('.phone').mask('+9 (999) 999-9999');
	$('.phoneext').mask("(999) 999-9999? x99999");
	$(".tin").mask("99-9999999");
	$(".ssn").mask("999-99-9999");
	$(".product").mask("a*-999-a999");
	$(".eyescript").mask("~9.99 ~9.99 999");
});
