import { cargarUsers, users } from "./modules/users/users.js";
import {loginStatus} from "./modules/login/loginStatus.js"

cargarUsers();



// Si el usuario esta logeado, entonces muestra una pantalla u otra
const pantallaLogin = ()=>{
    const login = document.querySelector('.login');
    const logeado = document.querySelector('.logeado');
    if (loginStatus()) {
        login.classList.add('d-none');
        logeado.classList.remove('d-none');
    } else {
        login.classList.remove('d-none');
        logeado.classList.add('d-none');
    }
}

pantallaLogin();

const btnLogin = document.querySelector('#login');
const btnLogout = document.querySelector('#logout')


btnLogin.addEventListener('click', (e) => {
    e.preventDefault();


    if (validarLogin()) {
        user.value = pass.value = ''
        pantallaLogin();
    }
})

// Cierra sesion / Elimina 
btnLogout.addEventListener('click', (e) => {
    e.preventDefault();
    loginStatus('logout')
    pantallaLogin();
})



// Valida el login y retorna true/false si hubo o no exito
const validarLogin = () => {
    const [userLog] = users.filter(u => u.nombre === user.value && u.pass === pass.value)

    if (userLog) {
        const nombre = userLog.user;
        localStorage.removeItem('userLogeado')
        localStorage.setItem('userLogeado', JSON.stringify(userLog));
        return true;
    } else {
        alert('Usuario y/o contraseña inválidos', 'hi')
        return false;
    }
}

export {loginStatus}