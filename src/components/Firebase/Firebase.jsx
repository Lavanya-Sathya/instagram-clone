import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseApp = initializeApp({
  apiKey: "Api_Key",
  authDomain: "Auth_Domain",
  projectId: "project_id",
  storageBucket: "storage_bucket",
  messagingSenderId: "message_Sender",
  appId: "app_id",
  measurementId: "measurementId",
});
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);
export { db, auth, storage };
