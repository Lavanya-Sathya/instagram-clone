import React, { useState } from "react";
import "./Login.css";
import instaLoginImage from "@/image/loginImages.jpg";
// import GooglePlay from "@/image/googlePlayBtn.jpg";
// import Microsoft from "@/image/MicrosoftBtn.jpg";
import LoginFooter from "../LoginFooter/LoginFooter";
import InputwithVal from "../InputwithVal/InputwithVal";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Logged in Successfully");
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const uid = user.uid;
            sessionStorage.setItem("Token", JSON.stringify(uid));
          }
        });
        navigate("/home");
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // ..
        alert(error.message);
      });
  };
  return (
    <>
      <div className="login">
        <div className="loginImgContainer">
          <img src={instaLoginImage} alt="instagram Image" />
        </div>
        <div className="loginContainer mt-3">
          <div className="logDetails">
            <div className="header">
              <h1>InstaClone</h1>
            </div>
            <div className="form">
              <InputwithVal
                id="username"
                type="text"
                label="Phone number, username or email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputwithVal
                id="password"
                type="password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className=" mt-2">
                <button
                  className="btn btn-info w-100 text-white "
                  onClick={handleLogin}
                >
                  Log in
                </button>
              </div>
            </div>
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
                <Link
                  to=""
                  className="text-decoration-none"
                  style={{ color: "rgb(34, 34, 131)", fontSize: "1rem" }}
                >
                  Log in with Facebook
                </Link>
              </p>
            </div>
            <div className="mt-1">
              <p className="text-center">
                <Link
                  to="/password/reset"
                  className="text-decoration-none"
                  style={{ color: "rgb(34, 20, 13)", fontSize: "0.8rem" }}
                >
                  Forgotten your password?
                </Link>
              </p>
            </div>
          </div>
          <div className="logSign mt-2 pt-3 pb-3 text-center ">
            Don't have an account?{" "}
            <Link
              to="/emailsignup"
              className="text-decoration-none h6 text-info"
            >
              Sign up
            </Link>
          </div>
          {/* <div className="loginHelp mt-2">
            <p className="text-center">Get the App</p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Link to="">

                <img src={GooglePlay} alt="Get it on Google play" />
              </Link>
              <Link to="">
                <img src={Microsoft} alt="Get it on Microsoft" />
              </Link>
            </div>
          </div> */}
        </div>
      </div>
      <LoginFooter />
    </>
  );
}

export default Login;
