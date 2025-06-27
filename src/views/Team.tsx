import React from "react";
import { CreateTeamMember } from "../components/teamComponents/CreateTeamMember";
import { useAuth } from "../context/AuthContext";
import { useManageStore } from "../hooks/useManageStore";
import styles from "./Team.module.css";
import { useManageTeam } from "../hooks/useManageTeam";
import { Table } from "antd";

export const Team = () => {
  const { user } = useAuth();
  const { fetchStoreData, getStoreData } = useManageStore();
  const { fetchMemberData, getMemberData } = useManageTeam();

  React.useEffect(() => {
    if (!user) return;
    fetchStoreData(user.uid);
  }, [user]);

  React.useEffect(() => {
    if (!getStoreData?.storeId) return;
    fetchMemberData(getStoreData.storeId as string);
  }, [getStoreData?.storeId]);

  const columns = [
    {
      title: "Nombre Miembro",
      dataIndex: "nombreMiembro",
      key: "nombreMiembro",
    },
    {
      title: "Apellido Miembro",
      dataIndex: "apellidoMiembro",
      key: "apellidoMiembro",
    },
    { title: "Especialidad", dataIndex: "especialidad", key: "especialidad" },
    { title: "Hora de Entrada", dataIndex: "horaEntrada", key: "horaEntrada" },
    { title: "Hora de Salida", dataIndex: "horaSalida", key: "horaSalida" },
  ];

  return (
    <div className={styles.contenedorPrincipal}>
      {/* Panel izquierdo */}
      <div className={styles.panelIzquierdo}>
        <div className={styles.encabezado}>
          <CreateTeamMember
            storeId={getStoreData?.storeId ?? ""}
            fetchMembers={() =>
              fetchMemberData(getStoreData?.storeId as string)
            }
          />
        </div>

        <div className={styles.tabla}>
          <Table
            dataSource={
              getMemberData
                ? getMemberData.map((item) => ({
                    key: item.memberUID,
                    ...item.memberInfo,
                  }))
                : []
            }
            columns={columns}
          />
        </div>
      </div>

      <div className={styles.panelDerecho}>
        <h3>grafico </h3>
      </div>
    </div>
  );
};
