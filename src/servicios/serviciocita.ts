import { db } from "../firebase";
import { collection, getDocs, deleteDoc, doc,getDoc } from "firebase/firestore";

// Crear cita
export interface ICita {
  apellidoUsuario: string;
  nombreUsuario: string;
  fechaSeleccionada: string;
  horaSeleccionada: string;
  idNegocio: string;
  idServicio: string;
  idUsuario: string;
}



// Obtener citas
export const obtenerCitas = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "cita"));
    return querySnapshot.docs.map((doc) => {
      const citaData = doc.data().cita;  // acceder al campo "cita"
      return {
        id: doc.id,
        ...citaData,
      };
    });
  } catch (error) {
    console.error("❌ Error al obtener citas:", error);
    return [];
  }
};
export const obtenerServicioPorId = async (idServicio: string) => {
  try {
    const docRef = doc(db, "service", idServicio);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const serviceData = docSnap.data().serviceData;
      return {
        nombreServicio: serviceData?.nombreServicio || "Servicio desconocido",
        precio: serviceData?.precio || 0
      };
    } else {
      return {
        nombreServicio: "Servicio no encontrado",
        precio: 0
      };
    }
  } catch (error) {
    console.error("❌ Error al obtener servicio:", error);
    return {
      nombreServicio: "Error al obtener servicio",
      precio: 0
    };
  }
};





// Eliminar cita
export const eliminarCita = async (idCita: string) => {
  try {
    await deleteDoc(doc(db, "cita", idCita));
    console.log("✅ Cita eliminada");
  } catch (error) {
    console.error("❌ Error al eliminar cita:", error);
  }
};
