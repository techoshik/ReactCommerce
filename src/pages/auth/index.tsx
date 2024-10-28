import { firebaseAuth } from "@/configs/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import Link from "next/link";
import { useEffect, useState } from "react"

export default function AuthPage() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      setLoggedIn(user !== null);
    });
  }, []);

  const handleLogout = () => {
    firebaseAuth.signOut();
  };


  return <>{
    isLoggedIn ? (
      <div>You are logged in <button onClick={handleLogout}>Log Out</button> </div>
    ) : (
      <div>You are not logged in
        <button>
          <Link href="/auth/login">Login</Link>
        </button>
        <button>
          <Link href="/auth/signup">Create Account</Link>
        </button>
      </div>
    )
  }</>
}