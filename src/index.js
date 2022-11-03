import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { default as ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log("test lwiz");

root.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
);