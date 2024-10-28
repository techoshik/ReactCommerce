import { firebaseAuth, firebaseDatabase } from "@/configs/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react"

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = async () => {
    try {
      const userCred = await createUserWithEmailAndPassword(firebaseAuth, email, password);
      const user = userCred.user;
      console.log({ user });

      // SAVE PROFILE
      const userRef = doc(firebaseDatabase, 'users', user.uid);
      await setDoc(userRef, {
        name,
        email,
      });

      // REDIRECT TO AUTH
      window.location.href = "/auth";

    } catch (error) {
      console.log({ error });
    }
  };

  return <div style={{ padding: 20 }}>
    <h1>Register</h1>
    <br />
    <br />
    <input type="text" placeholder="Enter your name"
      value={name}
      onChange={e => setName(e.target.value)}
    />
    <br />
    <br />
    <input type="email" placeholder="Enter your email"
      value={email}
      onChange={e => setEmail(e.target.value)}
    />
    <br />
    <br />
    <input type="password" placeholder="Enter your password"
      value={password}
      onChange={e => setPassword(e.target.value)}
    />
    <br />
    <br />
    <button onClick={signUp}>Sign Up</button>
  </div>
}