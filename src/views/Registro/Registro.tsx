import React from "react";
import styles from "./registro.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Registro = () => {
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
    <span className={styles.etiquetaPaso}>Datos Usuario</span>
  </div>
  <div className={styles.paso}>
    <span className={styles.punto}></span>
    <span className={styles.etiquetaPasoInvisible}>.</span>
  </div>
  <div className={styles.paso}>
    <span className={styles.punto}></span>
    <span className={styles.etiquetaPasoInvisible}>.</span>
  </div>
</div>




        <h2 className={styles.titulo}>Datos Usuario</h2>

        <form className={styles.formulario}>
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Apellido" />
          <input type="text" placeholder="Rut" />
        </form>

        <div className={styles.botones}>
          <button className={styles.btnCancelar} onClick={() => navigate("/home")}>
            Cancelar
          </button>
          <button className={styles.btnSiguiente} onClick={() => navigate("/registronegocio")}>
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};
