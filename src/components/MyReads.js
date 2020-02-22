import React, {Component} from "react";
import {getAll} from "../BooksAPI"
import PropTypes from "prop-types";
import Shelf from "./Shelf";
import SearchBooks from "./SearchBooks";
import {BOOK_SHELF_OPTION, MY_SHELVES} from "../consts";

class MyReads extends Component {
    state = {
        myBooks: []
    };
    componentDidMount() {
        this.fetchBooks()
    }
    fetchBooks() {
        getAll().then((books) => {
            console.log(books)
            this.updateBooksState(books)
        })
    }
    updateBooksState(books) {
        this.setState({
            myBooks: books
        })
    }
    render() {
        return (
            <div className="list-books">
                <MyReadsTitle/>
                <MyShelves books={this.state.myBooks} shelvesMetaData={MY_SHELVES}/>
                <SearchButton/>
            </div>
        )
    };

}

function MyReadsTitle(props) {
    return (
        <div className="list-books-title">
            <h1>MyReads</h1>
        </div>)
}

function MyShelves(props) {
    return (
        <ol className="list-books-content">
            {props.shelvesMetaData.map(shelf =>
                <li key={shelf.id}>
                    <Shelf metadata={shelf}
                           books={props.books.filter(book => book.shelf === shelf.id)}
                           onBookShelfChanged={() => {
                           }}/>
                </li>
            )}
        </ol>
    )
}

function SearchButton(props) {
    return (
        <div className="open-search">
            <button onClick={() => this.setState({showSearchPage: true})}>Add a book</button>
        </div>
    )
}

export default MyReads
