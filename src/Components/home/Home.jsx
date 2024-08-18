import React from "react";
import Hero from "../hero/Hero";
import Featured from "./Featured/Featured";
import Recent from "./recent/Recent";
import Awards from "./award/Award";
import Location from "./location/Location";
import Team from "./team/Team";
import Price from "./price/Price";

const Home = () => {
  return (
    <>
      <Hero />
      <Featured/>
      <Recent/>
      <Awards/>
      <Location/>
      <Team/>
      <Price/>
     
    </>
  );
};

export default Home;
