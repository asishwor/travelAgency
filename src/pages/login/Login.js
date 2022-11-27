import React from "react";
import {
  FaApple,
  FaRegEyeSlash,
  FaStarOfLife,
  FaTimes,
  FaTwitter,
  FaUserCog,
} from "react-icons/fa";
import { Form, FormContainer, LoginTitle } from "./Login.style";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <FormContainer>
      <Form action="">
        <LoginTitle>
          <div className="left">
            <div className="avatar">
              <FaUserCog />
            </div>
            <h3>Login</h3>
          </div>
          <Link to={"/"}>
            <FaTimes className="times" />
          </Link>
        </LoginTitle>
        <p>Login to your account - enjoy exclusive features and man more.</p>
        <label htmlFor="email">
          Email <FaStarOfLife />
        </label>
        <div className="email input-container">
          <input type="email" id="email" placeholder="Email" />
        </div>
        <label htmlFor="">
          password
          <FaStarOfLife />
        </label>
        <div className="password input-container">
          <input type="password" id="password" placeholder="Password" />
          <FaRegEyeSlash />
        </div>
        <div className="forgot">
          <input type="checkbox" name="checkbox" id="checkbox" />
          <butotn id="checkbox">Forgot Password ? </butotn>
        </div>
        <button type="submit" className="login-btn">
          Login
        </button>
        <p className="divider">Or</p>
        <button type="submit" className="login-btn btn">
          <FcGoogle /> Google
        </button>
        <button type="submit" className="login-btn btn">
          <FaTwitter className="twitter" /> Twitter
        </button>
        <button type="submit" className="login-btn btn">
          <FaApple /> Apple ID
        </button>

        <div className="sign-up">
          <span>Don't have account ?</span>{" "}
          <Link to={"/register"}>Sign up</Link>
        </div>
      </Form>
    </FormContainer>
  );
};

export default Login;
