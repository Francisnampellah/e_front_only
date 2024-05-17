// src/auth.js
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

import { getFirestore, doc, setDoc } from "firebase/firestore";
const db = getFirestore();

const signUp = (formData) => {
  const { email, password, name, phone } = formData;

  return createUserWithEmailAndPassword(auth, email, password)
    .then((response) => {
      const user = response.user;
      console.log(user);
      if (!user.uid) {
        throw new Error("Sign-up was not successful. UID missing.");
      }

      return setDoc(doc(db, "users", user.uid), { name, phone }).then(() => {
        console.log("Additional user data stored successfully");
        return response;
      });
    })
    .catch((error) => {
      console.error("Error signing up:", error.message);
      throw error; // rethrow the error if you want to handle it further up the call stack
    });
};
// Sign in function
const signIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("User signed in successfully");
  } catch (error) {
    console.error("Error signing in:", error);
  }
};

// Sign out function
const logOut = async () => {
  try {
    await signOut(auth);
    console.log("User signed out successfully");
  } catch (error) {
    console.error("Error signing out:", error);
  }
};

export { signUp, signIn, logOut };

// // src/auth.js
// import { auth } from "../firebase/firebase";
// import {
//   RecaptchaVerifier,
//   signInWithPhoneNumber,
//   signInWithCredential,
//   PhoneAuthProvider,
// } from "firebase/auth";

// export const setupRecaptcha = (containerId, auth) => {
//   const recaptchaVerifier = new RecaptchaVerifier(auth, containerId, {
//     size: "invisible",
//     callback: (response) => {
//       console.log("Recaptcha resolved");
//     },
//     "expired-callback": () => {
//       console.log("Recaptcha expired");
//     },
//   });
//   return recaptchaVerifier;
// };

// // export const sendOtp = (phoneNumber) => {
// //   const appVerifier = setupRecaptcha("recaptcha-container", auth);
// //   return signInWithPhoneNumber(auth,"+255773547567",appVerifier);
// // };

// export const sendOtp = (phoneNumber) => {
//   const appVerifier = setupRecaptcha("recaptcha-container", auth);
//   return signInWithPhoneNumber(auth, "+" + phoneNumber, appVerifier)
//     .then((confirmationResult) => {
//       console.log(confirmationResult);
//     })
//     .catch((error) => {
//       console.error("Error sending OTP:", error);
//       // Handle the error here, potentially showing an error message to the user
//     });
// };
// export const verifyOtp = (verificationId, otp) => {
//   const credential = PhoneAuthProvider.credential(verificationId, otp);
//   return signInWithCredential(auth, credential);
// };

// const convertPhoneToEmail = (phone) => {
//   // replacing special characters( +,-, (, ), and #. ) to alphabet chars
//   console.log(phone);
//   const cleanedPhone = phone
//     .replace("(", "A")
//     .replace(")", "B")
//     .replace(",", "C")
//     .replace("#", "D")
//     .replace("", "E");

//   const email = `${cleanedPhone}@yourdomain.com`;

//   return email;
// };
