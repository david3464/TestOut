window.onload = function () {
  var oUl1 = document.getElementById('ul1');
  // alert(oUl1.childNodes.length);
  // alert(oUl1.children.length);
     alert(oUl1.parentNode);
  //修改子节点
  for (let i =0 ; i < oUl1.children.length; i++) {
    oUl1.children[i].style.background = 'red';
    }; 
  // for (let i =0 ; i < oUl1.childNodes.length; i++) {
  //   alert(i + ', ' +oUl1.childNodes[i].nodeType);
  //   if(oUl1.childNodes[i].nodeType ===1) {
  //     oUl1.childNodes[i].style.background = 'red';
  //   }; 
    // alternative could be use children replace childnodes
  // }

}