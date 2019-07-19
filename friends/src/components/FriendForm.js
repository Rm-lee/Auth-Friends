import React, { Component } from 'react';
import axios from 'axios'

class FriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }
  changeHandler = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  submitHandler = e => {
    e.preventDefault();

    const headers = {
      Authorization: localStorage.getItem("token")
    };
   
    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    axios
      .post('http://localhost:5000/api/friends/', {headers}, newFriend)
      .then(response => {
        console.log(response);
        this.setState({
          name: "",
          age: "",
          email: ""
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            style={styles}
            className="input"
            type="text"
            value={this.state.name}
            onChange={this.changeHandler}
            placeholder="Name"
            name="name"
          />
          <br />
          <input
            style={styles}
            className="input"
            type="text"
            value={this.state.age}
            onChange={this.changeHandler}
            placeholder="Age"
            name="age"
          />
          <br />
          <input
            style={styles}
            className="input"
            type="text"
            value={this.state.email}
            onChange={this.changeHandler}
            placeholder="Email"
            name="email"
          />
          <br />
          <button style={stylesBtn} type="submit">
            Add Friend
          </button>
        </form>
      </div>
    );
  }
}

export default FriendForm;

const styles = {
 border: 'none',
 borderBottom: '1px solid black',
 textAlign: 'center',
 margin:'5px'
 
}
const stylesBtn = {
 backgroundColor: 'white',
 border: '1px solid black',
 padding: '5px 15px',
 margin: '10px'
}