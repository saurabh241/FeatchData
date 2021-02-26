import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDzsWXEsOkxFVuFk9z673vaeXMW_pXUl6c",
    authDomain: "firstproject-86aa3.firebaseapp.com",
    projectId: "firstproject-86aa3",
    storageBucket: "firstproject-86aa3.appspot.com",
    messagingSenderId: "250976655755",
    appId: "1:250976655755:web:9f5aa355515f3b689cf78e",
    measurementId: "G-3YS9TMW2M2"
  };

  const fire =firebase.initializeApp(firebaseConfig);

  export default fire;