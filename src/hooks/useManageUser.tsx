import { useState } from "react";
import storeService from "../services/store.service";
import type { userData } from "../types/user.type";
import { useMessageContext } from "../context/MessageContext";

export const useManageUser = () => {
  const { showMessage } = useMessageContext();
  const [getUserData, setUserData] = useState<userData>();
  const fetchUserData = async (userUID: string) => {
    try {
      const result = await storeService.getUserData(userUID);
      setUserData(result);
    } catch (error) {
      showMessage(`${error}`, "error");
    }
  };

  return {
    fetchUserData,
    getUserData,
  };
};
