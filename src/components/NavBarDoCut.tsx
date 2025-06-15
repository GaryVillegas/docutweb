import { Navbar, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import styles from "./../App.module.css";
import docutLogo from "./../assets/docutlogo.svg";
import { useAuth } from "../context/AuthContext";
import { useUserManagment } from "../hooks/useUserManagment";
import { useEffect } from "react";
import { Dropdown, Space } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import authenticationService from "../services/authentication.service";

export const NabBarDoCut = () => {
  const { user } = useAuth();
  const { userInfo, fetchUser } = useUserManagment();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await authenticationService.logOut();
    navigate("/login");
  };

  const items = [
    {
      key: "1",
      label: "Cerrar Sesion",
      icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
      danger: true,
      onClick: handleLogout,
    },
  ];

  useEffect(() => {
    if (user) {
      fetchUser(user.uid);
    }
  }, [user]);

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
        {user ? (
          <Dropdown menu={{ items }}>
            <Space>
              {userInfo?.userInfo?.name || "Nombre no disponible"}{" "}
              {userInfo?.userInfo?.lastName || ""}
              <FontAwesomeIcon icon={faChevronDown} />
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
