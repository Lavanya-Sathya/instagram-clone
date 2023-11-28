import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/Register/Register";
import ForgotPass from "./components/ForgotPassword/ForgotPass";
import Homepage from "./components/Home/Homepage";
import ThemeProvider from "./components/Home/context/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" index element={<Login />} />
          <Route path="/emailsignup" element={<Register />} />
          <Route path="/password/reset" element={<ForgotPass />} />

          <Route path="/home/*" element={<Homepage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
