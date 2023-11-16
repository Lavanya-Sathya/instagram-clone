import React from "react";
import "./Login.css";
import instaLoginImage from "../../images/loginImages.jpg";
import GooglePlay from "../../images/googlePlayBtn.png";
import Microsoft from "../../images/microsoftBtn.png";
import LoginFooter from "../LoginFooter/LoginFooter";
import InputwithVal from "../InputwithVal/InputwithVal";

function Login() {
  return (
    <>
      <div className="login">
        <div className="loginImgContainer">
          <img src={instaLoginImage} alt="instagram Image" />
        </div>
        <div className="loginContainer mt-3">
          <div className="logDetails">
            <div className="header">
              <h1>Instagram</h1>
            </div>
            <form action="" method="get">
              <div className="form">
                <InputwithVal
                  id="username"
                  type="text"
                  label="Phone number, username or email address"
                />
                <InputwithVal id="password" type="password" label="Password" />
                <div className=" mt-2">
                  <button className="btn btn-info w-100 text-white ">
                    Log in
                  </button>
                </div>
              </div>
            </form>
            <div className="divBorderOr mt-1 w-100 d-flex align-items-center">
              <span className="border-bottom w-50"></span>
              <span className="or p-4">OR</span>
              <span className="border-bottom w-50"></span>
            </div>
            <div className="facebookLog d-flex justify-content-center align-items-center gap-2">
              <span className="h4 mr-2">
                <i className="bi bi-facebook"></i>
              </span>
              <p className="h5">
                <a
                  target="_blank"
                  href="https://www.facebook.com/"
                  className="text-decoration-none"
                  style={{ color: "rgb(34, 34, 131)", fontSize: "1rem" }}
                >
                  Log in with Facebook
                </a>
              </p>
            </div>
            <div className="mt-1">
              <p className="text-center">
                <a
                  href="/password/reset"
                  className="text-decoration-none"
                  style={{ color: "rgb(34, 20, 13)", fontSize: "0.8rem" }}
                >
                  Forgotten your password?
                </a>
              </p>
            </div>
          </div>
          <div className="logSign mt-2 pt-3 pb-3 text-center ">
            Don't have an account?{" "}
            <a
              href="/emailsignup"
              className="text-decoration-none h6 text-info"
            >
              Sign up
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
}

export default Login;
