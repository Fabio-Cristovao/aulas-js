let username = document.getElementById("username");
let feedback = document.querySelector("#feedback");

username.focus();


// username.addEventListener('blur', check(5), false);
username.addEventListener('blur', () => {
    check(8)
}, false);

function check(min) {
    if (username.value.length < min) {
        feedback.textContent = `O username é demasiado curto, por favor insira um username com pelo menos ${min} caracteres.`
    } else {
        feedback.textContent = '';
    }
}