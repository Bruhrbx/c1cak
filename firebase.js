// firebase.js
const firebaseConfig = {
  apiKey: "AIzaSyC2rNP1TzEw8SnJkFWCH3by6IfOvG6NbKA",
  authDomain: "cicak-8f655.firebaseapp.com",
  projectId: "cicak-8f655",
  storageBucket: "cicak-8f655.firebasestorage.app",
  messagingSenderId: "173909890044",
  appId: "1:173909890044:web:af28f3e6e19000ae179879",
  measurementId: "G-FWZKXYRNEE"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

function login() {
  auth.signInWithEmailAndPassword(
    document.getElementById("email").value,
    document.getElementById("password").value
  ).then(() => {
    location.href = "index.html";
  }).catch(alert);
}

function signup() {
  auth.createUserWithEmailAndPassword(
    document.getElementById("email").value,
    document.getElementById("password").value
  ).catch(alert);
}

