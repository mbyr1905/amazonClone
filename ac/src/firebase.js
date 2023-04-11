// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCmhPFQ7R_g1ST36KMmgh2TUjmeFKrOOOM",
    authDomain: "clone-97bdc.firebaseapp.com",
    projectId: "clone-97bdc",
    storageBucket: "clone-97bdc.appspot.com",
    messagingSenderId: "339194037945",
    appId: "1:339194037945:web:f39fbf4b976671e4577d68",
    measurementId: "G-NPRP6BTQCK"
  };

  // const firebaseApp=firebase.intializeApp(firebaseConfig);

  // const db=firebaseApp.firestore();
  // const auth=firebase.auth();

  // export {db,auth};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth, db };