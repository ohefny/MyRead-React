import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {BOOK_SHELF_OPTION} from "../consts";
import {update} from "../BooksAPI";

class BooksList extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onBookShelfChanged: PropTypes.func.isRequired
    };
    state = {};

    constructor(props) {
        super(props);
        this.changeBookshelf= this.changeBookshelf.bind(this)
    }
    changeBookshelf = (book, shelf) => {
        console.log(`onChangeShelf: ${book} ${shelf} `);
        update(book,shelf)
            .then(()=>{console.log("updated")},(e)=>{console.error(e)})
            .then(this.props.onBookShelfChanged(book,shelf))
            .catch((e)=>{console.log(e)})
    };
    render() {
        return (
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {this.props.books.map(book =>
                        <li key={book.id}>
                            <BookItem book={book} changeBookshelf={this.changeBookshelf}/>
                        </li>
                    )}
                </ol>
            </div>
        )
    }
}

function BookItem(props) {
    const {book, changeBookshelf} = props;
    return <div className="book">
        <div className="book-top">
            <BookCover cover={book.imageLinks.thumbnail}/>
            <BookshelfChanger onBookShelfChanged={changeBookshelf} book={book}/>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.author}</div>
    </div>;
}

function BookshelfChanger(props) {
    return (<div className="book-shelf-changer">
        <select defaultValue={props.book.currentShelf}
                onChange={(event) => props.onBookShelfChanged(props.book, event.target.value)}>
            <option value="move" disabled>Move to...</option>
            <option value={BOOK_SHELF_OPTION.CURRENTLY_READING}>Currently Reading</option>
            <option value={BOOK_SHELF_OPTION.WANT_TO_READ}>Want to Read</option>
            <option value={BOOK_SHELF_OPTION.READ}>Read</option>
            <option value={BOOK_SHELF_OPTION.NONE}>None</option>
        </select>
    </div>)
}

function BookCover(props) {
    return (<div className="book-cover" style={{
        width: 128,
        height: 193,
        backgroundImage: `url(${props.cover})`
    }}/>)
}


export default BooksList
