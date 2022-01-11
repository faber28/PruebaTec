import React, { useState} from "react";
import '../css/login.css';
import {iniciarSesion } from '../utils/api.js';
import ReactLoading from 'react-loading';
import {Link} from "react-router-dom";

export default function Login () {
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem('Token');

    const submitForm = async (e) => {
        
        e.preventDefault();
        console.log("click!!")

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
              localStorage.setItem('Logeado', true)
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
  if (token !== ""){
    window.location.href="./agenda"
    return(
      <div className="loading">
        <ReactLoading color="blue" type='spin' height={300} width={300}/>
      </div>
    );
  }else{
    return (
      <div className="BodyLogin">
          <div className="login">
              <h1>Iniciar Sesión</h1>
              <form onSubmit={submitForm}>
                  <label htmlFor="usuario">Correo electrónico</label>
                  <input id="txtEmail" type="text" placeholder="Ingresa tu correo..."/>
                  <label htmlFor="contraseña">Password</label>
                  <input id="txtPassword" type="password" placeholder="Escribe tu contraseña..."/>
                  <button 
                    disabled={!loading} 
                    type="submit" 
                    name="button" 
                    className="btnLoading">
                      {loading ? 'Iniciar Sesión' : 
                      <ReactLoading type='spin' height={30} width={30}/>}
                  </button>
                  <Link to="/usuario/crear">
                    <button type="button" name="button">Crear una cuenta</button>
                  </Link>
              </form>
          </div>
      </div>
    );
  }
};