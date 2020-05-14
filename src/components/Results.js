import React from "react";

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
                            <div className="bookInfo">
                                <img className="bookImg" height="10%" src={book.volumeInfo.imageLinks.smallThumbnail}/> <br/>
                                <p className="bookDesc">{book.volumeInfo.description}</p>
                            </div>
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