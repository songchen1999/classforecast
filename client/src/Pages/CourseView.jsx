import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

export class CourseView extends React.Component {
  state = {};

  render() {
    return (
      <div>
         <div>
           <h2>Course Overview</h2>
        </div>

        <div>
          <table>
            <tr>
              <th>Course Name: CS121</th>
              <th></th>
            </tr>
  
            <tr>
              <td>Website</td>
              <td>www.cs121.com</td>
            </tr>
  
            <tr>
              <td>Professor</td>
              <td>Joe Chiu</td>
            </tr>
  
            <tr>
              <td>Rate My Professor Rating</td>
              <td>4.2/5</td>
            </tr>
  
            <tr>
              <td>Credits</td>
              <td>3</td>
            </tr>
 
            <tr>
              <td>Prerequisites</td>
              <td>None</td>
            </tr>
  
            <tr>
              <td>Course Description</td>
              <td>An Intro to CompSci.</td>
            </tr>

          </table>
        </div>
      </div>
     

      
    );
  }
}

export default CourseView;
