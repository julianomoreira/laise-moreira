// Disclaimer
$(function(){
		$(".disclaimer-trigger").click(function(e){
			e.preventDefault();
			$('.disclaimer-is-hidden').toggle(100, function(){
					if ($(this).is(":visible")) {
						$(".disclaimer-trigger").text("read less");
					} else {
						$(".disclaimer-trigger").text("read more");
					}
			});
		});
});

// Main Navigation
$(function(){

	var $body = $('body');
	var $menu = $(".mainNav--menuBtn");
  var $nav = $('.mainNav');

	$(".mainNav--menuBtn").click(function(){
		//$nav.fadeIn(150);
		$body.addClass('is-open');		
    //$nav.addClass('animated slideInDown');

		// $nav.show();
	});
	$(".mainNav--menuBtn-close").click(function(){
		//$nav.fadeIn(150);

    $body.removeClass('is-open');
    //$nav.removeClass('animated slideInDown');
		// $nav.show();
	});
  $(".menu").hover(function(){
    //$(this).addClass('animated pulse');
  });
});
