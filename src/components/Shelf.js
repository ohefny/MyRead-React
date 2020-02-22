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
            <div>
                <div className="list-books-title">
                    <h1>{this.props.name}</h1>
                </div>
                <BooksList books={this.props.books} onBookShelfChanged={this.props.onBookShelfChanged}/>
            </div>
        );
    }

}

export default Shelf
