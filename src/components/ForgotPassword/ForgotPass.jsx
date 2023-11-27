import React from "react";
import "./ForgotPass.css";
import InputwithVal from "../InputwithVal/InputwithVal";
import forgotlock from "@/image/forgotPass.jpg";
import LoginFooter from "../LoginFooter/LoginFooter";
import { Link } from "react-router-dom";
function ForgotPass() {
  return (
    <>
      <div className="headerForgot">
        <h2>InstaClone</h2>
      </div>
      <div className="passContainer">
        <div className="passDetails">
          <div className="imgLock">
            <img src={forgotlock} alt="forgotLock" />
            <div className="h6 pt-3">Trouble with logging in?</div>
            <p className="pt-2">
              Enter your email address, phone number or username, and we'll send
              you a link to get back into your account.
            </p>
          </div>
          <div className="form">
            <InputwithVal
              id="username"
              type="text"
              label="Phone number, username or email address"
            />
            <div className=" mt-2">
              <button className="btn btn-info w-100 text-white ">
                Send Login Link
              </button>
            </div>
            <div className="mt-1 text-center ">
              <Link
                to=""
                className="text-decoration-none "
                style={{ fontSize: "0.8rem", color: "darkblue" }}
              >
                Can't reset your password?
              </Link>
            </div>
          </div>
          <div className="divBorderOr mt-1 w-100 d-flex align-items-center">
            <span className="border-bottom w-50"></span>
            <span className="or p-4">OR</span>
            <span className="border-bottom w-50"></span>
          </div>
          <div className="text-center mb-5">
            <Link
              to="/emailsignup"
              className="text-decoration-none"
              style={{ color: "rgb(34, 20, 13)", fontSize: "0.8rem" }}
            >
              <p className="h6">Create New Account</p>
            </Link>
          </div>
        </div>
        <div className="loginPass">
          <Link
            to="/"
            className="text-decoration-none"
            style={{ color: "rgb(34, 20, 13)", fontSize: "0.8rem" }}
          >
            <p className="h6">Back to Login</p>
          </Link>
        </div>
      </div>
      <LoginFooter />
    </>
  );
}

export default ForgotPass;
