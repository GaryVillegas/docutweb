import styles from "./CambiarContrasena.module.css";
import React, { useState } from "react";
import { MenuLateral } from "../../../components/MenuLateral";

export const CambiarContrasena = () => {
  const [formulario, setFormulario] = useState({
    actual: "",
    nueva: "",
    confirmar: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const guardarCambios = () => {
    if (formulario.nueva !== formulario.confirmar) {
      alert("Las contraseñas no coinciden");
      return;
    }
    alert("Contraseña actualizada correctamente");
  };

  return (
    <div className={styles.layout}>
      <MenuLateral />
      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>Cambiar Contraseña</h1>

          <form className={styles.form} onSubmit={(e) => { e.preventDefault(); guardarCambios(); }}>
            <label>
              Contraseña actual:
              <input
                type="password"
                name="actual"
                value={formulario.actual}
                onChange={handleChange}
              />
            </label>
            <label>
              Nueva contraseña:
              <input
                type="password"
                name="nueva"
                value={formulario.nueva}
                onChange={handleChange}
              />
            </label>
            <label>
              Confirmar nueva contraseña:
              <input
                type="password"
                name="confirmar"
                value={formulario.confirmar}
                onChange={handleChange}
              />
            </label>

            <button type="submit" className={styles.button}>
              Actualizar
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};
