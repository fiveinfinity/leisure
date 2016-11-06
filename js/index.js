$(document).ready(function(){
	$('#products').hide();
	$('#about').hide();
	$('#privacy').hide();
	$('#terms').hide();
	$('#returns').hide();
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

				if ($(window).width() >= 700) {
					$('#hr-top').fadeIn('slow');
					$('#hr-bottom').fadeIn('slow');
				}
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
	$('#privacy-link').click(function(e) {
			e.preventDefault();
			var active = getActiveDiv();

				$(active).fadeOut('slow', function() {
					$('#privacy').fadeIn('slow').addClass('active');
				}).removeClass('active');

				if ($(window).width() >= 700) {
					$('#hr-top').fadeIn('slow');
					$('#hr-bottom').fadeIn('slow');
				}
	});
	$('#terms-link').click(function(e) {
			e.preventDefault();
			var active = getActiveDiv();

				$(active).fadeOut('slow', function() {
					$('#terms').fadeIn('slow').addClass('active');
				}).removeClass('active');

				if ($(window).width() >= 700) {
					$('#hr-top').fadeIn('slow');
					$('#hr-bottom').fadeIn('slow');
				}
	});
	$('#returns-link').click(function(e) {
			e.preventDefault();
			var active = getActiveDiv();

				$(active).fadeOut('slow', function() {
					$('#returns').fadeIn('slow').addClass('active');
				}).removeClass('active');

				if ($(window).width() >= 700) {
					$('#hr-top').fadeIn('slow');
					$('#hr-bottom').fadeIn('slow');
				}
	});
});

function getActiveDiv() {
	if ($('#welcome').hasClass('active')) {
		return '#welcome';
	} else if ($('#products').hasClass('active')) {
		return '#products';
	} else if ($('#about').hasClass('active')) {
		return '#about';
	} else if ($('#privacy').hasClass('active')) {
		return '#privacy';
	} else if ($('#terms').hasClass('active')) {
		return '#terms';
	} else if ($('#returns').hasClass('active')) {
		return '#returns';
	} else {
		console.log('no active class! Error!');
	}
}
