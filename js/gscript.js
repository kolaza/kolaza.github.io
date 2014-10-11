/**
 * Created with Kolaza.
 * User: udit01
 * Date: 2014-09-29
 * Time: 09:03 PM
 * To change this template use Tools | Templates.
 * Fill in the spreadsheet data
 */
var excellFillModule = (function() {
    var postContactToGoogle = function(name, email, website, text) {
        //alert(name + email + website + text);
        $.ajax({
            url: "https://docs.google.com/forms/d/1B-UNCAx5iY_thHJW-UFixPTxRDjDtQaHD5DeQFeFEQ4/formResponse",
            data: {
                "entry_1088362507": name,
                "entry_419938013": email,
                "entry_1197643528": website,
                "entry_129915244": text
            },
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function(res) {
                    //window.location.replace("ThankYou.html");
                    //logging responses if there was a error
                    //log(res);
                },
                200: function(res) {
                    //logging responses if there was a success
                    //window.location.replace("ThankYou.html");
                    //log(res);
                }
            }
        });
    };
    var postSubscribeToGoogle = function(email) {
        $.ajax({
            url: "https://docs.google.com/forms/d/1wVNDI7p_PopFVADeszWCocAFZ2FxKbnoOru52U5dMjg/formResponse",
            data: {
                "entry_100584117": email
            },
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function(res) {
                    //window.location.replace("ThankYou.html");
                    //logging responses if there was a error
                    //log(res);
                    //console.log("hello from google");
                },
                200: function(res) {
                    //logging responses if there was a success
                    //window.location.replace("ThankYou.html");
                    //log(res);
                    //console.log("hello 2 from google");
                }
            }
        });
    };
    //returning the module methods
    return {
        postContactToGoogle: postContactToGoogle,
        postSubscribeToGoogle: postSubscribeToGoogle
    };
})(); //end of module