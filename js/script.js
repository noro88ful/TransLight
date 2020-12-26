$('.wrapper').addClass('loaded')

// Burger menu animation

$('.icon-menu').click(function(e){
	$(this).toggleClass('_active')
	$('.menu__body').toggleClass('_active')
	if ($(this).hasClass('_active')) {
		$('.header').css('background-color','rgba(0, 91, 193, 0.8)')
		$('body').data('scroll',$(window).scrollTop())
	} 
	$('body').toggleClass('lock')
	if (!$(this).hasClass('_active')) {
		$('.header').css('background-color','rgba(0, 91, 193, 0.6)')
		$('body,html').scrollTop(parseInt($('body').data('scroll')))
	} 
})

//2 PARTS IMAGE + TEXT

function ibg(){
	$.each($('._ibg'), function (){
		if ($(this).find('img').length>0) {
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")')
		}
	})
}
ibg()

$(window).resize(function(){
	mainblock()
})

function mainblock(){
	var h = $(window).outerHeight()
	$('.mainblock').css('minHeight',h);
}
mainblock()

$(window).scroll(function(){
	var s = 0-$(this).scrollTop()/5;
	$('.mainblock__image').css('transform','translate3d(0,'+s+'px,0)')

	var scroll = $(window).scrollTop();
	if (scroll > 0) {
		$(".header").addClass("scrolled");
	} else {
		$(".header").removeClass("scrolled");
	}
})

$('.goto').click(function(){
	let target = $(this).attr('href')
	target = '.'+target.slice(1)
	$('html,body').animate({ scrollTop: $(`${target}`).offset()['top'] }, 1000);
	return false; 
});

/*Tabs==========================================================*/

let Tabs = document.querySelectorAll("._tabs")
if(Tabs.length>0){
	$('._tabs-item').click(function(){
		$('._tabs-item').removeClass('_active')
		$(this).addClass('_active')
		var index= $(this).index()
		$.each($('._tabs-block'), function (){
			if ($(this).index()==index) {
				$('._tabs-block').not($(this)).hide()
				$(this).show()
			}
		})
	})
	$.each($('._tabs-item'), function (){
		if ($(this).hasClass("_active")) {
			var index= $(this).index()
			$.each($('._tabs-block'), function (){
				if ($(this).index()==index) {
					$('._tabs-block').not($(this)).hide()
				}
			})
		}
	})
}