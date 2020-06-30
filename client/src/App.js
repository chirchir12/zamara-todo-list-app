import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Register from './components/Register/Register';
import NavBar from './components/Navbar/NavBar';
import Login from './components/Login/Login';
import Todos from './components/Todos/Todos';
import CreateTodo from './components/Todos/CreateTodo';
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/user/login" component={Login} />
          <Route exact path="/user/register" component={Register} />
          <Route exact path="/todos" component={Todos} />
          <Route exact path="/todos/create" component={CreateTodo} />
          <Route component={Todos} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
