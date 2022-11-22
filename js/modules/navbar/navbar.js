/*
    Controlla el comportamiento del navbar, lo modifica
    para mostrarlo a un visitante, usuario o al administrador
 */

import { loginStatus } from "../login/loginStatus.js"
import { searcher } from "./searcher/searcher.js"

export const navbar = () => {

    const userOpt = document.querySelector('#userOpt')
    const user = loginStatus();

    if (user) {
        console.log(user);
        userOpt.innerHTML = `
        Hola, @<b>${user.nombre}</b>! 
        <a href="#" id='logout'>[x]</a>
        `
    } else {
        userOpt.innerHTML = `
        <a href='/login.html'>Iniciar Sesion</a>
        `
    }
    searcher();
}