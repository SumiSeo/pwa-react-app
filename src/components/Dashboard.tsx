import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_LEDGERS } from "../queries/queries";

interface QueryLedger {
  amount: number;
  description: string;
  id: number;
  title: string;
}

interface QueryLedgerData {
  Expenses: QueryLedger[];
  Incomes: QueryLedger[];
}

const Dashboard = () => {
  const { loading, data } = useQuery<QueryLedgerData>(QUERY_LEDGERS);
  if (loading) {
    return <div></div>;
  }
  console.log(data);
  const dataExpenses = data ? data.Expenses : undefined;
  const dataIncomes = data ? data.Incomes : undefined;

  const dataExpensesAmount = dataExpenses
    ?.map((dataExpense) => dataExpense.amount)
    .reduce((acc, cur) => acc + cur, 0);

  const dataIncomesAmount = dataIncomes
    ?.map((dataIncome) => dataIncome.amount)
    .reduce((acc, cur) => acc + cur, 0);

  const dataTotalIncome =
    dataIncomesAmount !== undefined ? dataIncomesAmount : 0;

  const dataTotalExpense =
    dataExpensesAmount !== undefined ? dataExpensesAmount : 0;

  const dataTotal = dataTotalIncome - dataTotalExpense;

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
        <span className="dashboard__title">Incomes</span>
        <h1 className="dashboard__number dashboard__income">
          {dataIncomesAmount}
        </h1>
        <div className="dashboard__box"></div>
      </div>
      <div className="dashboard__column">
        <span className="dashboard__title">Total</span>
        <h1 className="dashboard__number dashboard__total">{dataTotal}</h1>
        <div className="dashboard__box"></div>
      </div>
    </div>
  );
};

export default Dashboard;
