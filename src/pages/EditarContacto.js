import React from "react";
import {useParams} from "react-router-dom";

export default function EditContact() {
    const {id} = useParams();

    return (
        <>este es el id a editar: {id}</>
    );

}