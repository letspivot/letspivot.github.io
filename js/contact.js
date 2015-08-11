jQuery(function($)  
{
    $("#reach-out").click(function()
    {

        var email = $("#email").val(); // get email field value
        var name = $("#name").val(); // get name field value
        var msg = $("#msg").val(); // get message field value
        $("#reach-out").text('Reaching out...');
      
        $.ajax(
        {
            type: "POST",
            url: "https://mandrillapp.com/api/1.0/messages/send.json",
            data: {
                'key': 'rB87kWQh5GbLvTQuTbdz_A',
                'message': {
                    'from_email': email,
                    'from_name': name,
                    'headers': {
                        'Reply-To': email
                    },
                    'subject': 'Let\'s Pivot!',
                    'text': msg,
                    'to': [
                    {
                        'email': 'alavell@gmail.com',
                        'name': 'Allan Lavell',
                        'type': 'to'
                    }]
                }
            }
        })
        .done(function(response) {
            $("#reach-out").text('Done! We\'ll be in touch ;)');
            setTimeout(function() {

              $('#ctaModal').modal('hide');
              setTimeout(function() {
                $("#name").val(''); // reset field after successful submission
                $("#email").val(''); // reset field after successful submission
                $("#msg").val(''); // reset field after successful submission
                $("#reach-out").text('Reach Out!');
              }, 500);
              
            }, 1500);
        })
        .fail(function(response) {
            alert('Error sending message. Try again later, or email liz@letspivot.com!');
        });
        return false; // prevent page refresh
    });
});