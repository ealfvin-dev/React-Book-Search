import React from 'react';
import BookAPI from '../utils/BookAPI';

function SavedBooks(props) {
    function deleteBook(id) {
        BookAPI.deleteBook(id);
    }

    return (
        <div className="results">
            <h2>Saved Books</h2>
            <ul>
            {props.results.map((book, i) => {
                console.log(book);
                return (
                    <li key={i}>
                        <h4>{book.title}</h4>
                        <h5>{"Author(s): " + (book.authors ? book.authors.join(", ") : "")}</h5>
                        <br />
                        <div>
                            <img className="bookImg" height="10%" src={book.image}/>
                            <p className="bookDesc">{book.description}</p>
                        </div>
                        <span>
                            <button className="saveButton" onClick={() => {deleteBook(book._id)}}>Delete</button>
                            <a href={book.link} target="_blank">
                                <button className="viewButton">View</button>
                            </a>
                        </span>
                    </li>
                )
            })}
            </ul>
        </div>
    );
}

export default SavedBooks;