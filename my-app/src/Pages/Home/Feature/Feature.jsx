import SaleCard from "@/app/Components/Cards/SaleCard/SaleCard";
import React from "react";
import light from "../../../Images/demo.png";
import lamp from "../../../Images/lamp.png";
import watch from "../../../Images/watch.png";
const Feature = () => {
  return (
    <div className="flex flex-row gap-x-10 pl-[188px] pr-[132px] py-[174px] pb-[128px] ">
      <SaleCard
        isVertical={true}
        src={light.src}
        headingTxt={"Phones Sale"}
        paraTxtOne={"Phones Sale"}
        discountPercent={"30%"}
        paraTxtTwo={"sale for all phones!"}
        BtnTxt={"Shop Now"}
      />
      <div className=" flex flex-col gap-y-10 ">
        <SaleCard
          src={watch.src}
          headingTxt={"Electronics Sale"}
          paraTxtOne={"Up to"}
          discountPercent={"70%"}
          paraTxtTwo={"sale for all electronics!"}
          BtnTxt={"Shop Now"}
        />
        <SaleCard
          src={lamp.src}
          headingTxt={"Furniture Offer"}
          paraTxtOne={"Up to"}
          discountPercent={"50%"}
          paraTxtTwo={"sale for all furniture items!"}
          BtnTxt={"Shop Now"}
        />
      </div>
    </div>
  );
};

export default Feature;
