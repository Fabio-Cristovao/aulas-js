let username = document.getElementById("username");
let feedback = document.querySelector("#feedback");

username.focus();


username.addEventListener('blur', checkUsername, false);

function checkUsername() {
    if (username.value.length < 5) {
        feedback.textContent = "O username é demasiado curto, por favor insira um username com pelo menos 5 caracteres."
    } else {
        feedback.textContent = '';
    }
}