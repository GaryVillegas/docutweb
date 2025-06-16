import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./../App.module.css";
import docutLogo from "./../assets/docutlogo.svg";

export const NabBarDoCut = () => {
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
