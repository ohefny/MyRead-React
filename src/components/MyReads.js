import React, {Component} from "react";
import {getAll} from "../BooksAPI"
import PropTypes from "prop-types";
import Shelf from "./Shelf";

class MyReads extends Component {
    state = {
        myBooks: [
            {
                title: "Shelf 1 Book",
                author: "Author 1 ",
                cover: "https://hackernoon.com/hn-images/1*3sCt4oZw74j4RlTH39NskQ.jpeg",
                currentShelf: 1
            },
            {
                title: "Shelf 1A Book",
                author: "Author 1 ",
                cover: "https://hackernoon.com/hn-images/1*3sCt4oZw74j4RlTH39NskQ.jpeg",
                currentShelf: 1
            },
            {
                title: "Shelf 2 Book",
                author: "Author 2 ",
                cover: "https://hackernoon.com/hn-images/1*3sCt4oZw74j4RlTH39NskQ.jpeg",
                currentShelf: 2
            },
            {
                title: "Shelf 2A Book",
                author: "Author 2 ",
                cover: "https://hackernoon.com/hn-images/1*3sCt4oZw74j4RlTH39NskQ.jpeg",
                currentShelf: 2
            },
            {
                title: "Shelf 3 Book",
                author: "Author 3 ",
                cover: "https://hackernoon.com/hn-images/1*3sCt4oZw74j4RlTH39NskQ.jpeg",
                currentShelf: 3
            },
            {
                title: "Shelf 3A Book",
                author: "Author 3 ",
                cover: "https://hackernoon.com/hn-images/1*3sCt4oZw74j4RlTH39NskQ.jpeg",
                currentShelf: 3
            },
        ]
    };

    componentDidMount() {
        this.fetchBooks()
    }

    fetchBooks() {
        //getAll().then(::this.updateBooksState())
    }

    updateBooksState(books) {
        this.setState({
            myBooks: books
        })
    }

    render() {
        return (
            <div>
                <Shelf className="bookshelf" name={"Currently Reading"}
                       books={this.state.myBooks.filter(books => books.currentShelf === 1)} onBookShelfChanged={() => {
                }}/>
                <Shelf className="bookshelf" name={"Want To Read"}
                       books={this.state.myBooks.filter(books => books.currentShelf === 2)} onBookShelfChanged={() => {
                }}/>
                <Shelf className="bookshelf" name={"Read"}
                       books={this.state.myBooks.filter(books => books.currentShelf === 3)} onBookShelfChanged={() => {
                }}/>
            </div>
        )
    }
}
export default MyReads
