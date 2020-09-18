$(document).ready(function () {
    $("#log").click(function () {
        var email = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/i);
        
        // Checking for blank fields.
        if ($("#email").val() == '' || $("#password").val() == '') {
            alert("Email Id / Password Field can't be blank");
        } else if (!($("#email").val()).match(email)) {
            alert("INVALID EMAIL ID");
        } else {
            alert("LOGIN SUCCESSFULL");
            $("form")[0].reset();
        }
    });
});
