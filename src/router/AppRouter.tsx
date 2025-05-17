import { Route, Routes } from "react-router-dom";
import { Home } from "../views/Home";
import { Login } from "../views/auth/Login";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
