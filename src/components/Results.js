import React from "react";

function Results(props) {
    if(props.results.data) {
        return (
            <div>
                <h2>Results</h2>
                <ul>
                {props.results.data.items.map((book, i) => {
                    console.log(book);
                    return (
                        <li key={i}>
                            {book.volumeInfo.title}
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