import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

export const guardarUsuarioAdministrador = async (
  uid: string,
  userInfo: { name: string; lastName: string; rut: string; type: string }
) => {
  try {
    await setDoc(doc(db, "users", uid), {
      userInfo: {
        name: userInfo.name,
        lastName: userInfo.lastName,
        rut: userInfo.rut,
        type: "administrador", // siempre desde la Web
      },
    });
    console.log("✅ Usuario administrador guardado correctamente!");
  } catch (error) {
    console.error("❌ Error al guardar usuario:", error);
  }
};
