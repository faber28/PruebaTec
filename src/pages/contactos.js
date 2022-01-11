import React, { useState, useEffect} from "react";
import '../css/App.css';
import {CardContacto, CardNew} from '../components/Card';
import {obtenerContactos, eliminarContacto} from "../utils/api";
import { ReactComponent as Exit} from "../assets/exit.svg";
import {Link} from "react-router-dom";

export default function Contacto() {
  return (
    <ObtenerDatos/>
  );
};

const ObtenerDatos = () => {
  const [contacto, setContactos] = useState([]);
  const [errorToken, setErrorToken] = useState([]);
  const token = localStorage.getItem('Token');

  const eliminar = async (id) => {
    await eliminarContacto(id, token, (response) => {
      alert(response.data.success)
    })
  }

  useEffect(() => {
    obtenerContactos(token,
      (response) => {
        if(response.data.error){
          setErrorToken(response.data.error)
          localStorage.setItem('Token', "")
        }else{
          setContactos(response.data)
        }
      }
    );
  });

  return (
    <div className="App">
      <nav className="NavBar">
        <h2>Agenda de contactos</h2>
        {errorToken.length < 1 ? <Exit className="btnSalir" onClick={()=>{
          if(window.confirm("¿Está seguro de cerrar sesión?")){
            localStorage.setItem('Token', "")
            localStorage.setItem('Logeado', "false")
            window.location.href="/"
          }
        }}/> : <></>}
      </nav>
      <div className="Cuerpo">
        <div className="Contenio">
          {errorToken.length < 1 ? (<div className="Contenido">
            <CardNew/>
            {contacto.map((e)=>{
            return (
              <CardContacto
                id={e.id} 
                onClick={()=>{
                  if(window.confirm("Está seguro de eliminar este contacto?")){
                    eliminar(e.id);
                  }}
                }
                name={e.nombres} 
                lastname={e.apellidos} 
                cell={e.celular} 
                tel={e.telefono}
                dir={e.direccion}
                email={e.correo}/>
            );
          })}
          </div>) : 
          (<>
            <div Style="width:100%;">
              <h2>No has iniciado sesión, por favor inicia o crea una cuenta nueva!</h2>
              <Link to="/">
                <button type="button" name="button">Iniciar Sesión</button>
              </Link>
              <Link to="/usuario/crear">
                <button type="button" name="button">Crear una cuenta</button>
              </Link>
            </div>
          </>)}
        </div>
      </div>
    </div>
  );
} 