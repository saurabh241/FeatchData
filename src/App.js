// import React, { useState, useEffect } from "react";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import fire from "./config/config";

// const App = () => {

//   const [user, setUser] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [hasAccount, setHasAccount] = useState(false);

//   const clearInputs = () => {
//     setEmail("");
//     setPassword("");
//   };

//   const clearErrors = () => {
//     setEmail("");
//     setPassword("");
//   };

//  const handleLogin = () => {
//     clearErrors();
//     fire
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .catch((err) => {
//         switch (err.code) {
//           case "auth/invalid-email":
//           case "auth/user-disabled":
//           case "auth/user-not-found":
//             setEmailError(err.message);
//             break;

//           case "auth/wrong-password":
//             setPasswordError(err.message);
//         }
//       });
//   }

//   const handleSignup = () => {
//     clearErrors()

//     fire
//       .auth()
//       .createUserWithEmailAndPassword(email, password)
//       .catch((err) => {
//         switch (err.code) {
//           case "auth/invalid-email":
//           case "auth/email-already-in-use":
//             setEmailError(err.message);
//             break;

//           case "auth/weak-password":
//             setPasswordError(err.message);
//         }
//       });
//   };

//   const handleLogout = () => {
//     fire.auth().signOut();
//   }

//   const authListener = () => {

//     fire.auth().onAuthStateChanged((user) => {
//       if (user) {
//         clearInputs()
//         setUser(user);
//       } else {
//         setUser('');
//       }
//     });
//   };

//   useEffect(() => {
//     authListener();
//   }, []);

//   return <div>
//    {
//      user? (
//        <Home handleLogout={handleLogout} />
//      ) : (
//       <Login

//       email = {email}
//      setEmail = {setEmail}
//      password = {password}
//     setPassword = {setPassword}
//     emailError = {emailError}
//     passwordError = {passwordError}
//     hasAccount = {hasAccount}
//    setHasAccount = {setHasAccount}
//     handleLogin = {handleLogin}
//     handleSignup = {handleSignup}
//       />
//      )
//    }
//   </div>;
// }

// export default App;

import React from "react";
import About from "./components/About"

export default function App() {
  return (
    <div>
     
      <About/>
    </div>
  );
}
