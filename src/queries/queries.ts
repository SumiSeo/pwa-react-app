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

export { QUERY_EXPENSES };
