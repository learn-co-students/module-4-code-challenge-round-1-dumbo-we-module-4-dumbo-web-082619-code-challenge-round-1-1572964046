import React from "react";

class Form extends React.Component {
  render() {
    return (
    <h1>Add a Book!</h1>,
    <form onSubmit={this.props.handleSubmit}>
      title:
    <input type="text" name="title" value={this.props.title} onChange={this.props.handleChange}></input>
    author:
    <input type="text" name="author" value={this.props.author} onChange={this.props.handleChange}></input>
    img url:
    <input type="text" name="imgUrl" value={this.props.imgUrl} onChange={this.props.handleChange}></input>
    <input type="submit" value="submit"></input>
    </form>


    )
  }
}

export default Form;
