import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Mtab from '../Components/course';

export class CourseView extends React.Component {
  state = {};

  render() {
    return (
      <div style={{display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',}}>
        <Mtab/>
      </div>
       
    );
  }
}

export default CourseView;

