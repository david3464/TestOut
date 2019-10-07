//移动到指定位置
let timer1 = null;
function StartMove() {
 let oDiv1 = document.getElementById('div1');
 clearInterval(timer1);
 timer1 = setInterval(function() {
   let speed = 1;
   if(oDiv1.offsetLeft >= 500){
     clearInterval(timer1);
   } else {
    oDiv1.style.left = oDiv1.offsetLeft + speed + 'px';
   }
 },30)
};

//显示隐藏内容
let timer2 = null;
function StartMoving(iTargetPos) {
  let oDiv2 = document.getElementById('div2');
  let speed = 5;
  if(oDiv2.offsetLeft>iTargetPos){
    speed *= -1;
  } else {
    speed *= 1;
  }
  clearInterval(timer2);
  timer2 = setInterval(function() {
    if(oDiv2.offsetLeft == iTargetPos) {
      clearInterval(timer2);
    } else {
      oDiv2.style.left = oDiv2.offsetLeft + speed + 'px';
    }
  },30)
}

//改变透明度
let timer3 = null;
let TransDeg =10;
function ChangeTransparency (iPercentage){
  let oDiv3 = document.getElementById('div3');
  clearInterval(timer3);
  timer3 = setInterval(function(){
    let speed = 3; 
    if(TransDeg<iPercentage) { 
      speed *= 1;
    } else {
      speed *= -1;
    }
    if (TransDeg == iPercentage) {
      clearInterval(timer3);
    } else {
      TransDeg +=speed;
      oDiv3.style.filter = 'alpha(opacity='+TransDeg+')';
      oDiv3.style.opacity = TransDeg/100;
    }
  },30);
}

//缓冲运动
function StartToMove() {
  setInterval(function() {
    var oDiv4 = document.getElementById('div4');
    var speed = (300 - oDiv4.offsetLeft)/10;
    speed > 0 ? speed = Math.ceil(speed) : speed = Math.floor(speed);
    document.title = oDiv4.offsetLeft;

    oDiv4.style.left = oDiv4.offsetLeft + speed + 'px';
  },30)
}



window.onload = function() {
  let oBtn1 = document.getElementById('btn1');
  oBtn1.onclick = function() {
    StartMove()
  }

  let oDiv2 = document.getElementById('div2');
  oDiv2.onmouseover = function () {
    StartMoving(0);
  };
  oDiv2.onmouseout = function () {
    StartMoving(-150);
  }

  let oDiv3 = document.getElementById('div3');
  oDiv3.onmouseover = function () {
    ChangeTransparency(100);
  }
  oDiv3.onmouseout = function () {
    ChangeTransparency(10);
  }

  let oDiv4 = document.getElementById('div4');
  oDiv4.onmouseover = function () {
    StartToMove()
  }
};

