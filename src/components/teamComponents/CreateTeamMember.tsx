import React from "react";
import { Drawer, Form, Input, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import type { memberInfo } from "../../types/team";
import { useMessageContext } from "../../context/MessageContext";
import authenticationService from "../../services/authentication.service";

interface DrawerProps {
  storeId: string;
  fetchTeamMember: () => Promise<void>;
}

export const CreateTeamMember: React.FC<DrawerProps> = ({
  storeId,
  fetchTeamMember,
}: DrawerProps) => {
  const [open, setOpen] = React.useState(false);
  const { showMessage } = useMessageContext();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [newMemberUID, setNewMemberUID] = React.useState("");
  const [memberInfo, setMemberInfo] = React.useState<memberInfo>({
    nombreMiembro: "",
    apellidoMiembro: "",
    storeId: "",
    horaEntrada: "",
    horaSalida: "",
  });

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  const handleCreateUser = async () => {
    try {
      const uid = await authenticationService.registration(email, password);
      setNewMemberUID(uid);
    } catch (error: any) {
      showMessage(`${error.message}`, "error");
    }
  };

  //TODO: terminar registro de nuevo equipo.
  return (
    <div>
      <button
        onClick={showDrawer}
        style={{
          padding: "10px 5px",
          color: "var(--White-Color)",
          backgroundColor: "var(--Primary-Color)",
          borderRadius: "10px",
          border: "none",
        }}
      >
        <FontAwesomeIcon icon={faCirclePlus} /> Crear Servicio
      </button>
      <Drawer
        title="Nuevo Miembro de Equipo"
        onClose={onClose}
        open={open}
        width={550}
      ></Drawer>
    </div>
  );
};
