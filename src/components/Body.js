import { createBrowserRouter, RouterProvider  } from "react-router-dom";
import Browse from "./Browse";
import Login from"./Login";
import { useEffect } from "react";
import {  onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/firebase";

import {addUser, removeUser} from "../utils/userSlice";

const Body = () =>{ 
 
  

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
      
 

    return (
        <div>
       <RouterProvider router={appRouter}></RouterProvider>
        </div>

    )
};

export default Body;