//                                    VUE
var vm = new Vue({
    el: "#udai-welcome ",
    methods: {
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
            var Val = document.getElementById('val');
            var Val2 = document.getElementById('vla2');
            if (Val.value == Val2.value) {
                if (Val.value != '' && Val2.value != '') {
                    this.gai4 = '0';
                    this.gai5 = '1';
                    miao2 = 3;
                    var timer = null;
                    timer = setInterval(function () {
                        if (miao2 != 0) {
                            miao2--;
                            vm.miao = miao2;
                        }
                    }, 1000)
                } else {
                    alert('密码不能为空')
                }
            } else {
                alert('新密码不一致，重新输入');
                Val.value = '';
                Val2.value = '';
            }
        }
    },
    data: {
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
        zhenyan: 'img/zhengyan_20180718091944.png',
        biyan: 'img/biyan_20180720132237.png',
        biyan2: 'img/biyan_20180720132237.png',
        biyaner: 'img/biyan_20180720132237.png',
        biyansan: 'img/biyan_20180720132237.png',
        miao: '3'
    }
})
//                                     LAYUI
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
window.onload = function () {
    $('#yanjing').click(function () {
        if (vm.zhenyan != vm.biyan) {
            vm.biyan = vm.zhenyan;
            $('#diyi').attr("type", "text")
        } else {
            vm.biyan = vm.biyan2;
            $('#diyi').attr("type", "password")
        }
    })
    $('#yanjing2').click(function () {
        if (vm.zhenyan != vm.biyaner) {
            vm.biyaner = vm.zhenyan;
            $('#val').attr("type", "text")
        } else {
            vm.biyaner = vm.biyan2;
            $('#val').attr("type", "password")
        }
    })
    $('#yanjing3').click(function () {
        if (vm.zhenyan != vm.biyansan) {
            vm.biyansan = vm.zhenyan;
            $('#vla2').attr("type", "text")
        } else {
            vm.biyansan = vm.biyan2;
            $('#vla2').attr("type", "password")
        }
    })
}