window.onload = function () {
  var oBtn1 = document.getElementById('btn1');
  var oUl1 = document.getElementById('ul1');
  var oTxt = document.getElementById('txt1')
  oBtn1.onclick = function () {
    var oLi = document.createElement('li');
    oLi.innerHTML = oTxt.value;
    oUl1.appendChild(oLi);

  };
}