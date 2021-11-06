import React from 'react';
import { SignUpPage, AddTask, Users, EditTaskPage, Tasks, LoginPage, CategoriesPage } from '../src/pages'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
//import { Categories } from './pages/Categories';




function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/sign-up" component={SignUpPage} />
        {/* <Route path="/recovery-password" component={SignUpPage} /> */}

        
        <Route path="/users" component={Users} />
        {/* <Route path="/profile" component={Users} /> */}
        <Route path="/dashboard" component={Tasks} />
        <Route path="/edit-task" component={EditTaskPage} />
        <Route path="/add-tasks" component={AddTask} />
        <Route path="/categories" component={CategoriesPage} />
        <Route path="/" component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default App;
