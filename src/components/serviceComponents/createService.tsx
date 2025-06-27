import React from "react";
import { Drawer, Form, Input, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import type { service } from "../../types/service.type";
import storeService from "../../services/store.service";
import { useMessageContext } from "../../context/MessageContext";

interface DrawerProps {
  storeId: string;
  fetchService: () => Promise<void>;
}

export const CreateService: React.FC<DrawerProps> = ({
  storeId,
  fetchService,
}: DrawerProps) => {
  const [open, setOpen] = React.useState(false);
  const { showMessage } = useMessageContext();
  const [serviceInfo, setServiceInfo] = React.useState<service>({
    nombreServicio: "",
    descripcionServicio: "",
    tiempoEstimado: "",
    precio: 0,
    storeId: "",
  });

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  const handleSubmit = async (storeId: string) => {
    if (!storeId) return;
    try {
      const newServiceInfo = { ...serviceInfo, storeId };
      await storeService.createService(storeId, newServiceInfo);
      setOpen(false);
      fetchService();
      showMessage("Se creo el servicio correctamente!", "success");
    } catch (error) {
      showMessage(`Error ${error}`, "error");
    }
  };
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
      <Drawer title="Nuevo Servicio" onClose={onClose} open={open} width={500}>
        <Form layout="vertical" onFinish={() => handleSubmit(storeId)}>
          <Form.Item
            label="Nombre Servico"
            name="nombreServicio"
            rules={[
              {
                required: true,
                message: "Por favor Ingrese Nombre de Servicio.",
              },
            ]}
          >
            <Input
              type="text"
              placeholder="Nombre Nuevo Servicio"
              value={serviceInfo.nombreServicio}
              onChange={(e) =>
                setServiceInfo({
                  ...serviceInfo,
                  nombreServicio: e.target.value,
                })
              }
            />
          </Form.Item>
          <Form.Item
            label="Descipción Servicio"
            name="descripcionServicio"
            rules={[
              {
                required: true,
                message: "Por favor Ingrese Descripcion de Servicio.",
              },
            ]}
          >
            <Input.TextArea
              placeholder="Maximo 200 caracteres."
              maxLength={200}
              value={serviceInfo.descripcionServicio}
              onChange={(e) =>
                setServiceInfo({
                  ...serviceInfo,
                  descripcionServicio: e.target.value,
                })
              }
            />
          </Form.Item>
          <Form.Item
            label="Tiempo Estimado"
            name="tiempoEstimado"
            rules={[
              { required: true, message: "Por favor ingrese tiempo estimado" },
            ]}
          >
            <Input
              type="number"
              placeholder="Ej: 1"
              value={serviceInfo.tiempoEstimado}
              onChange={(e) =>
                setServiceInfo({
                  ...serviceInfo,
                  tiempoEstimado: e.target.value,
                })
              }
            />
          </Form.Item>
          <Form.Item
            label="Precio de Servicio"
            name="precio"
            rules={[
              {
                required: true,
                message: "Por favor ingrese el precio del servicio.",
              },
            ]}
          >
            <Input
              type="number"
              placeholder="Precio"
              value={serviceInfo.precio}
              onChange={(e) =>
                setServiceInfo({
                  ...serviceInfo,
                  precio: Number(e.target.value),
                })
              }
            />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">Crear Servicio</Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};
