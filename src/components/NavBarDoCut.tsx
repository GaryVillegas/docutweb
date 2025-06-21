import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./../App.module.css";
import docutLogo from "./../assets/docutlogo.svg";
import { useAuth } from "../context/AuthContext";
import { Spin } from "antd";
import { useManageUser } from "../hooks/useManageUser";
import { useEffect } from "react";
import { Dropdown, Space } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faAngleDown,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { Navigate } from "react-router-dom";
import authenticationService from "../services/authentication.service";

type userProps = {
  userUID: string | null;
};

export const NabBarDoCut = ({ userUID }: userProps) => {
  const { user, loading } = useAuth();
  const { getUserData, fetchUserData } = useManageUser();

  useEffect(() => {
    if (userUID) {
      fetchUserData(userUID);
    }
  }, [user]);

  if (loading) return <Spin fullscreen size="large" />;

  const items = [
    {
      key: "1",
      label: "configurar perfil",
      icon: <FontAwesomeIcon icon={faGear} />,
    },
    {
      key: "2",
      danger: true,
      label: "Salir",
      icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
    },
  ];

  const handleMenuClick = (e: any) => {
    if (e.key === "2") {
      authenticationService.logOut();
      console.log("Cerrando sesión. . .");
      return <Navigate to={"/Web"} replace />;
    }
  };

  return (
    <Navbar style={{ borderBottom: "0.5px solid var(--Secondary-Color)" }}>
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
        {user ? (
          <Dropdown menu={{ items, onClick: handleMenuClick }}>
            <Space>
              {getUserData?.userInfo.name} {getUserData?.userInfo.lastName}
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
