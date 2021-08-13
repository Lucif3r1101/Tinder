// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCjOYsvmJ3By70xe0IQpR9Mwa1NXTFdSMA",
    authDomain: "tinder-6f288.firebaseapp.com",
    projectId: "tinder-6f288",
    storageBucket: "tinder-6f288.appspot.com",
    messagingSenderId: "532302729617",
    appId: "1:532302729617:web:77eecd916a8b183d03ca30",
    measurementId: "G-QGJDH77PC1"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database =firebaseApp.firestore();


  export default database;
