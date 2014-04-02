var imgwidth,imgheight,titlelength,per;

var an=function(){
	titlelength=$(".viewtitle").length;
	imgwidth=$("#img").width();
	per=imgwidth/titlelength-1;
	$(".viewtitle").css("width",per+"px");
	$(".viewtitle:eq(2)").css("width",(per+1)+"px");
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
