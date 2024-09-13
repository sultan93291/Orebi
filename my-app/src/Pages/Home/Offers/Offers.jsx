import React from 'react'

import cap from "../../../Images/Offers/cap.png";
import table from "../../../Images/Offers/table.png";
import headphone from "../../../Images/Offers/headphone.png";
import glass from "../../../Images/Offers/glass.png";
import CustomSlider from '@/app/Components/Slider/CustomSlider/CustomSlider';



const slides = [
  {
    src: cap.src,
    btnTxt: "10%",
    heading: "Basic Crew Neck Tee",
    subheading: "$44.00",
    title: "Black",
  },
  {
    src: table.src,
    btnTxt: "",
    heading: "Basic Crew Neck Tee",
    subheading: "$44.00",
    title: "Black",
  },
  {
    src: headphone.src,
    btnTxt: "",
    heading: "Basic Crew Neck Tee",
    subHeading: "$44.00",
    title: "Black",
  },
  {
    src: glass.src,
    btnTxt: "",
    heading: "Basic Crew Neck Tee",
    subheading: "$44.00",
    title: "Black",
  },
];

const Offers = () => {
  return <CustomSlider slides={slides} heading={"Special Offers"} />;
}

export default Offers