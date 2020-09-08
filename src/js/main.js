let demo = document.querySelector("#demo");
let style = document.querySelector("#style")
let layout = document.querySelector(".layout")
let n = 0;
let string = `/*

你好，我是庞之明
接下来，我要展示自己的项目代码。

使用 css 来绘制一个太极图案

*/

#main, p{
    width: 50vw;
    height:50vw;
    border-radius:100%;
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);;
    margin: 0 auto;
}
#main p:first-child{
    width: 25vw;
    height:25vw;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
} 
#main p:nth-child(2){
    width: 25vw;
    height:25vw;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
} 
`

let replace = "";

function step (){

    // demo.innerHTML = string.substring(0,n);
    // replace“转义”替换空格和换行
    // replace += (string[n] === "\n") ?  "<br>" : string[n];
    if (string[n] === "\n") {
        replace += "<br>"
    }else if(string[n] === " "){
        replace += "&nbsp;"
    }else {replace += string[n];}
    demo.innerHTML = replace;
    style.innerHTML = string.substring(0,n);

    layout.scrollTo(0, 99999);
    window.scrollTo(0, 99999);

    // 运用setTimeout模拟间隔执行函数
    setTimeout(()=>{
        return n++ < string.length-1 ? step() : true
    },50)
};
step();