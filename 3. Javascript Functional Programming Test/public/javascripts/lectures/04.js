
window.onload = function() {
    var btn1 = document.getElementById('btn1');
    btn1.onclick = function() {
        alert('123')
    };

    var aDiv = document.getElementsByTagName ('div');
    // aDiv[1].style.background ='red'
    for (let i=0;i<4;i++){
        aDiv[i].style.background ='red';
    };

    var btn2 = document.getElementById('btn2');
    var oDiv7 = document.getElementById ('div2');
    var aCh = oDiv7.getElementsByTagName('input');
    btn2.onclick = function () {
        for (let i=0;i<aCh.length; i++){
          aCh[i].checked = true;  
        }
    };
    var btn3 = document.getElementById('btn3');
    btn3.onclick = function () {
        for (let i=0;i<aCh.length; i++){
          aCh[i].checked = false;  
        }
    };
    var btn4 = document.getElementById('btn4');
    
    btn4.onclick = function () {
        for (let i=0;i<aCh.length; i++) {
            if(aCh[i].checked == true){
            aCh[i].checked = false;  
            } else {
                aCh[i].checked = true;   
            }
        }
    };
}
