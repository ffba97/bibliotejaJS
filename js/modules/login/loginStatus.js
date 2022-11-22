// Verifica si el usuario está o no logeado. Cambia el estado de logeado a deslogear
export const loginStatus = (acion) => {
    // Si no hay ninguna accion, entonces se devuelve el usuario logeado (si existe)
    if (!acion) {
        const userLogeado = JSON.parse(localStorage.getItem('userLogeado'));

        if (localStorage.getItem('userLogeado')) {
            return userLogeado;
        }
    } else if (acion=='logout'){
        localStorage.removeItem('userLogeado');
    }
    return false;
}