var imgwidth,imgheight,titlelength,per;

function an(){
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
function block(){
  if(imgwidth===960){
      $(".size1").css("width",(imgwidth/3-2)+"px");
      $(".size2").css("width",(imgwidth/3*2-2)+"px");
      $(".size3").css("width",(imgwidth-2)+"px");
      $("#twitter-widget-0").width(imgwidth/3-2);
      $(".size2").css("float","left");
      $(".size1").css("float","right");
  }else if(imgwidth>=640){
      $(".size1").css("width",(imgwidth/2-3)+"px");
      $(".size2").css("width",(imgwidth-2)+"px");
      $(".size3").css("width",(imgwidth-2)+"px");
      $("#twitter-widget-0").width(imgwidth/2-3);
      $(".size2").css("float","none");
      $(".size1:nth-child(odd)").css("float","right");
      $(".size1:nth-child(even)").css("float","left");
  }else{
      $(".size1").css("width",(imgwidth-2)+"px");
      $(".size2").css("width",(imgwidth-2)+"px");
      $(".size3").css("width",(imgwidth-2)+"px");
      $("#twitter-widget-0").width(imgwidth-2);
  }
}
an();
block();
	
$(window).resize(function() {
	console.log('resized');
	an();
        block();
});
