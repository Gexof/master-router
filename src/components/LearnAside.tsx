import { NavLink } from "react-router";

const LearnAside = () => {
  return (
    <aside className="w-full max-w-xs px-4 py-8">
      <h2 className="text-gray-400 font-medium mb-3">GET STARTED</h2>
      <nav>
        <ul className="flex flex-col gap-1">
          <li>
            <NavLink
              to="/learn"
              end
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
              to="/learn/installation"
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
