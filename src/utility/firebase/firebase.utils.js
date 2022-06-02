import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnP-o97cJi5gibSm24_LPlZeREJvHluSo",
  authDomain: "cloth-shopping-db.firebaseapp.com",
  projectId: "cloth-shopping-db",
  storageBucket: "cloth-shopping-db.appspot.com",
  messagingSenderId: "499176290179",
  appId: "1:499176290179:web:33840e0cba8420238428b6",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocFromFirestore = async (userAuth) => {
  const userDocRef = doc(db, "user", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  //   console.log(userSnapshot);
  //   console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    // if user data does not exist
    // create/ set document with the data from userAuth in my collection
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (err) {
      //   console.log("error creating user", err.message);
    }
  }

  return userDocRef;
};
