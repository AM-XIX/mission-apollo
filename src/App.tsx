import React from 'react';
import Book from "./components/book";
import { useQuery, gql } from '@apollo/client';

export default function App() {
    return (
        <div className="App">
            <h1>Hello world</h1>
            <Book />
        </div>
    );
}