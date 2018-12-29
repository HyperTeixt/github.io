$(function(){
	$('#built-with, .modal-close').on('click',function(e){
		e.preventDefault();
		$('#built-with-modal').toggleClass('is-active');
	})
});

$(window).load(function(){
	$('#preloader').fadeOut();
});