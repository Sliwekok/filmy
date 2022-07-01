import Cookies from 'js-cookie';
import {showErrorMessage} from './app.js';

// on change of select - update movie on index
$(document).on("change", "#currentMovie", function(){
    let movie = $(this).val();
    $.ajax({
        url: '/app/routes/AdminChangeMovie.php',
        method: 'POST',
        data: {movie: movie, token: Cookies.get('token')},
        error: function(xhr, status, error){
            console.log(error);
            showErrorMessage(xhr.responseText);
            return false;
        },
        success: function(data){
            console.log("Movie has been changed. Refresh player to see changes");
            return true;
        }
    });
})