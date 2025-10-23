import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithPopup 
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyApO2rk8lNiMo5B_Qm7VQO8CgtxpPe7Yxs",
  authDomain: "auth-cb6a1.firebaseapp.com",
  projectId: "auth-cb6a1",
  storageBucket: "auth-cb6a1.firebasestorage.app",
  messagingSenderId: "362305358589",
  appId: "1:362305358589:web:062c0e9540786a44f28c94"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

document.getElementById("google-log-btn").addEventListener('click', function() {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      alert("Google Authentication successful!");
      console.log("User:", user);
    })
    .catch((error) => {
      console.error("Google Auth Error:", error.message);
      alert("Google login failed. Try again!");
    });
});

document.getElementById('login-submit').addEventListener('click', function() {
  const loginEmail = document.getElementById('login-mail').value;
  const loginPassword = document.getElementById('login-password').value;

  signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("You are successfully authenticated!");
      document.getElementById('login-mail').value = "";
      document.getElementById('login-password').value = "";
    })
    .catch((error) => {
      console.error("Login Error:", error.message);
      alert("Sorry. You are not a registered user.");
    });
});
