import React from "react";
import App from "./App";
import { StrictMode } from "react";
import { setContext } from "@apollo/client/link/context";
import { createHttpLink } from "@apollo/client/link/http";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
const authLink = setContext(() => {
  const token = localStorage.getItem("jwtToken");
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const httpLink = createHttpLink({
  uri: "http://localhost:5000",
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default (
  <ApolloProvider client={client}>
    <StrictMode>
      <App />
    </StrictMode>
  </ApolloProvider>
);
