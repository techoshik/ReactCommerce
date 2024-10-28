import { firebaseAuth } from "@/configs/firebase-config";
import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');

  const handleForgotPassword = async () => {
    try {
      await sendPasswordResetEmail(firebaseAuth, email);

      // REDIRECT TO LOGIN
      window.location.href = "/auth/login";

    } catch (error) {
      console.log({ error });
    }
  };

  return <div style={{ padding: 20 }}>
    <h1>Forgot Password</h1>
    <br />
    <br />
    <input type="email" placeholder="Enter your email"
      value={email}
      onChange={e => setEmail(e.target.value)}
    />
    <br />
    <br />
    <button onClick={handleForgotPassword}>Send Link</button>
  </div>
}