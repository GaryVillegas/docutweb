import styles from "./InicioAdministrador.module.css";
import React, { useState } from "react";
import { MenuLateral } from "../../../components/MenuLateral";

export const InicioAdministrador = () => {
  const []  = useState(false);

  return (
    <div className={styles.layout}>
      <MenuLateral />

      <main className={styles.main}>
        <h1 className={styles.title}>Tu Actividad Semanal</h1>
        <div className={styles.content}>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h2>Ganancias totales</h2>
              <p className={styles.monto}></p>
              <div className={styles.grafico}> </div>
            </div>

            <div className={styles.card}>
              <h2>Clientes atendidos</h2>
              <div className={styles.graficoCircular}> </div>
              <p className={styles.numeroClientes}></p>
            </div>

            <div className={styles.card}>
              <h2>Citas por semana</h2>
              <div className={styles.graficoCircular}></div>
              <p className={styles.numeroClientes}></p>
            </div>

            
          </div>
        </div>
      </main>
    </div>
  );
};
