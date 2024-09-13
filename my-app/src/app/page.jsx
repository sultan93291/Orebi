import NotFoundPage from "@/Pages/NotFoundPage/NotFoundPage";
import Footer from "./Components/Layout/Footer/Footer";
import Navbar from "./Components/Layout/Navbar/Navbar";
import ArrivalCard from "./Components/Cards/ArrivalCard/ArrivalCard";
import basket from "../Images/basket.png";
import DownToUpSlider from "./Components/Slider/DownToUpSlider/DownToUpSlider";
import Feature from "@/Pages/Home/Feature/Feature";
import CustomSlider from "./Components/Slider/CustomSlider/CustomSlider";
import watch from "../Images/Arrival/arrival.png";
const slides = [
  { src: watch.src, name: "sultna" },
  { src: watch.src, name: "abib" },
  { src: watch.src, name: "sultna" },
  { src: watch.src, name: "abib" },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <DownToUpSlider />
      <Feature />
      <CustomSlider slides={slides} />
      <Footer />
    </>
  );
}
