import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDOjZR71dQTX6Lh9IGbEuI6foCYM-RcUQ8",
  authDomain: "lookirealtime.firebaseapp.com",
  databaseURL: "https://lookirealtime-default-rtdb.firebaseio.com",
  projectId: "lookirealtime",
  storageBucket: "lookirealtime.appspot.com",
  messagingSenderId: "25802494738",
  appId: "1:25802494738:web:138ce8e1f866ace9e859cb",
  measurementId: "G-SEFGGDCJFZ",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
