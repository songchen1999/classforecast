import { Tabs } from 'antd';
import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import TabPane from './tabs';
import Demo from './tabs';

export class SemesterView extends React.Component {
  state = {};

  
  render() {
    return (
      <div>
        <h2>SemesterView</h2>
        <Demo />

        
      </div>
    
    );
  }
}

export default SemesterView;

