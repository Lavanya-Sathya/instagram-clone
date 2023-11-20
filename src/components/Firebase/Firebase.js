import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseApp = initializeApp({
  apiKey: "AIzaSyA_-5Ddxd97ZLFg1dhGgbkTUnu7hZvR4Mk",
  authDomain: "instagram-clone-2f3bd.firebaseapp.com",
  projectId: "instagram-clone-2f3bd",
  storageBucket: "instagram-clone-2f3bd.appspot.com",
  messagingSenderId: "815670129637",
  appId: "1:815670129637:web:e22e80e9a32ce883b3f50c",
  measurementId: "G-NLFC40DGDX",
});
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);
export { db, auth, storage };
