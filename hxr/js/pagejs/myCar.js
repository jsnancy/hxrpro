var vm = new Vue({
    el:'#app',
    data:{
        left:[
            {url:'#',text:'网站代销'},
            {url:'#',text:'帮助中心'}
        ],
        right:[
            {url:'#',text:'积分平台'},
            {url:'#',text:'我的订单'},
            {url:'#',text:'我的U袋'},
            // {url:'#',text:'注册'},
            // {url:'#',text:'登录'}
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
        ],
        goodsDetail: [
                {
                    imgUrl: './img/temp/M-003.jpg',
                    description: '我的螺丝钉解放数量大幅减少受到了发士大夫受到法律我的螺丝钉解放数量大幅减少受到了发士大夫受到法律我螺丝钉解放数量大幅减少受到了发士大夫受到法律我螺丝钉解放数量大幅减少受到了发士大夫受到法律我',
                    kinds: '深棕色',
                    size: '均码',
                    price: 1111111111,
                    amounts: 1,
                    nowPrice: 20.0,
                    infiction: false,
                    id:1
                },
                {
                    imgUrl: './img/temp/M-002.jpg',
                    description: '我的螺丝钉解放数量大幅减少受到了发士大夫受到法律',
                    kinds: '白色',
                    size: '小码',
                    price: 30.0,
                    amounts: 2,
                    nowPrice: 20.0,
                    infiction: false,
                    id:2
                },
                {
                    imgUrl: './img/temp/M-004.jpg',
                    description: '我的螺丝钉解放数量大幅减少受到了发士大夫受到法律',
                    kinds: '绿色',
                    size: '大码',
                    price: 40.0,
                    amounts: 3,
                    nowPrice: 30.0,
                    infiction: false,
                    id:3
                },
                {
                    imgUrl: './img/temp/M-004.jpg',
                    description: '我的螺丝钉解放数量大幅减少受到了发士大夫受到法律',
                    kinds: '绿色',
                    size: '大码',
                    price: 40.0,
                    amounts: 3,
                    nowPrice: 30.0,
                    infiction: false,
                    id:4
                }
            ],
            flag: false,
            num: 0,
            arr: []//将goodsDetail里面被选中项的数据添加进去

        },
        computed: {
            sum() {
                var sumNum = 0;
                for (var i = 0; i < this.arr.length; i++) {
                    var item = this.arr[i];
                    sumNum += item.amounts;
                }
                return sumNum
            },
            totalPrice() {
                var totalP = 0;
                for (var i = 0; i < this.arr.length; i++) {
                    var item = this.arr[i];
                    totalP += item.amounts * item.nowPrice;
                }
                return totalP
            }
        },
        filters:{
            filterone(value){
                if(isNaN(value)){
                    return 0
                }else if(value>=10000&&value<=1000000){
                    let newVal = value/10000;
                    // console.log(newVal)
                    return newVal.toFixed(2)+'万'
                }else if(value<10000&&value>=0){
                    return value
                }else if(value<0){
                    return 0
                }else if(value>10000000){
                    return (value/10000000).toFixed(2)+'万+'
                }
            }
        },
        methods: {
            chooseAll() {
                if (this.flag == true) {
                    this.flag = false;
                    for (var i = 0; i < this.goodsDetail.length; i++) {
                        this.goodsDetail[i].infiction = false;
                        this.arr = [];
                    }
                } else {
                    this.flag = true;
                    for (var i = 0; i < this.goodsDetail.length; i++) {
                        this.goodsDetail[i].infiction = true;
                        this.arr.push(this.goodsDetail[i])
                    }
                 }
            },
            chooseTheBtn(index) {
                if (this.goodsDetail[index].infiction == true) {//判断当前选中对象是否被选中
                    this.goodsDetail[index].infiction = false;//若被选中，则改为未选中
                    for (var i = 0; i < this.arr.length; i++) {//遍历原本被选中对象添加到的新数组
                        if (this.arr[i].infiction == false) {//判断该数组中每一项是否被选中
                            this.arr.splice(i, 1)//被选中的从数组中删除掉
                        }
                    }
                    this.num--;
                    this.sum = 0;
                    this.num >= 0;
                } else {
                    this.goodsDetail[index].infiction = true;
                    // console.log(this.goodsDetail[index].description.length)
                    this.arr.push(this.goodsDetail[index]);
                    this.num++;
                    this.sum = num;
                    this.num <= this.goodsDetail.length;
                }
                // 判断num和goodsDetail.length是否相等
                if (this.num == this.goodsDetail.length) {
                    this.flag = true;
                } else if (this.num != this.goodsDetail.length) {
                    this.flag = false;
                }

            },
            clickPlus(index) {
                vm.goodsDetail[index].amounts++;
            },
            clickMinus(index) {
                if (vm.goodsDetail[index].amounts <= 1) {
                    // return alert('不能再减了')
                    return vm.goodsDetail[index].amounts = 1;
                }
                // if (vm.goodsDetail[index].amounts >= 99) {
                //     // return alert('不能再减了')
                //     return vm.goodsDetail[index].amounts = 99;
                // }
                vm.goodsDetail[index].amounts--;
            },
            deleteThis(index) {
                if(this.goodsDetail[index].infiction==true){
                    this.goodsDetail[index].infiction = false;
                    for(var i=0;i<this.arr.length;i++){
                        if(this.arr[i].infiction==false){
                            this.arr.splice(i,1);
                        }
                    }
                    this.goodsDetail.splice(index,1)
                }else{
                    this.goodsDetail.splice(index,1)
                }
            },
            delSelected() {
                for (var i = 0; i < this.goodsDetail.length; i++) {
                    if (this.goodsDetail[i].infiction == true) {
                        this.goodsDetail.splice(i, this.arr.length)
                    }
                }
                this.arr = [];
                this.num = 0;
                if (this.flag == true) {
                    this.flag = false;
                }
            },
        }
})