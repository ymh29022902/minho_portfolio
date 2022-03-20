$(document).ready(function(){
	var click=1;
	$(".series_book_img").css("display","none");
	$(".series_book_text > .series_purchase").css("display","none");
	
	$(".series_menu_cover > .menu_bar").click(function(){
		click++;
		if(click%2==0){
			$(".series_book").find(".series_book_img").stop().show();	
			$(".series_book_text").find(".series_purchase").stop().show();	
			$("#content_1").css("height","587px");
		}else if(click==100){
			click=1;
		}

		else{
			$(".series_book").find(".series_book_img").stop().hide();	
			$(".series_book_text").find(".series_purchase").stop().hide();
			$("#content_1").css("height","315px");
		}
	});
});