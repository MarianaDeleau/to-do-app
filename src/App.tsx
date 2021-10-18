import React from 'react';
import { } from '../src/assets'
import { } from '../src/components'
import { } from '../src/hooks'
import { SignUp, AddTask, Users } from '../src/pages'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export { api } from './utils'


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
        <Route path="/" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
