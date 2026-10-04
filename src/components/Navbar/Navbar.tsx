import { Link, NavLink } from "react-router";
import "./index.css";

function ReactLogo() {
  return (
    <svg
      className="navbar__logo"
      viewBox="-11.5 -10.23174 23 20.46348"
      aria-hidden="true"
    >
      <circle cx="0" cy="0" r="2.05" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      className="navbar__search-icon"
      width="18"
      height="18"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="9" cy="9" r="6" />
      <path d="M13.5 13.5L17 17" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3M4.6 4.6l2.1 2.1M17.3 17.3l2.1 2.1M4.6 19.4l2.1-2.1M17.3 6.7l2.1-2.1" />
    </svg>
  );
}

function TranslateIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 5h11M8.5 3v2M5 5c.5 3.5 3 6.5 7 8.5M12 5c-.5 3.5-3 6.5-7.5 8.5" />
      <path d="M12.5 21l4.5-11 4.5 11M14 17.5h6" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z" />
    </svg>
  );
}

const Navbar = () => {
  return (
    <header className="navbar">
      <Link className="navbar__brand" to="/">
        <ReactLogo />
        <span className="navbar__title">React</span>
        <span className="navbar__version">v19.3</span>
      </Link>

      <button type="button" className="navbar__search" aria-label="Search">
        <SearchIcon />
        <span className="navbar__search-text">Search</span>
        <span className="navbar__shortcut">
          <kbd>Ctrl</kbd>
          <kbd>K</kbd>
        </span>
      </button>

      <nav className="navbar__nav">
        <NavLink className="navbar__link" to="/learn">
          Learn
        </NavLink>
      </nav>

      <div className="navbar__actions">
        <button
          type="button"
          className="navbar__icon-btn"
          aria-label="Toggle theme"
        >
          <SunIcon />
        </button>
        <button
          type="button"
          className="navbar__icon-btn"
          aria-label="Change language"
        >
          <TranslateIcon />
        </button>
        <a
          className="navbar__icon-btn"
          href="https://github.com/facebook/react"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <GithubIcon />
        </a>
      </div>
    </header>
  );
};
export default Navbar;
