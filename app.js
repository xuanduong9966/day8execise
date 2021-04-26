console.log(document);
//bai 1
const div1 = document.getElementById("div1");
const click1 = document.getElementById("click1");




let count1=0;
click1.onclick=function(){
    count1++;
    if(count1%2!=0)
    {
        div1.style.opacity="0";
    }
    else{
        div1.style.opacity="100%";
    }
    
}

//bai2
const div2 = document.getElementById("div2");
const click2 = document.getElementById("click2");
click2.onclick= function(){
    let r = Math.floor((Math.random() * 255) + 0);
    let g = Math.floor((Math.random() * 255) + 0);
    let b = Math.floor((Math.random() * 255) + 0);
    let rgb=("rgb(" + r.toString()+","+ g.toString()+","+b.toString()+")");
    div2.style.backgroundColor=rgb;
}


//bai3
const div3 = document.getElementById("div3");
const div31 = document.getElementById("div31");
div3.innerText="Nội dung trên";
div31.innerText="Nội dung dưới";

const click3=document.getElementById("click3");
click3.onclick= function(){
    let str = div3.textContent;
    div3.innerText=div31.textContent;
    div31.innerText=str;
}


//bai4
const click4 = document.getElementById("click4");
const div4 = document.getElementById("div4");
let defaultSize=14;
click4.onclick = function(){
    defaultSize++;
    let fs = (defaultSize.toString() +"px");
    div4.style.fontSize=fs;
}


