import mockupDocut from "../assets/mockupDocut.svg";
import { Card } from "antd";
import styles from "./Home.module.css";
import { Container } from "react-bootstrap";
import { NabBarDoCut } from "../components/NavBarDoCut";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className={styles.fullScreen}>
      <NabBarDoCut />
      <Container fluid className={styles.bentoContainer}>
        <div className={styles.bentoItem}>
          <Card className={`${styles.cardSpace} ${styles.cardOne}`}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <h3 style={{ color: "#ffffff", fontWeight: "bold" }}>
                Descarga DoCut!
              </h3>
              <p
                style={{
                  color: "#ffffff",
                  fontSize: "20px",
                  marginTop: "25px",
                }}
              >
                Descarga nuestra aplicación y prueba la mejor forma de mantener
                tu negocio ordenado.
              </p>
            </Link>
          </Card>
        </div>
        <div className={styles.bentoItem}>
          <Card className={`${styles.cardSpace} ${styles.cardTwo}`}>
            <h3>View our blog</h3>
          </Card>
        </div>
        <div className={styles.bentoItem}>
          <Card className={`${styles.cardSpace} ${styles.cardThree}`}>
            <h3>About us</h3>
          </Card>
        </div>
      </Container>
    </div>
  );
};
