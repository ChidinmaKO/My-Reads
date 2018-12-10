import React, { Component } from 'react';
import PropTypes from 'prop-types'
import sortBy from 'sort-by'
import { Link } from 'react-router-dom'
import './App.css'
import Book from './Book'

// Here we list the books

const shelves = [
    {
        key: 'currentlyReading',
        name: 'Currently Reading'
    },
    {
        key: 'wantToRead',
        name: 'Want To Read'
    },
    {
        key: 'read',
        name: 'Read'
    }
];

class ListBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdateBookShelf: PropTypes.func.isRequired
    }

    render() {
        const { books, onUpdateBookShelf } = this.props

        function getBooks(shelfKey) {
            // const match = new RegExp(escapeRegExp(shelfKey), 'i')
            return books.filter(book => book.shelf === shelfKey)
            .sort(sortBy('authors'))
        }

        return(

            <div className='list-books'>
                <div className='list-books-title'>
                    <h1>My Reads</h1>
                </div>

                <div className='list-books-content'>
                    <div>
                        {/* we are mapping over the list of shelves and books */}
                        { shelves.map((shelf) => (
                            <div key={shelf.key} className='bookshelf'>
                                <h2 className="bookshelf-title">{ shelf.name }</h2>
                                
                                {/* if no books are found */}
                                { getBooks(shelf.key).length === 0 ? (
                                    <div>
                                        <h4> There are no books in the {shelf.name} shelf</h4>
                                    </div>
                                ) : (
                                    // if there are books in the shelf return
                                    <div className="bookshelf-books">
                                        <ol className="books-grid">
                                            { getBooks(shelf.key).map((book) => (
                                                <li key={book.id}>
                                                    <Book key={book.title}
                                                    book = {book}
                                                    updateBookShelf = {onUpdateBookShelf}/>
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                        
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className='open-search'>
                    <Link
                        to='/search'
                    > Search For Books
                    </Link>
                </div>
            </div>
        )
    }
}

export default ListBooks;