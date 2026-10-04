import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";

const RootLayout = () => {
  return (
    <main className="text-white">
      <Navbar />
      <Outlet />
    </main>
  );
};

export default RootLayout;
