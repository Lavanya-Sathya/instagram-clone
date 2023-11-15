import React from "react";
import Login from "./components/login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" dex element={<Login />} />
        <Route path="/emailsignup" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
