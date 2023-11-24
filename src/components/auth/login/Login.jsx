import React from 'react'
import { useNavigate } from 'react-router'

function Login() {
 const navigate = useNavigate ()

  return (
    <div> 
     
    <div className='flex flex-col items-center justify-center h-screen bg-slate-500 '>

    <div className = 'text-purple-100 font-mono text-3xl'>

<h1> GIFT.ME </h1>
</div>
        <div className='w-full max-w-md  bg-slate-700  rounded-xl shadow-md py-8 px-8'> 
        <h2 className=' text-[28px] font-bold text-purple-100 mb text-center  ' > Sign In </h2>
        <form className='flex flex-col'> 
        
<input placeholder='Email' className=' bg-slate-600 text-white border-0 rounded-md p-2 mb-4 focus:bg-slate-500
focus:outline-blue-200 transition ease-in-out duration-150 place-content-baseline placeholder-gray-300' type= 'email' />
      
<input placeholder='Password' className=' bg-slate-600 text-white border-0 rounded-md p-2 mb-4 focus:bg-slate-500
focus:outline-blue-200 transition ease-in-out duration-150 place-content-baseline placeholder-gray-300' type= 'password' />
      <button className = 'bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-indigo-600 hover:to-black transition ease-in duration-200' type='submit' > Submit </button> 
       <p className='text-white mt-4 text-center'  > Don't Have Acccount? 
       <a  className='text-white-500 hover:underline mt-4 px-1' onClick={() => navigate ('/Signup')} href="#"> Sign Up </a>
       </p>
       </form>   

{/* 
        <h1  className='font-bold'> Hello </h1> */}
         </div >
        </div>
       

        </div>
  )
}

export default Login