$(document).ready(function(){
	

	//스크롤시 menu color 변경

		$(window).scroll(function(){
			var window_scroll = $(this).scrollTop();
			var mei=$("#menu i");
			
			if(window_scroll >=$(".section").eq(0).offset().top){
				mei.removeClass("light");
				mei.eq(0).addClass("light");
			}

			if(window_scroll >=$(".section").eq(1).offset().top){
				mei.removeClass("light");
				mei.eq(1).addClass("light");
			};

			if(window_scroll >=$(".section").eq(2).offset().top){
				mei.removeClass("light");
				mei.eq(2).addClass("light");
			};

			if(window_scroll >=$(".section").eq(3).offset().top){
				mei.removeClass("light");
				mei.eq(3).addClass("light");
			};

			if(window_scroll >=$(".section").eq(4).offset().top){
				mei.removeClass("light");
				mei.eq(4).addClass("light");
			};

			if(window_scroll >=$(".section").eq(5).offset().top){
				mei.removeClass("light");
				mei.eq(5).addClass("light");
			};
		});

	});	