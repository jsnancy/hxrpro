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

var vm = new Vue({
    el:"#demo",
    data:{
        udai:{
            shopCart:'100',
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
            {url:'udai_order.html',text:'我的花想容'},
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
            {url:'#',text:'首页'},
            {url:'introduction.html',text:'企业简介'},
            {url:'agent.html',text:'新手上路'},
            {url:'#',text:'花想容学堂'},
            {url:'#',text:'企业账号'},
            {url:'#',text:'诚信合约'},
            {url:'#',text:'实时下架'},
        ],
// 全部分类
        shop:[
            {icon:'iconfont icon-skirt ce',val:'女装',sp:['下装','上装','裙装','内衣']},
            {icon:'iconfont icon-fushi ce',val:'男装',sp:['下装','上装','套装']},
            {icon:'iconfont icon-bao ce',val:'包包',sp:['女士包包','男士包包']},
            {icon:'iconfont icon-kid ce',val:'童装',sp:['女童','男童','男女童鞋']},
            {icon:'iconfont icon-shoes ce',val:'鞋靴',sp:['男鞋','女鞋','儿童鞋']}
        ],
        gdsp:[{
            gdsp1:[
            {fenlei:'上衣1',gengduo:[{url:'',text:'上衣'},{url:'',text:'上衣'},{url:'',text:'上衣'},{url:'',text:'上衣'},{url:'',text:'上衣'}]},
            {fenlei:'下衣1',gengduo:[{url:'',text:'上衣'},{url:'',text:'上衣'},{url:'',text:'上衣'},{url:'',text:'上衣'},{url:'',text:'上衣'}]},
            {fenlei:'裙子1',gengduo:[{url:'',text:'上衣'},{url:'',text:'上衣'},{url:'',text:'上衣'},{url:'',text:'上衣'},{url:'',text:'上衣'}]},
            {fenlei:'内衣1',gengduo:[{url:'',text:'上衣'},{url:'',text:'上衣'},{url:'',text:'上衣'},{url:'',text:'上衣'},{url:'',text:'上衣'}]}
        ],xs:false
        },
        {
            gdsp1:[
            {fenlei:'上衣2',gengduo:[{url:'',text:'上衣'},{url:'',text:'上衣'},{url:'',text:'上衣'},{url:'',text:'上衣'}]},
            {fenlei:'下衣2',gengduo:[{url:'',text:'上衣'},{url:'',text:'上衣'},{url:'',text:'上衣'},{url:'',text:'上衣'}]},
            {fenlei:'裙子2',gengduo:[{url:'',text:'上衣'},{url:'',text:'上衣'},{url:'',text:'上衣'},{url:'',text:'上衣'}]},
            {fenlei:'内衣2',gengduo:[{url:'',text:'上衣'},{url:'',text:'上衣'},{url:'',text:'上衣'},{url:'',text:'上衣'}]}
        ],xs:false
        },
        {
            gdsp1:[
            {fenlei:'上衣3',gengduo:[{url:'',text:'上衣'},{url:'',text:'上衣'},{url:'',text:'上衣'}]},
            {fenlei:'下衣3',gengduo:[{url:'',text:'上衣'},{url:'',text:'上衣'},{url:'',text:'上衣'}]},
            {fenlei:'裙子3',gengduo:[{url:'',text:'上衣'},{url:'',text:'上衣'},{url:'',text:'上衣'}]},
            {fenlei:'裙子3',gengduo:[{url:'',text:'上衣'},{url:'',text:'上衣'},{url:'',text:'上衣'}]}
        ],xs:false
        },
        {
            gdsp1:[
            {fenlei:'上衣4',gengduo:[{url:'',text:'上衣'},{url:'',text:'上衣'}]},
            {fenlei:'下衣4',gengduo:[{url:'',text:'上衣'},{url:'',text:'上衣'}]},
            {fenlei:'裙子4',gengduo:[{url:'',text:'上衣'},{url:'',text:'上衣'}]},
            {fenlei:'裙子4',gengduo:[{url:'',text:'上衣'},{url:'',text:'上衣'}]}
        ],xs:false
        },
        {
            gdsp1:[
            {fenlei:'上衣5',gengduo:[{url:'',text:'上衣'}]},
            {fenlei:'下衣5',gengduo:[{url:'',text:'上衣'}]},
            {fenlei:'裙子5',gengduo:[{url:'',text:'上衣'}]},
            {fenlei:'裙子5',gengduo:[{url:'',text:'上衣'}]}
        ],xs:false
        },],
// 平台公告
        slide:[
            {url:'ptggXiangQing.html',text:'【公告】花想容平台已上线，您还在等什么呢？是吧~'},
            {url:'ptggXiangQing.html',text:'【资讯】P站服务器爆炸啦。国内86'},
            {url:'ptggXiangQing.html',text:'【公告】六趣公司9月底将彻底关闭66RPG论坛'},
            {url:'ptggXiangQing.html',text:'【资讯】Project1站将接盘66RPG，新域名rpg.blue'},
            {url:'ptggXiangQing.html',text:'【新闻】央行决定对普惠金融实施定向降准政策 最高下调1.5个百分点'},
            {url:'ptggXiangQing.html',text:'【公告】花想容平台已上线，您还在等什么呢？是吧~'},
            {url:'ptggXiangQing.html',text:'【资讯】P站服务器爆炸啦。国内86'},
            {url:'ptggXiangQing.html',text:'【公告】六趣公司9月底将彻底关闭66RPG论坛'},
            {url:'ptggXiangQing.html',text:'【资讯】Project1站将接盘66RPG，新域名rpg.blue'},
            {url:'ptggXiangQing.html',text:'【新闻】央行决定对普惠金融实施定向降准政策 最高下调1.5个百分点'},
            {url:'ptggXiangQing.html',text:'【公告】花想容平台已上线，您还在等什么呢？是吧~'},
            {url:'ptggXiangQing.html',text:'【资讯】P站服务器爆炸啦。国内86'},
            {url:'ptggXiangQing.html',text:'【公告】六趣公司9月底将彻底关闭66RPG论坛'},
            {url:'ptggXiangQing.html',text:'【资讯】Project1站将接盘66RPG，新域名rpg.blue'},
            {url:'ptggXiangQing.html',text:'【新闻】央行决定对普惠金融实施定向降准政策 最高下调1.5个百分点'},
        ],
// 轮播图
        banner:[
            {url:'shangPinXiangQing.html',img:'img/banner_1.jpg'},
            {url:'shangPinXiangQing.html',img:'img/banner_2.jpg'},
            {url:'shangPinXiangQing.html',img:'img/banner_3.jpg'},
            {url:'shangPinXiangQing.html',img:'img/banner_4.jpg'},
            {url:'shangPinXiangQing.html',img:'img/banner_5.jpg'}
        ],
// 商品内容
        recommended:[
            {url:'shangPinXiangQing.html',img:'img/S-001.jpg',much:'18.0',val:'进货价',text:'纯色圆领短袖T恤活a动衫弹力柔软'},
            {url:'shangPinXiangQing.html',img:'img/S-001.jpg',much:'18.0',val:'进货价',text:'纯色圆领短袖T恤活a动衫弹力柔软'},
            {url:'shangPinXiangQing.html',img:'img/S-001.jpg',much:'18.0',val:'进货价',text:'纯色圆领短袖T恤活a动衫弹力柔软'},
            {url:'shangPinXiangQing.html',img:'img/S-001.jpg',much:'18.0',val:'进货价',text:'纯色圆领短袖T恤活a动衫弹力柔软'},
            {url:'shangPinXiangQing.html',img:'img/S-001.jpg',much:'18.0',val:'进货价',text:'纯色圆领短袖T恤活a动衫弹力柔软'},
            {url:'shangPinXiangQing.html',img:'img/S-001.jpg',much:'18.0',val:'进货价',text:'纯色圆领短袖T恤活a动衫弹力柔软'}
        ],
        more:[
            {url:'classify.html',text:'高端女装'},
            {url:'classify.html',text:'时尚女装'}, 
            {url:'classify.html',text:'上装'},  
            {url:'classify.html',text:'下装'}, 
            {url:'classify.html',text:'裙装'},
            {url:'classify.html',text:'内衣'}
        ],
        moreShop1:[
            {url:'shangPinXiangQing.html',img:'img/S-002.jpg',much:'18.0',val:'进货价',text:'纯色圆领短袖T恤活a动衫弹力柔软'},
            {url:'shangPinXiangQing.html',img:'img/S-002.jpg',much:'18.0',val:'进货价',text:'纯色圆领短袖T恤活a动衫弹力柔软'},
            {url:'shangPinXiangQing.html',img:'img/S-002.jpg',much:'18.0',val:'进货价',text:'纯色圆领短袖T恤活a动衫弹力柔软'},
            {url:'shangPinXiangQing.html',img:'img/S-002.jpg',much:'18.0',val:'进货价',text:'纯色圆领短袖T恤活a动衫弹力柔软'},
            {url:'shangPinXiangQing.html',img:'img/S-002.jpg',much:'18.0',val:'进货价',text:'纯色圆领短袖T恤活a动衫弹力柔软'},
            {url:'shangPinXiangQing.html',img:'img/S-002.jpg',much:'18.0',val:'进货价',text:'纯色圆领短袖T恤活a动衫弹力柔软'},
            {url:'shangPinXiangQing.html',img:'img/S-002.jpg',much:'18.0',val:'进货价',text:'纯色圆领短袖T恤活a动衫弹力柔软'},
            {url:'shangPinXiangQing.html',img:'img/S-002.jpg',much:'18.0',val:'进货价',text:'纯色圆领短袖T恤活a动衫弹力柔软'}
        ],
        moreShop2:[
            {url:'shangPinXiangQing.html',img:'img/S-003.jpg',much:'18.0',val:'进货价',text:'纯色圆领短袖T恤活a动衫弹力柔软'},
            {url:'shangPinXiangQing.html',img:'img/S-003.jpg',much:'18.0',val:'进货价',text:'纯色圆领短袖T恤活a动衫弹力柔软'},
            {url:'shangPinXiangQing.html',img:'img/S-003.jpg',much:'18.0',val:'进货价',text:'纯色圆领短袖T恤活a动衫弹力柔软'},
            {url:'shangPinXiangQing.html',img:'img/S-003.jpg',much:'18.0',val:'进货价',text:'纯色圆领短袖T恤活a动衫弹力柔软'},
            {url:'shangPinXiangQing.html',img:'img/S-003.jpg',much:'18.0',val:'进货价',text:'纯色圆领短袖T恤活a动衫弹力柔软'},
            {url:'shangPinXiangQing.html',img:'img/S-003.jpg',much:'18.0',val:'进货价',text:'纯色圆领短袖T恤活a动衫弹力柔软'},
            {url:'shangPinXiangQing.html',img:'img/S-003.jpg',much:'18.0',val:'进货价',text:'纯色圆领短袖T恤活a动衫弹力柔软'},
            {url:'shangPinXiangQing.html',img:'img/S-003.jpg',much:'18.0',val:'进货价',text:'纯色圆领短袖T恤活a动衫弹力柔软'}
        ],
        moreShop3:[
            {url:'shangPinXiangQing.html',img:'img/S-004.jpg',much:'18.0',val:'进货价',text:'纯色圆领短袖T恤活a动衫弹力柔软'},
            {url:'shangPinXiangQing.html',img:'img/S-004.jpg',much:'18.0',val:'进货价',text:'纯色圆领短袖T恤活a动衫弹力柔软'},
            {url:'shangPinXiangQing.html',img:'img/S-004.jpg',much:'18.0',val:'进货价',text:'纯色圆领短袖T恤活a动衫弹力柔软'},
            {url:'shangPinXiangQing.html',img:'img/S-004.jpg',much:'18.0',val:'进货价',text:'纯色圆领短袖T恤活a动衫弹力柔软'},
            {url:'shangPinXiangQing.html',img:'img/S-004.jpg',much:'18.0',val:'进货价',text:'纯色圆领短袖T恤活a动衫弹力柔软'},
            {url:'shangPinXiangQing.html',img:'img/S-004.jpg',much:'18.0',val:'进货价',text:'纯色圆领短袖T恤活a动衫弹力柔软'},
            {url:'shangPinXiangQing.html',img:'img/S-004.jpg',much:'18.0',val:'进货价',text:'纯色圆领短袖T恤活a动衫弹力柔软'},
            {url:'shangPinXiangQing.html',img:'img/S-004.jpg',much:'18.0',val:'进货价',text:'纯色圆领短袖T恤活a动衫弹力柔软'}
        ],
        moreShop4:[
            {url:'shangPinXiangQing.html',img:'img/S-005.jpg',much:'18.0',val:'进货价',text:'纯色圆领短袖T恤活a动衫弹力柔软'},
            {url:'shangPinXiangQing.html',img:'img/S-005.jpg',much:'18.0',val:'进货价',text:'纯色圆领短袖T恤活a动衫弹力柔软'},
            {url:'shangPinXiangQing.html',img:'img/S-005.jpg',much:'18.0',val:'进货价',text:'纯色圆领短袖T恤活a动衫弹力柔软'},
            {url:'shangPinXiangQing.html',img:'img/S-005.jpg',much:'18.0',val:'进货价',text:'纯色圆领短袖T恤活a动衫弹力柔软'},
            {url:'shangPinXiangQing.html',img:'img/S-005.jpg',much:'18.0',val:'进货价',text:'纯色圆领短袖T恤活a动衫弹力柔软'},
            {url:'shangPinXiangQing.html',img:'img/S-005.jpg',much:'18.0',val:'进货价',text:'纯色圆领短袖T恤活a动衫弹力柔软'},
            {url:'shangPinXiangQing.html',img:'img/S-005.jpg',much:'18.0',val:'进货价',text:'纯色圆领短袖T恤活a动衫弹力柔软'},
            {url:'shangPinXiangQing.html',img:'img/S-005.jpg',much:'18.0',val:'进货价',text:'纯色圆领短袖T恤活a动衫弹力柔软'}
        ],
        moreShop5:[
            {url:'shangPinXiangQing.html',img:'img/S-006.jpg',much:'18.0',val:'进货价',text:'纯色圆领短袖T恤活a动衫弹力柔软'},
            {url:'shangPinXiangQing.html',img:'img/S-006.jpg',much:'18.0',val:'进货价',text:'纯色圆领短袖T恤活a动衫弹力柔软'},
            {url:'shangPinXiangQing.html',img:'img/S-006.jpg',much:'18.0',val:'进货价',text:'纯色圆领短袖T恤活a动衫弹力柔软'},
            {url:'shangPinXiangQing.html',img:'img/S-006.jpg',much:'18.0',val:'进货价',text:'纯色圆领短袖T恤活a动衫弹力柔软'},
            {url:'shangPinXiangQing.html',img:'img/S-006.jpg',much:'18.0',val:'进货价',text:'纯色圆领短袖T恤活a动衫弹力柔软'},
            {url:'shangPinXiangQing.html',img:'img/S-006.jpg',much:'18.0',val:'进货价',text:'纯色圆领短袖T恤活a动衫弹力柔软'},
            {url:'shangPinXiangQing.html',img:'img/S-006.jpg',much:'18.0',val:'进货价',text:'纯色圆领短袖T恤活a动衫弹力柔软'},
            {url:'shangPinXiangQing.html',img:'img/S-006.jpg',much:'18.0',val:'进货价',text:'纯色圆领短袖T恤活a动衫弹力柔软'}
        ],
// 底部
        one:[
            {url:'introduction.html',text:'企业简介'},
            {url:'join-U.html',text:'加入花想容'},
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
            {url:'#',text:'花想容学堂'},
            {url:'#',text:'联系我们'},
            {url:'introduction.html',text:'企业简介'},
            {url:'agent.html',text:'新手上路'}
        ]
    },
    methods:{
        show(index){
            console.log(vm.gdsp.length)
            for(var i =0;i<vm.gdsp.length;i++){
                console.log(vm.gdsp[i].xs)
                vm.gdsp[i].xs=false
            }
            vm.gdsp[index].xs=true
        },
        show1(index){
            vm.gdsp[index].xs=false
        }
    }
})

var mySwiper = new Swiper('.banner .swiper-container', {
    pagination: {
        el: '.swiper-pagination',
    },        
    paginationClickable: true,   
    autoplay: true,//可选选项，自动滑动
    autoplayDisableOnInteraction : false
})

var mySwiper1 = new Swiper('.news-content .swiper-container', {
  autoplay: true,//可选选项，自动滑动
  direction : 'vertical',
  slidesPerView : 10,
  autoplay : true,
})

window.onscroll = function(){
// 右侧返回顶部
    if($(document).scrollTop()>$(window).height()){
        $('.return a.return-top').css({'display':'block'})
        $('.return').css({'bottom':'10px'})
        $('.build').css({'position':'fixed','top':'300px','left':'0'})
    }
    if($(document).scrollTop()==0){
        $('.return a.return-top').css({'display':'none'})
        $('.return').css({'bottom':'-35px'})
        $('.build').css({'position':'absolute','top':'625px','left':'0'})
    }
// 楼层导航
    if($(document).scrollTop()>400){
        $('.build').css({'position':'fixed','top':'250px','left':'0'})
    }
    if($(document).scrollTop()<400){
        $('.build').css({'position':'absolute','top':'625px','left':'0'})
    }
    
    if($(document).scrollTop()<1100){
        $('.build1').css({'color':'#b31e22','font-weight':'bold'})
        $('.build2').removeClass('build-red')
    }else              
    if($(document).scrollTop()>1100){
        $('.build1').css({'color':'#333','font-weight':'normal'})
        $('.build2').addClass('build-red')
        $('.build3').removeClass('build-red')
    }   
    if($(document).scrollTop()>1700){
        $('.build2').removeClass('build-red')
        $('.build3').addClass('build-red')
        $('.build4').removeClass('build-red')
    } 
    if($(document).scrollTop()>2300){
        $('.build3').removeClass('build-red')
        $('.build4').addClass('build-red')
        $('.build5').removeClass('build-red')
    }      
    if($(document).scrollTop()>2900){
        $('.build4').removeClass('build-red')
        $('.build5').addClass('build-red')
        $('.build6').removeClass('build-red')
    } 
    if($(document).scrollTop()>3500){
        $('.build5').removeClass('build-red')
        $('.build6').addClass('build-red')
    }  
}
for(var i=0;i<$('.build a').length;i++){
    $('.build a').click(function(){
        $('.build a').removeClass('build-red');
        $(this).addClass('build-red')
    })
}  