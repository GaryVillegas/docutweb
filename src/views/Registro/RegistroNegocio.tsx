import React, { useState } from "react";
import styles from "./RegistroNegocio.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { guardarUsuarioAdministrador } from "../../servicios/servicioUsuario";

export const RegistroNegocio = () => {
  const navigate = useNavigate();

  const [nombreNegocio, setNombreNegocio] = useState("");
  const [direccion, setDireccion] = useState("");

  const handleGuardarNegocio = async () => {
    try {
      // Recuperar el uid del usuario actual
      const uid = localStorage.getItem("uidUsuarioNuevo"); // <--- usa el uidUsuarioNuevo
      if (!uid) {
        alert("Error: No se encontró el UID del usuario.");
        return;
      }

      // Guardar datos en la colección 'stores'
      const storeRef = doc(db, "stores", uid); // el store tendrá el mismo id que el usuario
      await setDoc(storeRef, {
        nombreNegocio,
        direccion,
        idUsuario: uid,
      });

      console.log("✅ Datos del negocio guardados");

      // Guardar datos del usuario en 'users'
      const nombre = localStorage.getItem("nombreUsuarioNuevo") || "";
      const apellido = localStorage.getItem("apellidoUsuarioNuevo") || "";
      const rut = localStorage.getItem("rutUsuarioNuevo") || "";

      await guardarUsuarioAdministrador(uid, {
        name: nombre,
        lastName: apellido,
        rut: rut,
        type: "administrador", // siempre desde la web es administrador
      });

      console.log("✅ Usuario administrador guardado");

      // Ir a página final de éxito
      navigate("/registrocreado");
    } catch (error: any) {
      console.error("❌ Error al guardar datos:", error);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className={styles.fullScreen}>
      <Link to="../registro" className={styles.botonvolver}>
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
            <span className={styles.etiquetaPaso}>Datos Negocio</span>
          </div>
        </div>

        <h2 className={styles.titulo}>Datos Negocio</h2>

        <form className={styles.formulario} onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Nombre Negocio"
            value={nombreNegocio}
            onChange={(e) => setNombreNegocio(e.target.value)}
          />
          <input
            type="text"
            placeholder="Dirección"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
        </form>

        <div className={styles.botones}>
          <button className={styles.btnCancelar} onClick={() => navigate("/")}>
            Cancelar
          </button>
          <button className={styles.btnSiguiente} onClick={handleGuardarNegocio}>
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};
