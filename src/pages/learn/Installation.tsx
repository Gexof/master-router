const Installation = () => {
  return (
    <>
      <section className="bg-[#23272f] px-6 py-10 text-gray-100">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-white">Installation</h1>

          <p className="mt-5 text-lg font-medium leading-8 text-gray-100">
            React has been designed from the start for gradual adoption. You can
            use as little or as much React as you need. Whether you want to get
            a taste of React, add some interactivity to an HTML page, or start a
            complex React-powered app, this section will help you get started.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-white">Try React</h2>

          <p className="mt-5 text-base leading-7 text-gray-100">
            You don’t need to install anything to play with React. Try editing
            this sandbox!
          </p>

          <p className="mt-6 text-base leading-7 text-gray-100">
            You can edit it directly or open it in a new tab by pressing the
            “Fork” button in the upper right corner.
          </p>

          <p className="mt-4 text-base leading-7 text-gray-100">
            Most pages in the React documentation contain sandboxes like this.
            Outside of the React documentation, there are many online sandboxes
            that support React: for example,{" "}
            <a
              href="https://codesandbox.io/s/new"
              target="_blank"
              rel="noreferrer"
              className="text-[#58c4dc] transition-colors hover:underline"
            >
              CodeSandbox
            </a>
            ,{" "}
            <a
              href="https://stackblitz.com/fork/react"
              target="_blank"
              rel="noreferrer"
              className="text-[#58c4dc] transition-colors hover:underline"
            >
              StackBlitz
            </a>
            , or{" "}
            <a
              href="https://codepen.io/pen?template=QWYVwWN"
              target="_blank"
              rel="noreferrer"
              className="text-[#58c4dc] transition-colors hover:underline"
            >
              CodePen
            </a>
            .
          </p>

          <p className="mt-4 text-base leading-7 text-gray-100">
            To try React locally on your computer,{" "}
            <a
              href="https://react.dev/html/single-file-example.html"
              download
              className="text-[#58c4dc] transition-colors hover:underline"
            >
              download this HTML page.
            </a>{" "}
            Open it in your editor and in your browser!
          </p>
        </div>
      </section>

      <section className="bg-[#23272f] px-6 py-10 text-gray-100">
        <div className="mx-auto max-w-3xl">
          {/* Creating a React App */}
          <h2 className="text-2xl font-bold text-white">
            Creating a React App
          </h2>
          <p className="mt-5 text-base leading-7 text-gray-100">
            If you want to start a new React app, you can{" "}
            <a
              href="https://react.dev/learn/creating-a-react-app"
              target="_blank"
              rel="noreferrer"
              className="text-[#58c4dc] transition-colors hover:underline"
            >
              create a React app
            </a>{" "}
            using a recommended framework.
          </p>

          {/* Build from scratch */}
          <h2 className="mt-8 text-2xl font-bold text-white">
            Build a React App from Scratch
          </h2>
          <p className="mt-5 text-base leading-7 text-gray-100">
            If a framework is not a good fit for your project, you prefer to
            build your own framework, or you just want to learn the basics of a
            React app you can{" "}
            <a
              href="https://react.dev/learn/build-a-react-app-from-scratch"
              target="_blank"
              rel="noreferrer"
              className="text-[#58c4dc] transition-colors hover:underline"
            >
              build a React app from scratch
            </a>
            .
          </p>

          {/* Existing project */}
          <h2 className="mt-8 text-2xl font-bold text-white">
            Add React to an existing project
          </h2>
          <p className="mt-5 text-base leading-7 text-gray-100">
            If want to try using React in your existing app or a website, you
            can{" "}
            <a
              href="https://react.dev/learn/add-react-to-an-existing-project"
              target="_blank"
              rel="noreferrer"
              className="text-[#58c4dc] transition-colors hover:underline"
            >
              add React to an existing project.
            </a>
          </p>

          {/* Note callout */}
          <aside className="mt-8 rounded-2xl bg-[#26353d] px-7 py-6">
            <div className="flex items-center gap-3 text-[#4fa89a]">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 3h9l4 4v14H6z" />
                <path d="M9.5 11h6M9.5 15h4" />
              </svg>
              <span className="text-xl font-bold">Note</span>
            </div>

            <h3 className="mt-6 text-base font-bold text-white">
              Should I use Create React App?
            </h3>
            <p className="mt-4 text-base leading-7 text-gray-100">
              No. Create React App has been deprecated. For more information,
              see{" "}
              <a
                href="https://react.dev/blog/2025/02/14/sunsetting-create-react-app"
                target="_blank"
                rel="noreferrer"
                className="text-[#58c4dc] transition-colors hover:underline"
              >
                Sunsetting Create React App
              </a>
              .
            </p>
          </aside>

          {/* Next steps */}
          <h2 className="mt-10 text-2xl font-bold text-white">Next steps</h2>
          <p className="mt-5 text-base leading-7 text-gray-100">
            Head to the{" "}
            <a
              href="/learn"
              className="text-[#58c4dc] transition-colors hover:underline"
            >
              Quick Start
            </a>{" "}
            guide for a tour of the most important React concepts you will
            encounter every day.
          </p>
        </div>
      </section>
    </>
  );
};

export default Installation;
