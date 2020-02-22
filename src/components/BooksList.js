import React, { Component } from 'react';
import PropTypes from 'prop-types'

class BooksList extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onBookShelfChanged: PropTypes.func.isRequired
    };
    state = {};
    render() {
        return (
            <ol>
                {this.props.books.map(it=><li>{it.title}</li>)}
            </ol>
        )
    }
}

export default BooksList
