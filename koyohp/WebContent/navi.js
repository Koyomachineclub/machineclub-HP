$(function() {
	$("li.hoge").hover(function(){
	$("ul",this).css("display","block");
	},
	function(){
	$("ul",this).css("display","none");
	}
	);
});
