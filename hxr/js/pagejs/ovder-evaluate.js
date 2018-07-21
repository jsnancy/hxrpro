var vm = new Vue({
    el: '#app',
    data: {
        sp:[
            {
                tit:'峥嵘 原创设计 传统日常汉服男绣花唐制圆领袍春秋非古装 峥嵘 原创设计 传统日常汉服男绣花唐制圆领袍春秋非古装',
                jg:'18.00',
                xl:'1122221',
                hp:'185222',
                hpl:'',
                scr:'./img/temp/M-001.jpg',
                col:'深棕色',
                cm:'均码'
            }
        ],
        srpj:'',
        left:[
            {url:'#',text:'网站代销'},
            {url:'#',text:'帮助中心'}
        ],
        right:[
            {url:'#',text:'积分平台'},
            {url:'#',text:'我的订单'},
            {url:'#',text:'我的U袋'},
            // {url:'#',text:'注册'},
            // {url:'#',text:'登录'}
        ],
        one:[
            {url:'introduction.html',text:'企业简介'},
            {url:'join-U.html',text:'加入U袋'},
            {url:'privacy.html',text:'隐私说明'}
        ],
        two:[
            {url:'udai_welcome6.html',text:'售后服务'},
            {url:'psfw.html',text:'配送服务'},
            {url:'yhxy.html',text:'用户协议'},
            {url:'cjwt.html',text:'常见问题'}
        ],
        three:[
            {url:'agent.html',text:'如何成为代理商'},
            {url:'sales.html',text:'代销商上架教程'},
            {url:'distributor.html',text:'分销商常见问题'},
            {url:'payment.html',text:'付款账户'}
        ],
        copy:[
            {url:'#',text:'网店代销'},
            {url:'#',text:'U袋学堂'},
            {url:'#',text:'联系我们'},
            {url:'introduction.html',text:'企业简介'},
            {url:'agent.html',text:'新手上路'}
        ]
    },
    methods: {
        
    },
    mounted:function() {
        for(let i = 0;i<this.sp.length;i++){
            this.sp[i].hpl = ((this.sp[i].hp/this.sp[i].xl)/0.01).toFixed(2)+'%';
            if(this.sp[i].xl>=10000){
                this.sp[i].xl=(this.sp[i].xl/10000).toFixed(0)+'万+';
                
            }
            if(this.sp[i].hp>=10000){
                this.sp[i].hp=(this.sp[i].hp/10000).toFixed(0)+'万+';
            }
        }
    }
})
// 转换千分位
function thousandBitSeparator(num) {
    num=num+'';//数字转字符串
    var str="";//字符串累加
    for(var i=num.length- 1,j=1;i>=0;i--,j++){
        if(j%3==0 && i!=0){//每隔三位加逗号，过滤正好在第一个数字的情况
            str+=num[i]+",";//加千分位逗号
            continue;
        }
        str+=num[i];//倒着累加数字
    }
    return str.split('').reverse().join("");//字符串=>数组=>反转=>字符串
}


// 点击单选框换色
$('input:radio').eq(0).prop("checked",true);
if($('input:radio').eq(0).prop("checked")==true){
    $("label").eq(0).addClass("colora")
}
for(let i = 0;i<$('input:radio').length;i++){
    $("label").eq(i).click(function(){
        for(let j = 0;j<$('input:radio').length;j++){
            $("label").eq(j).removeClass("colora")
        }
        $("label").eq(i).addClass("colora")
    })
}
var arr = [];
// 上传图片显示
$(document).ready(function () {
    $("#file").change(function () {
        var fil = this.files;
        if($('#dd').children().length>=5){
            alert('最多上传5张图片哦！')
            return;
        }else{
            for (var i = 0; i < fil.length; i++) {
                reads(fil[i]);
                // console.log(arr);
            }
        }
    });
});
function reads(fil){
    var reader = new FileReader();
    reader.readAsDataURL(fil);
    reader.onload = function(){
        document.getElementById("dd").innerHTML += "<div class='pos fl'><img src='"+reader.result+"'>"+"<i class='buacha'>x</i></div>";
        arr.push(reader.result)
        for(let i = 0;i<$('.pos').length;i++){
            $('.pos').eq(i).children('i').click(function(){
                $('.pos').eq(i).remove();
                arr.slice(i,1);
                console.log(arr);
            })
            $('.pos').eq(i).children('img').click(function(){
                $('#block').css({display:'block'});
                $('#block').children('img').prop("src",arr[i])
            })
        }
    };
}
$('.close').click(function(){
    $('#block').css({display:'none'})
})