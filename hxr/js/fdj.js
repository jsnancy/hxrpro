window.onload = function(){
    var preview = document.getElementById('preview');//获取中图可视区元素
    var big = document.getElementById('img-big');//获取大图显示div元素
    var bigImg = big.getElementsByTagName('img')[0];//大图Img元素
    var medium = document.getElementById('img-medium');//中图div元素
    var mediumImg = medium.getElementsByTagName('img')[0];//中图img元素
    var mark = document.getElementById('mark');//遮罩层元素
    var detail = document.getElementById('detail');

    medium.onmouseover = function(){
        mark.style.display = "block";
        big.style.display = "block";
    }
    medium.onmouseout = function(){
        mark.style.display = "none";
        big.style.display = "none";
    }

    medium.onmousemove = function(e){
        var e = e || window.event;
        var left = e.clientX - preview.offsetLeft-mark.offsetWidth/2-82;
        var top = e.clientY - preview.offsetTop-mark.offsetHeight/2-160;
        var markOffsetWidth = mark.offsetWidth;
        var mediumOffsetWidth = this.offsetWidth;
        //判断放大镜遮罩层溢出
        if(left<0){
            left = 0;
        }else if(left > mediumOffsetWidth - markOffsetWidth){
            left = mediumOffsetWidth - markOffsetWidth;
        }
        if(top<0){
            top = 0;
        }else if(top > mediumOffsetWidth - markOffsetWidth){
            top = mediumOffsetWidth - markOffsetWidth;
        }
        mark.style.left = left+'px';
        mark.style.top = top+'px';
        //计算大图随着遮罩层移动显示的百分比
        persentX = left/(mediumOffsetWidth - markOffsetWidth);
        persentY = top/(mediumOffsetWidth - markOffsetWidth);
        detail.style.left = -persentX*big.clientWidth+'px';
        detail.style.top = -persentY*big.clientHeight+'px';
    }
    //小图导航
    var imgItems = document.getElementById('img-items');
    var liNodes = imgItems.childNodes;
    var tmpNodes = [];
    //循环只保留li节点
    for(var i=0;i<liNodes.length;i++){
        if(liNodes[i].nodeType == 3) continue;
        tmpNodes.push(liNodes[i]);
    }
    var liNum = tmpNodes.length;//li节点总数
    var liWidth = parseInt(getCurrentStyle(tmpNodes[0])["width"]);//获取每个li的width值
    var liNo1 = tmpNodes[0].getElementsByTagName('img')[0];
        liNo1.style.border= "2px solid #e4393c";
        liNo1.style.width = "52px";
        liNo1.style.height = "52px";
        imgItems.style.width = liWidth*liNum+'px';
    //循环每个li导航节点绑定鼠标滑过事件
    for(var j=0;j<liNum;j++){
        tmpNodes[j].index = j;
        tmpNodes[j].onmouseover = function(){
            var img = this.getElementsByTagName('img')[0];
            img.style.border = "2px solid #e4393c";
            img.style.width = "52px";
            img.style.height = "52px";
            var _this = this;
            //判断取消li的兄弟节点的鼠标滑过样式
            for(var k=0;k<liNum;k++){
                if(k != _this.index){
                    var imgI = tmpNodes[k].getElementsByTagName('img')[0];
                    imgI.style.border = "none";
                    imgI.style.width = "54px";
                    imgI.style.height = "54px";     
                }
            }
            //获取大图总图替换大图中图src属性加载大图中图
            mediumImg.setAttribute('src',img.getAttribute('msrc'));
            bigImg.setAttribute('src',img.getAttribute('bsrc'));
        }

    }

    //导航左右按钮
    var totalWidth = liWidth*liNum;
    var mcount = liNum - 5;
    // alert(mcount);return;
    var now = 0;//小图左右移动计数器
    var lBtn = document.getElementById('left');
    var rBtn = document.getElementById('right');
    //小图标导航向左移动
    lBtn.onclick = function(){
        var timer = null;
        if(now == 0){
            now = 0;
        }else{                   
            now--;
            var timeId = setInterval(function(){
                imgItems.style.left = (parseInt(getCurrentStyle(imgItems)["left"])+1)+'px';
                if(parseInt(getCurrentStyle(imgItems)["left"]) > -now*liWidth){
                    clearInterval(timeId);
                }
            },10);
        }
    }
    //小图标导航向右移动
    rBtn.onclick = function(){
        if(now < mcount){
            now++;
            var timeId = setInterval(function(){
                imgItems.style.left = (parseInt(getCurrentStyle(imgItems)["left"])-1)+'px';
                if(parseInt(getCurrentStyle(imgItems)["left"]) < -now*liWidth){
                    clearInterval(timeId);
                }
            },10);
        }
    }
    //获取style样式兼容
    function getCurrentStyle(node) {
        return window.getComputedStyle ? window.getComputedStyle(node,null):node.correntStyle;
    }
}