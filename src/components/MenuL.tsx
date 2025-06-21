// src/components/MenuL.tsx
import { useState } from "react";
import {
  AppstoreOutlined,
  TeamOutlined,
  DropboxOutlined,
  SettingOutlined,
  ProductOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Switch, Modal } from "antd";
import type { MenuProps, MenuTheme } from "antd";
import styles from "./../App.module.css";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;
type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "1",
    label: "Dashboard",
    icon: <AppstoreOutlined />,
  },
  {
    key: "2",
    label: "Equipo",
    icon: <TeamOutlined />,
  },
  {
    key: "3",
    label: "Bodega",
    icon: <DropboxOutlined />,
  },
  {
    key: "4",
    label: "Servicios",
    icon: <ProductOutlined />,
  },
];

export const MenuL = () => {
  const [theme, setTheme] = useState<MenuTheme>("light");
  const [selectedKey, setSelectedKey] = useState("1");
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();

  const changeTheme = (value: boolean) => {
    setTheme(value ? "dark" : "light");
  };

  const handleClick: MenuProps["onClick"] = (e) => {
    if (e.key === "1") {
      navigate("/home");
    } else if (e.key === "2") {
      navigate("/team");
    } else if (e.key === "3") {
      navigate("/stock");
    } else if (e.key === "4") {
      navigate("/service");
    }
    setSelectedKey(e.key);
  };

  return (
    <>
      <Sider width={220} className={styles.sidebar}>
        <div className={styles.menuContent}>
          <Menu
            theme={theme}
            mode="inline"
            selectedKeys={[selectedKey]}
            onClick={handleClick}
            items={items}
          />
        </div>

        <div className={styles.menuFooter}>
          
          <SettingOutlined
            onClick={() => setModalVisible(true)}
            className={styles.iconoConfig}
          />
        </div>
      </Sider>

      {/* Modal de configuración */}
      <Modal
        title="Configuración"
        open={modalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
        okText="Guardar"
        cancelText="Cancelar"
      >
        <p>Opciones de configuración futura aquí</p>
      </Modal>
    </>
  );
};
