import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <div className=" w-[960px] m-auto">
      <Navbar></Navbar>
      <HomePage></HomePage>
    </div>
  );
}

export default App;
