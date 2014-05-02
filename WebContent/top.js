var imgwidth,imgheight,titlelength,per,a,buttonwidth;

function an(){
	titlelength=$(".viewtitle").length;
	imgwidth=$("#img").width();
	if(imgwidth>640){
		imgheight=imgwidth/8*5;
		per=imgwidth/titlelength-5;
		$("#viewtitles").css("white-space","nowrap");
		$("#view").css("height","90%");
		$(".viewphoto").css("height","90%");
                $(".viewtitle").height(imgheight/10-2);
	}else{
		imgheight=imgwidth/4*3+2;
		per=imgwidth-4;
		$("#viewtitles").css("white-space","normal");
		$("#view").css("height","70%");
		$(".viewphoto").css("height","70%");
                $(".viewtitle").height(imgheight/10-2);
	}
	
	$(".viewtitle").css("width",per+"px");
	$(".viewtitle:eq(2)").css("width",(per+1)+"px");
	$("#img").css("height",imgheight+"px");	
	$(".viewtitle").css("line-height",$(".viewtitle").height()+"px");
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
      buttonwidth=imgwidth/36*5;
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
      buttonwidth=imgwidth/32*5;
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
      buttonwidth=imgwidth/24*5;
  }
}
an();
block();
$("#view1").css("color","#444");
$("#view1").css("background-color","#f9f9f9");
$(".viewphoto:not(#viewphoto1)").fadeOut(0);
$(window).resize(function() {
	an();
        block();
});
var k=1,l=0,timerview,timeview=8000;
function time(){
    if(k<4&&k>0){
        $(".viewtitle").css("color","#f9f9f9");
        $(".viewtitle").css("background-color","#444");
        k++;
        if(k===4)k=1;
        $(".viewphoto:not(#viewphoto"+k+")").fadeOut(800);
        $("#viewphoto"+k).fadeIn(800);
        $("#view"+k).css("color","#444");
        $("#view"+k).css("background-color","#f9f9f9");
        timerview=setTimeout('time()',timeview);
    }
}
timerview=setTimeout('time()',timeview);
function view(obj){
    if(l===0){
    l=1;
    $(".viewtitle").css("color","#f9f9f9");
    $(".viewtitle").css("background-color","#444");
    $(obj).css("color","#444");
    $(obj).css("background-color","#f9f9f9");
    var objid=$(obj).attr("id");
    if(objid==="view1"){
        clearTimeout(timerview);
        $(".viewphoto:not(#viewphoto1)").fadeOut(800);
        $("#viewphoto1").fadeIn(800,function(){l=0;});
        k=1;
        timerview=setTimeout('time()',timeview);
    }
    if(objid==="view2"){
        clearTimeout(timerview);
        $(".viewphoto:not(#viewphoto2)").fadeOut(800);
        $("#viewphoto2").fadeIn(800,function(){l=0;});
        k=2;
        timerview=setTimeout('time()',timeview);
    }
    if(objid==="view3"){
        clearTimeout(timerview);
        $(".viewphoto:not(#viewphoto3)").fadeOut(800);
        $("#viewphoto3").fadeIn(800,function(){l=0;});
        k=3;
        timerview=setTimeout('time()',timeview);
    }}
}
$(".metro").mousedown(function(){
    $(this).find(".buttonicon").width(buttonwidth-10);
    $(this).find(".buttonicon").height(buttonwidth-10);
    console.log('b');
});
$(".metro").mouseup(function(){
    $(this).find(".buttonicon").width(buttonwidth);
    $(this).find(".buttonicon").height(buttonwidth);
});
