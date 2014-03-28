
function sidewidth(obj,towidth){
	var element=document.getElementById("sidebar")
    element.style.width="120px";
	}

function ExtractNum( str ){
    var num = new String( str ).match(/\d/g);
    num = num.join("");
    return num;
}
