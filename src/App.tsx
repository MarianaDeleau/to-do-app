import React from 'react';
import { SignUp, AddTask, Users, EditTask, Tasks, LoginPage } from '../src/pages'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/recovery-password" component={SignUp} />

        <Route path="/users" component={Users} />
        <Route path="/profile" component={Users} />
        <Route path="/dashboard" component={Tasks} />
        <Route path="/edit-task" component={EditTask} />
        <Route path="/add-tasks" component={AddTask} />
        <Route path="/" component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default App;
