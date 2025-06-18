// src/components/MenuL.tsx
import { useState } from "react";
import {
  AppstoreOutlined,
  TeamOutlined,
  DropboxOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Switch, Modal } from "antd";
import type { MenuProps, MenuTheme } from "antd";
import styles from "./../App.module.css";

const { Sider } = Layout;
type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: <AppstoreOutlined />,
  },
  {
    key: "equipo",
    label: "Equipo",
    icon: <TeamOutlined />,
  },
  {
    key: "bodega",
    label: "Bodega",
    icon: <DropboxOutlined />,
  },
];

export const MenuL = () => {
  const [theme, setTheme] = useState<MenuTheme>("light");
  const [selectedKey, setSelectedKey] = useState("dashboard");
  const [modalVisible, setModalVisible] = useState(false);

  const changeTheme = (value: boolean) => {
    setTheme(value ? "dark" : "light");
  };

  const handleClick: MenuProps["onClick"] = (e) => {
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
          <div className={styles.footerLeft}>
            <span className={styles.labelFooter}>
              {theme === "dark" ? "Oscuro" : "Abierto"}
            </span>
            <Switch
              size="small"
              checked={theme === "dark"}
              onChange={changeTheme}
            />
          </div>
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
