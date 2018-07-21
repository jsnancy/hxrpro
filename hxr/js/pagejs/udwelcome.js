window.onload = function(){
        //循环给每个li加移入效果
        for(var i = 0;i<$('.pos-r').length;i++){
            $('.pos-r').eq(i).mouseover(function () {
                $(this).children('.pos-a').addClass('back')
                $(this).children('.pos-b').addClass('gro')
            })
            $('.pos-r').eq(i).mouseout(function () {
                $(this).children('.pos-a').removeClass('back')
                $(this).children('.pos-b').removeClass('gro')
            })
        }
    }
    var vm = new Vue({
        el: '#app',
        data: {
            arr: [],
            block:true,
            num:0,
            dist:[
                {name:'所有订单',xy:true,val:[
                    {
                        dd:'2017-03-30 订单号: 2669901385864042',
                        jq:'$100',
                        img:'./img/temp/item-img_1.jpg',
                        tit:'色圆领短袖T恤活动衫弹力柔软纯色圆领短袖T恤',
                        color:'颜色分类：深棕色 尺码：均码',
                        yh:'使用优惠券：优惠¥2.00',
                        num:'1',
                        sjjq:'$1000',
                        yf:'0.00',
                        ddfk:'等待付款',
                        ckwl:'',
                        ddxq:'订单详情',
                        ljfk:'立即付款',
                        qxfk:'取消订单'
                    },
                    {
                        dd:'2017-03-30 订单号: 2669901385864042',
                        jq:'$100',
                        img:'./img/temp/item-img_1.jpg',
                        tit:'色圆领短袖T恤活动衫弹力柔软纯色圆领短袖T恤',
                        color:'颜色分类：深棕色 尺码：均码',
                        yh:'使用优惠券：优惠¥2.00',
                        num:'1',
                        sjjq:'$1000',
                        yf:'0.00',
                        ddfk:'等待收获',
                        ckwl:'查看物流',
                        ddxq:'订单详情',
                        ljfk:'确认收货',
                        qxfk:'退款/退货'
                    }
                ]},
                {name:'待付款',xy:false,val:[]},
                {name:'待发货',xy:false,val:[
                    {
                        dd:'2017-03-30 订单号: 2669901385864042',
                        jq:'$100',
                        img:'./img/temp/item-img_1.jpg',
                        tit:'色圆领短袖T恤活动衫弹力柔软纯色圆领短袖T恤',
                        color:'颜色分类：深棕色 尺码：均码',
                        yh:'使用优惠券：优惠¥2.00',
                        num:'1',
                        sjjq:'$1000',
                        yf:'0.00',
                        ddfk:'等待付款',
                        ckwl:'',
                        ddxq:'订单详情',
                        ljfk:'立即付款',
                        qxfk:'取消订单'
                    },
                    {
                        dd:'2017-03-30 订单号: 2669901385864042',
                        jq:'$100',
                        img:'./img/temp/item-img_1.jpg',
                        tit:'色圆领短袖T恤活动衫弹力柔软纯色圆领短袖T恤',
                        color:'颜色分类：深棕色 尺码：均码',
                        yh:'使用优惠券：优惠¥2.00',
                        num:'1',
                        sjjq:'$1000',
                        yf:'0.00',
                        ddfk:'等待收获',
                        ckwl:'查看物流',
                        ddxq:'订单详情',
                        ljfk:'确认收货',
                        qxfk:'退款/退货'
                    }
                ]},
                {name:'待收获',xy:false,val:[]},
                {name:'待评价',xy:false,val:[]}
            ],
            show:false,
            left:[
                {url:'#',text:'网站代销'},
                {url:'#',text:'帮助中心'}
            ],
            right:[
                {url:'#',text:'积分平台'},
                {url:'#',text:'我的订单'},
                {url:'#',text:'我的U袋'},
                {url:'#',text:'注册'},
                {url:'#',text:'登录'}
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
            getImg() {
                this.arr.push({
                    li:[{
                        img:'./img/temp/S-001-1_s.jpg',
                        cont:'￥134.99'
                    },{
                        img:'./img/temp/S-001-1_s.jpg',
                        cont:'￥134.99'
                    },{
                        img:'./img/temp/S-001-1_s.jpg',
                        cont:'￥134.99'
                    },{
                        img:'./img/temp/S-001-1_s.jpg',
                        cont:'￥134.99'
                    },{
                        img:'./img/temp/S-001-1_s.jpg',
                        cont:'￥134.99'
                    }]
                },{
                    li:[{
                        img:'./img/temp/S-001-1_s.jpg',
                        cont:'￥134.99'
                    },{
                        img:'./img/temp/S-001-1_s.jpg',
                        cont:'￥134.99'
                    },{
                        img:'./img/temp/S-001-1_s.jpg',
                        cont:'￥134.99'
                    },{
                        img:'./img/temp/S-001-1_s.jpg',
                        cont:'￥134.99'
                    },{
                        img:'./img/temp/S-001-1_s.jpg',
                        cont:'￥134.99'
                    }]
                },{
                    li:[{
                        img:'./img/temp/S-001-1_s.jpg',
                        cont:'￥134.99'
                    },{
                        img:'./img/temp/S-001-1_s.jpg',
                        cont:'￥134.99'
                    },{
                        img:'./img/temp/S-001-1_s.jpg',
                        cont:'￥134.99'
                    },{
                        img:'./img/temp/S-001-1_s.jpg',
                        cont:'￥134.99'
                    },{
                        img:'./img/temp/S-001-1_s.jpg',
                        cont:'￥134.99'
                    }]
                })
            },
            xxk(index){
                vm.num = index;
                $('.bor').css({left:(index*'92')+'px',transition:'left 1s ease'})
                // this.dist.xy=false;
                for(let i = 0;i<this.dist.length;i++){
                    this.dist[i].xy=false;
                }
                // console.log(this.dist[index].xy)
                this.dist[index].xy=true;
                if(this.dist[index].val==''){

                }
                // console.log(this.dist[index].xy)
            }
        },
        mounted:function() {
            this.getImg();
        }
    })
    var mySwiper = new Swiper('.swiper-container', {
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        }
    }) 
    // 返回顶部
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