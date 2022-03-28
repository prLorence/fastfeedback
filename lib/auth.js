import React, { useState, useEffect, useContext, createContext } from 'react';
import firebase from './firebase';
import { createUser } from './db';
import {
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  GithubAuthProvider
} from 'firebase/auth';

const authContext = createContext();
const provider = new GithubAuthProvider();
const auth = getAuth(firebase);

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const handleUser = (rawUser) => {
    if (rawUser) {
      const user = formatUser(rawUser);

      createUser(user.uid, user);
      setUser(user);
      return user;
    } else {
      setUser(false);
      return false;
    }
  };

  const signinWithGithub = () =>
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        // ...
        handleUser(user);
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
        handleUser(user);
      } else {
        // No user is signed in...code to handle unauthenticated users.
        handleUser(false);
      }
    });
    return () => unsubscribe(); // unsubscribing from the listener when the component is unmounting.
  }, []);

  const signout = () =>
    onAuthStateChanged(auth, (user) => {
      if (auth) {
        auth.signOut();
        handleUser(false);
      }
    });

  return {
    user,
    signinWithGithub,
    signout
  };
}

const formatUser = (user) => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photo: user.photoURL
  };
};
