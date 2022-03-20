$(document).ready(function(){

	//slider


	//좌측 메뉴 애니메이션

		var i=0;
		$('.slide_sub').css("display","none");

		$('.slider_menu > li').mouseenter(function(){
			i=($(this).index())+1;
			$("#slider_wrap > article").hide();
			$("#slider_wrap > article:nth-of-type" + "("+i+")").stop().show();
			$('.slide_sub').stop().hide();
			$(this).find('.slide_sub').stop().show()
		}).mouseleave(function(){
			$(this).find('.slide_sub').stop().show();
		});


	//슬라이더 멀티페이지	

	//슬라이더 prev&next 버튼

		$('#slider_wrap > article').mouseover(function(){
			$(this).find(".slider_prev_button").stop().show();
			$(this).find(".slider_next_button").stop().show();
		}).mouseout(function(){
			$(this).find(".slider_prev_button").stop().hide();
			$(this).find(".slider_next_button").stop().hide();
		});

		

	//슬라이더 이미지 자동 전환

		var banner_a=0;

		function slider_a(){
			banner_a++;
			if(banner_a>=4){
				banner_a=0;
			}
			$('.slider_content_a_img li').eq(banner_a).stop().show();
			$('.span_box_a > span').eq(banner_a).css("backgroundColor","#333333");
			$('.span_box_a > span > a').eq(banner_a).css("color","#fcf9ff");

			$('.slider_content_a_img li').eq(banner_a-1).stop().hide();
			$('.span_box_a > span').eq(banner_a-1).css("backgroundColor","#f8f8f8");
			$('.span_box_a > span > a').eq(banner_a-1).css("color", "black");
		}

	//슬라이더 하단 버튼 hover 애니메이션	

		$('.span_box_a > span').mouseenter(function(){
			banner_a=($(this).index());
			clearInterval(slider_a);
			$('.slider_content_a_img > li').eq(banner_a).stop().show();
			$('.slider_content_a_img > li').eq(banner_a-1).stop().hide();
			$(this).css("backgroundColor","#333333");
			$(this).find('a').css("color","#fcf9ff");
			
		}).mouseleave(function(){
			$('.span_box_a > span').css("backgroundColor","#f8f8f8");
			$('.span_box_a > span > a').css("color","black");
			$(this).css("backgroundColor","#333333");
			$(this).find('a').css("color","#fcf9ff");

		});


	//두번째

	//슬라이더 이미지 자동 전환

		var banner_b=0;

		function slider_b(){
			banner_b++;
			if(banner_b>$('.slider_content_b_img li:last').index()){
				banner_b=0;
			}
			$('.slider_content_b_img li').eq(banner_b).stop().show();
			$('.span_box_b > span').eq(banner_b).css("backgroundColor","#333333");
			$('.span_box_b > span > a').eq(banner_b).css("color","#fcf9ff");

			$('.slider_content_b_img li').eq(banner_b-1).stop().hide();
			$('.span_box_b > span').eq(banner_b-1).css("backgroundColor","#f8f8f8");
			$('.span_box_b > span > a').eq(banner_b-1).css("color", "black");
		}

	//슬라이더 하단 버튼 hover 애니메이션	

		$('.span_box_b > span').mouseenter(function(){
			banner_b=($(this).index());
			$('.slider_content_b_img > li').eq(banner_b).stop().show();
			$('.slider_content_b_img > li').eq(banner_b-1).stop().hide();
			$(this).css("backgroundColor","#333333");
			$(this).find('a').css("color","#fcf9ff");

		}).mouseleave(function(){
			$(this).css("backgroundColor","#f8f8f8");
			$(this).find('a').css("color","black");
		});
	
	
	//세번째

	//슬라이더 이미지 자동 전환

		var banner_c=0;

		function slider_c(){
			banner_c++;
			if(banner_c>$('.slider_content_c_img li:last').index()){
				banner_c=0;
			}
			$('.slider_content_c_img li').eq(banner_c).stop().show();
			$('.span_box_c > span').eq(banner_c).css("backgroundColor","#333333");
			$('.span_box_c > span > a').eq(banner_c).css("color","#fcf9ff");

			$('.slider_content_c_img li').eq(banner_c-1).stop().hide();
			$('.span_box_c > span').eq(banner_c-1).css("backgroundColor","#f8f8f8");
			$('.span_box_c > span > a').eq(banner_c-1).css("color", "black");
		}

	//슬라이더 하단 버튼 hover 애니메이션	

		$('.span_box_c > span').mouseenter(function(){
			banner_c=($(this).index());
			$('.slider_content_c_img > li').eq(banner_c).stop().show();
			$('.slider_content_c_img > li').eq(banner_c-1).stop().hide();
			$(this).css("backgroundColor","#333333");
			$(this).find('a').css("color","#fcf9ff");

		}).mouseleave(function(){
			$(this).css("backgroundColor","#f8f8f8");
			$(this).find('a').css("color","black");
		});

	//네번째

	//슬라이더 이미지 자동 전환

		var banner_d=0;

		function slider_d(){
			banner_d++;
			if(banner_d>$('.slider_content_d_img li:last').index()){
				banner_d=0;
			}
			$('.slider_content_d_img li').eq(banner_d).stop().show();
			$('.span_box_d > span').eq(banner_d).css("backgroundColor","#333333");
			$('.span_box_d > span > a').eq(banner_d).css("color","#fcf9ff");

			$('.slider_content_d_img li').eq(banner_d-1).stop().hide();
			$('.span_box_d > span').eq(banner_d-1).css("backgroundColor","#f8f8f8");
			$('.span_box_d > span > a').eq(banner_d-1).css("color", "black");
		}

	//슬라이더 하단 버튼 hover 애니메이션	

		var banner_d=0;

		$('.span_box_d > span').mouseenter(function(){
			banner_d=($(this).index());
			$('.slider_content_d_img > li').eq(banner_d).stop().show();
			$('.slider_content_d_img > li').eq(banner_d-1).stop().hide();
			$(this).css("backgroundColor","#333333");
			$(this).find('a').css("color","#fcf9ff");

		}).mouseleave(function(){
			$(this).css("backgroundColor","#f8f8f8");
			$(this).find('a').css("color","black");
		});
		
	//다섯번째

	//슬라이더 이미지 자동 전환

		var banner_e=0;

		function slider_e(){
			banner_e++;
			if(banner_e>$('.slider_content_e_img li:last').index()){
				banner_e=0;
			}
			$('.slider_content_e_img li').eq(banner_e).stop().show();
			$('.span_box_e > span').eq(banner_e).css("backgroundColor","#333333");
			$('.span_box_e > span > a').eq(banner_e).css("color","#fcf9ff");

			$('.slider_content_e_img li').eq(banner_e-1).stop().hide();
			$('.span_box_e > span').eq(banner_e-1).css("backgroundColor","#f8f8f8");
			$('.span_box_e > span > a').eq(banner_e-1).css("color", "black");
		}

	//슬라이더 하단 버튼 hover 애니메이션	

		var banner_e=0;

		$('.span_box_e > span').mouseenter(function(){
			banner_e=($(this).index());
			$('.slider_content_e_img > li').eq(banner_e).stop().show();
			$('.slider_content_e_img > li').eq(banner_e-1).stop().hide();
			$(this).css("backgroundColor","#333333");
			$(this).find('a').css("color","#fcf9ff");

		}).mouseleave(function(){
			$(this).css("backgroundColor","#f8f8f8");
			$(this).find('a').css("color","black");
		});
		
	//여섯번째

	//슬라이더 이미지 자동 전환

		var banner_f=0;

		function slider_f(){
			banner_f++;
			if(banner_f>$('.slider_content_f_img li:last').index()){
				banner_f=0;
			}
			$('.slider_content_f_img li').eq(banner_f).stop().show();
			$('.span_box_f > span').eq(banner_f).css("backgroundColor","#333333");
			$('.span_box_f > span > a').eq(banner_f).css("color","#fcf9ff");

			$('.slider_content_f_img li').eq(banner_f-1).stop().hide();
			$('.span_box_f > span').eq(banner_f-1).css("backgroundColor","#f8f8f8");
			$('.span_box_f > span > a').eq(banner_f-1).css("color", "black");
		}

	//슬라이더 하단 버튼 hover 애니메이션	

		$('.span_box_f > span').mouseenter(function(){
			banner_f=($(this).index());
			$('.slider_content_f_img > li').eq(banner_f).stop().show();
			$('.slider_content_f_img > li').eq(banner_f-1).stop().hide();
			$(this).css("backgroundColor","#333333");
			$(this).find('a').css("color","#fcf9ff");

		}).mouseleave(function(){
			$(this).css("backgroundColor","#f8f8f8");
			$(this).find('a').css("color","black");
		});
		
			
	//일곱번째

	//슬라이더 이미지 자동 전환

		var banner_g=0;

		function slider_g(){
			banner_g++;
			if(banner_g>$('.slider_content_g_img li:last').index()){
				banner_g=0;
			}
			$('.slider_content_g_img li').eq(banner_g).stop().show();
			$('.span_box_g > span').eq(banner_g).css("backgroundColor","#333333");
			$('.span_box_g > span > a').eq(banner_g).css("color","#fcf9ff");

			$('.slider_content_g_img li').eq(banner_g-1).stop().hide();
			$('.span_box_g > span').eq(banner_g-1).css("backgroundColor","#f8f8f8");
			$('.span_box_g > span > a').eq(banner_g-1).css("color", "black");
		}

	//슬라이더 하단 버튼 hover 애니메이션	

		var banner_g=0;

		$('.span_box_g > span').mouseenter(function(){
			i=($(this).index());
			$('.slider_content_g_img > li').eq(banner_g).stop().show();
			$('.slider_content_g_img > li').eq(banner_g-1).stop().hide();
			$(this).css("backgroundColor","#333333");
			$(this).find('a').css("color","#fcf9ff");

		}).mouseleave(function(){
			$(this).css("backgroundColor","#f8f8f8");
			$(this).find('a').css("color","black");
		});		

	//여덟번째

	//슬라이더 이미지 자동 전환

		var banner_h=0;

		function slider_h(){
			banner_h++;
			if(banner_h>$('.slider_content_h_img li:last').index()){
				banner_h=0;
			}
			$('.slider_content_h_img li').eq(banner_h).stop().show();
			$('.span_box_h > span').eq(banner_h).css("backgroundColor","#333333");
			$('.span_box_h > span > a').eq(banner_h).css("color","#fcf9ff");

			$('.slider_content_h_img li').eq(banner_h-1).stop().hide();
			$('.span_box_h > span').eq(banner_h-1).css("backgroundColor","#f8f8f8");
			$('.span_box_h > span > a').eq(banner_h-1).css("color", "black");
		}

	//슬라이더 하단 버튼 hover 애니메이션	

		$('.span_box_h > span').mouseenter(function(){
			banner_h=($(this).index());
			$('.slider_content_h_img > li').eq(banner_h).stop().show();
			$('.slider_content_h_img > li').eq(banner_h-1).stop().hide();
			$(this).css("backgroundColor","#333333");
			$(this).find('a').css("color","#fcf9ff");

		}).mouseleave(function(){
			$(this).css("backgroundColor","#f8f8f8");
			$(this).find('a').css("color","black");
		});
		
	//아홉번째

	//슬라이더 이미지 자동 전환

		var banner_i=0;

		function slider_i(){
			banner_i++;
			if(banner_i>$('.slider_content_i_img li:last').index()){
				banner_i=0;
			}
			$('.slider_content_i_img li').eq(banner_i).stop().show();
			$('.span_box_i > span').eq(banner_i).css("backgroundColor","#333333");
			$('.span_box_i > span > a').eq(banner_i).css("color","#fcf9ff");

			$('.slider_content_i_img li').eq(banner_i-1).stop().hide();
			$('.span_box_i > span').eq(banner_i-1).css("backgroundColor","#f8f8f8");
			$('.span_box_i > span > a').eq(banner_i-1).css("color", "black");
		}

	//슬라이더 하단 버튼 hover 애니메이션	

		$('.span_box_i > span').mouseenter(function(){
			banner_i=($(this).index());
			$('.slider_content_i_img > li').eq(banner_i).stop().show();
			$('.slider_content_i_img > li').eq(banner_i-1).stop().hide();
			$(this).css("backgroundColor","#333333");
			$(this).find('a').css("color","#fcf9ff");

		}).mouseleave(function(){
			$(this).css("backgroundColor","#f8f8f8");
			$(this).find('a').css("color","black");
		});
		
	//열번째

	//슬라이더 이미지 자동 전환

		var banner_j=0;

		function slider_j(){
			banner_j++;
			if(banner_j>$('.slider_content_j_img li:last').index()){
				banner_j=0;
			}
			$('.slider_content_j_img li').eq(banner_j).stop().show();
			$('.span_box_j > span').eq(banner_j).css("backgroundColor","#333333");
			$('.span_box_j > span > a').eq(banner_j).css("color","#fcf9ff");

			$('.slider_content_j_img li').eq(banner_j-1).stop().hide();
			$('.span_box_j > span').eq(banner_j-1).css("backgroundColor","#f8f8f8");
			$('.span_box_j > span > a').eq(banner_j-1).css("color", "black");
		}

	//슬라이더 하단 버튼 hover 애니메이션	

		$('.span_box_j > span').mouseenter(function(){
			i=($(this).index());
			$('.slider_content_j_img > li').eq(banner_j).stop().show();
			$('.slider_content_j_img > li').eq(banner_j-1).stop().hide();
			$(this).css("backgroundColor","#333333");
			$(this).find('a').css("color","#fcf9ff");

		}).mouseleave(function(){
			$(this).css("backgroundColor","#f8f8f8");
			$(this).find('a').css("color","black");
		});					


		setInterval(slider_a,3000);
		setInterval(slider_b,3000);
		setInterval(slider_c,3000);
		setInterval(slider_d,3000);
		setInterval(slider_e,3000);
		setInterval(slider_f,3000);
		setInterval(slider_g,3000);
		setInterval(slider_h,3000);
		setInterval(slider_i,3000);
		setInterval(slider_j,3000);		

});