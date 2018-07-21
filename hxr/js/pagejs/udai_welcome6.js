//                                    VUE
var vm = new Vue({
    el: "#udai-welcome ",
    methods: {

    },
    data: {
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
            },
            {
                url: './login.html?name=zc',
                text: '注册'
            }, {
                url: './login.html',
                text: '登录'
            }
        ],
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
            },
            {
                url: './classify.html',
                text: '女包'
            }, {
                url: './classify.html',
                text: '家居服'
            }, {
                url: './classify.html',
                text: '2017新款'
            }
        ],
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
            },
            {
                url: '#',
                text: '企业账号'
            }, {
                url: '#',
                text: '诚信合约'
            }, {
                url: '#',
                text: '实时下架'
            },
        ],
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
//                                     LAYUI
//                                       JQUERYs
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