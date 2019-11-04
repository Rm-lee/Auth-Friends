import React from 'react';
import {useState} from 'react'
import axios from 'axios';
function FriendForm(props) {
 const [state, setState] = useState({
  name:"",
  age:"",
  email:""
 })
 
 function submitHandler(e){
  e.preventDefault()
  const token = localStorage.getItem('token')
  const {name,age,email} = state
  const newFriend = {
   name:name,
   age:age,
   email:email
  }
  axios.post('http://localhost:5000/api/friends/', newFriend,{headers: {
   Authorization: token
  }})
  .then(res => {
   setState({
    name:'',
    age:'',
    email:'',
   })
   console.log(props)

   props.history.push('/')
  })
  .catch(err => {
   console.log(err)
  })
 }

 function handleChange(e){
  setState({
   ...state, 
   [e.target.name]: e.target.value
  })
 }
 return (
  <div>
     <form onSubmit={submitHandler}>
          <input
            type="text"
            value={state.name}
            onChange={handleChange}
            placeholder="Name"
            name="name"
          />
          <br />
          <input
            type="text"
            value={state.age}
            onChange={handleChange}
            placeholder="Age"
            name="age"
          />
          <br />
          <input
            type="text"
            value={state.email}
            onChange={handleChange}
            placeholder="Email"
            name="email"
          />
          <br />
          <button type="submit">Add Friend</button>
        </form>
  </div>
 );
}

export default FriendForm;