import React, { useState } from 'react'
import { auth } from './firebase';
import "./Login.css"
import { useDispatch } from 'react-redux';
import login from "./features/userSlice"
function Login() {
   
    const [email , setEmail]=useState('');
    const [password , setPassword]=useState('');
    const [ name , setName]= useState('');
    const [profilePic , setProflePic] =useState('');
    const dispatch= useDispatch();
    const Login =(e)=>{
         e.preventDefault(); 
          
         auth
         .signInWithEmailAndPassword(email, password)
         .then((userAuth) => {
           dispatch(
             login({
               uid: userAuth.uid,
               displayName: userAuth.user.displayName,
               email: userAuth.user.email,
               profileUrl: userAuth.user.photoURL,
             })
           );
         })
         //   Catch errors
         .catch((error) => alert(error));



     }
    
    
    const register = () =>{
       if(!name )
       {
         return alert("Please enter a full name");
       }
          
    auth.createUserWithEmailAndPassword(email,password).then((userAuth)=> {
               userAuth.user.updateProfile({
                  displayName:name ,
                  photoURL:profilePic,
               })
              .then(()=>{
                  dispatch(login({
                      email:userAuth.user.email,
                      uid:userAuth.user.uid,
                      displayName:name,
                      photoUrl:profilePic,
                  }))
              })    
          
            }).catch(error => alert(error));
     
    };
 
 
    return (
    <div className='login'>
       <img src="
        https://content.linkedin.com/content/dam/brand/site/img/logo/logo-hero.png
       " alt="" />
           
        <form >
           <input placeholder='Full name required if registering ' type="text" value={name}  onChange={(e)=> setName(e.target.value)} />
           <input placeholder='Profile pic URl (optional)' type="text" value={profilePic}  onChange={(e)=> setProflePic(e.target.value)}  />
           <input value={email}  onChange={(e)=> {
               setEmail(e.target.value) 
           } } placeholder='Email ' type="email" />
           <input placeholder=' password' type="password"   value={password}  onChange={(e)=> setPassword(e.target.value)}/>
         
        
          <button type='submit' onClick={Login}>Sign In</button>
       
        </form>

        <p>Not a member? 
            <span className='login__register'  onClick={register}>Register Now </span>
        </p>
    </div>
  )
}

export default Login
 