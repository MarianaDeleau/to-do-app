import React from "react";
import ReactDOM from 'react-dom';
import App from './App';
import { AddTask, SignUp, Users } from './pages';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
        <AddTask />
  </React.StrictMode>,   
    document.getElementById("root")
);