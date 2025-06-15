import React from "react";
import type { userData } from "../types/user.type";
import storeService from "../services/store.service";

export const useUserManagment = () => {
  const [userInfo, setUser] = React.useState<userData | null>(null);
  const fetchUser = async (uid: string) => {
    const result = await storeService.getUserData(uid);
    if (result) setUser(result);
  };
  return {
    userInfo,
    fetchUser,
  };
};
