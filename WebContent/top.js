var imgwidth,imgheight,titlelength,per;

var an=function(){
	titlelength=$(".viewtitle").length;
	per=100/titlelength;
	$(".viewtitle").css("width",per+"%");
	imgwidth=$("#img").width();
	imgheight=imgwidth/8*5;
	$("#img").css("height",imgheight+"px");	
	$(".viewtitle").css("line-height",$(".viewtitle").height()+"px");
	console.log("a");
}
an();

	
$(window).resize(function() {
	console.log('resized');
	an();    
});
