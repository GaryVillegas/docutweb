import React, { useState } from "react";
import styles from "./registro.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { db } from "../../firebase"; // Importa db
import { doc, setDoc } from "firebase/firestore";

export const Registro = () => {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [rut, setRut] = useState("");

 const handleGuardarDatosUsuario = () => {
  localStorage.setItem("nombreUsuarioNuevo", nombre);
  localStorage.setItem("apellidoUsuarioNuevo", apellido);
  localStorage.setItem("rutUsuarioNuevo", rut);

  navigate("/registronegocio");
};


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
            <span className={styles.etiquetaPaso}>.</span>
          </div>
          <div className={styles.paso}>
            <span className={styles.punto1}></span>
            <span className={styles.etiquetaPaso}>Datos Usuario</span>
          </div>
          <div className={styles.paso}>
            <span className={styles.punto}></span>
            <span className={styles.etiquetaPasoInvisible}>.</span>
          </div>
        </div>

        <h2 className={styles.titulo}>Datos Usuario</h2>

        <form className={styles.formulario} onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="text"
            placeholder="Apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
          <input
            type="text"
            placeholder="Rut"
            value={rut}
            onChange={(e) => setRut(e.target.value)}
          />
        </form>

        <div className={styles.botones}>
          <button className={styles.btnCancelar} onClick={() => navigate("/")}>
            Cancelar
          </button>
          <button className={styles.btnSiguiente} onClick={handleGuardarDatosUsuario}>
  Siguiente
</button>

        </div>
      </div>
    </div>
  );
};
