import React from "react";

import DownToUpSlider from "@/app/Components/Slider/DownToUpSlider/DownToUpSlider";
import Feature from "./Feature/Feature";
import { Arrival } from "./Arrival/Arrival";

const HomePage = () => {
  return (
    <div>
      <DownToUpSlider />
      <Feature />
      <Arrival />
    </div>
  );
};

export default HomePage;
