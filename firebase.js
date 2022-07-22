// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAujlXWhMZhapMxs-ullZKDrv30fwJsEU8',
  authDomain: 'movie-app-b0ead.firebaseapp.com',
  projectId: 'movie-app-b0ead',
  storageBucket: 'movie-app-b0ead.appspot.com',
  messagingSenderId: '961769743947',
  appId: '1:961769743947:web:326cfcdb39c1e80d0ecfce',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
