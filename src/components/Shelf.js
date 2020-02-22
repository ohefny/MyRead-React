import React, {Component} from "react";
import PropTypes from "prop-types";
import BooksList from "./BooksList";

class Shelf extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        title: PropTypes.string,
        onBookShelfChanged: PropTypes.func.isRequired
    };
    state = {};

    render() {
        return (
            <div className="bookshelf">
                <div className="bookshelf-title">
                    <h1>{this.props.name}</h1>
                </div>
                <BooksList className="bookshelf-books" books={this.props.books} onBookShelfChanged={this.props.onBookShelfChanged}/>
            </div>
        );
    }

}

export default Shelf
