var photos=document.getElementsByClassName("viewphoto");
var i;
var active=1;
function load(){
	TimeoutID=setTimeout("viewphoto(2)",2000);
}
function viewphoto(photonumber){
	i=photonumber;
	if(active===i)return;
	clearTimeout(TimeoutID);
	photo=document.getElementById("viewphoto"+active);
	nextphoto=document.getElementById("viewphoto"+i);
	photo.style.opacity=0;
	photo.style.zIndex=0;
	nextphoto.style.zIndex=1;
	nextphoto.style.opacity=1;
	active=i;
	i++;
	if(i>photos.length)i=1;
	TimeoutID=setTimeout("viewphoto(i)",2000);
}