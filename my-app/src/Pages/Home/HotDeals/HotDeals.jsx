import React from "react";
import bottle from "../../../Images/HotDeals/bottle.png";
import mixer from "../../../Images/HotDeals/mixer.png";
import grayBag from "../../../Images/HotDeals/grayBag.png";
import balckBag from "../../../Images/HotDeals/balckBag.png";
import CustomSlider from "@/app/Components/Slider/CustomSlider/CustomSlider";


const slides = [
  {
    src: bottle.src,
    btnTxt: "",
    heading: "Basic Crew Neck Tee",
    subheading: "$44.00",
    title: "Black",
  },
  {
    src: grayBag.src,
    btnTxt: "",
    heading: "Basic Crew Neck Tee",
    subheading: "$44.00",
    title: "Black",
  },
  {
    src: mixer.src,
    btnTxt: "",
    heading: "Basic Crew Neck Tee",
    subHeading: "$44.00",
    title: "Black",
  },
  {
    src: balckBag.src,
    btnTxt: "",
    heading: "Basic Crew Neck Tee",
    subheading: "$44.00",
    title: "Black",
  },
];

const HotDeals = () => {
  return <CustomSlider slides={slides} heading={"Hot Deals"} />;
};

export default HotDeals;
