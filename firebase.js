// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
  onSnapshot,
  arrayRemove,
  deleteField,
} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCfY6KjxX-IzQW4BgxLGLSJ1w4ceQa7jBg',
  authDomain: 'movie-app-8cf9c.firebaseapp.com',
  projectId: 'movie-app-8cf9c',
  storageBucket: 'movie-app-8cf9c.appspot.com',
  messagingSenderId: '921999491080',
  appId: '1:921999491080:web:5186c343b10451cffdd1bd',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglepopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        savedMovies: [],
        savedSeries: [],
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
    return userDocRef;
  }
};

export const viewUserDocs = async (userAuth, callback) => {
  try {
    const userDocRef = doc(db, 'users', userAuth);
    await onSnapshot(userDocRef, callback);
  } catch (error) {
    console.log(error.message);
  }
};

export const updateMoviesDoc = async (
  userAuth,
  id,
  title,
  img,
  date,
  genre,
  type
) => {
  const userDocRef = doc(db, 'users', userAuth);
  try {
    await updateDoc(userDocRef, {
      savedMovies: arrayUnion({
        id: id,
        title: title,
        img: img,
        releaseDate: date,
        genre: genre,
        type: type,
      }),
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateSeriesDoc = async (
  userAuth,
  id,
  title,
  img,
  date,
  genre,
  type
) => {
  const userDocRef = doc(db, 'users', userAuth);

  try {
    await updateDoc(userDocRef, {
      savedSeries: arrayUnion({
        id: id,
        title: title,
        img: img,
        releaseDate: date,
        genre: genre,
        type: type,
      }),
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteMovieFromDoc = async (userAuth, updatedDoc) => {
  const userDocRef = doc(db, 'users', userAuth);
  try {
    await updateDoc(userDocRef, {
      savedMovies: updatedDoc,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteShowFromDoc = async (userAuth, updatedDoc) => {
  const userDocRef = doc(db, 'users', userAuth);
  try {
    await updateDoc(userDocRef, {
      savedSeries: updatedDoc,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = callback => {
  onAuthStateChanged(auth, callback);
};
