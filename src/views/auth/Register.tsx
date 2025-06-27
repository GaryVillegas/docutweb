import React from "react";
import authenticationService from "../../services/authentication.service";
import styles from "./auth.module.css";
import docutLogo from "./../../assets/docutlogo.svg";
import googleLogo from "./../../assets/Google-color.svg";
import { useMessageContext } from "../../context/MessageContext";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faAt, faLock } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { Input } from "antd";

export const Register = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { showMessage } = useMessageContext();
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await authenticationService.registration(email, password);
      navigate("/UserInfo");
    } catch (error: any) {
      showMessage(`${error.message}`, "error");
    }
  };

  const handleGoogleRegister = async () => {
    try {
      await authenticationService.loginWithGoogle();
      navigate("/UserInfo");
    } catch (error: any) {
      showMessage(`${error.message}`, "error");
    }
  };

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <Button size="sm" className={styles.backButton} onClick={goHome}>
        <FontAwesomeIcon icon={faChevronLeft} /> Volver
      </Button>
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
        <h2 className={styles.title}>Crear Cuenta</h2>

        <Input
          prefix={
            <FontAwesomeIcon
              icon={faAt}
              style={{ color: "var(--Gray-Color)" }}
            />
          }
          placeholder="Correo"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input.Password
          prefix={
            <FontAwesomeIcon
              icon={faLock}
              style={{ color: "var(--Gray-Color)" }}
            />
          }
          placeholder="Contraseña"
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className={styles.button} onClick={handleRegister}>
          Crear Cuenta
        </button>

        <p className={styles.or}>o registrate con</p>
        <button className={styles.googleBtn} onClick={handleGoogleRegister}>
          <img src={googleLogo} alt="Google" />
        </button>

        <p className={styles.register}>
          ¿Ya tienes una cuenta?{" "}
          <a href="/login" className={styles.link}>
            Inicia sesion
          </a>
        </p>
      </div>
    </div>
  );
};
