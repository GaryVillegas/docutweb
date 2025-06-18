import { Navbar, Container } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import styles from "./../App.module.css";
import docutLogo from "./../assets/docutlogo.svg";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import type { userData } from "../types/user.type";
import { useMessageContext } from "../context/MessageContext";
import storeService from "../services/store.service";
import { Spin, Dropdown, Space } from "antd";
import authenticationService from "../services/authentication.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

export const NabBarDoCut = () => {
  const { user, loading } = useAuth();
  const [userData, setUserData] = useState<userData>();
  const { showMessage } = useMessageContext();
  if (!user) return;
  useEffect(() => {
    const fetchUserData = async (userUID: string) => {
      try {
        console.log("🚀 INICIANDO: Buscando datos del usuario:", userUID);

        const result = await storeService.getUserData(userUID);

        console.log("📦 DATOS RECIBIDOS:", result);
        console.log(
          "📦 DATOS RECIBIDOS (tabla):",
          console.table ? console.table(result) : result
        );

        if (result) {
          console.log("✅ ÉXITO: Datos guardados en userData");
          setUserData(result);
        } else {
          console.log("❌ ERROR: No se recibieron datos");
        }
      } catch (error) {
        console.log("💥 ERROR CRÍTICO:", error);
        showMessage(`${error}`, "error");
      }
    };

    if (user?.uid) {
      console.log("👤 USUARIO ENCONTRADO:", user.uid);
      fetchUserData(user.uid);
    } else {
      console.log("❌ NO HAY USUARIO LOGUEADO");
    }
  }, [user?.uid, showMessage]);

  const items = [
    {
      key: "1",
      danger: true,
      label: "logout",
      icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
    },
  ];

  const handleMenuClick = (e: any) => {
    if (e.key === "1") {
      authenticationService.logOut();
      console.log("Cerrando sesión. . .");
      return <Navigate to={"/Web"} replace />;
    }
  };

  if (loading) return <Spin fullscreen size="large" />;

  return (
    <Navbar>
      <Container fluid>
        <Navbar.Brand>
          <img
            src={docutLogo}
            alt="docutlogo"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          DoCut
        </Navbar.Brand>
        {userData ? (
          <Dropdown
            menu={{ items, onClick: handleMenuClick }}
            trigger={["click"]}
            placement="bottomRight"
          >
            <Space>
              {userData.userInfo.name} {userData.userInfo.lastName}
              <FontAwesomeIcon icon={faAngleDown} />
            </Space>
          </Dropdown>
        ) : (
          <Link to={"/login"} className={styles.loginButton}>
            Iniciar Sesion
          </Link>
        )}
      </Container>
    </Navbar>
  );
};
