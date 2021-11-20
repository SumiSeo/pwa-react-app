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
  Expenses: QueryExpense[];
}

const Dashboard = () => {
  const { loading, data } = useQuery<QueryExpenseData>(QUERY_EXPENSES);

  if (loading) {
    return <div></div>;
  }

  const dataExpenses = data ? data.Expenses : undefined;
  console.log("data and more", dataExpenses);

  const dataExpensesAmount = dataExpenses
    ?.map((dataExpense) => dataExpense.amount)
    .reduce((acc, cur) => acc + cur);

  return (
    <div className="dashboard">
      <div>
        <span>Expenses</span>
        <h1>{dataExpensesAmount}</h1>
      </div>
      <div>
        <span>Income</span>
        <h1></h1>
      </div>
      <div>
        <span>Total</span>
        <h1></h1>
      </div>
    </div>
  );
};

export default Dashboard;
