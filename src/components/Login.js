import { use, useRef, useState } from "react";
import Header from "./Header";
import checkValidaData from "../utils/validate";
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import {addUser, removeUser} from "../utils/userSlice";
import { BG_URL, USER_AVTAR } from "../utils/constants";
const Login = () =>{

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg , setErrorMsg] = useState(null);
  const navigate = useNavigate();

     
    const email= useRef(null);
    const password = useRef(null);
    const username =useRef(null);
    const dispatch =useDispatch();

  const handleBtnClick = ()=>{
    // validate for form data 
    const messege= checkValidaData(email.current.value,password.current.value);
     setErrorMsg(messege);
     if(messege) return;
     if (! isSignInForm){
     // sign up logic 
     createUserWithEmailAndPassword(
      auth,
       email.current.value,
        password.current.value
      )
     .then((userCredential) => {
       // Signed up 
       const user = userCredential.user;
       updateProfile(user,
         {
        displayName: username.current.value,
        // we do not need to wrap it inside brac+sis 
         photoURL:USER_AVTAR,
      })
      .then(() => {
        const { uid,email, displayName,photoURL }= auth.currentUser;
        dispatch(
          addUser({
                  uid: uid ,
                  email: email,
                   displayName:displayName,
                   photoURL:photoURL
             })
          );                 
    
      }).
      catch((error) => {
       setErrorMsg(error.message);
      });
            })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       setErrorMsg(errorCode + "--" +  errorMessage);       
     });
     }
     else{
          // sign in logic 
          signInWithEmailAndPassword(auth,
             email.current.value,
              password.current.value
            )
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse"); 
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage+ "--" + errorCode);
  });
     }

    // if  (messege === null){
    //   // sign in sign up
    // }


  }

const toggleSignInForm=() =>{
  setIsSignInForm(!isSignInForm);

}

    return (
        <div className="main"> <div>
          <img src={BG_URL} alt="bg"></img>
            </div>
            <Header/> 
           
            <form onSubmit={(e) => e.preventDefault()} className="loginform">

              <h1 className="h1">{isSignInForm ? "Sign In ": "Sign Up" } </h1>
              {!isSignInForm && ( 
                <input
                ref={username}
                 type="text" 
              placeholder="username"
               className="input-login" />
            )}
              <input
               ref={email}
                type="text"
                 placeholder="Email Address"
                  className="input-login"
               />            
              <input
               ref={password}
                type="password"
                 placeholder="Password"
                  className="input-login"
                   /> 
              <br/>
                <p className="p-err">{  errorMsg    }</p>
              <button 
              onClick={handleBtnClick} 
              className="btn-login">{isSignInForm ? "Sign In ": "Sign Up"} </button>
              <p className="p" onClick={toggleSignInForm} >
              {isSignInForm
               ? "New to Netflix ? Sign up Now"
              : "Alrady registerd ? Sign In Now ..."}
              </p>
            </form>
            </div>
    );
};

export default Login;
