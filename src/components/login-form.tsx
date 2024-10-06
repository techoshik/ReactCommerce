
import { Facebook, Google } from "@mui/icons-material";
import { Button, Typography, Card, Link, Stack, TextField } from "@mui/material";
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

  return <Card elevation={5} sx={{
    margin: 2,
    padding: 2,
    height: 460,
    width: 400,

  }}>
    <Stack direction="column" spacing={1}>
      <Typography variant="h4" sx={{
        textAlign: "center",
        margin: 20
      }}>Sign In</Typography>

      <Typography variant="h6">Username</Typography>

      <TextField type="email" placeholder="Email or username" fullWidth onChange={(event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
      }} />

      <Typography variant="h6" sx={{
        fontSize: 18
      }}>Password  <Link sx={{
        fontWeight: 200,
        fontSize: 14,
        cursor: "pointer"
      }}>forgotten Password?
        </Link>
      </Typography>

      <TextField type="password" placeholder="Password" fullWidth onChange={handlePasswordChange} />

      <Stack direction={"column"} >

        <Button variant="contained" fullWidth onClick={login}>
          Sign In
        </Button>

        <Typography sx={{
          display: "grid",
          justifyContent: "center",
          marginTop: 2
        }}>OR</Typography>

        <Stack direction={"row"} justifyContent={"space-evenly"}
          sx={{
            marginTop: 1,
          }} >
          <Button variant="outlined" >
            Sign in with <Facebook color="primary"></Facebook>
          </Button>

          <Button variant="outlined" >
            Sign in with   <Google color="primary"></Google>
          </Button>

        </Stack>

        <p style={{
          display: "flex",
          justifyContent: "center",
        }}> Don't have an account? <Link color="primary" sx={{
          cursor: "pointer",
        }}>
            Sign Up
          </Link>
        </p>

      </Stack>

    </Stack>
  </Card >
}
