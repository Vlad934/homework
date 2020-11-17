$(document).ready(function(){
	$(".burger").click(function(event){
			$(".burger,.header__list").toggleClass("active");
			$("body").toggleClass("lock");
	});
});