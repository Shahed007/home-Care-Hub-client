import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <div className="font-montserrat relative overflow-hidden">
      <header className="fixed top-0 w-full h-[70px] dark:bg-dark_component bg-primary_color border-b shadow border-secondary_color">
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
