import {
  getFirestore,
  doc,
  setDoc,
  collection,
  addDoc
} from 'firebase/firestore';
import firebase from './firebase';

const db = getFirestore(firebase);

export async function createUser(uid, data) {
  return await setDoc(
    doc(db, 'users', uid),
    {
      uid: uid,
      ...data
    },
    { merge: true }
  );
}

export async function createSite(data) {
  return await setDoc(doc(db, 'sites', data), {
    ...data
  });
}
