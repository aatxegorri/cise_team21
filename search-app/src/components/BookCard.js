import React from "react";
import "../App.css";

const BookCard = (props) => {
  const book = props.book;

  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.year}</td>
      <td>{book.method}</td>
      <td>{book.claim}</td>
      <td>{book.strength}</td>
    </tr>
  );
};

export default BookCard;
