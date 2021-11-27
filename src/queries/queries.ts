import React from "react";
import { gql } from "@apollo/client";

const QUERY_LEDGERS = gql`
  query MyQuery {
    Incomes {
      amount
      description
      id
      title
    }
    Expenses {
      amount
      id
      title
    }
  }
`;

const ADD_EXPENSE = gql`
  mutation AddExpense($amount: Int, $description: String, $title: String) {
    insert_Expenses_one(
      object: { amount: $amount, description: $description, title: $title }
    ) {
      amount
      description
      id
      title
    }
  }
`;

const ADD_INCOME = gql`
  mutation AddIncome($amount: Int, $description: String, $title: String) {
    insert_Incomes_one(
      object: { amount: $amount, description: $description, title: $title }
    ) {
      amount
      description
      id
      title
    }
  }
`;
export { QUERY_LEDGERS, ADD_EXPENSE, ADD_INCOME };
