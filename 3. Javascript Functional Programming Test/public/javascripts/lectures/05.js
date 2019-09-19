window.onload = function() {
  var oDiv = document.getElementById('div1');
  var oBtn = oDiv.getElementsByTagName('input');
  var oDiv1 = oDiv.getElementsByTagName('div');

  for(let i = 0; i <oBtn.length; i++) {
    oBtn[i].index = i;
    oBtn[i].onclick = function(){
    // alert(this.value);
      console.log(i);
      for(let j = 0; j <oBtn.length; j++) {
        oBtn[j].className = '', 
        oDiv1[j].style.display = 'none'
        console.log(j)
      }
      this.className = 'active';
      // alert(this.index);
      oDiv1[this.index].style.display = 'block';
    };
  };







}