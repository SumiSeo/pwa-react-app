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
      <div className="dashboard__column">
        <span className="dashboard__title">Expenses</span>
        <h1 className="dashboard__number dashboard__expense">
          {dataExpensesAmount}
        </h1>
        <div className="dashboard__box"></div>
      </div>
      <div className="dashboard__column">
        <span className="dashboard__title">Income</span>
        <h1 className="dashboard__number dashboard__income"></h1>
      </div>
      <div className="dashboard__column">
        <span className="dashboard__title">Total</span>
        <h1 className="dashboard__number dashboard__total"></h1>
      </div>
    </div>
  );
};

export default Dashboard;
