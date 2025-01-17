import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBwaWTKGmbkKx74QlYXxQ0WGR3opr5bdE4",
  authDomain: "clothing-store-a2991.firebaseapp.com",
  projectId: "clothing-store-a2991",
  storageBucket: "clothing-store-a2991.firebasestorage.app",
  messagingSenderId: "1044253916383",
  appId: "1:1044253916383:web:b0ab81f54aec6bcdd93d6a",
  measurementId: "G-JE5XSPJCWP"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);