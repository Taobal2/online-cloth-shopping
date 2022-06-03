import React from "react";
import SignUp from "../../components/sign-up/sign-up.component";

import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from "../../utility/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  };

  return (
    <div>
      <h1>SignIn page</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
      <SignUp />
    </div>
  );
};

export default SignIn;
