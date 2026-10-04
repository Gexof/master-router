const ThinkingInReact = () => {
  return (
    <>
      <section className=" px-6 py-10 text-gray-100">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-white">Thinking in React</h1>

          <p className="mt-5 text-lg font-medium leading-8 text-gray-100">
            React can change how you think about the designs you look at and the
            apps you build. When you build a user interface with React, you will
            first break it apart into pieces called <em>components</em>. Then,
            you will describe the different visual states for each of your
            components. Finally, you will connect your components together so
            that the data flows through them. In this tutorial, we'll guide you
            through the thought process of building a searchable product data
            table with React.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-white">
            Start with the mockup
          </h2>

          <p className="mt-5 text-base text-gray-100">
            Imagine that you already have a JSON API and a mockup from a
            designer.
          </p>

          <p className="mt-4 text-base text-gray-100">
            The JSON API returns some data that looks like this:
          </p>
        </div>
      </section>

      <section className="px-6 py-10 text-gray-100">
        <div className="mx-auto max-w-3xl">
          <p className="text-base text-gray-100">
            To implement a UI in React, you will usually follow the same five
            steps.
          </p>

          <h2 className="mt-8 text-3xl font-bold text-white">
            Step 1: Break the UI into a component hierarchy
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-100">
            Start by drawing boxes around every component and subcomponent in
            the mockup and naming them. If you work with a designer, they may
            have already named these components in their design tool. Ask them!
          </p>

          <p className="mt-4 text-base leading-7 text-gray-100">
            Depending on your background, you can think about splitting up a
            design into components in different ways:
          </p>

          <ul className="mt-4 list-disc space-y-1 pl-6 text-base leading-7 text-gray-100 marker:text-gray-100">
            <li>
              <strong className="font-bold text-white">Programming</strong>—use
              the same techniques for deciding if you should create a new
              function or object. One such technique is the{" "}
              <a
                href="https://en.wikipedia.org/wiki/Separation_of_concerns"
                target="_blank"
                rel="noreferrer"
                className="text-[#58c4dc] transition-colors hover:underline"
              >
                separation of concerns
              </a>
              , that is, a component should ideally only be concerned with one
              thing. If it ends up growing, it should be decomposed into smaller
              subcomponents.
            </li>
            <li>
              <strong className="font-bold text-white">CSS</strong>—consider
              what you would make class selectors for. (However, components are
              a bit less granular.)
            </li>
            <li>
              <strong className="font-bold text-white">Design</strong>—consider
              how you would organize the design’s layers.
            </li>
          </ul>

          <p className="mt-4 text-base leading-7 text-gray-100">
            If your JSON is well-structured, you’ll often find that it naturally
            maps to the component structure of your UI. That’s because UI and
            data models often have the same information architecture—that is,
            the same shape. Separate your UI into components, where each
            component matches one piece of your data model.
          </p>
        </div>
      </section>
    </>
  );
};

export default ThinkingInReact;
