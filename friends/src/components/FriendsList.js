import React, { Component } from 'react';
import axios from 'axios';
import FriendForm from './FriendForm';
import Friend from './Friend'


class FriendsList extends Component {
 constructor(props) {
  super(props);
  this.state = {
   friends: []
  }
 }


 componentDidMount() {
  const headers = {
			Authorization: localStorage.getItem('token'),
		}
  axios.get('http://localhost:5000/api/friends/', {headers})
    .then((response) => {
     this.setState({
      friends: response.data
     })
    })
 }
 
 render() {
  return (
   <div>
    {this.state.friends.map( friend => (
     <Friend friend={friend} key={friend.id}/>
    ))}
    <FriendForm />
   </div>
  );
 }
}

export default FriendsList;