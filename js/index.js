$(document).ready(function(){
	$('#products').hide();
	$('#about').hide();
	$('#hr-top').hide();
	$('#hr-bottom').hide();

	$('#welcome-link').click(function(e) {
			e.preventDefault();
			var active = getActiveDiv();

				$(active).fadeOut('slow', function() {
					$('#welcome').fadeIn('slow').addClass('active');
				}).removeClass('active');

				//If coming from PRODUCTS page, HR's need to be removed
				$('#hr-top').fadeOut('slow');
				$('#hr-bottom').fadeOut('slow');
	});

	$('#products-link').click(function(e) {
			e.preventDefault();
			var active = getActiveDiv();

				$(active).fadeOut('slow', function() {
					$('#products').fadeIn('slow').addClass('active');
				}).removeClass('active');

				$('#hr-top').fadeIn('slow');
				$('#hr-bottom').fadeIn('slow');
	});

	$('#about-link').click(function(e) {
			e.preventDefault();
			var active = getActiveDiv();

				$(active).fadeOut('slow', function() {
					$('#about').fadeIn('slow').addClass('active');
				}).removeClass('active');

				//If coming from PRODUCTS page, HR's need to be removed
				$('#hr-top').fadeOut('slow');
				$('#hr-bottom').fadeOut('slow');
	});
});

function getActiveDiv() {
	if ($('#welcome').hasClass('active')) {
		return '#welcome';
	} else if ($('#products').hasClass('active')) {
		return '#products';
	} else if ($('#about').hasClass('active')) {
		return '#about';
	} else {
		console.log('no active class! Error!');
	}
}
