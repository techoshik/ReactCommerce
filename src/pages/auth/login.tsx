import { firebaseAuth } from "@/configs/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      const userCred = await signInWithEmailAndPassword(firebaseAuth, email, password);
      const user = userCred.user;
      console.log({ user });

      // REDIRECT TO AUTH
      window.location.href = "/auth";

    } catch (error) {
      console.log({ error });
    }
  };

  return <div style={{ padding: 20 }}>
    <h1>Login</h1>
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
    <button onClick={login}>Login</button>
    <br />
    <br />
    <button>
      <Link href="/auth/forgot-password">Forgot Password?</Link>
    </button>
  </div>
}