//滚动条的垂直位置
function scroll(){
    if (document.documentElement.scrollTop){ //谷歌
        return {
            top:document.documentElement.scrollTop,
            left:document.documentElement.scrollLeft
        }
    }
    else{
        return {
            top:document.body.scrollTop,
            left:document.body.scrollLeft
        }
    }
}

//显示隐藏
function show(obj) {
    obj.style.display="block"
}
function hide(obj) {
    obj.style.display="none"
}

function $(ele, all) { //选择元素
    return all ? document.querySelectorAll(all) : document.querySelector(ele);
}

//获取宽度
function getWidth(){
    if (document.body.clientWidth||document.body.clientHeight){
        return {
            width:document.body.clientWidth,
            height:document.body.clientHeight
        }
    }
    else{
        return {
            width:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight
        }
    }
}

function animate(obj,json,fn){  //  目标点  盒子    属性
    clearInterval(obj.timer);
    obj.timer=setInterval(function () {
        var flag=true;
        for(var attr in json){ //attr 属性   json[attr] 目标点
            var current = parseFloat(getStyle(obj,attr));  //动谁的值

            //if (!current) obj.style[attr]="0px"; //空就是0 这里有个bug，不知道为什么。TMD不行

            speed = (json[attr] - current) / 10;
            speed=speed>0 ? Math.ceil(speed) : Math.floor(speed);

            if(attr == 'opacity'){ //不正常 属性
                obj.style[attr]=json[attr]; //直接附值
                obj.style.filter="alpha(opacity="+(json[attr]*100)+")"; //兼容IE
            }
            else if (attr == "zIndex"){
                obj.style[attr]=json[attr]; //直接附值
            }
            else{
                obj.style[attr]= current+ speed+"px"; //附值
            }
            if (json[attr] != current ){  //等所人到了
                flag=false;
            }
            /*if (!speed){
             //只要一个到了，把所人的定时间都关了
             clearInterval(obj.timer);
             }*/
        }
        if(flag){
            clearInterval(obj.timer);
            //console.log("到位置了，要它回去");
            //回调函数
            //最后执行  用于 ajax 数据请求....
            //你约一个女孩子出看电影，你约出来了，看完电影后，你送她回去，她不让，你就很担心，你会说
            //到家后给我打电话(回调)  说明 小伙子你有希望了
            if (fn){
                fn();
            }
        }
    },30)
}

function getStyle(obj,attr){
    if (obj.currentStyle){
        //IE
        return obj.currentStyle[attr];
    }
    else{
        return window.getComputedStyle(obj,null)[attr]
    }
}

