import React from "react";
import { useRef } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import HomePage from "./components/HomePage/HomePage";
import TeamPage from "./components/TeamPage/TeamPage.jsx";
import Services from "./components/Services/Services.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <HomePage></HomePage>
      <TeamPage></TeamPage>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
}

export default App;
