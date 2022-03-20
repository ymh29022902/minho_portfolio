$(document).ready(function(){
	
	$.ajax({
		method:"get",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"아를르캥과 어릿광대"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".main_information > h2").append(msg.documents[0].title);
			$(".main_information > p").append('<a href="#">'+msg.documents[0].authors+"</a>"+" 저/"+'<a href="#">'+msg.documents[0].translators
				+"</a>"+" 역&nbsp;|&nbsp;"+'<a href="#">'+msg.documents[0].publisher+"</a>"+"&nbsp;|&nbsp;2022년 02월 25일"+"&nbsp;|&nbsp;원서 : "+'<a href="#">'+"半澤直樹 アルルカンと道化師"+"</a>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			$(".price").append("<p>"+str2+"원"+"</p>");
	});


//이 책을 구입하신 분들이 함께 산 책


	//1페이지

	$.ajax({
		method:"get",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"9788934941040"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".recommand_list > .book_box:nth-of-type(1)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".recommand_list > .book_box:nth-of-type(1)").append("<h3>"+'<a href="#">'+msg.documents[0].title+"</a>"+"</h3>");
			$(".recommand_list > .book_box:nth-of-type(1)").append('<p>'+msg.documents[0].authors+" 저/"+msg.documents[0].translators+" 역&nbsp;|&nbsp;"+msg.documents[0].publisher+"</p>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			$(".recommand_list > .book_box:nth-of-type(1)").append("<h4>"+str2+"원"+"</h4>");
	});

	$.ajax({
		method:"get",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"9791188331796"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".recommand_list > .book_box:nth-of-type(2) > a").append("<img src='"+msg.documents[0].thumbnail+"'/>")
			$(".recommand_list > .book_box:nth-of-type(2) > h3").append('<a href="#">'+msg.documents[0].title+"</a>");
			$(".recommand_list > .book_box:nth-of-type(2) > p:nth-of-type(1)").append(msg.documents[0].authors+" 저/"+msg.documents[0].translators+" 역&nbsp;|&nbsp;"+msg.documents[0].publisher);
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			$(".recommand_list > .book_box:nth-of-type(2)").append("<h4>"+str2+"원"+"</h4>");
	});

	$.ajax({
		method:"get",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"9791189709815"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".recommand_list > .book_box:nth-of-type(3) > a").append("<img src='"+msg.documents[0].thumbnail+"'/>")
			$(".recommand_list > .book_box:nth-of-type(3) > h3").append('<a href="#">'+msg.documents[0].title+"</a>");
			$(".recommand_list > .book_box:nth-of-type(3) > p:nth-of-type(1)").append(msg.documents[0].authors+" 저/"+msg.documents[0].translators+" 역&nbsp;|&nbsp;"+msg.documents[0].publisher);
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			$(".recommand_list > .book_box:nth-of-type(3)").append("<h4>"+str2+"원"+"</h4>");
	});

	$.ajax({
		method:"get",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"사랑한다고 말할 용기"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".recommand_list > .book_box:nth-of-type(4) > a").append("<img src='"+msg.documents[0].thumbnail+"'/>")
			$(".recommand_list > .book_box:nth-of-type(4) > h3").append('<a href="#">'+msg.documents[0].title+"</a>");
			$(".recommand_list > .book_box:nth-of-type(4) > p:nth-of-type(1)").append(msg.documents[0].authors+" 저/"+msg.documents[0].translators+" 역&nbsp;|&nbsp;"+msg.documents[0].publisher);
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			$(".recommand_list > .book_box:nth-of-type(4)").append("<h4>"+str2+"원"+"</h4>");
	});

	$.ajax({
		method:"get",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"존리의 왜 주식인가"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".recommand_list > .book_box:nth-of-type(5) > a").append("<img src='"+msg.documents[0].thumbnail+"'/>")
			$(".recommand_list > .book_box:nth-of-type(5) > h3").append('<a href="#">'+msg.documents[0].title+"</a>");
			$(".recommand_list > .book_box:nth-of-type(5) > p:nth-of-type(1)").append(msg.documents[0].authors+" 저/"+msg.documents[0].translators+" 역&nbsp;|&nbsp;"+msg.documents[0].publisher);
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			$(".recommand_list > .book_box:nth-of-type(5)").append("<h4>"+str2+"원"+"</h4>");
	});

	$.ajax({
		method:"get",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"조인계획"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".recommand_list > .book_box:nth-of-type(6) > a").append("<img src='"+msg.documents[0].thumbnail+"'/>")
			$(".recommand_list > .book_box:nth-of-type(6) > h3").append('<a href="#">'+msg.documents[0].title+"</a>");
			$(".recommand_list > .book_box:nth-of-type(6) > p:nth-of-type(1)").append(msg.documents[0].authors+" 저/"+msg.documents[0].translators+" 역&nbsp;|&nbsp;"+msg.documents[0].publisher);
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			$(".recommand_list > .book_box:nth-of-type(6)").append("<h4>"+str2+"원"+"</h4>");
	});

//

	$.ajax({
		method:"get",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"아를르캥과 어릿광대"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".series_book:nth-of-type(1) > .series_book_img").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".series_book:nth-of-type(1) > .series_book_text > p").append('<a href="#">'+msg.documents[0].title+"</a>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			$(".series_book:nth-of-type(1) > .series_book_text > h4").append(str2+"원");
	});
	
	$.ajax({
		method:"get",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"한자와 나오키 4"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".series_book:nth-of-type(2) > .series_book_img").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".series_book:nth-of-type(2) > .series_book_text > p").append('<a href="#">'+msg.documents[0].title+"</a>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			$(".series_book:nth-of-type(2) > .series_book_text > h4").append(str2+"원");
	});

	$.ajax({
		method:"get",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"한자와 나오키 3"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".series_book:nth-of-type(3) > .series_book_img").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".series_book:nth-of-type(3) > .series_book_text > p").append('<a href="#">'+msg.documents[0].title+"</a>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			$(".series_book:nth-of-type(3) > .series_book_text > h4").append(str2+"원");
	});

	$.ajax({
		method:"get",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"한자와 나오키 2"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".series_book:nth-of-type(4) > .series_book_img").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".series_book:nth-of-type(4) > .series_book_text > p").append('<a href="#">'+msg.documents[0].title+"</a>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			$(".series_book:nth-of-type(4) > .series_book_text > h4").append(str2+"원");
	});

	$.ajax({
		method:"get",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"한자와 나오키 2"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".series_book:nth-of-type(5) > .series_book_img").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".series_book:nth-of-type(5) > .series_book_text > p").append('<a href="#">'+msg.documents[0].title+"</a>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			$(".series_book:nth-of-type(5) > .series_book_text > h4").append(str2+"원");
	});

	$.ajax({
		method:"get",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"한자와 나오키 1"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".series_book:nth-of-type(6) > .series_book_img").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".series_book:nth-of-type(6) > .series_book_text > p").append('<a href="#">'+msg.documents[0].title+"</a>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			$(".series_book:nth-of-type(6) > .series_book_text > h4").append(str2+"원");
	});






//
	$.ajax({
		method:"get",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"달러구트 꿈 백화점 2"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".tag_list > .book_box:nth-of-type(1)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".tag_list > .book_box:nth-of-type(1)").append("<h3>"+'<a href="#">'+msg.documents[0].title+"</a>"+"</h3>");
			$(".tag_list > .book_box:nth-of-type(1)").append('<p>'+msg.documents[0].authors+" 저/"+msg.documents[0].translators+" 역&nbsp;|&nbsp;"+msg.documents[0].publisher+"</p>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			$(".tag_list > .book_box:nth-of-type(1)").append("<h4>"+str2+"원"+"</h4>");
	});

	$.ajax({
		method:"get",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"허상의 어릿광대"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".tag_list > .book_box:nth-of-type(2)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".tag_list > .book_box:nth-of-type(2)").append("<h3>"+'<a href="#">'+msg.documents[0].title+"</a>"+"</h3>");
			$(".tag_list > .book_box:nth-of-type(2)").append('<p>'+msg.documents[0].authors+" 저/"+msg.documents[0].translators+" 역&nbsp;|&nbsp;"+msg.documents[0].publisher+"</p>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			$(".tag_list > .book_box:nth-of-type(2)").append("<h4>"+str2+"원"+"</h4>");
	});

	$.ajax({
		method:"get",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"2021 제12회 젊은작가상 수상작품집"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".tag_list > .book_box:nth-of-type(3)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".tag_list > .book_box:nth-of-type(3)").append("<h3>"+'<a href="#">'+msg.documents[0].title+"</a>"+"</h3>");
			$(".tag_list > .book_box:nth-of-type(3)").append('<p>'+msg.documents[0].authors+" 저/"+msg.documents[0].translators+" 역&nbsp;|&nbsp;"+msg.documents[0].publisher+"</p>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			$(".tag_list > .book_box:nth-of-type(3)").append("<h4>"+str2+"원"+"</h4>");
	});

	$.ajax({
		method:"get",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"9788934967576"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".tag_list > .book_box:nth-of-type(4)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".tag_list > .book_box:nth-of-type(4)").append("<h3>"+'<a href="#">'+msg.documents[0].title+"</a>"+"</h3>");
			$(".tag_list > .book_box:nth-of-type(4)").append('<p>'+msg.documents[0].authors+" 저/"+msg.documents[0].translators+" 역&nbsp;|&nbsp;"+msg.documents[0].publisher+"</p>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			$(".tag_list > .book_box:nth-of-type(4)").append("<h4>"+str2+"원"+"</h4>");
	});

	$.ajax({
		method:"get",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"아를르캥과 어릿광대"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".tag_list > .book_box:nth-of-type(5)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".tag_list > .book_box:nth-of-type(5)").append("<h3>"+'<a href="#">'+msg.documents[0].title+"</a>"+"</h3>");
			$(".tag_list > .book_box:nth-of-type(5)").append('<p>'+msg.documents[0].authors+" 저/"+msg.documents[0].translators+" 역&nbsp;|&nbsp;"+msg.documents[0].publisher+"</p>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			$(".tag_list > .book_box:nth-of-type(5)").append("<h4>"+str2+"원"+"</h4>");
	});

//작가의 다른 상품

	$.ajax({
		method:"get",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"코믹 한자와 나오키 5"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$("#writer_wrap > .author_works > .author_works_list > .book_box:nth-of-type(1)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$("#writer_wrap > .author_works > .author_works_list > .book_box:nth-of-type(1)").append("<h3>"+'<a href="#">'+msg.documents[0].title+"</a>"+"</h3>");
			
			var str=msg.documents[0].price*0.9;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			$("#writer_wrap > .author_works > .author_works_list > .book_box:nth-of-type(1)").append("<h4>"+str2+"원"+"</h4>");
	});

	$.ajax({
		method:"get",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"	9791136278838"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$("#writer_wrap > .author_works > .author_works_list > .book_box:nth-of-type(2)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$("#writer_wrap > .author_works > .author_works_list > .book_box:nth-of-type(2)").append("<h3>"+'<a href="#">'+msg.documents[0].title+"</a>"+"</h3>");
			
			var str=msg.documents[0].price*0.9;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			$("#writer_wrap > .author_works > .author_works_list > .book_box:nth-of-type(2)").append("<h4>"+str2+"원"+"</h4>");
	});

	$.ajax({
		method:"get",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"9791136278968"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$("#writer_wrap > .author_works > .author_works_list > .book_box:nth-of-type(3)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$("#writer_wrap > .author_works > .author_works_list > .book_box:nth-of-type(3)").append("<h3>"+'<a href="#">'+msg.documents[0].title+"</a>"+"</h3>");
			
			var str=msg.documents[0].price*0.9;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			$("#writer_wrap > .author_works > .author_works_list > .book_box:nth-of-type(3)").append("<h4>"+str2+"원"+"</h4>");
	});

	$.ajax({
		method:"get",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"9791191056266"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$("#writer_wrap > .author_works > .author_works_list > .book_box:nth-of-type(4)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$("#writer_wrap > .author_works > .author_works_list > .book_box:nth-of-type(4)").append("<h3>"+'<a href="#">'+msg.documents[0].title+"</a>"+"</h3>");
			
			var str=msg.documents[0].price*0.9;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			$("#writer_wrap > .author_works > .author_works_list > .book_box:nth-of-type(4)").append("<h4>"+str2+"원"+"</h4>");
	});

	$.ajax({
		method:"get",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"변두리 로켓 야타가라스"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$("#writer_wrap > .author_works > .author_works_list > .book_box:nth-of-type(5)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$("#writer_wrap > .author_works > .author_works_list > .book_box:nth-of-type(5)").append("<h3>"+'<a href="#">'+msg.documents[0].title+"</a>"+"</h3>");
			
			var str=msg.documents[0].price*0.9;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			$("#writer_wrap > .author_works > .author_works_list > .book_box:nth-of-type(5)").append("<h4>"+str2+"원"+"</h4>");
	});

	$.ajax({
		method:"get",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"9791166117633"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$("#writer_wrap > .author_works > .author_works_list > .book_box:nth-of-type(6)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$("#writer_wrap > .author_works > .author_works_list > .book_box:nth-of-type(6)").append("<h3>"+'<a href="#">'+msg.documents[0].title+"</a>"+"</h3>");
			
			var str=msg.documents[0].price*0.9;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			$("#writer_wrap > .author_works > .author_works_list > .book_box:nth-of-type(6)").append("<h4>"+str2+"원"+"</h4>");
	});

	//

	$.ajax({
		method:"get",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"책을 지키려는 고양이"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$("#translator_wrap > .author_works > .author_works_list > .book_box:nth-of-type(1)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$("#translator_wrap > .author_works > .author_works_list > .book_box:nth-of-type(1)").append("<h3>"+'<a href="#">'+msg.documents[0].title+"</a>"+"</h3>");
			
			var str=msg.documents[0].price*0.9;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			$("#translator_wrap > .author_works > .author_works_list > .book_box:nth-of-type(1)").append("<h4>"+str2+"원"+"</h4>");
	});

	$.ajax({
		method:"get",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"시시리바의 "},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$("#translator_wrap > .author_works > .author_works_list > .book_box:nth-of-type(2)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$("#translator_wrap > .author_works > .author_works_list > .book_box:nth-of-type(2)").append("<h3>"+'<a href="#">'+msg.documents[0].title+"</a>"+"</h3>");
			
			var str=msg.documents[0].price*0.9;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			$("#translator_wrap > .author_works > .author_works_list > .book_box:nth-of-type(2)").append("<h4>"+str2+"원"+"</h4>");
	});

	$.ajax({
		method:"get",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"9791166117633"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$("#translator_wrap > .author_works > .author_works_list > .book_box:nth-of-type(3)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$("#translator_wrap > .author_works > .author_works_list > .book_box:nth-of-type(3)").append("<h3>"+'<a href="#">'+msg.documents[0].title+"</a>"+"</h3>");
			
			var str=msg.documents[0].price*0.9;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			$("#translator_wrap > .author_works > .author_works_list > .book_box:nth-of-type(3)").append("<h4>"+str2+"원"+"</h4>");
	});

	$.ajax({
		method:"get",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"지브리의 천재들"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$("#translator_wrap > .author_works > .author_works_list > .book_box:nth-of-type(4)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$("#translator_wrap > .author_works > .author_works_list > .book_box:nth-of-type(4)").append("<h3>"+'<a href="#">'+msg.documents[0].title+"</a>"+"</h3>");
			
			var str=msg.documents[0].price*0.9;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			$("#translator_wrap > .author_works > .author_works_list > .book_box:nth-of-type(4)").append("<h4>"+str2+"원"+"</h4>");
	});

	$.ajax({
		method:"get",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"겨울이 지나간 세계"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$("#translator_wrap > .author_works > .author_works_list > .book_box:nth-of-type(5)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$("#translator_wrap > .author_works > .author_works_list > .book_box:nth-of-type(5)").append("<h3>"+'<a href="#">'+msg.documents[0].title+"</a>"+"</h3>");
			
			var str=msg.documents[0].price*0.9;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			$("#translator_wrap > .author_works > .author_works_list > .book_box:nth-of-type(5)").append("<h4>"+str2+"원"+"</h4>");
	});

	

///연관 장르

	$.ajax({
		method:"get",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"안나의 토성"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".relative_list > .book_box:nth-of-type(1) > a").append("<img src='"+msg.documents[0].thumbnail+"'/>")
			$(".relative_list > .book_box:nth-of-type(1) > h3").append('<a href="#">'+msg.documents[0].title+"</a>");
			$(".relative_list > .book_box:nth-of-type(1) > p:nth-of-type(1)").append(msg.documents[0].authors+" 저/"+msg.documents[0].translators+" 역&nbsp;|&nbsp;"+msg.documents[0].publisher);
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			$(".relative_list > .book_box:nth-of-type(1)").append("<h4>"+str2+"원"+"</h4>");
	});

	$.ajax({
		method:"get",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"용은 잠들다"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".relative_list > .book_box:nth-of-type(2) > a").append("<img src='"+msg.documents[0].thumbnail+"'/>")
			$(".relative_list > .book_box:nth-of-type(2) > h3").append('<a href="#">'+msg.documents[0].title+"</a>");
			$(".relative_list > .book_box:nth-of-type(2) > p:nth-of-type(1)").append(msg.documents[0].authors+" 저/"+msg.documents[0].translators+" 역&nbsp;|&nbsp;"+msg.documents[0].publisher);
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			$(".relative_list > .book_box:nth-of-type(2)").append("<h4>"+str2+"원"+"</h4>");
	});

	$.ajax({
		method:"get",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"도서실에 있어요"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".relative_list > .book_box:nth-of-type(3) > a").append("<img src='"+msg.documents[0].thumbnail+"'/>")
			$(".relative_list > .book_box:nth-of-type(3) > h3").append('<a href="#">'+msg.documents[0].title+"</a>");
			$(".relative_list > .book_box:nth-of-type(3) > p:nth-of-type(1)").append(msg.documents[0].authors+" 저/"+msg.documents[0].translators+" 역&nbsp;|&nbsp;"+msg.documents[0].publisher);
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			$(".relative_list > .book_box:nth-of-type(3)").append("<h4>"+str2+"원"+"</h4>");
	});

	$.ajax({
		method:"get",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"딱 한 번만이라도"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".relative_list > .book_box:nth-of-type(4) > a").append("<img src='"+msg.documents[0].thumbnail+"'/>")
			$(".relative_list > .book_box:nth-of-type(4) > h3").append('<a href="#">'+msg.documents[0].title+"</a>");
			$(".relative_list > .book_box:nth-of-type(4) > p:nth-of-type(1)").append(msg.documents[0].authors+" 저/"+msg.documents[0].translators+" 역&nbsp;|&nbsp;"+msg.documents[0].publisher);
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			$(".relative_list > .book_box:nth-of-type(4)").append("<h4>"+str2+"원"+"</h4>");
	});




//서브 컨텐츠

	$.ajax({
		method:"get",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"1191043290"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".best_seller > .sub_book:nth-of-type(1) > .sub_book_img").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".best_seller > .sub_book:nth-of-type(1) > .sub_book_text").append("<p>"+'<a href="#">'+msg.documents[0].title+"</a>"+"</p>");
			$(".best_seller > .sub_book:nth-of-type(1) > .sub_book_text").append('<p>'+msg.documents[0].authors+" 저/"+msg.documents[0].translators+" 역&nbsp;|&nbsp;"+msg.documents[0].publisher+"</p>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			$(".best_seller > .sub_book:nth-of-type(1) > .sub_book_text").append("<h4>"+str2+"원"+"</h4>");
	});

	$.ajax({
		method:"get",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"백광"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".best_seller > .sub_book:nth-of-type(2) > .sub_book_img").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".best_seller > .sub_book:nth-of-type(2) > .sub_book_text").append("<p>"+'<a href="#">'+msg.documents[0].title+"</a>"+"</p>");
			$(".best_seller > .sub_book:nth-of-type(2) > .sub_book_text").append('<p>'+msg.documents[0].authors+" 저/"+msg.documents[0].translators+" 역&nbsp;|&nbsp;"+msg.documents[0].publisher+"</p>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			$(".best_seller > .sub_book:nth-of-type(2) > .sub_book_text").append("<h4>"+str2+"원"+"</h4>");
	});

	$.ajax({
		method:"get",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"인간 실격"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".best_seller > .sub_book:nth-of-type(3) > .sub_book_img").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".best_seller > .sub_book:nth-of-type(3) > .sub_book_text").append("<p>"+'<a href="#">'+msg.documents[0].title+"</a>"+"</p>");
			$(".best_seller > .sub_book:nth-of-type(3) > .sub_book_text").append('<p>'+msg.documents[0].authors+" 저/"+msg.documents[0].translators+" 역&nbsp;|&nbsp;"+msg.documents[0].publisher+"</p>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			$(".best_seller > .sub_book:nth-of-type(3) > .sub_book_text").append("<h4>"+str2+"원"+"</h4>");
	});

	$.ajax({
		method:"get",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"나미야 잡화점의 기적"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".best_seller > .sub_book:nth-of-type(4) > .sub_book_img").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".best_seller > .sub_book:nth-of-type(4) > .sub_book_text").append("<p>"+'<a href="#">'+msg.documents[0].title+"</a>"+"</p>");
			$(".best_seller > .sub_book:nth-of-type(4) > .sub_book_text").append('<p>'+msg.documents[0].authors+" 저/"+msg.documents[0].translators+" 역&nbsp;|&nbsp;"+msg.documents[0].publisher+"</p>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			$(".best_seller > .sub_book:nth-of-type(4) > .sub_book_text").append("<h4>"+str2+"원"+"</h4>");
	});

	$.ajax({
		method:"get",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"요리코를 위해"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".best_seller > .sub_book:nth-of-type(5) > .sub_book_img").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".best_seller > .sub_book:nth-of-type(5) > .sub_book_text").append("<p>"+'<a href="#">'+msg.documents[0].title+"</a>"+"</p>");
			$(".best_seller > .sub_book:nth-of-type(5) > .sub_book_text").append('<p>'+msg.documents[0].authors+" 저/"+msg.documents[0].translators+" 역&nbsp;|&nbsp;"+msg.documents[0].publisher+"</p>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			$(".best_seller > .sub_book:nth-of-type(5) > .sub_book_text").append("<h4>"+str2+"원"+"</h4>");
	});


/////

	$.ajax({
		method:"get",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"화려한 유괴"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".new_seller > .sub_book:nth-of-type(1) > .sub_book_img").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".new_seller > .sub_book:nth-of-type(1) > .sub_book_text").append("<p>"+'<a href="#">'+msg.documents[0].title+"</a>"+"</p>");
			$(".new_seller > .sub_book:nth-of-type(1) > .sub_book_text").append('<p>'+msg.documents[0].authors+" 저/"+msg.documents[0].translators+" 역&nbsp;|&nbsp;"+msg.documents[0].publisher+"</p>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			$(".new_seller > .sub_book:nth-of-type(1) > .sub_book_text").append("<h4>"+str2+"원"+"</h4>");
	});

	$.ajax({
		method:"get",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"악의 심장"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".new_seller > .sub_book:nth-of-type(2) > .sub_book_img").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".new_seller > .sub_book:nth-of-type(2) > .sub_book_text").append("<p>"+'<a href="#">'+msg.documents[0].title+"</a>"+"</p>");
			$(".new_seller > .sub_book:nth-of-type(2) > .sub_book_text").append('<p>'+msg.documents[0].authors+" 저/"+msg.documents[0].translators+" 역&nbsp;|&nbsp;"+msg.documents[0].publisher+"</p>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			$(".new_seller > .sub_book:nth-of-type(2) > .sub_book_text").append("<h4>"+str2+"원"+"</h4>");
	});

	$.ajax({
		method:"get",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"9791138407663"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".new_seller > .sub_book:nth-of-type(3) > .sub_book_img").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".new_seller > .sub_book:nth-of-type(3) > .sub_book_text").append("<p>"+'<a href="#">'+msg.documents[0].title+"</a>"+"</p>");
			$(".new_seller > .sub_book:nth-of-type(3) > .sub_book_text").append('<p>'+msg.documents[0].authors+" 저/"+msg.documents[0].translators+" 역&nbsp;|&nbsp;"+msg.documents[0].publisher+"</p>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			$(".new_seller > .sub_book:nth-of-type(3) > .sub_book_text").append("<h4>"+str2+"원"+"</h4>");
	});

	$.ajax({
		method:"get",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"9791138400404"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".new_seller > .sub_book:nth-of-type(4) > .sub_book_img").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".new_seller > .sub_book:nth-of-type(4) > .sub_book_text").append("<p>"+'<a href="#">'+msg.documents[0].title+"</a>"+"</p>");
			$(".new_seller > .sub_book:nth-of-type(4) > .sub_book_text").append('<p>'+msg.documents[0].authors+" 저/"+msg.documents[0].translators+" 역&nbsp;|&nbsp;"+msg.documents[0].publisher+"</p>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			$(".new_seller > .sub_book:nth-of-type(4) > .sub_book_text").append("<h4>"+str2+"원"+"</h4>");
	});

	$.ajax({
		method:"get",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"선은 나를 그린다"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".new_seller > .sub_book:nth-of-type(5) > .sub_book_img").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
			$(".new_seller > .sub_book:nth-of-type(5) > .sub_book_text").append("<p>"+'<a href="#">'+msg.documents[0].title+"</a>"+"</p>");
			$(".new_seller > .sub_book:nth-of-type(5) > .sub_book_text").append('<p>'+msg.documents[0].authors+" 저/"+msg.documents[0].translators+" 역&nbsp;|&nbsp;"+msg.documents[0].publisher+"</p>");
			
			var str=msg.documents[0].price;
			var str2=str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			$(".new_seller > .sub_book:nth-of-type(5) > .sub_book_text").append("<h4>"+str2+"원"+"</h4>");
	});

	/////



	$.ajax({
		method:"get",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"아무튼, 아침드라마"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".library_book:nth-of-type(1)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
	});

	$.ajax({
		method:"get",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"9791192107516"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".library_book:nth-of-type(2)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
	});

	$.ajax({
		method:"get",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {query:"쉽게 행복해지는 사람"},
		headers:{Authorization: "KakaoAK 740fd1475dd22e39c189dfaaab6fccc7"}

	})
	.done(function(msg){
		console.log(msg);

			$(".library_book:nth-of-type(3)").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
	});

});