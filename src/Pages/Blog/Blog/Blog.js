import React from "react";

const Blog = () => {
  return (
    <div className="bg-slate-100 py-1 px-4 mb-5">
      <h1 className="text-3xl text-primary text-center mb-5 mt-5">Some Interview question</h1>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-4 px-4"
      >
        <div className="collapse-title text-xl font-medium">
          What are the different ways to manage a state in a React application?
        </div>
        <div className="collapse-content">
          <p>
            <b>Local(UI)state:</b> Local state is data we manage in one or another component. Local
            state is most often managed in React using the useState hook. For example, local state
            would be needed to show or hide a modal component or to track values for a form
            component, such as form submission, when the form is disabled and the values of a form’s
            inputs.<b>Global(UI)state:</b> Global state is data we manage across multiple
            components. Global state is necessary when we want to get and update data anywhere in
            our app, or in multiple components at least. A common example of global state is
            authenticated user state. If a user is logged into our app, it is necessary to get and
            change their data throughout our application. Sometimes state we think should be local
            might become global.<b>Server state:</b> Data that comes from an external server that
            must be integrated with our UI state. Server state is a simple concept, but can be hard
            to manage alongside all of our local and global UI state. There are several pieces of
            state that must be managed every time you fetch or update data from an external server,
            including loading and error state. Fortunately there are tools such as SWR and React
            Query that make managing server state much easier.<b>URL state:</b> Data that exists on
            our URLs, including the pathname and query parameters. URL state is often missing as a
            category of state, but it is an important one. In many cases, a lot of major parts of
            our application rely upon accessing URL state. Try to imagine create a blog without
            being able to fetch a post based off of its slug or id that is located in the URL!
          </p>
        </div>
      </div>
      <div
        tabIndex={1}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-4"
      >
        <div className="collapse-title text-xl font-medium">
          How does prototypical inheritance work?
        </div>
        <div className="collapse-content">
          <p>
            JavaScript is a prototype-based, Object Oriented programming language. After the ES6
            updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and
            methods can be shared, extended, and copied. Sharing amid objects makes for easy
            inheritance of structure (data fields), behavior (functions / methods), and state (data
            values). JavaScript is the most common of the prototype-capable languages, and its
            capabilities are relatively unique. When used appropriately, prototypical inheritance in
            JavaScript is a powerful tool that can save hours of coding. Today, we want to get you
            acquainted with prototypal inheritance in JavaScript to get you up to date with the ES6
            capabilities.
          </p>
        </div>
      </div>

      <div
        tabIndex={2}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-4"
      >
        <div className="collapse-title text-xl font-medium">
          What is a unit test? Why should we write unit tests?
        </div>
        <div className="collapse-content">
          <p>
            Unit Testing is a type of software testing where individual units or components of a
            software are tested. The purpose is to validate that each unit of the software code
            performs as expected. Unit Testing is done during the development (coding phase) of an
            application by the developers. Unit Tests isolate a section of code and verify its
            correctness. A unit may be an individual function, method, procedure, module, or object.
            In SDLC, STLC, V Model, Unit testing is first level of testing done before integration
            testing. Unit testing is a WhiteBox testing technique that is usually performed by the
            developer. Though, in a practical world due to time crunch or reluctance of developers
            to tests, QA engineers also do unit testing.
          </p>
        </div>
      </div>

      <div
        tabIndex={3}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-4"
      >
        <div className="collapse-title text-xl font-medium">React vs. Angular vs. Vue?</div>
        <div className="collapse-content">
          <p>
            There are three frameworks for building web applications that
            every frontend developer has heard about: React, Vue.js, and Angular. React is a UI
            library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive
            framework. They can be used almost interchangeably to build front-end applications, but
            they’re not 100 percent the same, so it makes sense to compare them and understand their
            differences. Each framework is component-based and allows the rapid creation of UI
            features. However, they all have a different structure and architecture — so first,
            we’ll look into their architectural differences to understand the philosophy behind
            them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
