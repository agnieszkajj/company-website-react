import React from "react";
import { useRef } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import HomePage from "./components/HomePage/HomePage";
import TeamPage from "./components/TeamPage/TeamPage.jsx";
import Services from "./components/Services/Services.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const ref = useRef(null);
  const ref2 = useRef(null);

  const handleClickServices = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClickAbout = () => {
    ref2.current?.scrollIntoView({ behavior: "smooth" });
    console.log(ref2);
  };

  return (
    <div className="w-[960px] m-auto">
      <Navbar
        handleClickServices={handleClickServices}
        handleClickAbout={handleClickAbout}
      ></Navbar>
      <HomePage handleClickServices={handleClickServices}></HomePage>
      <TeamPage ref={ref2}></TeamPage>
      <Services ref={ref}></Services>
      <Footer></Footer>
    </div>
  );
}

export default App;
