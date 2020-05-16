import React from "react";
import axios from "axios";

function saveBook() {
    axios.post("/api/books", {});
}

function Results(props) {
    if(props.results.data) {
        return (
            <div className="results">
                <h2>Results</h2>
                <ul>
                {props.results.data.items.map((book, i) => {
                    console.log(book);
                    return (
                        <li key={i}>
                            <h4>{book.volumeInfo.title}</h4>
                            <h5>{"Author(s): " + (book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "")}</h5>
                            <br />
                            <div>
                                <img className="bookImg" height="10%" src={book.volumeInfo.imageLinks.smallThumbnail}/>
                                <p className="bookDesc">{book.volumeInfo.description}</p>
                            </div>
                            <span>
                                <button className="saveButton" onClick={saveBook}>Save</button>
                                <a href={book.volumeInfo.infoLink} target="_blank">
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
    else {
        return (<div></div>);
    }
}

export default Results;