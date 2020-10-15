import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import client from "./apollo";
import { ApolloProvider } from "@apollo/client";

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);

