$(document).ready( function() {
	var links = $('.nav-link').map(function(index) {
		return this.id;
	});

	console.log(links);

	var boldCurrent = function(currLink) {
		links.forEach( function(link) {
			$('#'.concat(link)).css('color', '#081A08');
		});

		$(currLink).css('color', '#421518');
	};

	$('.nav-link').click(function() {
		var linkId = '#'.concat(this.id);

		boldCurrent(linkId);
	});

	$('#surprise').click(function() {
		if ($('#me').attr('src') === 'img/headshot.jpg') {
			$('#me').attr('src', 'img/bear.gif');
		} else {
			$('#me').attr('src', 'img/headshot.jpg');
		}
	});

	$('#name').on({
		mouseenter: function() {
			$('#name').html('shay-na');
			$('#name').css('font-style', 'italic');
		},
		mouseleave: function() {
			$('#name').html('Shana');
			$('#name').css('font-style', '');
		}

	})
});