import { Route, Routes } from "react-router-dom";
import { Web } from "./../views/Web";
import { Login } from "../views/auth/Login";
import { Home } from "../views/Home";
import { Register } from "../views/auth/Register";
import PrivateRoute from "../views/auth/PrivateRoute";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Web />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
