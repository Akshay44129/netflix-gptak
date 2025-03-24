 import { onAuthStateChanged, signOut } from "firebase/auth";
 import { auth } from "../utils/firebase";
 import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {addUser, removeUser} from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header =() =>{
  const dispatch =  useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user);

    const handleSignOut = ()=>{
        
        signOut(auth)
        .then(() => { })
        .catch((error) => {
            navigate("/error");
          });
    }


      useEffect(()=>{

         const unsubscribe= onAuthStateChanged(auth, (user) => {
          if (user) {
           
            const { uid,email, displayName,photoURL }= auth.currentUser;
            dispatch(
              addUser
              ({uid: uid ,
                 email: email,
                 displayName:displayName,
                 photoURL:photoURL
                })
                );
          navigate("/browse");
          } else {
         dispatch(removeUser());
         navigate("/");
          }
        });
             return () => unsubscribe();
      },[]);
    return <div className="header-main" >
        <img className="header-img" src={LOGO}
        alt="logo"></img>
        {user &&
        <div className="right">
           <img className="header-img user"
            alt="usericon "
             src={user?.photoURL} />
           <button onClick={handleSignOut} className="btn-signout">sign out</button>
        </div>
}
    </div>
        
};
export default Header; 