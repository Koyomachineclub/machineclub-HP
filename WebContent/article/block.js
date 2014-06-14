
function block(){
    console.log("testtest");
    var imgwidth=$("body").width();
  if(imgwidth===960){
      $(".size1").css("width",(imgwidth/3-2)+"px");
      $(".size2").css("width",(imgwidth/3*2-2)+"px");
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
      $(".twitter-timeline").width(imgwidth/2-2);
      $(".size2").css("float","none");
      $("#News,#buttons").css("float","left");
      $("#twitter").css("float","right");
      $("#twitter").css("display","none");
      
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
block();
$(window).resize(function() {
        block();
});