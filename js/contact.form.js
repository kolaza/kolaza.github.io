$(document).ready(function() {
    //submission scripts for the contact form
    $('.contactForm').submit(function() {
        //statements to validate the form	
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var email = document.getElementById('e-mail');
        if(!filter.test(email.value)) {
            $('.email-missing').css({
                'opacity': 1
            });
        } else {
            $('.email-missing').css({
                'opacity': 0
            });
        }
        if(document.cform.name.value == "") {
            $('.name-missing').css({
                'opacity': 1
            });
        } else {
            $('.name-missing').css({
                'opacity': 0
            });
        }
        if(document.cform.message.value == "") {
            $('.message-missing').css({
                'opacity': 1
            });
        } else {
            $('.message-missing').css({
                'opacity': 0
            });
        }
        if((document.cform.name.value == "") || (!filter.test(email.value)) || (document.cform.message.value == "")) {
            return false;
        }
        if((document.cform.name.value != "") && (filter.test(email.value)) && (document.cform.message.value != "")) {
            // send email
            emailModule.contactMail($('#e-mail').val(), $('#name').val());
            // record data
            excellFillModule.postContactToGoogle($('#name').val(), $('#e-mail').val(), $('#url').val(), $('#message').val());
            // closes the form and fades out
            $(".contactForm").slideUp(800, function() {
                //show the thanks message
                $('.loader').append("<p>Thank you.</br>We will reply within an hour.</p>");
            });
            //stay on the page
            return false;
        }
    });
    
    //submission scripts for the subscribe form
    $('.subscribe').submit(function() {
        //statements to validate the form	
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var email = document.getElementById('e-mail-subscribe');
        if(!filter.test(email.value)) {
            $('#e-mail-subscribe').css({
                'background': '#D81D1D'
            });
        } else {
            $('#e-mail-subscribe').css({
                'background': '#FFFFFF'
            });
        }
        if(!filter.test(email.value)) {
            return false;
        }
        if(filter.test(email.value)) {
            // send email
            emailModule.subscribeMail($('#e-mail-subscribe').val());
            // record data
            excellFillModule.postSubscribeToGoogle($('#e-mail-subscribe').val());
            //stay on the page
            return false;
        }
    });
});