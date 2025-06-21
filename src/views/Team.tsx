import React from "react";
import styles from "./Team.module.css";

export const Team = () => {
  return (
    <div className={styles.contenedorPrincipal}>
      {/* Panel izquierdo */}
      <div className={styles.panelIzquierdo}>
        <div className={styles.encabezado}>
          
          <button className={styles.botonAgregar}>+ Añadir Colaborador</button>
        </div>

        <div className={styles.tabla}>
          <div className={styles.filaEncabezado}>
            <span>Nombre</span>
            <span>Rol</span>
            <span>Editar</span>
          </div>

          <div className={styles.fila}>
            <span>Colaborador</span>
            <span>Barbero</span>
            <button className={styles.botonEditar}>+</button>
          </div>
            <div className={styles.fila}>
            <span>Colaborador</span>
            <span>Barbero</span>
            <button className={styles.botonEditar}>+</button>
          </div>

         
        </div>
      </div>

      
      <div className={styles.panelDerecho}>
        <h3>grafico </h3>
        
      </div>
    </div>
  );
};
