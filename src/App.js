import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks';
import './App.css'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
      .catch(error => {
        console.log(error);
      })
  }

  // update Bookshelf
  updateBookShelf = (book, shelfTitle) => {
    const bookState = this.state.books.find(b => b.id === book.id);

    if(bookState) {
      bookState.shelf = shelfTitle;
      BooksAPI.update(book, shelfTitle)
      .then(this.setState(currentState => ({
        books: currentState.books
      })))
    } else {
      book.shelf = shelfTitle;
      BooksAPI.update(book, shelfTitle)
      .then(this.setState(prevState => ({
        books: prevState.books.concat(book)
      })))
    }
  };


  render= () => {
    return(
      <div className="app">

      {/* search page */}
      <Route path='/search' render={() => (
        <SearchBooks
        books = {this.state.books}
        onUpdateBookShelf = {this.updateBookShelf}
        />
      )}/>

      {/* books page */}
      <Route exact path='/' render={() => (
        <ListBooks
        books = {this.state.books}
        onUpdateBookShelf = {this.updateBookShelf}
        />
      )}/>
      </div>
    );
  }


}
export default BooksApp;
