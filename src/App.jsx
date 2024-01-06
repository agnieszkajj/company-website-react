import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import HomePage from "./components/HomePage/HomePage";
import TeamPage from "./components/TeamPage/TeamPage.jsx";
import Services from "./components/Services/Services.jsx";

function App() {
  return (
    <div className=" w-[960px] m-auto">
      <Navbar></Navbar>
      <HomePage></HomePage>
      <TeamPage></TeamPage>
      <Services></Services>
    </div>
  );
}

export default App;
