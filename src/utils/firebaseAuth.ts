import { auth } from "./firebaseConfig";
import { GoogleAuthProvider, signInWithPopup, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

export const googleSignIn = async () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

export const emailSignIn = async (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const emailSignUp = async (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  return signOut(auth);
};
