import React, { useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SerarchBar';
import Results from '../components/Results';
import BookAPI from '../utils/BookAPI';

function SearchPage() {
    const [results, setResults] = useState([]);

    function search(query) {
        BookAPI.searchBooks(query).then((books) => {
            setResults(books);
        });
    }

    return (
        <div>
            <Header />
            <SearchBar searchBooks={search}/>
            <Results results={results}/>
        </div>
    )
}

export default SearchPage;