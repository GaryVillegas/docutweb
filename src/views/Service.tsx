import { useManageStore } from "../hooks/useManageStore";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { Table } from "antd";
import { CreateService } from "../components/serviceComponents/createService";
import { useManageService } from "../hooks/useManageService";

export const Service = () => {
  const { user } = useAuth();
  const { fetchStoreData, getStoreData } = useManageStore();
  const { fetchServiceStore, serviceStore } = useManageService();

  useEffect(() => {
    if (!user) return;
    fetchStoreData(user.uid);
  }, [user]);

  useEffect(() => {
    if (getStoreData) {
      fetchServiceStore(getStoreData.storeId);
    }
  }, [getStoreData]);

  const columns = [
    {
      title: "Nombre",
      dataIndex: "nombreServicio",
      key: "nombreSerivico",
    },
    {
      title: "Descripción",
      dataIndex: "descripcionServicio",
      key: "descripcionServicio",
    },
    {
      title: "Precio",
      dataIndex: "precio",
      key: "precio",
    },
    {
      title: "Tiempo Estimado",
      dataIndex: "tiempoEstimado",
      key: "tiempoEstimado",
    },
  ];

  if (!getStoreData) return;

  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        alignItems: "stretch",
        minHeight: "400px",
      }}
    >
      <div style={{ flex: 2, display: "flex", flexDirection: "column" }}>
        <CreateService
          storeId={getStoreData?.storeId}
          fetchService={() => fetchServiceStore(getStoreData.storeId)}
        />
        <Table
          dataSource={
            serviceStore
              ? serviceStore.map((item) => ({
                  key: item.serviceId,
                  ...item.serviceData,
                }))
              : []
          }
          columns={columns}
          style={{ marginTop: "20px" }}
        />
      </div>

      <div
        style={{
          flex: 1,
          backgroundColor: "var(--Gray-Color)",
          borderRadius: "10px",
          padding: "1rem",
          marginTop: "3.5rem",
        }}
      ></div>
    </div>
  );
};
