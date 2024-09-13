"use client";
import React, { useState, useEffect, useRef } from "react";

import Img from "../../Tags/Img/Image";
import Heading from "../../Tags/Heading/Heading";
import two from "../../../../Images/two.svg";
import truck from "../../../../Images/truck.svg";
import circle from "../../../../Images/return.svg";
import Paragraph from "../../Tags/Paragraph/Paragraph";
import Button from "../../Tags/Button/Button";

const DownToUpSlider = () => {
  const containerRef = useRef(null);
  const [whiteBarPosition, setWhiteBarPosition] = useState(0);
  const prevScrollPosition = useRef(0);
  const handleScroll = () => {
    if (containerRef.current) {
      const currentScroll = containerRef.current.scrollTop;
      updateScrollPosition(currentScroll);
    }
  };

  const updateScrollPosition = currentScroll => {
    if (currentScroll < prevScrollPosition.current) {
      // Scrolling up
      console.log("Scrolling Up");
      setWhiteBarPosition(prev => Math.max(prev - 5, 0)); // Move up, stop at 0px
    } else if (currentScroll > prevScrollPosition.current) {
      // Scrolling down
      console.log("Scrolling Down");
      setWhiteBarPosition(prev => Math.min(prev + 5, 80)); // Move down, stop at 80px
    }

    // Update the previous scroll position
    prevScrollPosition.current = currentScroll;
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      // Clean up the event listener on component unmount
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      // Clean up the event listener on component unmount
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-[677px] w-full overflow-y-scroll  relative"
    >
      {["green", "blue", "red", "yellow"].map((color, index) => (
        <div className="flex flex-col" key={index}>
          <div
            key={index}
            className={`h-[597px] bg-[url('/banner.png')]  w-full  relative shadow-banner_shadow bg-cover bg-no-repeat bg-center   `}
          >
            <div className="  absolute left-0 top-0 mt-[201px] ml-[321px] flex flex-col gap-y-[33px] ">
              <Heading
                Variant={"h2"}
                text={"Final Offer"}
                className={"heading-two"}
              />
              <div className=" flex flex-col gap-y-[49px]">
                <div className="flex flex-row gap-x-2 items-center ">
                  <Paragraph text={`Up to `} className={"para-four"} />
                  <Heading
                    text={"50%"}
                    Variant={"h2"}
                    className={"heading-three"}
                  />
                  <Paragraph
                    text={`sale for all furniture items!`}
                    className={"para-four"}
                  />
                </div>
                <Button text={"shop now"} className={"common-btn w-[185px] h-[50px] "}/>
              </div>
            </div>
            <div className="flex flex-row gap-x-[9px] mt-[272px] absolute items-center ml-[208px] z-10   ">
              <span>{`0${index + 1}`}</span>
              <span className="h-[120px] w-[2px] bg-white relative">
                <span
                  className="absolute w-full bg-black  "
                  style={{
                    height: "40px",
                    top: `${whiteBarPosition}px`,
                  }}
                ></span>
              </span>
            </div>
          </div>
          <div className="h-20 w-full flex flex-row gap-x-[536px] pl-[187.44px] pr-[134px] items-center relative after:absolute after:h-[2px] after:w-full after:bg-lightWhite after:left-0 after:bottom-0  ">
            <div className="flex flex-row gap-x-[15px] items-center ">
              <Img width={13.496} height={19.936} src={two} alt={"not found"} />
              <Paragraph text={"Two years warranty"} className={"para-four"} />
            </div>
            <div className="flex flex-row gap-x-[15px] items-center ">
              <Img width={25} height={20} src={truck} alt={"not found"} />
              <Paragraph text={"Free shipping"} className={"para-four"} />
            </div>
            <div className="flex flex-row gap-x-[15px] items-center ">
              <Img width={20} height={20} src={circle} alt={"not found"} />
              <Paragraph
                text={"Return policy in 30 days"}
                className={"para-four"}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DownToUpSlider;
