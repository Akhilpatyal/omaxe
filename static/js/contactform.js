$(function () {
    "use strict";
    
    /*  
        Template name    : BURJ - Real Estate HTML Landing Page Template
        Author           : ZRTHEMES
        Version          : 1.0
        File Description : Js file of the template
        Tag: advanced custom search, agency, agent, business, clean, corporate, directory, google maps, homes, idx agent, listing properties, membership packages, property, real broker, real estate, real estate agent, real estate agency, realtor
    */
    $('#ajax-contact').validator();
    $('#ajax-contact').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "phpscripts/contact.html";
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    $( "#msgSubmit" ).removeClass( "hidden" );
                    $('#ajax-contact')[0].reset();
                    
                }
            });
            return false;
        }
    })
});