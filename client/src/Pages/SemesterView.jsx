import React from 'react';
import Mtab from '../Components/mtabs';
import axios from 'axios';
import Loading from '../Components/loading'

export class SemesterView extends React.Component {
  state = {
    courses: {}
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:5000/course-offering`)
      .then(res => {
        const courses = res.data;
        this.setState({courses});
      })
  }

  render() {
    if(this.state.courses['100']==undefined){
      return <Loading/>
    }
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Mtab courses = {this.state.courses}/>
      </div>
    );
  }
}

export default SemesterView;
