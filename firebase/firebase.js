import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCe9oLcXRr5kciMkiJwu5JQ-jc4QSlDIZo",
  authDomain: "signal-clone-ec105.firebaseapp.com",
  projectId: "signal-clone-ec105",
  storageBucket: "signal-clone-ec105.appspot.com",
  messagingSenderId: "575237077441",
  appId: "1:575237077441:web:d307ed4014c20802d15740",
  measurementId: "G-TF4M8BKBN5",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
