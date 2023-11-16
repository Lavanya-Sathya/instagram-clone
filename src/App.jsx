import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/Register/Register";
import ForgotPass from "./components/ForgotPassword/ForgotPass";
import Homepage from "./components/Home/Homepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" dex element={<Login />} />
        <Route path="/emailsignup" element={<Register />} />
        <Route path="/password/reset" element={<ForgotPass />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
