import React from "react";
import Banner from "./Banner/Banner";
import OversizedT from "./Oversized T-shirts/OversizedT";
import Topbasics from "./Top Basic/Topbasics";
import Regular from "./Regular Fit Tees/Regular";
import About from "./About Us/About";

function Home() {
  return (
    <div className="home-container">
      <Banner />
      <OversizedT />
      <Topbasics />
      <Regular />
      <About />
    </div>
  );
}

export default Home;
