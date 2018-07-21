window.onscroll = function(){
    if($(document).scrollTop()>$(window).height()){
    $('.return a.return-top').css({'display':'block'})
    $('.return').css({'bottom':'10px'})
    }
    if($(document).scrollTop()==0){
    $('.return a.return-top').css({'display':'none'})
    $('.return').css({'bottom':'-35px'})
    }
} 
 // 千分位过滤器
 Vue.filter('muchAdd', function(value) {
    if(!value) return '0.00';
    var intPart = Number(value).toFixed(0); //获取整数部分
    var intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,'); //将整数部分逢三一断
    var floatPart = ".00"; //预定义小数部分
    var value2Array = value.split(".");
    //=2表示数据有小数位
    if(value2Array.length == 2) {
        floatPart = value2Array[1].toString(); //拿到小数部分
        if(floatPart.length == 1) { //补0,实际上用不着
            return intPartFormat + "." + floatPart + '0';
        } else {
            return intPartFormat + "." + floatPart;
        }
    } else {
        return intPartFormat + floatPart;
    }
})
layui.use('element', function(){
    var element = layui.element; //导航的hover效果、二级菜单等功能，需要依赖element模块

    //监听导航点击
    element.on('nav(demo)', function(elem){
        //console.log(elem)
        layer.msg(elem.text());
    });
});
layui.use(['laypage', 'layer'], function(){
var laypage = layui.laypage
,layer = layui.layer;
   //总页数低于页码总数
    laypage.render({
        elem: 'demo0'
        ,count: 200 //数据总数
    });
}) 

// 大于99
 Vue.filter('shopCartAdd',function(value){
    return value<=99?value:99+'+';
})
// 超过1万
Vue.filter('jifenAdd',function(value){
    if(value/10000>1){
        return (value/10000).toFixed(2)+"万+"
    }else{
        return value
    }
})
// 大于9999
Vue.filter('dayAdd',function(value){
    return value<=9999?value:9999+'+';
})
Vue.filter('dailiAdd',function(value){
    if(value/10000>1){
        return (value/10000).toFixed(2)+"万+"
    }else{
        return value
    }
})
// ****************************************************价钱过滤器****************************************
Vue.filter('money', function(val) {
    val = val.toString().replace(/\$|\,/g,'');
    if(isNaN(val)) {
        val = "0";
    }
    let sign = (val == (val = Math.abs(val)));
    val = Math.floor(val*100+0.50000000001);
    let cents = val%100;
    val = Math.floor(val/100).toString();
    if(cents<10) {
        cents = "0" + cents
    }
    if(val>10000){}
    for (var i = 0; i < Math.floor((val.length-(1+i))/3); i++) {
        val = val.substring(0,val.length-(4*i+3))+',' + val.substring(val.length-(4*i+3));
    }
    return (((sign)?'':'-') + val + '.' + cents);
})
Vue.filter('moneyy', function(val) {
    val = val.toString().replace(/\$|\,/g,'');
    if(isNaN(val)) {
        val = "0";
    }
    let sign = (val == (val = Math.abs(val)));
    val = Math.floor(val*100+0.50000000001);
    let cents = val%100;
    val = Math.floor(val/100).toString();
    if(cents<10) {
        cents = "0" + cents
    }
    if(val>10000){}
    for (var i = 0; i < Math.floor((val.length-(1+i))/3); i++) {
        val = val.substring(0,val.length-(4*i+3))+',' + val.substring(val.length-(4*i+3));
    }
    return (((sign)?'':'-') + val + '.' + cents);
})
//万过滤器 拼+，如果小于10000则正常显示
Vue.filter('number', function (value) {
    if(value<990000 && value/10000>1){
        return (value/10000).toFixed(1)+"万+"
    }else if(value>1000000){
        return ("100万+")
    }else{
        return value
    }
})
var vm = new Vue({
    el:'#box',
    data:{
        inx:[0,0,0,0],
        spzs:1000,
        
        udai:{
            shopCart:'0',
            tel:'18759808122',
            jifen:'30',
            day:'1',
            daili:'9527'
        },
// 头部
        left:[
            {url:'#',text:'网站代销'},
            {url:'cjwt.html',text:'帮助中心'}
        ],
        right:[
            {url:'udai_welcome3.html',text:'积分平台'},
            {url:'udai_order.html',text:'我的订单'},
            {url:'udai_order.html',text:'我的U袋'},
            {url:'login.html?name=zc',text:'注册'},
            {url:'login.html',text:'登录'}
        ],
        hot:[
            {url:'classify.html',text:'连衣裙'},
            {url:'classify.html',text:'衬衫'},
            {url:'classify.html',text:'裤'},
            {url:'classify.html',text:'T恤'},
            {url:'classify.html',text:'女包'},
            {url:'classify.html',text:'家居服'},
            {url:'classify.html',text:'2017新款'}
        ],
        list:[
            {url:'./index.html',text:'首页'},
            {url:'introduction.html',text:'企业简介'},
            {url:'agent.html',text:'新手上路'},
            {url:'#',text:'U袋学堂'},
            {url:'#',text:'企业账号'},
            {url:'#',text:'诚信合约'},
            {url:'#',text:'实时下架'},
        ],
// 底部
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
        ],
        clas:[
            {name:'销量',cla:'glyphicon glyphicon-arrow-down',claa:'glyphicon glyphicon-arrow-up',wl:true,flag:true},
            {name:'评价',cla:'glyphicon glyphicon-arrow-up',claa:'glyphicon glyphicon-arrow-down',wl:false,flag:true},
            {name:'价格',cla:'',wl:false,flag:true},
        ],
        clothing:[
            {name:'分类：',arr:['全部','上装','下装','裙装','内衣']},
            {name:'颜色：',arr:['全部','红色','粉红','蓝色','白色']},
            {name:'尺寸：',arr:['全部','L','M','S','X','XL','XXL','XXXL',]},
            {name:'价格：',arr:['全部','0-20','20-40','40-80','80-100','100-150','150以上']},
        ],
        shopAll:[
            {img:'./img/M-001.jpg',text:'锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',price:1958,zong:[{name:'销量',num:666666},{name:'人气',num:866666688},{name:'评论',num:1666666688}]},
            {img:'./img/S-001.jpg',text:'锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',price:18,zong:[{name:'销量',num:66666666},{name:'人气',num:888888},{name:'评论',num:1688888}]},
            {img:'./img/M-001.jpg',text:'锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',price:18,zong:[{name:'销量',num:666},{name:'人气',num:888},{name:'评论',num:1688}]},
            {img:'./img/S-001.jpg',text:'锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',price:18,zong:[{name:'销量',num:666},{name:'人气',num:888},{name:'评论',num:1688}]},
            {img:'./img/M-001.jpg',text:'锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',price:18,zong:[{name:'销量',num:666},{name:'人气',num:888},{name:'评论',num:1688}]},
            {img:'./img/S-001.jpg',text:'锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',price:18,zong:[{name:'销量',num:666},{name:'人气',num:888},{name:'评论',num:1688}]},
            {img:'./img/M-001.jpg',text:'锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',price:18,zong:[{name:'销量',num:666},{name:'人气',num:888},{name:'评论',num:1688}]},
            {img:'./img/S-001.jpg',text:'锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',price:18,zong:[{name:'销量',num:666},{name:'人气',num:888},{name:'评论',num:1688}]},
            {img:'./img/M-010.jpg',text:'锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',price:18,zong:[{name:'销量',num:666},{name:'人气',num:888},{name:'评论',num:1688}]},
            {img:'./img/M-001.jpg',text:'锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',price:18,zong:[{name:'销量',num:666},{name:'人气',num:888},{name:'评论',num:1688}]},
            {img:'./img/M-010.jpg',text:'锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',price:18,zong:[{name:'销量',num:666},{name:'人气',num:888},{name:'评论',num:1688}]},
            {img:'./img/M-001.jpg',text:'锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',price:18,zong:[{name:'销量',num:666},{name:'人气',num:888},{name:'评论',num:1688}]},
            {img:'./img/M-010.jpg',text:'锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',price:18,zong:[{name:'销量',num:666},{name:'人气',num:888},{name:'评论',num:1688}]},
            {img:'./img/M-001.jpg',text:'锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',price:18,zong:[{name:'销量',num:666},{name:'人气',num:888},{name:'评论',num:1688}]},
            {img:'./img/M-008.jpg',text:'锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',price:18,zong:[{name:'销量',num:666},{name:'人气',num:888},{name:'评论',num:1688}]},
            {img:'./img/M-001.jpg',text:'锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',price:18,zong:[{name:'销量',num:666},{name:'人气',num:888},{name:'评论',num:1688}]},
            {img:'./img/M-008.jpg',text:'锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',price:18,zong:[{name:'销量',num:666},{name:'人气',num:888},{name:'评论',num:1688}]},
            {img:'./img/M-001.jpg',text:'锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',price:18,zong:[{name:'销量',num:666},{name:'人气',num:888},{name:'评论',num:1688}]},
            {img:'./img/M-008.jpg',text:'锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',price:18,zong:[{name:'销量',num:666},{name:'人气',num:888},{name:'评论',num:1688}]},
            {img:'./img/M-008.jpg',text:'锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',price:18,zong:[{name:'销量',num:666},{name:'人气',num:888},{name:'评论',num:1688}]}
        ],
        bao:[
            {img:'./img/S-001.jpg',num:13966.99},
            {img:'./img/S-008.jpg',num:139.99},
            {img:'./img/S-014.jpg',num:139.99},
            {img:'./img/S-001.jpg',num:139.99},
            {img:'./img/S-008.jpg',num:139.99},
            {img:'./img/S-014.jpg',num:139.99},
            {img:'./img/S-001.jpg',num:139.99},
            {img:'./img/S-008.jpg',num:139.99},
            {img:'./img/S-014.jpg',num:139.99},
            {img:'./img/S-008.jpg',num:139.99}
        ],
        choose:{}
    },
    methods: {
        change:function(tem,i,index){
            this.$set(this.choose,i,tem)
            this.clothing[i].index = index;
            vm.inx.splice(i,1,index);
        },
        wll:function(index){
            for(var i=0;i<vm.clas.length;i++){
                vm.clas[i].wl = false;
            }
            vm.clas[index].wl = true;
            vm.clas[index].flag = !vm.clas[index].flag;
        },
        delFn(key){
            /*
            删除对象中的属性
             */
            this.$delete(this.choose,key);
            this.clothing[key].index = -1;
            vm.inx[key] = 0;
        },
        // 重置商品属性值
        reset:function(){
            vm.inx = [0,0,0,0]
            vm.choose = {};
        }
    },
    filters:{
        spnum:function(val){
            return val>9999?9999+'+':val;
        }
    }
})
