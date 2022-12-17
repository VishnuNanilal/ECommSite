// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
// 	apiKey: "AIzaSyDznEVhCpkYb1U1ZgLecUDVmEgWGFXrebk",
// 	authDomain: "shop-a4519.firebaseapp.com",
// 	projectId: "shop-a4519",
// 	storageBucket: "shop-a4519.appspot.com",
// 	messagingSenderId: "550491177012",
// 	appId: "1:550491177012:web:da18c40b1cccf3cfa58a61",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPYZ-6YGKad7SbgbVewJWQPi_LDwu9kmo",
  authDomain: "ecomm-site-5ce1b.firebaseapp.com",
  projectId: "ecomm-site-5ce1b",
  storageBucket: "ecomm-site-5ce1b.appspot.com",
  messagingSenderId: "340329787291",
  appId: "1:340329787291:web:3a05a9f21b41d509853b3e",
  measurementId: "G-MWXS2CBTDW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;