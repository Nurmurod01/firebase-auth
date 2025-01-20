import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAVxhSu9mFQQW4YfVZsTxEATZgH8VYFmLI",
  authDomain: "my-project-ne-19b4b.firebaseapp.com",
  projectId: "my-project-ne-19b4b",
  storageBucket: "my-project-ne-19b4b.firebasestorage.app",
  messagingSenderId: "598233064473",
  appId: "1:598233064473:web:6b763ed4bcb252ecd77688",
  measurementId: "G-DRXVBWH2T5",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);
