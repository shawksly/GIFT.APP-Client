import { useState } from 'react'
import { Flex, Button } from '@radix-ui/themes';
import Login from '../auth/login/Login'

function Auth({ updateUser }) {

  const [loginPane, setLoginPane] = useState(false);

  return (
    <Flex
      width="100%"
      height="100%"
      direction="column"
      align="center"
      justify="center"
      gap="3"
      className="min-w-full min-h-full grow relative"
    >
      <Button>Signup</Button>
      <Button
        onClick={() => {
          setLoginPane(true);
        }}
      >
        Login
      </Button>
      <Login
        updateUser={updateUser}
        loginPane={loginPane}
        setLoginPane={setLoginPane}
      />
    </Flex>
  )
}

export default Auth