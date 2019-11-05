import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  console.log('bookshelf props', props.shelf)
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{
        props.shelf.map(b => <Book book={b} byeBook={props.byeBook} />)
      }</ul>
    </div>
  );
};

export default Bookshelf;
