import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCnmxgbwkDYwKodUObsxdUU6wAZxmKAhXU",
  authDomain: "yout-clone-react.firebaseapp.com",
  projectId: "yout-clone-react",
  storageBucket: "yout-clone-react.appspot.com",
  messagingSenderId: "713322345160",
  appId: "1:713322345160:web:0d7d726429f189d96a2bfd"
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();