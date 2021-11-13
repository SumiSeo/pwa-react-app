import React from "react";
const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <ul>
        <li className="dashboard__list">
          <span>Expense</span>
          <p>$43</p>
        </li>
        <li className="dashboard__list">
          <span>Income</span>
          <p>$20</p>
        </li>
        <li className="dashboard__list">
          <span>Total</span>
          <p>-$23</p>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
