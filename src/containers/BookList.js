import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  state = {
    title: "",
    author: "",
    imgUrl: "",
    newBook: {}

  } 

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, () => console.log(this.state))
  }

  // titleChange = (event) => {
  //   this.setState({
  //     title: event.target.value
  //   }, () => console.log(this.state.title))
  // }

  // imgChange = (event) => {
  //   this.setState({
  //     imgUrl: event.target.value
  //   })
  // }

  handleSubmit = (event) => {
    console.log('submit clicked')
    event.preventDefault()
    this.setState({
      newBook: {
        title: this.state.title,
        author: this.state.author,
        imgUrl: this.state.imgUrl
      }
    }, () => console.log('new book', this.state.newBook)
    )
  }

  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form title={this.state.title}
        imgUrl={this.state.imgUrl}
        newBook={this.state.newBook}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        addBook={this.props.addBook} />
        <ul>{
          this.props.books.map(b => <Book book={b} chooseBook={this.props.chooseBook} />)
        }</ul>
      </div>
    );
  }
}

export default BookList;
