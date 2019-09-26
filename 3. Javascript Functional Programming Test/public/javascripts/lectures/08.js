function show () {
  var oDate2 = new Date();
  let a = oDate2.getFullYear();
  console.log(a);  
}
function toDouble(n){
  if(n<10) { return '0'+n}
  else { return ''+n};
}
// setInterval(show,5000); //重复弹出窗口
// setTimeout(show,1000); //只弹出一次窗口
// function clock () {
//   var oDate = new Date();
//   var str =toDouble(oDate.getHours())+toDouble(oDate.getMinutes())+toDouble(oDate.getSeconds());  
//   for (var i = 0; i < aImg.length; i++) {
//     aImg[i].src = '/images/'+str[i]+'.jpg';
//   }
// };

window.onload = function () {
  var oBtn1 = document.getElementById('btn1');
  var oBtn2 = document.getElementById('btn2');
  var timer1 = null;

  oBtn1.onclick = function () {
    timer1 = setInterval(function () {
      // alert('a');
    },3000);
  }
  oBtn2.onclick = function () {
    clearInterval(timer1)
  }

  var oDiv1 = document.getElementById('div1')
  var aImg = oDiv1.getElementsByTagName('img');
  function clock () {
    var oDate1 = new Date();
    var str =toDouble(oDate1.getHours())+toDouble(oDate1.getMinutes())+toDouble(oDate1.getSeconds());  
    //getFullYear() 获得当前年
    //getFullYear() 获得当前月
    //getFullYear() 获得当前日 正常显示 1-31
    //getFullYear() 获得当前星期 0 是星期天， 6 是星期六 range 0-6
    for (let i = 0; i < aImg.length; i++) {
      aImg[i].src = '/images/'+str.charAt(i)+'.jpg';
    }
  };
  setInterval(clock,1000);
  clock();

  var oDiv2 = document.getElementById('div2');
  var oDiv3 = document.getElementById('div3');
  var timer2 = null;

  oDiv3.onmouseover = oDiv2.onmouseover = function () {
    clearTimeout(timer2);
    oDiv3.style.display = 'block';
  };
  
  oDiv3.onmouseout =  oDiv2.onmouseout = function () {
    timer2 = setTimeout(function () {
       oDiv3.style.display = 'none';
    }, 2000);
  };
  // oDiv3.onmouseover = function () {
  //   clearTimeout(timer2);
  // };
  // oDiv3.onmouseout = function () {
  //   timer2 = setTimeout(function () {
  //     oDiv3.style.display = 'none';
  //   }, 2000);
  // }


















}
