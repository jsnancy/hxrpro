layui.use(['laypage', 'layer'], function(){
    var laypage = layui.laypage;
    layer = layui.layer;
    
    //总页数低于页码总数  
    laypage.render({
        elem: 'demo0'	//挂载
        ,count: 60 //数据总数
        ,theme: '#b31e22' //设置选中时的背景颜色
        ,limit: 6	//设置每页有多少条数据
        // ,first: '首页' //设置首页
        // ,last: '尾页'	//设置尾页
        // ,first: false  //不显示首页 没有省略号
        // ,last: false   //不显示尾页 没有省略号
    });
})
Vue.filter('NumFormat', function(value) {
    // if(!value) return '0.00';

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
var vm = new Vue({
    el: '#app',
    data: {
        arr: [],
        block:true,
        num:0,
        dist:[
            {name:'所有订单',num:100000000,xy:true,val:[
                {
                    dd:'2017-03-30 订单号: 2669901385864042',
                    jq:'1001212',
                    img:'./img/temp/item-img_1.jpg',
                    tit:'色圆领短袖T恤活动衫弹力柔软纯色圆领短袖T恤袖T恤活动衫弹力柔袖T恤活动衫弹力柔',
                    color:'颜色分类：深棕色 尺码：均码',
                    yh:'使用优惠券：优惠¥0.00',
                    num:'11111111111111',
                    sjjq:'1000',
                    yf:'0.00',
                    ddfk:'等待付款',
                    ckwl:'',
                    ddxq:'订单详情',
                    ljfk:'立即付款',
                    qxfk:'取消订单'
                },
                {
                    dd:'2017-03-30 订单号: 2669901385864042',
                    jq:'100',
                    img:'./img/temp/item-img_1.jpg',
                    tit:'色圆领短袖T恤活动衫弹力柔软纯色圆领短袖T恤',
                    color:'颜色分类：深棕色 尺码：均码',
                    yh:'使用优惠券：优惠¥0.00',
                    num:'1000000000000000',
                    sjjq:'100654561521123126451564561231654000000000000000000000001',
                    yf:'0.00',
                    ddfk:'等待收获',
                    ckwl:'查看物流',
                    ddxq:'订单详情',
                    ljfk:'确认收货',
                    qxfk:'退款/退货'
                }
            ]},
            {name:'待付款',num:0,xy:false,val:[]},
            {name:'待发货',num:0,xy:false,val:[
                {
                    dd:'2017-03-30 订单号: 2669901385864042',
                    jq:'100',
                    img:'./img/temp/item-img_1.jpg',
                    tit:'色圆领短袖T恤活动衫弹力柔软纯色圆领短袖T恤',
                    color:'颜色分类：深棕色 尺码：均码',
                    yh:'使用优惠券：优惠¥0.00',
                    num:'1',
                    sjjq:'1000',
                    yf:'0.00',
                    ddfk:'等待付款',
                    ckwl:'',
                    ddxq:'订单详情',
                    ljfk:'立即付款',
                    qxfk:'取消订单'
                },
                {
                    dd:'2017-03-30 订单号: 2669901385864042',
                    jq:'100',
                    img:'./img/temp/item-img_1.jpg',
                    tit:'色圆领短袖T恤活动衫弹力柔软纯色圆领短袖T恤',
                    color:'颜色分类：深棕色 尺码：均码',
                    yh:'使用优惠券：优惠¥0.00',
                    num:'1',
                    sjjq:'1000',
                    yf:'0.00',
                    ddfk:'等待收获',
                    ckwl:'查看物流',
                    ddxq:'订单详情',
                    ljfk:'确认收货',
                    qxfk:'退款/退货'
                }
            ]},
            {name:'待收获',num:0,xy:false,val:[]},
            {name:'待评价',num:0,xy:false,val:[]}
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
        hot:[
            {url:'#',text:'连衣裙'},
            {url:'#',text:'衬衫'},
            {url:'#',text:'裤'},
            {url:'#',text:'T恤'},
            {url:'#',text:'女包'},
            {url:'#',text:'家居服'},
            {url:'#',text:'2017新款'}
        ],
        list:[
            {url:'#',text:'首页'},
            {url:'#',text:'企业简介'},
            {url:'#',text:'新手上路'},
            {url:'#',text:'U袋学堂'},
            {url:'#',text:'企业账号'},
            {url:'#',text:'诚信合约'},
            {url:'#',text:'实时下架'}
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
        winp(){
            window.open('./udai_order_detai.html',"_self")
        },
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
        },
    },
    mounted:function() {
        this.getImg();
        for(let i = 0;i<this.dist.length;i++){
            if(this.dist[i].num>=100){
                this.dist[i].num=99+'+'
            }
            for(let j = 0;j<this.dist[i].val.length;j++){
                // alert(j)
                if(this.dist[i].val[j].num>=100){
                    this.dist[i].val[j].num=99+'+'
                }
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