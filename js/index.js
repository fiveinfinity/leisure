var ids = ['#welcome', '#products', '#about', '#privacy', '#terms', '#returns'];

$(document).ready(function(){
	// Doesn't hide welcome page
	for (var i = 1; i < ids.length; i++) {
       $(ids[i]).hide();
  }

	$('*[id*=-link]').on('click', function(e) {
		e.preventDefault();
		var target = '#' + $(e.currentTarget).attr('id').slice(0, -5);
		var active = '#' + $('.jumbotron .active').attr('id');

			$(active).fadeOut('slow', function() {
				$(target).fadeIn('slow').addClass('active');
			}).removeClass('active');

			//If coming from PRODUCTS page, HR's need to be removed
			if (i === '#welcome' || i === '#about') {
				$('#hr-top').fadeOut('slow');
				$('#hr-bottom').fadeOut('slow');
			} else {
				if ($(window).width() >= 700) {
					$('#hr-top').fadeIn('slow');
					$('#hr-bottom').fadeIn('slow');
				}
			}
	});

	// Below allows for a delay on mouseoff - LV only
	if ($(window).width() >= 700) {
		$('.newsletter').hoverIntent({
	    over: function() {$('.newsletter .newsletter-content').css('display', 'block')},
	    out: function() {$('.newsletter .newsletter-content').css('display', 'none')},
	    timeout: 1000
		});

		$('.legalese').hoverIntent({
	    over: function() {$('.legalese .legalese-content').css('display', 'block')},
	    out: function() {$('.legalese .legalese-content').css('display', 'none')},
	    timeout: 1000
		});
	}
});
