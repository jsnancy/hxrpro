var vm = new Vue({
    el: '#app',
    data: {
        sj:[
            {
                img:'./img/temp/M-003.jpg',
                tit:'锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',
                cfl:'颜色分类：深棕色 尺码：均码',
                num:'1',
                dj:'22.0',
                zj:'18.0',
                yf:'18.0'
            },
            {
                img:'./img/temp/M-003.jpg',
                tit:'锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',
                cfl:'颜色分类：深棕色 尺码：均码',
                num:'1',
                dj:'22.0',
                zj:'18.0',
                yf:'18.0'
            },
            {
                img:'./img/temp/M-003.jpg',
                tit:'锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',
                cfl:'颜色分类：深棕色 尺码：均码',
                num:'1',
                dj:'22.0',
                zj:'18.0',
                yf:'18.0'
            }
        ],
        show:true,
        back:false,
        active: 0,
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

    },
    mounted:function() {
        
    }
})
$(function(){
    $("#payPwd").payPwd({
        max:6,
        type:"password",
        callback:function(arr) {
            // console.log(arr);
            $("#inputtype").html(arr);
        }
    })
})