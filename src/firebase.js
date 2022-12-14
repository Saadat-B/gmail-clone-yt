import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBu16kohL7WzpfUvqoEg8fKBN2h9zgv_u4",
  authDomain: "clone-yt-1f199.firebaseapp.com",
  projectId: "clone-yt-1f199",
  storageBucket: "clone-yt-1f199.appspot.com",
  messagingSenderId: "502541523490",
  appId: "1:502541523490:web:96ccc0ea44296b413f487b",
  measurementId: "G-B8ZGTWSDFL",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp);

const provider = new GoogleAuthProvider();

export { db, auth, provider };
