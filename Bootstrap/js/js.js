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
