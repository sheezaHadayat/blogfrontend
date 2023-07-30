import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CreateBlog from './component/CreateBlog';
import ViewBlogs from './component/ViewBlogs';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Create Blogs</Link>
          </li>
          <li>
            <Link to="/view">View Blogs</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={CreateBlog} />
        <Route path="/view" component={ViewBlogs} />
      </Switch>
    </Router>
  );
};

export default App;
