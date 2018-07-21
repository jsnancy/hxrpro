
    // 千分位过滤器--------------------------------------------------------------------
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
    // 大于99---------------------------------------------------------------------------
            Vue.filter('shopCartAdd',function(value){
                return value<=99?value:99+'+';
            })
    // 超过1万---------------------------------------------------------------------------
            Vue.filter('jifenAdd',function(value){
                if(value/10000>1){
                    return (value/10000).toFixed(2)+"万+"
                }else{
                    return value
                }
            })
    // 大于9999-----------------------------------------------------------------------------
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
        el:".app",
        data:{
            news:[
                {
                    id:1,
                    gonggao:"公告",
                    desc:"央行决定对普惠金融实施定向降准政策 最高下调1.5个百分点",
                    href:"#",
                    time:"2017-08-08 15:05",
                    txt:"因为全国遭遇罕见强寒潮天气，见强寒潮天气，各大快递公司纷纷在1月25 日左见强寒潮天气，各大快递公司纷纷在1月25 日左见强寒潮天气，各大快递公司纷纷在1月25 日左见强寒潮天气，各大快递公司纷纷在1月25 日左见强寒潮天气，各大快递公司纷纷在1月25 日左见强寒潮天气，各大快递公司纷纷在1月25 日左见强寒潮天气，各大快递公司纷纷在1月25 日左见强寒潮天气，各大快递公司纷纷在1月25 日左见强寒潮天气，各大快递公司纷纷在1月25 日左见强寒潮天气，各大快递公司纷纷在1月25 日左见强寒潮天气，各大快递公司纷纷在1月25 日左见强寒潮天气，各大快递公司纷纷在1月25 日左见强寒潮天气，各大快递公司纷纷在1月25 日左见强年末清仓，货源极度不稳定，断货、下架的情况也是蛮多的"
                }
            ],
              udai:{
                        shopCart:'0',
                        tel:'18759808122',
                        jifen:'30',
                        day:'1',
                        daili:'9527'
                    },
    // 头部----------------------------------------------------------
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
                        {url:'#',text:'首页'},
                        {url:'introduction.html',text:'企业简介'},
                        {url:'agent.html',text:'新手上路'},
                        {url:'#',text:'U袋学堂'},
                        {url:'#',text:'企业账号'},
                        {url:'#',text:'诚信合约'},
                        {url:'#',text:'实时下架'},
                    ],
    // 底部----------------------------------------------------------------------
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
        methods:{

        }
    })
// ------------------------------------------------------------------
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

            $('.nav-shop').mouseover(function(){
                $('.more').css({'display':'block'})
            })
            $('.nav-bottom').mouseout(function(){
                $('.more').css({'display':'none'})
            })
            window.onscroll = function(){
    // 右侧返回顶部---------------------------------------------------------------
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
    // 楼层导航-------------------------------------------------------------------
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
 