import React, { useState, useEffect, useContext, createContext } from 'react';
import firebase from './firebase';
import {
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  GithubAuthProvider
} from 'firebase/auth';

const authContext = createContext();
const provider = new GithubAuthProvider();
const auth = getAuth(firebase);

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signinWithGithub = () =>
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        // ...
        setUser(user);
        return user;
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential);
        // ...
      });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // detaching the listener
      if (auth) {
        // ...your code to handle authenticated users.
        setUser(user);
      } else {
        // No user is signed in...code to handle unauthenticated users.
        setUser(false);
      }
    });
    return () => unsubscribe(); // unsubscribing from the listener when the component is unmounting.
  }, []);

  const signout = () =>
    onAuthStateChanged(auth, (user) => {
      if (auth) {
        auth.signOut();
        setUser(false);
      }
    });

  return {
    user,
    signinWithGithub,
    signout
  };
}
