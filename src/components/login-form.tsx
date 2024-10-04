import { Button, Card, Stack, TextField } from "@mui/material";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };

  const login = () => {
    console.log({ email, password });
  };

  return <Card sx={{
    margin: 2,
    padding: 2,
  }}>
    <Stack direction="column" spacing={1}>

      <TextField type="email" placeholder="Email" fullWidth onChange={(event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
      }} />

      <TextField type="password" placeholder="Password" fullWidth onChange={handlePasswordChange} />

      <Stack direction="row" justifyContent="space-between">
        <Button variant="contained" onClick={login}>
          Login
        </Button>
        <Button variant="text">
          Sign Up
        </Button>
      </Stack>

    </Stack>
  </Card>
}
