//支付密码
$.fn.payPwd = function(options) {
    //键盘按键代码
    var keyCode = {
        //数字键键值
        48: "0",
        49: "1",
        50: "2",
        51: "3",
        52: "4",
        53: "5",
        54: "6",
        55: "7",
        56: "8",
        57: "9",
        //小键盘数字键键值
        96: "0",
        97: "1",
        98: "2",
        99: "3",
        100:"4",
        101:"5",
        102:"6",
        103:"7",
        104:"8",
        105:"9",
    };

    var defaults = {
        //索引
        index   : 0,
        //input个数
        max     : 6,
        //成功回调
        callback: $.noop,
        //密码数组
        pwdArr  : [],
        //input type
        type    : "password"
    };

    var self       = this;
    var set        = $.extend(defaults, options);

    if(set.type == "number"){
        self.find('.box').addClass('normal')
    }

    //绑定keyup事件
    self.on('keyup','input',function(e){
        var key        = e.keyCode
        var _this      = $(this);
        var $item      = self.find(".item")


        //数字键盘，功能区键盘数字
        if(key >= 96 && key <= 105 || key >= 48 && key <= 57){

            if(set.index >= set.max - 1){
                set.index = set.max - 1
            }
            
            var num = keyCode[key]

            $item.eq(set.index).find('input').blur()

            if(set.type == "password"){
                $item.eq(set.index).addClass('circle')
                $item.eq(set.index).find('input').val('')
            }else{
                $item.eq(set.index).find('input').val(num)
            }

            set.pwdArr[set.index] = num

            set.index++

            if(set.index >= set.max - 1){
                $item.eq(set.max - 1).find('input').focus();
            }else{
                $item.eq(set.index).find('input').focus();
            }
            
        }else if(key == 8 || key == 46){
            //删除

            set.index--

            if(set.index <= 0){
                set.index = 0
            }
            
            if(set.type == "password"){
                $item.eq(set.index).removeClass('circle')
            }else{
                $item.eq(set.index).find('input').val('')
            }

            set.pwdArr.splice(set.index,1)
            $item.eq(set.index).find('input').focus()

        }else{
            $item.eq(set.index).find('input').val('')
            
        }

        //等于六位，回调
        if(set.pwdArr.length == set.max){
            //console.log(set.pwdArr)
            typeof set.callback == 'function' && set.callback(set.pwdArr.join(''));
        }
        
    })

    //input focus逻辑
    self.on('click','.box',function(e){
        var $item    = self.find('.item')
        var focusAbs = ''

        for(var i=0;i<set.max;i++){
            if(set.type == 'password'){
                focusAbs =  Boolean(!$item.eq(i).hasClass('circle'))
            }else if(set.type == 'number'){
                focusAbs =  Boolean($item.eq(i).find('input').val() == '')
            }

            if(focusAbs){
                $item.eq(i).find('input').focus()
                return false
            }else{
                $item.eq(set.max - 1).find('input').focus()
            }
        }
    })
}