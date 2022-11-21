import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBj46x8iinNj4XdHrxZq1O3v5SAfN2MOds",
  authDomain: "habit-trakcer-c7138.firebaseapp.com",
  projectId: "habit-trakcer-c7138",
  storageBucket: "habit-trakcer-c7138.appspot.com",
  messagingSenderId: "515937647824",
  appId: "1:515937647824:web:238495f8096b5fec1ff2d5",
};


export const fireBaseApp = initializeApp(firebaseConfig);
export const fireBaseAuth = getAuth(fireBaseApp);
