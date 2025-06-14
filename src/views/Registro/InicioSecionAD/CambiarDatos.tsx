import styles from "./CambiarDatos.module.css";
import React, { useState, useEffect } from "react";
import { MenuLateral } from "../../../components/MenuLateral";
import { auth, db } from "../../../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export const CambiarDatos = () => {
  const [modoEdicion, setModoEdicion] = useState(false);
  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    rut: "",
  });

  // Obtener los datos del usuario al cargar la página
  useEffect(() => {
    const obtenerDatosUsuario = async () => {
      if (auth.currentUser) {
        const uid = auth.currentUser.uid;
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();

          // Soporte para userInfo o nombre/apellido
          if (data.userInfo) {
            setFormulario({
              nombre: data.userInfo.name || "",
              apellido: data.userInfo.lastName || "",
              correo: auth.currentUser.email || "", // correo viene de auth
              rut: data.userInfo.rut || "",
            });
          } else {
            setFormulario({
              nombre: data.nombre || "",
              apellido: data.apellido || "",
              correo: auth.currentUser.email || "",
              rut: data.rut || "",
            });
          }
        }
      }
    };

    obtenerDatosUsuario();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const guardarCambios = async () => {
    try {
      if (auth.currentUser) {
        const uid = auth.currentUser.uid;
        const docRef = doc(db, "users", uid);

        // Update segun el formato que tenga (aquí ejemplo con userInfo)
        await updateDoc(docRef, {
          userInfo: {
            name: formulario.nombre,
            lastName: formulario.apellido,
            rut: formulario.rut,
            // el campo type no se cambia aquí, se mantiene
          },
        });

        setModoEdicion(false);
        alert("✅ Datos actualizados correctamente");
      }
    } catch (error) {
      console.error("❌ Error al actualizar datos:", error);
      alert("Error al actualizar datos");
    }
  };

  return (
    <div className={styles.layout}>
      {/* Sidebar */}
      <MenuLateral />

      {/* Contenido principal */}
      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>Datos de usuario</h1>
          {!modoEdicion ? (
            <div className={styles.userDataBox}>
              <h2>Información actual</h2>
              <ul className={styles.userData}>
                <li><strong>Nombre:</strong> {formulario.nombre}</li>
                <li><strong>Apellido:</strong> {formulario.apellido}</li>
                <li><strong>Correo:</strong> {formulario.correo}</li>
                <li><strong>RUT:</strong> {formulario.rut}</li>
              </ul>
              <button className={styles.button} onClick={() => setModoEdicion(true)}>
                Actualizar
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={(e) => { e.preventDefault(); guardarCambios(); }}>
              <label>
                Nombre:
                <input type="text" name="nombre" value={formulario.nombre} onChange={handleChange} />
              </label>
              <label>
                Apellido:
                <input type="text" name="apellido" value={formulario.apellido} onChange={handleChange} />
              </label>
              <label>
                Correo:
                <input type="email" name="correo" value={formulario.correo} readOnly />
              </label>
              <label>
                RUT:
                <input
                  type="text"
                  name="rut"
                  value={formulario.rut}
                  readOnly
                  style={{ backgroundColor: "#f9f9f9", cursor: "not-allowed" }}
                />
              </label>
              <button type="submit" className={styles.button}>Guardar cambios</button>
            </form>
          )}
        </div>
      </main>
    </div>
  );
};
