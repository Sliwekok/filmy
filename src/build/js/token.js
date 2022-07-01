import Cookies from 'js-cookie';

// check if JWT token is created
$(document).ready(function(){
    if(!Cookies.get('token')){
        $("#setUsername").show(0);
    }
});


// create JWT token for CSRF protection
$(document).on("submit", "#createUsername", function(e){
    e.preventDefault();
    let username = $("#username").val(),
        // add random color for user 
        color = ['red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'lime'],
        randomColor = color[Math.floor(Math.random() * color.length)];
    // create JWT out of data
    $.ajax({
        url: '/app/routes/createJWTToken.php',
        method: 'POST',
        data: {username: username, color: randomColor},
        error: function(error){
            console.log(error);
            return false;
        },
        success: function(data){
            console.log(data);
            // create cookie for user auth
            Cookies.set('token', data);
            // hide form
            $("#setUsername").hide(0);
            return true;
        }
    });
    return true;
});
