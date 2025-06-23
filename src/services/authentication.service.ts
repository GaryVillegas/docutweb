import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  deleteUser,
} from "firebase/auth";
import { FIREBASE_AUTH } from "../firebaseConfig";

class AuthenticationService {
  async authentication(email: string, password: string) {
    try {
      await setPersistence(FIREBASE_AUTH, browserLocalPersistence);
      await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
    } catch (error: any) {
      console.error("❌ Error al ingresar:", error);

      const errorCode = error?.code || error?.message;

      if (
        errorCode === "auth/invalid-credential" ||
        errorCode === "auth/wrong-password" ||
        errorCode === "auth/user-not-found" ||
        errorCode === "INVALID_LOGIN_CREDENTIALS"
      ) {
        throw new Error("Correo o contraseña incorrectos.");
      }

      throw new Error("Ocurrió un error al iniciar sesión.");
    }
  }

  async registration(email: string, password: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password
      );
      return userCredential.user.uid;
    } catch (error) {
      console.error("Error al crear cuenta: ", error);
      if (error instanceof Error && "code" in error) {
        const firebaseError = error as { code: string };
        if (
          firebaseError.code === "auth/invalid-credential" ||
          firebaseError.code === "auth/wrong-password"
        ) {
          throw error;
        } else if (firebaseError.code === "auth/user-not-found") {
          throw error;
        } else {
          throw error;
        }
      }
      throw error;
    }
  }

  async loginWithGoogle() {
    try {
      await setPersistence(FIREBASE_AUTH, browserLocalPersistence);
      const provider = new GoogleAuthProvider();
      await signInWithPopup(FIREBASE_AUTH, provider);
    } catch (error) {
      console.error("Error al iniciar sesion con google: ", error);
      throw error;
    }
  }

  async logOut() {
    try {
      await signOut(FIREBASE_AUTH);
    } catch (error) {
      console.error("Error al cerrar sesion: ", error);
      throw error;
    }
  }

  async deleteAccount(user: any) {
    try {
      await deleteUser(user);
    } catch (error) {
      console.error("Error al eliminar un usuario: ", error);
      throw error;
    }
  }
}

export default new AuthenticationService();
