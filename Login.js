import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword ,GoogleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

const firebaseConfig = {
apiKey: "AIzaSyDrq_xGtryRBhMP1LykLOT9_xFRPlSR6qY",
authDomain: "userauth-671f2.firebaseapp.com",
projectId: "userauth-671f2",
storageBucket: "userauth-671f2.firebasestorage.app",
messagingSenderId: "164942403243",
appId: "1:164942403243:web:d07db5579b62d6d2a109ee"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

document.getElementById("google-log-btn").addEventListener('click',function(){
    signInWithPopup(auth, provider)
    .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    alert("Google Authentication successfull");
    }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    });
});

document.getElementById('login-submit').addEventListener('click',function(){
    const loginemail=document.getElementById('login-mail').value;
    const loginpassword=document.getElementById('login-password').value;

    signInWithEmailAndPassword(auth, loginemail, loginpassword)
    .then((userCredential) => {
        const user = userCredential.user;
        alert("You are Successfully authenticated");
        document.getElementById('login-mail').value="";
        document.getElementById('login-password').value="";
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Sorry. You are Non registered user");
    });
});
