let username = document.getElementById("username");
let password = document.getElementById("password");

username.addEventListener('blur', check, false);
password.addEventListener('blur', check, false);




function check(e) {

    //console.log(e);
    //debugger;

    // console.log(e.target);
    let campoAValidar = e.target;
    let msgDiv = campoAValidar.nextElementSibling;

    if (campoAValidar.value.length < 5) {
        msgDiv.textContent = "tem que ter mais que 5 caracteres"
    } else {
        msgDiv.textContent = '';
    }

}