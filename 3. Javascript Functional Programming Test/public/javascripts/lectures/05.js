window.onload = function() {
  var oDiv1 = document.getElementById('div1');
  var oBtn = oDiv1.getElementsByTagName('input');
  var aDiv1 = oDiv1.getElementsByTagName('div');
//Part One 
  for(let i = 0; i <oBtn.length; i++) {
    oBtn[i].index = i;
    oBtn[i].onmouseover = function(){
    // alert(this.value);
      console.log(i);
      for(let j = 0; j <oBtn.length; j++) {
        oBtn[j].className = '', 
        aDiv1[j].style.display = 'none'
        console.log(j)
      }
      this.className = 'active';
      // alert(this.index);
      aDiv1[this.index].style.display = 'block';
    };
  };
//Part Two
  var oTxt1 = document.getElementById('text1');
  var oBtn1 = document.getElementById('btn1')
  var oDiv2 = document.getElementById('div2')
  oBtn1.onclick = function(){
    oDiv2.innerHTML = oTxt1.value;
  }

  var oDiv3 = document.getElementById('div3');
  var aLi = oDiv3.getElementsByTagName('li');
  var aDiv2 = oDiv3.getElementsByTagName('div')[0];
//Part Three
  for(let i = 0; i < aLi.length; i) {
    aLi[i].onmouseover = function() {
      this.className = "active";
    }
  }


}