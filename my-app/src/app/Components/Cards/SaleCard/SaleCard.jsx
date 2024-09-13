import React from "react";
import Paragraph from "../../Tags/Paragraph/Paragraph";
import Heading from "../../Tags/Heading/Heading";
import Button from "../../Tags/Button/Button";

const SaleCard = ({
  isVertical,
  src,
  headingTxt,
  BtnTxt,
  paraTxtOne,
  paraTxtTwo,
  discountPercent,
}) => {
  return (
    <>
      {isVertical ? (
        <div
          className=" h-[780px] w-[780px]  relative  "
          style={{
            background: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="  absolute left-0 top-0 mt-[470px] ml-[64px] flex flex-col gap-y-[36px] ">
            <Heading
              Variant={"h4"}
              text={headingTxt}
              className={"headign-five"}
            />
            <div className=" flex flex-col gap-y-[49px]">
              <div className="flex flex-row gap-x-2 items-center ">
                <Paragraph
                  text={paraTxtOne ? paraTxtOne : "Up to"}
                  className={"para-four"}
                />
                <Heading
                  text={discountPercent}
                  Variant={"h2"}
                  className={"heading-three"}
                />
                <Paragraph text={paraTxtTwo} className={"para-four"} />
              </div>
              <Button
                text={BtnTxt ? BtnTxt : "Shop Now"}
                className={"common-btn w-[185px] h-[50px] "}
              />
            </div>
          </div>
        </div>
      ) : (
        <div
          className=" w-[780px] h-[370px] relative "
          style={{
            background: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="  absolute left-0 top-0 mt-[64px] ml-[50px] flex flex-col gap-y-[36px] ">
            <Heading
              Variant={"h4"}
              text={headingTxt}
              className={"headign-five"}
            />
            <div className=" flex flex-col gap-y-[49px]">
              <div className="flex flex-row gap-x-2 items-center ">
                <Paragraph
                  text={paraTxtOne ? paraTxtOne : "Up to"}
                  className={"para-four"}
                />
                <Heading
                  text={discountPercent}
                  Variant={"h2"}
                  className={"heading-three"}
                />
                <Paragraph text={paraTxtTwo} className={"para-four"} />
              </div>
              <Button
                text={BtnTxt ? BtnTxt : "Shop Now"}
                className={"common-btn w-[185px] h-[50px] "}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SaleCard;
