$(".secmenu").css("display","none");
$("#primenuone").click(function(){
	if("block"===$(".secmenu").css("display"))
		$(".secmenuone").slideUp("slow");
	else if("none"===$(".secmenu").css("display"))
		$(".secmenuone").slideDown("slow").css("display","block");
}
);
