//                                    VUE
var vm = new Vue({
    el: "#box",
    methods: {
        addClassload(index) {
            this.num = index;
            console.log(this.num)
        },
        jiantou() {
            if (this.jian == '0') {
                this.shangjian = this.xiajian2;
                this.jian = '1';
            } else {
                this.shangjian = this.shangjian2;
                this.jian = '0';
            }
        },
        jiantou2() {
            if (this.jian2 == '0') {
                this.xiajian = this.shangjian2;
                this.jian2 = '1';
            } else {
                this.xiajian = this.xiajian2;
                this.jian2 = '0';
            }
        }
    },
    data: {
        num: '',
        num1: '3',
        jian: '0',
        jian2: '0',
        shangjian: 'glyphicon glyphicon-arrow-down',
        shangjian2: 'glyphicon glyphicon-arrow-down',
        xiajian: 'glyphicon glyphicon-arrow-up',
        xiajian2: 'glyphicon glyphicon-arrow-up',
        lie: [{
                a: './img/S-001.jpg',
                b: '运城大盘鸡运城大盘鸡运城大盘鸡运城大盘鸡运城大盘鸡',
                c: '90.00',
                d: '100',
                e: '10',
                f: '666',
                g: '333',
                h: '1111'
            },
            {
                a: './img/S-001.jpg',
                b: '运城大盘鸡运城大盘鸡运城大盘鸡运城大盘鸡运城大盘鸡',
                c: '90.00',
                d: '100',
                e: '10',
                f: '666',
                g: '333',
                h: '1111'
            },
            {
                a: './img/S-001.jpg',
                b: '运城大盘鸡运城大盘鸡运城大盘鸡运城大盘鸡运城大盘鸡',
                c: '90.00',
                d: '100',
                e: '10',
                f: '666',
                g: '333',
                h: '1111'
            },
            {
                a: './img/S-001.jpg',
                b: '运城大盘鸡运城大盘鸡运城大盘鸡运城大盘鸡运城大盘鸡',
                c: '90.00',
                d: '100',
                e: '10',
                f: '666',
                g: '333',
                h: '1111'
            },
            {
                a: './img/S-001.jpg',
                b: '运城大盘鸡运城大盘鸡运城大盘鸡运城大盘鸡运城大盘鸡',
                c: '90.00',
                d: '100',
                e: '10',
                f: '666',
                g: '333',
                h: '1111'
            },
            {
                a: './img/S-001.jpg',
                b: '运城大盘鸡运城大盘鸡运城大盘鸡运城大盘鸡运城大盘鸡',
                c: '90.00',
                d: '100',
                e: '10',
                f: '666',
                g: '333',
                h: '1111'
            },
            {
                a: './img/S-001.jpg',
                b: '运城大盘鸡运城大盘鸡运城大盘鸡运城大盘鸡运城大盘鸡',
                c: '90.00',
                d: '100',
                e: '10',
                f: '666',
                g: '333',
                h: '1111'
            },
            {
                a: './img/S-001.jpg',
                b: '运城大盘鸡运城大盘鸡运城大盘鸡运城大盘鸡运城大盘鸡',
                c: '90.00',
                d: '100',
                e: '10',
                f: '666',
                g: '333',
                h: '1111'
            },
            {
                a: './img/S-001.jpg',
                b: '运城大盘鸡运城大盘鸡运城大盘鸡运城大盘鸡运城大盘鸡',
                c: '90.00',
                d: '100',
                e: '10',
                f: '666',
                g: '333',
                h: '1111'
            },
            {
                a: './img/S-001.jpg',
                b: '运城大盘鸡运城大盘鸡运城大盘鸡运城大盘鸡运城大盘鸡',
                c: '90.00',
                d: '100',
                e: '10',
                f: '666',
                g: '333',
                h: '1111'
            },
            {
                a: './img/S-001.jpg',
                b: '运城大盘鸡运城大盘鸡运城大盘鸡运城大盘鸡运城大盘鸡',
                c: '90.00',
                d: '100',
                e: '10',
                f: '666',
                g: '333',
                h: '1111'
            },
            {
                a: './img/S-001.jpg',
                b: '运城大盘鸡运城大盘鸡运城大盘鸡运城大盘鸡运城大盘鸡',
                c: '90.00',
                d: '100',
                e: '10',
                f: '666',
                g: '333',
                h: '1111'
            },
            {
                a: './img/S-001.jpg',
                b: '运城大盘鸡运城大盘鸡运城大盘鸡运城大盘鸡运城大盘鸡',
                c: '90.00',
                d: '100',
                e: '10',
                f: '666',
                g: '333',
                h: '1111'
            },
            {
                a: './img/S-001.jpg',
                b: '运城大盘鸡运城大盘鸡运城大盘鸡运城大盘鸡运城大盘鸡',
                c: '90.00',
                d: '100',
                e: '10',
                f: '666',
                g: '333',
                h: '1111'
            },
            {
                a: './img/S-001.jpg',
                b: '运城大盘鸡运城大盘鸡运城大盘鸡运城大盘鸡运城大盘鸡',
                c: '90.00',
                d: '100',
                e: '10',
                f: '666',
                g: '333',
                h: '1111'
            },
            {
                a: './img/S-001.jpg',
                b: '运城大盘鸡运城大盘鸡运城大盘鸡运城大盘鸡运城大盘鸡',
                c: '90.00',
                d: '100',
                e: '10',
                f: '666',
                g: '333',
                h: '1111'
            },
            {
                a: './img/S-001.jpg',
                b: '运城大盘鸡运城大盘鸡运城大盘鸡运城大盘鸡运城大盘鸡',
                c: '90.00',
                d: '100',
                e: '10',
                f: '666',
                g: '333',
                h: '1111'
            },
            {
                a: './img/S-001.jpg',
                b: '运城大盘鸡运城大盘鸡运城大盘鸡运城大盘鸡运城大盘鸡',
                c: '90.00',
                d: '100',
                e: '10',
                f: '666',
                g: '333',
                h: '1111'
            },
            {
                a: './img/S-001.jpg',
                b: '运城大盘鸡运城大盘鸡运城大盘鸡运城大盘鸡运城大盘鸡',
                c: '90.00',
                d: '100',
                e: '10',
                f: '666',
                g: '333',
                h: '1111'
            },
            {
                a: './img/S-001.jpg',
                b: '运城大盘鸡运城大盘鸡运城大盘鸡运城大盘鸡运城大盘鸡',
                c: '90.00',
                d: '100',
                e: '10',
                f: '666',
                g: '333',
                h: '1111'
            }
        ],
        bao: [{
                a: 'img/S-002.jpg',
                b: '199.00'
            },
            {
                a: 'img/S-002.jpg',
                b: '199.00'
            },
            {
                a: 'img/S-002.jpg',
                b: '199.00'
            },
            {
                a: 'img/S-002.jpg',
                b: '199.00'
            },
            {
                a: 'img/S-002.jpg',
                b: '199.00'
            },
            {
                a: 'img/S-002.jpg',
                b: '199.00'
            },
            {
                a: 'img/S-002.jpg',
                b: '199.00'
            },
            {
                a: 'img/S-002.jpg',
                b: '199.00'
            },
            {
                a: 'img/S-002.jpg',
                b: '199.00'
            },
            {
                a: 'img/S-002.jpg',
                b: '199.00'
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
        }],
        geshu: '12345678'
    },
    filters: {
        geshu2(value) {
            if (value.length > 4) {
                value = value.substring(0, value.length - 4) + '万+';
            }
            return value
        },
        qianfen(value) {
            value = value.toString().replace(/\$|\,/g, '');
            if (isNaN(value)) value = "0";
            sign = (value == (value =
                Math.abs(value)));
            value = Math.floor(value * 100 + 0.50000000001);
            cents = value % 100;
            value = Math.floor(value / 100).toString();
            if (cents <
                10) cents = "0" + cents;
            for (var i = 0; i < Math.floor((value.length - (1 + i)) / 3); i++) value = value.substring(0,
                value.length - (4 * i + 3)) + ',' + value.substring(value.length - (4 * i + 3));
            value = (((sign) ? '' : '-') + value +
                '.' + cents);
            return value
        },
        shuoming(value) {
            if (value.length > 25) {
                value = value.substring(0, 25) + '······';
            }
            return value
        }
    }
})

//                                     LAYUI
layui.use('element', function () {
    var element = layui.element; //导航的hover效果、二级菜单等功能，需要依赖element模块 
    // 监听导航点击 
    element.on('nav(demo)',
        function (elem) {
            layer.msg(elem.text());
        });
});
//                                       JQUERYs
window.onload = function () {
    for (var i = 0; i < $('.cc').length; i++) {
        $('.cc').eq(i).mouseover(function () {
            $(this).children(".lie-you-q-w-q").addClass('huan-q');
            $(this).children(".lie-you-q-w-w").addClass('huan-w');
        });
        $('.cc').eq(i).mouseout(function () {
            $(this).children(".lie-you-q-w-q").removeClass('huan-q');
            $(this).children(".lie-you-q-w-w").removeClass('huan-w');
        });
    };
}
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