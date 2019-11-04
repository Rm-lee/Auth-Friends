import React from 'react';
import {useState,useEffect} from 'react'
import axios from 'axios'
import FriendForm from './FriendForm'
function FriendsList(props) {

 const [friends, setFriends] = useState([])

 function updateFriends(newFriends){
  setFriends(newFriends)
 }

 useEffect(() => {
  const headers = {
   Authorization: localStorage.getItem('token'),}

   axios.get('http://localhost:5000/api/friends/',{headers})
   .then((res) => {
    setFriends(res.data)
   })
   .catch(err => {
    console.log(err)
   })
  
}, []);


return (
  <div>
   {friends.map( friend => (
    <h1>{friend.name}</h1>
    
   ))}
   <FriendForm props={props} update={updateFriends}/>
  </div>
 );
}

export default FriendsList;