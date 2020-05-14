import React, { useState } from "react";

function SearchBar() {
    const [search, setSearch] = useState();

    function handleInputChange(event) {
        setSearch(event.target.value);
    }

    return (
        <div className="searchBar">
            <h3>Book Search</h3><br/>
            <p>Book Title</p>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1"></span>
                </div>
                <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" onChange={handleInputChange} />
            </div>
            <br />
            <button type="button" class="btn btn-info">Search</button>
        </div>
    );
}

export default SearchBar;

// buttonn onClick={() => {props.searchBooks(search)}}