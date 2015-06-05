// Disclaimer
$(function(){
	var $trigger = $('.overlay-trigger');
	$trigger.click(function(e){
		e.preventDefault();
		$('.overlayBackground').addClass('overlay-is-visible');
	});
	var $closeOverlay = $('.icon-close-x');
	$closeOverlay.click(function(){
		$('.overlayBackground').removeClass('overlay-is-visible');
	});
	$('#contact-form').ajaxForm({
    target: '#form-response',
    success: function() {
        $('#contact-form').hide();
        $('#form-response').fadeIn('slow');
    }
	});
});
