import { FIREBASE_DB } from "../firebaseConfig";
import {
  doc,
  setDoc,
  getDoc,
  query,
  collection,
  where,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import type { userData, userInfo } from "../types/user.type";
import type { storeInfo } from "../types/store.type";
import type { service, serviceData } from "../types/service.type";
import type { date } from "../types/date.type";

class StoreService {
  //Funciones de creacion
  /**
   * @param uid
   * @param userInfo
   * Para crear un usuario con su informacion
   */
  async createUser(uid: string, userInfo: userInfo): Promise<void> {
    try {
      if (!uid || !userInfo) {
        throw new Error("Toda la informacion es requerida.");
      }

      await setDoc(doc(FIREBASE_DB, "users", uid), {
        userInfo,
      });
      console.log("User Info created successfully.");
    } catch (error) {
      console.error("Error creating user info: ", error);
      throw error;
    }
  }

  /**
   * @param userUID
   * @param storeInfo
   * Para crear una tienda con su informacion
   */
  async createStore(userUID: string, storeInfo: storeInfo): Promise<void> {
    try {
      if (!userUID || !storeInfo) {
        throw new Error("Toda la informacion es requerida.");
      }

      const storeId = `${Date.now().toLocaleString()}_${userUID}`;
      await setDoc(doc(FIREBASE_DB, "stores", storeId), { userUID, storeInfo });
      console.log("user store created successfully!");
    } catch (error) {
      console.error("Error creating store info: ", error);
      throw error;
    }
  }

  /**
   * @param storeId
   * @param serviceData
   * Para crear un servicio con su informacion
   */
  async createService(storeId: string, serviceData: service): Promise<void> {
    try {
      if (!serviceData || !storeId)
        throw new Error("Service data are requiered.");
      const serviceId = `${Date.now().toLocaleString()}_${storeId}`;

      await setDoc(doc(FIREBASE_DB, "service", serviceId), {
        serviceData,
      });
      console.log("service created successfully!");
    } catch (error) {
      console.error("Error creating service: ", error);
      throw error;
    }
  }

  /**
   * @param dateData
   * Para crear un cita con su informacion
   */
  async createDate(dateData: date): Promise<void> {
    try {
      if (!dateData) throw new Error("date data are required.");
      const dateId = `${dateData.idUsuario}_${Date.now().toLocaleString()}`;
      await setDoc(doc(FIREBASE_DB, "cita", dateId), {
        cita: dateData,
      });
      console.log("cita successfully created!");
    } catch (error) {
      console.error("Error creating date: ", error);
      throw error;
    }
  }

  //Funciones para obtener los datos
  /**
   * @param storeId
   * @returns
   * funcion para traer los servicios de la tienda.
   */
  async getStoreServices(storeId: string): Promise<serviceData[] | undefined> {
    try {
      const serviceQuery = query(
        collection(FIREBASE_DB, "service"),
        where("storeId", "==", storeId)
      );
      const serviceSnapshot = await getDocs(serviceQuery);
      const services = serviceSnapshot.docs.map((service) => {
        const serviceData = service.data();
        return {
          serviceId: service.id,
          serviceData: serviceData,
        } as serviceData;
      });
      console.log("✅ Services catchs: ", services);
      return services;
    } catch (error) {
      console.log("❌ error catching services: ", error);
      throw error;
    }
  }

  /**
   * @param serviceId
   * @returns
   * funcion que devuelve datos de un solo servicio, no mas que 1.
   */
  async getService(serviceId: string): Promise<serviceData | undefined> {
    try {
      const serviceRef = doc(FIREBASE_DB, "service", serviceId);
      const serviceSnapshot = await getDoc(serviceRef);
      if (!serviceSnapshot.exists()) {
        console.warn("🚫 service doesn't exit.");
        return undefined;
      }
      return {
        serviceId: serviceId,
        serviceData: serviceSnapshot.data(),
      } as serviceData;
    } catch (error) {
      console.log("❌ error catching service: ", error);
      throw error;
    }
  }

  /**
   * @param uid
   * @returns
   * retorna los datos del usuario.
   */
  async getUserData(uid: string): Promise<userData | undefined> {
    try {
      const userRef = doc(FIREBASE_DB, "users", uid);
      const userSnapshot = await getDoc(userRef);
      if (!userSnapshot.exists()) {
        console.warn("🚫 service doesn't exit.");
        return undefined;
      }
      const data = userSnapshot.data();
      return {
        UID: uid,
        userInfo: data.userInfo,
      } as userData;
    } catch (error) {
      console.log("❌ error catching service: ", error);
      throw error;
    }
  }

  //Funciones de actualizacion
  /**
   * @param uid
   * @param tipe
   * Con estos dos parametros se actuliza el usuario a administrador.
   * En si no es necesario tener esta funcion aca, pero es mejor tenerla que necesitarla,
   * que necesitarla y no tenerla.
   */
  async updateUserTipe(uid: string, tipe: string): Promise<void> {
    const userDocRef = doc(FIREBASE_DB, "users", uid);
    try {
      await updateDoc(userDocRef, { "userInfo.tipe": tipe });
      console.log("user successfully updated!");
    } catch (error) {
      console.error("Error updating user: ", error);
      throw error;
    }
  }

  /**
   * @param uid
   * @param userInfo
   * Funcion para actualizar la informacion del usuario, necesaria.
   */
  async updateUser(uid: string, userInfo: userInfo): Promise<void> {
    try {
      const userRef = doc(FIREBASE_DB, "users", uid);
      await updateDoc(userRef, { userInfo });
      console.log("✅ User updated:", uid);
    } catch (error) {
      console.error("❌ Error updating user:", error);
      throw error;
    }
  }

  /**
   * @param serviceId
   * @param serviceData
   * Funcion para actualizar servicios.
   */
  async updateService(serviceId: string, serviceData: service): Promise<void> {
    try {
      const serviceRef = doc(FIREBASE_DB, "service", serviceId);
      await updateDoc(serviceRef, { serviceData });
      console.log("✅ Service updated:", serviceId);
    } catch (error) {
      console.error("❌ Error updating service:", error);
      throw error;
    }
  }

  /**
   * @param storeId
   * @param storeData
   * Funcion para actualizar tienda.
   */
  async updateStore(storeId: string, storeData: storeInfo): Promise<void> {
    try {
      const storeRef = doc(FIREBASE_DB, "stores", storeId);
      await updateDoc(storeRef, { storeData });
      console.log("✅ Store updated:", storeId);
    } catch (error) {
      console.error("❌ Error updating store:", error);
      throw error;
    }
  }

  //Funciones para eliminar
  /**
   * @param serviceId
   * Funcion para eliminar un servicio en base a su id
   */
  async deleteService(serviceId: string): Promise<void> {
    try {
      const serviceRef = doc(FIREBASE_DB, "service", serviceId);
      await deleteDoc(serviceRef);
      console.log("✅ Service deleted:", serviceId);
    } catch (error) {
      console.error("❌ Error deleting service: ", error);
      throw error;
    }
  }

  /**
   * @param storeId
   * con solo este parametro se eliminaran los datos de la tienda
   */
  async deleteStore(storeId: string): Promise<void> {
    try {
      const serviceQuery = query(
        collection(FIREBASE_DB, "service"),
        where("storeId", "==", storeId)
      );
      const serviceSnapshot = await getDocs(serviceQuery);
      const deleteServicePromise = serviceSnapshot.docs.map((serviceDoc) => {
        this.deleteService(serviceDoc.id);
      });
      await Promise.all(deleteServicePromise);
      console.log(
        `✅ ${serviceSnapshot.docs.length} deleted service to store: ${storeId}`
      );
      const storeRef = doc(FIREBASE_DB, "stores", storeId);
      await deleteDoc(storeRef);
      console.log("✅ Store deleted: ", storeId);
    } catch (error) {
      console.error("❌ Error deleting store:", error);
      throw error;
    }
  }
}

export default new StoreService();
