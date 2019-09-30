window.onload = function () {
  var oBtn1 = document.getElementById('btn1');
  var oUl1 = document.getElementById('ul1');
  var oTxt = document.getElementById('txt1')
  oBtn1.onclick = function () {
    var oLi = document.createElement('li');
    oLi.innerHTML = oTxt.value;
    if(aLi.length > 0) {
      oUl1.insertBefore(oLi, oLi[0]);
    } else {
      oUl1.appendChild(oLi);
    }
    
  };
}