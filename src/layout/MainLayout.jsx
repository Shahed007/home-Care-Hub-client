import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="font-montserrat relative overflow-hidden h-full">
      <header className="fixed top-0 w-full z-[200] h-[70px] dark:bg-dark_component bg-primary_color border-b border-t shadow border-secondary_color">
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className=" bg-secondary_color/60 dark:bg-dark_component text-text_color_normal dark:text-text_color_dark">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
