import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./../App.module.css";
import docutLogo from "./../assets/docutlogo.svg";
import { useAuth } from "../context/AuthContext";
import { Spin } from "antd";

export const NabBarDoCut = () => {
  const { user, loading } = useAuth();
  if (!user) return;

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
        <Link to={"/login"} className={styles.loginButton}>
          Iniciar Sesion
        </Link>
      </Container>
    </Navbar>
  );
};
