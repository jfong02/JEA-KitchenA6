$(document).ready(function() {
    $('#submit-button').click(function(event) {

        event.preventDefault();

        var validUser = $('#username').val() === 'cse170'; 
        var validPass = $('#password').val() === 'cogs120'; 

        if (validUser === true && validPass === true) { 
            window.location = "home.html"; // Go to homepage
        }
        else {
            // Display error msg
            $('#invalid-message').css('display', 'block'); 
        }
    });
});