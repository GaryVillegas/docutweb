import { useManageStore } from "../hooks/useManageStore";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { Table } from "antd";
import { CreateService } from "../components/serviceComponents/createService";

export const Service = () => {
  const { user } = useAuth();
  const { fetchStoreData, getStoreData, fetchServiceStore, serviceStore } =
    useManageStore();

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
    <div>
      <div>
        <CreateService
          storeId={getStoreData?.storeId}
          fetchService={() => fetchServiceStore(getStoreData.storeId)}
        />
      </div>
      <div>
        <Table
          dataSource={
            serviceStore
              ? serviceStore.map((item) => ({
                  key: item.serviceId,
                  ...item.serviceData.serviceData,
                }))
              : []
          }
          columns={columns}
          style={{ marginTop: "20px", width: "60%" }}
        />
      </div>
    </div>
  );
};
