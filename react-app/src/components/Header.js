import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
          <div className="container">
              <h1 className="display-4">React Book Search</h1>
              <p className="lead">Search for and save books using the Google books API</p>
          </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">📚</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/search">
              Search
            </Link>
            <Link to="/saved">
              Saved Books
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;