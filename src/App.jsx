import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

export const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen text-white bg-zinc-900 overflow-hidden">
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  );
};
export default App;
