import { useState } from "react";
import { useMessageContext } from "../context/MessageContext";
import type { storeData } from "../types/store.type";
import storeService from "../services/store.service";
import type { serviceData } from "../types/service.type";

export const useManageStore = () => {
  const { showMessage } = useMessageContext();
  const [getStoreData, setStoreData] = useState<storeData>();
  const [serviceStore, setStoreService] = useState<serviceData[]>();

  const fetchStoreData = async (userUID: string) => {
    try {
      const result = await storeService.getUserStore(userUID);
      setStoreData(result);
    } catch (error) {
      showMessage(`${error}`, "error");
    }
  };

  const fetchServiceStore = async (storeId: string) => {
    try {
      const result = await storeService.getStoreServices(storeId);
      setStoreService(result);
    } catch (error) {
      showMessage(`Error: ${error}`, "error");
    }
  };

  return {
    fetchStoreData,
    fetchServiceStore,
    getStoreData,
    serviceStore,
  };
};
