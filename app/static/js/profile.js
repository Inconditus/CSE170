$(document).ready( function() {
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
var typingTimer;

$('.name').keyup(function(){
  console.log("keyup");
  clearTimeout(typingTimer);
  typingTimer = setTimeout(doneTyping, 1000);
});

function doneTyping() {
  var name = $('.name').text()
  $.post('/profile/change_name', { name: name })
  .done(function() {
    console.log("doneTyping sent to server");
  });
}

