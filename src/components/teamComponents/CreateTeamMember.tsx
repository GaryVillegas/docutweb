import React from "react";
import { Drawer, Form, Input, Button, Steps } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faAt, faLock } from "@fortawesome/free-solid-svg-icons";
import type { memberInfo } from "../../types/team";
import { useMessageContext } from "../../context/MessageContext";
import authenticationService from "../../services/authentication.service";
import storeService from "../../services/store.service";
import type { User } from "firebase/auth";

interface DrawerProps {
  storeId: string;
  fetchMembers: () => Promise<void>;
}

export const CreateTeamMember: React.FC<DrawerProps> = ({
  storeId,
  fetchMembers,
}: DrawerProps) => {
  const [open, setOpen] = React.useState(false);
  const { showMessage } = useMessageContext();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [newMemberUID, setNewMemberUID] = React.useState("");
  const [memberCreated, setMemberCreated] = React.useState<User>();
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [memberInfo, setMemberInfo] = React.useState<memberInfo>({
    nombreMiembro: "",
    apellidoMiembro: "",
    storeId: "",
    especialidad: "",
    horaEntrada: "",
    horaSalida: "",
  });

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  const handleCreateUser = async () => {
    try {
      const { uid, user } = await authenticationService.memberRegistration(
        email,
        password
      );
      console.log(uid);
      setNewMemberUID(uid);
      setMemberCreated(user);
      next();
    } catch (error: any) {
      showMessage(`${error.message}`, "error");
    }
  };

  const handleSubmit = async (storeId: string) => {
    if (!storeId) {
      showMessage("No hay storeId, no se puede crear el colaborador", "error");
      return;
    }
    console.log("storeId enviado:", storeId);
    try {
      const newMemberInfo = { ...memberInfo, storeId };
      await storeService.createTeamMember(newMemberUID, newMemberInfo);
      setOpen(false);
      fetchMembers();
    } catch (error) {
      showMessage(`${error}`, "error");
    }
  };

  const next = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const prev = () => {
    setCurrentSlide(currentSlide - 1);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setMemberInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const cancel = async (user: any) => {
    try {
      await authenticationService.deleteAccount(user);
      setOpen(false);
    } catch (error) {
      showMessage(`${error}`, "error");
    }
  };

  const addAccountMember = () => {
    return (
      <>
        <Form>
          <Form.Item>
            <Input
              prefix={
                <FontAwesomeIcon
                  icon={faAt}
                  style={{ color: "var(--Gray-Color)" }}
                />
              }
              placeholder="Correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Input.Password
              prefix={
                <FontAwesomeIcon
                  icon={faLock}
                  style={{ color: "var(--Gray-Color)" }}
                />
              }
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
        </Form>
      </>
    );
  };

  const addMemberInfo = () => {
    if (!memberInfo || !newMemberUID) return;
    return (
      <>
        <Form>
          <Form.Item>
            <Input
              placeholder="Ingrese Nombre Colaborador"
              name="nombreMiembro"
              value={memberInfo.nombreMiembro}
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item>
            <Input
              placeholder="Ingrese Apellido Colaborador"
              name="apellidoMiembro"
              value={memberInfo.apellidoMiembro}
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item>
            <Input
              placeholder="Ingrese Especialidad Colaborador"
              name="especialidad"
              value={memberInfo.especialidad}
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item>
            <Input
              placeholder="Ingrese Hora Entrada Colaborador"
              name="horaEntrada"
              value={memberInfo.horaEntrada}
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item>
            <Input
              placeholder="Ingrese Hora Salida Colaborador"
              name="horaSalida"
              value={memberInfo.horaSalida}
              onChange={handleInputChange}
            />
          </Form.Item>
        </Form>
      </>
    );
  };

  const FooterButtons = () => {
    return (
      <div>
        {currentSlide < steps.length - 1 && (
          <Button onClick={() => handleCreateUser()}>Siguiente</Button>
        )}
        {currentSlide === steps.length - 1 && (
          <Button
            onClick={() => handleSubmit(storeId)}
            disabled={!newMemberUID}
            type="primary"
          >
            Crear Colaborador
          </Button>
        )}
        {currentSlide === 0 && (
          <Button onClick={() => cancel(memberCreated)}>cancelar</Button>
        )}
        {currentSlide > 0 && <Button onClick={prev}>Volver</Button>}
      </div>
    );
  };

  const stepsContent = [addAccountMember(), addMemberInfo()];
  const steps = [
    { title: "Cuenta del Colaborador" },
    { title: "Información del Colaborador" },
  ];

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

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
        <FontAwesomeIcon icon={faCirclePlus} /> Crear Colaborador
      </button>
      <Drawer
        title="Nuevo Miembro de Equipo"
        onClose={onClose}
        open={open}
        width={550}
      >
        <Steps size="small" current={currentSlide} items={items} />
        <div>{stepsContent[currentSlide]}</div>
        <FooterButtons />
      </Drawer>
    </div>
  );
};
