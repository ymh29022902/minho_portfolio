//웹소설&코믹

//화제의 웹소설	

$(function(){

	$.ajax({
		url:"./json/ct4_web.json",
		dataType:"json",
		success : function(data){


			if(data.length>0){
				for(var i in data){

					var thumbnail=data[i].thumbnail;
					var title=data[i].title;
					var authors=data[i].authors;
					var genre=data[i].genre;
					var event=data[i].event;
					var price=data[i].price;

					$(".ct4_book_3_area > .big_book_box").eq(i).append('<a href="#">'+"<img src='img/main/"+data[i].thumbnail"'>"+"</a>");
					$(".ct4_book_3_area > .big_book_box").eq(i).append("<h4>"+'<a href="#">'+data[i].title+"</a>"+"</h4>");
					$(".ct4_book_3_area > .big_book_box").eq(i).append("<p>"+data[i].authors+"|"+data[i].genre+"|"+data[i].event+"|"+data[i].price+"</p>");

					$(".ct4_book_3_area > .big_book_box").attr("width","100");
					$(".ct4_book_3_area > .big_book_box").attr("height","200")
				}	
			}
		}


	});
	
});	
	

