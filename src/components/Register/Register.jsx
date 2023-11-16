import React from "react";
import "./Register.css";
import InputwithVal from "../InputwithVal/InputwithVal";
import GooglePlay from "@/image/googlePlayBtn.jpg";
import Microsoft from "@/image/microsoftBtn.jpg";
import LoginFooter from "../LoginFooter/LoginFooter";
const Register = () => {
  return (
    <>
      <div className="registerContainer m-2 d-flex justify-content-center">
        <div className="registerFlex">
          <div className="registerDetails">
            <div className="header">
              <h1>Instagram</h1>
            </div>
            <div
              className="h6 text-center mb-3"
              style={{ color: "rgba(0, 0, 0, 0.6)" }}
            >
              Sign up to see photos and videos from your friends.
            </div>
            <div className="facebookRegister d-flex justify-content-center align-items-center gap-2">
              <span className="h4 mr-2">
                <i className="bi bi-facebook" style={{ color: "white" }}></i>
              </span>
              <p className="h5">
                <a
                  target="_blank"
                  href="https://www.facebook.com/"
                  className="text-decoration-none"
                  style={{ color: "rgb(255, 255, 255)", fontSize: "1rem" }}
                >
                  Log in with Facebook
                </a>
              </p>
            </div>
            <div className="divBorderOr mt-1 w-100 d-flex align-items-center">
              <span className="border-bottom w-50"></span>
              <span className="or p-4">OR</span>
              <span className="border-bottom w-50"></span>
            </div>
            <div className="form ">
              <InputwithVal
                id="email"
                type="email"
                label="Mobile number or email address"
              />
              <InputwithVal id="name" type="text" label="Full Name" />
              <InputwithVal id="username" type="text" label="Username" />
              <InputwithVal id="password" type="password" label="Password" />
              <div className="signupText m-3">
                People who use our service may have uploaded your contact
                information to Instagram. Learn more
              </div>
              <div className="signupText m-3">
                By signing up, you agree to our Terms, Privacy Policy and
                Cookies Policy.
              </div>
              <div className=" mt-2 mb-3">
                <button className="btn btn-info w-100 text-white ">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
          <div className="RegisterSign mt-2 pt-3 pb-3 text-center ">
            Have an account?{" "}
            <a href="/" className="text-decoration-none h6 text-info">
              Log in
            </a>
          </div>
          <div className="loginHelp mt-2">
            <p className="text-center">Get the App</p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <a
                href="https://play.google.com/store/apps/details?id=com.instagram.android"
                target="_blank"
              >
                <img src={GooglePlay} alt="Get it on Google play" />
              </a>
              <a
                href="ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=0%2C0%2C1366%2C728"
                target="_blank"
              >
                <img src={Microsoft} alt="Get it on Microsoft" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <LoginFooter />
    </>
  );
};
export default Register;
