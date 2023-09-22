/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { auth, googleProvider } from '../config/firebase'
import {
    createUserWithEmailAndPassword,
    signInWithPopup,
    signOut,

} from 'firebase/auth';



export default function Auth() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const signIn = async () => { 
        try {
            await createUserWithEmailAndPassword(auth, email, password)
        } catch (error) {
            console.error(error);
        }
    }

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (error) {
            console.error(error)
        }
    };

    const logOut = async () => {
        try {
            await signOut(auth)
        } catch (error) {
            console.error(error)
        }
    }


  return (
      <div>
          
          <input type="text"
              placeholder='email..'
              onChange={(e) => setEmail(e.target.value)}
          />
          <input type="text"
              placeholder='pasword..'
              onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={signIn}> Sign In</button>
          <button onClick={signInWithGoogle}>signInWithGoogle</button>
          <button onClick={logOut}>logOut</button>

    </div>
  )
}
