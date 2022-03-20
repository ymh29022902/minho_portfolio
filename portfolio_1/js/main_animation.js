$(document).ready(function(){	

		//content_1 좌측 상품&샘플 hover

			
			var today=0;
	
			$("#today_book > .today_book_box:not(:first-child)").css("display","none");

			$('.today_book_sample > li').mouseenter(function(){
				today=($(this).index());
				$("#today_book > .today_book_box").hide();
				$("#today_book > .today_book_box").eq(today).stop().show();

			});


		//content_1 prev&next	


			$("#today_book").mouseover(function(){
				$(".ct1_prev_button").stop().show();
				$(".ct1_next_button").stop().show();
			}).mouseout(function(){
				$(".ct1_prev_button").stop().hide();
				$(".ct1_next_button").stop().hide();
			});


			function ct1_prev_a(){
				today--;
				if(today<=-1){
					today=3;
				}
				$("#today_book > .today_book_box").stop().hide();
				$("#today_book > .today_book_box").eq(today).stop().show();
				$(".today_book_sample_box > img").css("border","none");
				$(".today_book_sample > li:nth-child"+"("+(today+1)+")" + "> a > .today_book_sample_box img").css("border","3px solid #186ab3");
			}	

			function ct1_next_a(){
				today++;
				if(today>3){
					today=0;
				}	
				$("#today_book > .today_book_box").eq(today).stop().show();
				$("#today_book > .today_book_box").eq(today-1).stop().hide();
				$(".today_book_sample_box > img").css("border","none");
				$(".today_book_sample > li:nth-child"+"("+(today+1)+")" + "> a > .today_book_sample_box img").css("border","3px solid #186ab3");
			}


		//content_1 랭킹

			$(".section_ranking_top > li:first-child").click(function(){
				$(".search_ranking_page_1").stop().show();
				$(".search_ranking_page_2").stop().hide();
			});

			$(".section_ranking_top > li:last-child").click(function(){
				$(".search_ranking_page_2").stop().show();
				$(".search_ranking_page_1").stop().hide();
			});

			$(".section_ranking_btn > ul > li:first-child").click(function(){
				$(".book_ranking:first").stop().show();
				$(".book_ranking:last").stop().hide();
			});

			$(".section_ranking_btn > ul > li:last-child").click(function(){
				$(".book_ranking:last").stop().show();
				$(".book_ranking:first").stop().hide();
			});

		//content_2 상품 목록
		
			$("#content_2 > .book_content > .book_list:not(:nth-of-type(1))").css("display","none");

			$("#content_2 > .book_content").mouseover(function(){
				$(".ct2_prev_button").stop().show();
				$(".ct2_next_button").stop().show();
			}).mouseout(function(){
				$(".ct2_prev_button").stop().hide();
				$(".ct2_next_button").stop().hide();
			});

			var i=0;

			function ct2_prev_a(){
				i--;
				if(i<=-1){
					i=2;
				}
				$("#content_2 > .book_content > .book_list").stop().hide();
				$("#content_2 > .book_content > .book_list").eq(i).stop().show();
				document.getElementsByClassName("page_number")[0].innerHTML = i+1;
			}	

			function ct2_next_a(){
				i++;
				if(i>2){
					i=0;
				}
				$("#content_2 > .book_content > .book_list").eq(i).stop().show();
				$("#content_2 > .book_content > .book_list").eq(i-1).stop().hide();
				document.getElementsByClassName("page_number")[0].innerHTML = i+1;
			}	

		//content_3 상품 목록
		
			$("#content_3 > .book_content > .book_list:not(:nth-of-type(1))").css("display","none");

			$("#content_3 > .book_content").mouseover(function(){
				$(".ct3_prev_button").stop().show();
				$(".ct3_next_button").stop().show();
			}).mouseout(function(){
				$(".ct3_prev_button").stop().hide();
				$(".ct3_next_button").stop().hide();
			});

			var i=0;

			function ct3_prev_a(){
				i--;
				if(i<=-1){
					i=2;
				}
				$("#content_3 > .book_content > .book_list").stop().hide();
				$("#content_3 > .book_content > .book_list").eq(i).stop().show();
				document.getElementsByClassName("page_number")[1].innerHTML = i+1;
			}	

			function ct3_next_a(){
				i++;
				if(i>2){
					i=0;
				}
				$("#content_3 > .book_content > .book_list").eq(i).stop().show();
				$("#content_3 > .book_content > .book_list").eq(i-1).stop().hide();
				document.getElementsByClassName("page_number")[1].innerHTML = i+1;
			}		

		//content_3 광고

		var i=0;

		function content_3_advertise_prev(){
			i--;
			if(i<=-1){
				i=2;
			}
			$('.content_3_advertise_ul li').stop().hide();
			$('.content_3_advertise_ul li').eq(i).stop().show();
			
			document.getElementById("content_3_advertise_count").innerHTML = i+1;
		}

		var i=0;

		function content_3_advertise_next(){
			i++;
			if(i>$(".content_3_advertise_ul li:last").index()){
				i=0;
			}
			$('.content_3_advertise_ul li').eq(i).stop().show();
			$('.content_3_advertise_ul li').eq(i-1).stop().hide();

			document.getElementById("content_3_advertise_count").innerHTML = i+1;
		}


		//content_4 대분류(메뉴 클릭시 배경 이미지 전환)

		var i=0;

			$(".yes_pick_menu > li:nth-of-type(1)").click(function(){
				$("#content_4 > article:nth-of-type(1)").show();
				$("#content_4 > article:not(:nth-of-type(1))").hide();
				$(".yes_pick_menu > li:nth-of-type(1)").css({"backgroundColor":"#ffffff", "border-bottom":"#ffffff"});
				$(".yes_pick_menu > li:not(:nth-of-type(1))").css({"backgroundColor":"#f8f8f8", "border-bottom":"1px solid #d7d7d7"});

				$(".yes_pick_menu > li:nth-of-type(1) > .yes_pick_button").css({"background":"url(img/main/book_hover_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(2) > .yes_pick_button").css({"background":"url(img/main/ebook_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(3) > .yes_pick_button").css({"background":"url(img/main/web_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(4) > .yes_pick_button").css({"background":"url(img/main/cd_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(5) > .yes_pick_button").css({"background":"url(img/main/dvd_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(6) > .yes_pick_button").css({"background":"url(img/main/concert_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(7) > .yes_pick_button").css({"background":"url(img/main/gift_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(8) > .yes_pick_button").css({"background":"url(img/main/antique_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
			});

			$(".yes_pick_menu > li:nth-of-type(2)").click(function(){
				$("#content_4 > article:nth-of-type(2)").show();
				$("#content_4 > article:not(:nth-of-type(2))").hide();
				$(".yes_pick_menu > li:nth-of-type(2)").css({"backgroundColor":"#ffffff", "border-bottom":"#ffffff"});
				$(".yes_pick_menu > li:not(:nth-of-type(2))").css({"backgroundColor":"#f8f8f8", "border-bottom":"1px solid #d7d7d7"});

				$(".yes_pick_menu > li:nth-of-type(1) > .yes_pick_button").css({"background":"url(img/main/book_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(2) > .yes_pick_button").css({"background":"url(img/main/ebook_hover_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(3) > .yes_pick_button").css({"background":"url(img/main/web_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(4) > .yes_pick_button").css({"background":"url(img/main/cd_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(5) > .yes_pick_button").css({"background":"url(img/main/dvd_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(6) > .yes_pick_button").css({"background":"url(img/main/concert_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(7) > .yes_pick_button").css({"background":"url(img/main/gift_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(8) > .yes_pick_button").css({"background":"url(img/main/antique_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
			});

			$(".yes_pick_menu > li:nth-of-type(3)").click(function(){
				$("#content_4 > article:nth-of-type(3)").show();
				$("#content_4 > article:not(:nth-of-type(3))").hide();
				$(".yes_pick_menu > li:nth-of-type(3)").css({"backgroundColor":"#ffffff", "border-bottom":"#ffffff"});
				$(".yes_pick_menu > li:not(:nth-of-type(3))").css({"backgroundColor":"#f8f8f8", "border-bottom":"1px solid #d7d7d7"});

				$(".yes_pick_menu > li:nth-of-type(1) > .yes_pick_button").css({"background":"url(img/main/book_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(2) > .yes_pick_button").css({"background":"url(img/main/ebook_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(3) > .yes_pick_button").css({"background":"url(img/main/web_hover_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(4) > .yes_pick_button").css({"background":"url(img/main/cd_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(5) > .yes_pick_button").css({"background":"url(img/main/dvd_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(6) > .yes_pick_button").css({"background":"url(img/main/concert_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(7) > .yes_pick_button").css({"background":"url(img/main/gift_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(8) > .yes_pick_button").css({"background":"url(img/main/antique_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
			});

			$(".yes_pick_menu > li:nth-of-type(4)").click(function(){
				$("#content_4 > article:nth-of-type(4)").show();
				$("#content_4 > article:not(:nth-of-type(4))").hide();
				$(".yes_pick_menu > li:nth-of-type(4)").css({"backgroundColor":"#ffffff", "border-bottom":"#ffffff"});
				$(".yes_pick_menu > li:not(:nth-of-type(4))").css({"backgroundColor":"#f8f8f8", "border-bottom":"1px solid #d7d7d7"});

				$(".yes_pick_menu > li:nth-of-type(1) > .yes_pick_button").css({"background":"url(img/main/book_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(2) > .yes_pick_button").css({"background":"url(img/main/ebook_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(3) > .yes_pick_button").css({"background":"url(img/main/web_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(4) > .yes_pick_button").css({"background":"url(img/main/cd_hover_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(5) > .yes_pick_button").css({"background":"url(img/main/dvd_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(6) > .yes_pick_button").css({"background":"url(img/main/concert_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(7) > .yes_pick_button").css({"background":"url(img/main/gift_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(8) > .yes_pick_button").css({"background":"url(img/main/antique_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
			});

			$(".yes_pick_menu > li:nth-of-type(5)").click(function(){
				$("#content_4 > article:nth-of-type(5)").show();
				$("#content_4 > article:not(:nth-of-type(5))").hide();
				$(".yes_pick_menu > li:nth-of-type(5)").css({"backgroundColor":"#ffffff", "border-bottom":"#ffffff"});
				$(".yes_pick_menu > li:not(:nth-of-type(5))").css({"backgroundColor":"#f8f8f8", "border-bottom":"1px solid #d7d7d7"});

				$(".yes_pick_menu > li:nth-of-type(1) > .yes_pick_button").css({"background":"url(img/main/book_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(2) > .yes_pick_button").css({"background":"url(img/main/ebook_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(3) > .yes_pick_button").css({"background":"url(img/main/web_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(4) > .yes_pick_button").css({"background":"url(img/main/cd_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(5) > .yes_pick_button").css({"background":"url(img/main/dvd_hover_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(6) > .yes_pick_button").css({"background":"url(img/main/concert_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(7) > .yes_pick_button").css({"background":"url(img/main/gift_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(8) > .yes_pick_button").css({"background":"url(img/main/antique_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
			});


			$(".yes_pick_menu > li:nth-of-type(6)").click(function(){
				$("#content_4 > article:nth-of-type(6)").show();
				$("#content_4 > article:not(:nth-of-type(6))").hide();
				$(".yes_pick_menu > li:nth-of-type(6)").css({"backgroundColor":"#ffffff", "border-bottom":"#ffffff"});
				$(".yes_pick_menu > li:not(:nth-of-type(6))").css({"backgroundColor":"#f8f8f8", "border-bottom":"1px solid #d7d7d7"});

				$(".yes_pick_menu > li:nth-of-type(1) > .yes_pick_button").css({"background":"url(img/main/book_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(2) > .yes_pick_button").css({"background":"url(img/main/ebook_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(3) > .yes_pick_button").css({"background":"url(img/main/web_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(4) > .yes_pick_button").css({"background":"url(img/main/cd_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(5) > .yes_pick_button").css({"background":"url(img/main/dvd_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(6) > .yes_pick_button").css({"background":"url(img/main/concert_hover_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(7) > .yes_pick_button").css({"background":"url(img/main/gift_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(8) > .yes_pick_button").css({"background":"url(img/main/antique_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
			});

			$(".yes_pick_menu > li:nth-of-type(7)").click(function(){
				$("#content_4 > article:nth-of-type(7)").show();
				$("#content_4 > article:not(:nth-of-type(7))").hide();
				$(".yes_pick_menu > li:nth-of-type(7)").css({"backgroundColor":"#ffffff", "border-bottom":"#ffffff"});
				$(".yes_pick_menu > li:not(:nth-of-type(7))").css({"backgroundColor":"#f8f8f8", "border-bottom":"1px solid #d7d7d7"});

				$(".yes_pick_menu > li:nth-of-type(1) > .yes_pick_button").css({"background":"url(img/main/book_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(2) > .yes_pick_button").css({"background":"url(img/main/ebook_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(3) > .yes_pick_button").css({"background":"url(img/main/web_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(4) > .yes_pick_button").css({"background":"url(img/main/cd_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(5) > .yes_pick_button").css({"background":"url(img/main/dvd_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(6) > .yes_pick_button").css({"background":"url(img/main/concert_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(7) > .yes_pick_button").css({"background":"url(img/main/gift_hover_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(8) > .yes_pick_button").css({"background":"url(img/main/antique_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
			});

			$(".yes_pick_menu > li:nth-of-type(8)").click(function(){
				$("#content_4 > article:nth-of-type(8)").show();
				$("#content_4 > article:not(:nth-of-type(8))").hide();
				$(".yes_pick_menu > li:nth-of-type(8)").css({"backgroundColor":"#ffffff", "border-bottom":"#ffffff"});
				$(".yes_pick_menu > li:not(:nth-of-type(8))").css({"backgroundColor":"#f8f8f8", "border-bottom":"1px solid #d7d7d7"});

				$(".yes_pick_menu > li:nth-of-type(1) > .yes_pick_button").css({"background":"url(img/main/book_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(2) > .yes_pick_button").css({"background":"url(img/main/ebook_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(3) > .yes_pick_button").css({"background":"url(img/main/web_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(4) > .yes_pick_button").css({"background":"url(img/main/cd_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(5) > .yes_pick_button").css({"background":"url(img/main/dvd_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(6) > .yes_pick_button").css({"background":"url(img/main/concert_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(7) > .yes_pick_button").css({"background":"url(img/main/gift_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
				$(".yes_pick_menu > li:nth-of-type(8) > .yes_pick_button").css({"background":"url(img/main/antique_hover_button.png)", 
					"background-repeat":"no-repeat","background-position":"center", "background-size":"cover"});
			});

		//content_4 소분류

		var i=0;
		$(".ct4_book_a_menu > li:nth-of-type(1)").css({"font-weight":"bolder","color":"black"});
		$(".ct4_book_a_menu > li:not(:nth-of-type(1))").css({"font-weight":"normal","color":"#9e9e9e"});
		$(".ct4_book_a > .ct4_book_a_box:not(:nth-of-type(1))").css("display","none");

		$(".ct4_book_a_menu > li:nth-of-type(1)").click(function(){
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(1)").show();
			$(".ct4_book_a > .ct4_book_a_box:not(:nth-of-type(1))").hide();
			$(".ct4_book_a_menu > li:nth-of-type(1)").css({"font-weight":"bolder","color":"black"});
			$(".ct4_book_a_menu > li:not(:nth-of-type(1))").css({"font-weight":"normal","color":"#9e9e9e"});
			document.getElementById("ct4_a_page").innerHTML = "1";
			i=0;
		});

		$(".ct4_book_a_menu > li:nth-of-type(3)").click(function(){
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(3)").show();
			$(".ct4_book_a > .ct4_book_a_box:not(:nth-of-type(3))").hide();
			$(".ct4_book_a_menu > li:nth-of-type(3)").css({"font-weight":"bolder","color":"black"});
			$(".ct4_book_a_menu > li:not(:nth-of-type(3))").css({"font-weight":"normal","color":"#9e9e9e"});
			document.getElementById("ct4_a_page").innerHTML = "3";
			i=2;
		});

		$(".ct4_book_a_menu > li:nth-of-type(5)").click(function(){
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(4)").show();
			$(".ct4_book_a > .ct4_book_a_box:not(:nth-of-type(4))").hide();
			$(".ct4_book_a_menu > li:nth-of-type(5)").css({"font-weight":"bolder","color":"black"});
			$(".ct4_book_a_menu > li:not(:nth-of-type(5))").css({"font-weight":"normal","color":"#9e9e9e"});
			document.getElementById("ct4_a_page").innerHTML = "4";
			i=3;
		});

			//2번째

		var i=0;
		$(".ct4_book_a_menu_2 > li:nth-of-type(1)").css({"font-weight":"bolder","color":"black"});
		$(".ct4_book_a_menu_2 > li:not(:nth-of-type(1))").css({"font-weight":"normal","color":"#9e9e9e"});
		$(".ct4_book_a_2 > .ct4_book_a_2_box:not(:nth-of-type(1))").css("display","none");

		$(".ct4_book_a_menu_2 > li:nth-of-type(1)").click(function(){
			$(".ct4_book_a_2 > .ct4_book_a_2_box:nth-of-type(1)").show();
			$(".ct4_book_a_2 > .ct4_book_a_2_box:not(:nth-of-type(1))").hide();
			$(".ct4_book_a_menu_2 > li:nth-of-type(1)").css({"font-weight":"bolder","color":"black"});
			$(".ct4_book_a_menu_2 > li:not(:nth-of-type(1))").css({"font-weight":"normal","color":"#9e9e9e"});
			document.getElementById("ct4_a_page_2").innerHTML = "1";
			i=0;
		});

		$(".ct4_book_a_menu_2 > li:nth-of-type(3)").click(function(){
			$(".ct4_book_a_2 > .ct4_book_a_2_box:nth-of-type(3)").show();
			$(".ct4_book_a_2 > .ct4_book_a_2_box:not(:nth-of-type(3))").hide();
			$(".ct4_book_a_menu_2 > li:nth-of-type(3)").css({"font-weight":"bolder","color":"black"});
			$(".ct4_book_a_menu_2 > li:not(:nth-of-type(3))").css({"font-weight":"normal","color":"#9e9e9e"});
			document.getElementById("ct4_a_page_2").innerHTML = "3";
			i=2;
		});

		$(".ct4_book_a_menu_2 > li:nth-of-type(5)").click(function(){
			$(".ct4_book_a_2 > .ct4_book_a_2_box:nth-of-type(5)").show();
			$(".ct4_book_a_2 > .ct4_book_a_2_box:not(:nth-of-type(5))").hide();
			$(".ct4_book_a_menu_2 > li:nth-of-type(5)").css({"font-weight":"bolder","color":"black"});
			$(".ct4_book_a_menu_2 > li:not(:nth-of-type(5))").css({"font-weight":"normal","color":"#9e9e9e"});
			document.getElementById("ct4_a_page_2").innerHTML = "5";
			i=4;
		});	

		$(".ct4_book_a_menu_2 > li:nth-of-type(7)").click(function(){
			$(".ct4_book_a_2 > .ct4_book_a_2_box:nth-of-type(7)").show();
			$(".ct4_book_a_2 > .ct4_book_a_2_box:not(:nth-of-type(7))").hide();
			$(".ct4_book_a_menu_2 > li:nth-of-type(7)").css({"font-weight":"bolder","color":"black"});
			$(".ct4_book_a_menu_2 > li:not(:nth-of-type(7))").css({"font-weight":"normal","color":"#9e9e9e"});
			document.getElementById("ct4_a_page_2").innerHTML = "7";
			i=6;
		});	

		$(".ct4_book_a_menu_2 > li:nth-of-type(9)").click(function(){
			$(".ct4_book_a_2 > .ct4_book_a_2_box:nth-of-type(9)").show();
			$(".ct4_book_a_2 > .ct4_book_a_2_box:not(:nth-of-type(9))").hide();
			$(".ct4_book_a_menu_2 > li:nth-of-type(9)").css({"font-weight":"bolder","color":"black"});
			$(".ct4_book_a_menu_2 > li:not(:nth-of-type(9))").css({"font-weight":"normal","color":"#9e9e9e"});
			document.getElementById("ct4_a_page_2").innerHTML = "9";
			i=8;
		});	

		//중고샵

		var i8=0;
		$(".ct4_book_a_menu_3 > li:nth-of-type(1)").css({"font-weight":"bolder","color":"black"});
		$(".ct4_book_a_menu_3 > li:not(:nth-of-type(1))").css({"font-weight":"normal","color":"#9e9e9e"});
		$(".ct4_book_a_8 > .ct4_book_a_box:not(:nth-of-type(1))").css("display","none");

		$(".ct4_book_a_menu_3 > li:nth-of-type(1)").click(function(){
			$(".ct4_book_a_8 > .ct4_book_a_box:nth-of-type(1)").show();
			$(".ct4_book_a_8 > .ct4_book_a_box:not(:nth-of-type(1))").hide();
			$(".ct4_book_a_menu_3 > li:nth-of-type(1)").css({"font-weight":"bolder","color":"black"});
			$(".ct4_book_a_menu_3 > li:not(:nth-of-type(1))").css({"font-weight":"normal","color":"#9e9e9e"});
			document.getElementById("ct4_a_page_3").innerHTML = "1";
			i8=0;
		});

		$(".ct4_book_a_menu_3 > li:nth-of-type(3)").click(function(){
			$(".ct4_book_a_8 > .ct4_book_a_box:nth-of-type(3)").show();
			$(".ct4_book_a_8 > .ct4_book_a_box:not(:nth-of-type(3))").hide();
			$(".ct4_book_a_menu_3 > li:nth-of-type(3)").css({"font-weight":"bolder","color":"black"});
			$(".ct4_book_a_menu_3 > li:not(:nth-of-type(3))").css({"font-weight":"normal","color":"#9e9e9e"});
			document.getElementById("ct4_a_page_3").innerHTML = "3";
			i8=2;
		});

		$(".ct4_book_a_menu_3 > li:nth-of-type(5)").click(function(){
			$(".ct4_book_a_8 > .ct4_book_a_box:nth-of-type(5)").show();
			$(".ct4_book_a_8 > .ct4_book_a_box:not(:nth-of-type(5))").hide();
			$(".ct4_book_a_menu_3 > li:nth-of-type(5)").css({"font-weight":"bolder","color":"black"});
			$(".ct4_book_a_menu_3 > li:not(:nth-of-type(5))").css({"font-weight":"normal","color":"#9e9e9e"});
			document.getElementById("ct4_a_page_3").innerHTML = "5";
			i8=3;
		});


		//content_4 소분류 이동 버튼

		//첫번째 페이지

		//hover 시 버튼 show

		$('#ct4_book_1 .ct4_prev_button').css("display","none");
		$('#ct4_book_1 .ct4_next_button').css("display","none");

		//button hover

		$('.ct4_book_a').mouseover(function(){
			$(this).find('.ct4_prev_button').stop().show();
			$(this).find('.ct4_next_button').stop().show();
		}).mouseout(function(){
			$(this).find('.ct4_prev_button').stop().hide();
			$(this).find('.ct4_next_button').stop().hide();
		});

		//클릭 시 페이지 이동

		var i=0;

		function ct4_prev_a(){
			i--;
			if(i>=0 && i<2){
				$(".ct4_book_a_menu > li:nth-of-type(1)").css({"font-weight":"bolder","color":"black"});
				$(".ct4_book_a_menu > li:not(:nth-of-type(1))").css({"font-weight":"normal","color":"#9e9e9e"});
			}

			else if(i>=2 && i<3){
				$(".ct4_book_a_menu > li:nth-of-type(3)").css({"font-weight":"bolder","color":"black"});
				$(".ct4_book_a_menu > li:not(:nth-of-type(3))").css({"font-weight":"normal","color":"#9e9e9e"});
			}

			else if(i>=3 && i<5){
				$(".ct4_book_a_menu > li:nth-of-type(5)").css({"font-weight":"bolder","color":"black"});
				$(".ct4_book_a_menu > li:not(:nth-of-type(5))").css({"font-weight":"normal","color":"#9e9e9e"});
			}else if(i>=5){
				i=0;
				$(".ct4_book_a_menu > li:nth-of-type(1)").css({"font-weight":"bolder","color":"black"});
				$(".ct4_book_a_menu > li:not(:nth-of-type(1))").css({"font-weight":"normal","color":"#9e9e9e"});
			}else{
				i=4;
				$(".ct4_book_a_menu > li:nth-of-type(5)").css({"font-weight":"bolder","color":"black"});
				$(".ct4_book_a_menu > li:not(:nth-of-type(5))").css({"font-weight":"normal","color":"#9e9e9e"});
			}

			$('.ct4_book_a > .ct4_book_a_box').stop().hide();
			$('.ct4_book_a > .ct4_book_a_box').eq(i).stop().show();

			document.getElementById("ct4_a_page").innerHTML = i+1;
			
		}

		var i=0;

		function ct4_next_a(){
			i++;
			if(i>=0 && i<2){
				$(".ct4_book_a_menu > li:nth-of-type(1)").css({"font-weight":"bolder","color":"black"});
				$(".ct4_book_a_menu > li:not(:nth-of-type(1))").css({"font-weight":"normal","color":"#9e9e9e"});
			}

			else if(i>=2 && i<3){
				$(".ct4_book_a_menu > li:nth-of-type(3)").css({"font-weight":"bolder","color":"black"});
				$(".ct4_book_a_menu > li:not(:nth-of-type(3))").css({"font-weight":"normal","color":"#9e9e9e"});
			}

			else if(i>=3 && i<5){
				$(".ct4_book_a_menu > li:nth-of-type(5)").css({"font-weight":"bolder","color":"black"});
				$(".ct4_book_a_menu > li:not(:nth-of-type(5))").css({"font-weight":"normal","color":"#9e9e9e"});
			}else if(i>=5){
				i=0;
				$(".ct4_book_a_menu > li:nth-of-type(1)").css({"font-weight":"bolder","color":"black"});
				$(".ct4_book_a_menu > li:not(:nth-of-type(1))").css({"font-weight":"normal","color":"#9e9e9e"});
			}else{
				i=4;
				$(".ct4_book_a_menu > li:nth-of-type(5)").css({"font-weight":"bolder","color":"black"});
				$(".ct4_book_a_menu > li:not(:nth-of-type(5))").css({"font-weight":"normal","color":"#9e9e9e"});
			}

			$('.ct4_book_a > .ct4_book_a_box').eq(i).stop().show();
			$('.ct4_book_a > .ct4_book_a_box').eq(i-1).stop().hide();

			document.getElementById("ct4_a_page").innerHTML = i+1;
			
		}

		//두번째 페이지

		$('#ct4_book_2 .ct4_prev_button').css("display","none");
		$('#ct4_book_2 .ct4_next_button').css("display","none");

		//button hover

		$('.ct4_book_a_2').mouseover(function(){
			$(this).find('.ct4_prev_button').stop().show();
			$(this).find('.ct4_next_button').stop().show();
		}).mouseout(function(){
			$(this).find('.ct4_prev_button').stop().hide();
			$(this).find('.ct4_next_button').stop().hide();
		});

		//클릭 시 페이지 이동

		var second=0;

		function ct4_prev_a_2(){
			second--;
			if(second>=0 && second<2){
				$(".ct4_book_a_menu_2 > li:nth-of-type(1)").css({"font-weight":"bolder","color":"black"});
				$(".ct4_book_a_menu_2 > li:not(:nth-of-type(1))").css({"font-weight":"normal","color":"#9e9e9e"});
			}

			else if(second>=2 && second<4){
				$(".ct4_book_a_menu_2 > li:nth-of-type(3)").css({"font-weight":"bolder","color":"black"});
				$(".ct4_book_a_menu_2 > li:not(:nth-of-type(3))").css({"font-weight":"normal","color":"#9e9e9e"});
			}

			else if(second>=4 && second<6){
				$(".ct4_book_a_menu_2 > li:nth-of-type(5)").css({"font-weight":"bolder","color":"black"});
				$(".ct4_book_a_menu_2 > li:not(:nth-of-type(5))").css({"font-weight":"normal","color":"#9e9e9e"});
			}else if(i>=6 && second<8){
				$(".ct4_book_a_menu_2 > li:nth-of-type(7)").css({"font-weight":"bolder","color":"black"});
				$(".ct4_book_a_menu_2 > li:not(:nth-of-type(7))").css({"font-weight":"normal","color":"#9e9e9e"});
			}else if(second>=8 && second<10){
				$(".ct4_book_a_menu_2 > li:nth-of-type(9)").css({"font-weight":"bolder","color":"black"});
				$(".ct4_book_a_menu_2 > li:not(:nth-of-type(9))").css({"font-weight":"normal","color":"#9e9e9e"});
			}else if(second>=10){
				second=0;
				$(".ct4_book_a_menu_2 > li:nth-of-type(1)").css({"font-weight":"bolder","color":"black"});
				$(".ct4_book_a_menu_2 > li:not(:nth-of-type(1))").css({"font-weight":"normal","color":"#9e9e9e"});
			}else{
				second=9;
				$(".ct4_book_a_menu_2 > li:nth-of-type(9)").css({"font-weight":"bolder","color":"black"});
				$(".ct4_book_a_menu_2 > li:not(:nth-of-type(9))").css({"font-weight":"normal","color":"#9e9e9e"});
			}

			$('.ct4_book_a_2 > .ct4_book_a_2_box').stop().hide();
			$('.ct4_book_a_2 > .ct4_book_a_2_box').eq(second).stop().show();

			document.getElementById("ct4_a_page_2").innerHTML = second+1;
			
		}

		var second=0;

		function ct4_next_a_2(){
			second++;
			if(second>=0 && second<2){
				$(".ct4_book_a_menu_2 > li:nth-of-type(1)").css({"font-weight":"bolder","color":"black"});
				$(".ct4_book_a_menu_2 > li:not(:nth-of-type(1))").css({"font-weight":"normal","color":"#9e9e9e"});
			}

			else if(second>=2 && second<4){
				$(".ct4_book_a_menu_2 > li:nth-of-type(3)").css({"font-weight":"bolder","color":"black"});
				$(".ct4_book_a_menu_2 > li:not(:nth-of-type(3))").css({"font-weight":"normal","color":"#9e9e9e"});
			}

			else if(second>=4 && second<6){
				$(".ct4_book_a_menu_2 > li:nth-of-type(5)").css({"font-weight":"bolder","color":"black"});
				$(".ct4_book_a_menu_2 > li:not(:nth-of-type(5))").css({"font-weight":"normal","color":"#9e9e9e"});
			}else if(second>=6 && second<8){
				$(".ct4_book_a_menu_2 > li:nth-of-type(7)").css({"font-weight":"bolder","color":"black"});
				$(".ct4_book_a_menu_2 > li:not(:nth-of-type(7))").css({"font-weight":"normal","color":"#9e9e9e"});
			}else if(second>=8 && second<10){
				$(".ct4_book_a_menu_2 > li:nth-of-type(9)").css({"font-weight":"bolder","color":"black"});
				$(".ct4_book_a_menu_2 > li:not(:nth-of-type(9))").css({"font-weight":"normal","color":"#9e9e9e"});
			}else if(second>=10){
				second=0;
				$(".ct4_book_a_menu_2 > li:nth-of-type(1)").css({"font-weight":"bolder","color":"black"});
				$(".ct4_book_a_menu_2 > li:not(:nth-of-type(1))").css({"font-weight":"normal","color":"#9e9e9e"});
			}else{
				second=9;
				$(".ct4_book_a_menu_2 > li:nth-of-type(9)").css({"font-weight":"bolder","color":"black"});
				$(".ct4_book_a_menu_2 > li:not(:nth-of-type(9))").css({"font-weight":"normal","color":"#9e9e9e"});
			}

			$('.ct4_book_a_2 > .ct4_book_a_2_box').eq(second).stop().show();
			$('.ct4_book_a_2 > .ct4_book_a_2_box').eq(second-1).stop().hide();

			document.getElementById("ct4_a_page_2").innerHTML = second+1;
			
		}

		//comic
		
		$('.ct4_book_a_3 > .ct4_book_3_area:nth-of-type(1) > .big_book_box:not(:first)').css("display","none");
		$('#ct4_book_3 .ct4_prev_button').css("display","none");
		$('#ct4_book_3 .ct4_next_button').css("display","none");

		//button hover

		$('.ct4_book_3_area').mouseover(function(){
			$(this).find('.ct4_prev_button').stop().show();
			$(this).find('.ct4_next_button').stop().show();
		}).mouseout(function(){
			$(this).find('.ct4_prev_button').stop().hide();
			$(this).find('.ct4_next_button').stop().hide();
		});

		$('.st4_book_b').mouseover(function(){
			$(this).find('.ct4_prev_button').stop().show();
			$(this).find('.ct4_next_button').stop().show();
		}).mouseout(function(){
			$(this).find('.ct4_prev_button').stop().hide();
			$(this).find('.ct4_next_button').stop().hide();
		});

		//button click

		var comics=0;

		function ct4_prev_a_3_1(){
			comics--;
			if(comics<0){
				comics=($(".ct4_book_a_3 > .ct4_book_3_area:nth-of-type(1) > .big_book_box:last").index())-1;
			}

			$('.ct4_book_a_3 > .ct4_book_3_area:nth-of-type(1) > .big_book_box').stop().hide();
			$('.ct4_book_a_3 > .ct4_book_3_area:nth-of-type(1) > .big_book_box').eq(comics).stop().show();

			document.getElementById("ct4_a_page_3_1").innerHTML = comics+1;
			
		}

		function ct4_next_a_3_1(){
			comics++;
			if(comics>=$(".ct4_book_a_3 > .ct4_book_3_area:nth-of-type(1) > .big_book_box:last").index()){
				comics=0;
			}

			$('.ct4_book_a_3 > .ct4_book_3_area:nth-of-type(1) > .big_book_box').eq(comics).stop().show();
			$('.ct4_book_a_3 > .ct4_book_3_area:nth-of-type(1) > .big_book_box').eq(comics-1).stop().hide();

			document.getElementById("ct4_a_page_3_1").innerHTML = comics+1;
			
		}


		$('.ct4_book_a_3 > .ct4_book_3_area:nth-of-type(2) > .pick_book_box_wrap:last').css("display","none");

		var comic=0;

		function ct4_prev_a_3_2(){
			comic--;
			if(comic<0){
				comic=($(".ct4_book_a_3 > .ct4_book_3_area:nth-of-type(2) > .pick_book_box_wrap:last").index())-1;
			}

			$('.ct4_book_a_3 > .ct4_book_3_area:nth-of-type(2) > .pick_book_box_wrap').stop().hide();
			$('.ct4_book_a_3 > .ct4_book_3_area:nth-of-type(2) > .pick_book_box_wrap').eq(comic).stop().show();

			document.getElementById("ct4_a_page_3_2").innerHTML = comic+1;
			
		}

		function ct4_next_a_3_2(){
			comic++;
			if(comic>=$(".ct4_book_a_3 > .ct4_book_3_area:nth-of-type(2) > .pick_book_box_wrap:last").index()){
				comic=0;
			}

			$('.ct4_book_a_3 > .ct4_book_3_area:nth-of-type(2) > .pick_book_box_wrap').eq(comic).stop().show();
			$('.ct4_book_a_3 > .ct4_book_3_area:nth-of-type(2) > .pick_book_box_wrap').eq(comic-1).stop().hide();

			document.getElementById("ct4_a_page_3_2").innerHTML = comic+1;
			
		}

		//CD

		//hover 시 버튼 show

		$('#ct4_book_a_4 .ct4_prev_button').css("display","none");
		$('#ct4_book_a_4 .ct4_next_button').css("display","none");

		//button hover

		$('.ct4_book_a_4').mouseover(function(){
			$(this).find('.ct4_prev_button').stop().show();
			$(this).find('.ct4_next_button').stop().show();
		}).mouseout(function(){
			$(this).find('.ct4_prev_button').stop().hide();
			$(this).find('.ct4_next_button').stop().hide();
		});

		//클릭 시 페이지 이동

		var cd=0;

		function ct4_prev_a_4(){
			cd--;
			if(cd<0){
				cd=($(".ct4_book_a_4_box:last").index())-1;
			}

			$('.ct4_book_a_4_box').stop().hide();
			$('.ct4_book_a_4_box').eq(cd).stop().show();

			document.getElementById("ct4_a_page_4").innerHTML = cd+1;
			
		}

		function ct4_next_a_4(){
			cd++;
			if(cd>=$(".ct4_book_a_4_box:last").index()){
				cd=0;
			}

			$('.ct4_book_a_4_box').eq(cd).stop().show();
			$('.ct4_book_a_4_box').eq(cd-1).stop().hide();

			document.getElementById("ct4_a_page_4").innerHTML = cd+1;
			
		}

		//DVD

		$(".pick_book_box_wrap:last").css("display","none");

		var dvd=0;

		function ct4_prev_a_5(){
			dvd--;
			if(dvd<0){
				dvd=($(".ct4_book_a_5 > .ct4_book_3_area > .pick_book_box_wrap:last").index())-1;
			}

			$('.ct4_book_a_5 > .ct4_book_3_area > .pick_book_box_wrap').stop().hide();
			$('.ct4_book_a_5 > .ct4_book_3_area > .pick_book_box_wrap').eq(dvd).stop().show();

			document.getElementById("ct4_a_page_5").innerHTML = dvd+1;
			
		}

		function ct4_next_a_5(){
			dvd++;
			if(dvd>=$(".ct4_book_a_5 > .ct4_book_3_area > .pick_book_box_wrap:last").index()){
				dvd=0;
			}

			$('.ct4_book_a_5 > .ct4_book_3_area > .pick_book_box_wrap').eq(dvd).stop().show();
			$('.ct4_book_a_5 > .ct4_book_3_area > .pick_book_box_wrap').eq(dvd-1).stop().hide();

			document.getElementById("ct4_a_page_5").innerHTML = dvd+1;
			
		}

		//공연

		var concert=0;

		function ct4_prev_a_6(){
			concert--;
			if(concert<0){
				concert=($("#ct4_book_6 > .ct4_book_a_6 > .ct4_book_3_area > .big_book_box:last").index())-1;
			}

			$("#ct4_book_6 > .ct4_book_a_6 > .ct4_book_3_area > .big_book_box").stop().hide();
			$("#ct4_book_6 > .ct4_book_a_6 > .ct4_book_3_area > .big_book_box").eq(concert).stop().show();

			document.getElementById("ct4_a_page_6").innerHTML = concert+1;
		}

		function ct4_next_a_6(){
			concert++;
			if(concert>=$("#ct4_book_6 > .ct4_book_a_6 > .ct4_book_3_area > .big_book_box:last").index()){
				concert=0;
			}

			$("#ct4_book_6 > .ct4_book_a_6 > .ct4_book_3_area > .big_book_box").eq(concert).stop().show();
			$("#ct4_book_6 > .ct4_book_a_6 > .ct4_book_3_area > .big_book_box").eq(concert-1).stop().hide();

			document.getElementById("ct4_a_page_6").innerHTML = concert+1;
		}



		//중고샵

		//hover 시 버튼 show

		$('#ct4_book_a_8 .ct4_prev_button').css("display","none");
		$('#ct4_book_a_8 .ct4_next_button').css("display","none");

		//button hover

		$('.ct4_book_a_8').mouseover(function(){
			$(this).find('.ct4_prev_button').stop().show();
			$(this).find('.ct4_next_button').stop().show();
		}).mouseout(function(){
			$(this).find('.ct4_prev_button').stop().hide();
			$(this).find('.ct4_next_button').stop().hide();
		});

		//클릭 시 페이지 이동

		var i8=0;

		function ct4_prev_a_8(){
			i8--;
			if(i8>=0 && i8<2){
				$(".ct4_book_a_menu_3 > li:nth-of-type(1)").css({"font-weight":"bolder","color":"black"});
				$(".ct4_book_a_menu_3 > li:not(:nth-of-type(1))").css({"font-weight":"normal","color":"#9e9e9e"});
			}

			else if(i8>=2 && i8<4){
				$(".ct4_book_a_menu_3 > li:nth-of-type(3)").css({"font-weight":"bolder","color":"black"});
				$(".ct4_book_a_menu_3 > li:not(:nth-of-type(3))").css({"font-weight":"normal","color":"#9e9e9e"});
			}

			else if(i8>=4 && i8<6){
				$(".ct4_book_a_menu_3 > li:nth-of-type(5)").css({"font-weight":"bolder","color":"black"});
				$(".ct4_book_a_menu_3 > li:not(:nth-of-type(5))").css({"font-weight":"normal","color":"#9e9e9e"});
			
			}else if(i8>=6){
				i8=0;
				$(".ct4_book_a_menu_3 > li:nth-of-type(1)").css({"font-weight":"bolder","color":"black"});
				$(".ct4_book_a_menu_3 > li:not(:nth-of-type(1))").css({"font-weight":"normal","color":"#9e9e9e"});
			}else{
				i8=5;
				$(".ct4_book_a_menu_3 > li:nth-of-type(9)").css({"font-weight":"bolder","color":"black"});
				$(".ct4_book_a_menu_3 > li:not(:nth-of-type(9))").css({"font-weight":"normal","color":"#9e9e9e"});
			}

			$('.ct4_book_a_8 > .ct4_book_a_box').stop().hide();
			$('.ct4_book_a_8 > .ct4_book_a_box').eq(i8).stop().show();

			document.getElementById("ct4_a_page_3").innerHTML = i8+1;
			
		}

		var i8=0;

		function ct4_next_a_8(){
			i8++;
			if(i8>=0 && i8<2){
				$(".ct4_book_a_menu_3 > li:nth-of-type(1)").css({"font-weight":"bolder","color":"black"});
				$(".ct4_book_a_menu_3 > li:not(:nth-of-type(1))").css({"font-weight":"normal","color":"#9e9e9e"});
			}

			else if(i8>=2 && i8<4){
				$(".ct4_book_a_menu_3 > li:nth-of-type(3)").css({"font-weight":"bolder","color":"black"});
				$(".ct4_book_a_menu_3 > li:not(:nth-of-type(3))").css({"font-weight":"normal","color":"#9e9e9e"});
			}

			else if(i8>=4 && i8<6){
				$(".ct4_book_a_menu_3 > li:nth-of-type(5)").css({"font-weight":"bolder","color":"black"});
				$(".ct4_book_a_menu_3 > li:not(:nth-of-type(5))").css({"font-weight":"normal","color":"#9e9e9e"});
			
			}else if(i8>=6){
				i8=0;
				$(".ct4_book_a_menu_3 > li:nth-of-type(1)").css({"font-weight":"bolder","color":"black"});
				$(".ct4_book_a_menu_3 > li:not(:nth-of-type(1))").css({"font-weight":"normal","color":"#9e9e9e"});
			}else{
				i8=5;
				$(".ct4_book_a_menu_3 > li:nth-of-type(9)").css({"font-weight":"bolder","color":"black"});
				$(".ct4_book_a_menu_3 > li:not(:nth-of-type(9))").css({"font-weight":"normal","color":"#9e9e9e"});
			}

			$('.ct4_book_a_8 > .ct4_book_a_box').eq(i8).stop().show();
			$('.ct4_book_a_8 > .ct4_book_a_box').eq(i8-1).stop().hide();

			document.getElementById("ct4_a_page_3").innerHTML = i8+1;
			
		}


		//content_4 하단 이벤트

			$("ul > li:not(:first-child)").find(".arrow").css("display","none");
			$(".st4_book_2_left_box:not(:first)").css("display","none");

			//eBook

			var bottom=0;

			$(".st4_book_2_menu > li").mouseenter(function(){
				bottom=($(this).index())+1;
				$(".st4_book_2_menu > li > .arrow").stop().hide();
				$(".st4_book_2_left_box").stop().hide();
				$(".st4_book_2_menu > li").css({"border-right":"1px solid #d7d7d7", "background-color":"#eee"})

				$(this).find(".arrow").stop().show();
				$(this).css({"border-right":"none", "background-color":"white"})
				$(".st4_book_2_left_box:nth-of-type"+"("+bottom+")").stop().show();
			});


			//comics

			var brand=0;

			$("#ct4_book_3 > .st4_book_b > .st4_book_3_list:not(:first)").css("display","none");

			function ct4_brand_prev(){
				brand--;
				if(brand<0){
					brand=($("#ct4_book_3 > .st4_book_b > .st4_book_3_list:last").index())-2;
				}

				$("#ct4_book_3 > .st4_book_b > .st4_book_3_list").stop().hide();
				$("#ct4_book_3 > .st4_book_b > .st4_book_3_list").eq(brand).stop().show();
				document.getElementById("ct4_a_page_3_3").innerHTML = brand+1;
			}

			function ct4_brand_next(){
				brand++;
				if(brand>=($("#ct4_book_3 > .st4_book_b > .st4_book_3_list:last").index())-1){
					brand=0;
				}

				$("#ct4_book_3 > .st4_book_b > .st4_book_3_list").eq(brand).stop().show();
				$("#ct4_book_3 > .st4_book_b > .st4_book_3_list").eq(brand-1).stop().hide();
				document.getElementById("ct4_a_page_3_3").innerHTML = brand+1;
			}
		

		//content_5 광고

		var i=0;

		function content_5_advertise_prev(){
			i--;
			if(i<=-1){
				i=1;
			}
			$('.content_5_advertise li').eq(i).stop().show();
			$('.content_5_advertise li').eq(i-1).stop().hide();


			document.getElementById("content_5_advertise_count").innerHTML = i+1;
			
		}

		var i=0;

		function content_5_advertise_next(){
			i++;
			if(i>$(".content_5_advertise li:last").index()){
				i=0;
			}
			$('.content_5_advertise li').eq(i).stop().show();
			$('.content_5_advertise li').eq(i-1).stop().hide();

			document.getElementById("content_5_advertise_count").innerHTML = i+1;

		}
		
		//yesbox

		$(".yes_box > a").mouseover(function(){
			$(this).children("h5").css("text-decoration","underline");
		}).mouseout(function(){
			$(".yes_box > a > h5").css("text-decoration","none");
		});


		//content_6 카드 뉴스

		var i=0;

		function content_6_advertise_prev(){
			i--;
			if(i<0){
				i=2;
			}
			$('.card_box_sample li').hide();
			$('.card_box_sample li').eq(i).stop().show();
			
		}

		var i=0;

		function content_6_advertise_next(){
			i++;
			if(i>$(".card_box_sample li:last").index()){
				i=0;
			}
			$('.card_box_sample li').eq(i).stop().show();
			$('.card_box_sample li').eq(i-1).stop().hide();
		}

		//content_6 채널예스

		$(".channel_yes").mouseover(function(){
			$(".channel_yes > .prev_button").stop().show();
			$(".channel_yes > .next_button").stop().show();
		}).mouseout(function(){
			$(".channel_yes > .prev_button").stop().hide();
			$(".channel_yes > .next_button").stop().hide();
		});

		var yes=0;

		function channel_yes_prev(){
			yes--;
			if(yes<0){
				yes=1;
			}
			$(".channel_yes_wrap").stop().hide();
			$(".channel_yes_wrap").eq(yes).stop().show()
		}

		function channel_yes_next(){
			yes++;
			if(yes>=$(".channel_yes_wrap:last").index()){
				yes=0;
			}
			$(".channel_yes_wrap").eq(yes).stop().show()
			$(".channel_yes_wrap").eq(yes-1).stop().hide()
		}

		//content_6_yes blog

		$(".yes_blog").mouseover(function(){
			$(".yes_blog > .prev_button").stop().show();
			$(".yes_blog > .next_button").stop().show();
		}).mouseout(function(){
			$(".yes_blog > .prev_button").stop().hide();
			$(".yes_blog > .next_button").stop().hide();
		});

		$(".yes_blog_wrap:not(:first)").css("display","none");

		var blog=0;

		function yes_blog_prev(){
			blog--;
			if(blog<0){
				blog=1;
			}
			$(".yes_blog_wrap").stop().hide();
			$(".yes_blog_wrap").eq(yes).stop().show()
		}

		function yes_blog_next(){
			blog++;
			if(blog>=$(".yes_blog_wrap:last").index()){
				blog=0;
			}
			$(".yes_blog_wrap").eq(blog).stop().show()
			$(".yes_blog_wrap").eq(blog-1).stop().hide()
		}

		//content_7 유튜브 및 추천도서 페이지

		var youtube=0;

		$(".youtube_thumbnail > li").mouseenter(function(){
			youtube=($(this).index())+1;
			$(".youtube_page > article").hide();
			$(".youtube_sub_page > article").hide();
			$(".youtube_page > article:nth-of-type"+ "("+youtube+")").stop().show();
			$(".youtube_sub_page > article:nth-of-type"+ "("+youtube+")").stop().show();
		});



///////////동작들		

		$(".ct1_prev_button").click(function(){
			ct1_prev_a();
		});

		$(".ct1_next_button").click(function(){
			ct1_next_a();
		});

		$(".ct2_prev_button").click(function(){
			ct2_prev_a();
		});

		$(".ct2_next_button").click(function(){
			ct2_next_a();
		});

		$(".ct3_prev_button").click(function(){
			ct3_prev_a();
		});

		$(".ct3_next_button").click(function(){
			ct3_next_a();
		});

		$(".content_3_advertise_prev").click(function(){
			content_3_advertise_prev();
		});

		$(".content_3_advertise_next").click(function(){
			content_3_advertise_next();
		});

		$(".ct4_book_a > .ct4_prev_button").click(function(){
			ct4_prev_a();
		});

		$(".ct4_book_a > .ct4_next_button").click(function(){
			ct4_next_a();
		});

		$(".ct4_book_a_2 > .ct4_prev_button").click(function(){
			ct4_prev_a_2();
		});

		$(".ct4_book_a_2 > .ct4_next_button").click(function(){
			ct4_next_a_2();
		});

		$(".ct4_book_a_3 > .ct4_book_3_area:nth-of-type(1) > .ct4_prev_button").click(function(){
			ct4_prev_a_3_1();
		});

		$(".ct4_book_a_3 > .ct4_book_3_area:nth-of-type(1) > .ct4_next_button").click(function(){
			ct4_next_a_3_1();
		});

		$(".ct4_book_a_3 > .ct4_book_3_area:nth-of-type(2) > .ct4_prev_button").click(function(){
			ct4_prev_a_3_2();
		});

		$(".ct4_book_a_3 > .ct4_book_3_area:nth-of-type(2) > .ct4_next_button").click(function(){
			ct4_next_a_3_2();
		});

		$("#ct4_book_3 > .st4_book_b > .ct4_prev_button").click(function(){
			ct4_brand_prev();
		});

		$("#ct4_book_3 > .st4_book_b > .ct4_next_button").click(function(){
			ct4_brand_next();
		});

		$(".ct4_book_a_4 > .ct4_prev_button").click(function(){
			ct4_prev_a_4();
		});

		$(".ct4_book_a_4 > .ct4_next_button").click(function(){
			ct4_next_a_4();
		});

		$(".ct4_book_a_5 > .ct4_book_3_area > .ct4_prev_button").click(function(){
			ct4_prev_a_5();
		});

		$(".ct4_book_a_5 > .ct4_book_3_area > .ct4_next_button").click(function(){
			ct4_next_a_5();
		});

		$("#ct4_book_6 > .ct4_book_a_6 > .ct4_book_3_area > .ct4_prev_button").click(function(){
			ct4_prev_a_6();
		});

		$("#ct4_book_6 > .ct4_book_a_6 > .ct4_book_3_area > .ct4_next_button").click(function(){
			ct4_next_a_6();
		});

		$(".ct4_book_a_8 > .ct4_prev_button").click(function(){
			ct4_prev_a_8();
		});

		$(".ct4_book_a_8 > .ct4_next_button").click(function(){
			ct4_next_a_8();
		});

		$(".content_5_advertise_wrap > .prev_button").click(function(){
			content_5_advertise_prev();
		});

		$(".content_5_advertise_wrap > .next_button").click(function(){
			content_5_advertise_next();
		});

		$(".card_box_sample_box > .prev_button").click(function(){
			content_6_advertise_prev();
		});

		$(".card_box_sample_box > .next_button").click(function(){
			content_6_advertise_next();
		});

		$(".channel_yes > .prev_button").click(function(){
			channel_yes_prev();
		});

		$(".channel_yes > .next_button").click(function(){
			channel_yes_next();
		});

		$(".yes_blog > .prev_button").click(function(){
			yes_blog_prev();
		});

		$(".yes_blog > .next_button").click(function(){
			yes_blog_next();
		});

	
});