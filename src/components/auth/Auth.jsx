import { useState } from 'react'
import Login from '../auth/login/Login'
import Signup from '../auth/signup/Signup'

function Auth({ updateUser }) {

  const [newUserStatus, setNewUserStatus] = useState(true)

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-500 ">
      { !!newUserStatus ? (
        <Signup updateUser={updateUser} setNewUserStatus={setNewUserStatus} />
      ) : (
        <Login updateUser={updateUser} setNewUserStatus={setNewUserStatus} />
      )}
    </div>
    )
  }
  
  export default Auth
  
  // const [loginPane, setLoginPane] = useState(false);



// function Auth({ updateUser }) {

//   const [loginPane, setLoginPane] = useState(false);

//   return (
//     <Flex
//       width="100%"
//       height="100%"
//       direction="column"
//       align="center"
//       justify="center"
//       gap="3"
//       className="min-w-full min-h-full grow relative"
//     >
//       <Button>Signup</Button>
//       <Button
//         onClick={() => {
//           setLoginPane(true);
//         }}
//       >
//         Login
//       </Button>
//       <Login
//         updateUser={updateUser}
//         loginPane={loginPane}
//         setLoginPane={setLoginPane}
//       />
//     </Flex>
//   )
// }