import React, { Component } from 'react';
import { Router, Route, hashHistory, Link, IndexRoute } from 'react-router';

import './index.css';

const Page = (props) =>
  <div>
    <h1>{props.location.query.message || 'Hello'}</h1>
  </div>

const Links = () =>
  <nav>
    <Link to={{ pathname: "/", query: {message: "guoyongfeng"} }} />
  </nav>

class Querys extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Page} />
      </Router>
    );
  }
}

export default Querys;
