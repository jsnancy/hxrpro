Vue.filter('muchAdd', function(value) {
    if(!value) return '0.00';
    var intPart = Number(value).toFixed(0); //获取整数部分
    var intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,'); //将整数部分逢三一断
    var floatPart = ".00"; //预定义小数部分
    // console.log(value);
    var value2Array = value;
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
        sj:[
            {
                img:'./img/temp/M-003.jpg',
                tit:'锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',
                cfl:'颜色分类：深棕色 尺码：均码',
                num:1,
                dj:2121111111111,
                zj:'',
                yf:18.0,
                her:'./shangPinXiangQing.html'
            },
            {
                img:'./img/temp/M-003.jpg',
                tit:'锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',
                cfl:'颜色分类：深棕色 尺码：均码',
                num:1124213413412341234,
                dj:22.0,
                zj:'',
                yf:18.0,
                her:'./shangPinXiangQing.html'
            },
            {
                img:'./img/temp/M-003.jpg',
                tit:'锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',
                cfl:'颜色分类：深棕色 尺码：均码',
                num:10000000,
                dj:22.0,
                zj:'',
                yf:18.0,
                her:'./shangPinXiangQing.html'
            }
        ],
        show:true,
        back:false,
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
        
    },
    mounted:function() {
        for(let i = 0;i<this.sj.length;i++){
            this.sj[i].zj = this.sj[i].num*this.sj[i].dj;
            if(this.sj[i].num>=10000){
                this.sj[i].num = 1+'万+';
            }
        }
    },
    filters:{
        capitalize(val){
            return val.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
        }
    }
})