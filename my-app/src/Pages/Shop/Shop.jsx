import ArrivalCard from "@/app/Components/Cards/ArrivalCard/ArrivalCard";
import Heading from "@/app/Components/Tags/Heading/Heading";
import Paragraph from "@/app/Components/Tags/Paragraph/Paragraph";
import React from "react";
import bottle from "../../Images/HotDeals/bottle.png";
import mixer from "../../Images/HotDeals/mixer.png";
import grayBag from "../../Images/HotDeals/grayBag.png";
import balckBag from "../../Images/HotDeals/balckBag.png";

const Shop = () => {
  const slides = [
    {
      src: bottle.src,
      btnTxt: "",
      heading: "Basic Crew Neck Tee",
      subheading: "$44.00",
      title: "Black",
      isBtn: true,
    },
    {
      src: grayBag.src,
      btnTxt: "",
      heading: "Basic Crew Neck Tee",
      subheading: "$44.00",
      title: "Black",
      isBtn: true,
    },
    {
      src: mixer.src,
      btnTxt: "",
      heading: "Basic Crew Neck Tee",
      subHeading: "$44.00",
      title: "Black",
      isBtn: true,
    },
    {
      src: balckBag.src,
      btnTxt: "",
      heading: "Basic Crew Neck Tee",
      subheading: "$44.00",
      title: "Black",
      isBtn: true,
    },
    {
      src: bottle.src,
      btnTxt: "",
      heading: "Basic Crew Neck Tee",
      subheading: "$44.00",
      title: "Black",
      isBtn: true,
    },
    {
      src: grayBag.src,
      btnTxt: "",
      heading: "Basic Crew Neck Tee",
      subheading: "$44.00",
      title: "Black",
      isBtn: true,
    },
    {
      src: mixer.src,
      btnTxt: "",
      heading: "Basic Crew Neck Tee",
      subHeading: "$44.00",
      title: "Black",
      isBtn: true,
    },
    {
      src: balckBag.src,
      btnTxt: "",
      heading: "Basic Crew Neck Tee",
      subheading: "$44.00",
      title: "Black",
      isBtn: true,
    },
    {
      src: bottle.src,
      btnTxt: "",
      heading: "Basic Crew Neck Tee",
      subheading: "$44.00",
      title: "Black",
      isBtn: true,
    },
    {
      src: grayBag.src,
      btnTxt: "",
      heading: "Basic Crew Neck Tee",
      subheading: "$44.00",
      title: "Black",
      isBtn: true,
    },
    {
      src: mixer.src,
      btnTxt: "",
      heading: "Basic Crew Neck Tee",
      subHeading: "$44.00",
      title: "Black",
      isBtn: true,
    },
    {
      src: balckBag.src,
      btnTxt: "",
      heading: "Basic Crew Neck Tee",
      subheading: "$44.00",
      title: "Black",
      isBtn: true,
    },
  ];

  return (
    <section className="flex flex-col gap-y-[130px] px-[158px]  py-[124px] pb-[140px]">
      <div className="flex flex-col gap-y-[11px]">
        <Heading text={"products"} className={"heading-two"} Variant={"h2"} />
        <Paragraph text={"Home > Products"} className={"para-three"} />
      </div>
      <div className="flex flex-row gap-x-[33.5px]">
        <div className="w-[371px] h-[150px] "></div>
        <div className="flex flex-col gap-y-[50px]">
          <div className="flex flex-col gap-y-[60px]">
            <div className="flex flex-row gap-x-[40px] ml-[642px]">
              <div className="flex flex-row gap-x-[14px] items-center  ">
                <Paragraph
                  text={"Sort by:"}
                  className={"para-four leading-[30px]"}
                />
                <div className="relative w-[239px] ">
                  <select
                    name="sort"
                    id="sort"
                    className="para-four leading-[30px] select-design  "
                  >
                    <option value="Featured">Featured</option>
                    <option value="PriceAsc">Price: Low to High</option>
                    <option value="PriceDesc">Price: High to Low</option>
                    <option value="Newest">Newest Arrivals</option>
                  </select>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="6"
                    viewBox="0 0 11 6"
                    fill="none"
                    className="absolute right-0  top-1/2 transform -translate-y-1/2s mr-[21px]   "
                  >
                    <path
                      d="M0.720972 0H9.85588C10.4878 0 10.8038 0.763314 10.3565 1.21065L5.79079 5.77988C5.51387 6.0568 5.06298 6.0568 4.78606 5.77988L0.22038 1.21065C-0.226957 0.763314 0.0890194 0 0.720972 0Z"
                      fill="#737373"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-row gap-x-[14px] items-center ">
                <Paragraph
                  text={"Show:"}
                  className={"para-four leading-[30px]"}
                />
                <div className="relative w-[139px] ">
                  <select
                    name="size"
                    id="size"
                    className="para-four leading-[30px] select-design "
                  >
                    <option value="36">36</option>
                    <option value="38">38</option>
                    <option value="42">42</option>
                    <option value="44">44</option>
                  </select>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="6"
                    viewBox="0 0 11 6"
                    fill="none"
                    className="absolute right-0  top-1/2 transform -translate-y-1/2s mr-[15px]   "
                  >
                    <path
                      d="M0.720972 0H9.85588C10.4878 0 10.8038 0.763314 10.3565 1.21065L5.79079 5.77988C5.51387 6.0568 5.06298 6.0568 4.78606 5.77988L0.22038 1.21065C-0.226957 0.763314 0.0890194 0 0.720972 0Z"
                      fill="#737373"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-x-[34px] gap-y-[50px] w-[1214px] h-auto flex-wrap ">
              {slides.map((item, index) => {
                return (
                  <ArrivalCard
                    key={index}
                    imgSrc={item.src}
                    btnTxt={item.btnTxt}
                    headingTxt={item.heading}
                    subheading={item.subHeading}
                    paraTxt={item.title}
                    isBtn={item.isBtn}
                  />
                );
              })}
            </div>
          </div>
          <div className="h-[50px] w-[50px]"></div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
