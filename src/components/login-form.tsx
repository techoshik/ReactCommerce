
import { Facebook, Google } from "@mui/icons-material";
import { Button, Typography, Card, Link, Stack, TextField, Container, Dialog, CircularProgress } from "@mui/material";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  // const [errors, setErrors] = useState([]);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };

  const login = async () => {
    console.log({ email, password });
    setLoading(true);

    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const todo = await response.json();
    console.log({ todo });

    setLoading(false);

    // setTimeout(() => {
    //   setLoading(false);
    // }, 3000);
  };

  return <>

    <Container sx={{
      display: "grid",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}>
      <Dialog open={isLoading} sx={{ minHeight: 100, minWidth: 100, padding: 1 }}>
        <CircularProgress />
      </Dialog>

      <Card elevation={5} sx={{
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

            <Typography sx={{
              display: "flex",
              justifyContent: "center",
            }}> Don't have an account? <Link color="primary" sx={{
              cursor: "pointer",
            }}>
                Sign Up
              </Link>
            </Typography>

          </Stack>

        </Stack>
      </Card >
    </Container>
  </>
}
