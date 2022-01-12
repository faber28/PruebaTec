import axios from 'axios';

const database = "http://localhost:5000";
const idUser = localStorage.getItem('idUser');

export const iniciarSesion = async(datos, successCallback) => {

    const options = {
        method: 'POST',
        url: `${database}/user/login`,
        data: {
            email: datos.email,
            password: datos.password
        }
    };
    await axios.request(options).then(successCallback);
};

export const crearUsuario = async(datos, successCallback) => {

    const options = {
        method: 'POST',
        url: `${database}/user/registro`,
        data: {
            idUser: datos.idUser,
            username: datos.username,
            email: datos.email,
            password: datos.password
        }
    };
    await axios.request(options).then(successCallback);
};

export const obtenerContactos = async(token, successCallback) => {

    const options = {
        method: 'GET',
        url: `${database}/contacto/${idUser}`,
        headers: {usertoken: token}
    };
    await axios.request(options).then(successCallback);
};

export const findOneContact = async(id, token, successCallback) => {
    const options = {
        method: 'GET',
        url: `${database}/contacto/editar/${id}`,
        headers: {usertoken: token}
    };
    await axios.request(options).then(successCallback);
};

export const eliminarContacto = async(id, token, successCallback) => {

    const options = {
        method: 'DELETE',
        url: `${database}/contacto/${id}`,
        headers: {usertoken: token}
    };
    await axios.request(options).then(successCallback);
};

export const agregarContacto = async(datos, token, successCallback) => {

    const options = {
        method: 'POST',
        url: `${database}/contacto/`,
        headers: {usertoken: token},
        data: {
            idUser: idUser,
            nombres: datos.nombres,
            apellidos: datos.apellidos,
            direccion: datos.direccion,
            celular: datos.celular,
            telefono: datos.telefono,
            correo: datos.email
        } 
    };
    await axios.request(options).then(successCallback);
};

export const editarContacto = async(id, datos, token, successCallback) => {

    const options = {
        method: 'PUT',
        url: `${database}/contacto/${id}`,
        headers: {usertoken: token},
        data: {
            idUser: idUser,
            nombres: datos.nombres,
            apellidos: datos.apellidos,
            direccion: datos.direccion,
            celular: datos.celular,
            telefono: datos.telefono,
            correo: datos.email
        } 
    };
    await axios.request(options).then(successCallback);
};
