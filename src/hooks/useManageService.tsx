import { useState } from "react";
import { useMessageContext } from "../context/MessageContext";
import storeService from "../services/store.service";
import type { serviceData } from "../types/service.type";
import type { dateData } from "../types/date.type";

export const useManageService = () => {
  const [serviceStore, setStoreService] = useState<serviceData[]>();
  const [dateStores, setDateStore] = useState<dateData[]>();
  const [serviceName, setServiceName] = useState<string | null>("");
  const { showMessage } = useMessageContext();

  const fetchServiceStore = async (storeId: string) => {
    try {
      const result = await storeService.getStoreServices(storeId);
      setStoreService(result);
    } catch (error) {
      showMessage(`Error: ${error}`, "error");
    }
  };

  const fetchStoreDates = async (storeId: string) => {
    try {
      const result = await storeService.getStoreDates(storeId);
      setDateStore(result);
    } catch (error) {
      showMessage("Error al conseguir las citas", "error");
    }
  };

  const fetchServiceName = async (serviceId: string) => {
    try {
      const result = await storeService.getServiceName(serviceId);
      setServiceName(result);
    } catch (error) {
      showMessage("Error al conseguir el nombre del servicio", "error");
    }
  };
  return {
    serviceStore,
    fetchStoreDates,
    dateStores,
    fetchServiceStore,
    fetchServiceName,
    serviceName,
  };
};
