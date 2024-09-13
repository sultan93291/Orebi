"use client";
import React, { useState } from "react";
import Heading from "../../Tags/Heading/Heading";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import Button from "../../Tags/Button/Button";
import ArrivalCard from "../../Cards/ArrivalCard/ArrivalCard";

const CustomSlider = ({ slides , heading }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Next slide function
  const nextSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Previous slide function
  const prevSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className=" flex flex-col gap-y-[48px] w-full pl-[184px] pr-[130px] h-auto relative ">
      <Heading
        text={"New Arrivals"}
        Variant={"h2"}
        className={"headign-five"}
      />
      <div className="flex flex-row gap-x-10 pb-[163px] z-0 relative w-full  ">
        <div className="flex flex-row justify-between absolute top-0 left-0 w-full mt-[153px]   z-10 ">
          <Button
            text={<IoIosArrowRoundBack className="h-6 w-6 text-white " />}
            onClick={prevSlide}
            className={
              " h-16 w-16 rounded-full bg-sliderBtnColor flex items-center justify-center ml-[6px] "
            }
          />
          <Button
            text={<IoIosArrowRoundForward className="h-6 w-6 text-white  " />}
            onClick={nextSlide}
            className={
              " h-16 w-16 rounded-full bg-sliderBtnColor flex items-center justify-center mr-[6px] "
            }
          />
        </div>
        {slides.map((item, index) => {
          return <ArrivalCard imgSrc={item.src} />;
        })}
      </div>
    </div>
  );
};

export default CustomSlider;
