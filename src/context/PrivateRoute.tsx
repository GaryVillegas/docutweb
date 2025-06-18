import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { Spin } from "antd";
import { type JSX } from "react";
// import type { userData } from "../types/user.type";
// import storeService from "../services/store.service";
// import { useMessageContext } from "./MessageContext";

export default function PrivateRoute({ children }: { children: JSX.Element }) {
  const { user, loading } = useAuth();
  // const { showMessage } = useMessageContext();
  // const [userData, setUserData] = useState<userData | undefined>();
  // const [userDataExists, setUserDataExists] = useState(true);

  if (loading) {
    return <Spin size="large" fullscreen />;
  }

  // Asegúrate de que user sea estrictamente distinto de null
  if (!user) {
    console.log("🔒 Usuario no autenticado, redirigiendo...");
    return <Navigate to="/login" replace />;
  }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await storeService.getUserData(user.uid);
  //       setUserData(result);
  //       setUserDataExists(true);
  //     } catch (error: any) {
  //       showMessage(`${error}`, "error");
  //       if (error.message === "🚫 service doesn't exit.") {
  //         setUserDataExists(false);
  //       }
  //     }
  //   };
  //   fetchData();
  // }, [user, showMessage]);

  // if (!userData || !userDataExists) {
  //   return <Navigate to="/UserInfo" />;
  // }

  return children;
}
