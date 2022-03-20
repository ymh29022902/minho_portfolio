$(function(){
	

	var phone_height = $(".sub_content_wrap").height();

	var phone_height_type1=0;
	var phone_height_type2=0;

	function phone_slide(){

		if ($(".sub_content_web:first").children("img").height()%phone_height < phone_height){
			phone_height_type1 += $(".sub_content_web:first").children("img").height()%phone_height
		}else{
			phone_height_type1 += $(".sub_content_web:first img").height();
		};

		if ($(".sub_content_web:last").children("img").height()%phone_height < phone_height){
			phone_height_type2 += $(".sub_content_web:last").children("img").height()%phone_height
		}else{
			phone_height_type2 += $(".sub_content_web:last img").height();
		};

		if(phone_height_type1 >= $(".sub_content_web:first").children("img").height()-phone_height){
			phone_height_type1 = 0;
		}

		if(phone_height_type2 >= $(".sub_content_web:last").children("img").height()-phone_height){
			phone_height_type2 = 0;
		}

		$(".sub_content_web:first").children("img").animate({
			marginTop:-phone_height_type1
		},700);

		$(".sub_content_web:last").children("img").animate({
			marginTop:-phone_height_type2
		},700);
	}

	setInterval(phone_slide, 3000);	
});;