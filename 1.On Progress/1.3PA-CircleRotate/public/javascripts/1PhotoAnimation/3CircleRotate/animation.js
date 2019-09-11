window.onload = function() { 
    var oImg = document.getElementsByTagName("img")
    var deg = 360 / oImg.length
    var length = oImg.length
    // document.getElementsByTagName("img").length 为图片放置个数
    // 然后我们要遍历到所有图片 简单来说就是访问一个数组或者集合中的元素 访问之后会做一些事情
    
    Array.prototype.forEach.call(oImg, function(ele, index, self){
        ele.style.transform = "rotateY("+deg*index+"deg) translateZ(350px)";
        ele.style.transition = "2s " + (length - index)*0.2 + "s";
        // 2s 后面需要保留一个空格，以便系统或者第二个数值
                      
    })

//


    
}
    
    