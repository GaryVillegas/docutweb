import React from "react";
import authenticationService from "../../services/authentication.service";
import styles from "./auth.module.css";
import docutLogo from "./../../assets/docutlogo.svg";
import googleLogo from "./../../assets/Google-color.svg";
import { useMessageContext } from "../../context/messageContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { showMessage } = useMessageContext();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await authenticationService.authentication(email, password);
      navigate("/home");
    } catch (error: any) {
      showMessage(`${error.message}`, "error");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.logo}>
          <img
            src={docutLogo}
            alt="docutlogo"
            width="35"
            height="35"
            className="d-inline-block align-top"
          />{" "}
          DoCut
        </h1>
        <h2 className={styles.title}>Inicio Sesión</h2>

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

        <button className={styles.button} onClick={handleLogin}>
          Iniciar sesión
        </button>

        <p className={styles.or}>o inicia sesión con</p>
        <button className={styles.googleBtn}>
          <img src={googleLogo} alt="Google" />
        </button>

        <p className={styles.register}>
          ¿No tienes una cuenta?{" "}
          <a href="#" className={styles.link}>
            Regístrate
          </a>
        </p>
      </div>
    </div>
  );
};
