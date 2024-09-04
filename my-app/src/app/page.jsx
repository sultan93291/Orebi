import NotFoundPage from "@/Pages/NotFoundPage/NotFoundPage";
import Footer from "./Components/Layout/Footer/Footer";
import Navbar from "./Components/Layout/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <NotFoundPage />
      <Footer />
    </>
  );
}
