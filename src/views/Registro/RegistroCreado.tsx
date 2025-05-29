
import styles from "./RegistroCreado.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import imgregistrado from "../../assets/registrado.png";


export const RegistroCreado = () => {
  const navigate = useNavigate();

  return (

    
    <div className={styles.fullScreen}>
      <Link to="../login" className={styles.botonvolver}>
  ← Volver
       </Link>
      <div className={styles.fondoCurvo}></div>

      <div className={styles.container}>
           <div className={styles.pasos}>
  <div className={styles.paso}>
    <span className={styles.punto1}></span>
    <span className={styles.etiquetaPasoInvisible}>.</span>
  </div>
  <div className={styles.paso}>
    <span className={styles.punto1}></span>
    <span className={styles.etiquetaPasoInvisible}>.</span>
  </div>
  <div className={styles.paso}>
    <span className={styles.punto1}></span>
     <span className={styles.etiquetaPaso}>Datos Registrados </span>
  </div>
</div>




        <h2 className={styles.titulo}>Tu negocio se ha <br /> creado</h2>
        <img
      src={imgregistrado}
      alt="imagen"
      className={styles.imagen}
    />
        <p>Para validar al 100% tu negocio, ingresa desde tu app para terminar el proceso completo.</p>
        <div className={styles.botones}>
          
          <button className={styles.btnSiguiente} onClick={() => navigate("/login")}>
            Iniciar sesión  
          </button>
        </div>

        
      </div>
    </div>
  );
};
