import { Outlet } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import LearnAside from "../../components/Learn Aside/LearnAside";

const LearnLayout = () => {
  return (
    <>
      <Navbar />
      <main className="flex my-16">
        <LearnAside />

        <section className="flex-1 mx-16">
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default LearnLayout;
