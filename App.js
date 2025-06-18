import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const Introduction = () => (
  <h1 className="header" tabIndex="1">
    This is gayathri
  </h1>
);

// React Functional Component
const HeadingComponent = () => (
  <div className="container">
    <Introduction />
    {Introduction()}
    <h1>Hello !</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
