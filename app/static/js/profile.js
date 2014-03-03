$(document).ready( function() {
			var JSONinfo = $.cookie("user") ;
			var JSONobj = JSON.parse(JSONinfo);

			$(".name").html(JSONobj.user);

			console.log(JSONobj.user);

			$('.reviewtab a').click(function (e) {
				e.preventDefault()
			  	$('#myTab a[href="#reviews"]').tab('show')
			});

			$('.historytab a').click(function (e) {
				e.preventDefault()
			  	$('#myTab a[href="#history"]').tab('show')
			});


		});
$(".logo").click( function() {
      document.location.href = '/items/';
});

