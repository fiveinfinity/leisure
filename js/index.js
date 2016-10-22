$(document).ready(function(){
	$('#products').hide();
	$('#about').hide();

	$('#welcome-link').click(function(e) {
			e.preventDefault();
			var active = getActiveDiv();

				$(active).fadeOut('slow', function() {
					$('#welcome').fadeIn('slow').addClass('active');
				}).removeClass('active');
	});

	$('#products-link').click(function(e) {
			e.preventDefault();
			var active = getActiveDiv();

				$(active).fadeOut('slow', function() {
					$('#products').fadeIn('slow').addClass('active');
				}).removeClass('active');
	});

	$('#about-link').click(function(e) {
			e.preventDefault();
			var active = getActiveDiv();

				$(active).fadeOut('slow', function() {
					$('#about').fadeIn('slow').addClass('active');
				}).removeClass('active');
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
