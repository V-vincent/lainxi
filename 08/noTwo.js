/**
 * Created by Administrator on 2017/10/12.
 */
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
