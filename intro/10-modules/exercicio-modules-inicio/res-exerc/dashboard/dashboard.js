import {
    header
} from '../layouts/header.js';

import {
    sidebar
} from '../layouts/sidebar.js'
import {
    issues
} from '../components/issues.js'
import {
    users
} from '../components/users.js'




export const dashboard = () => {
    header();
    sidebar();
    issues();
    users();
    console.log('foi instanciado o dashboard');
}