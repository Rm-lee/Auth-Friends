import React from 'react';
import Login from './components/Login'
import { Route } from 'react-router-dom'


import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/login" component={Login} />
    </div>
  );
}

export default App;
