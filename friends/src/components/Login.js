import React, { Component } from 'react';

class Login extends Component {
 constructor() {
  super();
  this.state = {
   username: '',
   password: ''
  }
 }
 changeHandler = (e) => {
  e.preventDefault()
  this.setState({
   [e.target.name]: e.target.value
  })
 }
 
 render() {console.log(this.state.username)
  return (
  <form >
   <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.changeHandler} /><br />
				<input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} /><br />
   <button type="submit">Login</button>
  </form>
  );
 }
}

export default Login;