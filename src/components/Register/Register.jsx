import React, { useState } from "react";
import "./Register.css";
import InputwithVal from "../InputwithVal/InputwithVal";
import GooglePlay from "@/image/googlePlayBtn.jpg";
import Microsoft from "@/image/MicrosoftBtn.jpg";
import LoginFooter from "../LoginFooter/LoginFooter";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase/Firebase";
const Register = () => {
  const navigate = useNavigate();
  const [fname, setFName] = useState("");
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlesignUp = (event) => {
    event.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userDetails) => {
        alert("Signed up successfully");
        const userId = userDetails.user.uid;
        addDoc(collection(db, "users"), {
          uid: userId,
          email: email,
          FullName: fname,
          username: username,
        });
        navigate("/");
        setFName("");
        setEmail("");
        setPassword("");
        setusername("");
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
                <Link
                  to=""
                  className="text-decoration-none"
                  style={{ color: "rgb(255, 255, 255)", fontSize: "1rem" }}
                >
                  Log in with Facebook
                </Link>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputwithVal
                id="name"
                type="text"
                label="Full Name"
                value={fname}
                onChange={(e) => setFName(e.target.value)}
              />
              <InputwithVal
                id="username"
                type="text"
                label="Username"
                value={username}
                onChange={(e) => setusername(e.target.value)}
              />
              <InputwithVal
                id="password"
                type="password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="signupText m-3">
                People who use our service may have uploaded your contact
                information to Instagram. Learn more
              </div>
              <div className="signupText m-3">
                By signing up, you agree to our Terms, Privacy Policy and
                Cookies Policy.
              </div>
              <div className=" mt-2 mb-3">
                <button
                  className="btn btn-info w-100 text-white "
                  onClick={handlesignUp}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
          <div className="RegisterSign mt-2 pt-3 pb-3 text-center ">
            Have an account?{" "}
            <Link to="/" className="text-decoration-none h6 text-info">
              Log in
            </Link>
          </div>
          <div className="loginHelp mt-2">
            <p className="text-center">Get the App</p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Link to="">
                <img src={GooglePlay} alt="Get it on Google play" />
              </Link>
              <Link to="">
                <img src={Microsoft} alt="Get it on Microsoft" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <LoginFooter />
    </>
  );
};
export default Register;
