import React, { useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SerarchBar';
import Results from '../components/Results';
import searchBooks from '../utils/API'

function SearchPage() {
    const [results, setResults] = useState([]);

    function search(query) {
        searchBooks(query).then((books) => {
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