$(document).ready( function() {
			var JSONinfo = $.cookie("newitem") ;
			var JSONobj = JSON.parse(JSONinfo);

			$(".content").prepend("<div class='item'><div class='name'>" + JSONobj.name + "</div><div class='desc'>" + JSONobj.desc + "</div><img class='img-responsive' src=" + JSONobj.imgsrc + ">" + "<div class='itembar'><div class='btn-itembar price'>$" + JSONobj.price + "</div><div class='btn-itembar origprice'>$" + JSONobj.origprice + "</div><div class='btn-itembar btn-buy'>More Details</div></div></div><br>");

			$(".item").click( function() {

				console.log($(this).find(".name").html());

				var imgsrc = $(this).find(".img-responsive").attr("src");
				var name = $(this).find(".name").html();
				var desc = $(this).find(".desc").html();
				var origprice = $(this).find(".origprice").html();
				var price = $(this).find(".price").html();
				var seller = $(this).find(".seller").html();

				var JSONinfo = {}

				JSONinfo["name"] = name;
				JSONinfo["desc"] = desc;
				JSONinfo["origprice"] = origprice.substr(1);
				JSONinfo["price"] = price.substr(1);
				JSONinfo["imgsrc"] = imgsrc;
				JSONinfo["seller"] = seller;

				// 1 min expiry for cookie
				// var date = new Date();
				// date.setTime(date.getTime() + (1 * 60 * 1000));

				$.cookie("listinginfo", JSON.stringify(JSONinfo) );

				console.log(JSON.stringify(JSONinfo));

				window.location.href = "http://107.170.250.75/CSE170/frontend/singleitem.html";
				
			});

			
		});
	
	// After clicking item, send information to a cookie so that the singleitem page can render the cookie
	$(".item").click( function() {

		console.log($(this).find(".name").html());

		var imgsrc = $(this).find(".img-responsive").attr("src");
		var name = $(this).find(".name").html();
		var desc = $(this).find(".desc").html();
		var origprice = $(this).find(".origprice").html();
		var price = $(this).find(".price").html();
		var seller = $(this).find(".seller").html();

		var JSONinfo = {}

		JSONinfo["name"] = name;
		JSONinfo["desc"] = desc;
		JSONinfo["origprice"] = origprice.substr(1);
		JSONinfo["price"] = price.substr(1);
		JSONinfo["imgsrc"] = imgsrc;
		JSONinfo["seller"] = seller;

		// 1 min expiry for cookie
		// var date = new Date();
		// date.setTime(date.getTime() + (1 * 60 * 1000));

		$.cookie("listinginfo", JSON.stringify(JSONinfo) );

		console.log(JSON.stringify(JSONinfo));

		window.location.href = "http://107.170.250.75/CSE170/frontend/singleitem.html";
		
	});

	$(".add").click( function() {
		window.location.href = "/add/";
	});

	$(".manage").click( function() {
		window.location.href = "/manage/";
	});