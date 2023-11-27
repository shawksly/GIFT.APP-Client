import { React, useState } from "react";

import { useNavigate } from "react-router";
import PropTypes from "prop-types";
import Login from "../login/Login";

function Signup({ updateUser, setNewUserStatus }) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupRoute = "http://localhost:4000/user/signup";

  const navigate = useNavigate();

  async function SignupInput(e) {
    e.preventDefault();
    console.log("testing this function");
    console.log(userName);
    console.log(email);
    console.log(password);

    try {
      let response = await fetch(signupRoute, {
        headers: new Headers({
          "content-type": "application/json",
        }),

        method: "POST",
        body: JSON.stringify({
          userName: userName,
          email: email,
          password: password,
        }),
      });

      console.log(response);
      let results = await response.json();
      
      if (response.status === 200) {
        updateUser(results.token, results.user._id);
        navigate("/");

      } else {
        console.log("Signup Missed");
      }
    } catch (error) {}
  }

  return (
      <>
        <div className="text-purple-100 font-mono text-3xl">
          <h1> GIFT.ME </h1>
        </div>
        <div className="w-full max-w-md bg-slate-700 rounded-xl shadow-md py-8 px-8">
          <h2 className=" text-[28px] font-bold text-purple-100 mb text-center  ">
            {" "}
            Sign Up{" "}
          </h2>
          <form onSubmit={SignupInput} className="flex flex-col">
              <input
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Username"
                className=" bg-slate-600 text-white border-0 rounded-md p-2 mb-4 focus:bg-slate-500 focus:outline-blue-200 transition ease-in-out duration-150 place-content-baseline placeholder-gray-300"
                type="text"
              />
            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className=" bg-slate-600 text-white border-0 rounded-md p-2 mb-4 focus:bg-slate-500 focus:outline-blue-200 transition ease-in-out duration-150 place-content-baseline placeholder-gray-300"
              type="email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className=" bg-slate-600 text-white border-0 rounded-md p-2 mb-4 focus:bg-slate-500 focus:outline-blue-200 transition ease-in-out duration-150 place-content-baseline placeholder-gray-300"
              type="password"
            />
            <button
              className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-indigo-600 hover:to-black transition ease-in duration-200"
              type="submit"
            >
              Submit
            </button>
            <p className="text-white mt-4 text-center">
              Already Have an Account?
              <a
                className="text-white-500 hover:underline mt-4 px-1"
                onClick={() => setNewUserStatus(false)}
              >
                Sign In
              </a>
            </p>
          </form>
          {/* 
        <h1  className='font-bold'> Hello </h1> */}
        </div>
      </>

  );
}

Signup.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Signup;
