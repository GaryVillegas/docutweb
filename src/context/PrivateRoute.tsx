"use client";

import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { Spin } from "antd";
import { useState, useEffect, type JSX } from "react";
import type { userData } from "../types/user.type";
import storeService from "../services/store.service";
import { useMessageContext } from "./MessageContext";

export default function PrivateRoute({ children }: { children: JSX.Element }) {
  const { user, loading } = useAuth();
  const { showMessage } = useMessageContext();
  const [userData, setUserData] = useState<userData | undefined>();
  const [userDataExists, setUserDataExists] = useState<boolean | null>(null); // null = no verificado aún
  const [dataLoading, setDataLoading] = useState(false);
  const [hasAttemptedFetch, setHasAttemptedFetch] = useState(false);

  useEffect(() => {
    if (!user || loading || hasAttemptedFetch) return;

    console.log("🔍 Intentando obtener datos del usuario:", user.uid);

    const fetchData = async () => {
      setDataLoading(true);
      setHasAttemptedFetch(true);

      try {
        const result = await storeService.getUserData(user.uid);
        console.log("✅ Datos del usuario obtenidos:", result);
        setUserData(result);
        setUserDataExists(true);
      } catch (error: any) {
        console.error("❌ Error fetching user data:", error);

        // Solo mostrar el mensaje de error una vez
        if (error.message === "🚫 service doesn't exit.") {
          console.log("🚫 Servicio no existe, redirigiendo a UserInfo");
          setUserDataExists(false);
        } else {
          showMessage(`Error: ${error.message || error}`, "error");
          setUserDataExists(false);
        }
      } finally {
        setDataLoading(false);
      }
    };

    fetchData();
  }, [user, loading, showMessage, hasAttemptedFetch]);

  // Mostrar loading mientras se verifica la autenticación o se cargan los datos
  if (loading || dataLoading || userDataExists === null) {
    return <Spin size="large" fullscreen />;
  }

  // Si no hay usuario, redirigir a login
  if (!user) {
    console.log("🔒 Usuario no autenticado, redirigiendo a login...");
    return <Navigate to="/login" replace />;
  }

  // Si no existen datos del usuario, redirigir a UserInfo
  if (userDataExists === false && !userData) {
    console.log("📝 Datos del usuario no existen, redirigiendo a UserInfo...");
    return <Navigate to="/UserInfo" replace />;
  }

  // Si llegamos aquí, todo está bien
  console.log("✅ Usuario autenticado y datos cargados, renderizando children");
  return children;
}
