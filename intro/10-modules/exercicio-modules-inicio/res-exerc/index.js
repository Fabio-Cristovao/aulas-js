import {
    users
}
from './components/users.js';

import {
    userProfile
}
from './components/user-profile.js';

import {
    issues
} from './components/issues.js'

import {
    dashboard
} from './dashboard/dashboard.js'

import {
    header
} from './layouts/header.js'

import {
    sidebar
} from './layouts/sidebar.js'


document.addEventListener("DOMContentLoaded", init, false);

function init() {

    let info = document.getElementById("test");

    info.innerHTML = `
    
    <p> O módulo users foi carregado: ${users}.</p>
    <p> O módulo user-profile foi carregado: ${userProfile}.</p>
    <p> O módulo issues foi carregado: ${issues}.</p>
    <p> O módulo dashboard foi carregado: ${dashboard}.</p>
    <p> O módulo header foi carregado: ${header}.</p>
    <p> O módulo sidebar foi carregado: ${sidebar}.</p>
    

    
    
    

    
   

    `
}