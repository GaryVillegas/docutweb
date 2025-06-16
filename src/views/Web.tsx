import { NabBarDoCut } from "../components/NavBarDoCut";
import styles from "./Web.module.css";
import docutLogo from "../assets/ChatGPT Image 16 jun 2025, 01_21_36.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faChartBar } from "@fortawesome/free-solid-svg-icons";
import { faAndroid, faApple } from "@fortawesome/free-brands-svg-icons";

export const Web = () => {
  return (
    <div className={styles.container}>
      <NabBarDoCut />

      <div className={styles.grid}>
       
        <div className={styles.card1}>
          <img src={docutLogo} alt="DoCut logo" className={styles.logo} />
        </div>

       
        <div className={styles.card2}>
          <div className={styles.storeIcons}>
            <FontAwesomeIcon icon={faAndroid} size="2x" />
            <FontAwesomeIcon icon={faApple} size="2x" />
          </div>

          <h3 className={styles.titulo}>Administra bien tu barbería</h3>
          <p className={styles.descripcion}>
            Controla tus horarios, servicios y personal desde un solo lugar.
            Optimiza tu tiempo y haz crecer tu negocio.
          </p>
          <button className={styles.boton}>¡Comenzar ahora!</button>
        </div>

       
        <div className={styles.card3}>
          <FontAwesomeIcon icon={faCalendarCheck} size="lg" color="#4b2aad" />
          <h3>Citas de hoy</h3>
          <p>Revisa rápidamente quién viene hoy y a qué hora.</p>
        </div>

        
        <div className={styles.card5}>
          <FontAwesomeIcon icon={faChartBar} size="lg" color="#4b2aad" />
          <h3>Estadísticas</h3>
          <p>Visualiza el rendimiento de tu barbería con datos clave.</p>
        </div>
      </div>
    </div>
  );
};
