import { useState } from "react";
import styles from "./auth.module.css";
import { Steps, Spin } from "antd";
import { useMessageContext } from "../../context/MessageContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import authenticationService from "../../services/authentication.service";

export const UserInfo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { showMessage } = useMessageContext();
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  const next = () => {
    setCurrentSlide(currentSlide + 1);
  };
  const prev = () => {
    setCurrentSlide(currentSlide - 1);
  };

  const FooterButtons = () => {
    return (
      <div>
        {currentSlide < steps.length - 1 && (
          <button onClick={() => next()}>Siguiente</button>
        )}
        {currentSlide === steps.length - 1 && (
          <button onClick={() => showMessage("All done guys!", "success")}>
            Terminar
          </button>
        )}
        {currentSlide > 0 && <button onClick={() => prev()}>Volver</button>}
        {currentSlide === 0 && (
          <button onClick={() => cancel(user)}>Cancelar</button>
        )}
      </div>
    );
  };

  const cancel = async (user: any) => {
    try {
      await authenticationService.deleteAccount(user);
      navigate("/register");
    } catch (error) {
      showMessage(`${error}`, "error");
    }
  };

  const addUserInfo = () => {
    return (
      <>
        <div>Información de usuario</div>
      </>
    );
  };

  const storeInfo = () => {
    return <div>Información de tienda</div>;
  };

  const chooseCategory = () => {
    return <div>Categorias de tienda</div>;
  };

  const stepsContent = [addUserInfo(), storeInfo(), chooseCategory()];
  const steps = [
    { title: "Tu información" },
    { title: "Infórmanos sobre tu negocio" },
    { title: "Categorías" },
  ];
  const items = steps.map((item) => ({ key: item.title, title: item.title }));
  if (loading) return <Spin fullscreen={true} size="large" />;
  return (
    <div className={styles.mainContainer}>
      <div className={styles.containerUserInfo}>
        <Steps size="default" current={currentSlide} items={items} />
        <div>{stepsContent[currentSlide]}</div>
        <FooterButtons />
      </div>
    </div>
  );
};
