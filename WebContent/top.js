var imgwidth,imgheight,titlelength,per;

var an=function(){
	titlelength=$(".viewtitle").length;
	imgwidth=$("#img").width();
	if(imgwidth>640){
		imgheight=imgwidth/8*5;
		per=imgwidth/titlelength-1;
		$("#viewtitles").css("white-space","nowrap");
		$("#view").css("height","90%");
		$(".viewphoto").css("height","90%");
	}else{
		imgheight=imgwidth/4*3+2;
		per=imgwidth;
		$("#viewtitles").css("white-space","normal");
		$("#view").css("height","70%");
		$(".viewphoto").css("height","70%");
	}
	
	$(".viewtitle").css("width",per+"px");
	$(".viewtitle:eq(2)").css("width",(per+1)+"px");
	$("#img").css("height",imgheight+"px");	
	$(".viewtitle").css("line-height",$(".viewtitle").height()+"px");
	console.log("a");
}
an();

	
$(window).resize(function() {
	console.log('resized');
	an();    
});
