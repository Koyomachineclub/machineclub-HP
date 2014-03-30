$(".secmenu").css("display","none");
$(".primenu:eq(1)").click(function(){
	if("block"===$(".secmenu").css("display"))
		$(".secmenu:lt(8)").slideUp("slow");
	else if("none"===$(".secmenu").css("display"))
		$(".secmenu:lt(8)").slideDown("slow").css("display","block");
});
