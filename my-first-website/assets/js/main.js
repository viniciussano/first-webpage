
// Start jQuery Document Ready Event
$(document).ready(function(){

    //Start validation for contact form submission
	$("#contact-form").on("submit", function() {

        var error_count = 0; //Error counter variable start at 0 

        var fullname = $("#fullname").val(); //Store full name input value
		let regex_name = /^[A-Za-z]{3,}(?: [A-Za-z]{3,})+$/; // Regular expression to validate full name
        
		//Check if full name input matches the regular expression
		if (regex_name.test(fullname)) {
			$("#error-name").hide(); //Hide error message	
            error_count += 0; // Full name validated, no error		
		}	
		else{
			$("#fullname").css("border-color", "#ff3333"); // Highlight the full name field border
			$("#error-name").fadeIn(600);; // Full name incorrect, show error message
			error_count += 1; // Full name incorrect, 1 error 
		}

		
		var phone = $("#phonenumber").val(); //Store phone number input value
		let regex_phone = /^\+\d{1,3} \d{8,15}$/; // Regular expression to validate phone number

		//Check if phone number input matches the regular expression
        if (regex_phone.test(phone)) {
			$("#error-phone").hide(); //Hide error message
            error_count += 0; // Phone number validated, no error		
		}	
		else{
			$("#phonenumber").css("border-color", "#ff3333"); // Highlight the phone number field border
			$("#error-phone").fadeIn(600);; // Phone number incorrect, show error message
			error_count += 1; // Phone number incorrect, 1 error 
		}

        var email = $("#email").val(); //Store email input value
		let regex_email = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/; // Regular expression to validate email

		//Check if email input matches the regular expression
		if (regex_email.test(email)) {
			$("#error-email").hide(); //Hide error message
			error_count += 0; // Email validated, no error
		}
		else{
			$("#email").css("border-color", "#ff3333"); // Highlight the email field border
			$("#error-email").fadeIn(600);; // Email incorrect, show error message
			error_count += 1; // Email incorrect, 1 error
		}
		
		var message = $("#textmessage").val(); //Store text message input value
		let regex_message = /^(?!\s*$)[\w\s.,!?@#%&*()'":;+-=/\[\]{}|<>~]{1,1000}$/; // Regular expression to validate text message
		
		//Check if text message input matches the regular expression
		if (regex_message.test(message)) {
			$("#error-message").hide(); //Hide error message
			error_count += 0; // Text message validated, no error
		}
		else{
			$("#textmessage").css("border-color", "#ff3333"); // Highlight the text message field border
			$("#error-message").fadeIn(600);; // Text message incorrect, show error message
			error_count += 1; // Text message incorrect, 1 error
		}

		// Remove the hightlight from the full name field border
		$("#fullname").on("focusout", function() {
			$("#fullname").css("border-color", "#dddddd");
		});

		// Remove the hightlight from the phone number field border
		$("#phonenumber").on("focusout", function() {
			$("#phonenumber").css("border-color", "#dddddd");
		});

		// Remove the hightlight from the email field border
		$("#email").on("focusout", function() {
			$("#email").css("border-color", "#dddddd");
		});

		// Remove the hightlight from the text message field border
		$("#textmessage").on("focusout", function() {
			$("#textmessage").css("border-color", "#dddddd");
		});

		// Check if there is any error
		if (error_count > 0) {
			event.preventDefault(); // Prevent form submission
			return false; //Stop form submission and exit function
		}   
    });

	// Slide navbar menu on narrow screen when menu icon is clicked
    $("#narrow-menu-title").on("click", function() {
        $(".narrow-menu ul.nav-links").slideToggle(); // Slide Toggle the menu list
    });

});


let mybutton = document.getElementById("go_to_top_button");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scroll_down_detection()};

// Function to set the the "Back to Top" button to show after user scrolls down 20px from the top page
function scroll_down_detection() {

	//Check if page has been scrolled down by 20 px
  	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block"; // Show "Back to Top" button
  	} 
  	else {
		mybutton.style.display = "none"; // Hide "Back to Top" button
  	}
}

// Function to bring the page to the top in all different browsers
function back_to_top() {
	document.body.scrollTop = 0;
  	document.documentElement.scrollTop = 0;
}