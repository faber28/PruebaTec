import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import {findOneContact} from "../utils/api";

export default function EditContact() {
    const {id} = useParams();
    const Logeado = localStorage.getItem('Logeado');
    const token = localStorage.getItem('Token');
    const [contacto, setContacto] = useState([{
        nombres: null,
        apellidos: null,
        direccion: null,
        celular: null,
        telefono: null,
        correo: null
    }]);

    useEffect(() => {
        findOneContact(id,token,(response)=>{
            setContacto(response.data);
        })
    })

    const submitForm = async (e) => {

    }

    if(Logeado === "true"){
        return (
            <div className="BodyContacto">
                <div className="Contacto">
                    <h1>Editar Contacto</h1>
                    <form onSubmit={submitForm} className="Conten">
                        <div>
                            <label htmlFor="usuario">Nombres</label>
                            <input id="txtName" type="text" defaultValue={contacto.nombres}/>
                        </div>
                        <div>
                            <label htmlFor="usuario">Apellidos</label>
                            <input id="txtLast" type="text" defaultValue={contacto.apellidos}/>
                        </div>
                        <div>
                            <label htmlFor="usuario">Dirección</label>
                            <input id="txtDir" type="text" defaultValue={contacto.direccion}/>
                        </div>
                        <div>
                            <label htmlFor="usuario">Celular</label>
                            <input id="txtCel" type="text" defaultValue={contacto.celular}/>
                        </div>
                        <div>
                            <label htmlFor="usuario">Telefono</label>
                            <input id="txtTel" type="text" defaultValue={contacto.telefono}/>
                        </div>
                        <div>
                            <label htmlFor="usuario">Correo electrónico</label>
                            <input id="txtEmail" type="text" defaultValue={contacto.correo}/>
                        </div>
                        <button type="submit" name="button">Guardar</button>
                        <Link to="/agenda">
                            <button name="button">Cancelar</button>
                        </Link>
                    </form>
                </div>
            </div>
          );
    }else{
        return(
            <>
                <div Style="width:100%; display: flex; align-items: center; justify-content: center; flex-direction: column;">
                    <h2>No has iniciado sesión, por favor inicia o crea una cuenta nueva!</h2>
                    <Link to="/">
                        <button type="button" name="button">Iniciar Sesión</button>
                    </Link>
                    <Link to="/usuario/crear">
                        <button type="button" name="button">Crear una cuenta</button>
                    </Link>
                </div>
            </>
          );
    }

}