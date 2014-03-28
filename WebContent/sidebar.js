function sidewidth(obj,towidth){
	obj.style.width=towidth;
	}

function ExtractNum( str ){
    var num = new String( str ).match(/\d/g);
    num = num.join("");
    return num;
}
