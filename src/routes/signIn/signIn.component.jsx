import React from "react";
import {
  signInWithGooglePopup,
  createUserDocFromFirestore,
} from "../../utility/firebase/firebase.utils";

const signIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromFirestore(user);
  };
  return (
    <div>
      <h1>SignIn page</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </div>
  );
};

export default signIn;
