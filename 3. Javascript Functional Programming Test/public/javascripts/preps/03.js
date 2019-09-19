   //1.初始值给与型别是一个好习惯
var name = "mike";
var age = 15;
var fruit = [];
var friends = {};//便于自己后期查看，尤其是团队合作的时候

//JS 是一个弱识别的语言
function CheckNumber (num) {
    if (num === 60) return alter("pass");//2.使用三个等于确认型别与数字
    console.log( "not pass!" );

}

var arr = [1,2,34,4,3,26,100,200,300,400,500];
var newArr = [];
    for (let i =0; i < arr.length; i++){
        if (arr[i]<100){
            newArr.push(arr[i]);
        }
    }
var newArr2  = arr.filter(function(item){
    return item<100
})


function change1(){
    var newArr1 = arr.slice(0);//5. 修改信息时添加slice(0),不修改原资料
    newArr1.push("9")
    return newArr1;
}

function change2(){
    var newArr2 = arr.slice(0);
    newArr2.push("5")
    return newArr2; //
}

var box1 = change1(arr);
var box2 = change2(arr);
console.log('box:', box1);
console.log('box:', box2);
console.log('box:', arr);

window.onload = function() {
    var input = document.getElementById("Name");
    var submit = document.getElementById("submit");

    submit.addEventListener("click", function(){
        if(input.value === "") return   alert('can not input empty value'); //3.if else 可以用 return 代替
        console.log("ajax");
    })

    var title = document.getElementById("title");
    title.classList.add("blue");

    var h1click = document.getElementById("h1click"); //4.不要在JS 里面直接修改样式， 最好在CSS 里面，另外jQuery 适用于网页操作
    var title = document.getElementById("title");     //然而手机上jQuery的效能并
    h1click.addEventListener("click", function(){
        title.classList.add("down");
    })

}
