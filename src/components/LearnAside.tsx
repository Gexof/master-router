import { NavLink } from "react-router";

const LearnAside = () => {
  return (
    <aside className="w-full max-w-xs px-4 py-8">
      <nav>
        <ul className="flex flex-col gap-1">
          <li>
            <NavLink
              to="/learn"
              className="block rounded-md px-3 py-2 text-sm text-gray-400 transition-colors duration-200 hover:bg-[#252a33] hover:text-white"
            >
              Quick Start
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/learn/thinking-in-react"
              className="block rounded-md px-3 py-2 text-sm text-gray-400 transition-colors duration-200 hover:bg-[#252a33] hover:text-white"
            >
              Thinking in React
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/installation"
              className="block rounded-md px-3 py-2 text-sm text-gray-400 transition-colors duration-200 hover:bg-[#252a33] hover:text-white"
            >
              Installation
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default LearnAside;
