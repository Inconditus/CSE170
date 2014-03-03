var signupclicked = false;
var signinclicked = false;
	$(".btn-register").click(function(evt) {
		// link to next page
		console.log("registration button clicked");
		//remove the sign in button
		$(".btn-login").animate({
			opacity: 0.0
		}, 100, function() 
		{ 
			$(".btn-login").css("display", "none");
		});
		//add the registration form
		$(".form-reg").slideDown("fast");
		//color the current button
		$(".btn-register").animate({
			backgroundColor: 'white',
			color: '#3e4e67'
		});

		$(".btn-back").css("display","block");

		//$(".btn-register").before("<br>");

		if (signupclicked === true)
		{	
			var email = $("#Email").val();
			if (! validateEmail(email) ) {
				alert("Please enter a valid email address!");
			}
			else {
				var jqxhr = $.post( "/signup", {username: document.getElementById("Email").value, password: document.getElementById("Password").value }, function(data) {
				  if ( data.result === "success") {
				  	window.location.href = "/items";
				  }
				  else {
				  	alert("Failed to signup. Email in use! Pick another. ");
				  }
				});

			}

			// .done(function() {
			// 	// When done, want to redirect to listings page while logged in
			//     window.location.href = "items.html";
			// })
			// .fail(function() {
			//     alert("Failed to signup. Email in use! Pick another. ");
			// });
			//Request body parameters
			//window.location.href = "http://107.170.250.75/CSE170/frontend/items.html";
		}
		signupclicked = true;
		evt.preventDefault;
	});

	function validateEmail(email) { 
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	} 

	$(".btn-back").click(function(evt) {
		evt.preventDefault;

		// Reset back to original non clicked settings
		signupclicked = false;
		signinclicked = false;

		$(".form-reg").slideUp("fast");
		$(".btn-login").animate({
			opacity: 100
		}, 100, function() 
		{ 
			$(".btn-login").css("display", "block");
		});

		$(".btn-register").show();
		$(".btn-login").show();

		$(".btn-register").css({
			color: 'white',
			backgroundColor: 'transparent'
			// border-color: 'white'
		});

		$(".btn-login").css({
			color: 'white',
			backgroundColor: 'transparent'
			// border-color: 'white'
		});

		$(this).hide();

		if ($(this).prev().is("br"))
		{
			$(".btn-back").prev().remove();
			$(".form-reg").after("<br>");
			//console.log($(".btn-back").prev());

		}
	});

	$(".btn-login").click(function(evt) {
		evt.preventDefault;
		console.log("login button clicked");
		//remove the sign in button
		// $(".btn-register").delay(10).animate({
		// 	opacity: 0,
		// 	height: 0,
		// 	margin: 0,
		// 	padding: 0
		// }, 50, function() 
		// { 
		// 	$(".btn-register").css("display", "none");
		// });

		$(".btn-register").css("display", "none");
		//add the login form
		$(".form-reg").slideDown();

		//animate color btn
		$(".btn-login").animate({
			backgroundColor: 'white',
			color: '#3e4e67'
		});

		if (signinclicked === false)
			$(".btn-back").before("<br>");

		$(".btn-back").css("display","block");
		//remove the extra <br> above sign in button
		$(".form-reg").next('br').remove();
		if (signinclicked === true)
		{
			var email = $("#Email").val();
			if (! validateEmail(email) ) {
				alert("Please enter a valid email address!");
			}
			else {
				var jqxhr = $.post( "/login", {username: document.getElementById("Email").value, password: document.getElementById("Password").value }, function(data) {
				  if ( data.result === "success") {
				  	window.location.href = "/items";
				  }
				  else {
				  	alert("Failed to sign in. Incorrect email or password. ");
				  }
				});
			}

			// .done(function() {
			// 	// When done, want to redirect to listings page while logged in
			//     window.location.href = "items.html";
			// })
			// .fail(function() {
			//     alert("Failed to Signin. Incorrect email or password. ");
			// });
			//Request body parameters
			//window.location.href = "http://107.170.250.75/CSE170/frontend/items.html";
		}
		signinclicked = true;
		evt.preventDefault;

	});
  $(".logo").click( function() {
        document.location.href = '/items/';
  });

