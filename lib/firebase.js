// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD37D3M7HhBgATYWmpEMBjPVU4r1aIyr1o',
  authDomain: 'fast-feedback-demo-6e9c9.firebaseapp.com',
  projectId: 'fast-feedback-demo-6e9c9',
  storageBucket: 'fast-feedback-demo-6e9c9.appspot.com',
  messagingSenderId: '929949598161',
  appId: '1:929949598161:web:0ce7a25f057b2491b320f0'
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
