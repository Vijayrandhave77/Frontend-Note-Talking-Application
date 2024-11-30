import React, { useRef } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
function Signin() {
  const navigate = useNavigate();

  let email = useRef()
  let otp = useRef()

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true, // Important for sending cookies
  };

 const handleSignin = (e)=>{
  e.preventDefault();

  
  axios.post('https://backend-notetalking-application.onrender.com/api/login',
    {
      email:email.current.value,
      otp:otp.current.value
    }.config).then((response)=>{
    console.log(response.data)
  }).catch((err)=>{
    console.log(err)
  })

  setTimeout(()=>{
    window.location.reload()
  },1000)
  navigate("/dashboard")
 }
  return (
    <div className="signup-page">
      <div className="sign-left">
        <div className="left-inner">
          <div className="div">
            <h1>Sign in</h1>
            <p>Please login to continue to your account</p>
          </div>

          <form onSubmit={handleSignin}>
            <input type="Email" placeholder="Enter Your Email" ref={email}/> <br />
            <input type="text" placeholder="OTP" ref={otp}/> <br />
            <a href="#" className="forget">
              Forget Password ?
            </a>{" "}
            <br />
            <div className="checkbox">
              <input type="checkbox" /> Keep me logged in
            </div>
            <button type="submit">Sign In</button>
          </form>

          <div className="line">
            <div className="line-left"></div> Or{" "}
            <div className="line-right"></div>
          </div>

          <button>
            Continue with Google{" "}
            <img className="google-logo" src="/google-logo.png" alt="" />
          </button>
          <p>
            Need an account?? <a href="#">Create one</a>
          </p>
        </div>
      </div>

      <div className="sign-right">
        <img src="/signup-logo.jpg" alt="" />
      </div>
    </div>
  );
}

export default Signin;
