var vm=new Vue({
	el:"#app",
	data:{
		totalMoney:0,
		productList:[
			{
				"productId":"60001",
				"productName":"锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款",
				"productPrice":19,
				"productQuentity":1,
				"productImage":"img/img1.jpg",
				"parts":[
					{
						"partsId":"10001",
						"partsName":"深棕色 尺码：均码"
					},
					{
						"partsId":"10002",
						"partsName":"深棕色 尺码：均码"
					}
				]
			},
			{
				"productId":"60002",
				"productName":"锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款",
				"productPrice":15,
				"productQuentity":1,
				"productImage":"img/img1.jpg",
				"parts":[
					{
						"partsId":"10003",
						"partsName":"深棕色 尺码：均码"
					}
				]
			}
		],
		checkAllFlag:false
	},
	filters:{
		formatMoney: function (value) {
			return "￥ "+value.toFixed(2);
		}
	},
	mounted:function(){
		// this.cartView();
	},
	methods:{
		// cartView:function () {
		// 	var _this=this;
		// 	//获取商品数据信息
		// 	// this.$http.get("data/cartData.json").then(function (res) {
		// 	// 	_this.productList = res.body.result.list;
				
		// 	// })
		// },
		//点击增加或减少商品数量按钮后修改对应金额
		changeMoney:function (product,way) {
			if (way>0) {
				product.productQuentity++;
			}else{
				product.productQuentity--;
				if (product.productQuentity<1) {
					product.productQuentity=1;
				}
			}
			this.getTotalMoney();
		},
		//单选框设置
		checkBox:function (item){
			var _this=this;
			var num=0;
			if (typeof item.check == "undefined") {
				this.$set(item,"check",true);
			}else{
				item.check = !item.check;
			}
			this.productList.forEach(function (item,value) {
				if (item.check) {
					num++;
				}
			})
			if (num==_this.productList.length) {
				this.checkAllFlag=true;
			}else{
				this.checkAllFlag=false;
			}
			this.getTotalMoney();
		},
		//全选按钮设置
		checkAll:function (){
			var _this=this;
			this.checkAllFlag = !this.checkAllFlag;
			this.productList.forEach(function(item,index){
				if (typeof item.check == "undefined") {
					_this.$set(item,"check",_this.checkAllFlag);
				}else{
					item.check = _this.checkAllFlag;
				}
			})
			this.getTotalMoney();
		},
		//总金额设置
		getTotalMoney:function () {
			var _this=this;
			this.totalMoney = 0;
			this.productList.forEach(function (item,index) {
				if (item.check) {
					_this.totalMoney += item.productQuentity*item.productPrice;
				}
			})
		},
		//删除商品
		del: function (item) {
			var index=this.productList.indexOf(item);
			this.productList.splice(index,1);
			this.getTotalMoney();
		}
	}
})