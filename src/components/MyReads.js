import React, {Component} from "react";
import PropTypes from "prop-types";
import Shelf from "./Shelf";
import {MY_SHELVES} from "../consts";
import { Link } from 'react-router-dom'

class MyReads extends Component {
    static propTypes = {
        myBooks:PropTypes.array.isRequired,
        onBookshelfChanged:PropTypes.func.isRequired
    };
    render() {
        return (
            <div className="list-books">
                <MyReadsTitle/>
                <MyShelves books={this.props.myBooks} shelvesMetaData={MY_SHELVES} onBookshelfChanged={this.props.onBookshelfChanged}/>
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
                           shelfBooks={props.books.filter(book => book.shelf === shelf.id)}
                           onBookShelfChanged={props.onBookshelfChanged}/>
                </li>
            )}
        </ol>
    )
}

function SearchButton(props) {
    return (
        <div className="open-search">
            <Link className="open-search" to='/search'>Add a book</Link>
        </div>
    )
}

export default MyReads
