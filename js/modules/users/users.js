let users = []
let id = 0
const crearUsuario = (nombre, pass, rol) => {
    users.push({
        id: id++,
        nombre,
        pass,
        rol: rol || 'user'
    });
    localStorage.removeItem('users');
    localStorage.setItem('users', JSON.stringify(users));
}

const getUser = (id) => {
    return users.map(u => u.id===id)
}

const defaultLoad = () => {
    const localUsers = JSON.parse(localStorage.getItem('users'));
    users = [];
    if (localUsers) {
        localUsers.forEach(u => users.push(u))
    } else {
        crearUsuario('admin', 'admin', 'admin');
        crearUsuario('user', '1234');
    }
}

const cargarUsers = () => {
    defaultLoad();
}

export { users, cargarUsers ,getUser}