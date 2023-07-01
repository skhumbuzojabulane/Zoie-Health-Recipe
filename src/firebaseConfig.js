// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA38ZQFOUSELiwmlYOA76TnWZrY28dUt9E",
  authDomain: "healthy-recipe-fbb2b.firebaseapp.com",
  databaseURL: "https://healthy-recipe-fbb2b-default-rtdb.firebaseio.com",
  projectId: "healthy-recipe-fbb2b",
  storageBucket: "healthy-recipe-fbb2b.appspot.com",
  messagingSenderId: "757477750335",
  appId: "1:757477750335:web:fccbc88e756e40fddb2a8a",
  measurementId: "G-73HQPNY4C5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Set Firebase Storage debugging
getStorage(app).setLogLevel('debug');

export { app, analytics };