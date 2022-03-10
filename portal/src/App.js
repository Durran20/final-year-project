import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminHome from './Pages/Admin/AdminHome';

import facultyInterface from './Pages/Faculty/FacultyInterface';
import FacultyStudentLoginPags from './Pages/FacultyStudentLoginPags';

import StudentTestPerformace from './Pages/Student/StudentTestPerformance';

import Home from './Pages/Student/StudentHome';
import StudentAttendencePage from './Pages/Student/StudentAttendencePage';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={FacultyStudentLoginPags} />
          <Route exact path="/admin" component={AdminHome} />
          <Route exact path="/home" component={Home} />
          <Route
            exact
            path="/student/testPerformance"
            component={StudentTestPerformace}
          />
          <Route
            exact
            path="/student/attendence"
            component={StudentAttendencePage}
          />
          <Route exact path="/faculty" component={facultyInterface} />
          <Route path="*" component={FacultyStudentLoginPags} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
