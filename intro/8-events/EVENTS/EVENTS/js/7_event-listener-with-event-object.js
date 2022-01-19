let username = document.getElementById("username");
let password = document.getElementById("password");

username.addEventListener('blur', (evt) => check(evt, 8), false);
password.addEventListener('blur', (evt) => check(evt, 5), false);




/* function check(e) 

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

 */

function check(e, min = 5) {

    //console.log(e);
    //debugger;

    // console.log(e.target);
    let campoAValidar = e.target;
    let msgDiv = campoAValidar.nextElementSibling;

    if (campoAValidar.value.length < min) {
        msgDiv.textContent = `tem que ter mais que ${min} caracteres`
    } else {
        msgDiv.textContent = '';
    }

}