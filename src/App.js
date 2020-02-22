import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from "./components/SearchBooks";
import MyReads from "./components/MyReads";
import {getAll} from "./BooksAPI";

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
        this.fetchBooks();
    };

    render() {
        return (
            <div className="app">
                {this.state.showSearchPage ?
                    <SearchBooks onBookShelfChanged={this.onBookShelfChanged}/>
                    : <MyReads myBooks={this.state.myBooks} onBookshelfChanged={this.onBookShelfChanged}/>
                }
            </div>
        )
    }
}

export default BooksApp
