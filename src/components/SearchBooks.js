import React, {Component} from 'react';
import PropTypes from 'prop-types'
import BooksList from "./BooksList";
import {search} from "../BooksAPI";
import {QUERY_REGEX} from "../consts";
import { Link } from 'react-router-dom'

class SearchBooks extends Component {
    static propTypes = {
        myBooks: PropTypes.array.isRequired,
        onBookShelfChanged: PropTypes.func.isRequired
    };
    state = {
        rawQuery: "",
        queriedBooks: []
    };

    updateQuery = (query) => {
        if (this.isEmptyQuery(query)) {
            console.log("clear query");
            this.clearQuery();
            this.updateQueriedBooksState([]);
        } else if (this.isValidQuery(query)) {
            console.log("sets query");
            this.fetchSearchResults(query);
            this.setState({rawQuery: query})
        }
    };

    isEmptyQuery = (query) => (query === '' || query.trim() === '');
    isValidQuery = (query) => QUERY_REGEX.test(query + 'a');

    fetchSearchResults = (query) => {
        search(query).then((booksResponse) => {
            console.log(booksResponse);
            if (booksResponse.error)
                this.updateQueriedBooksState([])
            else if (this.state.rawQuery === query)
                this.updateQueriedBooksState(booksResponse)
        }, (e) => console.log(e))
            .catch((e) => console.log(e))
    };
    updateShelf = (books) => {
        this.props.myBooks.forEach((book) => {
            const bookIndex = books.findIndex((searchBook) => searchBook.id === book.id)
            if (bookIndex > -1)
                books[bookIndex].shelf = book.shelf

        });
        return books
    };
    updateQueriedBooksState = (books) => {
        this.setState({
            queriedBooks: this.updateShelf(books)
        })
    };
    clearQuery = () => {
        this.setState({rawQuery: ''})
    };

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                               value={this.state.rawQuery}
                               onChange={(event) => this.updateQuery(event.target.value)}
                               placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                    <BooksList books={this.state.queriedBooks}
                               onBookShelfChanged={this.props.onBookShelfChanged}/>
                </div>
            </div>
        )
    }
}

export default SearchBooks
