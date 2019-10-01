import React from 'react';
import {Link, BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import IndexPage from './indexPage.js';
import AboutPage from './aboutPage.js';

const users = [
  {
    name: `Param`,
  },
  {
    name: `Vennila`,
  },
  {
    name: `Afrin`,
  },
];
const UsersPage =() => {
  return (
    <>
    <h3>Users Page</h3>
    {users.map((user, index)=> (
      <h5 key={index}>
        <Link to={`/user/${index + 1}`}>{user.name}'s Page</Link>
      </h5>
    ))}
    </>
  )
}

const App = () => {
  return (
    <div className="App">
        <p>
          <h1>React routing Example</h1>
        </p>
    <Router>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/users">Users</Link>
      <Route exact path="/" component={IndexPage}/>
      <Route exact path="/about" component={AboutPage}/>
      <Route exact path="/users" component={UsersPage}/>
    </Router>

    </div>
  );
}

export default App;
