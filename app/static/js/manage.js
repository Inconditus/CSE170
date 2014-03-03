$(document).ready( function() {
			// var JSONinfo = $.cookie("manage") ;
			// if(typeof JSONinfo === 'undefined'){
			// 	$(".content").html("<div class='name'>No items to display! Go buy some!</div>");
			// }
			// else
			// {
			// 	var JSONobj = JSON.parse(JSONinfo);

			// 	//console.log("loggin manage");
			// 	//console.log(JSONobj);
			// 	var count = JSONobj.count;

			// 	var i = 0;
			// 	for(i = 0; i < count; i++ )
			// 	{
			// 		var item = JSONobj["item" + (i+1)];

			// 		$(".content").append("<div class='item'><div class='name'>" + item.name + "</div><img class='img-responsive input-group' src=" + item.imgsrc +"><div class='price'>Buying for $" + item.price + "</div></div><hr>");

			// 		// $(".imgsrc").attr("src", item.imgsrc);
			// 		// $(".name").html(item.name);
			// 		// $(".desc").html(item.desc);
			// 		// $(".price").html(item.price);
			// 		// $(".seller").html(item.seller);
			// 	}
			// }

		});
$('.logo').click(function() {
  document.location.href = '/items/';
});
