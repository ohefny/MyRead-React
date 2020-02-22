import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {BOOK_SHELF_OPTION} from "../consts";
import {update} from "../BooksAPI";

class BookshelfChanger extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        onBookShelfChanged: PropTypes.func.isRequired
    };
    constructor(props) {
        super(props);
        this.changeBookshelf = this.changeBookshelf.bind(this)
    }
    state = {
        currentShelf:this.props.book.shelf
    };
    changeBookshelf = (shelf) => {
        const {book} = this.props;
        console.log(`onChangeShelf: ${book} ${shelf} `);
        update(book,shelf)
            .then(()=>this.props.onBookShelfChanged(book,shelf),(e)=>console.error(e))
            .catch((e)=>{console.log(e)})
    };
    render() {
        return (<div className="book-shelf-changer">
            <select value={this.state.currentShelf}
                    onChange={(event) => this.changeBookshelf(event.target.value)}>
                <option value="move" disabled>Move to...</option>
                <option value={BOOK_SHELF_OPTION.CURRENTLY_READING}>Currently Reading</option>
                <option value={BOOK_SHELF_OPTION.WANT_TO_READ}>Want to Read</option>
                <option value={BOOK_SHELF_OPTION.READ}>Read</option>
                <option value={BOOK_SHELF_OPTION.NONE}>None</option>
            </select>
        </div>)
    }
}
export default BookshelfChanger