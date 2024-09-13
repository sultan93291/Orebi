import React from "react";
import CustomSlider from "@/app/Components/Slider/CustomSlider/CustomSlider";
import watch from "../../../Images/Arrival/arrival.png";
import mobileWatch from "../../../Images/Arrival/mobileWatch.png";
import basket from "../../../Images/Arrival/basket.png";
import doll from "../../../Images/Arrival/doll.png";

const slides = [
  {
    src: watch.src,
    btnTxt: "10%",
    heading: "Basic Crew Neck Tee",
    subheading: "$44.00",
    title: "Black",
  },
  {
    src: mobileWatch.src,
    btnTxt: "",
    heading: "Basic Crew Neck Tee",
    subheading: "$44.00",
    title: "Black",
  },
  {
    src: basket.src,
    btnTxt: "",
    heading: "Basic Crew Neck Tee",
    subHeading: "$44.00",
    title: "Black",
  },
  {
    src: doll.src,
    btnTxt: "",
    heading: "Basic Crew Neck Tee",
    subheading: "$44.00",
    title: "Black",
  },
];

const Arrival = () => {
  return <CustomSlider slides={slides} heading={"New Arrivals"} />;
};


export default Arrival