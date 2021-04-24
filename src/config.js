import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDTWe-VZ9CSg8nEZLUO7houMf7JKs8nLlo",
  authDomain: "finoxen-c70d2.firebaseapp.com",
  projectId: "finoxen-c70d2",
  storageBucket: "finoxen-c70d2.appspot.com",
  messagingSenderId: "1094424133994",
  appId: "1:1094424133994:web:debe3ea29b1873c7b8a513",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
