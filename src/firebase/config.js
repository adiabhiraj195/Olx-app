import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
const firebaseConfig = {
  apiKey: "AIzaSyBwy5fYke8170jtUOXyk8UrKnzXtH8J9-Y",
  authDomain: "olx-app-aaf19.firebaseapp.com",
  projectId: "olx-app-aaf19",
  storageBucket: "olx-app-aaf19.appspot.com",
  messagingSenderId: "199347188424",
  appId: "1:199347188424:web:0674c05248fd4d40a2abfd",
  measurementId: "G-464WY3M36H"
};

  export const Firebase= firebase.initializeApp(firebaseConfig)//named export