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
  if (loading) {
    return <div></div>;
  }
  //This data could be undfinedm so I have to declare type of data either object or undfined
  console.log(data);
  console.log(typeof data);
  console.log(data && data.queryExpense);
  return (
    <div className="dashboard">
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <ul>
          <li className="dashboard__list">
            <span>Expense</span>
            {/* <p>{data}</p> */}
          </li>
          <li className="dashboard__list">
            <span>Income</span>
            {/* <p>{data}</p> */}
          </li>
          <li className="dashboard__list">
            <span>Total</span>
            {/* <p>{data}</p> */}
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
