import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp0XejCV6R1lhcPHSNea0OayLNjRIWxIU",
  authDomain: "batublog-9361c.firebaseapp.com",
  projectId: "batublog-9361c",
  storageBucket: "batublog-9361c.firebasestorage.app",
  messagingSenderId: "1023527137910",
  appId: "1:1023527137910:web:7fa8de13823c2b31312557"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const dp = getFirestore(app);

export {auth , dp};
