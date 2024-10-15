import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main.jsx";
import Chronicles from "./components/Chronicles.jsx";
import Profile from "./components/Profile.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Chronicles" element={<Chronicles />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
