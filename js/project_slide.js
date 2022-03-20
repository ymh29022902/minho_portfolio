$(document).ready(function(){

	//기존 애니메이션

	var img_height_1 = $(".main_content_img_1").height()*0.81;
	var img_height_2 = $(".main_content_img_2").height()*0.84;
	var img_height_3 = $(".main_content_img_3").height()*0.84;
	var img_height_4 = $(".main_content_img_4").height()*0.86;

			
	$("#main_area_1 > .main_content").mouseover(function(){
		$(this).find(".main_content_img_1").stop().animate({marginTop:-img_height_1},8000);
	}).mouseleave(function(){
		$(this).find(".main_content_img_1").stop().animate({margin:'0'},3000);
	});

	$("#main_area_2 > .main_content").mouseover(function(){
		$(this).find(".main_content_img_2").stop().animate({marginTop:-img_height_2},10000);
	}).mouseleave(function(){
		$(this).find(".main_content_img_2").stop().animate({margin:'0'},3000);
	});

	$("#main_area_3 > .main_content").mouseover(function(){
		$(this).find(".main_content_img_3").stop().animate({marginTop:-img_height_3},10000);
	}).mouseleave(function(){
		$(this).find(".main_content_img_3").stop().animate({margin:'0'},3000);
	});

	$("#main_area_4 > .main_content").mouseover(function(){
		$(this).find(".main_content_img_4").stop().animate({marginTop:-img_height_4},10000);
	}).mouseleave(function(){
		$(this).find(".main_content_img_4").stop().animate({margin:'0'},3000);
	});


	//width 700px 미만시 작동 

	$(window).resize(function(){
		if(window.innerWidth < 700){

			$("#main_area_1 > .main_content").mouseover(function(){
					$(this).find(".main_content_img_1").stop().animate({marginTop:-img_height_1*0.85},7000);
				}).mouseleave(function(){
					$(this).find(".main_content_img_1").stop().animate({margin:'0'},3000);
				});

				$("#main_area_2 > .main_content").mouseover(function(){
					$(this).find(".main_content_img_2").stop().animate({marginTop:-img_height_2*0.965},25000);
				}).mouseleave(function(){
					$(this).find(".main_content_img_2").stop().animate({margin:'0'},3000);
				});

				$("#main_area_3 > .main_content").mouseover(function(){
					$(this).find(".main_content_img_3").stop().animate({marginTop:-img_height_3*0.965},21000);
				}).mouseleave(function(){
					$(this).find(".main_content_img_3").stop().animate({margin:'0'},3000);
				});

				$("#main_area_4 > .main_content").mouseover(function(){
					$(this).find(".main_content_img_4").stop().animate({marginTop:-img_height_4*0.92},10000);
				}).mouseleave(function(){
					$(this).find(".main_content_img_4").stop().animate({margin:'0'},3000);
			});


		}

		//width 700px 이상시 작동 

		if(window.innerWidth >= 700){


			$("#main_area_1 > .main_content").mouseover(function(){
				$(this).find(".main_content_img_1").stop().animate({marginTop:-img_height_1},8000);
			}).mouseleave(function(){
				$(this).find(".main_content_img_1").stop().animate({margin:'0'},3000);
			});

			$("#main_area_2 > .main_content").mouseover(function(){
				$(this).find(".main_content_img_2").stop().animate({marginTop:-img_height_2},10000);
			}).mouseleave(function(){
				$(this).find(".main_content_img_2").stop().animate({margin:'0'},3000);
			});

			$("#main_area_3 > .main_content").mouseover(function(){
				$(this).find(".main_content_img_3").stop().animate({marginTop:-img_height_3},10000);
			}).mouseleave(function(){
				$(this).find(".main_content_img_3").stop().animate({margin:'0'},3000);
			});

			$("#main_area_4 > .main_content").mouseover(function(){
				$(this).find(".main_content_img_4").stop().animate({marginTop:-img_height_4},10000);
			}).mouseleave(function(){
				$(this).find(".main_content_img_4").stop().animate({margin:'0'},3000);
			});

		}	
	});
	
});		