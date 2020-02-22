import React, {Component} from 'react';
import PropTypes from 'prop-types'
import BookshelfChanger from "./BookshelfChanger";

class BooksList extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onBookShelfChanged: PropTypes.func.isRequired
    };
    render() {
        return (
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {this.props.books.map(book =>
                        <li key={book.id}>
                            <BookItem book={book} onBookShelfChanged={this.props.onBookShelfChanged}/>
                        </li>
                    )}
                </ol>
            </div>
        )
    }
}

function BookItem(props) {
    const {book, onBookShelfChanged} = props;
    return <div className="book">
        <div className="book-top">
            <BookCover cover={book.imageLinks.thumbnail}/>
            <BookshelfChanger onBookShelfChanged={onBookShelfChanged} book={book}/>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.author}</div>
    </div>;
}

function BookCover(props) {
    return (<div className="book-cover" style={{
        width: 128,
        height: 193,
        backgroundImage: `url(${props.cover})`
    }}/>)
}


export default BooksList
