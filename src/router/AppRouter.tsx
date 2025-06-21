import { Route, Routes } from "react-router-dom";
import { Web } from "./../views/Web";
import { Login } from "../views/auth/Login";
import { Home } from "../views/Home";
import { Register } from "../views/auth/Register";
import PrivateRoute from "../context/PrivateRoute";
import { UserInfo } from "../views/auth/UserInfo";
import { Layout } from "../views/Layout";
import { Team } from "../views/Team";
import { Stock } from "../views/Stock";
import { Service } from "../views/Service";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Web />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/UserInfo"
        element={
          <PrivateRoute>
            <UserInfo />
          </PrivateRoute>
        }
      />
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Layout>
              <Home />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/team"
        element={
          <PrivateRoute>
            <Layout>
              <Team />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/stock"
        element={
          <PrivateRoute>
            <Layout>
              <Stock />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/service"
        element={
          <PrivateRoute>
            <Layout>
              <Service />
            </Layout>
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
