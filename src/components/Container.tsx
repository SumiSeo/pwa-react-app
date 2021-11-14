import React from "react";
import AddLedger from "./AddLedger";
import Dashboard from "./Dashboard";
const Container: React.FC = () => {
  return (
    <div className="container">
      <div className="container__column">
        <AddLedger title="Expense" />
        <AddLedger title="Income" />
      </div>
      <div className="container__column">
        <Dashboard />
      </div>
    </div>
  );
};

export default Container;
