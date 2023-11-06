import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <div>
      <header className="fixed top-0 w-full h-[70px] bg-primary_color">
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
