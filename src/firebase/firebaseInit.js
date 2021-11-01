import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAGmE6WyXUu5FUTWg3Nibru6lNqgM2qjuI",
    authDomain: "invoice-app-56ea8.firebaseapp.com",
    projectId: "invoice-app-56ea8",
    storageBucket: "invoice-app-56ea8.appspot.com",
    messagingSenderId: "341563129282",
    appId: "1:341563129282:web:f67e6fed457c16a8ddea5b",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();