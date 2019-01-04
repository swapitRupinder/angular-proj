// JavaScript Document

$(document).ready(function(){

	// hide #back-top first
	$(".new").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('.new').fadeIn();
			} else {
				$('.new').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('.new').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

});