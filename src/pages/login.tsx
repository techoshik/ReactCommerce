import { useState } from "react";
import LoginForm from "../components/login-form";
import { Button } from "@mui/material";

export default function LoginPage() {
  const [loading, setLoading] = useState<boolean>(false);

  return <>
    <LoginForm loading={loading} setLoading={setLoading} />
    <ContinueWithGoogle loading={loading} />
  </>
}


function ContinueWithGoogle({ loading }: { loading: boolean }) {
  return <Button disabled={loading} onClick={() => {
    console.log('Continue with Google');
  }}> Continue With Google</Button>
}
