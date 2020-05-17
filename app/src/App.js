import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import SearchPage from './pages/SearchPage';
import SavedPage from './pages/SavedPage';

function App() {
  return (
    <Router>
      <Route exact path="/" component={SearchPage} />
      <Route exact path="/search" component={SearchPage} />
      <Route exact path="/saved" component={SavedPage} />
    </Router>
  );
}

export default App;
