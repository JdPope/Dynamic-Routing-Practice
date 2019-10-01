import React from 'react';
import {Link, BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import IndexPage from './indexPage.js';
import AboutPage from './aboutPage.js';

const users = [
  {
    name: `Jesse`,
    greeting: 'hello'
  },
  {
    name: `Sarah`,
  },
  {
    name: `David`,
  },
  {name: 'Josh',
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

const UserPage = ({ match, location }) => {
  const { params: { userId } } = match;

  return (
    <>
      <p>
        <strong>User ID: </strong>
        {userId}
      </p>
      <p>
        <strong>User Name: </strong>
        {users[userId - 1].name}
      </p>
      <p>
        <strong>Greeting: </strong>
        {users[userId - 1].greeting}
      </p>
    </>
  );
};

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
      <Route path="/user/:userId" component={UserPage} />
    </Router>

    </div>
  );
}

export default App;
