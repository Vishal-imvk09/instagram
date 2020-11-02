import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB5tZ91nbp5nzzF_AOBqnwLCUHJkXsoEsc",
  authDomain: "instagram-clone-97993.firebaseapp.com",
  databaseURL: "https://instagram-clone-97993.firebaseio.com",
  projectId: "instagram-clone-97993",
  storageBucket: "instagram-clone-97993.appspot.com",
  messagingSenderId: "410157384831",
  appId: "1:410157384831:web:4f0c5975845fec7ee9ab4a",
  measurementId: "G-PQT8C00WMP",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

