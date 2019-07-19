import React, { Component } from 'react';
import axios from 'axios'
class Login extends Component {
 constructor() {
  super();
  this.state = {
   username: 'Lambda School',
   password: 'i<3Lambd4',
   isLoading: false
  }
 }
 changeHandler = (e) => {
  e.preventDefault()
  this.setState({
   [e.target.name]: e.target.value
  })
 }
 
 submitHandler = (e) => {
  e.preventDefault()
  const { username, password } = this.state
  axios.post('http://localhost:5000/api/login',{username, password})
  .then((response) => {
    localStorage.setItem('token',response.data.payload)
    this.props.history.push('/')
  })
  
  .catch((err) => {
   console.log(err)
  })
 }
 render() {
  return (
  <form onSubmit={this.submitHandler}>
   <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.changeHandler} /><br />
				<input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} /><br />
   <button type="submit">Login</button>
  </form>
  );
 }
}

export default Login;