$('._slick1').slick({
	slidesToShow: 2,
	slidesToScroll: 2,
	arrows: false,
	dots: false,
	infinite: false,
	responsive:[
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
	],
	// adaptiveHeight: true,
	// waitForAnimate: false,
})

$('.head-content-block__arrow_prev').click(function(){
	$('._slick1').slick('slickPrev')
})

$('.head-content-block__arrow_next').click(function(e){
	$('._slick1').slick('slickNext')
})

/*==============================================================================================================================================================================*/

$('._slick2').slick({
	slidesToShow: 1,
	arrows: false,
	dots: false,
	infinite: false,
	// adaptiveHeight: true,
	// waitForAnimate: false,
})

$('.head-about-rent__arrow_prev').click(function(){
	$('._slick2').slick('slickPrev')
})

$('.head-about-rent__arrow_next').click(function(e){
	$('._slick2').slick('slickNext')
})