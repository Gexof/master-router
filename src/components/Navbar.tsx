import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="max-w-sm mx-auto my-7">
      <ul className="flex item-center justify-between">
        <li className="hover:text-[#146eca] duration-200">
          <Link to="">Home</Link>
        </li>
        <li className="hover:text-[#146eca] duration-200">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="hover:text-[#146eca] duration-200">
          <Link to="/about">About US</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
