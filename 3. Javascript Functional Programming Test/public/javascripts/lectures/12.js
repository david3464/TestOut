window.onload = function(){
  var oTab1 = document.getElementById('tab1');
  // alert(oTab1.getElementsByTagName('tbody')[0].getElementsByTagName('tr')[1].getElementsByTagName('td')[1].innerHTML)
  // alert(oTab1.tBodies[0].rows[1].cells[1].innerHTML)
  var oBtn1 = document.getElementById('btn1');
  var oName1 = document.getElementById('name1');
  var oAge1 = document.getElementById('age1');
  var Id1 = oTab1.tBodies[0].rows.length+1;

  for (let i = 0; i <oTab1.tBodies[0].rows.length; i++) { 
    oTab1.tBodies[0].rows[i].onmouseover = function () {
      oldColor = this.style.background;
      this.style.background = 'green';
    };
    oTab1.tBodies[0].rows[i].onmouseout = function () {
      this.style.background = oldColor;
    }
    if(i%2) {
      oTab1.tBodies[0].rows[i].style.background = '#CCC';
    } else {
      oTab1.tBodies[0].rows[i].style.background = '';
    }
  }

  oBtn1.onclick = function () {
    var oTr = document.createElement('tr');
    var oTd = document.createElement('td');
    oTd.innerHTML = Id1++;
    oTr.appendChild(oTd);

    var oTd = document.createElement('td');
    oTd.innerHTML = oName1.value;
    oTr.appendChild(oTd);

    var oTd = document.createElement('td');
    oTd.innerHTML = oAge1.value;
    oTr.appendChild(oTd);

    var oTd = document.createElement('td');
    oTd.innerHTML = '<a href="javascript:;">delete</a>';
    oTr.appendChild(oTd);

    oTd.getElementsByTagName('a')[0].onclick = function () {
      oTab1.tBodies[0].removeChild(this.parentNode.parentNode);
    }

    oTab1.tBodies[0].appendChild(oTr);
  };

  var oBtn2 = document.getElementById('btn2');
  var oName2 = document.getElementById('name2');
  oBtn2.onclick = function () {
    for (let i = 0; i<oTab1.tBodies[0].rows.length; i++) {
      let sTab = oTab1.tBodies[0].rows[i].cells[1].innerHTML.toLowerCase();
      let sTxt = oName2.value.toLowerCase();
      let arr = sTxt.split('');
          oTab1.tBodies[0].rows[i].style.background = ' ';
      for (let j = 0; j < arr.length; j++) {
        if(sTab.search(arr[j])!=-1) {
          oTab1.tBodies[0].rows[i].style.background = 'red';
        } 
      }
    }
  };

  var oBtn3 = document.getElementById('btn3');
  oBtn3.onclick = function () {
    var arr = [];
    for (let i = 0; i <oTab1.tBodies[0].rows.length; i++){
      arr[i] = oTab1.tBodies[0].rows[i]; 
    }
    arr.sort(function(tr1, tr2){
      var n1 = parseInt(tr1.cells[0].innerHTML);
      var n2 = parseInt(tr2.cells[0].innerHTML);
      return n1 - n2;
    });
    for (let i = 0; i < arr.length; i++){
      oTab1.tBodies[0].appendChild(arr[i]);
    }
  }

}
