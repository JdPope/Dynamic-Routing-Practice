import React from 'react';
import {Link, BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import IndexPage from './indexPage.js';
import AboutPage from './aboutPage.js';

const App = () => {
  return (
    <div className="App">
        <p>
          <h1>React routing Example</h1>
        </p>
    <Router>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Route path="/" component={IndexPage}/>
      <Route path="/about" component={AboutPage}/>
    </Router>

    </div>
  );
}

export default App;
