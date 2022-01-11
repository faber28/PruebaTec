import './css/App.css';
import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/login";
import Contacto from "./pages/contactos";
import EditContact from "./pages/EditarContacto";
import CreateContact from "./pages/CrearContacto";
import CreateUser from "./pages/registro";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/usuario/crear" element={<CreateUser/>}/>
        <Route exact path="/agenda" element={<Contacto/>}/>
        <Route exact path="/agenda/editar/:id" element={<EditContact/>}/>
        <Route exact path="/agenda/crear/" element={<CreateContact/>}/>
      </Routes>
    </BrowserRouter>
  );
}
