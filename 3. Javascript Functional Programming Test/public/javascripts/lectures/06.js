window.onload = function() {
  var oTx1 = document.getElementById('txt1');
  var oTx2 = document.getElementById('txt2');
  var oBtn = document.getElementById('btn1');

  oBtn.onclick = function() {
    console.log(oTx1.value);
    console.log(oTx2.value);
    alert(oTx1.value + oTx2.value);
  };

  var aLi = document.getElementsByTagName('li')
  for (let i = 0; i <aLi.length; i++){
    if (i%2 == 0) {
      aLi[i].style.background = "#CCC";
    } else {
      aLi[i].style.background = "";
    }
  }

  // for(var i = 0; i <5; i++){
  //   if(i ===2){
  //     continue;
  //   }
  //   alert(i)
  // }
}