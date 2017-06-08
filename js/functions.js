$(document).ready(function() {
    console.log('loaded functions.js');

    $.fn.is_email = function(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    } // end of $.fn.is_email = function(email)

    $.fn.js_paths = function() {
        console.log('document.URL: '+document.URL);
        console.log('document.location.href: '+document.location.href);
        console.log('document.location.origin: '+document.location.origin);
        console.log('document.location.host: '+document.location.host);
        console.log('document.location.pathname: '+document.location.pathname);
    } // end of function js_paths()

    $.fn.get_url_parameter = function(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    } // end of $.fn.get_url_parameter = function(sParam)

    $('#user-form').submit(function(e) {
        e.preventDefault();
        console.log('submitting!');
        var data = $(this).serialize();
        $.post('submit-user.php', data, function(response) {
            console.log(response);
            var response_obj = JSON.parse(response);
            var is_success = response_obj.is_success;
            var message = response_obj.message;
            console.log('is_success: '+is_success);
            console.log('message: '+message);
        }); // end of $.post('submit-user.php', data, function(response)
    });  // end of $('#user-form').submit(function(e)
}); // end of $(document).ready(function()
