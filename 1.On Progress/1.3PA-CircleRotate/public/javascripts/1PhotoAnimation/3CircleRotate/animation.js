window.onload = function() { 
    var oImg = document.getElementsByTagName("img")
    var deg = 360 / oImg.length
    var length = oImg.length
    var oWrap = document.getElementById("wrap")
    // document.getElementsByTagName("img").length 为图片放置个数
    // 然后我们要遍历到所有图片 简单来说就是访问一个数组或者集合中的元素 访问之后会做一些事情
    
    Array.prototype.forEach.call(oImg, function(ele, index, self){
        ele.style.transform = "rotateY("+deg*index+"deg) translateZ(350px)";
        ele.style.transition = "2s " + (length - index)*0.2 + "s";
        // 2s 后面需要保留一个空格，以便系统或者第二个数值
                      
    })

//1.拖拽
    // 鼠标滑过页面 相册旋转 改变的是什么值 Wrap相册的
    // transform rotateX & Y 的值
    // 产生在移动鼠标的过程中
    // 按下鼠标不松开 拖动的移动轨迹 计算
    // 当松开就停止计算

    //鼠标点击事件
    var newX, newY, lastX, lastY, minusX, minusY, rotX=-20, rotY=0
    document.onmousedown = (e)=>{
        //第一次旧的值产生于第一次点击的时候
        lastX = e.clientX;
        lastY = e.clientY;
        // console.log("点击");
        this.onmousemove = (e)=> {
            //鼠标移动事件
            // console.log("移动");
            //每一次移动 相册旋转多少 答案 两次鼠标移动位置的差值 就是移动的距离
            //新的位置-原始位置 =差值
            // console.log(e)
            newX = e.clientX; 
            newY = e.clientY;
            // console.log(e.clientX, e.clientY)
            //假设 求出上一次位置
            minusX = newX - lastX;
            minusY = newY - lastY;

            rotX -= minusY*0.2;
            rotY += minusX*0.1;

            oWrap.style.transform = "rotateX("+rotX+"deg) rotateY("+rotY+"deg)"
            //新的位置值用完之后 就变旧的值
            lastX = newX;
            lastY = newY;
            
        }    
        this.onmouseup = (e)=> {
            //鼠标松开事件
            this.onmousemove = null;
            //清除鼠标移动轨迹事件
            // console.log("松开");
        }   
    }

    
}
    
    