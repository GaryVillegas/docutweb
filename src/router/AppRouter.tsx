import { Route, Routes } from "react-router-dom";
import { Home } from "../views/Home";
import { Login } from "../views/Registro/Login";
import { Registro } from "../views/Registro/Registro";
import { RegistroNegocio } from "../views/Registro/RegistroNegocio";
import { RegistroCreado } from "../views/Registro/RegistroCreado";
import { InicioAdministrador } from "../views/Registro/InicioSecionAD/InicioAdministrador";
import { CambiarDatos } from "../views/Registro/InicioSecionAD/CambiarDatos";
import { CambiarContrasena } from "../views/Registro/InicioSecionAD/CambiarContrasena";
import { Mensaje } from "../views/Registro/InicioSecionAD/Mensaje";
import { Stock } from "../views/Registro/InicioSecionAD/Stock";
import { Citas } from "../views/Registro/InicioSecionAD/Citas";
import { Correo } from "../views/Registro/Correo";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/registronegocio" element={<RegistroNegocio />} />
      <Route path="/registrocreado" element={<RegistroCreado />} />
      <Route path="/inicioadministrador" element={<InicioAdministrador />} />
      <Route path="/cambiardatos" element={< CambiarDatos/>} />
      <Route path="/cambiarcontrasena" element={< CambiarContrasena/>} />
      <Route path="/mensaje" element={< Mensaje/>} />
       <Route path="/stock" element={< Stock/>} />
       <Route path="/citas" element={< Citas/>} />
        <Route path="/correo" element={< Correo/>} />
      
    </Routes>
  );
};
