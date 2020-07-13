$(document).ready(function(){
	// плавное перемещение страницы к нужному блоку
	$("nav div a").on("click", function(e) {
    e.preventDefault();
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: (destination-60)}, 800);
	});
});
