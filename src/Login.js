import React, { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();

  const HandleSubmit = () => {
    let path = "/App";
    navigate(path);
  };

  // JSX code for login form
  const renderForm = (
    // <div className="form">
    //   <form onSubmit={HandleSubmit}>
    //     <div className="input-container">
    //       <label>Username </label>
    //       <input type="text" name="uname" />
    //     </div>
    //     <div className="input-container">
    //       <label>Password </label>
    //       <input type="text" name="pass" />
    //     </div>

    //     <div className="button-container">
    //       <button>
    //         <input type="submit" />
    //       </button>
    //     </div>
    //   </form>
    // </div>
    <>
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <form onSubmit={HandleSubmit}>
        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input
          className="username"
          type="text"
          placeholder="Username"
          id="username"
          required
        />

        <label for="password">Password</label>
        <input
          className="password"
          type="password"
          placeholder="Password"
          id="password"
          required
        />

        <button>Log In</button>
      </form>
    </>
  );

  return (
    <div className="login">
      <div className="login-form">
        <div className="title">
          Sign In
          {renderForm}
        </div>
      </div>
    </div>
  );
}

export default Login;
