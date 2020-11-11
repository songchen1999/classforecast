import HomeView from './Pages/HomeView';
import SemesterView from './Pages/SemesterView';
import CourseView from './Pages/CourseView';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Nav from './Pages/Navigation';
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <div
          style={{
            marginLeft: '20%',
            marginRight: '20%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route path="/semester" component={SemesterView} />
            <Route path="/courses" component={CourseView} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
