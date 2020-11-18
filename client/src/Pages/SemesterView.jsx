import React from 'react';
import Mtab from '../Components/mtabs';
import axios from 'axios';
import Loading from '../Components/loading';

export class SemesterView extends React.Component {
  state = {
    courses: {},
    courseDescriptions: {},
  };

  componentDidMount() {
    axios.get(`http://localhost:5000/course-offering`).then(res => {
      const courses = res.data;
      this.setState({courses});
    });
    axios.get(`http://localhost:5000/course-description`).then(res => {
      const courseDescriptions = res.data;
      this.setState({courseDescriptions});
    });
  }

  render() {
    if (this.state.courses['100'] === undefined) {
      return <Loading />;
    }

    let {courses, courseDescriptions} = this.state;
    console.log(courseDescriptions['courses']);

    let springCourseNumbers = courseDescriptions['courses'].map(course => {
      return course.id;
    });

    var updatedSpringCourses = {
      '100': [],
      '200': [],
      '300': [],
      '400': [],
      '500+': [],
      CICS: [],
    };
    console.log(courses);
    for (var level of Object.keys(courses)) {
      for (let i = 0; i < courses[level].length; ++i) {
        console.log(courses[level][i].number);
        if (springCourseNumbers.includes(courses[level][i].number)) {
          updatedSpringCourses[level].push(courses[level][i]);
        }
      }
    }
    console.log(updatedSpringCourses);

    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Mtab courses={updatedSpringCourses} />
      </div>
    );
  }
}

export default SemesterView;
