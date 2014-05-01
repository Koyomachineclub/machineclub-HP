/* Javascript for StyleSheet v1.0 */
/* Copyright(C) ASH (http://ash.jp/) */
/* スタイルの追加（変更） */
function addStyleRule(selector, declaration) {
	var isMSIE = /*@cc_on!@*/false;
	var sheet;

	if (document.styleSheets.length) {	// 最後のスタイルシートを取得
		sheet = document.styleSheets[document.styleSheets.length - 1];

	} else {	// StyleSheetがない場合、StyleSheetを作成
		if (isMSIE) {	// for IE8, Sleipnir
			sheet = document.createStyleSheet();

		} else {	// for FireFox, Opera, Safari, Crome
			var head = document.getElementsByTagName('head')[0];
			if (head === null) { return; }
			var style = document.createElement('style');
			head.appendChild(style);
			sheet = style.sheet;
		}
	}

	if (isMSIE) {	// for IE8, Sleipnir
		sheet.addRule(selector, declaration);
	} else {	// for FireFox, Opera, Safari, Crome
		sheet.insertRule(selector + '{' + declaration + '}', sheet.cssRules.length);
	}
}
var width=document.body.clientWidth;
if(width>$("#img").width())width=$("#img").width();
console.log(width);
  if(width===960){}else if(width>=640){
      addStyleRule(".size1", "width:"+(width/2-2)+";");
      console.log(width);
  }else{
      addStyleRule(".size1", "width:"+(width-2)+";");
      console.log(width);
  }
