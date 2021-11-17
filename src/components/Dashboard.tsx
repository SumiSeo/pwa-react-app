import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_EXPENSES } from "../queries/queries";
interface QueryExpense {
  amount: number;
  description: string;
  id: number;
  title: string;
}

interface QueryExpenseData {
  queryExpense: QueryExpense[];
}

const Dashboard = () => {
  const { loading, data } = useQuery<QueryExpenseData>(QUERY_EXPENSES);
  if (!loading) {
    console.log("data", data);
    console.log("query", data);
  }

  return (
    <div className="dashboard">
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <ul>
          <li className="dashboard__list">
            <span>Expense</span>
            <p>{data && data.queryExpense}</p>
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
      )}
    </div>
  );
};

export default Dashboard;
