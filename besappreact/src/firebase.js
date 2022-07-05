import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyDynM73yjUwZCQIhXvEffED6U-SkXF9YYs",
    authDomain: "besobjetos.firebaseapp.com",
    projectId: "besobjetos",
    storageBucket: "besobjetos.appspot.com",
    messagingSenderId: "186903565267",
    appId: "1:186903565267:web:eafd478d3ec3ebdf0e1526"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app)