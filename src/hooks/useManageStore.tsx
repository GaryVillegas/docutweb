import { useState } from "react";
import { useMessageContext } from "../context/MessageContext";
import type { storeData } from "../types/store.type";
import storeService from "../services/store.service";

export const useManageStore = () => {
  const { showMessage } = useMessageContext();
  const [getStoreData, setStoreData] = useState<storeData>();

  const fetchStoreData = async (userUID: string) => {
    try {
      const result = await storeService.getUserStore(userUID);
      setStoreData(result);
    } catch (error) {
      showMessage(`${error}`, "error");
    }
  };

  return {
    fetchStoreData,
    getStoreData,
  };
};
