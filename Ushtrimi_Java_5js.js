
function validate(){ 
    var email = document.forms['form']['email'].value;
    var pass = document.forms['form']['password'].value;

    var email_error = document.getElementById('email_error');
    var pass_error = document.getElementById('pass_error');
    var pass_error1 = document.getElementById('pass_error1');
   
    if(email == ""){
        email_error.style.display = "block";
        return false;
    }

    if(pass.length == ""){
        pass_error.style.display = "block";
        return false;
    }

    if(pass.length < 9){
        pass_error1.style.display = "block";
        return false;
    }


    
   }
