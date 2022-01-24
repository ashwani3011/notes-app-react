import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClcPHSgXT3W7d6ln-uhsDPjCMtyF6pSEU",
  authDomain: "notes-app-react-9afef.firebaseapp.com",
  projectId: "notes-app-react-9afef",
  storageBucket: "notes-app-react-9afef.appspot.com",
  messagingSenderId: "548284852367",
  appId: "1:548284852367:web:213ab5f81dd2f5c37b28fa",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
