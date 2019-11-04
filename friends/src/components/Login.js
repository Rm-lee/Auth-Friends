import React from "react";
import axios from 'axios'
import {useState} from 'react'

function Login(props) {
  const [state, setState] = useState({
    username: "Lambda School",
    password: "i<3Lambd4",
    
  });

  function submitHandler(e){
   e.preventDefault()
   const { username, password } = state
   axios.post('http://localhost:5000/api/login', {username,password})
   .then((res) => {
    localStorage.setItem('token', res.data.payload)
    props.props.history.push('/')
   })
   .catch(err => {
    console.log(err)
   })
  }


  function handleChange(e){
   const value = e.target.value
   setState({
    ...state,
    [e.target.name]: value
   })
  }


  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={state.username}
          onChange={handleChange}
        />
        <br />
        <input
         type="password"
         name="password"
         placeholder="password"
         value={state.password}
         onChange={handleChange}
         />
         <br />
         <button type="submit">Login</button>

      </form>
    </div>
  );
}

export default Login;
