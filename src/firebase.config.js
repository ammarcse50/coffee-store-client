// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIRWB5XWAWOdNnVJpkRCXxiA5LpadCOIM",
  authDomain: "coffe-store-firebase.firebaseapp.com",
  projectId: "coffe-store-firebase",
  storageBucket: "coffe-store-firebase.appspot.com",
  messagingSenderId: "165926696540",
  appId: "1:165926696540:web:12fbb12912ae3824f5d899"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;