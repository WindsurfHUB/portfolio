// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main.jsx";
import Chronicles from "./components/Chronicles.jsx";
import Profile from "./components/Profile.jsx";
import "./App.css";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Chronicles" element={<Chronicles />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
