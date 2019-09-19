function skin1() {
    var ol = document.getElementById('l1');
    ol.href = '/stylesheets/css1.css';
}

function skin2() {
    var ol = document.getElementById('l1');
    ol.href = '/stylesheets/css2.css';
}

function setText() {
    var oTx1 = document.getElementById('text1');
    oTx1.value = 'abcdef';
}

function showHide() {
    var oDiv = document.getElementById('div1');
    if (oDiv.style.display == 'block') {
        oDiv.style.display = 'none';
    } else {
        oDiv.style.display = 'block';
    }    
}
function toRed() {
    var oDiv = document.getElementById('div2');
    oDiv.className='box'
}

