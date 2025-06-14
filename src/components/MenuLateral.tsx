import styles from "../views/Registro/InicioSecionAD/CambiarDatos.module.css";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export const MenuLateral = () => {
  const location = useLocation();
  const [nombreDueño, setNombreDueño] = useState("");

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const obtenerNombreDueño = async () => {
      if (auth.currentUser) {
        const uid = auth.currentUser.uid;
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data.userInfo) {
            setNombreDueño(`${data.userInfo.name} ${data.userInfo.lastName}`);
          } else {
            setNombreDueño("Dueño no encontrado");
          }
        } else {
          setNombreDueño("Dueño no encontrado");
        }
      }
    };

    obtenerNombreDueño();
  }, []);

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <img
          src="/src/assets/docutlogo.svg"
          alt="docutlogo"
          width="30"
          height="30"
        />
        <span>DoCut</span>
      </div>

      <nav className={styles.menu}>
        <Link
          to="/inicioadministrador"
          className={`${styles.link} ${isActive("/inicioadministrador") ? styles.activo : ""}`}
        >
          Tu actividad
        </Link>

        <Link
          to="/cambiardatos"
          className={`${styles.link} ${isActive("/cambiardatos") ? styles.activo : ""}`}
        >
          Datos Personales
        </Link>
        <Link
          to="/citas"
          className={`${styles.link} ${isActive("/citas") ? styles.activo : ""}`}
        >
          Citas
        </Link>
        <Link
          to="/cambiarcontrasena"
          className={`${styles.link} ${isActive("/cambiarcontrasena") ? styles.activo : ""}`}
        >
          Cambio Contraseña
        </Link>
        <Link
          to="/mensaje"
          className={`${styles.link} ${isActive("/mensaje") ? styles.activo : ""}`}
        >
          Reseña
        </Link>
        <Link
          to="/stock"
          className={`${styles.link} ${isActive("/stock") ? styles.activo : ""}`}
        >
          Stock
        </Link>

        <Link to="/" className={styles.link}>Salir</Link>
      </nav>

      <div className={styles.userBox}>
        <p className={styles.username}>Nombre Ddueño: {nombreDueño}</p>
      </div>
    </aside>
  );
};
