import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from "./components/SearchBooks";
import MyReads from "./components/MyReads";
import {getAll} from "./BooksAPI";
import {Route} from 'react-router-dom'
import {BOOK_SHELF_OPTION} from "./consts";

class BooksApp extends React.Component {
    state = {
        myBooks: []
    };

    constructor(props) {
        super(props);
        this.onBookShelfChanged = this.onBookShelfChanged.bind(this);
    }

    componentDidMount() {
        this.fetchBooks()
    }

    fetchBooks = () => {
        getAll().then((books) => {
            console.log(books);
            this.updateBooksState(books)
        })
    };
    updateBooksState = (books) => {
        this.setState({
            myBooks: books
        })
    };
    onBookShelfChanged = (book, shelf) => {
        const newBooks=this.removeBook(book);
        book.shelf=shelf;
        if(shelf!==BOOK_SHELF_OPTION.NONE)
            newBooks.push(book)
        this.updateBooksState(newBooks)
    };
    removeBook=(book)=> {
        return this.state.myBooks.filter((myBook) => (myBook.id !== book.id));
    };

    render() {
        return (
            <div>
                <Route exact path='/' render={() => (
                    <MyReads myBooks={this.state.myBooks} onBookshelfChanged={this.onBookShelfChanged}/>
                )}/>
                <Route path='/search' render={({ history }) => (
                    <SearchBooks myBooks={this.state.myBooks} onBookShelfChanged={this.onBookShelfChanged}/>
                )}/>
            </div>
        )

    }
}

export default BooksApp
