import { useState } from 'react'
import { Card, TextField, Button } from '@radix-ui/themes';

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function processUserLogin(e) {
    e.preventDefault();

    try {
      let response = await fetch("http://localhost:4000/user/login", {
        headers: new Headers({
          "content-type": "application/json",
        }),
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
      });

      let results = await response.json();

      console.log(results);

      // TODO make this do something
      // if (response.status === 200)
      //   Navigate("#")

    } catch (error) {
      console.log(error);
    };
  };

  return (
    <Card>
      Email
      <TextField.Root>
        <TextField.Input
          size="3"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </TextField.Root>
      Password
      <TextField.Root>
        <TextField.Input
          type="password"
          size="3"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </TextField.Root>
      <Button
        onClick={processUserLogin}
      >
        Login
      </Button>
    </Card>
  )
}

export default Login