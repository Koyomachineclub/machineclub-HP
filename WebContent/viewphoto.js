var photos=document.getElementsByClassName("viewphoto");
var i;
function load(){
	TimeoutID=setTimeout("viewphoto(1)",8000);
}
function viewphoto(photonumber){
	//
	i=photonumber
	clearTimeout(TimeoutID);
	photo=document.getElementById("viewphoto"+i);
	i++;
	if(i>photos.length)i=1;
	nextphoto=document.getElementById("viewphoto"+i);
	photo.style.opacity=0;
	photo.style.zIndex=0;
	nextphoto.style.zIndex=1;
	nextphoto.style.opacity=1;
	TimeoutID=setTimeout("viewphoto(i)",8000);
}