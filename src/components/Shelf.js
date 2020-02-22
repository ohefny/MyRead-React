import React, {Component} from "react";
import PropTypes from "prop-types";
import BooksList from "./BooksList";

class Shelf extends Component {
    static propTypes = {
        shelfBooks: PropTypes.array.isRequired,
        metadata: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
        }),
        onBookShelfChanged: PropTypes.func.isRequired
    };
    state = {};

    render() {
        return (
            <div className="bookshelf">
                <div className="bookshelf-title">
                    <h1>{this.props.metadata.title}</h1>
                </div>
                <BooksList books={this.props.shelfBooks}
                           onBookShelfChanged={this.props.onBookShelfChanged}/>
            </div>
        );
    }

}

export default Shelf
