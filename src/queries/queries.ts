import React from "react";
import { gql } from "@apollo/client";

const QUERY_EXPENSES = gql`
  query MyQuery {
    Expenses {
      amount
      description
      id
      title
    }
  }
`;

const QUERY_INCOMES = gql`
  query MyQuery {
    Incomes {
      amount
      description
      id
      title
    }
  }
`;

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

export { QUERY_EXPENSES, QUERY_INCOMES, QUERY_LEDGERS };
