import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
function Signup() {
  const navigate = useNavigate();
  let userName = useRef();
  let dob = useRef();
  let email = useRef();

  let userValidate = () => {
    if (userName.current.value.length < 3) {
      alert("Name must be greater then 3 words");
      return false;
    } else {
      return true;
    }
  };

  let dobValidation = () => {
    if (dob.current.value.length == 0) {
      alert("please fill the date");
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://backend-notetalking-application.onrender.com/api/signup',
      {
        userName:userName.current.value,
        email:email.current.value,
        dob:dob.current.value
      }
    ).then((response)=>{
      console.log(response.data)
    }).catch((err)=>{
      console.log(err)
    })
    navigate("/signin");
  };

  return (
    <div className="signup-page">
      <div className="sign-left">
        <div className="left-inner">
          <div className="div">
            <h1>Sign up</h1>
            <p>Sign up to enjoy the feature of HD</p>
          </div>

          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Your Name" ref={userName} />{" "}
            <br />
            <input type="text" placeholder="Date of Birth" ref={dob} /> <br />
            <input
              type="Email"
              placeholder="Enter Your Email"
              ref={email}
            />{" "}
            <br />
            {/* <input type="text" placeholder="OTP" /> <br /> */}
            <button type="submit">Sign up</button>
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
            Alerady have an account?? <a href="#">Sign In</a>
          </p>
        </div>
      </div>

      <div className="sign-right">
        <img src="/signup-logo.jpg" alt="" />
      </div>
    </div>
  );
}

export default Signup;
