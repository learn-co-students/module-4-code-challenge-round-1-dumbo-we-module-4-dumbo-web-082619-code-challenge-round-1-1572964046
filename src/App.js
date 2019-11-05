import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    shelf: [],
  }

  componentDidMount() {
    fetch('http://localhost:3005/books')
    .then(resp => resp.json())
    .then(data => this.setState({
      books: data
    }))
  }

  chooseBook = (book) => {
    this.setState({
      shelf: [...this.state.shelf, book]
    }, () => console.log(this.state.shelf))
  }

  byeBook = (book) => {
    this.setState({
      shelf: this.state.shelf.filter(b => b !== book)
    })
  }

  addBook = (nBook) => {
    this.setState({
      books: [...this.state.book, nBook]
    })
  }

  render() {
    console.log('books', this.state.books)
    return (
      
      
      <div className="book-container">
        <BookList books={this.state.books} chooseBook={this.chooseBook} addBook={this.addBook}/>
        <Bookshelf shelf={this.state.shelf} byeBook={this.byeBook}/>
      </div>
    );
  }
}

export default App;
