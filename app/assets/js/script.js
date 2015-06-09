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
});

// prepare the form when the DOM is ready
$(document).ready(function() {
    // bind form using ajaxForm
    $('#contact-form').ajaxForm({
        // target identifies the element(s) to update with the server response
        target: '#form-response',
				console.log(success);
        // success identifies the function to invoke when the server response
        // has been received; here we apply a fade-in effect to the new content
        success: function() {
						//$('.formText').hide();
            $('#form-response').fadeIn('slow');
        }
    });
});

// $(document).ready(function() {
// 	$('#contact-form').ajaxForm(function(data) {
// 	    if(data.success === true)
// 	    {
// 	        $("#modal-action").hide();
// 	        $("#modal-reaction").show();
// 	    }
//
// 	    if(data.success === false)
// 	    {
// 	        //$(".form-error-holder").html("<label class='error'>"+data.errors.join(', ')+"</label><input type='text' class='error' /><small class='error'>Invalid entry</small>");
//
// 	        $.each(data.errors, function(i, item)
// 	        {
// 	            $(".form-error-holder").append("<small class='error'>"+i+": "+item+"</small>");
// 	        });
// 	    }
// 	});
// });
