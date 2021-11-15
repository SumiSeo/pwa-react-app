import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./sass/main.scss";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://pwa-money-planning.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.querySelector("#root")
);
