import React from "react";
import '../css/Card.css';
import {Link} from "react-router-dom";
import { ReactComponent as VectorNew} from "../assets/vectorNew.svg";

const CardContacto = (props)  => {
    return (
      <div>
            <div key={props.id} className="BodyCard">
                <h3>{`${props.name} ${props.lastname}`}</h3>
                <p>{props.dir}</p>
                <p>{props.city}</p>
                <p>{props.email}</p>
                <p>{props.cell}</p>
                <p>{props.tel}</p>
                <Link to={`/agenda/editar/${props.id}`}>
                  <div className="EditBody">
                    <p>Editar</p>
                  </div>
                </Link>
                <div className="EditBody">
                  <p onClick={props.onClick}>Eliminar</p>
                </div>
            </div>
      </div>
    );
};

const CardNew = () => {
  return(<>
      <div className="BodyCard">
        <Link to={`/agenda/crear`}>
          <VectorNew/>
        </Link>
        <h4 className="text-center">Agrega un nuevo Contacto</h4>
      </div>
  </>)
};

export {CardContacto, CardNew};
