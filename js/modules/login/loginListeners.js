import { loginStatus } from "./loginStatus.js";
import { users } from "../users/users.js";

// Si el usuario esta logeado, entonces muestra una pantalla u otra
const pantallaLogin = () => {
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

// Si el usuario esta logeado, entonces muestra una pantalla u otra
const loginListener = (e) => {
    e.preventDefault();
    if (validarLogin()) {
        user.value = pass.value = ''
    }
}

const logoutLister = (e) => {
    (e) => {
        e.preventDefault();
        loginStatus('logout')
    }
}

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

export {pantallaLogin, logoutLister, loginListener}
