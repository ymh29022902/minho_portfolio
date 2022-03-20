$(document).ready(function(){
	
	//콘텐츠1 적용

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"나를 마릴린 먼로라고 하자"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$("#today_book > .today_book_box:nth-of-type(1) > .today_book_box_img").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$("#today_book > .today_book_box:nth-of-type(1) > .today_book_box_text").append("<h4>"+'<a href="sub2.html">'+"오늘의 책>"+"</a>"+"</h4>");
			$("#today_book > .today_book_box:nth-of-type(1) > .today_book_box_text").append("<h3>"+'<a href="sub2.html">'+"경성의 기묘한 이야기"+"</a>"+"</h3>");

			var str=msg.documents[0].contents;
			var str2=str.substring(0,200);

			$("#today_book > .today_book_box:nth-of-type(1) > .today_book_box_text").append("<p>"+'<a href="sub2.html">'+str2+"</a>"+"</p>");
			$("#today_book > .today_book_box:nth-of-type(1) > .today_book_box_text").append("<h4>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h4>");

			var sts=msg.documents[0].authors+" | " +msg.documents[0].publisher;
			var sts2=sts.substring(0,12);

			$("#today_book > .today_book_box:nth-of-type(1) > .today_book_box_text").append("<p>"+sts2+"</p>");

			$("#today_book > .today_book_box:nth-of-type(1) > .today_book_box_text").append('<h5>'+msg.documents[0].price+"</h5>"); 

		//이미지 스타일	
			$(".today_book_box:nth-of-type(1) > .today_book_box_img > a > img").attr("width","225");
			$(".today_book_box:nth-of-type(1) > .today_book_box_img > a > img").attr("height","328");

		//텍스트 스타일	
			$(".today_book_box:nth-of-type(1) > .today_book_box_text > h3 > a").css({"float":"left", "color":"#669acc"});
			$(".today_book_box:nth-of-type(1) > .today_book_box_text > h4 > a").css({"float":"left", "line-height":"2"});
			$(".today_book_box:nth-of-type(1) > .today_book_box_text > h5 > a").css({"float":"left"});
			$(".today_book_box:nth-of-type(1) > .today_book_box_text > h6 > a").css({"float":"left"});
			$(".today_book_box:nth-of-type(1) > .today_book_box_text > p").css({"float":"left", "color":"#9e9e9e"});
			$(".today_book_box:nth-of-type(1) > .today_book_box_text > p > a").css({"float":"left", "color":"#9e9e9e","font-size":"13px","margin":"10px 0px"});
	});

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"아침은 생각한다"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$("#today_book > .today_book_box:nth-of-type(2) > .today_book_box_img").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$("#today_book > .today_book_box:nth-of-type(2) > .today_book_box_text").append("<h4>"+'<a href="sub2.html">'+"오늘의 책>"+"</a>"+"</h4>");
			$("#today_book > .today_book_box:nth-of-type(2) > .today_book_box_text").append("<h3>"+'<a href="sub2.html">'+"마음을 정화하는 서정시의 정수"+"</a>"+"</h3>");

			var str=msg.documents[0].contents;
			var str2=str.substring(0,198);

			$("#today_book > .today_book_box:nth-of-type(2) > .today_book_box_text").append("<p>"+'<a href="sub2.html">'+str2+"</a>"+"</p>");
			$("#today_book > .today_book_box:nth-of-type(2) > .today_book_box_text").append("<h4>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h4>");

			var sts=msg.documents[0].authors+" | " +msg.documents[0].publisher;
			var sts2=sts.substring(0,12);

			$("#today_book > .today_book_box:nth-of-type(2) > .today_book_box_text").append("<p>"+sts2+"</p>");

			$("#today_book > .today_book_box:nth-of-type(2) > .today_book_box_text").append('<h5>'+msg.documents[0].price+"</h5>"); 

		//이미지 스타일	
			$(".today_book_box:nth-of-type(2) > .today_book_box_img > a > img").attr("width","225");
			$(".today_book_box:nth-of-type(2) > .today_book_box_img > a > img").attr("height","328");

		//텍스트 스타일	
			$(".today_book_box:nth-of-type(2) > .today_book_box_text > h3 > a").css({"float":"left", "color":"#669acc"});
			$(".today_book_box:nth-of-type(2) > .today_book_box_text > h4 > a").css({"float":"left", "line-height":"2"});
			$(".today_book_box:nth-of-type(2) > .today_book_box_text > h5 > a").css({"float":"left"});
			$(".today_book_box:nth-of-type(2) > .today_book_box_text > h6 > a").css({"float":"left"});
			$(".today_book_box:nth-of-type(2) > .today_book_box_text > p").css({"float":"left", "color":"#666"});
			$(".today_book_box:nth-of-type(2) > .today_book_box_text > p > a").css({"float":"left", "color":"#9e9e9e","font-size":"13px","margin":"10px 0px"});
	});

	//

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"1160808090"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$("#today_book > .today_book_box:nth-of-type(3) > .today_book_box_img").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$("#today_book > .today_book_box:nth-of-type(3) > .today_book_box_text").append("<h4>"+'<a href="sub2.html">'+"오늘의 책>"+"</a>"+"</h4>");
			$("#today_book > .today_book_box:nth-of-type(3) > .today_book_box_text").append("<h3>"+'<a href="sub2.html">'+"또다른 명품 교양 만화의 탄생"+"</a>"+"</h3>");

			var str=msg.documents[0].contents;
			var str2=str.substring(0,200);

			$("#today_book > .today_book_box:nth-of-type(3) > .today_book_box_text").append("<p>"+'<a href="sub2.html">'+str2+"</a>"+"</p>");
			$("#today_book > .today_book_box:nth-of-type(3) > .today_book_box_text").append("<h4>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h4>");

			var sts=msg.documents[0].authors+" | " +msg.documents[0].publisher;
			var sts2=sts.substring(0,12);

			$("#today_book > .today_book_box:nth-of-type(3) > .today_book_box_text").append("<p>"+sts2+"</p>");

			$("#today_book > .today_book_box:nth-of-type(3) > .today_book_box_text").append('<h5>'+msg.documents[0].price+"</h5>"); 

		//이미지 스타일	
			$(".today_book_box:nth-of-type(3) > .today_book_box_img > a > img").attr("width","225");
			$(".today_book_box:nth-of-type(3) > .today_book_box_img > a > img").attr("height","328");

		//텍스트 스타일	
			$(".today_book_box:nth-of-type(3) > .today_book_box_text > h3 > a").css({"float":"left", "color":"#669acc"});
			$(".today_book_box:nth-of-type(3) > .today_book_box_text > h4 > a").css({"float":"left", "line-height":"2"});
			$(".today_book_box:nth-of-type(3) > .today_book_box_text > h5 > a").css({"float":"left"});
			$(".today_book_box:nth-of-type(3) > .today_book_box_text > h6 > a").css({"float":"left"});
			$(".today_book_box:nth-of-type(3) > .today_book_box_text > p").css({"float":"left", "color":"#666"});
			$(".today_book_box:nth-of-type(3) > .today_book_box_text > p > a").css({"float":"left", "color":"#9e9e9e","font-size":"13px","margin":"10px 0px"});
	});

	//

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"9788901256603"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$("#today_book > .today_book_box:nth-of-type(4) > .today_book_box_img").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$("#today_book > .today_book_box:nth-of-type(4) > .today_book_box_text").append("<h4>"+'<a href="sub2.html">'+"오늘의 책>"+"</a>"+"</h4>");
			$("#today_book > .today_book_box:nth-of-type(4) > .today_book_box_text").append("<h3>"+'<a href="sub2.html">'+"세계적인 과학자 제니퍼 다우드나의 모든 것"+"</a>"+"</h3>");

			var str=msg.documents[0].contents;
			var str2=str.substring(0,200);

			$("#today_book > .today_book_box:nth-of-type(4) > .today_book_box_text").append("<p>"+'<a href="sub2.html">'+str2+"</a>"+"</p>");
			$("#today_book > .today_book_box:nth-of-type(4) > .today_book_box_text").append("<h4>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h4>");

			var sts=msg.documents[0].authors+" | " +msg.documents[0].publisher;
			var sts2=sts.substring(0,12);

			$("#today_book > .today_book_box:nth-of-type(4) > .today_book_box_text").append("<p>"+sts2+"</p>");

			$("#today_book > .today_book_box:nth-of-type(4) > .today_book_box_text").append('<h5>'+msg.documents[0].price+"</h5>"); 

		//이미지 스타일	
			$(".today_book_box:nth-of-type(4) > .today_book_box_img > a > img").attr("width","225");
			$(".today_book_box:nth-of-type(4) > .today_book_box_img > a > img").attr("height","328");

		//텍스트 스타일	
			$(".today_book_box:nth-of-type(4) > .today_book_box_text > h3 > a").css({"float":"left", "color":"#669acc"});
			$(".today_book_box:nth-of-type(4) > .today_book_box_text > h4 > a").css({"float":"left", "line-height":"2"});
			$(".today_book_box:nth-of-type(4) > .today_book_box_text > h5 > a").css({"float":"left"});
			$(".today_book_box:nth-of-type(4) > .today_book_box_text > h6 > a").css({"float":"left"});
			$(".today_book_box:nth-of-type(4) > .today_book_box_text > p").css({"float":"left", "color":"#666"});
			$(".today_book_box:nth-of-type(4) > .today_book_box_text > p > a").css({"float":"left", "color":"#9e9e9e","font-size":"13px","margin":"10px 0px"});
	});


	//content_1 샘플

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"나를 마릴린 먼로라고 하자"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".today_book_sample > li:first-child > a > .today_book_sample_box").append("<img src='"+msg.documents[0].thumbnail+"'/>");
			
			$(".today_book_sample_box img").attr("width","60");
			$(".today_book_sample_box img").attr("height","85");
			$(".today_book_sample > li:first-child > a > .today_book_sample_box img").css({"border":"3px solid #186ab3"});
			$(".today_book_sample_box img").hover(function(){
				$(".today_book_sample_box img").css("border","none");
				$(this).css({"border":"3px solid #186ab3"});
			},function(){
				$(this).css({"border":"3px solid #186ab3"});
			});

	});		

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"아침은 생각한다"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".today_book_sample > li:nth-child(2) > a > .today_book_sample_box").append("<img src='"+msg.documents[0].thumbnail+"'/>");
			
			$(".today_book_sample_box img").attr("width","60");
			$(".today_book_sample_box img").attr("height","85");
			$(".today_book_sample_box img").hover(function(){
				$(".today_book_sample_box img").css("border","none");
				$(this).css({"border":"3px solid #186ab3"});
			},function(){
				$(this).css({"border":"3px solid #186ab3"});
			});
	});	

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"박시백의 고려사 1"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".today_book_sample > li:nth-child(3) > a > .today_book_sample_box").append("<img src='"+msg.documents[0].thumbnail+"'/>");
			
			$(".today_book_sample_box img").attr("width","60");
			$(".today_book_sample_box img").attr("height","85");
			$(".today_book_sample_box img").hover(function(){
				$(".today_book_sample_box img").css("border","none");
				$(this).css({"border":"3px solid #186ab3"});
			},function(){
				$(this).css({"border":"3px solid #186ab3"});
			});

	});	

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"9788901256603"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".today_book_sample > li:last-child > a > .today_book_sample_box").append("<img src='"+msg.documents[0].thumbnail+"'/>");
			
			$(".today_book_sample_box img").attr("width","60");
			$(".today_book_sample_box img").attr("height","85");
			$(".today_book_sample_box img").hover(function(){
				$(".today_book_sample_box img").css("border","none");
				$(this).css({"border":"3px solid #186ab3"});
			},function(){
				$(this).css({"border":"3px solid #186ab3"});
			});

	});	


	//콘텐츠1 랭킹 적용

	//국내도서 1~5

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"이어령의 마지막 수업"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".book_ranking:nth-of-type(1) > li:nth-of-type(1) > a > .ranking_box > .ranking_box_img").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".book_ranking:nth-of-type(1) > li:nth-of-type(1) > a > .ranking_box > .ranking_box_text").append("<h4>"+msg.documents[0].title+"</h4>");

			var sts=msg.documents[0].authors+" | " +msg.documents[0].publisher;
			var sts2=sts.substring(0,12);

			$(".book_ranking:nth-of-type(1) > li:nth-of-type(1) > a > .ranking_box > .ranking_box_text").append("<p>"+sts2+"</p>");

			$(".ranking_box_img img").attr("width","43");
			$(".ranking_box_img img").attr("height","43");

			$(".ranking_box_text > h4").css({"fontSize":"5px"});
			$(".ranking_box_text > p").css({"color":"#666", "fontSize":"5px"});

		
	});

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"9788933871751"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".book_ranking:nth-of-type(1) > li:nth-of-type(2) > a > .ranking_box > .ranking_box_img").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".book_ranking:nth-of-type(1) > li:nth-of-type(2) > a > .ranking_box > .ranking_box_text").append("<h4>"+msg.documents[0].title+"</h4>");

			var sts=msg.documents[0].authors+" | " +msg.documents[0].publisher;
			var sts2=sts.substring(0,12);

			$(".book_ranking:nth-of-type(1) > li:nth-of-type(2) > a > .ranking_box > .ranking_box_text").append("<p>"+sts2+"</p>");

			$(".ranking_box_img img").attr("width","43");
			$(".ranking_box_img img").attr("height","43");

			$(".ranking_box_text > h4").css({"fontSize":"5px"});
			$(".ranking_box_text > p").css({"color":"#666", "fontSize":"5px"});

		
	});

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"설민석의 한국사 대모험 20"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".book_ranking:nth-of-type(1) > li:nth-of-type(3) > a > .ranking_box > .ranking_box_img").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".book_ranking:nth-of-type(1) > li:nth-of-type(3) > a > .ranking_box > .ranking_box_text").append("<h4>"+msg.documents[0].title+"</h4>");

			var sts=msg.documents[0].authors+" | " +msg.documents[0].publisher;
			var sts2=sts.substring(0,12);

			$(".book_ranking:nth-of-type(1) > li:nth-of-type(3) > a > .ranking_box > .ranking_box_text").append("<p>"+sts2+"</p>");

			$(".ranking_box_img img").attr("width","43");
			$(".ranking_box_img img").attr("height","43");

			$(".ranking_box_text > h4").css({"fontSize":"5px"});
			$(".ranking_box_text > p").css({"color":"#666", "fontSize":"5px"});

		
	});

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"불편한 편의점"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".book_ranking:nth-of-type(1) > li:nth-of-type(4) > a > .ranking_box > .ranking_box_img").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".book_ranking:nth-of-type(1) > li:nth-of-type(4) > a > .ranking_box > .ranking_box_text").append("<h4>"+msg.documents[0].title+"</h4>");

			var sts=msg.documents[0].authors+" | " +msg.documents[0].publisher;
			var sts2=sts.substring(0,12);

			$(".book_ranking:nth-of-type(1) > li:nth-of-type(4) > a > .ranking_box > .ranking_box_text").append("<p>"+sts2+"</p>");

			$(".ranking_box_img img").attr("width","43");
			$(".ranking_box_img img").attr("height","43");

			$(".ranking_box_text > h4").css({"fontSize":"5px"});
			$(".ranking_box_text > p").css({"color":"#666", "fontSize":"5px"});

		
	});

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"물고기는 존재하지 않는다"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".book_ranking:nth-of-type(1) > li:nth-of-type(5) > a > .ranking_box > .ranking_box_img").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".book_ranking:nth-of-type(1) > li:nth-of-type(5) > a > .ranking_box > .ranking_box_text").append("<h4>"+msg.documents[0].title+"</h4>");

			var sts=msg.documents[0].authors+" | " +msg.documents[0].publisher;
			var sts2=sts.substring(0,12);

			$(".book_ranking:nth-of-type(1) > li:nth-of-type(5) > a > .ranking_box > .ranking_box_text").append("<p>"+sts2+"</p>");

			$(".ranking_box_img img").attr("width","43");
			$(".ranking_box_img img").attr("height","43");

			$(".ranking_box_text > h4").css({"fontSize":"5px"});
			$(".ranking_box_text > p").css({"color":"#666", "fontSize":"5px"});

		
	});

	//국내도서 1~5

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"9791191056372"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".book_ranking:nth-of-type(2) > li:nth-of-type(1) > a > .ranking_box > .ranking_box_img").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".book_ranking:nth-of-type(2) > li:nth-of-type(1) > a > .ranking_box > .ranking_box_text").append("<h4>"+msg.documents[0].title+"</h4>");

			var sts=msg.documents[0].authors+" | " +msg.documents[0].publisher;
			var sts2=sts.substring(0,12);

			$(".book_ranking:nth-of-type(2) > li:nth-of-type(1) > a > .ranking_box > .ranking_box_text").append("<p>"+sts2+"</p>");

			$(".ranking_box_img img").attr("width","43");
			$(".ranking_box_img img").attr("height","43");

			$(".ranking_box_text > h4").css({"fontSize":"5px"});
			$(".ranking_box_text > p").css({"color":"#666", "fontSize":"5px"});

		
	});

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"흔한남매 과학탐험대 4"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".book_ranking:nth-of-type(2) > li:nth-of-type(2) > a > .ranking_box > .ranking_box_img").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".book_ranking:nth-of-type(2) > li:nth-of-type(2) > a > .ranking_box > .ranking_box_text").append("<h4>"+msg.documents[0].title+"</h4>");

			var sts=msg.documents[0].authors+" | " +msg.documents[0].publisher;
			var sts2=sts.substring(0,12);

			$(".book_ranking:nth-of-type(2) > li:nth-of-type(2) > a > .ranking_box > .ranking_box_text").append("<p>"+sts2+"</p>");

			$(".ranking_box_img img").attr("width","43");
			$(".ranking_box_img img").attr("height","43");

			$(".ranking_box_text > h4").css({"fontSize":"5px"});
			$(".ranking_box_text > p").css({"color":"#666", "fontSize":"5px"});

		
	});

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"GO GO 카카오프렌즈 23 싱가포르"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".book_ranking:nth-of-type(2) > li:nth-of-type(3) > a > .ranking_box > .ranking_box_img").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".book_ranking:nth-of-type(2) > li:nth-of-type(3) > a > .ranking_box > .ranking_box_text").append("<h4>"+msg.documents[0].title+"</h4>");

			var sts=msg.documents[0].authors+" | " +msg.documents[0].publisher;
			var sts2=sts.substring(0,12);

			$(".book_ranking:nth-of-type(2) > li:nth-of-type(3) > a > .ranking_box > .ranking_box_text").append("<p>"+sts2+"</p>");

			$(".ranking_box_img img").attr("width","43");
			$(".ranking_box_img img").attr("height","43");

			$(".ranking_box_text > h4").css({"fontSize":"5px"});
			$(".ranking_box_text > p").css({"color":"#666", "fontSize":"5px"});

		
	});

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"세븐 테크"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".book_ranking:nth-of-type(2) > li:nth-of-type(4) > a > .ranking_box > .ranking_box_img").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".book_ranking:nth-of-type(2) > li:nth-of-type(4) > a > .ranking_box > .ranking_box_text").append("<h4>"+msg.documents[0].title+"</h4>");

			var sts=msg.documents[0].authors+" | " +msg.documents[0].publisher;
			var sts2=sts.substring(0,12);

			$(".book_ranking:nth-of-type(2) > li:nth-of-type(4) > a > .ranking_box > .ranking_box_text").append("<p>"+sts2+"</p>");

			$(".ranking_box_img img").attr("width","43");
			$(".ranking_box_img img").attr("height","43");

			$(".ranking_box_text > h4").css({"fontSize":"5px"});
			$(".ranking_box_text > p").css({"color":"#666", "fontSize":"5px"});

		
	});

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"해커스 토익 기출 보카"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".book_ranking:nth-of-type(2) > li:nth-of-type(5) > a > .ranking_box > .ranking_box_img").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".book_ranking:nth-of-type(2) > li:nth-of-type(5) > a > .ranking_box > .ranking_box_text").append("<h4>"+msg.documents[0].title+"</h4>");

			var sts=msg.documents[0].authors+" | " +msg.documents[0].publisher;
			var sts2=sts.substring(0,12);

			$(".book_ranking:nth-of-type(2) > li:nth-of-type(5) > a > .ranking_box > .ranking_box_text").append("<p>"+sts2+"</p>");

			$(".ranking_box_img img").attr("width","43");
			$(".ranking_box_img img").attr("height","43");

			$(".ranking_box_text > h4").css({"fontSize":"5px"});
			$(".ranking_box_text > p").css({"color":"#666", "fontSize":"5px"});

		
	});



	
});