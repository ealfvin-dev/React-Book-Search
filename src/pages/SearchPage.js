import React, { useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SerarchBar';
import Results from '../components/Results';

function SearchPage() {
    return (
        <div>
            <Header />
            <SearchBar />
        </div>
    )
}

export default SearchPage;