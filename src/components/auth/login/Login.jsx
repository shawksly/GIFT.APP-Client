import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Flex, TextField, Button, IconButton } from '@radix-ui/themes';
import { DoubleArrowDownIcon } from '@radix-ui/react-icons'

function Login({ loginPane, setLoginPane, updateUser }) {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

      if (response.status === 200) {
        updateUser(results.token, results.user._id);
        setLoginPane(false);
        navigate("#");
      }

    } catch (error) {
      console.log(error);
    };
  };

  return (
    <div
      className={`test w-full h-full bg-gray-800/90 absolute border-solid border-2 rounded-lg text-white ${loginPane ? 'top-0 transition-all' : 'top-[calc(var(--auth-height))] transition-all'}`}
    >
      <Flex
        width="100%"
        height="100%"
        direction="column"
        align="center"
        justify="center"
        gap="3"
        // className={`test bg-gray-800/90 absolute border-solid border-2 rounded-lg text-white ${loginPane ? 'top-0 transition-all' : 'top-[calc(var(--auth-height)/2)] transition-all' }`}
      >
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
      <Button
        onClick={() => {
          console.log(setLoginPane);
          setLoginPane(false);
        }}
      >
        <DoubleArrowDownIcon width="18" height="18" />
      </Button>
      </Flex>
    </div>
  )
}

export default Login