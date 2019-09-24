window onload = function() {
  var oTx1 = document.getElementById('tx1');
  var oTx2 = document.getElementById('tx2');
  var oBtn = document.getElementById('btn1');

  oBtn.onclick = function() {
    alert (oTx1.value + oTx2.value)
  };
}