import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="max-w-sm mx-auto my-7">
      <ul className="flex items-center justify-between">
        <li className="block rounded-md px-3 py-2 text-sm text-gray-400 transition-colors duration-200 hover:bg-[#2D323B] hover:text-white hover:rounded-md">
          <NavLink to="/">Home</NavLink>
        </li>

        <li className="block px-3 py text-sm  text-gray-400">
          <NavLink to="/contact">Contact</NavLink>
        </li>

        <li className="hover:text-[#146eca] duration-200">
          <NavLink to="/about">About US</NavLink>
        </li>

        <li className="hover:text-[#146eca] duration-200">
          <NavLink to="/learn">Learn</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
