$(document).ready(function(){
	$(window).scroll(function(){
		console.log("5");
		if($(window).scrollTop()>=50) {
			$('.header-fixed').addClass('scrolled');
		} else {
			$('.header-fixed').removeClass('scrolled');
		}
	})
})