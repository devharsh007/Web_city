// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCcpjvCyAq6RiV39bKso2NYpHHj3uyB2Cg",
    authDomain: "web-city-993aa.firebaseapp.com",
    projectId: "web-city-993aa",
    storageBucket: "web-city-993aa.appspot.com",
    messagingSenderId: "988321049876",
    appId: "1:988321049876:web:9fe342d10883b445a8e601",
    measurementId: "G-0SSD97QHTW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize authentication
const auth = firebase.auth();

export { auth };