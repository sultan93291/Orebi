"use client";
import React, { useEffect, useState } from "react";
import Heading from "../../Tags/Heading/Heading";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import Button from "../../Tags/Button/Button";
import ArrivalCard from "../../Cards/ArrivalCard/ArrivalCard";

const CustomSlider = ({ slides, heading }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSlide, setCurrenSlide] = useState([]);

  const itemsPerSlide = 4;

  useEffect(() => {
    setCurrenSlide(slides.slice(0, itemsPerSlide));
  }, [slides]);

  // Next slide function
  const nextSlide = () => {
    const nextIndex = (currentIndex + itemsPerSlide) % slides.length;
    setCurrenSlide(slides.slice(nextIndex, nextIndex + itemsPerSlide));
    setCurrentIndex(nextIndex);
  };

  // Previous slide function
  const prevSlide = () => {
    const prevIndex =
      (currentIndex - itemsPerSlide + slides.length) % slides.length;
    setCurrenSlide(slides.slice(prevIndex, prevIndex + itemsPerSlide));
    setCurrentIndex(prevIndex);
  };
  return (
    <div className=" flex flex-col gap-y-[48px] w-full pl-[184px] pr-[130px] h-auto relative ">
      <Heading text={heading} Variant={"h2"} className={"headign-five"} />
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
        {currentSlide.map((item, index) => {
          return (
            <ArrivalCard
              imgSrc={item.src}
              btnTxt={item.btnTxt}
              headingTxt={item.heading}
              subheading={item.subHeading}
              paraTxt={item.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CustomSlider;
