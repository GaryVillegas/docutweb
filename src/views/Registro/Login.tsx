import styles from "./Login.module.css";
import { useEffect, useState } from "react";
import img1 from "../../assets/mockupDocut.svg";
import img2 from "../../assets/quien.png";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const Login = () => {
  const navigate = useNavigate();
  const images = [img1, img2, img1];

  const [current, setCurrent] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("✅ Inicio de sesión exitoso");
      navigate("/InicioAdministrador"); // redirige si login ok
    } catch (error: any) {
      console.error("Error al iniciar sesión:", error.message);
      alert(`Error al inicisar sesión: ${error.message}`);
    }
  };

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Contraseña"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Link to="/" className={styles.olvidocontraseña}>
              ¿Olvidó la contraseña?
            </Link>

            <button className={styles.iniciarsesionbtn} onClick={handleLogin}>
              Iniciar sesión
            </button>

            <p className={styles.resgistrartxt}>
              ¿Aún no te has registrado?{" "}
              <Link to="/Correo">¡Registrarse!</Link>
            </p>
          </div>
        </div>

        <div className={styles.cont_derecho}>
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
                    className={`${styles.dot} ${
                      current === i ? styles.active : ""
                    }`}
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
