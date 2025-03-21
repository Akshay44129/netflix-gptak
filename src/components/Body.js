import { createBrowserRouter, RouterProvider  } from "react-router-dom";
import Browse from "./Browse";
import Login from"./Login";
import { useEffect } from "react";
import {  onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useDispatch } from "react-redux";
import {addUser, removeUser} from "../utils/userSlice";

const Body = () =>{
    const dispatch = useDispatch();
  

  const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Login/>
    },
    {
        path:"/browse",
        element:<Browse/>
    }
  ]);
      
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
       
        const { uid,email, displayName,photoURL }= auth.currentUser;
        dispatch(
          addUser
          ({uid: uid ,
             email: email,
             displayName:displayName,
             photoURL:photoURL}));
      // navigate("/browse");
      } else {
     dispatch(removeUser());
    //  navigate("/");
      }
    });

  },[]);

    return (
        <div>
       <RouterProvider router={appRouter}></RouterProvider>
        </div>

    )
};

export default Body;