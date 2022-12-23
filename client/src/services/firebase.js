import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyAj1rRWgwaTwERHMzv2D0TVe5dp1rXCmnc',
  authDomain: 'async-tic-tac-toe-a4011.firebaseapp.com',
  databaseURL:
    'https://async-tic-tac-toe-a4011-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'async-tic-tac-toe-a4011',
  storageBucket: 'async-tic-tac-toe-a4011.appspot.com',
  messagingSenderId: '1037188086098',
  appId: '1:1037188086098:web:edc03ae581da0dc9a3e28b',
  measurementId: 'G-BV1V43DLDQ',
};

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const analytics = getAnalytics(app);
export { auth, database };
