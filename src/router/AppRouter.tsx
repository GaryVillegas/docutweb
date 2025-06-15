import { Route, Routes } from "react-router-dom";
import { Web } from "./../views/Web";
import { Login } from "../views/auth/Login";
import { Home } from "../views/Home";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Web />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};
