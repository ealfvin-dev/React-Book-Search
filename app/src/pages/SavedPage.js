import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SavedBooks from '../components/SavedBooks';
import BookAPI from '../utils/BookAPI';

function SavedPage() {
    const [results, setResults] = useState([]);

    useEffect(() => {
        BookAPI.getSavedBooks().then((books) => {
            setResults(books.data);
        })
    }, []);

    return (
        <div>
            <Header />
            <SavedBooks results={results}/>
        </div>
    )
}

export default SavedPage;