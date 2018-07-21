let interval = null;
var vm = new Vue({
    el:'.login',
    data:{
        logo:'./img/logo-news.png',
        msg:'',
        tpyz:'',
        time:60,
        timee:60,
        sendMsgDisabledd: false,
        sendMsgDisabled: false,
        msgg:'',
        msg1:'',
        msgg1:'',
        msg2:'',
        msgg2:'',
        phone:'',
        pass:'',
        phone1:'',
        pass1:'',
        phone2:'',
        pass2:'',
        yzm:'',
        flag:true,
        flag1:true,
        flag2:true,
        change:true,
        change1:true,
        change2:true,
        dis:false,
        diss:false,
        password:'password',
        password1:'password',
        password2:'password',
        condition:true,
        condition1:false,
        condition2:false,
        copy:[
            {url:'#',text:'网店代销'},
            {url:'#',text:'U袋学堂'},
            {url:'#',text:'联系我们'},
            {url:'#',text:'企业简介'},
            {url:'#',text:'新手上路'}
        ]
    },
    methods: {
        //***************************登录input框判断
        login:function(){
            var reg= 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
            var patrn=/^(\w){6,20}$/;                   //只能输入6-20个字母、数字、下划线
            if(vm.phone == '' && vm.pass == ''){
                vm.flag = false;
                vm.msg = '手机号码为空';
                vm.msgg = '请输入手机号码';
            }else if(vm.phone == ''){
                vm.flag = false;
                vm.msg = '手机号码为空';
                vm.msgg = '请输入手机号码';
            }else if(!reg.test(vm.phone)){
                vm.flag = false;
                vm.msg = '手机号码错误';
                vm.msgg = '请输入11位数的号码';
            }else if(vm.pass== ''){
                vm.flag = false;
                vm.msg = '密码不能为空';
                vm.msgg = '请输入密码';
            }else if(!patrn.test(vm.pass)){
                vm.flag = false;
                vm.msg = '密码过于简单';
                vm.msgg = '密码需为字母、数字或特殊字符组合';
            }else{
                $.ajax({
                    url:"http://192.168.51.31:8080/user/loginUser",
                    type:"post",	
                    
                    // data:{weight:10,categoryOne:0,pageSize:6},
                    data:{username:vm.phone,password:vm.pass},
                    dataType:"JSON",
                    success:function(data){
                        // alert(1)
                        // var json = eval('('+data+')');
                        // alert(data.success)
                        if(data.success == true){
                           window.location.href='./index.html'
                        }
                    },

                })
            }
            
        },
        //***************************注册input框判断
        login1:function(){
            var reg= 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
            var patrn=/^(\w){6,20}$/;                   //只能输入6-20个字母、数字、下划线
            if(vm.phone1 == '' && vm.pass1 == ''){
                vm.flag1 = false;
                vm.msg1 = '手机号码为空';
                vm.msgg1 = '请输入手机号码';
            }else if(vm.phone1 == ''){
                vm.flag1 = false;
                vm.msg1 = '手机号码为空';
                vm.msgg1 = '请输入手机号码';
            }else if(!reg.test(vm.phone1)){
                vm.flag1 = false;
                vm.msg1 = '手机号码错误';
                vm.msgg1 = '请输入11位数的号码';
            }else if(vm.pass1 == ''){
                vm.flag1 = false;
                vm.msg1 = '密码不能为空';
                vm.msgg1 = '请输入密码';
            }else if(!patrn.test(vm.pass1)){
                vm.flag1 = false;
                vm.msg1 = '密码过于简单';
                vm.msgg1 = '密码需为字母、数字或特殊字符组合';
            }
        },
        //***************************修改input框判断
        login2:function(){
            var reg= 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
            var patrn=/^(\w){6,20}$/;                   //只能输入6-20个字母、数字、下划线
            if(vm.phone2 == '' && vm.pass2 == ''){
                vm.flag2 = false;
                vm.msg2 = '手机号码为空';
                vm.msgg2 = '请输入手机号码';
            }else if(vm.phone2 == ''){
                vm.flag2 = false;
                vm.msg2 = '手机号码为空';
                vm.msgg2 = '请输入手机号码';
            }else if(!reg.test(vm.phone2)){
                vm.flag2 = false;
                vm.msg2 = '手机号码错误';
                vm.msgg2 = '请输入11位数的号码';
            }else if(vm.pass2 == ''){
                vm.flag2 = false;
                vm.msg2 = '密码不能为空';
                vm.msgg2 = '请输入密码';
            }else if(!patrn.test(vm.pass2)){
                vm.flag2 = false;
                vm.msg2 = '密码过于简单';
                vm.msgg2 = '密码需为字母、数字或特殊字符组合';
            }
        },
        //登录页关闭
        close:function(){
            vm.flag = true;
        },
        //注册页关闭
        close1:function(){
            vm.flag1 = true;
        },
        //修改密码页关闭
        close2:function(){
            vm.flag2 = true;
        },
        toggle:function(){                                      //登录密码切换
            vm.change = !vm.change;
            vm.password = vm.password === 'password'?'text':'password';
        },
        toggle1:function(){                                     //注册密码切换
            vm.change1 = !vm.change1;
            vm.password1 = vm.password1 === 'password'?'text':'password';
        },
        toggle2:function(){                                     //修改密码切换
            vm.change2 = !vm.change2;
            vm.password2 = vm.password2 === 'password'?'text':'password';
        },
        // 登录跳注册动画开关
        dianwo(){
            this.condition = false;
            this.condition1 = true;
        },
        // 注册返回登录页开关
        backLogin:function(){
            this.condition = true;
            this.condition1 = false;
        },
        // 登录跳修改动画开关
        jumpChange:function(){
            this.condition = false;
            this.condition2 = true;
        },
        // 修改返回登录页开关
        backLogin1:function(){
            this.condition = true;
            this.condition2 = false;
        },
        sendd:function(){
            let me = this;
            me.sendMsgDisabled = true;
            vm.diss=true;
            clearInterval(interval);
            interval = window.setInterval(function() {
                if ((me.time--) <= 0) {
                    me.time = 60;
                    me.sendMsgDisabled = false;
                    window.clearInterval(interval);
                    vm.diss=false;
                }
            }, 1000);
        },
        senddd:function(){
            let me = this;
            vm.dis=true;
            me.sendMsgDisabledd = true;
            clearInterval(interval);
            interval = window.setInterval(function() {
                if ((me.timee--) <= 0) {
                    me.timee = 60;
                    me.sendMsgDisabledd = false;
                    window.clearInterval(interval);
                    vm.dis = false;
                }
            }, 1000);
        }
    },
    mounted() {
        var zhu = window.location.search;
        if(zhu == '?name=zc'){
            this.condition = false;
            this.condition1 = true;
            this.condition2 = false;
        }
    },
})