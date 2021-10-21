import React from 'react';
import { SignUp, AddTask, Users, EditTask, Tasks } from '../src/pages'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={SignUp} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/recovery-password" component={SignUp} />

        <Route path="/users" component={Users} />
        <Route path="/profile" component={Users} />
        <Route path="/add-tasks" component={AddTask} />
        <Route path="/edit-task" component={EditTask} />
        <Route path="/tasks" component={Tasks} />
        <Route path="/" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
