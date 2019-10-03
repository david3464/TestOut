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

let timer2 = null;
function StartMove(iTargetPos) {
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

// function startMove2() {
//   let oDiv2 = document.getElementById('div2');
//   clearInterval(timer2);
//   speed = -10;
//   timer2 = setInterval(function() {
//     if(oDiv2.offsetLeft == -150) {
//       clearInterval(timer2);
//     } else {
//       oDiv2.style.left = oDiv2.offsetLeft + speed + 'px';
//     }
//   },30)
// }

function ChangeTransparency (){

}

window.onload = function() {
  var oDiv2 = document.getElementById('div2');
  oDiv2.onmouseover = function () {
    startMove(0);
  };
  oDiv2.onmouseout = function () {
    startMove(-150);
  }
};