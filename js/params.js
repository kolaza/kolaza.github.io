/**
 * Created with Kolaza.
 * User: udit01
 * Date: 2014-09-28
 * Time: 03:01 PM
 * Writing parameters for the email sending options for contact, subscribe
 * We do not show this message to the user as it will mark the API naked to the user
 * Create a function to log the response from the Mandrill API
 * We do this in the form of module
 */
var emailModule = (function() {
    function log(obj) {
        $('#response').text(JSON.stringify(obj));
    }
    // Creating instance instance of the Mandrill class with API key
    // This object will be used globally within this module
    var m = new mandrill.Mandrill('nyH0sR6U9BaLIHAPfeJdVg');
    /********************************
     *
     * Contact Email
     * Storing the Contact form details
     *
     ********************************/
    var setContactParams = function(emailContact, nameContact) {
        //Capitalizing the first letter
        nameContact = nameContact.substr(0, 1).toUpperCase() + nameContact.substr(1);
        var contactParams = {
            "template_name": "Contact Reply",
            "template_content": [{
                "name": "name",
                "content": 'Hi ' + nameContact + ','
            }],
            "merge": true,
            "message": {
                "from_email": "hello@kolaza.com",
                "to": [{
                    "email": emailContact
                }],
                "autotext": true,
                "track_opens": true,
                "track_clicks": true,
            }
        };
        return contactParams;
    };
    var contactMail = function(emailContact, nameContact) {
        // Send the email!
        // get the params for the contact template
        var contactParams = setContactParams(emailContact, nameContact);
        // Log the error if any from the mail sender 
        m.messages.sendTemplate(contactParams, function(res) {
            //logging responses if there was a success
            //log(res);
        }, function(err) {
            //logging responses if there was a error
            //log(err);
        });
    };
    /********************************
     *
     * Subscribe Email
     *
     ********************************/
    var setSubscribeParams = function(emailContact) {
        var subscribeParams = {
            "template_name": "Subscribe Reply",
            "template_content": [{
                "name": "Subscribe Reply"
            }],
            "message": {
                "from_email": "hello@kolaza.com",
                "to": [{
                    "email": emailContact
                }],
                "autotext": true,
                "track_opens": true,
                "track_clicks": true,
            }
        };
        return subscribeParams;
    };
    var subscribeMail = function(emailContact) {
        // Send the email!
        // / get the params for the contact template
        var subscribeParams = setSubscribeParams(emailContact);
        // Log the error if any from the mail sender (Mandrill)
        m.messages.sendTemplate(subscribeParams, function(res) {
            //logging responses if there was a success
            //log(res);
        }, function(err) {
            //logging responses if there was a error
            //log(err);
        });
    }
    //returning the module methods
    return {
        contactMail: contactMail,
        subscribeMail: subscribeMail
    };
})(); //end of module