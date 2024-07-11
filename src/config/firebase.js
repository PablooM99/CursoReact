// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { products } from "../data/products";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUAUYAVFk7E2MxcSqUSZdSj5D7yhu8Mb8",
  authDomain: "mp-indumentarias.firebaseapp.com",
  projectId: "mp-indumentarias",
  storageBucket: "mp-indumentarias.appspot.com",
  messagingSenderId: "297261978171",
  appId: "1:297261978171:web:e35088612eb0ecdd3d021e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// products.forEach((prod) => {
//     addDoc(collection(db, 'products'), prod)
//      .then((elem) => console.log(`se agregó el producto id ${elem.id}`))
//      .catch((error) => console.log(error));
// });