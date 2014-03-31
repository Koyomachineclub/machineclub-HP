$(".secmenu").css("display","none");
$("#one").click(function(){
	$(".secmenu:lt(8)").slideToggle(500);
});
$("#two").click(function(){
	$(".secmenu:gt(8)").slideToggle(500);
});
