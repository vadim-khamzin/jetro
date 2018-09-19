import $ from 'jquery';

$('.dropdown').on('click', function() {
	$('.menu').toggleClass('menu_dropped', 3000, "easeIn");
});