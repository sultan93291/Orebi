"use client"
import Button from '@/app/Components/Tags/Button/Button'
import Heading from '@/app/Components/Tags/Heading/Heading'
import Paragraph from '@/app/Components/Tags/Paragraph/Paragraph'
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaSearch } from 'react-icons/fa'



const NotFoundPage = () => {

  const router = useRouter()
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

  const handleHome = () => {
    router.push("/")
  }


  return (
    <section className="flex flex-col gap-y-[50px] px-[157px] pt-[81px] pb-[140px] ">
      <div className="flex flex-col  ">
        <Heading Variant={"h1"} text={"404"} className={"heading-one"} />
        <Paragraph
          text={
            "The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?"
          }
          className={" w-[644px] para-three "}
        />
      </div>
      <div className="flex flex-col gap-y-[60px]">
        <form className="relative w-[643px] h-[71px] flex bg-white items-center ">
          <FaSearch className="absolute right-0 mr-[28px]  " />
          <input
            type="search"
            className=" h-full w-full common-input pl-[21px] para-one  text-[#C4C4C4] pr-[40px] border-[1px] border-solid border-lightWhite "
            placeholder="Type to search"
            name="search"
            onChange={formik.handleChange}
            value={formik.values.search}
          />
        </form>
        <Button text={"back to home"} className={"common-btn h-[50px] w-[200px] "} onClick={handleHome} />
      </div>
    </section>
  );
}

export default NotFoundPage