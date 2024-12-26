import { signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react"
import { auth } from "../../firebase/firebase.init";


const Login = () => {
    const [user,setUser]=useState(null);
    const provider=new GoogleAuthProvider();
    const handleloginwithgoogle=()=>{
        signInWithPopup(auth,provider)
        .then(result=>{
            console.log(result.user)
            setUser(result.user)
        })
        .catch(error=>{
            console.log('ERROR',error);
            setUser(null)
        })

    }
    const handlelogout=()=>{
        signOut(auth)
        .then(()=>{
            console.log("sign out done")
            setUser(null)
        })
        .catch(error=>console.log(error))
    }
  return (
    <div>

      {
        user?
        <button onClick={handlelogout}>Logout</button>:
        <button onClick={handleloginwithgoogle} >Login With Google</button>
      }

      {
        user && <div>
            <h4>{user.displayName}</h4>
            <p>Email:{user.email}</p>
            <img src={user.photoURL} alt="" />
        </div>
      }
    </div>
  )
}

export default Login
