import { Card, Button, Typography, Link, Stack, TextField, Container } from "@mui/material";
import { useState } from "react";


export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');

  const Signup = () => {
    console.log({ name, email, phoneNumber, Password, ConfirmPassword })
  }
  return <>
    <Container sx={{
      display: "grid",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}>
      <Card elevation={5} sx={{
        padding: 2,
        height: 510,
        width: 400,
        textAlign: "center"
      }}>
        <Stack direction="column" spacing={1}>
          <Typography variant="h4" sx={{
            textAlign: "center",
            margin: 20,
            fontFamily: "roboto"
          }}>Sign Up</Typography>

          <Typography variant="h6" sx={{
            fontWeight: "100"
          }}>Create a new account</Typography>

          <TextField type="text" placeholder="Full Name" fullWidth onChange={(event) => {
            const newName = event.target.value;
            setName(newName);
          }}></TextField>

          <TextField type="email" placeholder="Email" fullWidth onChange={(event2) => {
            const emailID = event2.target.value;
            setEmail(emailID);
          }}></TextField>

          <TextField type="int" placeholder="Phone number" fullWidth onChange={(event3) => {
            const phnNum = event3.target.value;
            setphoneNumber(phnNum);
          }}>

          </TextField>
          <TextField type="password" placeholder="Password" fullWidth onChange={(event4) => {
            const pass = event4.target.value;
            setPassword(pass);
          }}></TextField>

          <TextField type="password" placeholder="Confirm Password" fullWidth onChange={(event5) => {
            const pass = event5.target.value;
            setConfirmPassword(pass);
          }}></TextField>

          <Button variant="contained" fullWidth onClick={Signup}>
            Sign Up
          </Button>

          <Typography sx={{
            display: "flex",
            justifyContent: "center",
          }}> Have an account. <Link color="primary" sx={{
            cursor: "pointer",
          }}>
              Sign In
            </Link>
          </Typography>
        </Stack>
      </Card>
    </Container>
  </>
}
