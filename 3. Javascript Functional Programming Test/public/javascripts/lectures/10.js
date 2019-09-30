var  JSElement=document.createElement("script"); 
JSElement.setAttribute("type","text/javascript");
JSElement.setAttribute("src","/javascripts/function.js");
document.head.appendChild(JSElement);
// var newscript = document.createElement('script');
// newscript.setAttribute('type','text/javascript');
// newscript.setAttribute('src','/javascripts/function.js');
// var head = document.getElementsByTagName('head')[0];
// head.appendChild(newscript);


window.onload = function () {
  var oUl1 = document.getElementById('ul1');
  // alert(oUl1.childNodes.length);
  // alert(oUl1.children.length);
  //  alert(oUl1.parentNode);
  //修改子节点
  for (let i =0 ; i < oUl1.children.length; i++) {
    oUl1.children[i].style.background = 'red';
    }; 
  // for (let i =0 ; i < oUl1.childNodes.length; i++) {
  //   // alert(i + ', ' +oUl1.childNodes[i].nodeType);
  //   if(oUl1.childNodes[i].nodeType ===1) {
  //     oUl1.childNodes[i].style.background = 'red';
  //   }; 
  //   // alternative could be use children replace child nodes
  // }

  var aA1s = document.getElementsByTagName('a');
  for (let i = 0; i < aA1s.length; i++) {
    aA1s[i].onclick = function () {
      this.parentNode.style.display = 'none';
    };
  };

  oUl1.firstElementChild.style.background = "blue";

  var oTxt1 = document.getElementById('txt1');
  var oBtn1 = document.getElementById('btn1');

  oBtn1.onclick = function () {
    // oTxt1.value = "test1";
    // oTxt1['value'] = "test2";
    oTxt1.setAttribute('value','123');
  }

  var oUl2 = document.getElementById('ul2');
  var aBox = getByClass(oUl2, 'box');
  for (var i = 0; i < aBox.length; i++) {
    aBox[i].style.background = 'red';
  }




}