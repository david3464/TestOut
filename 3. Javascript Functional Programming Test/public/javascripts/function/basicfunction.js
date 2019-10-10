function myFunction()
{
	var age,voteable;
	age=document.getElementById("age").value;
	voteable=(age<18)?"年龄太小":"年龄已达到";
	document.getElementById("demo").innerHTML=voteable;
}
{/* <p>点击按钮检测年龄。</p>
年龄:<input id="age" value="18" />
<p>是否达到投票年龄?</p>
<button onclick="myFunction()">点击按钮</button>
<p id="demo"></p> */}

function myFunction(){
	var x="";
	var time=new Date().getHours();
	if (time<20){
		x="Good day";
    }
	document.getElementById("demo").innerHTML=x;
}
{/* <p>如果时间早于 20:00，会获得问候 "Good day"。</p>
<button onclick="myFunction()">点击这里</button>
<p id="demo"></p>  */}

function myFunction(){
  var d=new Date().getDay(); 
  switch (d) 
  { 
    case 0:x="今天是星期日"; 
    break; 
    case 1:x="今天是星期一"; 
    break; 
    case 2:x="今天是星期二"; 
    break; 
    case 3:x="今天是星期三"; 
    break; 
    case 4:x="今天是星期四"; 
    break; 
    case 5:x="今天是星期五"; 
    break; 
    case 6:x="今天是星期六"; 
    break; 
  }
  document.getElementById("demo").innerHTML=x;
}
{/* <p id="demo"></p> */}

function myFunction(){
	var x;
	var txt="";
	var person={fname:"Bill",lname:"Gates",age:56}; 
	for (x in person){
		txt=txt + " " + person[x];
	}
	document.getElementById("demo").innerHTML=txt;
}
{/* <p>点击下面的按钮，循环遍历对象 "person" 的属性。</p>
<button onclick="myFunction()">点击这里</button>
<p id="demo"></p> */}

function myFunction(){
	var x="",i=0;
	while (i<5){
		x=x + "该数字为 " + i + "<br>";
		i++;
	}
	document.getElementById("demo").innerHTML=x;
}
{/* <p>点击下面的按钮，只要 i 小于 5 就一直循环代码块。</p>
<button onclick="myFunction()">点击这里</button>
<p id="demo"></p> */}

function myFunction(){
	var x="",i=0;
	for (i=0;i<10;i++){
		if (i==3){
    			break;
			}
    	x=x + "该数字为 " + i + "<br>";
    }
	document.getElementById("demo").innerHTML=x;
}
{/* <p>点击按钮，测试带有 break 语句的循环。</p>
<button onclick="myFunction()">点击这里</button>
<p id="demo"></p> */}

function myFunction(){
	var x="",i=0;
	for (i=0;i<10;i++){
  		if (i==3){
    		continue;
    	}
		x=x + "该数字为 " + i + "<br>";
  	}
	document.getElementById("demo").innerHTML=x;
}
{/* <p>点击下面的按钮来执行循环，该循环会跳过 i=3 的步进。</p>
<button onclick="myFunction()">点击这里</button>
<p id="demo"></p> */}

function myFunction(){
  var txt="";
    try {
      adddlert("Welcome guest!");
    }
    catch(err) {
      txt="本页有一个错误。\n\n";
      txt+="错误描述：" + err.message + "\n\n";
      txt+="点击确定继续。\n\n";
      alert(txt);
    }
}
{/* <input type="button" value="查看消息" onclick="myFunction()" /> */}

function myFunction() {
  var message, x;
  message = document.getElementById("p01");
  message.innerHTML = "";
  x = document.getElementById("demo").value;
  try { 
    if(x == "") throw "值是空的";
    if(isNaN(x)) throw "值不是一个数字";
    x = Number(x);
    if(x > 10) throw "太大";
    if(x < 5) throw "太小";
  }
  catch(err) {
    message.innerHTML = "错误: " + err + ".";
  }
  finally {
    document.getElementById("demo").value = "";
  }
}
{/* <p>不管输入是否正确，输入框都会再输入后清空。</p>
<p>请输入 5 ~ 10 之间的数字：</p>
<input id="demo" type="text">
<button type="button" onclick="myFunction()">点我</button>
<p id="p01"></p> */}

// var myObject;
// function myFunction(a, b) {
//     return a * b;
// }
// myObject = myFunction.call(myObject, 10, 2);    
// document.getElementById("demo").innerHTML = myObject; 
{/* <p id="demo"></p> */}

// var myObject, myArray;
// function myFunction(a, b) {
//     return a * b;
// }
// myArray = [10, 2]
// myObject = myFunction.apply(myObject, myArray);     
// document.getElementById("demo").innerHTML = myObject; 
{/* <p id="demo"></p> */}

function myFunction(){
	var x=document.getElementById("fname");
	x.value=x.value.toUpperCase();
}
// 输入你的名字: <input type="text" id="fname" onchange="myFunction()">
// <p>当你离开输入框后，函数将被触发，将小写字母转为大写字母。</p>

window.onload = function () {
    function mOver(obj){
    obj.innerHTML="Thank You"
  }
  function mOut(obj){
    obj.innerHTML="Mouse Over Me"
  }

// <div onmouseover="mOver(this)" onmouseout="mOut(this)" style="background-color:#D94A38;width:120px;height:20px;padding:40px;">Mouse Over Me</div>
}
