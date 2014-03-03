//whole file isnt needed 
// Calculate the margin of the image so that it can line up to it
$(document).ready( function() {
	var width = $(".img-responsive").width();
	$(".input-group").css("width", width);
});
// $(document).ready( function() {
// 			var JSONinfo = $.cookie("listinginfo") ;
// 			var JSONobj = JSON.parse(JSONinfo);

// 			$("#imgsrc").attr("src", JSONobj.imgsrc);
// 			$("#name").html(JSONobj.name);
// 			$("#desc").html(JSONobj.desc);
// 			$("#price").html(JSONobj.price);
// 			$("#origprice").html(JSONobj.origprice);
// 			$("#seller").html(JSONobj.seller);

// 			// if the box for a min amount of buyers was checked
// 			if (JSONobj.check === true) 
// 			{
// 				// Insert the min amount of buyers
// 				// TODO: This is temporary as we should show the current 
// 				// buyers/total buyers needed but the current buyers should come 
// 				// from the backend
// 				$(".input-group p:last-child").after("<p><span class='labels'>Minimum Buyers:</span><span id='minnum'>20</span></p>");
// 				$("#minnum").html(JSONobj.minnum);

// 			}

// 			$(".myButton").click( function() {
// 				alert("Awesome! You have opted into buying " + JSONobj.name +"! You will be notified when " + JSONobj.seller + " has purchased the item and is ready to be picked up.");

// 				var JSONinfo = $.cookie("manage");
// 				// If have not bought any item yet
// 				console.log(JSONinfo);
// 				if(typeof JSONinfo === 'undefined'){
// 					var manage = {};
// 					manage["count"] = 1;

// 					var item = {};
// 					//item["check"] = check;
// 					item["name"] = JSONobj.name;
// 					item["desc"] = JSONobj.desc;
// 					//item["origprice"] = origprice;
// 					item["price"] = JSONobj.price;
// 					item["imgsrc"] = JSONobj.imgsrc;
// 					//item["minnum"] = minnum;
// 					item["seller"] = JSONobj.seller;

// 					manage["item1"] = item;

// 					console.log(manage);

// 					var date = new Date();
// 						date.setTime(date.getTime() + (5 * 60 * 1000));
// 					$.cookie("manage", JSON.stringify(manage), {expires: date});
// 				}
// 				else
// 				{
// 					var obj = JSON.parse(JSONinfo);
// 					obj["count"] = obj.count + 1;
// 					console.log(obj);

// 					var item = {};
// 					//item["check"] = check;
// 					item["name"] = JSONobj.name;
// 					item["desc"] = JSONobj.desc;
// 					//item["origprice"] = origprice;
// 					item["price"] = JSONobj.price;
// 					item["imgsrc"] = JSONobj.imgsrc;
// 					//item["minnum"] = minnum;
// 					item["seller"] = JSONobj.seller;

// 					var newitem = "item" + obj.count;

// 					obj[newitem] = item;

// 					var date = new Date();
// 						date.setTime(date.getTime() + (5 * 60 * 1000));
// 					$.cookie("manage", JSON.stringify(obj), {expires: date});
// 				}

// 				//window.location.href = "http://107.170.250.75/CSE170/frontend/items.html";

// 			});

// 			$("#seller").click( function() {
// 				var profile = {}

// 				profile["user"] = JSONobj.seller;

// 				var date = new Date();
// 				date.setTime(date.getTime() + (5 * 60 * 1000));

// 				$.cookie("user", JSON.stringify(profile), { expires: date } );

// 				window.location.href = "http://107.170.250.75/CSE170/frontend/profile.html";
// 			});
// 		});
$(".logo").click( function() {
      document.location.href = '/items/';
});

