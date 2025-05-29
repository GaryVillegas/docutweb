import styles from "./Login.module.css";
import loginMockup from "../assets/loginMockup.png"; // reemplaza con tu imagen real
import { useEffect, useState } from "react";
import img1 from "../../assets/mockupDocut.svg";
import img2 from "../../assets/quien.png";
import { Link } from "react-router-dom";
import {Registro} from "./Registro.tsx";




export const Login = () => {
  
 const images = [img1, img2, img1];


const [current, setCurrent] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, 4000);
  return () => clearInterval(interval);
}, []);




  return (
    <div className={styles.fullogin}>
      

       <Link to="/" className={styles.botonvolver}>
  ← Volver
       </Link>

      
      

      <div className={styles.container}>
        <div className={styles.cont_izquierdo}>
          <div className={`${styles.contdentro} ${styles.contletra1}`}>
            <h2>Bienvenido de vuelta!</h2>
            <p>Simplifica tu manera de gestionar tus servicios de estética.</p>

            <input
              type="email"
              placeholder="Correo"
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Contraseña"
              className={styles.input}
            />

            <Link to="/" className={styles.olvidocontraseña}>
              ¿Olvidó la contraseña?
            </Link>

            <button className={styles.iniciarsesionbtn}>Iniciar Sesión</button>

            <p className={styles.resgistrartxt}>
              ¿Aaunno te has registrado?{" "}
              <Link to="/Registro">¡Regístrarse!</Link>
            </p>
          </div>
        </div>
        
        <div className={styles.cont_derecho }>
          <div className={`${styles.contdentro} ${styles.contletra2}`}>
             <div className={styles.carousel}>
  <div
    className={styles.track}
    style={{ transform: `translateX(-${current * 100}%)` }}
  >
    {images.map((src, i) => (
      <div key={i} className={styles.slide}>
        <img src={src} alt={`slide-${i}`} />
      </div>
    ))}
  </div>
  <div className={styles.dots}>
    {images.map((_, i) => (
      <button
        key={i}
        className={`${styles.dot} ${current === i ? styles.active : ""}`}
        onClick={() => setCurrent(i)}
      />
    ))}
  </div>
</div>





            
          </div>
        </div>
      </div>
    </div>
  );
};
