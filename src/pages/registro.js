import React from "react";
import '../css/Crear.css';
import {crearUsuario }from '../utils/api.js';
import {Link} from "react-router-dom";

export default function CreateUser () {

    const submitForm = async (e) => {
        
        e.preventDefault();

        let username = document.getElementById('txtName').value;
        let password = document.getElementById('txtPassword').value;
        let email = document.getElementById('txtEmail').value;
        let idUser = document.getElementById('txtIduser').value;
    
        await crearUsuario(
          {
              idUser: idUser,
              username: username,
              password: password,
              email: email,
        },
          (response) => {
            if(response.data.motivo) {
                response.data.motivo.map((m) => {
                    const msg = m.msg
                    console.log("motivo: ", msg);
                });
            }else{
                alert("usuario creado con exito!")
                window.location.href="/"
                e.target.reset();
            }
          }
        );
        
      };
  return (
    <div className="BodyContacto">
        <div class="Contacto">
            <h1>Crear Cuenta</h1>
            <form onSubmit={submitForm} className="Conten">
                <div>
                    <label htmlFor="id">Identificación</label>
                    <input required id="txtIduser" type="text" placeholder="Identificación..."/>
                </div>
                <div>
                    <label htmlFor="usuario">Nombre de Usuario</label>
                    <input required id="txtName" type="text" placeholder="Nombre de usuario..."/>
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input required id="txtPassword" type="password" placeholder="Contraseña..."/>
                </div>
                <div>
                    <label htmlFor="correo">Correo electrónico</label>
                    <input required id="txtEmail" type="text" placeholder="Correo..."/>
                </div>
                <button type="submit" name="button">Crear Cuenta</button>
                <div>
                    <Link to="/">
                        <button name="button">Cancelar</button>
                    </Link>
                </div>
            </form>
        </div>
    </div>
  );    
};