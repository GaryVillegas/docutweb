import React, { useState } from "react";
import styles from "./Correo.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "../../firebase"; 
import { createUserWithEmailAndPassword } from "firebase/auth";

export const Correo = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistro = async () => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;

    // Guarda el UID en localStorage (para las siguientes vistas)
    localStorage.setItem("uidUsuarioNuevo", uid);

    // También puedes guardar email/contraseña si quieres re-usarlos
    localStorage.setItem("emailUsuarioNuevo", email);
    localStorage.setItem("passwordUsuarioNuevo", password);

    // Redirigir a la vista de Registro (Datos Usuario)
    navigate("/Registro");
  } catch (error) {
    console.error("❌ Error al crear usuario:", error);
  }
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
            <span className={styles.etiquetaPaso}>Correo y Contraseña</span>
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

        <h2 className={styles.titulo}>Correo y Contraseña</h2>

        <form className={styles.formulario} onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>

        <div className={styles.botones}>
          <button className={styles.btnCancelar} onClick={() => navigate("/")}>
            Cancelar
          </button>
          <button className={styles.btnSiguiente} onClick={handleRegistro}>
  Siguiente
</button>

        </div>
      </div>
    </div>
  );
};
