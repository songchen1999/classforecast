import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

export class HomeView extends React.Component {
  state = {};

  render() {
    return (
      <Router>
        <div>
          <h2>This is the HomeView webpage</h2>
        </div>
      </Router>
    );
  }
}

export default HomeView;
