import { useState } from "react";
import LoginForm from "../components/login-form";

export default function LoginPage() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return <LoginForm />
}