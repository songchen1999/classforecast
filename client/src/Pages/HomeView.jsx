import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import { Button, Typography, Divider } from 'antd';
//const { Title, Paragraph, Text, Link } = Typography;

export class HomeView extends React.Component {
  state = {};

  render() {
    return (
      <Router>
        <div>
          <h2>UMass CICS Course Scheduler</h2>
          <h2>Overview of Semesters</h2>
        </div>
        <p>
          Spring 2021
        </p>
        <Button href="semester/spring2021">View</Button>
        <Divider />
        <p>
          Fall 2020
        </p>
        <Button href="semester/fall2020">View</Button>
        <Divider />
        <p>
          Spring 2020
        </p>
        <Button href="semester/spring2020">View</Button>
      </Router>
    );
  }
};

export default HomeView;
