import React, { useState } from 'react'
import "./Login.css"
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase';

function Login() {
    const history=useHistory();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")

    const signIn =e=>{
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email,password)
            .then((auth)=>{
                history.push("/");
            })
            .catch((e) => alert(e.message));
    }

    const register =e=>{
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then (auth => {
                history.push("/");
            })
            .catch((e) => alert(e.message));
    }
  return (
    <div className='login'>
        <Link to="/">
            <img className='login_image' src="https://img.etimg.com/thumb/msid-59738992,width-640,resizemode-4,imgsize-25499/amazon.jpg" />
        </Link>
        <div className='login_container'>
            <h1>Sign-in</h1>
            <form>
                <h5>Email/Mobile Number</h5>
                <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
            
                <button type='submit' className='login_signInButton' onClick={signIn}>Sigin In</button>
            </form>

            <p>Dont have an account, dont worry click on the button below to create new amazon acount</p>

            <button className='login_registerButton' onClick={register}>Create New Account</button>
        </div>
    </div>
  )
}

export default Login
