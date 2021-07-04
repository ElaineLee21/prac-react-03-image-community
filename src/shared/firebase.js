import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDqIkQWYE0XFHqnvt4H4CTCYeuqw3Fmx_4",
  authDomain: "img-and-communication.firebaseapp.com",
  projectId: "img-and-communication",
  storageBucket: "img-and-communication.appspot.com",
  messagingSenderId: "1024004966555",
  appId: "1:1024004966555:web:e6d8ad5f35ac2ee66a9e3e",
  measurementId: "G-74C2844E0R",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// 자주 쓰는 애들 export
const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();

export { auth, apiKey };
