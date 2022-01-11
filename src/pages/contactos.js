import React, { useState, useEffect} from "react";
import '../css/App.css';
import {CardContacto, CardNew} from '../components/Card';
import {obtenerContactos, eliminarContacto} from "../utils/api";

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
        }else{
          setContactos(response.data)
        }
      }
    );
  });

  return (
    <div className="App">
      <nav className="NavBar">Agenda de contactos</nav>
      <div className="Cuerpo">
        <div className="Contenido">
          <CardNew/>
          {errorToken.length < 1 ? (<>
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
          </>) : errorToken}
          {/*  */}
        </div>
      </div>
    </div>
  );
} 