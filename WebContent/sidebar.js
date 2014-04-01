var totyu="0"; //連続クリックによるバグの修正
$(".secmenu").css("display","none");
$("#navi").click(function(){
	if(totyu!=="0")return;
	totyu="1";
	if($("#sidebar").width()===100){
		$("#sidebar").animate({width:'184px'},{duration:'slow',queue: false}).animate({height:'204px'},{duration:'slow',complete: function(){$("#sidebar").css("height","auto");totyu="0";}});
	}else{
		$(".secmenu:lt(8)").slideUp(420);
		$(".secmenu:gt(8)").slideUp(420);
		$("#sidebar").animate({width:'100px'},{duration:'slow',queue: false}).animate({height:'34px'},{duration:'slow',complete: function(){totyu="0";}});
	}
	return;
});
$("#one").click(function(){
	if(totyu!=="0")return;
	totyu="1";
	if("none"===$("#onetwo").css("display")){
		$("#oneone").css("display","none");
		$("#onetwo").css("display","block");
	}else{
		$("#oneone").css("display","block");
		$("#onetwo").css("display","none");
	}
	$(".secmenu:lt(8)").slideToggle(500,function() {
		totyu="0";
	  });
	return;
});
$("#two").click(function(){
	if(totyu!=="0")return;
	totyu="1";
	if("none"===$("#twotwo").css("display")){
		$("#twoone").css("display","none");
		$("#twotwo").css("display","block");
	}else{
		$("#twoone").css("display","block");
		$("#twotwo").css("display","none");
	}
	$(".secmenu:gt(8)").slideToggle(500,function() {
		totyu="0";
	  });
	return;
});
