$(document).ready(function(){
	
	var pay;
	$(".ep").click(function(){
        var pays= $(this).children("input").val();
	    pay=pays;
	});
    $(".btn").click(function(){
        if(pay=="3"){
        	$("#Wechat").show();
        	setTimeout(his, 200);
     	
        }
    });

    $("#Wechat_bd").mouseover(function(){
       $(this).next().css({"opacity":"1","transition":"all .3s"});
    });
    $("#Wechat_bd").mouseout(function(){
       $(this).next().css({"opacity":"0","transition":"all .3s"});
    });
    $("#Wechat_he i").click(function(){
        $("#Wechat").css({"position":"fixed","top":"0","transition":"all .3s","opacity":"0"});
        $("#mask").fadeOut();
        $("#mask").css({"z-index":"0"});
        setTimeout(hi, 1000);
     });
    

});
function hi(){
	$("#Wechat").hide();
}
function his(){
    $("#Wechat").css({"position":"fixed","top":"17%","transition":"all .3s","opacity":"1"});
	$("#mask").fadeIn();
	$("#mask").css({"z-index":"9999"});   
}