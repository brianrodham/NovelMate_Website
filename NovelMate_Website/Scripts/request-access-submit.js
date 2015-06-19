function submitEarlyAccess() {
        
    var email = $(".input").val();
    $(".success-text").show();

    return false;
}

function ValidateEmail(email)
{
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}


$('.earlyAccessForm').submit(function (event) {
    event.preventDefault();
    var email = $(".input").val();
    if (ValidateEmail(email)) {
        $(".fail-text").hide();
        $(".success-text").show();
    }
    else {
        $(".fail-text").show();
        $(".success-text").hide();
    }
   

});