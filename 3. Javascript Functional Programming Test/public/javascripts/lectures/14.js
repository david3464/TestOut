var timer = null;
function startMove(iTarget) {
  var oDiv1 = document.getElementById('div1');
  clearInterval(timer);
  timer = setInterval(function() {
    var speed = (iTarget - oDiv.offsetTop)/6;
    speed = speed > 0 ? Math.ceil(speed):Math.floor(speed);
    if(oDiv1.offsetTop==iTarget){
      clearInterval(timer);
    } else {
      oDiv1.style.top = oDiv1.offsetTop + speed + 'px';
    }
  }, 30);
}


window.onscroll=function(){
  var oDiv1 = document.getElementById('div1');
  var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
  startMove(document.documentElement.scrollTop-oDiv1.offsetHeight + scrollTop + 'px');
}

setInterval(function)