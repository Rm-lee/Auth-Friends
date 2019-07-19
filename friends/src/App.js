import React from 'react';
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import FriendsList from './components/FriendsList'
import { Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
     <PrivateRoute exact path="/" component={FriendsList} />
     <Route exact path="/login" component={Login} />
    </div>
  );
}

export default App;
