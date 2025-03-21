import { use, useRef, useState } from "react";
import Header from "./Header";
import checkValidaData from "../utils/validate";
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

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
       updateProfile(user, {
        displayName: username.current.value,
         photoURL: "https://example.https://avatars.githubusercontent.com/u/170734714?s=400&u=f7bb44dd1d95259a3f4ebd2bc118558ba6cd2743&v=4/jane-q-user/profile.jpg"
      }).then(() => {
        dispatch();
        navigate("/browse")
      }).catch((error) => {
       setErrorMsg(error.message);
      });

      
       console.log(user);     
       navigate("/browse");  
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
        <div className="main">
            <Header/> 
            <div>
          <img src="https://cdn.wallpapersafari.com/24/74/zgeTuV.jpg" alt="bg"></img>
            </div>
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
