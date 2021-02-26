// import React,{useState,useEffect} from "react"
// import Home from"./component/Home";
// import Login from "./component/Login";
// import fire from "./config/config";

// const handleLogin = () => {
//    clearErrors()
//    fire.auth()
//    .signInWithEmailAndPassword(email,password)
//    .catch((err) => {
//        switch(err.code){
//            case "auth/invalid-email":
//            case "auth/user-not-found":
//            case "auth/user-disabled":
//                setEmailError(err.message)
//                bre        
//        }
//    })
// }


// const authListener = () => {
//     fire.auth()
//     .onAuthStateChanged((user) => {
//        if(user){
//         clearInputs()
//         setState()
//        }else{
//            setState('')
//        }
        
//     })
// }

// useEffect(()=> {
//     authListener()
// },[])
// const NewLogin = () => {
//     return(
//         <>
        
//         </>
//     )
// }

