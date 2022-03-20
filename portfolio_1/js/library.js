$(document).ready(function(){

	//콘텐츠 2 적용

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"H마트에서 울다"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$("#content_2 > .book_content > .book_list:nth-of-type(1) > .book_box:nth-of-type(1)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$("#content_2 > .book_content > .book_list:nth-of-type(1) > .book_box:nth-of-type(1)").append("<h4>"+"엄마와의 추억을 찾아서"+"</h4>");
			$("#content_2 > .book_content > .book_list:nth-of-type(1) > .book_box:nth-of-type(1)").append("<h3>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h3>");

			var sts=msg.documents[0].authors+" | " +msg.documents[0].publisher;
			var sts2=sts.substring(0,30);

			$("#content_2 > .book_content > .book_list:nth-of-type(1) > .book_box:nth-of-type(1)").append("<p>"+sts2 + "</p>");

			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

			$("#content_2 > .book_content > .book_list:nth-of-type(1) > .book_box:nth-of-type(1)").append('<h5>'+str2+"원"+"</h5>"); 

		//스타일
			
			$(".book_box > h4").css({"font-weight":"normal","color":"#669acc","font-size":"12px","line-height":"20px","margin-top":"10px"});
			$(".book_box > h3 > a").css({"float":"left", "fontSize":"12px", "width":"170","line-height":"20px"});
			$(".book_box > h5").css({"fontSize":"13px","line-height":"20px","margin-top":"5px"});
			$(".book_box > p").css({"float":"left", "color":"#d7d7d7", "fontSize":"10px","line-height":"20px"});	
		
	});

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"달 가루"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$("#content_2 > .book_content > .book_list:nth-of-type(1) > .book_box:nth-of-type(2)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$("#content_2 > .book_content > .book_list:nth-of-type(1) > .book_box:nth-of-type(2)").append("<h4>"+"달 토끼의 아웅다웅 일상"+"</h4>");
			$("#content_2 > .book_content > .book_list:nth-of-type(1) > .book_box:nth-of-type(2)").append("<h3>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h3>");

			var sts=msg.documents[0].authors+" | " +msg.documents[0].publisher;
			var sts2=sts.substring(0,30);

			$("#content_2 > .book_content > .book_list:nth-of-type(1) > .book_box:nth-of-type(2)").append("<p>"+sts2 + "</p>");

			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

			$("#content_2 > .book_content > .book_list:nth-of-type(1) > .book_box:nth-of-type(2)").append('<h5>'+str2+"원"+"</h5>"); 	

		//스타일
			
			$(".book_box > h4").css({"font-weight":"normal","color":"#669acc","font-size":"12px","line-height":"20px","margin-top":"10px"});
			$(".book_box > h3 > a").css({"float":"left", "fontSize":"12px", "width":"170","line-height":"20px"});
			$(".book_box > h5").css({"fontSize":"13px","line-height":"20px","margin-top":"5px"});
			$(".book_box > p").css({"float":"left", "color":"#d7d7d7", "fontSize":"10px","line-height":"20px"});	
		
	});


	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"서울대 삼 형제의 스노볼 공부법"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$("#content_2 > .book_content > .book_list:nth-of-type(1) > .book_box:nth-of-type(3)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$("#content_2 > .book_content > .book_list:nth-of-type(1) > .book_box:nth-of-type(3)").append("<h4>"+"초등 첫 공부 습관"+"</h4>");
			$("#content_2 > .book_content > .book_list:nth-of-type(1) > .book_box:nth-of-type(3)").append("<h3>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h3>");

			var sts=msg.documents[0].authors+" | " +msg.documents[0].publisher;
			var sts2=sts.substring(0,30);

			$("#content_2 > .book_content > .book_list:nth-of-type(1) > .book_box:nth-of-type(3)").append("<p>"+sts2 + "</p>");

			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

			$("#content_2 > .book_content > .book_list:nth-of-type(1) > .book_box:nth-of-type(3)").append('<h5>'+str2+"원"+"</h5>"); 

		//스타일
			
			$(".book_box > h4").css({"font-weight":"normal","color":"#669acc","font-size":"12px","line-height":"20px","margin-top":"10px"});
			$(".book_box > h3 > a").css({"float":"left", "fontSize":"12px", "width":"170","line-height":"20px"});
			$(".book_box > h5").css({"fontSize":"13px","line-height":"20px","margin-top":"5px"});
			$(".book_box > p").css({"float":"left", "color":"#d7d7d7", "fontSize":"10px","line-height":"20px"});	
		
	});

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"버추얼 휴먼"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$("#content_2 > .book_content > .book_list:nth-of-type(1) > .book_box:nth-of-type(4)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$("#content_2 > .book_content > .book_list:nth-of-type(1) > .book_box:nth-of-type(4)").append("<h4>"+"새로운 인류가 나타났다"+"</h4>");
			$("#content_2 > .book_content > .book_list:nth-of-type(1) > .book_box:nth-of-type(4)").append("<h3>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h3>");

			var sts=msg.documents[0].authors+" | " +msg.documents[0].publisher;
			var sts2=sts.substring(0,30);

			$("#content_2 > .book_content > .book_list:nth-of-type(1) > .book_box:nth-of-type(4)").append("<p>"+sts2 + "</p>");

			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

			$("#content_2 > .book_content > .book_list:nth-of-type(1) > .book_box:nth-of-type(4)").append('<h5>'+str2+"원"+"</h5>"); 

		//스타일
			
			$(".book_box > h4").css({"font-weight":"normal","color":"#669acc","font-size":"12px","line-height":"20px","margin-top":"10px"});
			$(".book_box > h3 > a").css({"float":"left", "fontSize":"12px", "width":"170","line-height":"20px"});
			$(".book_box > h5").css({"fontSize":"13px","line-height":"20px","margin-top":"5px"});
			$(".book_box > p").css({"float":"left", "color":"#d7d7d7", "fontSize":"10px","line-height":"20px"});	
	});

///	

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"문어의 아홉 번째 다리"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$("#content_2 > .book_content > .book_list:nth-of-type(2) > .book_box:nth-of-type(1)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$("#content_2 > .book_content > .book_list:nth-of-type(2) > .book_box:nth-of-type(1)").append("<h4>"+"SF 기후 환경 스릴러"+"</h4>");
			$("#content_2 > .book_content > .book_list:nth-of-type(2) > .book_box:nth-of-type(1)").append("<h3>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h3>");

			var sts=msg.documents[0].authors+" | " +msg.documents[0].publisher;
			var sts2=sts.substring(0,30);

			$("#content_2 > .book_content > .book_list:nth-of-type(2) > .book_box:nth-of-type(1)").append("<p>"+sts2 + "</p>");

			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

			$("#content_2 > .book_content > .book_list:nth-of-type(2) > .book_box:nth-of-type(1)").append('<h5>'+str2+"원"+"</h5>"); 

		//스타일
			
			$(".book_box > h4").css({"font-weight":"normal","color":"#669acc","font-size":"12px","line-height":"20px","margin-top":"10px"});
			$(".book_box > h3 > a").css({"float":"left", "fontSize":"12px", "width":"170","line-height":"20px"});
			$(".book_box > h5").css({"fontSize":"13px","line-height":"20px","margin-top":"5px"});
			$(".book_box > p").css({"float":"left", "color":"#d7d7d7", "fontSize":"10px","line-height":"20px"});	
	});

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"무례한 사람에게 휘둘리지 않는 법"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$("#content_2 > .book_content > .book_list:nth-of-type(2) > .book_box:nth-of-type(2)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$("#content_2 > .book_content > .book_list:nth-of-type(2) > .book_box:nth-of-type(2)").append("<h4>"+"무례함에는 단호함으로!"+"</h4>");
			$("#content_2 > .book_content > .book_list:nth-of-type(2) > .book_box:nth-of-type(2)").append("<h3>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h3>");

			var sts=msg.documents[0].authors+" | " +msg.documents[0].publisher;
			var sts2=sts.substring(0,30);

			$("#content_2 > .book_content > .book_list:nth-of-type(2) > .book_box:nth-of-type(2)").append("<p>"+sts2 + "</p>");

			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

			$("#content_2 > .book_content > .book_list:nth-of-type(2) > .book_box:nth-of-type(2)").append('<h5>'+str2+"원"+"</h5>"); 

		//스타일
			
			$(".book_box > h4").css({"font-weight":"normal","color":"#669acc","font-size":"12px","line-height":"20px","margin-top":"10px"});
			$(".book_box > h3 > a").css({"float":"left", "fontSize":"12px", "width":"170","line-height":"20px"});
			$(".book_box > h5").css({"fontSize":"13px","line-height":"20px","margin-top":"5px"});
			$(".book_box > p").css({"float":"left", "color":"#d7d7d7", "fontSize":"10px","line-height":"20px"});	
	});


	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"쓸모 있는 음악책"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$("#content_2 > .book_content > .book_list:nth-of-type(2) > .book_box:nth-of-type(3)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$("#content_2 > .book_content > .book_list:nth-of-type(2) > .book_box:nth-of-type(3)").append("<h4>"+"삶을 풍요롭게 하는 음악"+"</h4>");
			$("#content_2 > .book_content > .book_list:nth-of-type(2) > .book_box:nth-of-type(3)").append("<h3>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h3>");

			var sts=msg.documents[0].authors+" | " +msg.documents[0].publisher;
			var sts2=sts.substring(0,30);

			$("#content_2 > .book_content > .book_list:nth-of-type(2) > .book_box:nth-of-type(3)").append("<p>"+sts2 + "</p>");

			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

			$("#content_2 > .book_content > .book_list:nth-of-type(2) > .book_box:nth-of-type(3)").append('<h5>'+str2+"원"+"</h5>"); 

		//스타일
			
			$(".book_box > h4").css({"font-weight":"normal","color":"#669acc","font-size":"12px","line-height":"20px","margin-top":"10px"});
			$(".book_box > h3 > a").css({"float":"left", "fontSize":"12px", "width":"170","line-height":"20px"});
			$(".book_box > h5").css({"fontSize":"13px","line-height":"20px","margin-top":"5px"});
			$(".book_box > p").css({"float":"left", "color":"#d7d7d7", "fontSize":"10px","line-height":"20px"});	
	});

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"흔한남매와 과학 탐험대 4"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$("#content_2 > .book_content > .book_list:nth-of-type(2) > .book_box:nth-of-type(4)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$("#content_2 > .book_content > .book_list:nth-of-type(2) > .book_box:nth-of-type(4)").append("<h4>"+"흔한남매와 과학 첫걸음"+"</h4>");
			$("#content_2 > .book_content > .book_list:nth-of-type(2) > .book_box:nth-of-type(4)").append("<h3>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h3>");

			var sts=msg.documents[0].authors+" | " +msg.documents[0].publisher;
			var sts2=sts.substring(0,30);

			$("#content_2 > .book_content > .book_list:nth-of-type(2) > .book_box:nth-of-type(4)").append("<p>"+sts2 + "</p>");

			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

			$("#content_2 > .book_content > .book_list:nth-of-type(2) > .book_box:nth-of-type(4)").append('<h5>'+str2+"원"+"</h5>"); 

		//스타일
			
			$(".book_box > h4").css({"font-weight":"normal","color":"#669acc","font-size":"12px","line-height":"20px","margin-top":"10px"});
			$(".book_box > h3 > a").css({"float":"left", "fontSize":"12px", "width":"170","line-height":"20px"});
			$(".book_box > h5").css({"fontSize":"13px","line-height":"20px","margin-top":"5px"});
			$(".book_box > p").css({"float":"left", "color":"#d7d7d7", "fontSize":"10px","line-height":"20px"});	
	});

///	

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"인민을 위해 복무하라"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$("#content_2 > .book_content > .book_list:nth-of-type(3) > .book_box:nth-of-type(1)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$("#content_2 > .book_content > .book_list:nth-of-type(3) > .book_box:nth-of-type(1)").append("<h4>"+"영화 원작 50%할인"+"</h4>");
			$("#content_2 > .book_content > .book_list:nth-of-type(3) > .book_box:nth-of-type(1)").append("<h3>"+'<a href="sub2.html">'+"[대여] "+msg.documents[0].title+"(개정판)"+"</a>"+"</h3>");

			var sts=msg.documents[0].authors+" | " +msg.documents[0].publisher;
			var sts2=sts.substring(0,30);

			$("#content_2 > .book_content > .book_list:nth-of-type(3) > .book_box:nth-of-type(1)").append("<p>"+sts2 + "</p>");

			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

			$("#content_2 > .book_content > .book_list:nth-of-type(3) > .book_box:nth-of-type(1)").append('<h5>'+str2+"원"+"</h5>"); 

		//스타일
			
			$(".book_box > h4").css({"font-weight":"normal","color":"#669acc","font-size":"12px","line-height":"20px","margin-top":"10px"});
			$(".book_box > h3 > a").css({"float":"left", "fontSize":"12px", "width":"170","line-height":"20px"});
			$(".book_box > h5").css({"fontSize":"13px","line-height":"20px","margin-top":"5px"});
			$(".book_box > p").css({"float":"left", "color":"#d7d7d7", "fontSize":"10px","line-height":"20px"});	
	});

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"이어령의 마지막 수업"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$("#content_2 > .book_content > .book_list:nth-of-type(3) > .book_box:nth-of-type(2)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$("#content_2 > .book_content > .book_list:nth-of-type(3) > .book_box:nth-of-type(2)").append("<h4>"+"시대의 지성을 기리며"+"</h4>");
			$("#content_2 > .book_content > .book_list:nth-of-type(3) > .book_box:nth-of-type(2)").append("<h3>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h3>");

			var sts=msg.documents[0].authors+" | " +msg.documents[0].publisher;
			var sts2=sts.substring(0,30);

			$("#content_2 > .book_content > .book_list:nth-of-type(3) > .book_box:nth-of-type(2)").append("<p>"+sts2 + "</p>");

			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

			$("#content_2 > .book_content > .book_list:nth-of-type(3) > .book_box:nth-of-type(2)").append('<h5>'+str2+"원"+"</h5>"); 

		//스타일
			
			$(".book_box > h4").css({"font-weight":"normal","color":"#669acc","font-size":"12px","line-height":"20px","margin-top":"10px"});
			$(".book_box > h3 > a").css({"float":"left", "fontSize":"12px", "width":"170","line-height":"20px"});
			$(".book_box > h5").css({"fontSize":"13px","line-height":"20px","margin-top":"5px"});
			$(".book_box > p").css({"float":"left", "color":"#d7d7d7", "fontSize":"10px","line-height":"20px"});	
	});


	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"개미 5년, 세후 55억"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$("#content_2 > .book_content > .book_list:nth-of-type(3) > .book_box:nth-of-type(3)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$("#content_2 > .book_content > .book_list:nth-of-type(3) > .book_box:nth-of-type(3)").append("<h4>"+"개미투자 5년의 기록"+"</h4>");
			$("#content_2 > .book_content > .book_list:nth-of-type(3) > .book_box:nth-of-type(3)").append("<h3>"+'<a href="sub2.html">'+"[단독] "+msg.documents[0].title+"</a>"+"</h3>");

			var sts=msg.documents[0].authors+" | " +msg.documents[0].publisher;
			var sts2=sts.substring(0,30);

			$("#content_2 > .book_content > .book_list:nth-of-type(3) > .book_box:nth-of-type(3)").append("<p>"+sts2 + "</p>");

			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

			$("#content_2 > .book_content > .book_list:nth-of-type(3) > .book_box:nth-of-type(3)").append('<h5>'+str2+"원"+"</h5>"); 

		//스타일
			
			$(".book_box > h4").css({"font-weight":"normal","color":"#669acc","font-size":"12px","line-height":"20px","margin-top":"10px"});
			$(".book_box > h3 > a").css({"float":"left", "fontSize":"12px", "width":"170","line-height":"20px"});
			$(".book_box > h5").css({"fontSize":"13px","line-height":"20px","margin-top":"5px"});
			$(".book_box > p").css({"float":"left", "color":"#d7d7d7", "fontSize":"10px","line-height":"20px"});	
	});

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"여학교의 별 1"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$("#content_2 > .book_content > .book_list:nth-of-type(3) > .book_box:nth-of-type(4)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$("#content_2 > .book_content > .book_list:nth-of-type(3) > .book_box:nth-of-type(4)").append("<h4>"+"충격적으로 귀여운 선생님, 등"+"</h4>");
			$("#content_2 > .book_content > .book_list:nth-of-type(3) > .book_box:nth-of-type(4)").append("<h3>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h3>");

			var sts=msg.documents[0].authors+" | " +msg.documents[0].publisher;
			var sts2=sts.substring(0,30);

			$("#content_2 > .book_content > .book_list:nth-of-type(3) > .book_box:nth-of-type(4)").append("<p>"+sts2 + "</p>");

			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

			$("#content_2 > .book_content > .book_list:nth-of-type(3) > .book_box:nth-of-type(4)").append('<h5>'+str2+"원"+"</h5>"); 

		//스타일
			
			$(".book_box > h4").css({"font-weight":"normal","color":"#669acc","font-size":"12px","line-height":"20px","margin-top":"10px"});
			$(".book_box > h3 > a").css({"float":"left", "fontSize":"12px", "width":"170","line-height":"20px"});
			$(".book_box > h5").css({"fontSize":"13px","line-height":"20px","margin-top":"5px"});
			$(".book_box > p").css({"float":"left", "color":"#d7d7d7", "fontSize":"10px","line-height":"20px"});	

	});


	//콘텐츠 3 적용

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"나에게 고맙다"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$("#content_3 > .book_content > .book_list:nth-of-type(1) > .book_box:nth-of-type(1)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$("#content_3 > .book_content > .book_list:nth-of-type(1) > .book_box:nth-of-type(1)").append("<h3>"+'<a href="sub2.html">'+msg.documents[0].title+" (30만 부 기념 전면개정판)"+"</a>"+"</h3>");

			var sts=msg.documents[0].authors+" | " +msg.documents[0].publisher;
			var sts2=sts.substring(0,30);

			$("#content_3 > .book_content > .book_list:nth-of-type(1) > .book_box:nth-of-type(1)").append("<p>"+sts2 + "</p>");

			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

			$("#content_3 > .book_content > .book_list:nth-of-type(1) > .book_box:nth-of-type(1)").append('<h5>'+str2+"원"+"</h5>"); 

		//스타일
		
			$("#content_3 > .book_content > .book_list > .book_box > h3 > a").css({"float":"left", "fontSize":"12px", "width":"170","line-height":"15px","margin-top":"10px"});
			$(".book_box > h5").css({"fontSize":"13px","line-height":"20px","margin-top":"5px"});
			$(".book_box > p").css({"float":"left", "color":"#d7d7d7", "fontSize":"10px","line-height":"20px"});		

	});

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"삶이라는 우주를 건너는 너에게"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$("#content_3 > .book_content > .book_list:nth-of-type(1) > .book_box:nth-of-type(2)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$("#content_3 > .book_content > .book_list:nth-of-type(1) > .book_box:nth-of-type(2)").append("<h3>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h3>");

			var sts=msg.documents[0].authors+" | " +msg.documents[0].publisher;
			var sts2=sts.substring(0,30);

			$("#content_3 > .book_content > .book_list:nth-of-type(1) > .book_box:nth-of-type(2)").append("<p>"+sts2 + "</p>");

			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

			$("#content_3 > .book_content > .book_list:nth-of-type(1) > .book_box:nth-of-type(2)").append('<h5>'+str2+"원"+"</h5>"); 

		//스타일
	
			$("#content_3 > .book_content > .book_list > .book_box > h3 > a").css({"float":"left", "fontSize":"12px", "width":"170","line-height":"15px","margin-top":"10px"});
			$(".book_box > h5").css({"fontSize":"13px","line-height":"20px","margin-top":"5px"});
			$(".book_box > p").css({"float":"left", "color":"#d7d7d7", "fontSize":"10px","line-height":"20px"});	
	});


	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"럭키 드로우"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$("#content_3 > .book_content > .book_list:nth-of-type(1) > .book_box:nth-of-type(3)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$("#content_3 > .book_content > .book_list:nth-of-type(1) > .book_box:nth-of-type(3)").append("<h3>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h3>");

			var sts=msg.documents[0].authors+" | " +msg.documents[0].publisher;
			var sts2=sts.substring(0,30);

			$("#content_3 > .book_content > .book_list:nth-of-type(1) > .book_box:nth-of-type(3)").append("<p>"+sts2 + "</p>");

			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

			$("#content_3 > .book_content > .book_list:nth-of-type(1) > .book_box:nth-of-type(3)").append('<h5>'+str2+"원"+"</h5>"); 

		//스타일

			$("#content_3 > .book_content > .book_list > .book_box > h3 > a").css({"float":"left", "fontSize":"12px", "width":"170","line-height":"15px","margin-top":"10px"});
			$(".book_box > h5").css({"fontSize":"13px","line-height":"20px","margin-top":"5px"});
			$(".book_box > p").css({"float":"left", "color":"#d7d7d7", "fontSize":"10px","line-height":"20px"});
	});

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"일상을 담는 아이패드 드로잉"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$("#content_3 > .book_content > .book_list:nth-of-type(1) > .book_box:nth-of-type(4)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$("#content_3 > .book_content > .book_list:nth-of-type(1) > .book_box:nth-of-type(4)").append("<h3>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h3>");

			var sts=msg.documents[0].authors+" | " +msg.documents[0].publisher;
			var sts2=sts.substring(0,30);

			$("#content_3 > .book_content > .book_list:nth-of-type(1) > .book_box:nth-of-type(4)").append("<p>"+sts2 + "</p>");

			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

			$("#content_3 > .book_content > .book_list:nth-of-type(1) > .book_box:nth-of-type(4)").append('<h5>'+str2+"원"+"</h5>"); 

		//스타일

			$("#content_3 > .book_content > .book_list > .book_box > h3 > a").css({"float":"left", "fontSize":"12px", "width":"170","line-height":"15px","margin-top":"10px"});
			$(".book_box > h5").css({"fontSize":"13px","line-height":"20px","margin-top":"5px"});
			$(".book_box > p").css({"float":"left", "color":"#d7d7d7", "fontSize":"10px","line-height":"20px"});
	});

///	

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"호수의 일"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$("#content_3 > .book_content > .book_list:nth-of-type(2) > .book_box:nth-of-type(1)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$("#content_3 > .book_content > .book_list:nth-of-type(2) > .book_box:nth-of-type(1)").append("<h3>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h3>");

			var sts=msg.documents[0].authors+" | " +msg.documents[0].publisher;
			var sts2=sts.substring(0,30);

			$("#content_3 > .book_content > .book_list:nth-of-type(2) > .book_box:nth-of-type(1)").append("<p>"+sts2 + "</p>");

			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

			$("#content_3 > .book_content > .book_list:nth-of-type(2) > .book_box:nth-of-type(1)").append('<h5>'+str2+"원"+"</h5>"); 

		//스타일

			$("#content_3 > .book_content > .book_list > .book_box > h3 > a").css({"float":"left", "fontSize":"12px", "width":"170","line-height":"15px","margin-top":"10px"});
			$(".book_box > h5").css({"fontSize":"13px","line-height":"20px","margin-top":"5px"});
			$(".book_box > p").css({"float":"left", "color":"#d7d7d7", "fontSize":"10px","line-height":"20px"});
	});

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"마법의 빨간 공"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$("#content_3 > .book_content > .book_list:nth-of-type(2) > .book_box:nth-of-type(2)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$("#content_3 > .book_content > .book_list:nth-of-type(2) > .book_box:nth-of-type(2)").append("<h3>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h3>");

			var sts=msg.documents[0].authors+" | " +msg.documents[0].publisher;
			var sts2=sts.substring(0,30);

			$("#content_3 > .book_content > .book_list:nth-of-type(2) > .book_box:nth-of-type(2)").append("<p>"+sts2 + "</p>");

			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

			$("#content_3 > .book_content > .book_list:nth-of-type(2) > .book_box:nth-of-type(2)").append('<h5>'+str2+"원"+"</h5>"); 

		//스타일

			$("#content_3 > .book_content > .book_list > .book_box > h3 > a").css({"float":"left", "fontSize":"12px", "width":"170","line-height":"15px","margin-top":"10px"});
			$(".book_box > h5").css({"fontSize":"13px","line-height":"20px","margin-top":"5px"});
			$(".book_box > p").css({"float":"left", "color":"#d7d7d7", "fontSize":"10px","line-height":"20px"});
	});


	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"베이킹 하다 앳 홈"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$("#content_3 > .book_content > .book_list:nth-of-type(2) > .book_box:nth-of-type(3)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$("#content_3 > .book_content > .book_list:nth-of-type(2) > .book_box:nth-of-type(3)").append("<h3>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h3>");

			var sts=msg.documents[0].authors+" | " +msg.documents[0].publisher;
			var sts2=sts.substring(0,30);

			$("#content_3 > .book_content > .book_list:nth-of-type(2) > .book_box:nth-of-type(3)").append("<p>"+sts2 + "</p>");

			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

			$("#content_3 > .book_content > .book_list:nth-of-type(2) > .book_box:nth-of-type(3)").append('<h5>'+str2+"원"+"</h5>"); 

		//스타일

			$("#content_3 > .book_content > .book_list > .book_box > h3 > a").css({"float":"left", "fontSize":"12px", "width":"170","line-height":"15px","margin-top":"10px"});
			$(".book_box > h5").css({"fontSize":"13px","line-height":"20px","margin-top":"5px"});
			$(".book_box > p").css({"float":"left", "color":"#d7d7d7", "fontSize":"10px","line-height":"20px"});
	});

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"나는 학벌보다 돈이 좋습니다만"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$("#content_3 > .book_content > .book_list:nth-of-type(2) > .book_box:nth-of-type(4)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$("#content_3 > .book_content > .book_list:nth-of-type(2) > .book_box:nth-of-type(4)").append("<h3>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h3>");

			var sts=msg.documents[0].authors+" | " +msg.documents[0].publisher;
			var sts2=sts.substring(0,30);

			$("#content_3 > .book_content > .book_list:nth-of-type(2) > .book_box:nth-of-type(4)").append("<p>"+sts2 + "</p>");

			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

			$("#content_3 > .book_content > .book_list:nth-of-type(2) > .book_box:nth-of-type(4)").append('<h5>'+str2+"원"+"</h5>"); 

		//스타일

			$("#content_3 > .book_content > .book_list > .book_box > h3 > a").css({"float":"left", "fontSize":"12px", "width":"170","line-height":"15px","margin-top":"10px"});
			$(".book_box > h5").css({"fontSize":"13px","line-height":"20px","margin-top":"5px"});
			$(".book_box > p").css({"float":"left", "color":"#d7d7d7", "fontSize":"10px","line-height":"20px"});	
	});

///	

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"지금은 나를 위해서만"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$("#content_3 > .book_content > .book_list:nth-of-type(3) > .book_box:nth-of-type(1)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$("#content_3 > .book_content > .book_list:nth-of-type(3) > .book_box:nth-of-type(1)").append("<h3>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h3>");

			var sts=msg.documents[0].authors+" | " +msg.documents[0].publisher;
			var sts2=sts.substring(0,30);

			$("#content_3 > .book_content > .book_list:nth-of-type(3) > .book_box:nth-of-type(1)").append("<p>"+sts2 + "</p>");

			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

			$("#content_3 > .book_content > .book_list:nth-of-type(3) > .book_box:nth-of-type(1)").append('<h5>'+str2+"원"+"</h5>"); 

		//스타일
			
			$("#content_3 > .book_content > .book_list > .book_box > h3 > a").css({"float":"left", "fontSize":"12px", "width":"170","line-height":"15px","margin-top":"10px"});
			$(".book_box > h5").css({"fontSize":"13px","line-height":"20px","margin-top":"5px"});
			$(".book_box > p").css({"float":"left", "color":"#d7d7d7", "fontSize":"10px","line-height":"20px"});
	});

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"물고기는 존재하지 않는다"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$("#content_3 > .book_content > .book_list:nth-of-type(3) > .book_box:nth-of-type(2)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$("#content_3 > .book_content > .book_list:nth-of-type(3) > .book_box:nth-of-type(2)").append("<h3>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h3>");

			var sts=msg.documents[0].authors+" | " +msg.documents[0].publisher;
			var sts2=sts.substring(0,30);

			$("#content_3 > .book_content > .book_list:nth-of-type(3) > .book_box:nth-of-type(2)").append("<p>"+sts2 + "</p>");

			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

			$("#content_3 > .book_content > .book_list:nth-of-type(3) > .book_box:nth-of-type(2)").append('<h5>'+str2+"원"+"</h5>"); 

		//스타일
			
			$("#content_3 > .book_content > .book_list > .book_box > h3 > a").css({"float":"left", "fontSize":"12px", "width":"170","line-height":"15px","margin-top":"10px"});
			$(".book_box > h5").css({"fontSize":"13px","line-height":"20px","margin-top":"5px"});
			$(".book_box > p").css({"float":"left", "color":"#d7d7d7", "fontSize":"10px","line-height":"20px"});
	});


	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"슈가레인 카페 디저트 클래스"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$("#content_3 > .book_content > .book_list:nth-of-type(3) > .book_box:nth-of-type(3)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$("#content_3 > .book_content > .book_list:nth-of-type(3) > .book_box:nth-of-type(3)").append("<h3>"+'<a href="sub2.html">'+"[단독] "+msg.documents[0].title+"</a>"+"</h3>");

			var sts=msg.documents[0].authors+" | " +msg.documents[0].publisher;
			var sts2=sts.substring(0,30);

			$("#content_3 > .book_content > .book_list:nth-of-type(3) > .book_box:nth-of-type(3)").append("<p>"+sts2 + "</p>");

			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

			$("#content_3 > .book_content > .book_list:nth-of-type(3) > .book_box:nth-of-type(3)").append('<h5>'+str2+"원"+"</h5>"); 

		//스타일
			
			$("#content_3 > .book_content > .book_list > .book_box > h3 > a").css({"float":"left", "fontSize":"12px", "width":"170","line-height":"15px","margin-top":"10px"});
			$(".book_box > h5").css({"fontSize":"13px","line-height":"20px","margin-top":"5px"});
			$(".book_box > p").css({"float":"left", "color":"#d7d7d7", "fontSize":"10px","line-height":"20px"});
	});

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"신 테니스의 왕자 1"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$("#content_3 > .book_content > .book_list:nth-of-type(3) > .book_box:nth-of-type(4)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$("#content_3 > .book_content > .book_list:nth-of-type(3) > .book_box:nth-of-type(4)").append("<h3>"+'<a href="sub2.html">'+"[묶음] "+msg.documents[0].title+" (총 32권/미완결)"+"</a>"+"</h3>");

			var sts=msg.documents[0].authors+" | " +msg.documents[0].publisher;
			var sts2=sts.substring(0,30);

			$("#content_3 > .book_content > .book_list:nth-of-type(3) > .book_box:nth-of-type(4)").append("<p>"+sts2 + "</p>");

			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

			$("#content_3 > .book_content > .book_list:nth-of-type(3) > .book_box:nth-of-type(4)").append('<h5>'+str2+"원"+"</h5>"); 

		//스타일
			
			$("#content_3 > .book_content > .book_list > .book_box > h3 > a").css({"float":"left", "fontSize":"12px", "width":"170","line-height":"15px","margin-top":"10px"});
			$(".book_box > h5").css({"fontSize":"13px","line-height":"20px","margin-top":"5px"});
			$(".book_box > p").css({"float":"left", "color":"#d7d7d7", "fontSize":"10px","line-height":"20px"});
	});



	//콘텐츠5 적용(최근목록)

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"조인계획"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

		var mini_book_boxs = document.getElementsByClassName("mini_book_box");

		for(var i=0; i<mini_book_boxs.length; i++){

			$(".recent_content > .mini_book_box").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
			$(".recent_content > .mini_book_box").eq(i).append("<p>"+'<a href="sub2.html">'+msg.documents[i].title+"</a>"+"</p>");
		}

		$(".recent_content > .mini_book_box").css({"border":"1px solid #d7d7d7"});
		$(".recent_content > .mini_book_box > a img").attr("width","82");
		$(".recent_content > .mini_book_box > a img").attr("height","120");
		$(".recent_content > .mini_book_box > p > a").css("fontSize","8px");
	});

	//콘텐츠5 적용(이 상품을 구입하신 분들이 함께 산 상품)

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"히가시노 게이고"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

		var mini_book_boxs = document.getElementsByClassName("mini_book_box");

		for(var i=0; i<mini_book_boxs.length; i++){

			$(".relative_content_wrap > .mini_book_box").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
			$(".relative_content_wrap > .mini_book_box").eq(i).append("<p>"+'<a href="sub2.html">'+msg.documents[i].title+"</a>"+"</p>");
		}

		$(".relative_content_wrap > .mini_book_box img").attr("width","82");
		$(".relative_content_wrap > .mini_book_box img").attr("height","120");
		$(".relative_content_wrap > .mini_book_box img").css({"border":"1px solid #d7d7d7"});
		$(".relative_content_wrap > .mini_book_box > p > a").css("fontSize","8px");
	});


	//콘텐츠6 좌측 적용

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"불안한 날들을 위한 철학"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

		var card_boxs = document.getElementsByClassName("card_box");

		for(var i=0; i<card_boxs.length; i++){

			$("#card_news_content_a > .card_box > .card_box_img").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
			$("#card_news_content_a > .card_box > .card_box_text").eq(i).append("<h4>"+"[불안한 날들을 위한 철학] 철학자가 들려주는 행복한 개인으로 사는 법"+"</h4>");
			$("#card_news_content_a > .card_box > .card_box_text").eq(i).append("<h3>"+msg.documents[i].title+"</h3>");

			var sts=msg.documents[i].authors+" | " +msg.documents[i].publisher;
			var sts2=sts.substring(0,12);

			$("#card_news_content_a > .card_box > .card_box_text").eq(i).append("<p>"+sts2+"</p>");
		}

		$(".card_box_img img").attr("width","92");
		$(".card_box_img img").attr("height","118");
		$(".card_box_text > h4").css({"marginBottom":"50px", "fontSize":"14px"});
		$(".card_box_text > p").css({"fontSize":"8px","color":"#d7d7d7"});
	});

	//콘텐츠6 우측 적용

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"여행해도 불행하던데요"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);		


		$(".yes_blog_wrap:nth-of-type(1) > .yes_box:nth-of-type(1) > a > .yes_box_img").append("<img src='"+msg.documents[0].thumbnail+"'/>");

		$(".yes_blog_wrap:nth-of-type(1) > .yes_box:nth-of-type(1) > a > .yes_box_img img").attr("width","160");
		$(".yes_blog_wrap:nth-of-type(1) > .yes_box:nth-of-type(1) > a > .yes_box_img img").attr("height","300");

	});	

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"9791165798987"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);		


		$(".yes_blog_wrap:nth-of-type(1) > .yes_box:nth-of-type(2) > a > .yes_box_img").append("<img src='"+msg.documents[0].thumbnail+"'/>");
		

		$(".yes_blog_wrap:nth-of-type(1) > .yes_box:nth-of-type(2) > a > .yes_box_img img").attr("width","160");
		$(".yes_blog_wrap:nth-of-type(1) > .yes_box:nth-of-type(2) > a > .yes_box_img img").attr("height","300");

	});	

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"9788901258218"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);		


		$(".yes_blog_wrap:nth-of-type(1) > .yes_box:nth-of-type(3) > a > .yes_box_img").append("<img src='"+msg.documents[0].thumbnail+"'/>");
		
		$(".yes_blog_wrap:nth-of-type(1) > .yes_box:nth-of-type(3) > a > .yes_box_img img").attr("width","160");
		$(".yes_blog_wrap:nth-of-type(1) > .yes_box:nth-of-type(3) > a > .yes_box_img img").attr("height","300");

	});	

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"발칙한 그녀들"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);		


		$(".yes_blog_wrap:nth-of-type(2) > .yes_box:nth-of-type(1) > a > .yes_box_img").append("<img src='"+msg.documents[0].thumbnail+"'/>");
		
		$(".yes_blog_wrap:nth-of-type(2) > .yes_box:nth-of-type(1) > a > .yes_box_img img").attr("width","160");
		$(".yes_blog_wrap:nth-of-type(2) > .yes_box:nth-of-type(1) > a > .yes_box_img img").attr("height","300");

	});	

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"아무 날의 비행일지"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);		


		$(".yes_blog_wrap:nth-of-type(2) > .yes_box:nth-of-type(2) > a > .yes_box_img").append("<img src='"+msg.documents[0].thumbnail+"'/>");
		
		$(".yes_blog_wrap:nth-of-type(2) > .yes_box:nth-of-type(2) > a > .yes_box_img img").attr("width","160");
		$(".yes_blog_wrap:nth-of-type(2) > .yes_box:nth-of-type(2) > a > .yes_box_img img").attr("height","300");

	});	

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"십 대가 꼭 알아야 할 탄소중립 교과서"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);		


		$(".yes_blog_wrap:nth-of-type(2) > .yes_box:nth-of-type(3) > a > .yes_box_img").append("<img src='"+msg.documents[0].thumbnail+"'/>");
		
		$(".yes_blog_wrap:nth-of-type(2) > .yes_box:nth-of-type(3) > a > .yes_box_img img").attr("width","160");
		$(".yes_blog_wrap:nth-of-type(2) > .yes_box:nth-of-type(3) > a > .yes_box_img img").attr("height","300");

	});	


	//콘텐츠7 적용

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"밤의 여행자들"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".youtube_book:nth-of-type(1) > .youtube_book_box:nth-of-type(1) > .youtube_book_box_img").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".youtube_book:nth-of-type(1) > .youtube_book_box:nth-of-type(1) > .youtube_book_box_text").append("<h3>"+"한겨레문학상, 이효석문학상 수상 작가 윤고은이 펼치는 전혀 새로운 상상력"+"</h3>");
			$(".youtube_book:nth-of-type(1) > .youtube_book_box:nth-of-type(1) > .youtube_book_box_text").append("<h4>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h4>");
			$(".youtube_book:nth-of-type(1) > .youtube_book_box:nth-of-type(1) > .youtube_book_box_text").append("<p>"+msg.documents[0].authors+"</p>");
			$(".youtube_book:nth-of-type(1) > .youtube_book_box:nth-of-type(1) > .youtube_book_box_text").append("<p>" +msg.documents[0].publisher+"</p>");
		

			$(".youtube_book_box_img > a > img").attr("width","136");
			$(".youtube_book_box_img > a > img").attr("height","198");
			$(".youtube_book_box_text > h4 > a").css({"font-size":"12px","line-height":"30px"});
			$(".youtube_book_box_text > h3").css({"color":"#669acc","font-size":"12px"});
	});

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"걱정 말아요, 제가 듣고 있어요"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".youtube_book:nth-of-type(2) > .youtube_book_box > .youtube_book_box_img").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".youtube_book:nth-of-type(2) > .youtube_book_box > .youtube_book_box_text").append("<h3>"+"20년간 114 콜센터에서 500만 명을 상담한 한 상담사의 진심."+"</h3>");
			$(".youtube_book:nth-of-type(2) > .youtube_book_box > .youtube_book_box_text").append("<h4>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h4>");
			$(".youtube_book:nth-of-type(2) > .youtube_book_box > .youtube_book_box_text").append("<p>"+msg.documents[0].authors+"</p>");
			$(".youtube_book:nth-of-type(2) > .youtube_book_box > .youtube_book_box_text").append("<p>" +msg.documents[0].publisher+"</p>");
		

			$(".youtube_book_box_img > a > img").attr("width","136");
			$(".youtube_book_box_img > a > img").attr("height","198");
			$(".youtube_book_box_text > h4 > a").css({"font-size":"12px","line-height":"30px"});
			$(".youtube_book_box_text > h3").css({"color":"#669acc","font-size":"12px"});
	});

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"다정한 것이 살아남는다"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".youtube_book:nth-of-type(3) > .youtube_book_box > .youtube_book_box_img").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".youtube_book:nth-of-type(3) > .youtube_book_box > .youtube_book_box_text").append("<h3>"+"적자생존은 틀렸다. 진화의 승자는 최적자가 아니라 다정한 자였다."+"</h3>");
			$(".youtube_book:nth-of-type(3) > .youtube_book_box > .youtube_book_box_text").append("<h4>"+'<a href="sub2.html">'+msg.documents[0].title+"</a>"+"</h4>");
			$(".youtube_book:nth-of-type(3) > .youtube_book_box > .youtube_book_box_text").append("<p>"+msg.documents[0].authors+"</p>");
			$(".youtube_book:nth-of-type(3) > .youtube_book_box > .youtube_book_box_text").append("<p>" +msg.documents[0].publisher+"</p>");
		

			$(".youtube_book_box_img > a > img").attr("width","136");
			$(".youtube_book_box_img > a > img").attr("height","198");
			$(".youtube_book_box_text > h4 > a").css({"font-size":"12px","line-height":"30px"});
			$(".youtube_book_box_text > h3").css({"color":"#669acc","font-size":"12px"});
	});




});