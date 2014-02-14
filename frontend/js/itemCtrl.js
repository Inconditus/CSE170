var myApp = angular.module('myApp', []);

// app.config(function($routeProvider) {
//     $routeProvider
//       .when('/:itemName',
//       {
//         templateUrl: "singleitem.html",
//         controller: "SingeItemsDisplayCtrl"
//       })
// });

myApp.factory('Items', function () {
	var Items = {};
	Items.cast = [
		{
			"name": "Julian Pie",
			"description": "Delicious Pie! Anyone wants some?!",
			"imageURL": "http://theleftcoast.files.wordpress.com/2008/10/img_3546.jpg",
			"originalPrice": "$14.00",
			"newPrice": "$8.00"	
		},
		{
			"name": "Kittens",
			"description": "Selling kittens! A whole litter of them.",
			"imageURL": "http://placekitten.com.s3.amazonaws.com/homepage-samples/408/287.jpg",
			"originalPrice": "$500.00",
			"newPrice": "$340.00"			
		},
		{
			"name": "Pokemon",
			"description": "Everyone's favorite pokemon!",
			"imageURL": "http://1-media-cdn.foolz.us/ffuuka/board/vp/image/1387/40/1387404247733.jpg",
			"originalPrice": "$1000.00",
			"newPrice": "$250.00"			
		},
		{
			"name": "Chicken noodle soup",
			"description": "Yum yum noodle soup!!!",
			"imageURL": "http://3.bp.blogspot.com/_rfrhD8UGB6k/TKEYBVS6nBI/AAAAAAAAAco/kIBYYLhZn3Q/s1600/homemade%2Bchicken%2Bnoodle%2Bsoup%2B6.JPG",
			"originalPrice": "$8.00",
			"newPrice": "$3.00"			
		},
		{
			"name": "Chocolate",
			"description": "Deliciousss",
			"imageURL": "http://belize-travel-blog.chaacreek.com/wp-content/uploads/2013/01/continental-chocolates.jpg",
			"originalPrice": "$10.00",
			"newPrice": "$2.00"
		},
		{
			"name": "Dogeeeeeee",
			"description": "Much amazeeee",
			"imageURL": "http://static1.refinery29.com/bin/entry/598/600x500bm,80/1142318/doge.jpg",
			"originalPrice": "$80.00",
			"newPrice": "$2.00"
		}
	];
	return Items;
})

myApp.controller("ItemsDisplayCtrl", function($scope,Items) {
	$scope.items = Items;
});

// function ItemsDisplayCtrl($scope, Items) {
// 	$scope.items = Items;

// }
