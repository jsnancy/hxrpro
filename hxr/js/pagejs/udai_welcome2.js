//                                     VUE
var vm = new Vue({
    el: "#udai-welcome ",
    methods: {
        xiange() {
            this.ge = '1';
            this.ji = '0';
            this.huo = '0';
            this.mi = '0';
        },
        xianji() {
            this.ge = '0';
            this.ji = '1';
            this.huo = '0';
            this.mi = '0';
        },
        xianhuo() {
            this.ge = '0';
            this.ji = '0';
            this.huo = '1';
            this.mi = '0';
        },
        xianmi() {
            this.ge = '0';
            this.ji = '0';
            this.huo = '0';
            this.mi = '1';
        },
        xuan() {
            this.zi2 = '1';
            this.tiao = this.tiao3;
            this.shang = this.shang2;
        },
        xuan2() {
            this.zi2 = '2';
            this.tiao = this.tiao2;
            this.shang = this.shang3;
        },
        xuan3() {
            this.zi3 = '1';
            this.shang = this.shang2;
        },
        xuan4() {
            this.zi3 = '2';
            this.shang = this.dui;
        },
        jiao() {
            this.fei = '1';
        },
        jiao2() {
            this.fei2 = '1';
            this.fei3 = '1';
        },
        jiao3() {
            this.fei4 = '1';
            this.fei5 = '1';
        },
        xiu() {
            this.gai = '1';
            this.gai3 = '1';
        },
        xiu2() {
            this.gai2 = '1';
            this.gai3 = '0';
            this.gai4 = '1';
        },
        xiu3() {
            this.gai4 = '0';
            this.gai5 = '1';
        }
    },
    data: {
        ge: '0',
        ji: '0',
        huo: '0',
        mi: '0',
        fu: '0',
        zi2: '1',
        zi3: '1',
        fei: '0',
        fei2: '0',
        fei3: '0',
        fei4: '0',
        fei5: '0',
        gai: '0',
        gai2: '0',
        gai3: '0',
        gai4: '0',
        gai5: '0',
        tiao: {
            a: '商品信息',
            s: '市场价',
            d: '所需积分',
            f: '操作'
        },
        tiao2: {
            a: '来源/用途',
            s: '积分变化',
            d: '日期',
            f: '备注'
        },
        tiao3: {
            a: '商品信息',
            s: '市场价',
            d: '所需积分',
            f: '操作'
        },
        dui: [{
                a: 'img/S-002.jpg',
                s: '锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',
                d: '深棕色',
                f: '均码',
                g: '262.00',
                h: '500',
                j: '兑换'
            },
            {
                a: 'img/S-002.jpg',
                s: '锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',
                d: '深棕色',
                f: '均码',
                g: '¥262.00',
                h: '500',
                j: '兑换'
            },
            {
                a: 'img/S-002.jpg',
                s: '锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',
                d: '深棕色',
                f: '均码',
                g: '¥262.00',
                h: '500',
                j: '兑换'
            },
            {
                a: 'img/S-002.jpg',
                s: '锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',
                d: '深棕色',
                f: '均码',
                g: '¥262.00',
                h: '500',
                j: '兑换'
            },
            {
                a: 'img/u=1458451362,2333364562&fm=27&gp=0.jpg',
                s: '锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',
                d: '深棕色',
                f: '均码',
                g: '¥262.00',
                h: '500',
                j: '兑换'
            },
            {
                a: 'img/u=1458451362,2333364562&fm=27&gp=0.jpg',
                s: '锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',
                d: '深棕色',
                f: '均码',
                g: '¥262.00',
                h: '500',
                j: '兑换'
            },
            {
                a: 'img/u=1458451362,2333364562&fm=27&gp=0.jpg',
                s: '锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',
                d: '深棕色',
                f: '均码',
                g: '¥262.00',
                h: '500',
                j: '兑换'
            }
        ],
        shang: [{
                a: 'img/u=1458451362,2333364562&fm=27&gp=0.jpg',
                s: '锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',
                d: '深棕色',
                f: '均码',
                g: '¥262.00',
                h: '500',
                j: '兑换'
            },
            {
                a: 'img/u=1458451362,2333364562&fm=27&gp=0.jpg',
                s: '锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',
                d: '深棕色',
                f: '均码',
                g: '¥262.00',
                h: '500',
                j: '兑换'
            },
            {
                a: 'img/u=1458451362,2333364562&fm=27&gp=0.jpg',
                s: '锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',
                d: '深棕色',
                f: '均码',
                g: '¥262.00',
                h: '500',
                j: '兑换'
            },
            {
                a: 'img/u=1458451362,2333364562&fm=27&gp=0.jpg',
                s: '锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',
                d: '深棕色',
                f: '均码',
                g: '¥262.00',
                h: '500',
                j: '兑换'
            },
            {
                a: 'img/u=1458451362,2333364562&fm=27&gp=0.jpg',
                s: '锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',
                d: '深棕色',
                f: '均码',
                g: '¥262.00',
                h: '500',
                j: '兑换'
            },
            {
                a: 'img/u=1458451362,2333364562&fm=27&gp=0.jpg',
                s: '锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',
                d: '深棕色',
                f: '均码',
                g: '¥262.00',
                h: '500',
                j: '兑换'
            },
            {
                a: 'img/u=1458451362,2333364562&fm=27&gp=0.jpg',
                s: '锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',
                d: '深棕色',
                f: '均码',
                g: '¥262.00',
                h: '500',
                j: '兑换'
            }
        ],
        shang2: [{
                a: 'img/u=1458451362,2333364562&fm=27&gp=0.jpg',
                s: '锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',
                d: '深棕色',
                f: '均码',
                g: '¥262.00',
                h: '500',
                j: '兑换'
            },
            {
                a: 'img/u=1458451362,2333364562&fm=27&gp=0.jpg',
                s: '锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',
                d: '深棕色',
                f: '均码',
                g: '¥262.00',
                h: '500',
                j: '兑换'
            },
            {
                a: 'img/u=1458451362,2333364562&fm=27&gp=0.jpg',
                s: '锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',
                d: '深棕色',
                f: '均码',
                g: '¥262.00',
                h: '500',
                j: '兑换'
            },
            {
                a: 'img/u=1458451362,2333364562&fm=27&gp=0.jpg',
                s: '锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',
                d: '深棕色',
                f: '均码',
                g: '¥262.00',
                h: '500',
                j: '兑换'
            },
            {
                a: 'img/u=1458451362,2333364562&fm=27&gp=0.jpg',
                s: '锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',
                d: '深棕色',
                f: '均码',
                g: '¥262.00',
                h: '500',
                j: '兑换'
            },
            {
                a: 'img/u=1458451362,2333364562&fm=27&gp=0.jpg',
                s: '锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',
                d: '深棕色',
                f: '均码',
                g: '¥262.00',
                h: '500',
                j: '兑换'
            },
            {
                a: 'img/u=1458451362,2333364562&fm=27&gp=0.jpg',
                s: '锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',
                d: '深棕色',
                f: '均码',
                g: '¥262.00',
                h: '500',
                j: '兑换'
            }
        ],
        shang3: [{
                a: 'img/M-006.jpg',
                s: '锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',
                d: '深棕色',
                f: '均码',
                g: '+1000',
                h: '2017年4月12日 15:13:14',
                j: '交易获得'
            },
            {
                a: 'img/u=1458451362,2333364562&fm=27&gp=0.jpg',
                s: '锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',
                d: '深棕色',
                f: '均码',
                g: '-1000',
                h: '2017年4月12日 15:13:14',
                j: '交易获得'
            },
            {
                a: 'img/M-006.jpg',
                s: '锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',
                d: '深棕色',
                f: '均码',
                g: '+1000',
                h: '2017年4月12日 15:13:14',
                j: '交易获得'
            },
            {
                a: 'img/u=1458451362,2333364562&fm=27&gp=0.jpg',
                s: '锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',
                d: '深棕色',
                f: '均码',
                g: '+1000',
                h: '2017年4月12日 15:13:14',
                j: '交易获得'
            },
            {
                a: 'img/M-006.jpg',
                s: '锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',
                d: '深棕色',
                f: '均码',
                g: '+1000',
                h: '2017年4月12日 15:13:14',
                j: '交易获得'
            },
            {
                a: 'img/u=1458451362,2333364562&fm=27&gp=0.jpg',
                s: '锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',
                d: '深棕色',
                f: '均码',
                g: '+1000',
                h: '2017年4月12日 15:13:14',
                j: '交易获得'
            },
            {
                a: 'img/u=1458451362,2333364562&fm=27&gp=0.jpg',
                s: '锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',
                d: '深棕色',
                f: '均码',
                g: '+1000',
                h: '2017年4月12日 15:13:14',
                j: '交易获得'
            }
        ],
        left: [{
            url: '#',
            text: '网站代销'
        }, {
            url: './cjwt.html',
            text: '帮助中心'
        }],
        right: [{
            url: './udai_welcome3.html',
            text: '积分平台'
        }, {
            url: './udai_order.html',
            text: '我的订单'
        }, {
            url: './udai_order.html',
            text: '我的U袋'
        }, {
            url: './login.html?name=zc',
            text: '注册'
        }, {
            url: './login.html',
            text: '登录'
        }],
        hot: [{
            url: './classify.html',
            text: '连衣裙'
        }, {
            url: './classify.html',
            text: '衬衫'
        }, {
            url: './classify.html',
            text: '裤'
        }, {
            url: './classify.html',
            text: 'T恤'
        }, {
            url: './classify.html',
            text: '女包'
        }, {
            url: './classify.html',
            text: '家居服'
        }, {
            url: './classify.html',
            text: '2017新款'
        }],
        list: [{
            url: '#',
            text: '首页'
        }, {
            url: './introduction.html',
            text: '企业简介'
        }, {
            url: './agent.html',
            text: '新手上路'
        }, {
            url: '#',
            text: 'U袋学堂'
        }, {
            url: '#',
            text: '企业账号'
        }, {
            url: '#',
            text: '诚信合约'
        }, {
            url: '#',
            text: '实时下架'
        }, ],
        one: [{
            url: './introduction.html',
            text: '企业简介'
        }, {
            url: './join-U.html',
            text: '加入U袋'
        }, {
            url: './privacy.html',
            text: '隐私说明'
        }],
        two: [{
            url: './udai_welcome6.html',
            text: '售后服务'
        }, {
            url: './psfw.html',
            text: '配送服务'
        }, {
            url: './yhxy.html',
            text: '用户协议'
        }, {
            url: './cjwt.html',
            text: '常见问题'
        }],
        three: [{
            url: './agent.html',
            text: '如何成为代理商'
        }, {
            url: './sales.html',
            text: '代销商上架教程'
        }, {
            url: './distributor.html',
            text: '分销商常见问题'
        }, {
            url: './payment.html',
            text: '付款账户'
        }],
        copy: [{
            url: '#',
            text: '网店代销'
        }, {
            url: '#',
            text: 'U袋学堂'
        }, {
            url: '#',
            text: '联系我们'
        }, {
            url: './introduction.html',
            text: '企业简介'
        }, {
            url: './agent.html',
            text: '新手上路'
        }]
    }
})
//                                               LAYUI
layui.use('laydate', function () {
    var laydate = layui.laydate;
    laydate.render({
        elem: '#test22',
        showBottom: false
    });
})
//                                       JQUERY
window.onscroll = function () {
    if ($(document).scrollTop() > $(window).height()) {
        $('.return a.return-top').css({
            'display': 'block'
        })
        $('.return').css({
            'bottom': '10px'
        })
    }
    if ($(document).scrollTop() == 0) {
        $('.return a.return-top').css({
            'display': 'none'
        })
        $('.return').css({
            'bottom': '-35px'
        })
    }
}