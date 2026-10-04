import { Link } from "react-router";

function ReactLogo() {
  return (
    <svg
      className="w-25 text-[#58c4dc] "
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

function PlayIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-11 w-11" aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill="#9db4c9" fillOpacity="0.85" />
      <path d="M19 15.5v17l14-8.5z" fill="#2f5d86" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 text-[#a5453b]"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

function VideoCard() {
  return (
    <div className="flex w-full max-w-135 items-center gap-4 rounded-2xl bg-white p-3.5 shadow-lg">
      <div className="flex h-20 w-32 shrink-0 items-center justify-center rounded-md border border-[#1a4f7a] bg-linear-to-br from-[#1a5a9a] to-[#0a85a8]">
        <PlayIcon />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-sm font-semibold text-gray-900">My video</h3>
        <p className="text-xs text-gray-500">Video description</p>
      </div>
      <button type="button" aria-label="Like" className="p-2">
        <HeartIcon />
      </button>
    </div>
  );
}

const HomePage = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center gap-6 mt-20 px-6 py-20 text-gray-100">
        {ReactLogo()}

        <h2 className=" text-4xl font-semibold">React</h2>

        <p className="text-3xl">
          The library for web and native user interfaces
        </p>

        <div className="flex gap-4">
          <Link
            to={"/learn"}
            className="bg-[#58c4dc] py-2 px-5 rounded-full text-lg font-medium text-[#23272f]"
          >
            Learn React
          </Link>
          <button className="border border-gray-600 py-2 px-5 rounded-full text-lg font-medium">
            API Reference
          </button>
        </div>
      </section>

      <section className="bg-[#16181d] px-6 py-20 text-gray-100">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          {/* Heading */}
          <h2 className="max-w-xl text-4xl font-semibold leading-tight text-white md:text-5xl">
            Create user interfaces from components
          </h2>

          {/* Preview panel */}
          <div className="mt-14 flex w-full items-center justify-center rounded-3xl border border-white/10 bg-linear-to-br from-[#3c3a5a] via-[#1b3a52] to-[#1f4a40] px-6 py-24 md:px-12">
            <VideoCard />
          </div>

          {/* Closing paragraph */}
          <p className="mt-14 max-w-2xl text-lg leading-relaxed text-gray-200">
            Whether you work on your own or with thousands of other developers,
            using React feels the same. It is designed to let you seamlessly
            combine components written by independent people, teams, and
            organizations.
          </p>
        </div>
      </section>
    </>
  );
};

export default HomePage;
