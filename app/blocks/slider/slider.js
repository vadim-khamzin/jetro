import $ from 'jquery';
import 'slick-carousel';

$('.slider-wrapper__slides').slick({
	prevArrow: '.slider-wrapper__button_prev',
	nextArrow: '.slider-wrapper__button_next',
});

$('.slider-thumbnails__item').on('click', function(e) {
	e.preventDefault();
	$('.slider-wrapper__slides').slick('slickGoTo', $(this).index());
});