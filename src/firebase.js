import firebase from "firebase/app";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDPeCHuP4EIMhxvPtlgzQLmbCsBjgrRlYQ",
  authDomain: "clone-498e3.firebaseapp.com",
  projectId: "clone-498e3",
  storageBucket: "clone-498e3.appspot.com",
  messagingSenderId: "691006786141",
  appId: "1:691006786141:web:18dcf9f12bb6ad7dd95bb4",
  measurementId: "G-XSW78W89QC",
};
firebase.initializeApp(firebaseConfig);
export default firebase.auth();
