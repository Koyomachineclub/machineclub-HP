$(".secmenu").css("display","none");
$(".primenu:eq(1)").click(function(){
	$(".secmenu:lt(8)").slideToggle(500);
});
$(".primenu:eq(2)").click(function(){
	$(".secmenu:gt(8)").slideToggle(500);
});
