import React from "react";
import ReactDOM from "react-dom/client";

// React Functional Component
const HeadingComponent = () => (
  <div className="container">
    <h1 className="heading">Food Ordering App</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
