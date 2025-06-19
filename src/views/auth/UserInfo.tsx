import { useState } from "react";
import styles from "./auth.module.css";
import { Steps, Spin, Input } from "antd";
import { useMessageContext } from "../../context/MessageContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import authenticationService from "../../services/authentication.service";
import storeService from "../../services/store.service";
import type { storeInfo } from "../../types/store.type";

export const UserInfo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { showMessage } = useMessageContext();
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [userInfo, setUserInfo] = useState({
    name: "",
    lastName: "",
    rut: "",
    tipe: "administrador",
  });
  const [storeInfo, setStoreInfo] = useState<storeInfo>({
    bussinessName: "",
    direction: "",
    categories: [],
  });
  const categories = [
    "Barbería",
    "Canina",
    "Spa",
    "Salón de Belleza",
    "Peluquería",
    "Manicure",
    "Pedicure",
    "Depilación",
  ];

  const next = () => {
    setCurrentSlide(currentSlide + 1);
  };
  const prev = () => {
    setCurrentSlide(currentSlide - 1);
  };
  const handleSubmit = async (userUID: string) => {
    if (!userInfo) return;
    try {
      await storeService.createUser(userUID, userInfo);
      await storeService.createStore(userUID, storeInfo);
      navigate("/home");
    } catch (error) {
      showMessage(`${error}`, "error");
    }
  };

  const toggleCategory = (category: string) => {
    setStoreInfo((prev) => {
      const isSelected = prev.categories.includes(category);
      return {
        ...prev,
        categories: isSelected
          ? prev.categories.filter((cat) => cat !== category)
          : [...prev.categories, category],
      };
    });
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleStoreChange = (e: any) => {
    const { name, value } = e.target;
    setStoreInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formatRUT = (e: any) => {
    // Implement your RUT formatting logic here
    const value = e.target.value;
    // Example formatting (you'll need to adjust this to your specific RUT format)
    let formatted = value.replace(/\D/g, "");
    if (formatted.length > 1) {
      formatted = formatted.slice(0, -1) + "-" + formatted.slice(-1);
    }
    if (formatted.length > 5) {
      formatted = formatted.slice(0, 2) + "." + formatted.slice(2);
    }
    if (formatted.length > 9) {
      formatted = formatted.slice(0, 6) + "." + formatted.slice(6);
    }

    setUserInfo((prev) => ({
      ...prev,
      rut: formatted,
    }));
  };

  const FooterButtons = () => {
    if (!user) return;
     {/*agrege styles a los botones <div>
        {currentSlide < steps.length - 1 && (
          <button onClick={() => next()}>Siguiente</button>
        )}
        {currentSlide === steps.length - 1 && (
          <button onClick={() => handleSubmit(user.uid)}>Terminar</button>
        )}
        {currentSlide > 0 && <button onClick={() => prev()}>Volver</button>}
        {currentSlide === 0 && (
          <button onClick={() => cancel(user)}>Cancelar</button>
        )}
      </div>asi estaba*/}
    return (
        

      <div className={styles.footerButtons}>
          {currentSlide < steps.length - 1 && (
            <button className={styles.footerButton} onClick={next}>
              Siguiente
            </button>
          )}
          {currentSlide === steps.length - 1 && (
            <button className={styles.footerButton} onClick={() => handleSubmit(user.uid)}>
              Terminar
            </button>
          )}
          {currentSlide > 0 && (
            <button className={styles.footerButton} onClick={prev}>
              Volver
            </button>
          )}
          {currentSlide === 0 && (
            <button className={`${styles.footerButton} ${styles.cancelButton}`} onClick={() => cancel(user)}>
              Cancelar
            </button>
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
    if (!userInfo) return;
    return (
      <>
      
        <div className={styles.tituloinfousuario}>Información de usuario</div>
        <Input
        
          placeholder="Ingrese Nombre"
          onChange={handleInputChange}
          value={userInfo.name}
          name="name"
          type="text"
        />
        <Input
          placeholder="Ingrese Apellido"
          onChange={handleInputChange}
          value={userInfo.lastName}
          name="lastName"
          type="text"
        />
        <Input
          placeholder="Ingrese Rut"
          onChange={formatRUT}
          value={userInfo.rut}
          name="rut"
          type="text"
        />
      </>
    );
  };

  const addStoreInfo = () => {
    if (!userInfo) return;
    return (
      <>
        <div className={styles.tituloinfousuario}>Información de la tienda</div>
        <Input
          placeholder="Ingresar Nombre Negocio"
          onChange={handleStoreChange}
          name="bussinessName"
          value={storeInfo.bussinessName}
        />
        <Input
          placeholder="Dirección Negocio"
          onChange={handleStoreChange}
          name="direction"
          value={storeInfo.direction}
        />
      </>
    );
  };
        {/*agrege styles a los botones < const chooseCategory = () => {
    if (!userInfo) return;
    return (
      <>
        <div className={styles.tituloinfousuario}>Categorias de tienda</div>
        {categories.map((category) => (
          <button key={category} onClick={() => toggleCategory(category)}>
            {category}
          </button>
        ))}
      </>
    );
  };
        asi estaba*/}
  const chooseCategory = () => {
  if (!userInfo) return null;

  return (
    <>
      <div className={styles.tituloinfousuario}>Categorías de tienda</div>
     <div className={styles.categoryGrid}>
  {categories.map((category) => {
    const isSelected = storeInfo.categories.includes(category);
    return (
      <button
        key={category}
        className={`${styles.categoryButton} ${isSelected ? styles.selectedCategory : ""}`}
        onClick={() => toggleCategory(category)}
      >
        {category}
      </button>
    );
  })}
</div>

    </>
  );
};


  const stepsContent = [addUserInfo(), addStoreInfo(), chooseCategory()];
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
        {/*aca al steps le puse un style para los puntos <Steps size="default" current={currentSlide} items={items} />
asi estaba */}
        <Steps
            size="default"
            current={currentSlide}
            items={items}
            className={styles.stepsCustom}
          />

        <div>{stepsContent[currentSlide]}</div>
        <FooterButtons />
      </div>
    </div>
  );
};
