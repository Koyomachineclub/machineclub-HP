var imgwidth,imgheight,titlelength,per,a;

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
      $(".twitter-timeline").width(imgwidth/3-2);
      $(".size2").css("float","left");
      $(".size1").css("float","right");
      $("#twitter").css("display","inline-block");
      
      $("#buttons").css("float","left");
      $("#buttons").width(imgwidth/3*2);
      $(".metro").width(imgwidth/9*2);
      $(".metro").height(imgwidth/9*2);
      $(".buttonicon").width(imgwidth/36*5);
      $(".buttonicon").height(imgwidth/36*5);
  }else if(imgwidth>=640){
      $(".size1").css("width",(imgwidth/2-2)+"px");
      $(".size2").css("width",(imgwidth-2)+"px");
      $(".size3").css("width",(imgwidth-2)+"px");
      $(".twitter-timeline").width(imgwidth/2-2);
      $(".size2").css("float","none");
      $("#News,#buttons").css("float","left");
      $("#twitter").css("float","right");
      $("#twitter").css("display","inline-block");
      
      $("#buttons").width(imgwidth/2);
      $("#buttons").css("float","left");
      $(".metro").width(imgwidth/4);
      $(".metro").height(imgwidth/4);
      $(".buttonicon").width(imgwidth/32*5);
      $(".buttonicon").height(imgwidth/32*5);
  }else{
      $(".size1").css("width",(imgwidth-2)+"px");
      $(".size2").css("width",(imgwidth-2)+"px");
      $(".size3").css("width",(imgwidth-2)+"px");
      $(".size1").css("float","none");
      $("#twitter").css("display","none");
      $(".twitter-timeline").width(imgwidth-2);
      
      $("#buttons").width(imgwidth);
      $("#buttons").css("float","none");
      $(".metro").width(imgwidth/3);
      $(".metro").height(imgwidth/3);
      $(".buttonicon").width(imgwidth/24*5);
      $(".buttonicon").height(imgwidth/24*5);
  }
}
an();
block();
	
$(window).resize(function() {
	console.log('resized');
	an();
        block();
});
