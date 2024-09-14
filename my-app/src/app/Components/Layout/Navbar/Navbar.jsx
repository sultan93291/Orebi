"use client"
import React from "react";
import Paragraph from "../../Tags/Paragraph/Paragraph";
import Bar from "../../../../Images/bar.png";
import { FaSearch } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Img from "../../Tags/Img/Image";


const Navbar = () => {
  const router = useRouter();
  const path = usePathname()
  console.log(path);
  

  const hanldeRootRoute = () => {
    router.push("/");
  };

  const initialValue = {
    search: "",
  };
  const formik = useFormik({
    initialValues: initialValue,
    onSubmit: (values, actions) => {
      console.log(values.search);
      actions.resetForm({
        values: initialValue,
      });
    },
  });

  return (
    <section className="flex flex-col w-auto h-[180px] relative   items-center justify-center ">
      <nav className=" capitaliz flex w-full h-[80px] bg-white px-[160px] items-center gap-x-[549.33px]   ">
        <Img
          onClick={hanldeRootRoute}
          className={"h-[15px] w-[65px]  bg-no-repeat cursor-pointer "}
          src={"/siteLogo.png"}
          alt={"site logo"}
          height={15}
          width={65}
        />
        <ul className=" flex flex-row gap-x-[40px] ">
          <li className={`${path == "/" ? "active-nav-link" : " nav-link"} `}>
            <Link href={"/"}> Home</Link>
          </li>
          <li
            className={`${path == "/shop" ? "active-nav-link" : "nav-link"} `}
          >
            <Link href={"/shop"}> shop </Link>
          </li>
          <li
            className={`${path == "/about" ? "active-nav-link" : "nav-link"} `}
          >
            <Link href={"/about"}> about</Link>
          </li>
          <li
            className={`${
              path == "/contacts" ? "active-nav-link" : "nav-link"
            } `}
          >
            <Link href={"/contacts"}> contacts</Link>
          </li>
          <li
            className={`${
              path == "/journal" ? "active-nav-link" : "nav-link"
            } `}
          >
            <Link href={"/journal"}> journal</Link>
          </li>
        </ul>
      </nav>
      <div className=" w-full h-[100px] bg-offWhite px-[160px] flex flex-row items-center gap-x-[407px] ">
        <div className=" flex flex-row gap-x-[355px]">
          <div className="flex flex-row items-center gap-x-[10.71px] ">
            <Img
              alt={"toggle bar"}
              height={9}
              width={18}
              className={"h-[9.469px] w-[18.26px]"}
              src={Bar}
            />
            <Paragraph text={"Shop by Category"} className={"para-one"} />
          </div>
          <form className="relative w-[601px] h-[50px] flex bg-white items-center ">
            <FaSearch className="absolute right-0 mr-[17.03px]  " />
            <input
              type="search"
              className=" h-full w-full common-input pl-[21px] para-one  text-[#C4C4C4] pr-[40px] "
              placeholder="Search Products"
              name="search"
              onChange={formik.handleChange}
              value={formik.values.search}
            />
          </form>
        </div>
        <div className=" flex flex-row gap-10 ">
          <FaUserCheck className="[&svg]:h-[15.411px] [&svg]:w-[33px]" />
          <IoCartSharp className="[&svg]:h-[15.411px] [&svg]:w-[33px]" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
