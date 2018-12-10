<div align="center">
    <h1>MyReads: A Book Tracking App </h1>
Udacity FEND Nanodegree Project 7
</div>

## Overview
In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

* Currently Reading
* Want to Read
* Read

Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. Note that the default value for the control should always be the current shelf the book is in.

The main page also has a link to /search, a search page that allows you to find books to add to your library.

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library.

When a book is on a bookshelf, it should have the same state on both the main application page and the search page.

The search page also has a link to / (the root URL), which leads back to the main page.

When you navigate back to the main page from the search page, you should instantly see all of the selections you made on the search page in your library.


## How to view
- Clone the repository `git clone https://github.com/ChidinmaKO/My-Reads.git`
- Install dependencies using `npm install`
- Run using `npm start`
- Visit `http://localhost:3000` in your browser


## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.


## Built With
- [JSX](https://jsx.github.io/)
- [React](https://reactjs.org/)
- [BooksAPI](https://github.com/udacity/reactnd-project-myreads-starter/blob/master/src/BooksAPI.js)
- [Create React App](https://github.com/facebookincubator/create-react-app)
- [Prop-types](https://www.npmjs.com/package/prop-types)
- [Sort-by](https://www.npmjs.com/package/sort-by)
- [React-router-dom](https://www.npmjs.com/package/react-router-dom)
- CSS
