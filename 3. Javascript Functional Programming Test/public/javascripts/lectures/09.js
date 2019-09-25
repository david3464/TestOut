//offset Left/Right/Width/Height 获取物体的实际左边距，右边距，宽度，高度


window.onload = function () {
const oDiv2 = document.getElementById('div2');
const oUl1 = oDiv2.getElementsByTagName('ul')[0];
const oLi1 = oUl1.getElementsByTagName('li'); 
const oA1 = document.getElementById('a1');
const oA2 = document.getElementById('a2');

var speed = 2
oUl1.innerHTML += oUl1.innerHTML;
oUl1.style.width = oLi1[0].offsetWidth*oLi1.length + 'px';
function move() {
  if(oUl1.offsetLeft<-oUl1.offsetWidth/2){
    oUl1.style.left='0';
  }
  if(oUl1.offsetLeft>0){
    oUl1.style.left= -oUl1.offsetWidth/2+ 'px';
  }
  oUl1.style.left = oUl1.offsetLeft + speed + 'px';
}

  var timer1 = setInterval(move,30);
  oDiv2.onmouseover = function () {
    clearInterval(timer1)
  };
  oDiv2.onmouseout = function () {
    timer1 = setInterval(move,30);
  };
  oA1.onclick = function () {speed *= -1 }
  oA2.onclick = function () {speed *= 1 }

}