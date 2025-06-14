import styles from "./Mensaje.module.css"; // puedes renombrarlo a Mensaje.module.css si quieres
import React from "react";
import { MenuLateral } from "../../../components/MenuLateral";

export const Mensaje = () => {
  const mensajes = [
    {
      cliente: "Cliente 1",
      texto: "",
      tiempo: "",
    },
    {
      cliente: "cliente2",
      texto: "",
      tiempo: "",
    },
    
  ];

  return (
    <div className={styles.layout}>
      <MenuLateral />
      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>Opiniones de nuestros clientes</h1>
          <div className={styles.messageBox}>
            {mensajes.map((msg, index) => (
              <div key={index} className={styles.messageItem}>
                <div>
                  <strong>{msg.cliente}</strong>
                  <p>{msg.texto}</p>
                </div>
                <span className={styles.timestamp}>{msg.tiempo}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
