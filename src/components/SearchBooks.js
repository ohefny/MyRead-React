import React, {Component} from 'react';
import PropTypes from 'prop-types'
import BooksList from "./BooksList";
import {search} from "../BooksAPI";

class SearchBooks extends Component {
    state = {
        rawQuery: "",
        queriedBooks: []
    };
    updateQuery = (query) => {
        const enhancedQuery = query.trim();
        console.log(enhancedQuery);
        console.log(enhancedQuery !== '');
        if(query===''||query.trim()===''){
            console.log("clear query");
            this.clearQuery();
            this.updateQueriedBooksState([]);
        }
        else if (/^[a-zA-Z0-9_]+( [a-zA-Z0-9_]+)*$/.test(query + 'a')) {
            console.log("sets query");
            this.fetchSearchResults(query);
            this.setState({rawQuery: query})
        }
    };
    fetchSearchResults = (query) => {
        search(query).then((booksResponse) => {
            console.log(booksResponse);
            if (booksResponse.error)
                this.updateQueriedBooksState([])
            else if (this.state.rawQuery === query)
                this.updateQueriedBooksState(booksResponse)
        }, (e) => console.log(e))
            .catch((e) => console.log(e))
    };
    updateQueriedBooksState = (books) => {
        this.setState({
            queriedBooks: books
        })
    };
    clearQuery = () => {
        this.setState({rawQuery: ''})
    };

    onChangeShelf = (book, shelf) => {

    };

    render() {
        //todo apply navigation of close-search instead of setState
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <button className="close-search" onClick={() => this.setState({showSearchPage: false})}>Close
                    </button>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                               value={this.state.rawQuery}
                               onChange={(event) => this.updateQuery(event.target.value)}
                               placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                    <BooksList books={this.state.queriedBooks} onBookShelfChanged={this.onChangeShelf}/>
                </div>
            </div>
        )
    }
}

export default SearchBooks
