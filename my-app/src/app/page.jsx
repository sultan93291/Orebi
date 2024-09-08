import NotFoundPage from "@/Pages/NotFoundPage/NotFoundPage";
import Footer from "./Components/Layout/Footer/Footer";
import Navbar from "./Components/Layout/Navbar/Navbar";
import ArrivalCard from "./Components/Cards/ArrivalCard/ArrivalCard";
import basket from "../Images/basket.png";

export default function Home() {
  return (
    <>
      <Navbar />
      <NotFoundPage />
      <Footer />
    </>
  );
}
