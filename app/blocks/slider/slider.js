import $ from 'jquery';
import 'slick-carousel';

$('.slider__slides').slick({
	prevArrow: '.slider__button_prev',
	nextArrow: '.slider__button_next',
});

$('.thumbnails__item').on('click', function() {
	$('.slider__slides').slick('slickGoTo', $(this).index());
});