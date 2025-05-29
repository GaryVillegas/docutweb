import { Route, Routes } from "react-router-dom";
import { Home } from "../views/Home";
import { Login } from "../views/Registro/Login";
import { Registro } from "../views/Registro/Registro";
import { RegistroNegocio } from "../views/Registro/RegistroNegocio";
import { RegistroCreado } from "../views/Registro/RegistroCreado";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/registronegocio" element={<RegistroNegocio />} />
      <Route path="/registrocreado" element={<RegistroCreado />} />
      
    </Routes>
  );
};
