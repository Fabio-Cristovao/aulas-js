import xpto, {
    olaUniverso
} from './libEs6.js'



document.addEventListener('DOMContentLoaded', init, false);

function init() {

    let info = document.getElementById('info');

    info.innerHTML = `
    <p> A utilizar o modulo de es5: ${libEs5.dizerOla()}</p>
    <hr>
    <h2>A utilizar o modulo de ES6:<br />${olaUniverso()}</h2>
    <h3> A utilizar o modulo de ES6 Default: <br /> ${xpto()}
    
    `;

}