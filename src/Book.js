import React from 'react';
import PropTypes from 'prop-types'



// Here we update the shelf
const Book = ({ book, updateBookShelf }) => {

    return(
        <div key={book.id} className='book'>
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 192, 
                    backgroundImage: (book.imageLinks) ? `url(${book.imageLinks.thumbnail})` : `none` }}>
                </div>

                <div className="book-shelf-changer">
                    <select value={book.shelf ? book.shelf : 'none'}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>

            <div className='book-title'>{book.title}</div>

            {book.authors ? (book.authors.length > 1 ? (book.authors.map((author) => (
                <div key={author} className='book-authors'>{author}</div>
            )))
            : (<div className='book-authors'>{book.authors}</div>)
            ): (<div className='book-authors'>Unknown Author</div>)}
        </div>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    updateBookShelf: PropTypes.func.isRequired
};

export default Book;