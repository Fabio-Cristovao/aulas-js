let username = document.getElementById("username");
let feedback = document.querySelector("#feedback");

function checkUsername() {
    if (username.value.length < 5) {
        feedback.textContent = "O username é demasiado curto, por favor insira um username com pelo menos 5 caracteres."
    } else {
        feedback.textContent = "";
    }
}