import React from "react";
import DownToUpSlider from "@/app/Components/Slider/DownToUpSlider/DownToUpSlider";
import Feature from "./Feature/Feature";
import { Arrival } from "./Arrival/Arrival";
import HotDeals from "./HotDeals/HotDeals";
import Phone from "./Phone/Phone";

const HomePage = () => {
  return (
    <>
      <DownToUpSlider />
      <Feature />
      <Arrival />
      <HotDeals />
      <Phone />
    </>
  );
};

export default HomePage;
