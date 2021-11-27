import React from "react";
import AddLedger from "./AddLedger";
import Dashboard from "./Dashboard";
import LedgeLists from "./LedgerLists";
const Container: React.FC = () => {
  return (
    <div className="container">
      <div className="container__column">
        <AddLedger purpose="Expense" />
        <AddLedger purpose="Income" />
      </div>
      <div className="container__column">
        <Dashboard />
        <LedgeLists />
      </div>
    </div>
  );
};

export default Container;
