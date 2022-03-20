//콘텐츠4 적용

$(document).ready(function(){


//첫페이지

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"명랑한 은둔자"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);


			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(1)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(1)").append("<h3>"+"여성의 날 기념 특별 양장 리커버"+"</h3>");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(1)").append("<h4>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h4>");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(1)").append("<p>"+msg.documents[0].authors+" | " +msg.documents[0].publisher+"</p>");

			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(1)").append('<h5>'+str2+"원"+"</h5>"); 

			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(1) > a >img").attr("width","169");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(1) > a >img").attr("height","248");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(1) > a >img").css({"border":"1px solid #d7d7d7"});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(1) > h3").css({"color":"#669acc","fontSize":"12px"});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(1) > h4 > a").css({"fontSize":"14px"});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(1) > h4 > a").hover(function(){
				$(this).css("border-bottom","1px solid black");
			},function(){
				$(this).css("border-bottom","none");
			});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(1) > p").css({"color":"#666","fontSize":"13px"});

	
	});

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"어서 오세요, 휴남동 서점입니다"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);


			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(2)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(2)").append("<h3>"+"책과 서점, 위인이 필요한 당신의 이야기"+"</h3>");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(2)").append("<h4>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h4>");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(2)").append("<p>"+msg.documents[0].authors+" | " +msg.documents[0].publisher+"</p>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(2)").append('<h5>'+str2+"원"+"</h5>"); 

			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(2) > a >img").attr("width","169");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(2) > a >img").attr("height","248");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(2) > a >img").css({"border":"1px solid #d7d7d7"});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(2) > h3").css({"color":"#669acc","fontSize":"12px"});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(2) > h4 > a").css({"fontSize":"14px"});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(2) > h4 > a").hover(function(){
				$(this).css("border-bottom","1px solid black");
			},function(){
				$(this).css("border-bottom","none");
			});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(2) > p").css({"color":"#666","fontSize":"13px"});
	
	});

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"여름이 온다"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);


			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(3)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(3)").append("<h3>"+"2002 볼로냐 라가치상 픽션 부문 선정"+"</h3>");

			var strr=msg.documents[0].title;
			var strr2=strr.substring(0,6);
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(3)").append("<h4>"+'<a href="sub2.html">'+strr2+"</a>"+"</h4>");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(3)").append("<p>"+msg.documents[0].authors+" | " +msg.documents[0].publisher+"</p>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(3)").append('<h5>'+str2+"원"+"</h5>");  

			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(3) > a >img").attr("width","169");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(3) > a >img").attr("height","248");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(3) > a >img").css({"border":"1px solid #d7d7d7"});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(3) > h3").css({"color":"#669acc","fontSize":"12px"});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(3) > h4 > a").css({"fontSize":"14px"});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(3) > h4 > a").hover(function(){
				$(this).css("border-bottom","1px solid black");
			},function(){
				$(this).css("border-bottom","none");
			});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(3) > p").css({"color":"#666","fontSize":"13px"});
	});

//두번째 페이지

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"공정하다는 착각"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);


			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(1)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(1)").append("<h3>"+"양장 특별 한정판"+"</h3>");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(1)").append("<h4>"+'<a href="sub2.html">'+msg.documents[0].title+"(특별 양장본)"+"</a>"+"</h4>");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(1)").append("<p>"+msg.documents[0].authors+" | " +msg.documents[0].publisher+"</p>");

			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(1)").append('<h5>'+str2+"원"+"</h5>"); 

			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(1) > a >img").attr("width","169");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(1) > a >img").attr("height","248");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(1) > a >img").css({"border":"1px solid #d7d7d7"});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(1) > h3").css({"color":"#669acc","fontSize":"12px"});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(1) > h4 > a").css({"fontSize":"14px"});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(1) > h4 > a").hover(function(){
				$(this).css("border-bottom","1px solid black");
			},function(){
				$(this).css("border-bottom","none");
			});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(1) > p").css({"color":"#666","fontSize":"13px"});
	
	});

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"제프 로브 & 팀 세일 배트맨 옴니버스"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);


			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(2)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(2)").append("<h3>"+"<더 배트맨> 관람 전 필독서"+"</h3>");
			var strr=msg.documents[0].title;
			var strr2=strr.substring(0,21);
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(2)").append("<h4>"+'<a href="sub2.html">'+strr2+"</a>"+"</h4>");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(2)").append("<p>"+msg.documents[0].authors+" | " +msg.documents[0].publisher+"</p>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(2)").append('<h5>'+str2+"원"+"</h5>"); 

			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(2) > a >img").attr("width","169");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(2) > a >img").attr("height","248");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(2) > a >img").css({"border":"1px solid #d7d7d7"});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(2) > h3").css({"color":"#669acc","fontSize":"12px"});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(2) > h4 > a").css({"fontSize":"14px"});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(2) > h4 > a").hover(function(){
				$(this).css("border-bottom","1px solid black");
			},function(){
				$(this).css("border-bottom","none");
			});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(2) > p").css({"color":"#666","fontSize":"13px"});
	
	});

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"3개의 질문으로 주식시장을 이기다"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);


			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(3)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(3)").append("<h3>"+"남들이 모르는 상식으로 투자하다."+"</h3>");
			var strr=msg.documents[0].title;
			var strr2=strr.substring(0,18);
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(3)").append("<h4>"+'<a href="sub2.html">'+strr2+"(리커..."+"</a>"+"</h4>");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(3)").append("<p>"+msg.documents[0].authors+" | " +msg.documents[0].publisher+"</p>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(3)").append('<h5>'+str2+"원"+"</h5>");  

			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(3) > a >img").attr("width","169");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(3) > a >img").attr("height","248");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(3) > a >img").css({"border":"1px solid #d7d7d7"});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(3) > h3").css({"color":"#669acc","fontSize":"12px"});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(3) > h4 > a").css({"fontSize":"14px"});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(3) > h4 > a").hover(function(){
				$(this).css("border-bottom","1px solid black");
			},function(){
				$(this).css("border-bottom","none");
			});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(3) > p").css({"color":"#666","fontSize":"13px"});
	
	});

//세번째 페이지

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"Why Fish Don't Exist"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);


			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(3) > .large_book_box:nth-of-type(1)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(3) > .large_book_box:nth-of-type(1)").append("<h3>"+"“완전히 넋을 잃을 정도로 매혹적인 책.”"+"</h3>");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(3) > .large_book_box:nth-of-type(1)").append("<h4>"+'<a href="sub2.html">'+msg.documents[0].title+"(특별 양장본)"+"</a>"+"</h4>");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(3) > .large_book_box:nth-of-type(1)").append("<p>"+msg.documents[0].authors+" | " +msg.documents[0].publisher+"</p>");

			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

			$(".ct4_book_a_box:nth-of-type(3) > .large_book_box:nth-of-type(1)").append('<h5>'+str2+"원"+"</h5>"); 

			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(3) > .large_book_box:nth-of-type(1) > a >img").attr("width","169");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(3) > .large_book_box:nth-of-type(1) > a >img").attr("height","248");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(3) > .large_book_box:nth-of-type(1) > a >img").css({"border":"1px solid #d7d7d7"});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(3) > .large_book_box:nth-of-type(1) > h3").css({"color":"#669acc","fontSize":"12px"});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(3) > .large_book_box:nth-of-type(1) > h4 > a").css({"fontSize":"14px"});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(3) > .large_book_box:nth-of-type(1) > h4 > a").hover(function(){
				$(this).css("border-bottom","1px solid black");
			},function(){
				$(this).css("border-bottom","none");
			});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(3) > .large_book_box:nth-of-type(1) > p").css({"color":"#666","fontSize":"13px"});
	
	});

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"9781419729553"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);


			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(3) > .large_book_box:nth-of-type(2)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(3) > .large_book_box:nth-of-type(2)").append("<h3>"+"봄을 기다리며"+"</h3>");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(3) > .large_book_box:nth-of-type(2)").append("<h4>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h4>");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(3) > .large_book_box:nth-of-type(2)").append("<p>"+msg.documents[0].authors+" | " +msg.documents[0].publisher+"</p>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

			$(".ct4_book_a_box:nth-of-type(3) > .large_book_box:nth-of-type(2)").append('<h5>'+str2+"원"+"</h5>"); 

			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(3) > .large_book_box:nth-of-type(2) > a >img").attr("width","282");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(3) > .large_book_box:nth-of-type(2) > a >img").attr("height","248");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(3) > .large_book_box:nth-of-type(2) > a >img").css({"border":"1px solid #d7d7d7"});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(3) > .large_book_box:nth-of-type(2) > h3").css({"color":"#669acc","fontSize":"12px"});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(3) > .large_book_box:nth-of-type(2) > h4 > a").css({"fontSize":"13px"});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(3) > .large_book_box:nth-of-type(2) > h4 > a").hover(function(){
				$(this).css("border-bottom","1px solid black");
			},function(){
				$(this).css("border-bottom","none");
			});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(3) > .large_book_box:nth-of-type(2) > p").css({"color":"#666","fontSize":"13px"});
	
	});

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"9919184403"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);


			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(3) > .large_book_box:nth-of-type(3)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(3) > .large_book_box:nth-of-type(3)").append("<h3>"+"노래로 쉽게 시작하는 어린이 영어"+"</h3>");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(3) > .large_book_box:nth-of-type(3)").append("<h4>"+'<a href="sub2.html">'+msg.documents[0].title+" (세이펜 미포함)"+"</a>"+"</h4>");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(3) > .large_book_box:nth-of-type(3)").append("<p>"+msg.documents[0].authors+" | " +msg.documents[0].publisher+"</p>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(3) > .large_book_box:nth-of-type(3)").append('<h5>'+str2+"원"+"</h5>");  

			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(3) > .large_book_box:nth-of-type(3) > a >img").attr("width","282");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(3) > .large_book_box:nth-of-type(3) > a >img").attr("height","248");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(3) > .large_book_box:nth-of-type(3) > a >img").css({"border":"1px solid #d7d7d7"});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(3) > .large_book_box:nth-of-type(3) > h3").css({"color":"#669acc","fontSize":"12px"});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(3) > .large_book_box:nth-of-type(3) > h4 > a").css({"fontSize":"13px"});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(3) > .large_book_box:nth-of-type(3) > h4 > a").hover(function(){
				$(this).css("border-bottom","1px solid black");
			},function(){
				$(this).css("border-bottom","none");
			});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(3) > .large_book_box:nth-of-type(3) > p").css({"color":"#666","fontSize":"13px"});
	
	});

//네번째 페이지

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"8930258506"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);


			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(4) > .large_book_box:nth-of-type(1)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(4) > .large_book_box:nth-of-type(1)").append("<h3>"+"들춰 보고 탐색하는 영어 놀이터"+"</h3>");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(4) > .large_book_box:nth-of-type(1)").append("<h4>"+'<a href="sub2.html">'+msg.documents[0].title+"(특별 양장본)"+"</a>"+"</h4>");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(4) > .large_book_box:nth-of-type(1)").append("<p>"+msg.documents[0].authors+" | " +msg.documents[0].publisher+"</p>");

			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(4) > .large_book_box:nth-of-type(1)").append('<h5>'+str2+"원"+"</h5>"); 

			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(4) > .large_book_box:nth-of-type(1) > a >img").attr("width","290");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(4) > .large_book_box:nth-of-type(1) > a >img").attr("height","248");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(4) > .large_book_box:nth-of-type(1) > a >img").css({"border":"1px solid #d7d7d7"});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(4) > .large_book_box:nth-of-type(1) > h3").css({"color":"#669acc","fontSize":"12px"});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(4) > .large_book_box:nth-of-type(1) > h4 > a").css({"fontSize":"14px"});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(4) > .large_book_box:nth-of-type(1) > h4 > a").hover(function(){
				$(this).css("border-bottom","1px solid black");
			},function(){
				$(this).css("border-bottom","none");
			});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(4) > .large_book_box:nth-of-type(1) > p").css({"color":"#666","fontSize":"13px"});
	
	});

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"읽기만 해도 저절로 외워지는 초등 영단어"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);


			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(4) > .large_book_box:nth-of-type(2)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(4) > .large_book_box:nth-of-type(2)").append("<h3>"+"초등 필수 영단어 오래오래 기억하기"+"</h3>");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(4) > .large_book_box:nth-of-type(2)").append("<h4>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h4>");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(4) > .large_book_box:nth-of-type(2)").append("<p>"+msg.documents[0].authors+" | " +msg.documents[0].publisher+"</p>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(4) > .large_book_box:nth-of-type(2)").append('<h5>'+str2+"원"+"</h5>"); 

			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(4) > .large_book_box:nth-of-type(2) > a >img").attr("width","250");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(4) > .large_book_box:nth-of-type(2) > a >img").attr("height","248");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(4) > .large_book_box:nth-of-type(2) > a >img").css({"border":"1px solid #d7d7d7"});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(4) > .large_book_box:nth-of-type(2) > h3").css({"color":"#669acc","fontSize":"12px"});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(4) > .large_book_box:nth-of-type(2) > h4 > a").css({"fontSize":"14px"});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(4) > .large_book_box:nth-of-type(2) > h4 > a").hover(function(){
				$(this).css("border-bottom","1px solid black");
			},function(){
				$(this).css("border-bottom","none");
			});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(4) > .large_book_box:nth-of-type(2) > p").css({"color":"#666","fontSize":"13px"});
	
	});

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"그 해 우리는"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);


			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(4) > .large_book_box:nth-of-type(3)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(4) > .large_book_box:nth-of-type(3)").append("<h3>"+"화제의 드라마 프리퀄 웹툰"+"</h3>");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(4) > .large_book_box:nth-of-type(3)").append("<h4>"+'<a href="sub2.html">'+msg.documents[0].title+" (세이펜 미포함)"+"</a>"+"</h4>");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(4) > .large_book_box:nth-of-type(3)").append("<p>"+msg.documents[0].authors+" | " +msg.documents[0].publisher+"</p>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(4) > .large_book_box:nth-of-type(3)").append('<h5>'+str2+"원"+"</h5>");  

			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(4) > .large_book_box:nth-of-type(3) > a >img").attr("width","250");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(4) > .large_book_box:nth-of-type(3) > a >img").attr("height","248");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(4) > .large_book_box:nth-of-type(3) > a >img").css({"border":"1px solid #d7d7d7"});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(4) > .large_book_box:nth-of-type(3) > h3").css({"color":"#669acc","fontSize":"12px"});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(4) > .large_book_box:nth-of-type(3) > h4 > a").css({"fontSize":"14px"});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(4) > .large_book_box:nth-of-type(3) > h4 > a").hover(function(){
				$(this).css("border-bottom","1px solid black");
			},function(){
				$(this).css("border-bottom","none");
			});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(4) > .large_book_box:nth-of-type(3) > p").css({"color":"#666","fontSize":"13px"});
	
	});

//다섯번째 페이지

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"베르세르크"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);


			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(5) > .large_book_box:nth-of-type(1)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(5) > .large_book_box:nth-of-type(1)").append("<h3>"+"30권 전권 조작북 창작 그림책"+"</h3>");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(5) > .large_book_box:nth-of-type(1)").append("<h4>"+'<a href="sub2.html">'+msg.documents[0].title+"(특별 양장본)"+"</a>"+"</h4>");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(5) > .large_book_box:nth-of-type(1)").append("<p>"+msg.documents[0].authors+" | " +msg.documents[0].publisher+"</p>");

			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(5) > .large_book_box:nth-of-type(1)").append('<h5>'+str2+"원"+"</h5>"); 

			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(5) > .large_book_box:nth-of-type(1) > a >img").attr("width","250");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(5) > .large_book_box:nth-of-type(1) > a >img").attr("height","248");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(5) > .large_book_box:nth-of-type(1) > a >img").css({"border":"1px solid #d7d7d7"});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(5) > .large_book_box:nth-of-type(1) > h3").css({"color":"#669acc","fontSize":"12px"});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(5) > .large_book_box:nth-of-type(1) > h4 > a").css({"fontSize":"14px"});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(5) > .large_book_box:nth-of-type(1) > h4 > a").hover(function(){
				$(this).css("border-bottom","1px solid black");
			},function(){
				$(this).css("border-bottom","none");
			});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(5) > .large_book_box:nth-of-type(1) > p").css({"color":"#666","fontSize":"13px"});
	
	});

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"성교육 동화 둥개둥개"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);


			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(5) > .large_book_box:nth-of-type(2)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(5) > .large_book_box:nth-of-type(2)").append("<h3>"+"차이와 존중의 문화를 가르쳐요"+"</h3>");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(5) > .large_book_box:nth-of-type(2)").append("<h4>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h4>");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(5) > .large_book_box:nth-of-type(2)").append("<p>"+msg.documents[0].authors+" | " +msg.documents[0].publisher+"</p>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(5) > .large_book_box:nth-of-type(2)").append('<h5>'+str2+"원"+"</h5>"); 

			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(5) > .large_book_box:nth-of-type(2) > a >img").attr("width","250");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(5) > .large_book_box:nth-of-type(2) > a >img").attr("height","248");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(5) > .large_book_box:nth-of-type(2) > a >img").css({"border":"1px solid #d7d7d7"});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(5) > .large_book_box:nth-of-type(2) > h3").css({"color":"#669acc","fontSize":"12px"});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(5) > .large_book_box:nth-of-type(2) > h4 > a").css({"fontSize":"14px"});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(5) > .large_book_box:nth-of-type(2) > h4 > a").hover(function(){
				$(this).css("border-bottom","1px solid black");
			},function(){
				$(this).css("border-bottom","none");
			});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(5) > .large_book_box:nth-of-type(2) > p").css({"color":"#666","fontSize":"13px"});
	
	});

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"도쿄 리벤저스 직소퍼즐 스페셜"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);


			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(5) > .large_book_box:nth-of-type(3)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(5) > .large_book_box:nth-of-type(3)").append("<h3>"+"예스에서만 단독판매!"+"</h3>");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(5) > .large_book_box:nth-of-type(3)").append("<h4>"+'<a href="sub2.html">'+msg.documents[0].title+" (세이펜 미포함)"+"</a>"+"</h4>");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(5) > .large_book_box:nth-of-type(3)").append("<p>"+msg.documents[0].authors+" | " +msg.documents[0].publisher+"</p>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

			$(".ct4_book_a_box:nth-of-type(5) > .large_book_box:nth-of-type(3)").append('<h5>'+str2+"원"+"</h5>");  

			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(5) > .large_book_box:nth-of-type(3) > a >img").attr("width","288");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(5) > .large_book_box:nth-of-type(3) > a >img").attr("height","248");
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(5) > .large_book_box:nth-of-type(3) > a >img").css({"border":"1px solid #d7d7d7"});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(5) > .large_book_box:nth-of-type(3) > h3").css({"color":"#669acc","fontSize":"12px"});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(5) > .large_book_box:nth-of-type(3) > h4 > a").css({"fontSize":"14px"});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(5) > .large_book_box:nth-of-type(3) > h4 > a").hover(function(){
				$(this).css("border-bottom","1px solid black");
			},function(){
				$(this).css("border-bottom","none");
			});
			$(".ct4_book_a > .ct4_book_a_box:nth-of-type(5) > .large_book_box:nth-of-type(3) > p").css({"color":"#666","fontSize":"13px"});
	
	});

//eBook

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"울다가 웃었다"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);


			$(".ct4_book_a_2_box:nth-of-type(1) > .large_book_box:nth-of-type(1)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".ct4_book_a_2_box:nth-of-type(1) > .large_book_box:nth-of-type(1)").append("<h4>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h4>");
			$(".ct4_book_a_2_box:nth-of-type(1) > .large_book_box:nth-of-type(1)").append("<p>"+"코미디언 김영철의 속 깊은 이야기"+"</p>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

			$(".ct4_book_a_2_box:nth-of-type(1) > .large_book_box:nth-of-type(1)").append('<h5>'+str2+"원"+"</h5>");  

			$(".ct4_book_a_2_box:nth-of-type(1) > .large_book_box:nth-of-type(1) > a >img").attr("width","169");
			$(".ct4_book_a_2_box:nth-of-type(1) > .large_book_box:nth-of-type(1) > a >img").attr("height","248");
			$(".ct4_book_a_2_box:nth-of-type(1) > .large_book_box:nth-of-type(1) > a >img").css({"border":"1px solid #d7d7d7"});
			$(".ct4_book_a_2_box:nth-of-type(1) > .large_book_box:nth-of-type(1) > h3").css({"color":"#669acc","fontSize":"12px"});
			$(".ct4_book_a_2_box:nth-of-type(1) > .large_book_box:nth-of-type(1) > h4 > a").css({"fontSize":"14px"});
			$(".ct4_book_a_2_box:nth-of-type(1) > .large_book_box:nth-of-type(1) > h4 > a").hover(function(){
				$(this).css("border-bottom","1px solid black");
			},function(){
				$(this).css("border-bottom","none");
			});
			$(".ct4_book_a_2_box:nth-of-type(1) > .large_book_box:nth-of-type(1) > p").css({"color":"#9e9e9e","fontSize":"13px"});
	
	});

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"마음챙김 미술관"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);


			$(".ct4_book_a_2_box:nth-of-type(1) > .large_book_box:nth-of-type(2)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".ct4_book_a_2_box:nth-of-type(1) > .large_book_box:nth-of-type(2)").append("<h4>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h4>");
			$(".ct4_book_a_2_box:nth-of-type(1) > .large_book_box:nth-of-type(2)").append("<p>"+"내 마음의 빈 공간을 채우는 그림 한 장의 다정함"+"</p>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

			$(".ct4_book_a_2_box:nth-of-type(1) > .large_book_box:nth-of-type(2)").append('<h5>'+str2+"원"+"</h5>");  

			$(".ct4_book_a_2_box:nth-of-type(1) > .large_book_box:nth-of-type(2) > a >img").attr("width","169");
			$(".ct4_book_a_2_box:nth-of-type(1) > .large_book_box:nth-of-type(2) > a >img").attr("height","248");
			$(".ct4_book_a_2_box:nth-of-type(1) > .large_book_box:nth-of-type(2) > a >img").css({"border":"1px solid #d7d7d7"});
			$(".ct4_book_a_2_box:nth-of-type(1) > .large_book_box:nth-of-type(2) > h3").css({"color":"#669acc","fontSize":"12px"});
			$(".ct4_book_a_2_box:nth-of-type(1) > .large_book_box:nth-of-type(2) > h4 > a").css({"fontSize":"14px"});
			$(".ct4_book_a_2_box:nth-of-type(1) > .large_book_box:nth-of-type(2) > h4 > a").hover(function(){
				$(this).css("border-bottom","1px solid black");
			},function(){
				$(this).css("border-bottom","none");
			});
			$(".ct4_book_a_2_box:nth-of-type(1) > .large_book_box:nth-of-type(2) > p").css({"color":"#9e9e9e","fontSize":"13px"});
	
	});


	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"투자를 잘한다는 것"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);


			$(".ct4_book_a_2_box:nth-of-type(1) > .large_book_box:nth-of-type(3)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".ct4_book_a_2_box:nth-of-type(1) > .large_book_box:nth-of-type(3)").append("<h4>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h4>");
			$(".ct4_book_a_2_box:nth-of-type(1) > .large_book_box:nth-of-type(3)").append("<p>"+"슈퍼개미에게 배우는 성공 투자 핵심 기법"+"</p>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

			$(".ct4_book_a_2_box:nth-of-type(1) > .large_book_box:nth-of-type(3)").append('<h5>'+str2+"원"+"</h5>");  

			$(".ct4_book_a_2_box:nth-of-type(1) > .large_book_box:nth-of-type(3) > a >img").attr("width","169");
			$(".ct4_book_a_2_box:nth-of-type(1) > .large_book_box:nth-of-type(3) > a >img").attr("height","248");
			$(".ct4_book_a_2_box:nth-of-type(1) > .large_book_box:nth-of-type(3) > a >img").css({"border":"1px solid #d7d7d7"});
			$(".ct4_book_a_2_box:nth-of-type(1) > .large_book_box:nth-of-type(3) > h3").css({"color":"#669acc","fontSize":"12px"});
			$(".ct4_book_a_2_box:nth-of-type(1) > .large_book_box:nth-of-type(3) > h4 > a").css({"fontSize":"14px"});
			$(".ct4_book_a_2_box:nth-of-type(1) > .large_book_box:nth-of-type(3) > h4 > a").hover(function(){
				$(this).css("border-bottom","1px solid black");
			},function(){
				$(this).css("border-bottom","none");
			});
			$(".ct4_book_a_2_box:nth-of-type(1) > .large_book_box:nth-of-type(3) > p").css({"color":"#9e9e9e","fontSize":"13px"});
	
	});

//2페이지

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"호호호"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);


			$(".ct4_book_a_2_box:nth-of-type(2) > .large_book_box:nth-of-type(1)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".ct4_book_a_2_box:nth-of-type(2) > .large_book_box:nth-of-type(1)").append("<h4>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h4>");
			$(".ct4_book_a_2_box:nth-of-type(2) > .large_book_box:nth-of-type(1)").append("<p>"+"영화 감독 윤가은을 “위로하고 웃게 했던” 특별한 리스트"+"</p>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

			$(".ct4_book_a_2_box:nth-of-type(2) > .large_book_box:nth-of-type(1)").append('<h5>'+str2+"원"+"</h5>");  

			$(".ct4_book_a_2_box:nth-of-type(2) > .large_book_box:nth-of-type(1) > a >img").attr("width","169");
			$(".ct4_book_a_2_box:nth-of-type(2) > .large_book_box:nth-of-type(1) > a >img").attr("height","248");
			$(".ct4_book_a_2_box:nth-of-type(2) > .large_book_box:nth-of-type(1) > a >img").css({"border":"1px solid #d7d7d7"});
			$(".ct4_book_a_2_box:nth-of-type(2) > .large_book_box:nth-of-type(1) > h3").css({"color":"#669acc","fontSize":"12px"});
			$(".ct4_book_a_2_box:nth-of-type(2) > .large_book_box:nth-of-type(1) > h4 > a").css({"fontSize":"14px"});
			$(".ct4_book_a_2_box:nth-of-type(2) > .large_book_box:nth-of-type(1) > h4 > a").hover(function(){
				$(this).css("border-bottom","1px solid black");
			},function(){
				$(this).css("border-bottom","none");
			});
			$(".ct4_book_a_2_box:nth-of-type(2) > .large_book_box:nth-of-type(1) > p").css({"color":"#9e9e9e","fontSize":"13px"});
	
	});

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"9788901256603"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);


			$(".ct4_book_a_2_box:nth-of-type(2) > .large_book_box:nth-of-type(2)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".ct4_book_a_2_box:nth-of-type(2) > .large_book_box:nth-of-type(2)").append("<h4>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h4>");
			$(".ct4_book_a_2_box:nth-of-type(2) > .large_book_box:nth-of-type(2)").append("<p>"+"마이크로소프트 창업자 빌 게이츠 강력 추천 '올해의 책'"+"</p>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

			$(".ct4_book_a_2_box:nth-of-type(2) > .large_book_box:nth-of-type(2)").append('<h5>'+str2+"원"+"</h5>");  

			$(".ct4_book_a_2_box:nth-of-type(2) > .large_book_box:nth-of-type(2) > a >img").attr("width","169");
			$(".ct4_book_a_2_box:nth-of-type(2) > .large_book_box:nth-of-type(2) > a >img").attr("height","248");
			$(".ct4_book_a_2_box:nth-of-type(2) > .large_book_box:nth-of-type(2) > a >img").css({"border":"1px solid #d7d7d7"});
			$(".ct4_book_a_2_box:nth-of-type(2) > .large_book_box:nth-of-type(2) > h3").css({"color":"#669acc","fontSize":"12px"});
			$(".ct4_book_a_2_box:nth-of-type(2) > .large_book_box:nth-of-type(2) > h4 > a").css({"fontSize":"14px"});
			$(".ct4_book_a_2_box:nth-of-type(2) > .large_book_box:nth-of-type(2) > h4 > a").hover(function(){
				$(this).css("border-bottom","1px solid black");
			},function(){
				$(this).css("border-bottom","none");
			});
			$(".ct4_book_a_2_box:nth-of-type(2) > .large_book_box:nth-of-type(2) > p").css({"color":"#9e9e9e","fontSize":"13px"});
	
	});


	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"액설런스"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);


			$(".ct4_book_a_2_box:nth-of-type(2) > .large_book_box:nth-of-type(3)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".ct4_book_a_2_box:nth-of-type(2) > .large_book_box:nth-of-type(3)").append("<h4>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h4>");
			$(".ct4_book_a_2_box:nth-of-type(2) > .large_book_box:nth-of-type(3)").append("<p>"+"인간의 탁월함을 결정하는 9가지 능력"+"</p>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

			$(".ct4_book_a_2_box:nth-of-type(2) > .large_book_box:nth-of-type(3)").append('<h5>'+str2+"원"+"</h5>");  

			$(".ct4_book_a_2_box:nth-of-type(2) > .large_book_box:nth-of-type(3) > a >img").attr("width","169");
			$(".ct4_book_a_2_box:nth-of-type(2) > .large_book_box:nth-of-type(3) > a >img").attr("height","248");
			$(".ct4_book_a_2_box:nth-of-type(2) > .large_book_box:nth-of-type(3) > a >img").css({"border":"1px solid #d7d7d7"});
			$(".ct4_book_a_2_box:nth-of-type(2) > .large_book_box:nth-of-type(3) > h3").css({"color":"#669acc","fontSize":"12px"});
			$(".ct4_book_a_2_box:nth-of-type(2) > .large_book_box:nth-of-type(3) > h4 > a").css({"fontSize":"14px"});
			$(".ct4_book_a_2_box:nth-of-type(2) > .large_book_box:nth-of-type(3) > h4 > a").hover(function(){
				$(this).css("border-bottom","1px solid black");
			},function(){
				$(this).css("border-bottom","none");
			});
			$(".ct4_book_a_2_box:nth-of-type(2) > .large_book_box:nth-of-type(3) > p").css({"color":"#9e9e9e","fontSize":"13px"});
	
	});

//3페이지, 4페이지, 5페이지:ebook 데이터가 서치되지 않아 HTML로 작업


//6페이지

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"더 화이팅 신장재편판 19권"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);


			$(".ct4_book_a_2_box:nth-of-type(6) > .large_book_box:nth-of-type(1)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".ct4_book_a_2_box:nth-of-type(6) > .large_book_box:nth-of-type(1)").append("<h4>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h4>");
			$(".ct4_book_a_2_box:nth-of-type(6) > .large_book_box:nth-of-type(1)").append("<p>"+'강하다는 건 어떤 걸까? 권투만화의 레전드, "더 파이팅" 신장재편판 출간!'+"</p>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

			$(".ct4_book_a_2_box:nth-of-type(6) > .large_book_box:nth-of-type(1)").append('<h5>'+str2+"원"+"</h5>");  

			$(".ct4_book_a_2_box:nth-of-type(6) > .large_book_box:nth-of-type(1) > a >img").attr("width","169");
			$(".ct4_book_a_2_box:nth-of-type(6) > .large_book_box:nth-of-type(1) > a >img").attr("height","248");
			$(".ct4_book_a_2_box:nth-of-type(6) > .large_book_box:nth-of-type(1) > a >img").css({"border":"1px solid #d7d7d7"});
			$(".ct4_book_a_2_box:nth-of-type(6) > .large_book_box:nth-of-type(1) > h3").css({"color":"#669acc","fontSize":"12px"});
			$(".ct4_book_a_2_box:nth-of-type(6) > .large_book_box:nth-of-type(1) > h4 > a").css({"fontSize":"14px"});
			$(".ct4_book_a_2_box:nth-of-type(6) > .large_book_box:nth-of-type(1) > h4 > a").hover(function(){
				$(this).css("border-bottom","1px solid black");
			},function(){
				$(this).css("border-bottom","none");
			});
			$(".ct4_book_a_2_box:nth-of-type(6) > .large_book_box:nth-of-type(1) > p").css({"color":"#9e9e9e","fontSize":"13px"});
	
	});

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"도쿄 리벤저스 18권"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);


			$(".ct4_book_a_2_box:nth-of-type(6) > .large_book_box:nth-of-type(2)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".ct4_book_a_2_box:nth-of-type(6) > .large_book_box:nth-of-type(2)").append("<h4>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h4>");
			$(".ct4_book_a_2_box:nth-of-type(6) > .large_book_box:nth-of-type(2)").append("<p>"+"타케미치 최후의 항쟁, 도만 vs. 천축 결전, 드디어 개막!!"+"</p>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

			$(".ct4_book_a_2_box:nth-of-type(6) > .large_book_box:nth-of-type(2)").append('<h5>'+str2+"원"+"</h5>");  

			$(".ct4_book_a_2_box:nth-of-type(6) > .large_book_box:nth-of-type(2) > a >img").attr("width","169");
			$(".ct4_book_a_2_box:nth-of-type(6) > .large_book_box:nth-of-type(2) > a >img").attr("height","248");
			$(".ct4_book_a_2_box:nth-of-type(6) > .large_book_box:nth-of-type(2) > a >img").css({"border":"1px solid #d7d7d7"});
			$(".ct4_book_a_2_box:nth-of-type(6) > .large_book_box:nth-of-type(2) > h3").css({"color":"#669acc","fontSize":"12px"});
			$(".ct4_book_a_2_box:nth-of-type(6) > .large_book_box:nth-of-type(2) > h4 > a").css({"fontSize":"14px"});
			$(".ct4_book_a_2_box:nth-of-type(6) > .large_book_box:nth-of-type(2) > h4 > a").hover(function(){
				$(this).css("border-bottom","1px solid black");
			},function(){
				$(this).css("border-bottom","none");
			});
			$(".ct4_book_a_2_box:nth-of-type(6) > .large_book_box:nth-of-type(2) > p").css({"color":"#666","fontSize":"13px"});
	
	});


	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"괴수 8호 5"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);


			$(".ct4_book_a_2_box:nth-of-type(6) > .large_book_box:nth-of-type(3)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".ct4_book_a_2_box:nth-of-type(6) > .large_book_box:nth-of-type(3)").append("<h4>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h4>");
			$(".ct4_book_a_2_box:nth-of-type(6) > .large_book_box:nth-of-type(3)").append("<p>"+"방위대원을 꿈꾸는 괴수의 거대한 포효가 울려퍼진다!!"+"</p>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

			$(".ct4_book_a_2_box:nth-of-type(6) > .large_book_box:nth-of-type(3)").append('<h5>'+str2+"원"+"</h5>");  

			$(".ct4_book_a_2_box:nth-of-type(6) > .large_book_box:nth-of-type(3) > a >img").attr("width","169");
			$(".ct4_book_a_2_box:nth-of-type(6) > .large_book_box:nth-of-type(3) > a >img").attr("height","248");
			$(".ct4_book_a_2_box:nth-of-type(6) > .large_book_box:nth-of-type(3) > a >img").css({"border":"1px solid #d7d7d7"});
			$(".ct4_book_a_2_box:nth-of-type(6) > .large_book_box:nth-of-type(3) > h3").css({"color":"#669acc","fontSize":"12px"});
			$(".ct4_book_a_2_box:nth-of-type(6) > .large_book_box:nth-of-type(3) > h4 > a").css({"fontSize":"14px"});
			$(".ct4_book_a_2_box:nth-of-type(6) > .large_book_box:nth-of-type(3) > h4 > a").hover(function(){
				$(this).css("border-bottom","1px solid black");
			},function(){
				$(this).css("border-bottom","none");
			});
			$(".ct4_book_a_2_box:nth-of-type(6) > .large_book_box:nth-of-type(3) > p").css({"color":"#666","fontSize":"13px"});
	
	});

//7페이지

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"퍼펙트 클로저"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);


			$(".ct4_book_a_2_box:nth-of-type(7) > .large_book_box:nth-of-type(1)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".ct4_book_a_2_box:nth-of-type(7) > .large_book_box:nth-of-type(1)").append("<h4>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h4>");
			$(".ct4_book_a_2_box:nth-of-type(7) > .large_book_box:nth-of-type(1)").append("<p>"+"영화 감독 윤가은을 “위로하고 웃게 했던” 특별한 리스트"+"</p>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

			$(".ct4_book_a_2_box:nth-of-type(7) > .large_book_box:nth-of-type(1)").append('<h5>'+str2+"원"+"</h5>");  

			$(".ct4_book_a_2_box:nth-of-type(7) > .large_book_box:nth-of-type(1) > a >img").attr("width","169");
			$(".ct4_book_a_2_box:nth-of-type(7) > .large_book_box:nth-of-type(1) > a >img").attr("height","248");
			$(".ct4_book_a_2_box:nth-of-type(7) > .large_book_box:nth-of-type(1) > a >img").css({"border":"1px solid #d7d7d7"});
			$(".ct4_book_a_2_box:nth-of-type(7) > .large_book_box:nth-of-type(1) > h3").css({"color":"#669acc","fontSize":"12px"});
			$(".ct4_book_a_2_box:nth-of-type(7) > .large_book_box:nth-of-type(1) > h4 > a").css({"fontSize":"14px"});
			$(".ct4_book_a_2_box:nth-of-type(7) > .large_book_box:nth-of-type(1) > h4 > a").hover(function(){
				$(this).css("border-bottom","1px solid black");
			},function(){
				$(this).css("border-bottom","none");
			});
			$(".ct4_book_a_2_box:nth-of-type(7) > .large_book_box:nth-of-type(1) > p").css({"color":"#9e9e9e","fontSize":"13px"});
	
	});


//8페이지

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"내 집 아래 경험치 800%"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);


			$(".ct4_book_a_2_box:nth-of-type(8) > .large_book_box:nth-of-type(1)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".ct4_book_a_2_box:nth-of-type(8) > .large_book_box:nth-of-type(1)").append("<h4>"+'<a href="sub2.html">'+"[대여] [세트]"+msg.documents[0].title+"</a>"+"</h4>");
			$(".ct4_book_a_2_box:nth-of-type(8) > .large_book_box:nth-of-type(1)").append("<p>"+"나는 8배로 강해진다"+"</p>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

			$(".ct4_book_a_2_box:nth-of-type(8) > .large_book_box:nth-of-type(1)").append('<h5>'+str2+"원"+"</h5>");  

			$(".ct4_book_a_2_box:nth-of-type(8) > .large_book_box:nth-of-type(1) > a >img").attr("width","169");
			$(".ct4_book_a_2_box:nth-of-type(8) > .large_book_box:nth-of-type(1) > a >img").attr("height","248");
			$(".ct4_book_a_2_box:nth-of-type(8) > .large_book_box:nth-of-type(1) > a >img").css({"border":"1px solid #d7d7d7"});
			$(".ct4_book_a_2_box:nth-of-type(8) > .large_book_box:nth-of-type(1) > h3").css({"color":"#669acc","fontSize":"12px"});
			$(".ct4_book_a_2_box:nth-of-type(8) > .large_book_box:nth-of-type(1) > h4 > a").css({"fontSize":"14px"});
			$(".ct4_book_a_2_box:nth-of-type(8) > .large_book_box:nth-of-type(1) > h4 > a").hover(function(){
				$(this).css("border-bottom","1px solid black");
			},function(){
				$(this).css("border-bottom","none");
			});
			$(".ct4_book_a_box:nth-of-type(8) > .large_book_box:nth-of-type(1) > p").css({"color":"#9e9e9e","fontSize":"13px"});
	
	});


//중고샵	

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"완전한 행복"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".ct4_book_a_8 > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(1)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".ct4_book_a_8 > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(1)").append("<h4>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h4>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

			$(".ct4_book_a_8 > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(1)").append("<h5>"+str2+"원"+"</h5>");

		//스타일	
			$(".ct4_book_a_8 > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(1) > a > img").attr("width","177");
			$(".ct4_book_a_8 > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(1) > a > img").attr("height","250");
			$(".ct4_book_a_8 > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(1) > h4 > a").css("fontSize","14px");
			$(".ct4_book_a_8 > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(1) > h5").css("fontSize","12px")
	});

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"햇빛은 찬란하고 인생은 귀하니까요"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".ct4_book_a_8 > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(2)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");

			var strr=msg.documents[0].title;
			var strr2=strr.substring(0,18);

			$(".ct4_book_a_8 > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(2)").append("<h4>"+'<a href="sub2.html">'+strr2+"</a>"+"</h4>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

			$(".ct4_book_a_8 > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(2)").append("<h5>"+str2+"원"+"</h5>");

		//스타일	
			$(".ct4_book_a_8 > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(2) > a > img").attr("width","177");
			$(".ct4_book_a_8 > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(2) > a > img").attr("height","250");
			$(".ct4_book_a_8 > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(2) > h4 > a").css("fontSize","14px");
			$(".ct4_book_a_8 > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(2) > h5").css("fontSize","12px")
	});

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"달까지 가자"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".ct4_book_a_8 > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(3)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".ct4_book_a_8 > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(3)").append("<h4>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h4>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

			$(".ct4_book_a_8 > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(3)").append("<h5>"+str2+"원"+"</h5>");

		//스타일	
			$(".ct4_book_a_8 > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(3) > a > img").attr("width","177");
			$(".ct4_book_a_8 > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(3) > a > img").attr("height","250");
			$(".ct4_book_a_8 > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(3) > h4 > a").css("fontSize","14px");
			$(".ct4_book_a_8 > .ct4_book_a_box:nth-of-type(1) > .large_book_box:nth-of-type(3) > h5").css("fontSize","12px")
	});

	///

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"지구 끝의 온실"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".ct4_book_a_8 > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(1)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".ct4_book_a_8 > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(1)").append("<h4>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h4>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

			$(".ct4_book_a_8 > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(1)").append("<h5>"+str2+"원"+"</h5>");

		//스타일	
			$(".ct4_book_a_8 > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(1) > a > img").attr("width","177");
			$(".ct4_book_a_8 > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(1) > a > img").attr("height","250");
			$(".ct4_book_a_8 > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(1) > h4 > a").css("fontSize","14px");
			$(".ct4_book_a_8 > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(1) > h5").css("fontSize","12px")
	});

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"설레는 건 많을수록 좋아"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".ct4_book_a_8 > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(2)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".ct4_book_a_8 > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(2)").append("<h4>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h4>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

			$(".ct4_book_a_8 > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(2)").append("<h5>"+str2+"원"+"</h5>");

		//스타일	
			$(".ct4_book_a_8 > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(2) > a > img").attr("width","177");
			$(".ct4_book_a_8 > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(2) > a > img").attr("height","250");
			$(".ct4_book_a_8 > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(2) > h4 > a").css("fontSize","14px");
			$(".ct4_book_a_8 > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(2) > h5").css("fontSize","12px")
	});

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"작은 별이지만 빛나고 있어"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".ct4_book_a_8 > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(3)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".ct4_book_a_8 > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(3)").append("<h4>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h4>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

			$(".ct4_book_a_8 > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(3)").append("<h5>"+str2+"원"+"</h5>");

		//스타일	
			$(".ct4_book_a_8 > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(3) > a > img").attr("width","177");
			$(".ct4_book_a_8 > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(3) > a > img").attr("height","250");
			$(".ct4_book_a_8 > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(3) > h4 > a").css("fontSize","14px");
			$(".ct4_book_a_8 > .ct4_book_a_box:nth-of-type(2) > .large_book_box:nth-of-type(3) > h5").css("fontSize","12px")
	});

	///

	

	
//---------------------------------

//콘텐츠4 하단 카테고리 적용


//도서

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"특이점"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);


		$(".st4_book_b_list > .mini_book_box:nth-of-type(1)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
		var strr=msg.documents[0].title;
		var strr2=strr.substring(0,3);
		$(".st4_book_b_list > .mini_book_box:nth-of-type(1)").append("<p>"+'<a href="sub2.html">'+strr2+"</a>"+"</p>");
		
		$(".mini_book_box:nth-of-type(1) > a > img").attr("width","92");
		$(".mini_book_box:nth-of-type(1) > a > img").attr("height","118");
		$(".mini_book_box:nth-of-type(1) > p > a").css("fontSize","8px");


	});	

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"나는 파괴되지 않아"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);


		$(".st4_book_b_list > .mini_book_box:nth-of-type(2)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
		var strr=msg.documents[0].title;
		var strr2=strr.substring(0,10);
		$(".st4_book_b_list > .mini_book_box:nth-of-type(2)").append("<p>"+'<a href="sub2.html">'+strr2+"</a>"+"</p>");
		
		$(".mini_book_box:nth-of-type(2) > a > img").attr("width","92");
		$(".mini_book_box:nth-of-type(2) > a > img").attr("height","118");
		$(".mini_book_box:nth-of-type(2) > p > a").css("fontSize","8px");


	});	

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"경성 무지개"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);


		$(".st4_book_b_list > .mini_book_box:nth-of-type(3)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
		var strr=msg.documents[0].title;
		var strr2=strr.substring(0,10);
		$(".st4_book_b_list > .mini_book_box:nth-of-type(3)").append("<p>"+'<a href="sub2.html">'+strr2+"</a>"+"</p>");
		
		$(".mini_book_box:nth-of-type(3) > a > img").attr("width","92");
		$(".mini_book_box:nth-of-type(3) > a > img").attr("height","118");
		$(".mini_book_box:nth-of-type(3) > p > a").css("fontSize","8px");


	});	

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"우산의 비밀"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);


		$(".st4_book_b_list > .mini_book_box:nth-of-type(4)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
		$(".st4_book_b_list > .mini_book_box:nth-of-type(4)").append("<p>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</p>");
		
		$(".mini_book_box:nth-of-type(4) > a > img").attr("width","92");
		$(".mini_book_box:nth-of-type(4) > a > img").attr("height","118");
		$(".mini_book_box:nth-of-type(4) > p > a").css("fontSize","8px");


	});	


//////////////////////////

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"못 참는 아이 욱하는 부모"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);


		$(".st4_book_2_left_box:nth-of-type(1) > .small_book_box:nth-of-type(1)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
		$(".st4_book_2_left_box:nth-of-type(1) > .small_book_box:nth-of-type(1)").append("<p>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</p>");
		var str=msg.documents[0].price;
		var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		$(".st4_book_2_left_box:nth-of-type(1) > .small_book_box:nth-of-type(1)").append('<h5>'+str2+"원"+"</h5>");
		
		$(".st4_book_2_left_box:nth-of-type(1) > .small_book_box:nth-of-type(1) > a > img").attr("width","65");
		$(".st4_book_2_left_box:nth-of-type(1) > .small_book_box:nth-of-type(1) > a > img").attr("height","96");
		$(".st4_book_2_left_box:nth-of-type(1) > .small_book_box:nth-of-type(1) > a > img").css("border","1px solid #9e9e9e")
		$(".st4_book_2_left_box:nth-of-type(1) > .small_book_box:nth-of-type(1) > p > a").css("fontSize","13px");
		$(".st4_book_2_left_box:nth-of-type(1) > .small_book_box:nth-of-type(1) > h5").css("fontSize","13px");
		$(".st4_book_2_left_box:nth-of-type(1) > .small_book_box:nth-of-type(1) > p").css({"font-size":"13px","color":"#9e9e9e"});


	});	

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"불안한 엄마 무관심한 아빠"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);


		$(".st4_book_2_left_box:nth-of-type(1) > .small_book_box:nth-of-type(2)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
		$(".st4_book_2_left_box:nth-of-type(1) > .small_book_box:nth-of-type(2)").append("<p>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</p>");
		var str=msg.documents[0].price;
		var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		$(".st4_book_2_left_box:nth-of-type(1) > .small_book_box:nth-of-type(2)").append('<h5>'+str2+"원"+"</h5>");
		
		$(".st4_book_2_left_box:nth-of-type(1) > .small_book_box:nth-of-type(2) > a > img").attr("width","65");
		$(".st4_book_2_left_box:nth-of-type(1) > .small_book_box:nth-of-type(2) > a > img").attr("height","96");
		$(".st4_book_2_left_box:nth-of-type(1) > .small_book_box:nth-of-type(2) > a > img").css("border","1px solid #9e9e9e")
		$(".st4_book_2_left_box:nth-of-type(1) > .small_book_box:nth-of-type(2) > p > a").css("fontSize","13px");
		$(".st4_book_2_left_box:nth-of-type(1) > .small_book_box:nth-of-type(2) > h5").css("fontSize","13px");
		$(".st4_book_2_left_box:nth-of-type(1) > .small_book_box:nth-of-type(2) > p").css({"font-size":"13px","color":"#9e9e9e"});


	});	

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"오은영의 화해"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);


		$(".st4_book_2_left_box:nth-of-type(1) > .small_book_box:nth-of-type(3)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
		$(".st4_book_2_left_box:nth-of-type(1) > .small_book_box:nth-of-type(3)").append("<p>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</p>");
		var str=msg.documents[0].price;
		var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		$(".st4_book_2_left_box:nth-of-type(1) > .small_book_box:nth-of-type(3)").append('<h5>'+str2+"원"+"</h5>");
		
		$(".st4_book_2_left_box:nth-of-type(1) > .small_book_box:nth-of-type(3) > a > img").attr("width","65");
		$(".st4_book_2_left_box:nth-of-type(1) > .small_book_box:nth-of-type(3) > a > img").attr("height","96");
		$(".st4_book_2_left_box:nth-of-type(1) > .small_book_box:nth-of-type(3) > a > img").css("border","1px solid #9e9e9e");
		$(".st4_book_2_left_box:nth-of-type(1) > .small_book_box:nth-of-type(3) > p > a").css("fontSize","13px");
		$(".st4_book_2_left_box:nth-of-type(1) > .small_book_box:nth-of-type(3) > h5").css("fontSize","13px");
		$(".st4_book_2_left_box:nth-of-type(1) > .small_book_box:nth-of-type(3) > p").css({"font-size":"13px","color":"#9e9e9e"});


	});	

	/////

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"문호 스트레이독스 7"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);


		$(".st4_book_2_left_box:nth-of-type(3) > .small_book_box:nth-of-type(3)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
		$(".st4_book_2_left_box:nth-of-type(3) > .small_book_box:nth-of-type(3)").append("<p>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</p>");
		var str=msg.documents[0].price;
		var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		$(".st4_book_2_left_box:nth-of-type(3) > .small_book_box:nth-of-type(3)").append('<h5>'+str2+"원"+"</h5>");
		
		$(".st4_book_2_left_box:nth-of-type(3) > .small_book_box:nth-of-type(3) > a > img").attr("width","65");
		$(".st4_book_2_left_box:nth-of-type(3) > .small_book_box:nth-of-type(3) > a > img").attr("height","96");
		$(".st4_book_2_left_box:nth-of-type(3) > .small_book_box:nth-of-type(3) > a > img").css("border","1px solid #9e9e9e");
		$(".st4_book_2_left_box:nth-of-type(3) > .small_book_box:nth-of-type(3) > p > a").css("fontSize","13px");
		$(".st4_book_2_left_box:nth-of-type(3) > .small_book_box:nth-of-type(3) > h5").css("fontSize","13px");
		$(".st4_book_2_left_box:nth-of-type(3) > .small_book_box:nth-of-type(3) > p").css({"font-size":"13px","color":"#9e9e9e"});


	});		

	//comic:eBook은 카카오 데이터가 존재하지 않아 html로 작업
	
	
////////////////

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"어떻게 말해줘야 할까"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);


		$(".st4_book_2_right > .middle_book_box > .middle_book_box_img").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
		$(".st4_book_2_right > .middle_book_box > .middle_book_box_text").append("<h4>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h4>");
		var str=msg.documents[0].price;
		var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		$(".st4_book_2_right > .middle_book_box > .middle_book_box_text").append('<h5>'+str2+"원"+"</h5>");
		$(".st4_book_2_right > .middle_book_box > .middle_book_box_text").append("<p>"+"독자가 뽑은 '2021 올해의 책' 1위"+"</p>");
		
		$(".st4_book_2_right > .middle_book_box> .middle_book_box_img > a > img").attr("width","88");
		$(".st4_book_2_right > .middle_book_box> .middle_book_box_img > a > img").attr("height","130");
		$(".st4_book_2_right > .middle_book_box > .middle_book_box_text > h4 > a").css("fontSize","14px");
		$(".st4_book_2_right > .middle_book_box > .middle_book_box_text > h5").css("fontSize","13px");
		$(".st4_book_2_right > .middle_book_box > .middle_book_box_text > p").css({"font-size":"13px","color":"#9e9e9e"});


	});	


/////////////////////////

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"밤을 걷는 밤"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);


		$(".ct4_book_8_super_price_book > .small_book_box:nth-of-type(1)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
		$(".ct4_book_8_super_price_book > .small_book_box:nth-of-type(1)").append("<p>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</p>");
		var str=msg.documents[0].price;
		var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		
		$(".ct4_book_8_super_price_book > .small_book_box:nth-of-type(1) > a > img").attr("width","65");
		$(".ct4_book_8_super_price_book > .small_book_box:nth-of-type(1) > a > img").attr("height","96");
		$(".ct4_book_8_super_price_book > .small_book_box:nth-of-type(1) > a > img").css("border","1px solid #9e9e9e")
		$(".ct4_book_8_super_price_book > .small_book_box:nth-of-type(1) > p > a").css("fontSize","13px");
		$(".ct4_book_8_super_price_book > .small_book_box:nth-of-type(1) > p").css({"font-size":"13px","color":"#9e9e9e"});


	});	

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"삶을 위한 수업"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);


		$(".ct4_book_8_super_price_book > .small_book_box:nth-of-type(2)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
		$(".ct4_book_8_super_price_book > .small_book_box:nth-of-type(2)").append("<p>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</p>");
		var str=msg.documents[0].price;
		var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		
		$(".ct4_book_8_super_price_book > .small_book_box:nth-of-type(2) > a > img").attr("width","65");
		$(".ct4_book_8_super_price_book > .small_book_box:nth-of-type(2) > a > img").attr("height","96");
		$(".ct4_book_8_super_price_book > .small_book_box:nth-of-type(2) > a > img").css("border","1px solid #9e9e9e")
		$(".ct4_book_8_super_price_book > .small_book_box:nth-of-type(2) > p > a").css("fontSize","13px");
		$(".ct4_book_8_super_price_book > .small_book_box:nth-of-type(2) > p").css({"font-size":"13px","color":"#9e9e9e"});


	});		

});