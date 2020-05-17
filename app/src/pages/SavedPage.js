import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SavedBooks from '../components/SavedBooks';
import BookAPI from '../utils/BookAPI';

function SavedPage() {
    return (
        <div>
            <Header />
            <SavedBooks />
        </div>
    )
}

export default SavedPage;