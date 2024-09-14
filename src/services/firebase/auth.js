import { auth } from "./index.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  updatePassword,
} from "firebase/auth";

async function createUserWithEmailAndPasswordAsync (email, password) {
  return await createUserWithEmailAndPassword(auth, email, password);
};

async function signInWithEmailAndPasswordAsync(email, password) {
  return await signInWithEmailAndPassword(auth, email, password);
};

async function signOutAsync() {
  return await auth.signOut();
};

async function passwordResetAsync(email) {
  return await sendPasswordResetEmail(auth, email);
};

async function passwordChangeAsync(password) {
  return await updatePassword(auth.currentUser, password);
};

async function sendEmailVerificationAsync() {
  return await sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  });
};

export {
  createUserWithEmailAndPasswordAsync,
  signInWithEmailAndPasswordAsync,
  signOutAsync,
  sendEmailVerificationAsync,
  passwordChangeAsync,
  passwordResetAsync
};
