var password = document.getElementById('password');
confirm_password = document.getElementById('cpassword');

function validatePassword() {
    if ((confirm_password.value!='')&&(password.value != confirm_password.value)) {
        document.getElementById('errorMsg').innerHTML='* Passwords do not match';
    } else {
        document.getElementById('errorMsg').innerHTML='';
    }
}

password.onkeyup = validatePassword;
confirm_password.onkeyup = validatePassword;