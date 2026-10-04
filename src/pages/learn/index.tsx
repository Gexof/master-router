const QuickStartPage = () => {
  return (
    <div className="text-white">
      <div>
        <h2 className=" text-5xl font-semibold">Quick Start</h2>
        <p className="my-4 text-lg font-medium">
          Welcome to the React documentation! This page will give you an
          introduction to 80% of the React concepts that you will use on a daily
          basis.
        </p>
      </div>

      <div className="bg-[#343A46] p-6 rounded-2xl border border-[#444955] mt-8">
        <h3 className="text-lg font-semibold">You will learn</h3>
        <ul className="ms-7 my-3 list-disc">
          <li className="mb-1">How to create and nest components</li>
          <li className="mb-1">How to add markup and styles</li>
          <li className="mb-1">How to display data</li>
          <li className="mb-1">How to render conditions and lists</li>
          <li className="mb-1">
            How to respond to events and update the screen
          </li>
          <li className="mb-1">How to share data between components</li>
        </ul>
      </div>

      <div className="mt-6">
        <h4 className="text-2xl font-semibold">
          Creating and nesting components
        </h4>
        <p className="my-4 text-lg font-medium">
          React apps are made out of components. A component is a piece of the
          UI (user interface) that has its own logic and appearance. A component
          can be as small as a button, or as large as an entire page.
        </p>
      </div>

      <div className="mt-6">
        <h4 className="text-2xl font-semibold">Writing markup with JSX</h4>
        <p className="my-4 text-lg font-medium">
          The markup syntax you’ve seen above is called JSX. It is optional, but
          most React projects use JSX for its convenience. All of the tools we
          recommend for local development support JSX out of the box.
        </p>
      </div>
    </div>
  );
};

export default QuickStartPage;
