import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"


const firebaseConfig = {
  apiKey: "AIzaSyC_0loCHUfeNZnvjMWEeOwVvh5lmNeIuL8",
  authDomain: "disney-plus-clone-e4770.firebaseapp.com",
  projectId: "disney-plus-clone-e4770",
  storageBucket: "disney-plus-clone-e4770.appspot.com",
  messagingSenderId: "155922326403",
  appId: "1:155922326403:web:2e263552b0558db064ccb6",
  measurementId: "G-98H137VQ98"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;