import React from "react";
import '../css/Crear.css';
import {agregarContacto }from '../utils/api.js';
import {Link} from "react-router-dom";

export default function CreateContact () {

    const token = localStorage.getItem('Token');
    const idUser = localStorage.getItem('idUser');

    const submitForm = async (e) => {
        
        e.preventDefault();

        let name = document.getElementById('txtName').value;
        let lastName = document.getElementById('txtLast').value;
        let dir = document.getElementById('txtDir').value;
        let cel = document.getElementById('txtCel').value;
        let tel = document.getElementById('txtTel').value;
        let email = document.getElementById('txtEmail').value;
    
        await agregarContacto(
          {
              idUser: idUser,
              nombres: name,
              apellidos: lastName,
              direccion: dir,
              celular: cel,
              telefono: tel,
              email: email,
        },token,
          (response) => {
            if(!response.data.error) {
                alert("datos agregados")
              console.log("Datos enviados: ", response)
              window.location.href="/agenda"
            }else{
                alert(response.data.error)
            }
            e.target.reset();
          }
        );
        
      };
  return (
    <div className="BodyContacto">
        <div class="Contacto">
            <h1>Agregar Contacto</h1>
            <form onSubmit={submitForm} className="Conten">
                <div>
                    <label for="usuario">Nombres</label>
                    <input id="txtName" type="text" placeholder="Nombres..."/>
                </div>
                <div>
                    <label for="usuario">Apellidos</label>
                    <input id="txtLast" type="text" placeholder="Apellidos..."/>
                </div>
                <div>
                    <label for="usuario">Dirección</label>
                    <input id="txtDir" type="text" placeholder="Dirección..."/>
                </div>
                <div>
                    <label for="usuario">Celular</label>
                    <input id="txtCel" type="text" placeholder="Celular..."/>
                </div>
                <div>
                    <label for="usuario">Telefono</label>
                    <input id="txtTel" type="text" placeholder="Telefono..."/>
                </div>
                <div>
                    <label for="usuario">Correo electrónico</label>
                    <input id="txtEmail" type="text" placeholder="Correo..."/>
                </div>
                <button type="submit" name="button">Agregar</button>
                <Link to="/agenda">
                    <button name="button">Cancelar</button>
                </Link>
            </form>
        </div>
    </div>
  );    
};