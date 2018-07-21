$(document).ready(function(){	
	$("#area>span:first-child").click(function(){
		$("#share").show();
	});
	$("#tou i").click(function(){
		$("#share").hide();
	});
    
    $("#left").click(function(){
    	 var num_left=$(this).next().text();
    	 var num_le=parseInt(num_left);
    	 if(num_le!=1){
            $(this).next().text(num_left-1);
            $("#imag ul").css({"margin-left":"0px","transition":"all .5s"}); 
    	 };
    });
    $("#right").click(function(){
    	 var num_right=$("#left").next().text();
    	 var num_ri=parseInt(num_right);
    	 if(num_ri!=2){
            $("#left").next().text(num_ri+1);
            $("#imag ul").css({"margin-left":"-478px","transition":"all .5s"})
    	 }
    });
    $("#share-ne p:last-of-type a span").click(function(){
    	$("#share-ne p:last-of-type a span").children().css("background","url(images/icons/T1P.png) -296px 0px  no-repeat");
    	$(this).children().css("background","url(images/icons/T1P.png) -288px -10px  no-repeat");
    })

    $("#imag ul li").click(function(){
        $("#imag ul li").css({"border":"1px solid #D2D2D2"})
        $(".bor").css({"position":"absolute","right":"0","bottom":"0","padding":"10px","background":"url(images/icons/T1P.png) -365px 0px  no-repeat"});
        $(this).css({"border":"2px solid #B20000"});
		$(this).children(".bor").css({"position":"absolute","right":"0","bottom":"0","padding":"10px","background":"url(images/icons/T1P.png) -265px 0px  no-repeat"});

    });
})