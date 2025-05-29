import mockupDocut from "../assets/mockupDocut.svg"; //importa la imagen
import imgquien from "../assets/imgfin.jpeg";
import img from "../assets/imgcreada.jpeg";
import contac from "../assets/contacto2.png";
import styles from "./Home.module.css"; //Este es un archivo css
import { NabBarDoCut } from "../components/NavBarDoCut";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";


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
              <br />
              <span>DoCut La mejor forma de agendar citas.</span> <br />
              <span>Bonito, Rápido y Seguro.</span> <br />
            </p>
            <img
              src={mockupDocut}
              alt="mockup"
              className={styles.rotateImage}
            />
          </Link>
          <div className={`${styles.quien} ${styles.rowquien}`}>
  <h2 className={styles.tituloCard}>Quiénes somos.</h2>
  <p className={styles.textoCard}>
    Tu estilo comienza aquí. Revisa nuestros servicios y reserva al instante.
  </p>
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
    <h2 className={styles.tituloCard}>Descubre las tendencias.</h2>
    <p className={styles.textoCard}>
      Tu estilo comienza aquí. Revisa nuestros servicios y reservas al instante.
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
    <h2 className={styles.tituloCard}>Contáctanos.</h2>
    <p className={styles.textoCard}>
      Agenda una cita o escríbenos para más información.
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