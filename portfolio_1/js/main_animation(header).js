$(document).ready(function(){

	//header_js

		//최상단 광고

		$(".close_button").click(function(){
        	$("#header_top_banner").stop().slideUp();
        	$("header").css("height","195px")
    	});

		//마이페이지 슬라이더

		$(".top_menu_right > li").mouseover(function(){
			$(this).children(".top_sub_menu").stop().fadeIn();
		}).mouseout(function(){
			$(".top_sub_menu").stop().fadeOut();
		});

		//헤더 검색순위

	    function header_rank(){
	    	$(".search_rank_list").stop().animate({marginTop:-30},function(){
	    		$('.search_rank_list > li:first').appendTo(".search_rank_list");
	    		$('.search_rank_list').css({marginTop:0});
	    	});
	    }

		//헤더 광고

		function header_prev(){
			$(".header_advertise_list > li:last").prependTo(".header_advertise_list");
			$(".header_advertise_list").css({marginLeft:-180});
			$(".header_advertise_list").stop().animate({marginLeft:0});
		}

		function header_next(){
			$(".header_advertise_list").stop().animate({marginLeft:-180},function(){
				$(".header_advertise_list > li:first").appendTo(".header_advertise_list");
				$(".header_advertise_list").css({marginLeft:0});
			});
		}

		//하단 메뉴
		$(".bottom_sub_menu").css("display","none");

		$(".bottom_menu_left > li").mouseover(function(){
			$(this).find(".bottom_sub_menu").stop().slideDown();
		}).mouseleave(function(){
			$(".bottom_sub_menu").stop().slideUp();
		});

		//하단 메뉴의 하단메뉴
		$(".bottom_sub_menu_category_wrap").css({"display":"none"});


		$(".bottom_sub_menu > li").mouseover(function(){
			$(this).find(".bottom_sub_menu_category_wrap").stop().show();
			$(this).find(".bottom_sub_menu_category_wrap").css("display","block");
		}).mouseout(function(){
			$(".bottom_sub_menu_category_wrap").stop().hide();
		});

		setInterval(header_rank,3000);

		$(".header_prev").click(function(){
			header_prev();
		});

		$(".header_next").click(function(){
			header_next();
		});	

});