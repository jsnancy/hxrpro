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
        xxdz:'',
        arr:[
            {
                dz:'福建省 福州市 鼓楼区 温泉街道 五四路159号世界 福建省 福州市 鼓楼区 温泉街道 五四路159号世界 福建省 福州市 鼓楼区 温泉街道 五四路159号世界金龙大厦20层B北 福州rpg.blue网络 （喵喵喵 收） 153****9999',
                mrdz:'默认地址',
                id:'ma',
                yc:true,
                che:true
            },
            {
                dz:'福建省 福州市 鼓楼区 温泉街道 五四路159号世界金龙大厦20层B北 福州rpg.blue网络 （喵喵喵 收） 153****9999',
                mrdz:'设为默认地址',
                id:'ma1',
                yc:false,
                che:false
            },
            {
                dz:'福建省 福州市 鼓楼区 温泉街道 五四路159号世界金龙大厦20层B北 福州rpg.blue网络 （喵喵喵 收） 153****9999',
                mrdz:'设为默认地址',
                id:'ma2',
                yc:false,
                che:false
            },
            {
                dz:'福建省 福州市 鼓楼区 温泉街道 五四路159号世界金龙大厦20层B北 福州rpg.blue网络 （喵喵喵 收） 153****9999',
                mrdz:'设为默认地址',
                id:'ma3',
                yc:false,
                che:false
            }
        ],
        qrdd:[
            {
                tit:'锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',
                img:'./img/temp/M-003.jpg',
                fl:'颜色分类：深棕色 尺码：均码',
                dj:'2222222212312322220.0',
                num:'1',
                yf:'0.0',
                zj:'21231231231231342340.0'
            },
            {
                tit:'锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',
                img:'./img/temp/M-003.jpg',
                fl:'颜色分类：深棕色 尺码：均码',
                dj:'20.0',
                num:'1',
                yf:'0.0',
                zj:'20.0'
            },
            {
                tit:'锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',
                img:'./img/temp/M-003.jpg',
                fl:'颜色分类：深棕色 尺码：均码',
                dj:'20.0',
                num:'1',
                yf:'0.0',
                zj:'20.0'
            }
        ],
        options: [{
            value: '选项1',
            label: '黄金糕'
            }, {
            value: '选项2',
            label: '双皮奶'
            }, {
            value: '选项3',
            label: '蚵仔煎'
            }, {
            value: '选项4',
            label: '龙须面'
            }, {
            value: '选项5',
            label: '北京烤鸭'
        }],
        value: '请选择优惠券',
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
        csdz(index){
            this.xxdz = this.arr[index].dz;
            for(let i = 0;i<this.arr.length;i++){
                this.arr[i].yc = false;
                this.arr[i].che = false;
            }
            this.arr[index].yc = true;
            this.arr[index].che = true;
        }
    },
    mounted: function () {
        this.csdz(0);
    }
})