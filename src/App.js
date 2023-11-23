// import logo from './logo.svg';
// import './App.css';
import { Flex, Container } from '@radix-ui/themes';
import Auth from './components/auth/Auth'

function App() {

  function initializeUser() {

  }

  function updateUser() {

  }

  function clearUser() {

  }

  return (
    <Flex
      width="100%"
      height="100%"
      direction="column"
      align="center"
      justify="center"
      className='min-h-screen'
    >
      <img src='https://cdn.imgchest.com/files/e4gdcl2w3p4.png' className="h-1/2 p-4">
      </img>
      <Container
        className={`${true ? "class1" : "class2"} h-auth w-screen grow`}
        // style={{height: var(--auth-height)}}
      >
        <h1 className ='text-3xl bg-slate-900 text-white text-center'>GIFT.ME</h1>
        <Auth />
      </Container>
    </Flex>
  );
}



export default App;
