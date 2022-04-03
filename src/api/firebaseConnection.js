import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDEIbM5x1IFmPQvFVJK1DovzkTvyxLgjgo",
  authDomain: "impar-79adf.firebaseapp.com",
  projectId: "impar-79adf",
  storageBucket: "impar-79adf.appspot.com",
  messagingSenderId: "237441409686",
  appId: "1:237441409686:web:075400a490ddadd3d998b7"
};


initializeApp(firebaseConfig);

const db = getFirestore()

export default db