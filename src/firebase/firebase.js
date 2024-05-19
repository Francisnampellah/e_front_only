import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFje3ePaDdLESQZz6cwhaxV7-lqUcwXh8",
  authDomain: "beizakarikoo-60760.firebaseapp.com",
  databaseURL: "https://beizakarikoo-60760-default-rtdb.firebaseio.com",
  projectId: "beizakarikoo-60760",
  storageBucket: "beizakarikoo-60760.appspot.com",
  messagingSenderId: "77243634869",
  appId: "1:77243634869:web:7eac3f033ef333fd165afc",
  measurementId: "G-C51TVHBE4W",
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
