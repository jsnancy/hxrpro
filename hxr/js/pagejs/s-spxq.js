
    //千分位过滤器 小数点后保留两位--------------------------------------------
    // ￥{{shangpin.price | capitalize}}
    Vue.filter('capitalize', function (value) {
      return value.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
    })
    //万过滤器 拼+，如果小于10000则正常显示--------------------------------------
    // ￥{{shangpin.price | capitalize}}
    Vue.filter('capitalizew', function (value) {
        if(value/10000>1){
            return (value/10000).toFixed(1)+"万+"
        }else{
            return value
        }
    })
    //大于10000拼+库存过滤器 ，如果小于10000则正常显示--------------------------
    // ￥{{shangpin.price | capitalize}}
    Vue.filter('capitalizek', function (value) {
        if(value/10000>1){
            return 9999+"+"
        }else{
            return value
        }
    })
    //万评论过滤器 拼+，如果小于10000则正常显示-----------------------------
    // ￥{{shangpin.price | capitalize}}
    Vue.filter('capitalizep', function (value) {
        if(value/10000>=1){
            return (value/10000).toFixed(1)+"万+"
        }else{
            return value
        }
    })
    // var str = "dsfsdfdf"
    // alert(str.replace(str.substring(1,str.length-1),"***"))
    // 用户名*代替------------------------------------------------------
    // ￥{{shangpin.price | capitalize}}
    Vue.filter('user', function (value) {
        var str = value.toString();
         return str.replace(str.substring(1,str.length-1),"***")
    })
    // 头部过滤------------------------------------------------------
    // 千分位过滤器----------------------------------------------------
    Vue.filter('muchAdd', function(value) {
        if(!value) return '0.00';
        var intPart = Number(value).toFixed(0); //获取整数部分
        var intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,'); //将整数部分逢三一断
        var floatPart = ".00"; //预定义小数部分
        var value2Array = value.split(".");
        //=2表示数据有小数位----------
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
    // 大于99----------------------------------------
    Vue.filter('shopCartAdd',function(value){
        return value<=99?value:99+'+';
    })
    // 超过1万---------------------------------------
    Vue.filter('jifenAdd',function(value){
        if(value/10000>1){
            return (value/10000).toFixed(1)+"万+"
        }else{
            return value
        }
    })
    // 大于9999-------------------------------------
    Vue.filter('dayAdd',function(value){
        return value<=9999?value:9999+'+';
    })
    Vue.filter('dailiAdd',function(value){
        if(value/10000>1){
            return (value/10000).toFixed(1)+"万+"
        }else{
            return value
        }
    })
    // 懒加载lazy-----------------------------------------
    Vue.use(VueLazyload, {
      preLoad: 0.55,
      error: "img/icons/zuan.gif",
      loading: 'img/icons/GIF.gif',
      attempt: 1
    })
    var vm = new Vue({
        el:"#page",
        data:{
            udai:{
                shopCart:'0',
                tel:'18759808122',
                jifen:'30',
                day:'1',
                daili:'9527'
            },
        // 头部--------------------------------------
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
            count:1,
            shangpin:{
                id:1,
                // mbx:["首页","爆款推荐","夏季秋装"],
                title:"原创设计日常汉服女款绣花长褙子吊带改良宋裤春夏",
                youhui:"优惠活动：该商品享受8折优惠",
                mbxone:"首页",
                mbxtwo:"爆款推荐",
                mbxthe:"原创设计日常汉服女款绣花长褙子吊带改良宋裤春夏",
                putongnum:2,
                price:1229.20,
                delprice:1433.00,
                xiaoliang:168118,
                pinglun:1111314,
                jifen:4516,
                yanse:  
                    {
                        num:0,
                        des:"颜色",
                        arr:["白色","黑色","黄色","粉红色"]
                    },
                chima:{
                        num:0,
                        des:"尺码",
                        arr:["S","M","L","XL"]
                    },
                number:1,
                jiannum:148,
                bianhao:"D-8812",
                shangjiaTime:"2018-06-24",
                maozhong:200,
                pingjia:13143,
                goodpingjia:10500,
                midpingjia:2641,
                badpingjia:2,
                smallimg:[
                    "images/temp/S-001-7_s.jpg",
                    "images/temp/S-001-7_s.jpg",
                    "images/temp/S-001-7_s.jpg",
                    "images/temp/S-001-7_s.jpg",
                    "images/temp/S-001-7_s.jpg",
                    "images/temp/S-001-7_s.jpg",
                    "images/temp/S-001-7_s.jpg",
                    "images/temp/S-001-7_s.jpg",
                    "images/temp/S-001-7_s.jpg",
                ],
                qbpj:[
                    {
                        userimg:"images/icons/default_avt.png",
                        username:"高哈哈哈哈或想",
                        desc:"回头穿了在刷图",
                        imgxiangqing:["images/temp/S-001-1_s.jpg","images/temp/S-001-2_s.jpg","images/temp/S-001-3_s.jpg","images/temp/S-001-4_s.jpg","images/temp/S-001-1_s.jpg"],
                        time:"2017年06月25日 20：31",
                        yansefl:"深棕色",
                        chima:"均码"
                    },
                    {
                        userimg:"images/icons/default_avt.png",
                        username:"高***想",
                        desc:"回头穿了在刷图",
                        imgxiangqing:["images/temp/S-001-1_s.jpg","images/temp/S-001-2_s.jpg","images/temp/S-001-3_s.jpg","images/temp/S-001-4_s.jpg","images/temp/S-001-1_s.jpg"],
                        time:"2017年06月25日 20：31",
                        yansefl:"深棕色",
                        chima:"均码"
                    },
                    {
                        userimg:"images/icons/default_avt.png",
                        username:"高***想",
                        desc:"回头穿了在刷图",
                        imgxiangqing:["images/temp/S-001-1_s.jpg","images/temp/S-001-2_s.jpg","images/temp/S-001-3_s.jpg","images/temp/S-001-4_s.jpg","images/temp/S-001-1_s.jpg"],
                        time:"2017年06月25日 20：31",
                        yansefl:"深棕色",
                        chima:"均码"
                    },
                    {
                        userimg:"images/icons/default_avt.png",
                        username:"高***想",
                        desc:"回头穿了在刷图",
                        imgxiangqing:["images/temp/S-001-1_s.jpg","images/temp/S-001-2_s.jpg","images/temp/S-001-3_s.jpg","images/temp/S-001-4_s.jpg","images/temp/S-001-1_s.jpg"],
                        time:"2017年06月25日 20：31",
                        yansefl:"深棕色",
                        chima:"均码"
                    },
                    {
                        userimg:"images/icons/default_avt.png",
                        username:"高***想",
                        desc:"回头穿了在刷图",
                        imgxiangqing:["images/temp/S-001-1_s.jpg","images/temp/S-001-2_s.jpg","images/temp/S-001-3_s.jpg","images/temp/S-001-4_s.jpg","images/temp/S-001-1_s.jpg"],
                        time:"2017年06月25日 20：31",
                        yansefl:"深棕色",
                        chima:"均码"
                    },
                    {
                        userimg:"images/icons/default_avt.png",
                        username:"高***想",
                        desc:"回头穿了在刷图",
                        imgxiangqing:["images/temp/S-001-1_s.jpg","images/temp/S-001-2_s.jpg","images/temp/S-001-3_s.jpg","images/temp/S-001-4_s.jpg","images/temp/S-001-1_s.jpg"],
                        time:"2017年06月25日 20：31",
                        yansefl:"深棕色",
                        chima:"均码"
                    },
                    {
                        userimg:"images/icons/default_avt.png",
                        username:"高***想",
                        desc:"回头穿了在刷图",
                        imgxiangqing:["images/temp/S-001-1_s.jpg","images/temp/S-001-2_s.jpg","images/temp/S-001-3_s.jpg","images/temp/S-001-4_s.jpg","images/temp/S-001-1_s.jpg"],
                        time:"2017年06月25日 20：31",
                        yansefl:"深棕色",
                        chima:"均码"
                    },
                    {
                        userimg:"images/icons/default_avt.png",
                        username:"高***想",
                        desc:"回头穿了在刷图",
                        imgxiangqing:["images/temp/S-001-1_s.jpg","images/temp/S-001-2_s.jpg","images/temp/S-001-3_s.jpg","images/temp/S-001-4_s.jpg","images/temp/S-001-1_s.jpg"],
                        time:"2017年06月25日 20：31",
                        yansefl:"深棕色",
                        chima:"均码"
                    }
                ],
                hp:[
                    {
                        userimg:"images/icons/default_avt.png",
                        username:"高***想",
                        desc:"回头穿了在刷图",
                        imgxiangqing:["images/temp/S-001-2_s.jpg","images/temp/S-001-3_s.jpg","images/temp/S-001-4_s.jpg","images/temp/S-001-5_s.jpg","images/temp/S-001-1_s.jpg"],
                        time:"2017年06月25日 20：31",
                        yansefl:"深棕色",
                        chima:"均码"
                    },
                    {
                        userimg:"images/icons/default_avt.png",
                        username:"高***想",
                        desc:"回头穿了在刷图",
                        imgxiangqing:["images/temp/S-001-2_s.jpg","images/temp/S-001-3_s.jpg","images/temp/S-001-4_s.jpg","images/temp/S-001-5_s.jpg","images/temp/S-001-1_s.jpg"],
                        time:"2017年06月25日 20：31",
                        yansefl:"深棕色",
                        chima:"均码"
                    },
                    {
                        userimg:"images/icons/default_avt.png",
                        username:"高***想",
                        desc:"回头穿了在刷图",
                        imgxiangqing:["images/temp/S-001-2_s.jpg","images/temp/S-001-3_s.jpg","images/temp/S-001-4_s.jpg","images/temp/S-001-5_s.jpg","images/temp/S-001-1_s.jpg"],
                        time:"2017年06月25日 20：31",
                        yansefl:"深棕色",
                        chima:"均码"
                    },
                    {
                        userimg:"images/icons/default_avt.png",
                        username:"高***想",
                        desc:"回头穿了在刷图",
                        imgxiangqing:["images/temp/S-001-2_s.jpg","images/temp/S-001-3_s.jpg","images/temp/S-001-4_s.jpg","images/temp/S-001-5_s.jpg","images/temp/S-001-1_s.jpg"],
                        time:"2017年06月25日 20：31",
                        yansefl:"深棕色",
                        chima:"均码"
                    }   
                ],
                zp:[
                    {
                        userimg:"images/icons/default_avt.png",
                        username:"高***想",
                        desc:"回头穿了在刷图",
                        imgxiangqing:["images/temp/S-001-2_s.jpg","images/temp/S-001-1_s.jpg","images/temp/S-001-3_s.jpg","images/temp/S-001-1_s.jpg","images/temp/S-001-1_s.jpg"],
                        time:"2017年06月25日 20：31",
                        yansefl:"深棕色",
                        chima:"均码"
                    },
                    {
                        userimg:"images/icons/default_avt.png",
                        username:"高***想",
                        desc:"回头穿了在刷图",
                        imgxiangqing:["images/temp/S-001-2_s.jpg","images/temp/S-001-1_s.jpg","images/temp/S-001-3_s.jpg","images/temp/S-001-1_s.jpg","images/temp/S-001-1_s.jpg"],
                        time:"2017年06月25日 20：31",
                        yansefl:"深棕色",
                        chima:"均码"
                    },
                    {
                        userimg:"images/icons/default_avt.png",
                        username:"高***想",
                        desc:"回头穿了在刷图",
                        imgxiangqing:["images/temp/S-001-2_s.jpg","images/temp/S-001-1_s.jpg","images/temp/S-001-3_s.jpg","images/temp/S-001-1_s.jpg","images/temp/S-001-1_s.jpg"],
                        time:"2017年06月25日 20：31",
                        yansefl:"深棕色",
                        chima:"均码"
                    },
                    {
                        userimg:"images/icons/default_avt.png",
                        username:"高***想",
                        desc:"回头穿了在刷图",
                        imgxiangqing:["images/temp/S-001-2_s.jpg","images/temp/S-001-1_s.jpg","images/temp/S-001-3_s.jpg","images/temp/S-001-1_s.jpg","images/temp/S-001-1_s.jpg"],
                        time:"2017年06月25日 20：31",
                        yansefl:"深棕色",
                        chima:"均码"
                    },
                    {
                        userimg:"images/icons/default_avt.png",
                        username:"高***想",
                        desc:"回头穿了在刷图",
                        imgxiangqing:["images/temp/S-001-2_s.jpg","images/temp/S-001-1_s.jpg","images/temp/S-001-3_s.jpg","images/temp/S-001-1_s.jpg","images/temp/S-001-1_s.jpg"],
                        time:"2017年06月25日 20：31",
                        yansefl:"深棕色",
                        chima:"均码"
                    },
                    {
                        userimg:"images/icons/default_avt.png",
                        username:"高***想",
                        desc:"回头穿了在刷图",
                        imgxiangqing:["images/temp/S-001-2_s.jpg","images/temp/S-001-1_s.jpg","images/temp/S-001-3_s.jpg","images/temp/S-001-1_s.jpg","images/temp/S-001-1_s.jpg"],
                        time:"2017年06月25日 20：31",
                        yansefl:"深棕色",
                        chima:"均码"
                    }
                ],
                cp:[
                    {
                        userimg:"images/icons/default_avt.png",
                        username:"高***想",
                        desc:"回头穿了在刷图",
                        imgxiangqing:["images/temp/S-001-5_s.jpg","images/temp/S-001-4_s.jpg","images/temp/S-001-3_s.jpg","images/temp/S-001-2_s.jpg","images/temp/S-001-1_s.jpg"],
                        time:"2017年06月25日 20：31",
                        yansefl:"深棕色",
                        chima:"均码"
                    },
                    {
                        userimg:"images/icons/default_avt.png",
                        username:"高***想",
                        desc:"回头穿了在刷图",
                        imgxiangqing:["images/temp/S-001-5_s.jpg","images/temp/S-001-4_s.jpg","images/temp/S-001-3_s.jpg","images/temp/S-001-2_s.jpg","images/temp/S-001-1_s.jpg"],
                        time:"2017年06月25日 20：31",
                        yansefl:"深棕色",
                        chima:"均码"
                    }
                ],
                imgxiangqing:[
                    "images/temp/S-001_1.jpg",
                    "images/temp/S-001_2.jpg",
                    "images/temp/S-001_3.jpg",
                    "images/temp/S-001_4.jpg",
                    "images/temp/S-001_5.jpg",
                    "images/temp/S-001_6.jpg",
                    "images/temp/S-001_7.jpg",
                    "images/temp/S-001_8.jpg",
                    "images/temp/S-001_9.jpg",
                    "images/temp/S-001_10.jpg",
                    "images/temp/S-001_11.jpg",
                    "images/temp/S-001_12.jpg",
                    "images/temp/S-001_13.jpg",
                    "images/temp/S-001_14.jpg",
                    "images/temp/S-001_15.jpg",
                    "images/temp/S-001_16.jpg",
                    "images/temp/S-001_17.jpg",
                    "images/temp/S-001_18.jpg",
                    "images/temp/S-001_19.jpg",
                    "images/temp/S-001_20.jpg",
                    "images/temp/S-001_21.jpg",
                ]
            },
            baokuan:[
                {
                    id:11,
                    src:"images/temp/S-001-1_s.jpg",
                    bkprice:1459.99
                },
                {
                    id:12,
                    src:"images/temp/S-001-2_s.jpg",
                    bkprice:149.99
                },
                {
                    id:13,
                    src:"images/temp/S-001-3_s.jpg",
                    bkprice:149.99
                },
                {
                    id:14,
                    src:"images/temp/S-001-4_s.jpg",
                    bkprice:149.99
                },
                {
                    id:15,
                    src:"images/temp/S-001-1_s.jpg",
                    bkprice:149.99
                },
                {
                    id:16,
                    src:"images/temp/S-001-2_s.jpg",
                    bkprice:149.99
                },
                {
                    id:17,
                    src:"images/temp/S-001-3_s.jpg",
                    bkprice:149.00
                },
                {
                    id:18,
                    src:"images/temp/S-001-4_s.jpg",
                    bkprice:149.00
                }
            ],
            xgtjdesc:"相关推荐",
             xiangguan:[
                {
                    id:11,
                    src:"images/temp/S-001-1_s.jpg",
                    bkprice:189.99
                },
                {
                    id:12,
                    src:"images/temp/S-001-2_s.jpg",
                    bkprice:149.99
                },
                {
                    id:13,
                    src:"images/temp/S-001-3_s.jpg",
                    bkprice:149.99
                },
                {
                    id:14,
                    src:"images/temp/S-001-4_s.jpg",
                    bkprice:149.99
                }
            ],
            zjlldesc:"最近浏览",
             zuijinliulan:[
                {
                    id:11,
                    src:"images/temp/S-001-1_s.jpg",
                    bkprice:1422229.99
                },
                {
                    id:12,
                    src:"images/temp/S-001-2_s.jpg",
                    bkprice:149.99
                },
                {
                    id:13,
                    src:"images/temp/S-001-3_s.jpg",
                    bkprice:149.99
                },
                {
                    id:14,
                    src:"images/temp/S-001-4_s.jpg",
                    bkprice:149.99
                }
            ],
            flag:false
            
        },
        computed: {

        },
        methods:{
            active:function(index){
                vm.shangpin.yanse.num = index;
            },
            activeone:function(index){
                vm.shangpin.chima.num = index;
            },
            // 待用
            // activetwo:function(index){
            //     vm.shangpin.chima.num = index;
            // }
            // +-------------------------加-------------------------------
            addc:function(){
               
                // if(!typeof(this.count)==nu){
                //     return 0
                // }
                this.count =  parseInt(this.count);
                this.shangpin.jiannum =  parseInt(this.shangpin.jiannum);
                // this.shangpin.jiannum =  this.shangpin.jiannum - this.count
                if(this.count>vm.shangpin.jiannum){
                   return alert("不能多于库存！！！")
                }else{
                    this.count++;
                }
                // alert(vm.shangpin.jiannum)
                if(this.count>vm.shangpin.jiannum){
                   return alert("不能多于库存！！！")
                }
            },
            // ---------减----------------------------------------
            delc:function(){
                this.count =  parseInt(this.count);
                // this.shangpin.jiannum =  parseInt(this.shangpin.jiannum);
                // this.shangpin.jiannum++
                if(this.count>vm.shangpin.jiannum){
                   return alert("不能多于库存！！！")
                }else{
                    this.count--;
                }
                if(this.count<0){
                   return this.count = 0;
                }
            },
            // 加入购物车---------------------------------------
            jiaru:function(){
                this.count =  parseInt(this.count);
                if(this.count>vm.shangpin.jiannum){
                    alert("不能多于库存！！！")
                }
            },
            // 立即购买------------------------------------------
            goumai:function(){
                this.count =  parseInt(this.count);
                if(this.count>vm.shangpin.jiannum){
                    alert("不能多于库存！！！")
                }
            }
            // 
            // change:function(event){
            //     // return this.flag = !this.flag
            //     var obj = event.currentTarget;
            //     // obj.style.transform = "scale(2)"
            // }
        }
    })
// <!-- 头部底部 --------------------------------------------------------->
    $('.nav-shop').mouseover(function(){
        $('.more').css({'display':'block'})
    })
    $('.nav-bottom').mouseout(function(){
        $('.more').css({'display':'none'})
    })
    window.onscroll = function(){
// 右侧返回顶部------------------------------------------------------------
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
// 楼层导航-------------------------------------------------------------
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
    // 右侧轮播-----------------------------------
    var swiper = new Swiper('#noreal', {
        slidesPerView: 3,
        spaceBetween: 10,
        slidesPerGroup: 3,
        direction: 'vertical',
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    // 底部轮播----------------------------------
    var swiper = new Swiper('#footerswiper', {
        slidesPerView: 5,
        spaceBetween: 30,
        slidesPerGroup: 5,
        // direction: 'vertical',
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    // 选项卡一级-------------------------------------
    var oBtn = document.getElementById("allbtn");
    var aLi = oBtn.querySelectorAll('li');
    var oBox =  document.getElementById('allboxone');
    var aBox =  oBox.querySelectorAll('.tong');
    // 选项卡二级-----------------------------------
    var oBtnt = document.getElementById("allbtntwo");
    var aLit = oBtnt.querySelectorAll('li');
    var oBoxt =  document.getElementById('allboxtwo');
    var aBoxt =  oBoxt.querySelectorAll('.tongt');
    console.log(aLit)
    console.log(aBoxt)
    // 一级选项卡---------------------------------
    function tabone(name,event){
        for(var i=0;i<aLi.length;i++){
            aLi[i].index = i;
            aLi[i][event] = function(){     
                for(var j=0;j<aLi.length;j++){
                    aLi[j].classList.remove('jihuo');
                    aBox[j].classList.remove('show');
                }
                this.classList.add('jihuo');
                aBox[this.index].classList.add('show');
            }        
        }
    }
    // 一级选项卡--------------------------------
    function tabtwo(name,event){
        for(var i=0;i<aLit.length;i++){
            aLit[i].index = i;
            aLit[i][event] = function(){     
                for(var j=0;j<aLit.length;j++){
                    aLit[j].classList.remove('jihuo');
                    aBoxt[j].classList.remove('show');
                }
                this.classList.add('jihuo');
                aBoxt[this.index].classList.add('show');
            }        
        }
    }
    // 选项卡调用--------------------
    tabone('tabboxone','onclick');
    tabtwo('tabboxtwo','onclick');
    // 分享模态框----------------------------------------
    var oClose = document.getElementById("close");
    var oFbox = document.getElementById("fxbox");
    var oShareb = document.getElementById("sharebtn");
    oShareb.onclick = function(){
        oFbox.style.display = "block";
        // alert(1)
    }
    oClose.onclick = function(){
        oFbox.style.display = "none";
    }
    // 绝对位置封装----------------------------------------
    function getPos(obj){
        var l = 0;
        var t = 0;
        while(obj){
            l+=obj.offsetLeft;
            t+=obj.offsetTop;
            obj = obj.offsetParent;
        }
        return {top:t,left:l}
    }
    // 吸顶------------------------------------------------------------------------
    var oXi = document.getElementById("xgtj");
    var oZjll = document.getElementById("zjll");
    var oTop = document.getElementById("topbox");
    var tHeight = oTop.offsetHeight + oBtn.offsetHeight +20 +175;
    // console.log(tHeight)
    // var  json = getPos(oXi);
    // console.log(json)
    var oBoxlan = document.getElementById("lan")
    var aImglan = oBoxlan.getElementsByTagName("img")
    window.onscroll=window.onresize = function(){
        var oClientH = document.documentElement.clientHeight||document.body.clientHeight;
        var sCro= document.documentElement.scrollTop || document.body.scrollTop;
        var clientW = document.documentElement.clientWidth|| document.body.clientWidth;
        // console.log(aImglan)
        // var  gettype=Object.prototype.toString
        // console.log(gettype.call(aImglan[0]))
        // console.log(aImglan[0].offsetTop)
        // console.log(aImglan[1].offsetTop)
        // console.log(aImglan[2].offsetTop)
        // console.log(aImglan[2].getAttribute('_src'))
         // $("#lan img").attr({ src: aImglan[1].getAttribute('_src')});
        // console.log(typeof(aImglan[0]))
        // var t1 = oClientH + sCro;
        // for(var i = 0;i<aImglan.length;i++){
            // var t = getPos(aImglan[i]).top;
            // var t = aImglan[i].offsetTop
            // console.log(t)
            // if(t<t1-250){
                // $("#lan img").attr({ src: aImglan[i].getAttribute('_src')});
                // console.log($("#lan img"))
                // aImglan[i].setAttribute("src",aImglan[i].getAttribute('_src'));
                // aImglan[i].setAttribute('src') = aImglan[i].getAttribute('_src');
                // aImglan[i].src = aImglan[i].getAttribute('_src');
            // }
        // }
        var cha = (clientW - 1200)/2;
        var cha1 = (clientW - 1200)/2 - 4;
        if(sCro>tHeight){
            oXi.style.position = "fixed";
            oXi.style.top = "20px";
            oXi.style.right = cha+"px";
            oZjll.style.position = "fixed";
            oZjll.style.top = "10px";
            oZjll.style.right = cha1+"px";
        }else{
            oXi.style.position = "absolute";
            oXi.style.top = "0";
            oXi.style.right = "0";
            oZjll.style.position = "absolute";
            oZjll.style.top = "0";
            oZjll.style.right = "-215px";
        }
        // 返回顶部消失隐藏---------------------------------------
        if($(document).scrollTop()>$(window).height()){
            $('.return a.return-top').css({'display':'block'})
            $('.return').css({'bottom':'10px'})
        }
        if($(document).scrollTop()==0){
            $('.return a.return-top').css({'display':'none'})
            $('.return').css({'bottom':'-35px'})
        }
    }
    // 图片放大预览-----------------------------------------------
    var oFang = document.getElementById("fangda");
    var oImgzz = document.getElementById("imgzz");
    var aImg = oFang.getElementsByTagName("img");
    console.log(aImg);
    for(let i=0;i<aImg.length;i++){
        aImg[i].onclick = function(){
            oImgzz.src = aImg[i].src;
            console.log(aImg[i].src)
        }
    }
    $(function(){
        /*
            smallimg   // 小图
            bigimg  //点击放大的图片
            mask   //黑色遮罩
            */
        var obj = new zoom('mask', 'bigimg','smallimg');
        obj.init();
    })
    // 预览滚动消失-------------------------------
    $(window).scroll(function(){
        $(".mask").css({"display":"none"})
        $(".bigimg").css({"display":"none"})
    })
    // // 评论-------------------------------------
    // var oTxt = document.getElementById("txtpinglun");
   
    // oTxt.onfocus = function(){

    //     var timer = null;
    //     clearInterval(timer)
    //     timer = setInterval(function(){
    //         // console.log(oTxt.value)
    //         // console.log(oTxt.value.length)
    //         if(oTxt.value.length>=100){
               
    //             clearInterval(timer);
    //             alert("最多输入100个字哦！")
    //             String(oTxt.value).substring(0,oTxt.value.length-100)
    //             // oTxt.value
    //         }
    //     },500)
    // }
    // 收藏状态改变--------------------------------
    var fl = false;
    $(".scang").click(function(event) {
        // $(".fenshou li a").css({"color":"#b31e22"})
        if(fl){
            $(".scang a").css({"color":"#000"});
            $(".scang a").html("收藏");
            $(".scang i").css({"background":"url(images/icons/__sprite.png) -30px -40px no-repeat"})
            fl = false;
        }else{
            fl = true;
            $(".scang a").css({"color":"#b31e22"});
            $(".scang a").html("已收藏");
            $(".scang i").css({"background":"url(images/icons/__sprite.png) -44px -40px no-repeat"});
        }
    });
// 页码----------------------------------------------------------------------------------------------------
    layui.use(['laypage', 'layer'], function(){
        var laypage = layui.laypage
        ,layer = layui.layer;
        //总页数低于页码总数  
        laypage.render({
            elem: 'demo0'	//挂载
            ,count: 80 //数据总数
            ,theme: '#b31e22' //设置选中时的背景颜色
            ,limit: 6	//设置每页有多少条数据
            // ,first: '首页' //设置首页
            // ,last: '尾页'	//设置尾页
            // ,first: false  //不显示首页 没有省略号
            // ,last: false   //不显示尾页 没有省略号
        });
    })
    layui.use(['laypage', 'layer'], function(){
        var laypage = layui.laypage
        ,layer = layui.layer;
        //总页数低于页码总数  
        laypage.render({
            elem: 'demo1'	//挂载
            ,count: 80 //数据总数
            ,theme: '#b31e22' //设置选中时的背景颜色
            ,limit: 6	//设置每页有多少条数据
            // ,first: '首页' //设置首页
            // ,last: '尾页'	//设置尾页
            // ,first: false  //不显示首页 没有省略号
            // ,last: false   //不显示尾页 没有省略号
        });
    })
    layui.use(['laypage', 'layer'], function(){
        var laypage = layui.laypage
        ,layer = layui.layer;
        //总页数低于页码总数  
        laypage.render({
            elem: 'demo2'	//挂载
            ,count: 80 //数据总数
            ,theme: '#b31e22' //设置选中时的背景颜色
            ,limit: 6	//设置每页有多少条数据
            // ,first: '首页' //设置首页
            // ,last: '尾页'	//设置尾页
            // ,first: false  //不显示首页 没有省略号
            // ,last: false   //不显示尾页 没有省略号
        });
    })
    layui.use(['laypage', 'layer'], function(){
        var laypage = layui.laypage
        ,layer = layui.layer;
        //总页数低于页码总数  
        laypage.render({
            elem: 'demo3'	//挂载
            ,count: 80 //数据总数
            ,theme: '#b31e22' //设置选中时的背景颜色
            ,limit: 6	//设置每页有多少条数据
            // ,first: '首页' //设置首页
            // ,last: '尾页'	//设置尾页
            // ,first: false  //不显示首页 没有省略号
            // ,last: false   //不显示尾页 没有省略号
        });
    })

// <!-- H 分享配置 -------------------------------------------------------------------------->
    var bds_config = {
        'bdDes':'自定义分享摘要',		//'请参考自定义分享摘要'
        'bdText':'自定义分享内容',		//'请参考自定义分享内容'
        'bdPopTitle':'自定义pop窗口标题',	//'请参考自定义pop窗口标题'
        'bdTop':'自定义侧栏高度',		//'请参考自定义侧栏高度'
        'bdComment':'自定义分享评论',	//'请参考自定义分享评论'
        'bdPic':'自定义分享出去的图片',	//'请参考自定义分享出去的图片'
        'searchPic':'是否自动抓取页面图片',//'0为抓取，1为不抓取，默认为0，目前只针对新浪微博'
        'wbUid':'自定义微博 ID',		//'请参考自定义微博 id'
        'render':false,				//'请参考自定义分享回流量统计'
        'review':'normal',			//'请参考自定义分享回流签名'
        'snsKey':{'tsina':'appkey'}		//'请参考自定义分享到平台的appkey'
    }
    window._bd_share_config={
        "common":{
            "bdSnsKey":{},
            "bdText":"",
            "bdMini":"2",
            "bdMiniList":false,
            "bdPic":"",
            "bdStyle":"0",
        },
        "share":{},
        "image":{
            "viewList":["weixin","qzone","sqq","tsina","tqq","douban"],
            "viewText":"分享到：","viewSize":"16"},
        "selectShare":{
            "bdContainerClass":null,
            "bdSelectMiniList":["weixin","qzone","sqq","tsina","tqq","douban"]
        }
    };
with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];


