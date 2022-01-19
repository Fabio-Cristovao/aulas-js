/* window.addEventListener('load', init, false);

function init() {

    let username = document.querySelector('#username');

    username.focus();

    username.addEventListener('input', dizerOla, false);

    function dizerOla(event) {
        console.log('user: ', event.target.value);
    }

} */

document.addEventListener('DOMContentLoaded', init, false);

function init() {

    let username = document.querySelector('#username');

    username.focus();

    username.addEventListener('input', dizerOla, false);

    function dizerOla(event) {
        console.log('user: ', event.target.value);
    }

}