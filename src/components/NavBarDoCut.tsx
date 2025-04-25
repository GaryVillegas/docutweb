import { Navbar, Container } from "react-bootstrap";
import styles from "../views/Home.module.css";
import { Link } from "react-router-dom";

export const NabBarDoCut = () => {
  return (
    <Navbar>
      <Container fluid>
        <Navbar.Brand>
          <img
            src="/src/assets/docutlogo.svg"
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
