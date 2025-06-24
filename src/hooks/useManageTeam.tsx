import React from "react";
import { useMessageContext } from "../context/MessageContext";
import type { memberData } from "../types/team";
import storeService from "../services/store.service";

export const useManageTeam = () => {
  const { showMessage } = useMessageContext();
  const [getMemberData, setMemberData] = React.useState<memberData[]>();

  const fetchMemberData = async (storeId: string) => {
    try {
      const result = await storeService.getMemberData(storeId);
      setMemberData(result);
    } catch (error) {
      showMessage(`${error}`, "error");
    }
  };

  return {
    fetchMemberData,
    getMemberData,
  };
};
