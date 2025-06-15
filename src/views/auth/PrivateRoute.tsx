import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Spin } from "antd";
import type { JSX } from "react";

export default function PrivateRoute({ children }: { children: JSX.Element }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <Spin size="large" fullscreen />;
  }

  // Asegúrate de que user sea estrictamente distinto de null
  if (!user) {
    console.log("🔒 Usuario no autenticado, redirigiendo...");
    return <Navigate to="/login" replace />;
  }

  return children;
}
