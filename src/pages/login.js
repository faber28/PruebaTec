import React, { useState} from "react";
import '../css/login.css';
import {iniciarSesion } from '../utils/api.js';
import ReactLoading from 'react-loading';

export default function Login () {
    const [loading, setLoading] = useState([false]);

    const submitForm = async (e) => {
        
        e.preventDefault();

        let email = document.getElementById('txtEmail').value;
        let password = document.getElementById('txtPassword').value;
    
        await iniciarSesion(
          {
          email: email,
          password: password
        },
          (response) => {
            if(!response.data.error) {
              localStorage.setItem('Token', response.data.success)
              localStorage.setItem('idUser', response.data.data.idUser)
              setLoading(false)
              window.location.href="./agenda"
            }else if(response.status !== 200){
                setLoading(false)
            }else{
                setLoading(true)
                alert(response.data.error);;
            }
            e.target.reset();
          }
        );
        
      };
  return (
    <div className="BodyLogin">
        <div class="login">
            <h1>Iniciar Sesión</h1>
            <form onSubmit={submitForm}>
                <label for="usuario">Correo electrónico</label>
                <input id="txtEmail" type="text" placeholder="Ingresa tu correo..."/>
                <label for="contraseña">Password</label>
                <input id="txtPassword" type="password" placeholder="Escribe tu contraseña..."/>
                <button 
                  disabled={false} 
                  type="submit" 
                  name="button" 
                  className="btnLoading">
                    {loading ? 'Iniciar Sesion' : 
                    <ReactLoading type='spin' heigth={30} width={30}/>}
                </button>
                <button type="button" name="button">Crear una cuenta</button>
            </form>
        </div>
    </div>
  );
};