import { NavLink } from "react-router";
import "./index.css";

const LearnAside = () => {
  return (
    <aside className="w-full max-w-xs px-4 py-8">
      <h2 className="text-gray-400 font-medium mb-3 ml-4">GET STARTED</h2>
      <nav>
        <ul className="flex flex-col gap-1">
          <li>
            <NavLink to="/learn" end className="nav-link">
              Quick Start
            </NavLink>
          </li>

          <li>
            <NavLink to="/learn/thinking-in-react" className="nav-link">
              Thinking in React
            </NavLink>
          </li>

          <li>
            <NavLink to="/learn/installation" className="nav-link">
              Installation
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default LearnAside;
