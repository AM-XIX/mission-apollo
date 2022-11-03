import React from 'react';
import {GET_BOOKS} from '../queries/books';
import { useQuery } from '@apollo/client';


interface book {
  id: string;
  title: string;
  author: string;
  rate: number;
}

export default function Book() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.books.map((book: book) => (
    <div key={book.id}>
      <p>{book.title}</p>
      <p>{book.author}</p>
      <p>{book.rate}</p>
    </div>
  ));
}