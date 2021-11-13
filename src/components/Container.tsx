import React from "react";
import Dashboard from "./Dashboard";
const Container: React.FC = () => {
  return (
    <div>
      <div className="container__column">1</div>
      <div className="container__column">
        <Dashboard />
      </div>
    </div>
  );
};

export default Container;
