import React, { useEffect } from "react";
import { Table } from "antd";
import { useManageService } from "../../hooks/useManageService";

interface tableProps {
  storeId: string;
}

export const CitaHoy: React.FC<tableProps> = ({ storeId }) => {
  const { dateStores, fetchStoreDates } = useManageService();

  useEffect(() => {
    fetchStoreDates(storeId);
  }, [storeId]);

  useEffect(() => {
    //traer nombres de servicio en un array[].
  });

  const columns = [
    {
      title: "Nombre Cliente",
      dataIndex: "nombreUsuario",
      key: "nombreUsuario",
    },
    {
      title: "Servicio",
      dataIndex: "nombreServicio",
      key: "nombreServicio",
    },
    {
      title: "Hora Seleccionada",
      dataIndex: "horaSeleccionada",
      key: "horaSeleccionada",
    },
    {},
  ];

  if (!dateStores) return;

  return (
    <>
      <Table
        dataSource={
          dateStores
            ? dateStores.map((date) => ({
                key: date.dateId,
                ...date.dateData,
              }))
            : []
        }
        columns={columns}
      />
    </>
  );
};
