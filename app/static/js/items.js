// //doesnt work, only display info of the last item
// $(".item").click( function() {
// 	var id = document.getElementById("url").attributes["href"].value;
// 	window.location.href = url
// });
$(document).ready(function(){
	$(".add").click( function() {
		window.location.href = "/add/";
	});

	$(".manage").click( function() {
		window.location.href = "/manage/";
	});

	$("#search").keyup(function(){
	    var filter = $(this).val();

	    // This is the word to search for
	    var searchterm = $("#search").val().toLowerCase();
	    $(".item").each(function(){

	       // If not contain, fade out
	       var item = $(this).children(".name").html().toLowerCase();
			if( item.indexOf(searchterm) < 0 )
				$(this).fadeOut();
	        else {
	            $(this).show();
	        }
	    });
	});
});
$(".logo").click( function() {
      document.location.href = '/items/';
});

