import mockupDocut from "../assets/mockupDocut.svg"; //importa la imagen
import imgquien from "../assets/imgfin.jpeg";
import img from "../assets/imgcreada.jpeg";
import contac from "../assets/contacto2.png";
import styles from "./Home.module.css"; //Este es un archivo css
import { NabBarDoCut } from "../components/NavBarDoCut";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { FaUserCog } from "react-icons/fa";
import { FaSearch, FaCreditCard } from "react-icons/fa";
import { FaCalendarCheck, FaCut, FaMobileAlt } from "react-icons/fa";





export const Home = () => {
  return (
    <div className={styles.fullScreen}>
      <NabBarDoCut />
      <div className={styles.container}>
        <div className={styles.col_left}>
          <Link to="/" className={`${styles.row} ${styles.row1}`}>
            <h2
              style={{
                fontWeight: "bold",
                textAlign: "center",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              Descarga Nuestra App!!{" "}
              <FontAwesomeIcon icon={faSquareArrowUpRight} />{" "}
            </h2>
            <p
              style={{
                fontSize: "20px",
                textAlign: "center",
                paddingTop: "10px",
              }}
            >
              Al crear una cuenta de administrador, puedes manejar tus servicios
              como estilista y tener un mejor orden gracias a nuestra app y su
              ambiente de escritorio web.
              
              
            </p>
            <img
              src={mockupDocut}
              alt="mockup"
              className={styles.rotateImage}
            />
          </Link>
          <div className={`${styles.quien} ${styles.rowquien}`}>
                <h2 className={styles.tituloCard}><h2 className={styles.tituloCard}>
                <FaCalendarCheck style={{ marginRight: "8px" }} />
                Reserva en segundos tu barbería favorita
                <FaCut style={{ margin: "0 8px" }} />
                desde tu celular
                <FaMobileAlt style={{ marginLeft: "8px" }} />
              </h2>
              
              </h2>
              
 
                <div className={styles.marcoImagenquien}>
                <img
                  src={img}
                  alt="Quiénes somos"
                  className={styles.imagenCard}
                />
                </div>
          </div>
        </div>
        <div className={styles.col_right}>
          <div className={`${styles.descubre} ${styles.tendencia}`}>
              <div className={styles.textoTendencia}>
                <h2 className={styles.tituloCard}><h2 className={styles.tituloCard}>
              <FaSearch style={{ marginRight: "8px" }} />
              Descubre las tendencias{" "}
              <FaCreditCard style={{ marginLeft: "8px" }} />
            </h2>
              </h2>
                <p className={styles.textoCard}>
                  Tu estilo comienza aquí. Revisa nuestros servicios y reservas al instante y realiza tus pagos de forma segura.
                </p>
              </div>
                  <div className={styles.marcoImagen}>
                    <img
                      src={imgquien}
                      alt="imagen"
                      className={styles.imagen}
                    />
                  </div>
              </div>


          <Link to="/" className={`${styles.row} ${styles.bottom}`}>
                <div className={styles.textoTendencia}>
                  <h2 className={styles.tituloCard}><h2 className={styles.tituloCard}>
                <FaUserCog style={{ marginRight: "10px" }} />
                Administra bien tu barbería
              </h2>
              </h2>
                  <p className={styles.textoCard}>
                    Gestion de citas y negocios
                  </p>
                </div>
              <div className={styles.marcoImagen}>
                <img
                  src={contac} 
                  alt="Contáctanos"
                  className={styles.imagen}
                />
              </div>
              </Link>

        </div>
      </div>
    </div>
  );
};